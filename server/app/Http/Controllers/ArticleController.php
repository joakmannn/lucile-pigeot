<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\Http;

class ArticleController extends Controller
{
    // Affichage de la liste des articles
    public function index(Request $request)
    {
        $articles = Article::all();
         // Si la requête est une requête d'API (JSON), retourner les compétences en JSON
         if ($request->wantsJson()) {
            return response()->json($articles);
        }
        return view('admin.article.home', compact('articles'));
    }

    // Affichage du formulaire pour ajouter un nouvel article
    public function create()
    {
        return view('admin.article.create');
    }

    // Sauvegarder un article via son docId
    public function save(Request $request)
    {
        $request->validate([
            'docId' => 'required|string',
            'url' => 'nullable|url',
        ]);

        $docId = $request->input('docId');

        // Requête pour récupérer les informations pertinentes (titre, auteurs, docID, publisher)
        $response = Http::get("https://api.archives-ouvertes.fr/search/?q=docid:" . $docId . "&wt=json&fl=title_s,authFullName_s,docid,publisher_s");

        // Vérification si la requête a réussi et si des données sont présentes
        if ($response->successful() && !empty($response->json()['response']['docs'])) {
            $articleData = $response->json()['response']['docs'][0];

            // Vérification si l'article existe déjà dans la base de données
            if (Article::where('doc_id', $docId)->exists()) {
                return back()->withErrors(['docId' => 'Article already exists in the database.']);
            }

            // Création d'un nouvel article
            $article = new Article();
            $article->doc_id = $docId; // Stocker l'identifiant complet avec la version
            $article->url = $request->input('url');  // Enregistrer l'URL si présente

            // Extraction du titre
            $article->title = $articleData['title_s'][0] ?? 'No Title';

            // Extraction des auteurs (le champ 'authFullName_s' contient la liste des auteurs)
            $article->creators = isset($articleData['authFullName_s']) ? implode(', ', $articleData['authFullName_s']) : 'Unknown Author';

            // Extraction de l'éditeur (publisher)
            $article->publisher = $articleData['publisher_s'][0] ?? 'Unknown Publisher';

            // Sauvegarde de l'article dans la base de données
            $article->save();

            return redirect()->route('admin.articles')->with('success', 'Article added successfully.');
        } else {
            return back()->withErrors(['docId' => 'Article not found in HAL API.']);
        }
    }

    // Affichage du formulaire d'édition d'un article
    public function edit($id)
    {
        $article = Article::findOrFail($id);
        return view('admin.article.edit', compact('article'));
    }

    // Mise à jour d'un article
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|in:Article de conférence,Article de revue',
        ]);

        $article = Article::findOrFail($id);
        $article->title = $request->input('title');
        $article->type = $request->input('type');
        $article->save();

        return redirect()->route('admin.articles')->with('success', 'Article mis à jour avec succès.');
    }

    // Suppression d'un article
    public function delete($id)
    {
        $article = Article::findOrFail($id);
        $article->delete();

        return redirect()->route('admin.articles')->with('success', 'Article deleted successfully.');
    }

    // Nouvelle méthode pour récupérer les articles d'un auteur spécifique
    public function fetchArticlesByAuthor()
    {
        $authorId = 'lucile-pigeot';

        // Effectuer la requête à l'API HAL pour récupérer les articles de l'auteur
        $response = Http::get("https://api.archives-ouvertes.fr/search/", [
            'wt' => 'json',
            'q' => 'authIdHal_s:' . $authorId
        ]);

        if ($response->successful() && !empty($response->json()['response']['docs'])) {
            $articles = $response->json()['response']['docs'];
            return view('admin.article.author_articles', compact('articles'));
        } else {
            return back()->withErrors(['error' => 'No articles found for the author.']);
        }
    }
}

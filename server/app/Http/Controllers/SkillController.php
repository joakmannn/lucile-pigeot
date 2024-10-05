<?php
namespace App\Http\Controllers;

use App\Models\Skill;
use App\Models\Method; // Import du modèle Method
use Illuminate\Http\Request;

class SkillController extends Controller
{
    // Affiche la liste des compétences avec leurs méthodes
    public function index(Request $request)
    {
        $skills = Skill::with('methods')->get();

        // Si la requête est une requête d'API (JSON), retourner les compétences en JSON
        if ($request->wantsJson()) {
            return response()->json($skills);
        }

        // Sinon, retourner la vue pour l'administration
        return view('admin.skills.index', compact('skills'));
    }
    // Affiche le formulaire de création d'une compétence
    public function create()
    {
        return view('admin.skills.create');
    }
    
    // Affiche le formulaire d'édition d'une compétence
    public function edit(Skill $skill)
    {
        return view('admin.skills.edit', compact('skill'));
    }

    // Met à jour la compétence dans la base de données
    public function update(Request $request, Skill $skill)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $skill->update($request->all());

        return redirect()->route('admin.skills.index')->with('success', 'Compétence mise à jour avec succès.');
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        Skill::create($request->all());

        return redirect()->route('admin.skills.index')->with('success', 'Compétence créée avec succès.');
    }

    // Supprime une compétence et ses méthodes associées
    public function destroy($id)
{
    $skill = Skill::findOrFail($id);

    // Supprimer les méthodes associées si nécessaire
    $skill->methods()->delete();

    // Supprimer la compétence
    $skill->delete();

    return redirect()->route('admin.skills.index')->with('success', 'Compétence supprimée avec succès.');
}

}

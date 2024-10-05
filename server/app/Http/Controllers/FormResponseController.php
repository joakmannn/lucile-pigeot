<?php

namespace App\Http\Controllers;

use App\Models\FormResponse; // Assure-toi d'avoir créé ce modèle
use Illuminate\Http\Request;

class FormResponseController extends Controller
{
    // Méthode pour afficher toutes les réponses dans un tableau
    public function index()
    {
        $responses = FormResponse::all(); // Récupère toutes les réponses
        return view('admin.contact.responses', compact('responses'));
    }

    public function store(Request $request)
    {
        // Valider les données
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Enregistrer les données dans la base de données
        FormResponse::create([
            'full_name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'message' => $validatedData['message'],
        ]);

        // Retourner une réponse JSON
        if ($request->wantsJson()) {
        return response()->json(['message' => 'Message envoyé avec succès!'], 200);
        }
        return view('admin.contact.responses', compact('responses'));

    }
}

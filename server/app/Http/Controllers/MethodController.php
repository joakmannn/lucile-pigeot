<?php

namespace App\Http\Controllers;

use App\Models\Method;
use App\Models\Skill;
use Illuminate\Http\Request;

class MethodController extends Controller
{
    // Afficher le formulaire pour créer une nouvelle méthode pour une compétence spécifique
    public function create(Skill $skill)
    {
        return view('admin.skills.methods.create', compact('skill'));
    }

    public function store(Request $request, Skill $skill)
{
    // Validation des données
    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'photo' => 'nullable|image|max:2048',
    ]);

    // Création d'une nouvelle méthode
    $method = new Method();
    $method->title = $request->input('title');
    $method->description = $request->input('description');
    $method->skill_id = $skill->id;

    // Si une photo est ajoutée, la sauvegarder avec un nom unique
    if ($request->hasFile('photo')) {
        // Récupérer le fichier photo
        $file = $request->file('photo');

        // Créer un nom de fichier unique basé sur le temps et l'ID
        $filename = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();

        // Enregistrer l'image dans le disque 'public/photos' avec le nom défini
        $path = $file->storeAs('photos', $filename, 'public');
        
        // Enregistrer le chemin dans la base de données
        $method->photo = $path;
    }

    // Sauvegarde de la méthode
    $method->save();

    // Redirection après création
    return redirect()->route('admin.skills.index')->with('success', 'Méthode ajoutée avec succès.');
}

    // Afficher le formulaire pour modifier une méthode existante
    public function edit(Skill $skill, Method $method)
    {
        return view('admin.skills.methods.edit', compact('skill', 'method'));
    }

    // Mettre à jour une méthode existante
    public function update(Request $request, Skill $skill, Method $method)
    {
        // Valider les entrées du formulaire
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'photo' => 'nullable|image|max:2048',
        ]);

        // Si une nouvelle photo est téléchargée, la stocker et mettre à jour la méthode
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('photos', 'public');  // Sauvegarde dans storage/app/public/photos
            $method->photo = $path;  // Mise à jour du chemin de la photo
        }

        // Mise à jour de la méthode avec les nouvelles valeurs
        $method->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'photo' => $request->hasFile('photo') ? $path : $method->getOriginal('photo'),  // Garde l'ancienne photo si aucune nouvelle photo n'est uploadée
        ]);

        // Redirection après la mise à jour réussie
        return redirect()->route('admin.skills.edit', $skill->id)
                         ->with('success', 'Méthode mise à jour avec succès.');
    }

    // Supprimer une méthode
    public function destroy(Skill $skill, Method $method)
    {
        // Suppression de la méthode
        $method->delete();

        // Redirection après suppression
        return redirect()->route('admin.skills.index')->with('success', 'Méthode supprimée avec succès.');
    }
}

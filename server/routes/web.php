<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route; 
use App\Http\Controllers\SkillController;
use App\Http\Controllers\MethodController;
use App\Http\Controllers\FormResponseController;


// Route de la page d'accueil
Route::get('/', function () {
    return view('welcome');
});

// Route du tableau de bord utilisateur
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Routes pour le profil de l'utilisateur (accessibles uniquement si connecté)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Routes d'administration avec middleware 'auth' et 'admin'
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    // Route du tableau de bord admin
    Route::get('dashboard', [HomeController::class, 'index'])->name('dashboard');

    // Routes pour la gestion des articles
    Route::prefix('articles')->group(function () {
        Route::get('/', [ArticleController::class, 'index'])->name('articles');
        Route::get('/create', [ArticleController::class, 'create'])->name('articles.create');
        Route::post('/save', [ArticleController::class, 'save'])->name('articles.save');
        Route::get('/{id}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
        Route::put('/{id}', [ArticleController::class, 'update'])->name('articles.update');
        Route::delete('/{id}', [ArticleController::class, 'delete'])->name('articles.delete');
    });

    // Routes pour la gestion des compétences
    Route::resource('skills', SkillController::class);

    // Routes pour les méthodes associées à une compétence
    Route::prefix('skills/{skill}/methods')->group(function () {
        Route::get('create', [MethodController::class, 'create'])->name('methods.create');
        Route::post('/', [MethodController::class, 'store'])->name('methods.store');
        Route::get('{method}/edit', [MethodController::class, 'edit'])->name('methods.edit');
        Route::put('{method}', [MethodController::class, 'update'])->name('methods.update');
        Route::delete('{method}', [MethodController::class, 'destroy'])->name('methods.destroy');
    });
        // Route pour afficher toutes les réponses du formulaire
        Route::get('/admin/contact/responses', [FormResponseController::class, 'index'])->name('contact.responses');

});

    // Route pour enregistrer une nouvelle réponse de formulaire

require __DIR__.'/auth.php';

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\FormResponseController;







Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/articles', [ArticleController::class, 'index']);
Route::get('/skills', [SkillController::class, 'index']);
Route::post('/contact/submit', [FormResponseController::class, 'store'])->name('contact.submit');



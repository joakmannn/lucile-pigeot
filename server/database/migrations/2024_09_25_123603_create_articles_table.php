<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('doc_id')->unique();  // Correspond au docid HAL
            $table->text('title')->charset('utf8mb4');  // Titre de l'article, extrait du label_s
            $table->string('publisher')->charset('utf8mb4')->nullable();  // Editeur, actuellement 'Unknown Publisher'
            $table->string('identifier')->charset('utf8mb4')->nullable();  // Identifiant, comme le DOI
            $table->string('source')->charset('utf8mb4')->nullable();  // URL source, exemple: uri_s
            $table->text('creators')->charset('utf8mb4');  // Liste des créateurs extraite du label_s
            $table->timestamps();  // Champs created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};

<x-app-layout>
    @yield('content')
    <div class="max-w-2xl mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
        <form method="POST" action="{{ route('admin.articles.update', $article->id) }}">
            @csrf
            @method('PUT') <!-- Utilisation de PUT pour la mise à jour -->

            <!-- Champ pour le titre -->
            <div class="mb-6">
                <label for="title" class="block text-lg font-semibold text-white">Titre de l'article</label>
                <input type="text" name="title" id="title" value="{{ old('title', $article->title) }}" required
                       class="mt-2 px-4 py-2 block w-full shadow-sm text-sm border  rounded-lg bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>

            <!-- Champ pour le type d'article -->
            <div class="mb-6">
                <label for="type" class="block text-lg font-semibold text-white">Type d'Article</label>
                <select name="type" id="type" class="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm  t focus:ring-blue-500 focus:border-blue-500">
                    <option value="Article de conférence" {{ $article->type == 'Article de conférence' ? 'selected' : '' }}>Article de conférence</option>
                    <option value="Article de revue" {{ $article->type == 'Article de revue' ? 'selected' : '' }}>Article de revue</option>
                </select>
            </div>

            <!-- Bouton pour soumettre la mise à jour -->
            <div class="text-center mt-6">
                <button type="submit" class="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105">
                    Mettre à jour l'Article
                </button>
            </div>
        </form>

        <!-- Bouton Retour vers admin/dashboard -->
        <div class="text-center mt-6">
            <a href="{{ url('admin/dashboard') }}" class="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">
                Retour au Tableau de Bord
            </a>
        </div>
    </div>
</x-app-layout>

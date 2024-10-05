<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Articles') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="flex items-center justify-between">
                        <h1 class="mb-0">Liste des Articles</h1>
                        <a href="{{ route('admin.articles.create') }}" class="btn btn-primary">Ajouter un Article</a>
                    </div>
                    
                    @if ($articles->isEmpty())
                        <p class="mt-4 text-red-500">Aucun article trouvé dans la base de données.</p>
                    @else
                        <table class="table-auto w-full mt-4 border-collapse border border-gray-300">
                            <thead>
                                <tr class="bg-gray-200">
                                    <th class="px-4 py-2 border border-gray-300">Titre</th>
                                    <th class="px-4 py-2 border border-gray-300">Auteur(s)</th>
                                    <th class="px-4 py-2 border border-gray-300">doc_id</th>
                                    <th class="px-4 py-2 border border-gray-300">Type</th>
                                    <th class="px-4 py-2 border border-gray-300">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($articles as $article)
                                    <tr class="hover:bg-gray-100">
                                        <td class="border border-gray-300 px-4 py-2">{{ $article->title }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ $article->creators }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ $article->doc_id }}</td>
                                        <td class="border border-gray-300 px-4 py-2">{{ $article->type }}</td>

                                        <td class="border border-gray-300 px-4 py-2 flex gap-2">
                                            <a href="{{ route('admin.articles.edit', $article->id) }}" class="btn btn-sm btn-warning">Éditer</a>

                                            <form action="{{ route('admin.articles.delete', $article->id) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet article ?')">Supprimer</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    @endif

                    <!-- Bouton Retour vers admin/dashboard -->
                    <div class="mt-4">
                        <a href="{{ url('admin/dashboard') }}" class="btn btn-secondary">Retour</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

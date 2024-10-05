<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Créer une nouvelle compétence') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <h1 class="text-2xl font-bold mb-6">Créer une nouvelle compétence</h1>

                    @if ($errors->any())
                        <div class="mb-4">
                            <ul class="list-disc list-inside text-red-600">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <!-- Formulaire de création de compétence -->
                    <form action="{{ route('admin.skills.store') }}" method="POST" enctype="multipart/form-data" class="space-y-6">
                        @csrf <!-- Protection CSRF -->

                        <!-- Champ pour le titre de la compétence -->
                        <div class="mb-4">
                            <label for="title" class="block text-sm font-medium text-gray-700">Titre de la compétence :</label>
                            <input type="text" id="title" name="title" value="{{ old('title') }}" required
                                   class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>

                        <!-- Boutons d'action -->
                        <div class="flex justify-end mt-6">
                            <!-- Bouton Annuler -->
                            <a href="{{ route('admin.skills.index') }}" class="bg-gray-500 text-white px-4 py-2 rounded-md mr-4">
                                Annuler
                            </a>

                            <!-- Bouton Créer -->
                            <button type="submit" class=" text-black px-4 py-2 rounded-md">
                                Créer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

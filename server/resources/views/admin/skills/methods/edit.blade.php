<!-- resources/views/admin/methods/edit.blade.php -->
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Modifier la méthode pour la compétence : ') . $skill->title }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form action="{{ route('admin.methods.update', ['skill' => $skill->id, 'method' => $method->id]) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT') <!-- Ce champ permet de s'assurer que le verbe PUT est utilisé -->

                        <div class="mb-4">
                            <label for="title" class="block text-sm font-medium text-gray-700">Titre de la méthode :</label>
                            <input type="text" id="title" name="title" value="{{ $method->title }}" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        </div>

                        <div class="mb-4">
                            <label for="description" class="block text-sm font-medium text-gray-700">Description :</label>
                            <textarea id="description" name="description" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">{{ $method->description }}</textarea>
                        </div>

                        <div class="mb-4">
                            <label for="photo" class="block text-sm font-medium text-gray-700">Photo (laisser vide si inchangé) :</label>
                            <input type="file" id="photo" name="photo" class="mt-1 block w-full">
                        </div>

                        <div class="flex justify-end">
                            <a href="{{ route('admin.skills.index') }}" class="bg-gray-500 text-white px-4 py-2 rounded-md mr-4">Annuler</a>
                            <button type="submit" class=" text-black px-4 py-2 rounded-md">Mettre à jour</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

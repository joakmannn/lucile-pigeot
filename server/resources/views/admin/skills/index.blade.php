<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Compétences') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="flex items-center justify-between">
                        <h1 class="mb-0">Liste des Compétences</h1>
                        <a href="{{ route('admin.skills.create') }}" class="btn btn-primary">Créer une compétence</a>
                    </div>

                    @if ($skills->isEmpty())
                        <p class="mt-4 text-red-500">Aucune compétence trouvée dans la base de données.</p>
                    @else
                        <table class="table-auto w-full mt-4 border-collapse border border-gray-300">
                            <thead>
                                <tr class="bg-gray-200">
                                    <th class="px-4 py-2 border border-gray-300">Titre de la Compétence</th>
                                    <th class="px-4 py-2 border border-gray-300">Méthodes</th>
                                    <th class="px-4 py-2 border border-gray-300">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($skills as $skill)
                                    <tr class="hover:bg-gray-100">
                                        <td class="border border-gray-300 px-4 py-2">{{ $skill->title }}</td>
                                        <td class="border border-gray-300 px-4 py-2">
                                            <ul>
                                                @foreach($skill->methods as $method)
                                                    <li class="mb-2">
                                                        <div class="flex justify-between items-start">
                                                            <!-- Titre et description de la méthode (à gauche) -->
                                                            <div class="flex-grow">
                                                                <strong>{{ $method->title }}</strong>
                                                                <p class="text-sm text-gray-600">{{ $method->description }}</p>

                                                                <!-- Affichage de la photo si elle existe -->
                                                                @if ($method->photo)
                                                                    <img src="{{ asset('storage/' . $method->photo) }}" alt="Photo de la méthode" class="w-20 h-20 object-cover mt-2 rounded shadow-md">
                                                                @else
                                                                    <p class="text-xs text-gray-500">Aucune photo disponible</p>
                                                                @endif
                                                            </div>

                                                            <!-- Actions: Modifier et Supprimer (à droite) -->
                                                            <div class="flex space-x-2 items-start ml-4">
                                                                <!-- Bouton Modifier -->
                                                                <a href="{{ route('admin.methods.edit', ['skill' => $skill->id, 'method' => $method->id]) }}" class="btn btn-sm btn-warning">Modifier</a>

                                                                <!-- Bouton Supprimer -->
                                                                <form action="{{ route('admin.methods.destroy', ['skill' => $skill->id, 'method' => $method->id]) }}" method="POST">
                                                                    @csrf
                                                                    @method('DELETE')
                                                                    <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cette méthode ?')">Supprimer</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        </td>
                                        <td class="border border-gray-300 px-4 py-2 flex flex-col gap-2 items-center">
                                            <!-- Bouton Ajouter une méthode -->
                                            <a href="{{ route('admin.methods.create', $skill->id) }}" class="btn btn-sm btn-primary">Créer une méthode</a>
                                            
                                            <!-- Bouton Modifier la compétence -->
                                            <a href="{{ route('admin.skills.edit', $skill->id) }}" class="btn btn-sm btn-warning">Modifier la compétence</a>

                                            <!-- Bouton Supprimer la compétence -->
                                            <form action="{{ route('admin.skills.destroy', $skill->id) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Êtes-vous sûr de vouloir supprimer cette compétence ?')">Tout supprimer</button>
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

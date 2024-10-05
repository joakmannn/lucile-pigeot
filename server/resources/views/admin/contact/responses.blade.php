<!-- resources/views/admin/contact/responses.blade.php -->

<x-app-layout> <!-- Utilisation du layout Blade -->

    <h1 class="text-white">Réponses au formulaire de contact</h1>

    @if($responses->isEmpty())
        <p>Aucune réponse pour le moment.</p>
    @else
        <table class="table-auto w-full bg-white">
            <thead>
                <tr>
                    <th class="border px-4 py-2">Nom complet</th>
                    <th class="border px-4 py-2">Adresse email</th>
                    <th class="border px-4 py-2">Message</th>
                    <th class="border px-4 py-2">Date</th>
                </tr>
            </thead>
            <tbody>
                @foreach($responses as $response)
                    <tr>
                        <td class="border px-4 py-2">{{ $response->full_name }}</td>
                        <td class="border px-4 py-2">{{ $response->email }}</td>
                        <td class="border px-4 py-2">{{ $response->message }}</td>
                        <td class="border px-4 py-2">{{ $response->created_at->format('d/m/Y H:i') }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif

    <!-- Lien de retour vers le tableau de bord -->
    <div class="mt-4">
        <a href="{{ route('admin.dashboard') }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Retour au tableau de bord
        </a>
    </div>

</x-app-layout> <!-- Fin du composant Blade -->
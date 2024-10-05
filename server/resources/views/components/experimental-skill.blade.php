<div class="py-5">
    <h2>Compétences expérimentales</h2>
    <ul>
        @foreach($skills as $skill)
            <li>{{ $skill->name }} - {{ $skill->description }}</li>
        @endforeach
    </ul>
</div>

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create Article') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-black">
                    <h1 class="mb-0">Add Article</h1>
                    <hr />
                    <p><a href="{{ route('admin.articles') }}" class="btn btn-primary">Go Back</a></p>

                    <form action="{{ route('admin.articles.save') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row mb-3">
                            <div class="col">
                                <label for="input">Doc_id de l'article</label>

                                <input type="text" name="docId" class="form-control" placeholder="hal-04360313v1 = 4360313">
                                @error('docId')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="url">URL de l'article</label>
                                <input type="text" class="form-control" id="url" name="url" placeholder="Entrez l'URL de l'article">
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="d-grid">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>             
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

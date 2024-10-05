<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-black dark:text-gray-200">
            {{ __('Dashboard Admin') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 ">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Articles Card -->
                <a href="{{route('admin.articles')}}" class="bg-white dark:bg-gray-800 sm:rounded-lg p-6 flex flex-col justify-center items-center">
                    <h3 class="text-xl font-bold text-black dark:text-gray-100 mb-4">Articles</h3>
                </a>

                <!-- Compétences Card -->
                <a href="{{route('admin.skills.index')}}" class="bg-white  p-6 flex flex-col justify-center items-center">
                    <h3 class="text-xl font-bold text-black mb-4">Compétences</h3>
                </a>

                <a href="{{route('admin.contact.responses')}}" class="bg-white  p-6 flex flex-col justify-center items-center">
                    <h3 class="text-xl font-bold text-black mb-4">Messages</h3>
                </a>
            </div>
        </div>
    </div>
</x-app-layout>

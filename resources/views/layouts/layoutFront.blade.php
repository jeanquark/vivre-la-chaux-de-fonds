@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- Google Analytics -->
        <meta name="google-site-verification" content="NtU0rqtvklNaKelC1FlreOK4rj197P4v9YdXL8cSmzs" />

        <title>{{ config('app.name') }}</title>
        <!-- Favicon -->
        <link rel="icon" href="{{ asset('images/favicon_2019.png') }}" type="image/x-icon">
        <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
        {{-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> --}}
        
        <style>
        </style>
        @yield('css')
    </head>
    <body>
        <div id="app" style="border: 2px dashed orange;">
            {{-- <div class="container"> --}}
                @yield('content')
            {{-- </div> --}}
        </div>
        
        <script>
            window.config = @json($config);
        </script>

        <script src="{{ mix('dist/js/app.js') }}"></script>

        @yield('scripts')

    </body>
</html>
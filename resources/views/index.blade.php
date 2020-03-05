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
  	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  	<title>{{ config('app.name') }}</title>

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('images/favicon.png') }}" type="image/x-icon">

    <!-- Prevent Google indexing -->
    <meta name="robots" content="noindex">

    <meta name="csrf-token" content="{{ csrf_token() }}" />
	
  	<link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
</head>
<body>
	<div id="app">
	</div>
  	{{-- Global configuration object --}}
  	<script>
    	window.config = @json($config);
  	</script>

	
  	{{-- Load the application scripts --}}
  	<script src="{{ mix('dist/js/app.js') }}"></script>
</body>
</html>

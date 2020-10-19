<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">

	<style>
	</style>
</head>

<body>
	<h2 style="text-align: center;"></h2>

	<p>Bonjour,</p>
	{{-- <p>$message: {{ $message }}</p> --}}
	{{-- <p>$data: {{ $data }}</p> --}}
	<p>Content: {!! $data['body'] !!}</p>


	<p>Vous pourrez vous désinscrire à tout moment en cliquant sur le lien affiché en bas de page de chaque email reçu.</p>
	<p>Avec nos meilleures salutations,<br />
		Le comité de l'association <b>{{ config('app.name') }}</b></p>

</body>

</html>
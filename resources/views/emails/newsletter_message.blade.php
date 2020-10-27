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
	{{-- <p>{{ $data }}</p> --}}
	<p>Recipient: {{ $data['email_encoded'] }}</p>
	<p>Content: {!! $data['content'] !!}</p>



	<p>
		Avec nos meilleures salutations,
		<br />
		Le comité de l'association <b>{{ config('app.name') }}</b>
	</p>
	<br />
	<p><small>Pour vous désinscrire à la newsletter, cliquez <a href="{{ config('app.url') }}/newsletter/desinscription/{{ $data['email_encoded'] }}" target="_blank">ici</a></small></p>

</body>

</html>
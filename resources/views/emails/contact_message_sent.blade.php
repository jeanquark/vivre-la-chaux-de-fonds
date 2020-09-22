<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">

	<style>
		table,
		th,
		td {
			padding: 10px;
			border: 1px solid black;
			border-collapse: collapse;
		}
	</style>
</head>

<body>
	<h2 style="text-align: center;"></h2>

	{{-- $data: {{ $data }} --}}
	<p>Bonjour,<br />
		Votre message nous est bien parvenu avec les informations suivantes:</p>

	<table>
		<tr>
			<th>
				Nom
			</th>
			<th>
				Email
			</th>
			<th>
				Objet
			</th>
			<th>
				Message
			</th>
		</tr>
		<tr>
			<td>
				{{ $data->name }}
			</td>
			<td>
				{{ $data->email }}
			</td>
			<td>
				{{ $data->object }}
			</td>
			<td>
				{{ $data->message }}
			</td>
		</tr>
	</table>

	<p>Nous vous remercions de nous avoir contacté.</p>
	<p>Avec nos meilleures salutations,<br />
		Le comité de {{ config('app.name') }}</p>

</body>

</html>

{{-- @component('mail::message')
<h2>Votre réservation</h2>

Vos places ont bien été réservées.<br />
data: {{ $data }}<br />
Avec nos remerciements,<br>
{{ config('app.name') }}

@endcomponent --}}
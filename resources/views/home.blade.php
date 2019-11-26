@extends('layouts.layoutFront')

@section('css')
	<style>
		#body {
			background: url('/images/svg/background.svg') center;
	        background-repeat: no-repeat;
	        /*background-size: 100%;*/
	        background-size: cover;
		}
		/*@media (min-width: 576px)*/
			/*.container {
				max-width: 100%;
				margin: 0px;
				padding: 0px;
			}*/
	</style>
@endsection

@section('content')
	<div id="body" style="display: none;">
		<h1 class="text-center my-5">Association Vivre La-Chaux-de-Fonds</h1>
		<div class="row justify-content-center">
				<div class="col-6">
					<h1 class="text-center my-3">L'Association Vivre La Chaux-de-fonds vous souhaite une cordiale bienvenue.</h1>
					<h3 class="text-center my-3">Que faisons-nous?</h3>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-8">
					<h3 class="text-center my-3">Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population, tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.</h3>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-12">
					<div class="card" style="width: 18rem;">
			  			<img src="/images/annonce_saint_nicolas_2019.jpg" class="card-img-top" alt="Annonce">
			  			<div class="card-body text-center">
			    			<h5 class="card-title text-center">St-Nicolas 2019</h5>
			    			<router-link to="/" class="text-center btn btn-primary">En savoir plus</router-link>
			  			</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="app" class="container2" style="border: 1px dashed green;">
	</div>
@endsection

@section('scripts')
	{{-- // <script src="{{ asset('js/app.js') }}"></script> --}}
	{{-- // <script src="dist/js/app.js"></script> --}}

	{{-- Global configuration object --}}
  	{{-- <script>
    	window.config = @json($config);
  	</script> --}}

	{{-- // <script src="{{ mix('dist/js/app.js') }}"></script> --}}
	<script>
		// import Welcome from '../js/pages/Welcome.vue';
	</script>
@endsection
<template>
  	<div id="abc">
		<navbar />
        <h1 class="text-center my-3">Accueil</h1>
        <a href="https://github.com/cretueusebiu/laravel-vue-spa">github.com/cretueusebiu/laravel-vue-spa</a>
        <div style="height: 600px; border: 1px dashed orange;">
            Contenu accueil
        </div>
        <div style="height: 500px; border: 1px dashed green;">
            Footer
        </div>
	</div>
</template>

<script>
	import navbar from '../components/Navbar'
	export default {
		components: { navbar },
  		metaInfo () {
    		return { title: 'Accueil' }
  		},
  		data () {
  			return {

  			}
  		},
  		methods: {
  		}
	}
</script>

<style scoped>
    /*body {*/
    #abc {
        /*background-color: red;*/
        background: url('/images/svg/background.svg') center;
        background-repeat: no-repeat;
        /*background-size: 100%;*/
        background-size: cover;
        /*background-size: 512px 512px;*/
    }
</style>
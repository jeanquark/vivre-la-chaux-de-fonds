<template>
    <div>
        <h1 class="text-center">Actualité</h1>
    </div>
</template>

<script>
    export default {
        layout: 'frontend',
        metaInfo () {
            return { title: 'Actualité' }
        },
        mounted () {
        	console.log(this.$route.params.id)
        }
    }
</script>

<style scoped>
</style>
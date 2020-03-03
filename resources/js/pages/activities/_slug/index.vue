<template>
    <div>
        <h1 class="text-center">Activité {{ slug }}</h1>
    </div>
</template>

<script>
    export default {
        layout: 'frontend',
        metaInfo () {
            return { title: 'Actualité' }
        },
        mounted () {
        	console.log(this.$route.params.slug)
        },
        data () {
            return {
                slug: this.$route.params.slug
            }
        }
    }
</script>

<style scoped>
</style>
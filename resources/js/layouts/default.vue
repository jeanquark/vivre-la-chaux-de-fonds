<template>
    <!-- <div class="main-layout"> -->
        <!-- <navbar /> -->
    
        <!-- <div class="container mt-4"> -->
        <!-- <div> -->
            <child />
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>
    // import Navbar from '~/components/Navbar'

    export default {
        name: 'MainLayout',

        components: {
            // Navbar
        },
        created () {
            console.log('Using default layout!')
        }
    }
</script>

<style>
    
</style>
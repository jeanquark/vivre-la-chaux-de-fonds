<template>
    <!-- <card class="text-center">
        <h3 class="mb-4">
            Page non trouvée
        </h3>

        <div class="links">
            <router-link :to="{ name: 'accueil' }">
                Retour à l'accueil
            </router-link>
        </div>
    </card> -->
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height: 100vh; border: 0px solid green;">
            <div class="col-12 col-md-8 col-lg-6 m-auto p-2" style="border: 0px solid orange; background: #fff;">
                <h3 class="text-center">Page non trouvée</h3>
                <div class="text-center mt-3">
                    <router-link :to="{ name: 'accueil' }">
                        Retour à l'accueil
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

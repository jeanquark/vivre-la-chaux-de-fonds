<template>
    <b-container>
        <b-row class="justify-content-center align-items-center m-auto" style="height: 100vh;">
            <b-col cols="12" md="8" lg="6" class="p-3" style="background: #fff; border-radius: 5px;">
                <h3 class="text-center">Page non trouvée</h3>
                <div class="text-center mt-3">
                    <router-link :to="{ name: 'index' }">
                        Retour à l'accueil
                    </router-link>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

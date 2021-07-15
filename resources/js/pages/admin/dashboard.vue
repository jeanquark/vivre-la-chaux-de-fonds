<template>
    <b-container>
        <h2 class="text-center">Tableau de bord VLCF</h2>
        <p>Last deployment: July 16 2021.</p>
        <br />
        <div style="display: none;">
            <h4 class="text-center">Statistiques de fréquentation du site:</h4>
            <h6 class="text-center">(Les données proviennent de Google Analytics)</h6>
        </div>
    </b-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    components: {},
    async created() {
        try {
            const { data } = await axios.get(`/api/google-analytics-data`)
            console.log('data: ', data)
        } catch (error) {
            console.log('error: ', error)
        }
    },
    async mounted() {},
    data() {
        return {
            
        }
    },
    computed: {},
    methods: {
    }
}
</script>

<style scoped>

</style>

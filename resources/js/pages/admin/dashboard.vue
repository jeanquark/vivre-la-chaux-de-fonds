<template>
    <b-container>
        <h2 class="text-center">Tableau de bord VLCF</h2>
        <br />
        <h4 class="text-center">Statistiques de fréquentation du site:</h4>
        <h6 class="text-center">(Les données proviennent de Google Analytics)</h6>
        <!-- gaData: {{ gaData }} -->

        <b-row align-v="center" class="justify-content-center my-4">
            <b-col cols="12" md="6">
                <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
            </b-col>
        </b-row>
		<b-row align-v="start" class="justify-content-center my-4">
            <b-col cols="12" md="6" v-if="gaDataByDate.totals">
                <h5 class="text-center">Totaux sur les 10 derniers jours</h5>
                <br />
                <p v-for="(statName, index) in statNames" :key="index">
                    {{ statName }}:
                    <b-badge variant="primary" style=""
                        ><span style="font-size: 1.2em; line-height: 1.4;">{{ parseFloat(gaDataByDate.totals[0]['values'][index]).toFixed(0) }}{{ index === 3 ? '%' : '' }}</span></b-badge
                    >&nbsp;
                    <b-badge
                        :variant="
                            index < 3
                                ? parseInt(calcDiff(gaDataByDate.totals[0]['values'][index], gaDataByDate.totals[1]['values'][index])) >= 0
                                    ? 'success'
                                    : 'danger'
                                : parseInt(calcDiff(gaDataByDate.totals[0]['values'][index], gaDataByDate.totals[1]['values'][index])) >= 0
                                ? 'danger'
                                : 'success'
                        "
                        ><span style="font-size: 1.2em; line-height: 1.4;">{{ calcDiff(gaDataByDate.totals[0]['values'][index], gaDataByDate.totals[1]['values'][index]) }}% </span></b-badge
                    >&nbsp;<b-badge variant="secondary">{{ parseFloat(gaDataByDate.totals[1]['values'][index]).toFixed(0) }}{{ index === 3 ? '%' : '' }}</b-badge> il y a entre 20 et 10 jours
                </p>
            </b-col>

            <b-col cols="12" md="4">
				<h6 class="text-center">Top 10 des sessions par villes ces 30 derniers jours</h6>
                <ul>
                    <li v-for="(row, index) in gaDataByCountry.rows" :key="index">{{ row.dimensions[0] }} <b-badge variant="primary">{{ row.metrics[0]['values'][0] }}</b-badge></li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    components: {},
    async created() {
        const { data } = await axios.get(`/api/google-analytics-data`)
        console.log('data: ', data)
        this.gaDataByDate = data[0]['reports'][0]['data']
        this.gaDataByCountry = data[1]['reports'][0]['data']
        this.chartOptions = {
            ...this.chartOptions,
            ...{
                xaxis: {
                    categories: this.gaDataByDate.rows.filter((row, index) => index > 9).map(row => moment(row.dimensions[0]).format('MMM-DD'))
                }
            }
        }
        this.series[0] = { ...this.series[0], ...{ data: this.gaDataByDate.rows.filter((row, index) => index > 9).map(row => parseInt(row.metrics[0]['values'][0])) } }
    },
    async mounted() {
    },
    data() {
        return {
            gaDataByDate: {},
            gaDataByCountry: {},
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                    toolbar: {
                        show: false
                    }
                },
                title: {
                    text: 'Nombre de sessions ces 10 derniers jours',
                    align: 'center',
                    fontSize: '14px'
                },
                xaxis: {
                    categories: []
                },
                yaxis: {
                    labels: {
                        formatter: function(value) {
                            return value
                        }
                    }
                }
            },
            series: [
                {
                    name: 'Sessions',
                    data: []
                }
            ],
            statNames: ['Sessions', 'Pages vues', 'Nouveaux utilisateurs', 'Taux de rebond']
        }
    },
    computed: {},
    methods: {
        calcDiff(value1, value2) {
            return parseFloat(((value1 - value2) / value2) * 100).toFixed(0)
        }
    }
}
</script>

<style scoped>
.small {
    max-width: 600px;
    margin: 150px auto;
}
</style>

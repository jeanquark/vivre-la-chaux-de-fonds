<template>
    <b-container>
        <h2 class="text-center">Tableau de bord VLCF</h2>
        <p>Dernier deploiement: 28 Juillet 2021.</p>
        <br />
        <div style="display: none">
            <h4 class="text-center">Statistiques de fréquentation du site:</h4>
            <h6 class="text-center">(Les données proviennent de Google Analytics)</h6>
        </div>
        <b-row class="justify-content-center">
            <b-col cols="12" md="12" style="border: 0px solid blue">
                <apexchart type="bar" height="350" :options="charts[0].chartOptions" :series="charts[0].series"></apexchart>
            </b-col>

            <b-col cols="12" md="9">
                <apexchart type="bar" height="350" :options="charts[1].chartOptions" :series="charts[1].series"></apexchart>
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-5">
            <b-col cols="12" md="6">
                <apexchart type="pie" width="380" :options="charts[2].chartOptions" :series="charts[2].series"></apexchart>
            </b-col>

            <b-col cols="12" md="6">
                <apexchart type="donut" width="340" :options="charts[3].chartOptions" :series="charts[3].series"></apexchart>
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
        try {
            const { data } = await axios.get(`/api/google-analytics-data`)
            console.log('data: ', data)

            // Chart 1
            data[0]['rows'].map((a) => a[0].toString()).forEach((a) => this.charts[0]['chartOptions']['xaxis']['categories'].push(moment(a).format('dddd DD MMM')))

            this.charts[0]['series'].push({
                name: 'Sessions',
                data: data[0]['rows'].map((a) => a[1]),
            })
            this.charts[0]['series'].push({
                name: 'Nouveaux visiteurs',
                data: data[0]['rows'].map((a) => a[3]),
            })
            this.charts[0]['series'].push({
                name: 'Pages vues',
                data: data[0]['rows'].map((a) => a[2]),
            })

            // Chart 2
            data[1]['rows'].map((a) => a[0].toString()).forEach((a) => this.charts[1]['chartOptions']['xaxis']['categories'].push(moment(a).format('DD MMM')))

            this.charts[1]['series'].push({
                name: 'Taux de rebond',
                data: data[1]['rows'].map((a) => Math.floor(a[1])),
            })

            // Chart 3
            data[2]['rows'].map((a) => a[1]).forEach((a) => this.charts[2]['series'].push(parseInt(a)))

            data[2]['rows'].map((a) => a[0].toString()).forEach((a) => this.charts[2]['chartOptions']['labels'].push(a))

            // Chart 4
            data[3]['rows'].map((a) => a[1]).forEach((a) => this.charts[3]['series'].push(parseInt(a)))

            data[3]['rows'].map((a) => a[0].toString()).forEach((a) => this.charts[3]['chartOptions']['labels'].push(a))
        } catch (error) {
            console.log('error: ', error)
        }
    },
    async mounted() {},
    data() {
        return {
            lastWeekData: [],
            // series: [],
            charts: [
                {
                    // Chart 1
                    series: [],
                    chartOptions: {
                        chart: {
                            type: 'bar',
                            height: 350,
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                                endingShape: 'rounded',
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ['transparent'],
                        },
                        title: {
                            text: 'Trafic les 7 derniers jours',
                            align: 'center',
                        },
                        xaxis: {
                            // categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                            categories: [],
                        },
                        yaxis: {
                            title: {
                                text: '',
                            },
                        },
                        fill: {
                            opacity: 1,
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return '' + val + ''
                                },
                            },
                        },
                    },
                },
                {
                    // Chart 2
                    series: [],
                    // series: [
                    //     {
                    //         name: 'Taux de rebonds',
                    //         data: [],
                    //         // data2: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    //     },
                    // ],
                    chartOptions: {
                        chart: {
                            height: 350,
                            type: 'bar',
                            zoom: {
                                enabled: false,
                            },
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '55%',
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: 'straight',
                        },
                        title: {
                            text: 'Taux de rebond',
                            align: 'center',
                        },
                        grid: {
                            row: {
                                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                                opacity: 0.5,
                            },
                        },
                        xaxis: {
                            categories: [],
                            // categories4: ['20210721', '20210722', '20210723', '20210724', '20210725', '20210726', '20210727', '20210728', '20210729', '20210730', '20210731', '20210801', '20210802'],
                            // categories3: [''],
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return '' + val + '%'
                                },
                            },
                        },
                    },
                },
                {
                    // Chart 3
                    series: [],
                    chartOptions: {
                        chart: {
                            width: 380,
                            type: 'pie',
                        },
                        title: {
                            text: 'Répartition des visiteurs par pays',
                            align: 'center',
                        },
                        labels: [],
                        responsive: [
                            {
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width: 200,
                                    },
                                    legend: {
                                        position: 'bottom',
                                    },
                                },
                            },
                        ],
                    },
                },
                {
                    // Chart 4
                    // series: [44, 55, 41, 17, 15],
                    series: [],
                    chartOptions: {
                        chart: {
                            type: 'donut',
                        },
                        title: {
                            text: 'Répartition des visiteurs par appareil',
                            align: 'center',
                        },
                        labels: [],
                        responsive: [
                            {
                                breakpoint: 480,
                                options: {
                                    chart: {
                                        width: 200,
                                    },
                                    legend: {
                                        position: 'bottom',
                                    },
                                },
                            },
                        ],
                    },
                },
            ],
        }
    },
    computed: {},
    methods: {},
}
</script>

<style scoped>
</style>

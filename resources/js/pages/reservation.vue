<template>
	<div>
		<navbar />
		<h1 class="text-center my-3">Réserver une place</h1>
		selectedTable: {{ selectedTable }}<br /><br />
		planTables: {{ planTables }}<br /><br />
		<router-link to="/mes-reservations">Mes reservations</router-link>
    <user-reservations />
		<div class="row justify-content-center">
      <div class="col-6">
	   		<div style="border: 1px dashed green;" @click="clickOnTablePlan($event)">
					<svg-vue icon="tables_plan" style="border: 1px solid orange;"></svg-vue>
				</div>
			</div>
		</div>
		<modal :selectedTable="selectedTable" @closeModal="showModal = false" v-if="showModal" />
	</div>
</template>

<script>
	import axios from 'axios'
	import SVG from 'svg.js'
	import Modal from '../components/Modal'
	import Navbar from '../components/Navbar'
  import UserReservations from '../components/UserReservation'
	export default {
		components: { Navbar, Modal, UserReservations },
		metaInfo () {
    		return { title: 'Réservation' }
  		},
		async created () {
			// await this.$store.dispatch('planSeats/fetchPlanSeats')
			// this.$store.getters['planTables/planTables'].forEach(table => {
			// 	console.log('table: ', table)
			// 	// await this.$store.dispatch()
			// 	// console.log('table.seats: ', table.seats)
			// })
		},
        async mounted () {
			await this.$store.dispatch('planTables/fetchPlanTables')
            console.log('this.planTables: ', this.planTables)
  			console.log('this.planTables[0]: ', this.planTables[0])
  			// this.planTables.forEach(table => {
            // if (this.planTables)
  			for (let table of this.planTables) {
  				console.log('table: ', table)
  				// console.log('table.seats: ', table.seats)
  				// this.$store.dispatch('planSeats/fetchSeatsByTableId', { tableId: table.id })
  				await this.$store.dispatch('planTables/fetchSeatsByTable', { svgId: table.svg_id })
  				console.log('SVG.get(table.svg_id): ', SVG.get(table.svg_id))
  				const element = SVG.get(table.svg_id)
  				const total_seats = table.total_seats
  				console.log('total_seats: ', total_seats)
  				const reserved_seats = this.$store.getters['planTables/tableSeats'][table.svg_id].filter(seat => seat.is_reserved == true)
  				console.log('reserved_seats: ', reserved_seats)
  				
  				if (reserved_seats.length >= total_seats) {
  					element.fill('#FF0000')
  					element.removeClass('seat')
  				} else if (total_seats - reserved_seats.length <= 2) {
					element.fill('#FFA500')
  				} else {
  					element.fill('#00FF00')
  				}
  			}
  			if (SVG.supported) {
                // this.selectedTable.seats.forEach(seat => {
                //     console.log('seat: ', seat)
                //     const element = SVG.get(seat.svg_seat_id)
                //     console.log('element: ', element)
                //     if (element && seat.is_reserved) {
                //         element.fill('#FF0000')
                //         element.removeClass('seat')
                //     }
                // })
            }
  		},
  		data () {
  			return {
  				showModal: false,
  				selectedTable: null
  			}
  		},
  		computed: {
  			planTables () {
  				return this.$store.getters['planTables/planTables']
  			}
  		},
  		methods: {
  			async clickOnTablePlan(event) {
    			console.log('clickOnTablePlan: ', event)
    			const tableId = event.target.id
    			console.log('tableId: ', tableId)
    			if (tableId) {
    				const { data } = await axios.get(`api/plan-tables/${tableId}`)
    				console.log('data: ', data)
    				// console.log('data.seats: ', data.seats)
      			this.selectedTable = data
      			this.showModal = true
    			} else {
    				this.selectedTable = null
    			}
    		}
		}
	}
</script>

<style scoped>
	>>>.table {
	  /*fill: yellow;*/
	}
	>>>.table:hover {
	  cursor: pointer;
	  fill: green;
	}
</style>
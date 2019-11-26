<template>
	<transition name="modal" >
        <div class="modal-mask">
            <div class="modal-wrapper" >
                <div class="modal-container" style="overflow-y: auto; max-height: 400px;">
                	<div class="modal-body" style="border: 1px dashed red;">
                        <button class="modal-default-button" @click="$emit('closeModal')">Close</button>
                        selectedTable: {{ selectedTable }}<br /><br />
                        <!-- selectedTable->seats: {{ selectedTable->seats }}<br /> -->
                        selectedSeat: {{ selectedSeat }}<br /><br />
                        <div id="drawing" @click="selectSeat($event)">
                            <!-- <svg-vue :icon="selectedTable.svg_model"></svg-vue> -->
                            <svg-vue :icon="`tables/table_${selectedTable.table.svg_id}`"></svg-vue>
                        </div>
                    </div>
                  
                	<div class="modal-footer">
                        <button class="modal-default-button" @click="$emit('closeModal')">Close</button>
                	</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import axios from 'axios'
    // import SVG from 'svg.js's
    // import * as types from '../store/mutation-types'
  	export default {
        props: ['selectedTable'],
        created: {

        },
        data () {
            return {
                selectedSeat: ''
            }
        },
        async created () {
            // const { data } = await axios.get(`/api/tables/${this.table.id}`)
            // console.log('data: ', data)
            // // const seats = data
            // if (SVG.supported && data.seats) {
            //     console.log('SVG supported!')
            //     data.seats.forEach(seat => {
            //         console.log('seat: ', seat)
            //         const element = SVG.get(seat.svg_seat_id)
            //         console.log('element: ', element)
            //         if (element) {
            //             element.fill('#FF0000')
            //         }
            //     })
            // } else {
            //     // alert('SVG not supported')
            // }
            // console.log('this.selectedTable.seats: ', this.selectedTable.seats)

            // console.log('SVG.supported: ', SVG.supported)
            // console.log('SVG("drawing"): ', SVG('drawing'))
            // this.selectedTable.seats.forEach(seat => {
            //     // console.log('seat: ', seat)
            //     console.log('seat.svg_seat_id: ', seat.svg_seat_id)
            //     // const element = SVG.get(seat.svg_seat_id)
            //     // const element = SVG.get('table_dizr67932_seat_1')
            //     const element = SVG.get('table_dizr67932')
            //     console.log('element: ', element)

            //     // if (element) {
            //     //     element.fill('#FF0000')
            //     // }
            // })
        },
        mounted () {
            console.log('SVG.supported: ', SVG.supported)
            // console.log('SVG("drawing"): ', SVG('drawing'))
            if (SVG.supported) {
                this.selectedTable.seats.forEach(seat => {
                    console.log('seat: ', seat)
                    const element = SVG.get(seat.svg_seat_id)
                    console.log('element: ', element)
                    if (element && seat.is_reserved) {
                        element.fill('#FF0000')
                        element.removeClass('seat')
                    }
                })
            }
        },
        computed: {
            loadedUser () {
                return this.$store.getters['auth/user']
            }
        },
        methods: {
            async selectSeat () {
                console.log('selectSeat')
                const seatId = event.target.id
                this.selectedSeat = seatId
                const element = SVG.get(seatId)
                let is_seat = false
                if (element) {
                    is_seat = element.hasClass('seat')
                }

                // Place seat in "reserved" state in DB
                if (is_seat) {
                    // console.log(seat)
                    const { data } = await axios.post('api/reserve-a-seat', { seatId })
                    console.log('data: ', data)
                    element.fill('#FF0000')
                    element.removeClass('seat')
                    // this.$store.dispatch('planSeats/fetchUserSeats', { userId: this.loadedUser })
                    this.$store.commit('planSeats/addUserSeat', data.seat)
                }
            }
        }
  	}
</script>

<style scoped>
  	.modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 500px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    .seat {

    }
    >>>.seat:hover {
        cursor: pointer;
        fill: yellow;
    }
</style>
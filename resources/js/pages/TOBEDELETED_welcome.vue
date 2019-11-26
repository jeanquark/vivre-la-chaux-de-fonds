<template>
  <div>
    <div class="top-right links">
      <template v-if="authenticated">
        <router-link :to="{ name: 'home' }">
          {{ $t('home') }}
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }">
          {{ $t('login') }}
        </router-link>
        <router-link :to="{ name: 'register' }">
          {{ $t('register') }}
        </router-link>
      </template>
    </div>

    <div class="text-center">
      <div class="title mb-4">
        {{ title }}
      </div>
        <h3>Welcome component page</h3>

      <div class="links">
        <a href="https://github.com/cretueusebiu/laravel-vue-spa">github.com/cretueusebiu/laravel-vue-spa</a>
        <router-link to="/admin">Admin</router-link>
      </div>
      <h3>Réservez votre place en ligne</h3>

      <div id="canvas" style="border: 1px dashed green;" @click="clickOnTablePlan($event)">
        <!-- <svg-table-plan @showModal="showModal = true" /> -->
        <svg-vue icon="tables_plan2" style="border: 1px solid orange;"></svg-vue>
      </div>

      <modal :tableId="selectedTable" @closeModal="showModal = false" v-if="showModal" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import svgTablePlan from '../components/svgTablePlan'
import SVG from 'svg.js'
import Modal from '../components/Modal'

export default {
  components: { svgTablePlan, Modal },
  // layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },
  async created () {
    // Get reservation status for each table
    // console.log('SVG(canvas): ', SVG('canvas'))
    const { data } = await axios.get('api/tables')
    console.log('data.tables: ', data.tables)
    console.log('data.seats: ', data.seats)
    if (SVG.supported) {
      console.log('SVG supported!')
      const element = SVG.get('0y5a90081')
        console.log('element: ', element)
        if (element) {
            element.fill('#00FF00')
        }
    } else {
      alert('SVG not supported')
    }
  },
  async mounted () {
    
  },
  data: () => ({
    title: window.config.appName,
    selectedTable: '',
    showModal: false
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  }),

  methods: {
    closeModal () {
      console.log('closeModal')
      this.modal = false
    },
    clickOnTablePlan(event) {
      console.log('clickOnTablePlan: ', event)
      const elementId = event.target.id
      console.log('elementId: ', elementId)
      if (elementId) {
        this.selectedTable = elementId
        this.showModal = true
      }
    }
  }
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
>>>.table {
  /*fill: yellow;*/
}
>>>.table:hover {
  cursor: pointer;
  fill: green;
}
>>>circle#325r5qoub {
  fill: pink;
}
</style>

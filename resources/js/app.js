import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
// import SvgVue from 'svg-vue'
import VueApexCharts from 'vue-apexcharts'
// import VueGtag from "vue-gtag"
import VueAnalytics from 'vue-analytics'

import '~/plugins'
import '~/components'

require('./bootstrap')

/* Bootstrap-Vue */
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue.use(BootstrapVue)

/* Font Awesome 5 */
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUsers, faCalendarDay, faBriefcase, faUserSecret, faArrowsAltH, faEye, faEdit, faTrash, faHome, faTachometerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
// library.add(faArrowsAltH)
// library.add(faUsers)
// library.add(faCalendarDay)
// library.add(faBriefcase)
// library.add(faEye)
// library.add(faEdit)
// library.add(faTrash)
// library.add(faHome)
// library.add(faTachometerAlt)
// library.add(faChevronDown)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Vue.component(
//     'example-component',
//     require('./components/ExampleComponent.vue').default
// );

// import vuetify from './plugins/vuetify'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

// Vue.use(VueGtag, {
// 	config: { id: "G-T7SKJ2NL74" } // Google Analytics Application name: Vivre La Chaux-de-Fonds (GA4)
// });
Vue.use(VueAnalytics, {
    id: 'UA-71694605-14', // Google Analytics Application name: Vivre La Chaux-de-Fonds
    router
})

/* eslint-disable no-new */
new Vue({
    // SvgVue,
    i18n,
    store,
    router,
    // vuetify,
    ...App
})
// Vue.use(SvgVue)

import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import SvgVue from 'svg-vue'

import '~/plugins'
import '~/components'

/* Font Awesome 5 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCalendarDay, faBriefcase, faUserSecret, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faArrowsAltH)
library.add(faUsers)
library.add(faCalendarDay)
library.add(faBriefcase)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Vue.component(
//     'example-component',
//     require('./components/ExampleComponent.vue').default
// );

// import vuetify from './plugins/vuetify'

/* eslint-disable no-new */
new Vue({
	// SvgVue,
  	i18n,
  	store,
  	router,
    // vuetify,
  	...App
})
Vue.use(SvgVue)
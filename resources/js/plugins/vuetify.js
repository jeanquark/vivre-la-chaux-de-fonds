// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
	// icons: {
	//   iconfont: 'md',
	// },
  	theme: {
  		// dark: true,
    	themes: {
      		light: {
        		primary: '#3f51b5',
        		secondary: '#3f51b5',
        		accent: '#3f51b5',
        		error: '#3f51b5',
      		},
      		dark: {
		        primary: '#3f51b5',
        		error: '#3f51b5'
      		},
    	},
  	},
})
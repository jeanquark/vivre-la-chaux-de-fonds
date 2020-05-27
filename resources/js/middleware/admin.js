import store from '~/store'

export default (to, from, next) => {

	// next({ name: 'accueil'} )
	// console.log('Call to [admin] middleware')
  	if (!store.getters['auth/user'] || !store.getters['auth/user']['roles']) {
	    next({ name: 'login' })
  	} else if (!store.getters['auth/user']['roles'].includes('admin')) {
	    next({ name: 'accueil' })
  	} else {
	    next()
  	}
}

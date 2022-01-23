<template>
	<div>
		<router-view />
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		layout: 'backend',
		middleware: ['admin'],
		async created () {
			console.log('Entered created lifecycle hook')
		},
		async mounted () {
			console.log('Entered mounted lifecycle hook')
		},
		data () {
			return {
				collapsed: false,
				menu: [
                    {
                        header: true,
                        title: 'VLCF Admin',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/admin/users',
                        title: 'Users',
                        icon: {
        					element: 'font-awesome-icon',
        					attributes: {
            					icon: 'users',
            					size: 'xs'
        					}
    					}
                    },
                    {
                        href: '/admin/activities',
                        title: 'Activities',
                        icon: {
        					element: 'font-awesome-icon',
        					attributes: {
            					icon: 'calendar-day',
            					size: '6x'
        					}
    					}
                    },
                    {
                        href: '/admin/sponsors',
                        title: 'Sponsors',
                        icon: {
        					element: 'font-awesome-icon',
        					attributes: {
            					icon: 'briefcase'
        					}
    					}
                    }
                ]
			}
		},
		computed: {
			authUser () {
				return this.$store.getters['auth/user']
			}
		},
		methods: {
			onToggleCollapse (collapsed) {
				console.log('onToggleCollapse')
      			console.log(collapsed)
      			this.collapsed = collapsed
    		}	
		}
	}
</script>

<style scoped>
	.collapsed {
		margin-left: 50px;
	}
	.extended {
		margin-left: 350px;
	}
</style>
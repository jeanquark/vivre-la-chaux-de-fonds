<template>
	<div style="">
		<sidebar-menu :menu="menu" :collapsed="collapsed" :relative="false" @toggle-collapse="onToggleCollapse">
			<span slot="toggle-icon"><font-awesome-icon icon="arrows-alt-h" /></span>
		</sidebar-menu>
		<div class="mt-2" :class="[collapsed ? 'collapsed' : 'extended']" style="border: 0px solid orange;">
			<child />
		</div>
	</div>
</template>

<script>
	import { SidebarMenu } from 'vue-sidebar-menu'
	// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

	export default {
		name: 'BackendLayout',
		// middleware: 'admin',
		components: { SidebarMenu },
		beforeCreate () {
			console.log('beforeCreate')
        	document.body.className = 'home'
    	},
    	beforeDestroy () {
    		console.log('beforeDestroy')
    		document.body.className = ''
		},
		created () {
			console.log('Using backend layout!')
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
						href: '/admin',
						title: 'Tableau de bord',
						icon: {
							element: 'font-awesome-icon',
							attributes: {
								icon: 'tachometer-alt',
								size: 'xs'
							}
						}
					},
					{
						href: '/admin/users',
						title: 'Utilisateurs',
						alias: ['/admin/users', '/admin/users/create', '/admin/users/:id', '/admin/users/:id/edit'],
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
						alias: ['/admin/activities', '/admin/activities/create', '/admin/activities/:id', '/admin/activities/:id/edit'],
						icon: {
							element: 'font-awesome-icon',
							class: 'abc',
							attributes: {
								icon: 'calendar-day',
								size: '6x'
							}
						}
					},
					{
						href: '/admin/sponsors',
						title: 'Sponsors',
						alias: ['/admin/sponsors', '/admin/sponsors/create', '/admin/sponsors/:id', '/admin/sponsors/:id/edit'],
						icon: {
							element: 'font-awesome-icon',
							attributes: {
								icon: 'dollar-sign'
							}
						}
					},
					{
						href: '/accueil',
						title: 'Retour au site',
						icon: {
							element: 'font-awesome-icon',
								attributes: {
								icon: 'home',
								size: 'xs'
							}
						}
					},
					{
						title: 'Logout',
						icon: {
							element: 'font-awesome-icon',
							attributes: {
								icon: 'sign-out-alt',
								size: 'xs'
							}
						}
					}
				]
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

<style>
	body {
        background: #fff;
    }

    @media only screen and (min-width: 992px) {
        body {
            background: #fff;
        }
    }

    body.home {
    	background-image: none;
	}
	/*Dialog confirmation*/
	.dg-btn--cancel {
		background-color: #9acd32 !important;
		/*border-color: orange !important;*/
	}
	.dg-btn--ok {
		border-color: #9acd32 !important;
		color: #9acd32 !important;
	}
	.dg-btn-loader .dg-circle {
		/*background-color: #9acd32 !important;*/
	}
	.dg-btn:active, .dg-btn:focus { 
		/*border: 1px dotted red !important;*/
	}
</style>

<style scoped>
	.collapsed {
		margin-left: 50px;
	}
	.extended {
		margin-left: 350px;
	}
	/*>>>.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
		background-color: transparent;
		height: 16px;
		margin-top: 7px;
	}
	>>>.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active .vsm--icon, .v-sidebar-menu .vsm--link_level-1.vsm--link_active .vsm--icon {
		background-color: transparent;
	}
	>>>.v-sidebar-menu .vsm--icon {
	}*/
</style>
<template>
	<div style="">
		<sidebar-menu :menu="menu" :collapsed="collapsed" :relative="false" @toggle-collapse="onToggleCollapse" style="height: 100%;">
			<span slot="toggle-icon"><font-awesome-icon icon="arrows-alt-h" /></span>
		</sidebar-menu>
		<div class="mt-2" :class="[collapsed ? 'collapsed' : 'extended']" style="border: 0px solid orange;">
			<child />
		</div>
	</div>
</template>

<script>
	import { SidebarMenu } from 'vue-sidebar-menu'

	export default {
		name: 'BackendLayout',
		// middleware: 'admin',
		components: { SidebarMenu },
		beforeCreate () {
			console.log('beforeCreate')
        	document.body.className = 'backend'
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
				collapsed: screen.width < 992 ? true : false,
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
						title: 'Activités',
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
						href: '/admin/pages',
						title: 'Pages',
						alias: ['/admin/pages', '/admin/pages/create', '/admin/pages/:id', '/admin/pages/:id/edit'],
						icon: {
							element: 'font-awesome-icon',
							attributes: {
								icon: 'file-alt'
							}
						}
					},
					{
						href: '/',
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
						href: '/logout',
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
    body.backend {
    	background-image: none;
	}
	/* body {
		background-image: none;
	} */
</style>

<style lang="scss" scoped>
	// ::v-deep body {
    //     background: #fff;
    // }
	// >>> body.home {
    // 	background-image: none;
	// }
	// body {
	// 	background: #fff;
	// }
	.collapsed {
		margin-left: 50px;
	}
	.extended {
		margin-left: 350px;
	}
</style>
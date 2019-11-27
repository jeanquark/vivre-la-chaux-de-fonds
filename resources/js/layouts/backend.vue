<template>
	<div>
		<sidebar-menu :menu="menu" :collapsed="collapsed" :relative="false" @toggle-collapse="onToggleCollapse">
			<span slot="toggle-icon"><font-awesome-icon icon="arrows-alt-h" /></span>
		</sidebar-menu>
		<div :class="[collapsed ? 'collapsed' : 'extended']" style="height: 1000px; border: 2px solid orange;">
			collapsed: {{ collapsed }}<br />
			<i class="fab fa-500px"></i><br />
			<child />
		</div>
		<!-- <h1>Backend layout</h1> -->
	</div>
</template>

<script>
	import { SidebarMenu } from 'vue-sidebar-menu'
	import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

	export default {
		name: 'BackendLayout',
		components: { SidebarMenu },
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
	>>>.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
		background-color: transparent;
		height: 16px;
		margin-top: 7px;
	}
	>>>.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active .vsm--icon, .v-sidebar-menu .vsm--link_level-1.vsm--link_active .vsm--icon {
		background-color: transparent;
	}
	>>>.v-sidebar-menu .vsm--icon {
		/*background-color: transparent;*/
	}
</style>
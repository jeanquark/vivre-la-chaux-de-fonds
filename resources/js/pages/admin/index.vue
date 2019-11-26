<template>
	<div>
		<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav> -->
		<sidebar-menu :menu="menu" :collapsed="collapsed" :relative="false" @toggle-collapse="onToggleCollapse" />
		<div :class="[collapsed ? 'collapsed' : 'extended']" style="height: 1000px; border: 2px solid orange;">
			collapsed: {{ collapsed }}
		</div>
		<!-- <div class="container" style="border: 1px solid orange;">
			<div class="row" style="border: 1px dashed green;">
				<div class="col-12">
					abc
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	import axios from 'axios'
	import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
	import { SidebarMenu } from 'vue-sidebar-menu'
	export default {
		// layout: './layouts/basic',
		components: { SidebarMenu },
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
                        href: '/',
                        title: 'Dashboard',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/',
                        title: 'Charts',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/',
                                title: 'Sub Link'
                            }
                        ]
                    }
                ]
			}
		},
		computed: {
			loadedUser () {
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
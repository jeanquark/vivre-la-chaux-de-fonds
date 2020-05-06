import Vue from 'vue'

import { LayoutPlugin, ButtonPlugin, ModalPlugin, TablePlugin, BadgePlugin, CardPlugin, ProgressPlugin, FormPlugin, FormSelectPlugin, FormGroupPlugin, FormInputPlugin, SpinnerPlugin, AlertPlugin, BreadcrumbPlugin, FormCheckboxPlugin, InputGroupPlugin, PaginationPlugin, FormTextareaPlugin, FormFilePlugin, ImagePlugin, LinkPlugin, TabsPlugin, SidebarPlugin, TooltipPlugin, ToastPlugin, CarouselPlugin, CollapsePlugin} from 'bootstrap-vue'

[LayoutPlugin, ButtonPlugin, ModalPlugin, TablePlugin, BadgePlugin, CardPlugin, ProgressPlugin, FormPlugin, FormSelectPlugin, FormGroupPlugin, FormInputPlugin, SpinnerPlugin, AlertPlugin, BreadcrumbPlugin, FormCheckboxPlugin, InputGroupPlugin, PaginationPlugin, FormTextareaPlugin, FormFilePlugin, ImagePlugin, LinkPlugin, TabsPlugin, SidebarPlugin, TooltipPlugin, ToastPlugin, CarouselPlugin, CollapsePlugin].forEach((x) => Vue.use(x))

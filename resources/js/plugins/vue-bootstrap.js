import Vue from 'vue'

import { LayoutPlugin, ButtonPlugin, ModalPlugin, TablePlugin, BadgePlugin, CardPlugin, ProgressPlugin, FormPlugin, FormSelectPlugin, FormGroupPlugin, FormInputPlugin, SpinnerPlugin, AlertPlugin, BreadcrumbPlugin, FormCheckboxPlugin, InputGroupPlugin, PaginationPlugin } from 'bootstrap-vue'

[LayoutPlugin, ButtonPlugin, ModalPlugin, TablePlugin, BadgePlugin, CardPlugin, ProgressPlugin, FormPlugin, FormSelectPlugin, FormGroupPlugin, FormInputPlugin, SpinnerPlugin, AlertPlugin, BreadcrumbPlugin, FormCheckboxPlugin, InputGroupPlugin, PaginationPlugin].forEach((x) => Vue.use(x))

import Vue from 'vue'

import { LayoutPlugin, ButtonPlugin, ModalPlugin, TablePlugin, BadgePlugin, CardPlugin, ProgressPlugin, FormPlugin, FormSelectPlugin, FormGroupPlugin, FormInputPlugin, SpinnerPlugin, AlertPlugin, BreadcrumbPlugin, FormCheckboxPlugin, InputGroupPlugin, PaginationPlugin, FormTextareaPlugin, FormFilePlugin, ImagePlugin } from 'bootstrap-vue'

[LayoutPlugin, ButtonPlugin, ModalPlugin, TablePlugin, BadgePlugin, CardPlugin, ProgressPlugin, FormPlugin, FormSelectPlugin, FormGroupPlugin, FormInputPlugin, SpinnerPlugin, AlertPlugin, BreadcrumbPlugin, FormCheckboxPlugin, InputGroupPlugin, PaginationPlugin, FormTextareaPlugin, FormFilePlugin, ImagePlugin].forEach((x) => Vue.use(x))

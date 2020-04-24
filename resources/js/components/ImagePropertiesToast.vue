<template>
    <!-- <div>
        showImagePropertiesSidebar
    </div> -->

    <b-toast id="example-toast" title="Propriétés de l'image" static no-auto-hide>
        selectedImageProps: {{ selectedImageProps }}<br /><br />
        <b-row class="justify-content-center" style="">
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Largeur (px)" label-for="width">
                    <b-form-input type="number" min="0" id="width" :value="selectedImageProps['width']" @update="updateSelectedImage($event, 'width')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Hauteur (px)" label-for="height">
                    <b-form-input type="number" min="0" id="height" :value="selectedImageProps['height']" @update="updateSelectedImage($event, 'height')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Marges (px)" label-for="margin">
                    <b-form-input type="number" min="0" id="margin" :value="selectedImageProps['style']['margin']" @update="updateSelectedImage($event, 'margin')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Marge droite (px)" label-for="marginRight">
                    <b-form-input type="number" min="0" id="marginRight" :value="selectedImageProps['style']['marginRight']" @update="updateSelectedImage($event, 'marginRight')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Float" label-for="float">
                    <b-form-select :options="['left', 'right']" id="float" :value="selectedImageProps['style']['float']" @change="updateSelectedImage($event, 'float')"></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>

    </b-toast>


    <!-- <b-sidebar aria-controls="details" id="imagePropertiesSidebar" title="Propriétés de l'image" width="360px" shadow v-if="showImagePropertiesSidebar">
        <div class="px-3 py-2">

        </div>
        <template v-slot:footer="{ hide }">
            <div class="d-flex bg-dark text-light justify-content-center align-items-center px-3 py-2">
                <b-button size="sm" @click="hide">Fermer</b-button>
            </div>
        </template>
    </b-sidebar> -->




    <!-- <b-modal size="md" title="Propiétés de l'image" id="imagePropertiesModal" ok-disabled @close="closeModal">
        
        <b-row class="justify-content-center" style="">
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Largeur (px)" label-for="width">
                    <b-form-input type="number" min="0" id="width" v-model="selectedImageProps['width']" @update="updateSelectedImage($event, 'width')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Hauteur (px)" label-for="height">
                    <b-form-input type="number" min="0" id="height" v-model="selectedImageProps['height']" @update="updateSelectedImage($event, 'height')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Marges (px)" label-for="margin">
                    <b-form-input type="number" min="0" id="margin" v-model="selectedImageProps['margin']" @update="updateSelectedImage($event, 'margin')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Marge droite (px)" label-for="marginRight">
                    <b-form-input type="number" min="0" id="marginRight" v-model="selectedImageProps['marginRight']" @update="updateSelectedImage($event, 'marginRight')"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="12" md="12" lg="6">
                <b-form-group label="Float" label-for="float">
                    <b-form-select :options="['left', 'center', 'right']" id="float" v-model="selectedImageProps['style']['float']" @change="updateSelectedImage($event, 'float')"></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>

        <template v-slot:modal-footer>
            <div class="w-100">
                <b-button
                    variant="primary"
                    size="md"
                    class="float-right"
                    @click="closeModal"
                >
                    Fermer
                </b-button>
            </div>
        </template>
    </b-modal> -->
</template>

<script>
	export default {
        props: ['selectedImageProps'],
		async created() {},
		async mounted() {
		},
		data() {
			return {
                showImagePropertiesSidebar: true,
                // selectedImageNode: null,
                // selectedImageProps: {
                //     width: 0,
                //     height: 0,
                //     style: {}
                // },
			}
		},
		computed: {},
		methods: {
            updateSelectedImage (value, type) {
                console.log('updateSelectedImage: ', value, type)
                this.$emit('updateSelectedImageProperties', value, type)
                // if (type === 'width' || type === 'height') {
                //     this.selectedImageNode[type] = value
                // }
                // if (type === 'margin') {
                //     this.selectedImageNode.style.margin = `${value}px`
                // }
                // if (type === 'marginRight') {
                //     this.selectedImageNode.style.marginRight = `${value}px`
                // }
                // if (type === 'float') {
                //     this.selectedImageNode.style.float = value
                // }
            },
            closeModal () {
                console.log('closeModal')
                this.$emit('closeImagePropertiesToast', false)
                // this.$bvModal.hide('imagesModal')
            }
		}
	}
</script>

<style lang="scss" scoped>
	@import './resources/sass/_variables.scss';
</style>

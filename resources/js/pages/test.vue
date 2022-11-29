<template>
    <b-container>
        <h1 class="text-center mb-5">Test
        </h1>

        <b-row align-v="start" class="justify-content-center">
            <b-col cols="12" md="6">
                Last upload: Tuesday 23:06
            </b-col>
            
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'
import Form from 'vform'

export default {
    layout: 'frontend',
    metaInfo() {
        return { title: 'Contact' }
    },
    data() {
        return {
            form: new Form({
            })
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style scoped>
.card {
    border-radius: 10px;
}
.card-right {
    background-color: rgba(255, 255, 255, 0.78);
}
</style>

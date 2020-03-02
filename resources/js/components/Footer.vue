<template>
    <b-container>
        <b-row class="mt-4 mx-0">
            <b-col cols="12" id="footer" style="min-height: 200px;">
                Footer
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        computed: {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    @import './resources/sass/_variables.scss';
    #footer {
        // background-color: $primary;
        border: 2px solid $primary;
    }
</style>
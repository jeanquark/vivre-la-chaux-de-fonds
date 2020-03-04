<template>
    <b-container>
        <b-breadcrumb>
            <b-breadcrumb-item to="/admin/sponsors" class="navigation">
                <font-awesome-icon icon="dollar-sign" />
                <span>Sponsors</span>
            </b-breadcrumb-item>
            <b-breadcrumb-item active>Montrer</b-breadcrumb-item>
        </b-breadcrumb>
    </b-container>
</template>

<script>
export default {
    layout: 'backend',
    mounted() {
        const sponsorId = this.$route.params.id
        console.log('sponsorId: ', sponsorId)
    }
}
</script>

<style scoped></style>

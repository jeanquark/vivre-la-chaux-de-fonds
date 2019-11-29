<template>
	<b-container class="bv-example-row bv-example-row-flex-cols">
  <b-row align-v="start">
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
  </b-row>

  <b-row align-v="center">
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
  </b-row>

  <b-row align-v="end">
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
    <b-col>One of three columns</b-col>
  </b-row>
</b-container>
</template>

<script>
	export default {
		layout: 'frontend',
		metaInfo () {
    		return { title: 'Contact' }
  		},
	}
</script>

<style scoped>
</style>
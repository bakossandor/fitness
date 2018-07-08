<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	}
}
</script>

<style lang="sass">
	@import './assets/base.sass'
	*
		padding: 0
		margin: 0
		box-sizing: border-box
	body, html
		background-color: $base
	
</style>

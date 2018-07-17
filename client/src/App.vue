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
	},
	computed: {
		overflowHiddenBody() {
			return this.$store.state.overflowHiddenBody;
		}
	},
	watch: {
		overflowHiddenBody(newState) {
			if (newState) {
				document.body.classList.add('overflowHiddenBody');
				window.scrollTo(0, 0)
			} else {
				document.body.classList.remove('overflowHiddenBody');
			}
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
	.overflowHiddenBody
		overflow: hidden
</style>

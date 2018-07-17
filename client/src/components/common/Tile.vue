<template>
	<div class='tile' :class='{expandClass: expandClass}'>
		<div class='tileHeader'>
            <h2>{{ title }}</h2>
			<i v-if='!innerWidth' @click='changeView' class='fas fa-expand fa-lg'></i>
        </div>
        <div class='tileBody'>
            <slot></slot>
        </div>
	</div>
</template>

<script>
export default {
    props: ['title'],
	data () {
		return {
			innerWidth: true,
			expandClass: false
		}
	},
	created() {
		const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (w <= 812) {
			this.innerWidth = false
		} else {
			this.innerWidth = true
		}
	},
	methods: {
		changeView() {
			this.expandClass = !this.expandClass;
			this.$store.state.overflowHiddenBody = !this.$store.state.overflowHiddenBody;
			console.log(this.$store)
			console.log(this)
		}
	},
}
</script>

<style lang='sass' scoped>
@import '../../assets/base.sass'
.tile
	.tileHeader
		background-color: $alternate
		border-top-left-radius: $mainRadius
		border-top-right-radius: $mainRadius
		position: relative
		h2
			font-family: $header
			text-align: center
			color: $component
			letter-spacing: 2.5px
		i
			color: $settings
			position: absolute
			top: 50%
			transform: translate(0, -50%)
			right: 0.5rem
	.tileBody
		background-color: $component
		padding: 0.5rem
		border-bottom-left-radius: $mainRadius
		border-bottom-right-radius: $mainRadius
		position: relative
		height: 100%
.expandClass
	position: absolute
	top: 0
	left: 0
	height: 100vh
	width: 100%
	z-index: 100
	background-color: $component
</style>
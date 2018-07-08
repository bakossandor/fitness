<template>
	<div class='tile'>
		<div class='tileHeader'>
            <h2>{{ title }}</h2>
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
			
		}
	}
}
</script>

<style lang='sass' scoped>
@import '../../assets/base.sass'
.tile
	.tileHeader
		background-color: $alternate
		border-top-left-radius: $mainRadius
		border-top-right-radius: $mainRadius
		h2
			font-family: $header
			text-align: center
			color: $component
			letter-spacing: 2.5px
	.tileBody
		background-color: $component
		padding: 0.5rem
		border-bottom-left-radius: $mainRadius
		border-bottom-right-radius: $mainRadius
</style>
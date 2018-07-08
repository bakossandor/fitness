<template>
	<div id='dashboard'>
		<header>
			<div class='headerDiv'>
				<span @click="logout" class='logOut'>Log Out</span>
			</div>
		</header>
		<main>
			<section class='profilePart'>profile</section>
			<section class='calendarPart'>calendar</section>
			<section class='messageBoard'>message</section>
		</main>
		<footer></footer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	},
	methods: {
		logout() {
			alert("logged out")
		}
	}
}
</script>

<style lang='sass' scoped>
@import '../../assets/base.sass'

.headerDiv
	height: 2rem
	text-align: right
	span
		line-height: 2rem
		margin-right: 0.5rem
		font-family: $buttons
		cursor: pointer
		transition: 0.2s
	span:hover
		color: $confirmed
		text-shadow: 0 0 1px
main
	display: flex
	@media (max-width: $breakPoint)
		flex-direction: column
section
	// height: 100px
	border: 1px solid black
.calendarPart
	flex-grow: 2
	@media (max-width: $breakPoint)
		order: 1
.messageBoard, .profilePart
	flex-grow: 1
.profilePart
	@media (max-width: $breakPoint)
		order: 2
.messageBoard
	@media (max-width: $breakPoint)
		order: 3
</style>
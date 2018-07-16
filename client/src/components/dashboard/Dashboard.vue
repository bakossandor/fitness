<template>
	<div id='dashboard'>
		<header>
			<div class='headerDiv'>
				<span @click='logout' class='logOut'>Log Out</span>
			</div>
		</header>
		<main>
			<section class='profilePart'>
				<profile></profile>
				<notifications></notifications>
			</section>
			<section class='calendarPart'>
				<calendar></calendar>
				<workouts></workouts>
			</section>
			<section class='messageBoard'>
				<messages></messages>
			</section>
		</main>
		<footer></footer>
	</div>
</template>

<script>
import Profile from './DashboardProfile.vue'
import Notifications from './DashboardNotifications.vue'
import Calendar from './DashboardCalendar'
import Workouts from './DashboardPersonalWorkout.vue'
import Messages from './DashboardMessages.vue'

export default {
	data () {
		return {
			
		}
	},
	methods: {
		logout() {
			alert("logged out")
		}
	},
	components: {
		Profile,
		Notifications,
		Messages,
		Calendar,
		Workouts
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
	padding: 0 0.5rem
.calendarPart
	flex-basis: 40%
	@media (max-width: $breakPoint)
		order: 1

.messageBoard, .profilePart
	flex-basis: 30%
.profilePart
	@media (max-width: $breakPoint)
		order: 2
		margin-top: 0.3rem
.profilePart > div:first-of-type, .calendarPart > div:first-of-type,
	margin-bottom: 0.5rem
.messageBoard
	@media (max-width: $breakPoint)
		order: 3
		margin-top: 0.3rem
</style>
<template>
	<div>
		<admin-header></admin-header>
		<div class='adminTranings'>
			<div class="adminCalendar">
				<full-calendar></full-calendar>
			</div>
			<div class="adminList">
				<full-calendar></full-calendar>
			</div>
		</div>
	</div>
</template>

<script>
import AdminHeader from './AdminHeader.vue'
import { FullCalendar } from 'vue-full-calendar'
export default {
	data () {
		return {
			
		}
	},
	components: {
		AdminHeader,
		FullCalendar
	}
}
</script>

<style lang="sass" scoped>
@import '~fullcalendar/dist/fullcalendar.css'
</style>
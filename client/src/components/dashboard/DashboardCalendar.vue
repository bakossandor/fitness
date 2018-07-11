<template>
	<div>
		<tile title='Tranining Calendar'>
			<full-calendar></full-calendar>
			<full-calendar :events="events" :defaultView='defaultView' :header='header'></full-calendar>
		</tile>
	</div>
</template>

<script>
import Tile from '../common/Tile.vue'
import { FullCalendar } from 'vue-full-calendar'
export default {
	data () {
		return {
			events: [
				{
					title  : 'event1',
					start  : '2018-07-11',
				},
				{
					title  : 'event2',
					start  : '2018-07-11',
					end    : '2018-07-12',
				},
				{
					title  : 'event3',
					start  : '2018-07-13T12:30:00',
					allDay : false,
				},
			],
			defaultView: "listWeek",
			header: false
		}
	},
	components: {
		Tile,
		FullCalendar
	}
}
</script>

<style lang="sass" scoped>
 @import '~fullcalendar/dist/fullcalendar.css'
</style>
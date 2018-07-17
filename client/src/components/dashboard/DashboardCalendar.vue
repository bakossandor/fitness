<template>
	<div>
		<tile title='Tranining Calendar'>
			<full-calendar :config='calendar.config' :events='calendar.events'></full-calendar>
			<full-calendar :events='list.listEvents' :defaultView='list.listDefaultView' :header='list.listHeader'></full-calendar>
		</tile>
	</div>
</template>

<script>
import Tile from '../common/Tile.vue'
import { FullCalendar } from 'vue-full-calendar'
export default {
	data () {
		return {
			list: {
				listEvents: [
					// {
					// 	title  : 'event1',
					// 	start  : '2018-07-16',
					// },
					// {
					// 	title  : 'event2',
					// 	start  : '2018-07-17',
					// },
					// {
					// 	title  : 'event3',
					// 	start  : '2018-07-13T12:30:00',
					// },
				],
				listDefaultView: "listWeek",
				listHeader: false
			},
			calendar: {
				events: [
					{
						title  : 'event1',
						start  : '2018-07-16',
					},
					{
						title  : 'event2',
						start  : '2018-07-17',
					},
					{
						title  : 'event3',
						start  : '2018-07-18T12:30:00',
					},
				],
				config: {
					header: {
						left:   'title',
						center: '',
						right:  'prev,next'
					},
					defaultView: 'basicTwoWeek',
					views: {
						basicTwoWeek: {
							type: 'basic',
							duration: { day: 3 }
						}
					},
					eventColor: '#757575',
					editable: false,
					aspectRatio: 2.5
				}
			}
		}
	},
	components: {
		Tile,
		FullCalendar
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
@import '~fullcalendar/dist/fullcalendar.css'
#calendar
	font-family: $texts
</style>
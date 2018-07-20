<template>
	<div>
		<admin-header></admin-header>
		<div class='adminTranings'>
			<tile title='Trainings'>
				<full-calendar :config='calendar.config'></full-calendar>
			</tile>
		</div>
	</div>
</template>

<script>
import AdminHeader from './AdminHeader.vue'
import Tile from '../common/Tile.vue'
import { FullCalendar } from 'vue-full-calendar'
export default {
	data () {
		return {
			calendar: {
				config: {
					header: {
						left:   'title',
						center: '',
						right:  'prev,next'
					},
					defaultView: 'month',
					eventColor: '#757575',
					aspectRatio: 2.8
				}
			}
		}
	},
	components: {
		AdminHeader,
		FullCalendar,
		Tile
	}
}
</script>

<style lang="sass" scoped>
@import '~fullcalendar/dist/fullcalendar.css'
@import '../../assets/base.sass'
.adminTranings
	padding: $mainRadius
	font-family: $texts
</style>
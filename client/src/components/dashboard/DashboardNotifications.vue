<template>
	<div>
		<tile title='Notifications'>
            <div class='slotNotifications'>
                <div class="listOfNotif">
					<notif v-for='not in notifications' :key='not.id' :notif='not'></notif>
				</div>
				<div class="notifNavigation">
					<i class="fas fa-caret-square-left fa-lg"></i>
					<i class="fas fa-caret-square-right fa-lg"></i>
					<span>1 / 1</span>
					<button @click='claerNotifs'>clear all</button>
				</div>
            </div>
        </tile>
	</div>
</template>

<script>
import Tile from '../common/Tile.vue'
import Notif from './DashboardSubNotifications.vue'
import JSON from '../../mock/notifications.json'
export default {
	data () {
		return {
			notifications: JSON
		}
	},
	components: {
		Tile,
		Notif
	},
	created() {
		// this.loadNotifs();
		console.log(this.notifications)
	},
	methods: {
		// loadNotifs() {
		// }
		claerNotifs() {
			this.notifications.splice(0, this.notifications.length);
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.listOfNotif
	font-family: $texts
.notifBodyDate
	font-family: $buttons
	font-size: 0.7rem
</style>
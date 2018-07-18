<template>
	<div>
		<admin-header></admin-header>
		<div class="adminNotifcontent">
			<div class="contentLeft">
				<tile title='Message Board'></tile>
			</div>
			<div class="contentMiddle">
				<tile title='Latest Notifications'></tile>
			</div>
			<div class="contentRight">
				<tile title='Send Notifications'></tile>
			</div>
		</div>
	</div>
</template>

<script>
import AdminHeader from './AdminHeader.vue'
import Tile from '../common/Tile.vue'
export default {
	data () {
		return {
			
		}
	},
	components: {
		AdminHeader,
		Tile
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.adminNotifcontent
	display: flex
	@media (max-width: $breakPoint)
		flex-direction: column
.adminNotifcontent > div
	width: 100%
	padding: $mainRadius
</style>
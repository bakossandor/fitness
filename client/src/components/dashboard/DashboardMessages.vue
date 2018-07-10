<template>
	<div class='messageBoard'>
		<tile title='Message Board'>
			<div class="messagesContainer">
				<message v-for='singleMessage in messages' :key='singleMessage.id' :message='singleMessage'></message>
			</div>
			<div class="addNewMessage">
				<input type="text">
				<i class="fas fa-share-square fa-lg"></i>
			</div>
		</tile>
	</div>
</template>

<script>
import Tile from '../common/Tile.vue'
import JSON from '../../mock/messages.json'
import Message from './DashboardSubMessages.vue'
export default {
	data () {
		return {
			messages: JSON
		}
	},
	components: {
		Tile,
		Message
	},
	created() {
		console.log("messages :", this.messages)
	}
}
</script>

<style lang="sass" scoped>

</style>
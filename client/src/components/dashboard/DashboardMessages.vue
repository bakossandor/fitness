<template>
	<div class='messageBoard'>
		<tile title='Message Board'>
			<div class="messagesContainer">
				<message v-for='singleMessage in messages' :key='singleMessage.id' :message='singleMessage'></message>
			</div>
			<div class="addNewMessage">
				<textarea type="text" placeholder="type new message"></textarea>
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
@import '../../assets/base.sass'
.addNewMessage
	border: 1px solid black
	border-radius: $mainRadius
	padding: $mainRadius
	display: flex
	vertical-align: middle
	
	textarea
		display: block
		width: 100%
		background-color: $component-tercial
		border: none
		border-radius: $subRadius
		padding-left: 5px
	textarea:focus
		 outline:0px !important
	i
		margin-left: 5px
		display: block
		align-self: center
</style>
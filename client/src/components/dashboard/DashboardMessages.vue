<template>
	<div class='messageBoard'>
		<tile title='Message Board'>
			<div class="messagesContainer" :class='{mobileExpandedInnerContainer: overflowHiddenBody}'>
				<message v-for='singleMessage in messages' :key='singleMessage.id' :message='singleMessage'></message>
			</div>
			<div class="addNewMessage" :class='{mobileExpandedType: overflowHiddenBody}'>
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
	},
	computed: {
		overflowHiddenBody() {
			return this.$store.state.overflowHiddenBody;
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.messagesContainer
	height: 75vh
	overflow: auto
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
.mobileExpandedType
	position: fixed
	bottom: 5px
	width: 95%
.mobileExpandedInnerContainer
	height: 85%
	overflow: auto
</style>
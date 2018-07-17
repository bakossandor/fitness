<template>
	<div>
        <div class='eachMessage'>
            <div class='messageHeader'>
                <i class="fas fa-user-alt"></i>
                <p>{{ message.issuer }}</p>
                <p class='messageHeaderDate'>{{ message.dateTime }}</p>
            </div>
            <div class='messageBody'>
                <p class='messageBodyDetails'>{{ message.message }}</p>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    props: ['message'],
	data () {
		return {
            hideBody: true
		}
	},
	components: {

	},
	created() {
		
	},
	methods: {
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.eachMessage
    margin-bottom: 5px
    font-family: $texts
    background-color: $component-tercial
    border-radius: $mainRadius
.messageHeader
    padding: $mainRadius
    border-radius: $mainRadius
    border: 1px solid black
    background-color: $component
    font-size: 0.8rem
    i, p
        display: inline-block
    .messageHeaderDate
        float: right
        font-family: $buttons
        font-size: 0.7rem
        margin-top: 3px
        font-weight: bold
.messageBody
    font-size: 0.8rem
    padding: 5px   
</style>
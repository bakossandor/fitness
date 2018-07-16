<template>
	<div class='subWorkoutContainerDiv'>
		<div class="subWorkoutHeader">
            <p>{{ workout.title }}</p>
        </div>
        <div class="subWorkoutBody">
            <p class="subWorkoutBodyDate">issued at {{ workout.dateTime }}</p>
            <p class="subWorkoutBodyFileName">{{ workout.fileName }}</p>
        </div>
	</div>
</template>

<script>

export default {
    props: ['workout'],
	data () {
		return {
			
		}
	},
	components: {
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.subWorkoutContainerDiv
    margin-bottom: 5px
    font-family: $texts
    background-color: $component-tercial
    border-radius: $mainRadius
.subWorkoutHeader
    padding: $mainRadius
    border-radius: $mainRadius
    border: 1px solid black
    background-color: $component
    // .messageHeaderDate
    //     float: right
    //     font-family: $buttons
    //     font-size: 0.7rem
    //     margin-top: 3px
    //     font-weight: bold
.subWorkoutBody
    font-size: 0.8rem
    padding: 5px
.subWorkoutBodyFileName
	font-family: $buttons
	font-weight: bold
</style>
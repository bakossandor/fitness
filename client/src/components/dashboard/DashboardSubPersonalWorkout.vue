<template>
	<div class='subWorkoutContainerDiv'>
		<div class="subWorkoutHeader">
            <p>{{ workout.title }}</p>
        </div>
        <div class="subWorkoutBody">
            <p>issued at {{ workout.dateTime }}</p>
            <p>{{ workout.fileName }}</p>
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
</style>
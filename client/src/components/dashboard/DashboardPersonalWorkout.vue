<template>
	<div>
		<tile title='Personal Workouts'>
			<workout v-for='workLoad in workouts' :key='workLoad.id' :workout='workLoad'></workout>
		</tile>
	</div>
</template>

<script>
import Tile from '../common/Tile.vue'
import Workout from './DashboardSubPersonalWorkout.vue'
import JSON from '../../mock/workout.json'
export default {
	data () {
		return {
			workouts: JSON
		}
	},
	components: {
		Tile,
		Workout
	}
}
</script>

<style lang="sass" scoped>

</style>
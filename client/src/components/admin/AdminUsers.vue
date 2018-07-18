<template>
	<div>
		<admin-header></admin-header>
		<div class="adminUsersTable">
			<vue-good-table :columns='table.columns' :rows='table.rows'></vue-good-table>
		</div>
	</div>
</template>

<script>
import AdminHeader from './AdminHeader.vue'
import { VueGoodTable } from 'vue-good-table'
import JSON from '../../mock/users.json'
export default {
	data () {
		return {
			table: {
				columns: [
					{
						label: 'f.name',
						field: 'firstName',
					},
					{
						label: 'l.name',
						field: 'lastName',
					},
					{
						label: 'email',
						field: 'email',
					},
					{
						label: 'reg. time',
						field: 'registerTime',
					},
					{
						label: 'last login',
						field: 'lastLoginDateTime',
					},
					{
						label: 'completed trainigns',
						field: 'completedtrainings',
					},
					{
						label: 'missed trainigns',
						field: 'missedTrainings',
					},
				],
				rows: JSON
			}
		}
	},
	components: {
		AdminHeader,
		VueGoodTable
	}
}
</script>

<style lang="sass" scoped>
@import '~vue-good-table/dist/vue-good-table.css'
</style>
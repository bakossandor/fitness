<template>
	<div>
        <div class='eachMessage'>
            <div class='messageHeader'>
                <i class="fas fa-user-alt fa-lg"></i>
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

</style>
<template>
	<div>
        <div class='eachNotif' :class='notif.type'>
            <div class='notifHeader'>
                <p @click='expandThisNotif'>{{ notif.subject }}</p>
                <i @click='clearThisNotif' class="far fa-minus-square"></i>
            </div>
            <div class='notifBody' v-if='!hideBody'>
                <p class='notifBodyDate'>{{ notif.date }}</p>
                <p class='notifBodyDetails'>{{ notif.details }}</p>
            </div>
        </div>
	</div>
</template>

<script>
export default {
    props: ['notif'],
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
        expandThisNotif() {
            this.hideBody = this.hideBody ? false : true
        },
		clearThisNotif(event) {
        }
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.eachNotif
	margin-bottom: 4px
	border-radius: $mainRadius
    font-family: $texts
.notifHeader
	padding: $mainRadius
	border-radius: $mainRadius
	i, p
		display: inline-block
	i
		float: right
.notifHeader
    i, p
        cursor: pointer
.notifBodyDate
	font-family: $buttons
	font-size: 0.7rem

//defining notif types
.system
	background-color: $system-alter
.system .notifHeader
	background-color: $system
</style>
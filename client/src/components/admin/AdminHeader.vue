<template>
	<div class='adminHeader'>
		<router-link :to='{name: "adminUsers"}' active-class='activeClass'>Users</router-link>
        <router-link :to='{name: "adminNotifications"}' active-class='activeClass'>Notifications</router-link>
        <router-link :to='{name: "adminTrainings"}' active-class='activeClass'>Tranings</router-link>
        <router-link :to='{name: "adminLogin"}' active-class='activeClass'>Log Out</router-link>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../../assets/base.sass'
.adminHeader
    padding: $mainRadius
a
    color: #FFF
    text-decoration: none
    font-family: $buttons
    cursor: pointer
    transition: 0.2s
    margin-right: 0.3rem
a:hover
    color: $confirmed
    text-shadow: 0 0 1px
a:last-of-type
    float: right
    margin-right: 0
.activeClass
    color: #BA68C8
</style>
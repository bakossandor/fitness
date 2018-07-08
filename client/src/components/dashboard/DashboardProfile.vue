<template>
	<div>
        <tile title='Profile'>
            <div class='slotProfile'>
                <div>
                    <p class='userName'>{{ firstName }} {{ lastName }}</p>
                </div>
                <div class='slotPicture'>
                    <div class='fakePicture'>
                        <img src='http://via.placeholder.com/126x126' alt='profile' @error='imageLoadError'>
                        <p v-if='!imageIsLoaded'>{{ firstName.split('')[0] }} {{ lastName.split('')[0] }}</p>
                    </div>
                    <i @click='settings' class='fas fa-cog fa-2x'></i>
                </div>
            </div>
        </tile>
	</div>
</template>

<script>
import Tile from '../common/Tile.vue'
export default {
	data () {
		return {
            firstName: 'Sándor',
            lastName: 'Bakos',
            imageIsLoaded: true
		}
    },
    components: {
        Tile
    },
    methods: {
        imageLoadError() {
            this.imageIsLoaded = false
        },
        settings() {
            alert('settings')
        }
    }
}
</script>

<style lang='sass' scoped>
@import '../../assets/base.sass'
.slotProfile
    font-family: $texts
    .userName
        text-align: center
        margin-bottom: 0.3rem
    .slotPicture
        width: 8rem
        height: 8rem
        border: 1px solid black
        border-radius: $mainRadius
        margin: auto
        background-color: $imageBG
        position: relative
        .fakePicture
            border-radius: $mainRadius
            color: $imageFont
            p
                line-height: 8rem
                text-align: center
                font-size: 3rem
            img
                width: 100%
                height: 100%
                border-radius: $mainRadius
        i
            position: absolute
            bottom: 0
            right: -1rem
            color: $settings
            text-shadow: 0 0 3px
            cursor: pointer
            transition: 0.3s
        i:hover
            color: $settingsChange
            text-shadow: 0 0 5px $settings
               
</style>
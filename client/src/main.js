import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/router'
import {store} from './store/store'

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})

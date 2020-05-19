import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer'//加载MockServer即可
import './filters'//加载过滤器
Vue.component(Button.name,Button)
new Vue({
	el:'#app',
	components:{App},
	template:'<App/>',
	router,
	store
})
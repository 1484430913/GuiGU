import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'*/
const Msite=()=>import('../pages/Msite/Msite.vue')
const Search=()=>import('../pages/Search/Search.vue')
const Order=()=>import('../pages/Order/Order.vue')
const Profile=()=>import('../pages/Profile/Profile.vue')
const  Login=()=>import('../pages/Login/Login.vue')
import Shop from '../pages/Shop/Shop.vue'
import goods from '../pages/Shop/Shopgoods/Shopgoods.vue'
import info from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ratings from '../pages/Shop/Shopratings/Shopratings.vue'
Vue.use(VueRouter)
export default new VueRouter({
	routes:[
		{
			path:'/msite',
			component:Msite,
			meta: {
			  showFooter: true
			}
		},
		{
			path:'/search',
			component:Search,
			meta: {
			  showFooter: true
			}
		},
		{
			path:'/order',
			component:Order,
			meta: {
			  showFooter: true
			}
		},
		{
			path:'/profile',
			component:Profile,
			meta: {
			  showFooter: true
			}
		},
		{
			path:'/',
			redirect:'/msite'
		},
		{
			path:'/login',
			component:Login,
			
		},
		{
			path:'/shop',
			component:Shop,
			children:[
				{
					path:'/shop/goods',
					component:goods
				},
				{
					path:'/shop/info',
					component:info
				},
				{
					path:'/shop/ratings',
					component:ratings
				},
				{
					path:'',
					redirect:'/shop/goods'
				},
			]
		}
	]
})
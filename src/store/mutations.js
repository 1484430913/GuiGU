import {
ADDRESS,FOODLIST,
SHOPS,
RECEIVE_USER_INFO,
RESET_USER_INFO,
RECEIVE_GOODS,
RECEIVE_RATINGS,
RECEIVE_INFO,
INCREMENT_FOOD_COUNT,
DECREMENT_FOOD_COUNT,
RECEIVE_SEARCH_SHOPS
}  from './mutation-types.js' 
import Vue from 'vue'
export default{
	[ADDRESS](state,{address}){
		state.address=address
	},
	[FOODLIST](state,{foodlist}){
		state.foodlist=foodlist
	},
	[SHOPS](state,{shops}){
		state.shops=shops
	},
	[RECEIVE_USER_INFO] (state, {userInfo}) {
	  state.userInfo = userInfo
	},
	[RESET_USER_INFO] (state) {
	  state.userInfo = {}
	},
	[RECEIVE_GOODS](state,{goods}){
		state.goods=goods
	},
	[RECEIVE_RATINGS](state,{ratings}){
		state.ratings=ratings
	},
	[RECEIVE_INFO](state, {info}) {
	  state.info = info
	},
	[INCREMENT_FOOD_COUNT](state, {food}) {
	  if(!food.count) { // 第一次增加
	    // food.count = 1  // 新增属性(没有数据绑定)
	    /*
	    对象
	    属性名
	    属性值
	     */
	    Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定
	    // 将food添加到cartFoods中
	   
	  } else {
	    food.count++
	  }
	},
	[DECREMENT_FOOD_COUNT](state, {food}) {
	  if(food.count) {// 只有有值才去减
	    food.count--
	  }
	},
	[RECEIVE_SEARCH_SHOPS](state, {searchShops}) {
	  state.searchShops = searchShops
	},
}
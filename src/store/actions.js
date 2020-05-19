import {ADDRESS,FOODLIST,SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,RECEIVE_SEARCH_SHOPS} from './mutation-types.js' 
import {reqAddress,reqFoodList,reqShops,reqUserInfo,reqLogout,reqShopInfo,reqShopRatings,reqShopGoods, reqSearchShop } from '../api'
export default{
	//异步获取地址
  async	getaddress({commit,state}){
		const geohash=state.longitude+','+state.latitude
	    const result=await reqAddress(geohash)
		if(result.code===0){
			const address=result.data
			commit(ADDRESS,{address})
		}
	},
	//异步获取食品分类列表
	async getfoodlist({commit,state}){
		    const result=await reqFoodList()
			if(result.code===0){
				const foodlist=result.data
				commit(FOODLIST,{foodlist})
			}
		},
	//异步获取商家列表
	async getshops({commit,state}){
		const{longitude,latitude}=state
		const result=await reqShops(longitude, latitude)
		if(result.code===0){
			const shops=result.data
			commit(SHOPS,{shops})
			
		}
		
	},
	//同步记录用户信息
	recordUser({commit}, userInfo) {
	  commit(RECEIVE_USER_INFO, {userInfo})
	},
	async getUserInfo({commit}) {
	  const result = await reqUserInfo()
	  if (result.code === 0) {
	    const userInfo = result.data
	    commit(RECEIVE_USER_INFO, {userInfo})
	  }
	},
	async logout({commit}){
		 const result=await reqLogout()
		 if(result.code===0){
			 commit(RESET_USER_INFO)
		 }
	},
	
	// 异步获取商家信息
	async getShopInfo({commit}) {
	  const result = await reqShopInfo()
	  if (result.code === 0) {
	    const info = result.data
	    commit(RECEIVE_INFO, {info})
	  }
	},
	async getShopRatings({commit}, callback) {
	  const result = await reqShopRatings()
	  if (result.code === 0) {
	    const ratings = result.data
	    commit(RECEIVE_RATINGS, {ratings})
	    // 数据更新了, 通知一下组件
	    callback && callback()
	  }
	},
	
	// 异步获取商家商品列表
	async getShopGoods({commit}, callback) {
	  const result = await reqShopGoods()
	  if (result.code === 0) {
	    const goods = result.data
	    commit(RECEIVE_GOODS, {goods})
	    // 数据更新了, 通知一下组件
	    callback && callback()
	  }
	},
	updateFoodCount({commit}, {isAdd, food}) {
	  if (isAdd) {
	    commit(INCREMENT_FOOD_COUNT, {food})
	  } else {
	    commit(DECREMENT_FOOD_COUNT, {food})
	  }
	},
	async searchshop({commit,state},keyword){
		const geohash=state.longitude+','+state.latitude
		const result=await reqSearchShop(geohash,keyword)
		if(result.code===0){
			const searchShops=result.data
			commit()
		}
	}
}
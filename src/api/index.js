//包含n个接口请求函数
import ajax from './ajax.js'


//1 根据经纬度获取位置详情

export const reqaddress=(geohash)=>{
	ajax(`/position/${geohash}`)
}
//2获取食物分类列表
export const foodlist=()=>{
	ajax(`/index_category`)
}
//3根据经纬度获取商家列表
export const shoplist=({longitude,latitude})=>{
	ajax(`/shops`,{longitude,latitude})
}
//4根据经纬度和关键字搜索商铺列表
export const shops=({geohash,keyword})=>{
	ajax(`/search_shops`,{geohash,keyword})
}
//5获取一次性验证码
export const captach=()=>{
	ajax(`/captcha`)
}
//6用户名密码登录
export const userpwd=({name,pwd,captcha})=>{
	ajax(`/login_pwd`,{name,pwd,captcha},'POST')
}
//7发送短信验证码
export const phone=(phone)=>{
	ajax(`/sendcode`,phone)
}
//8手机号验证码登录
export const captcha=({phone,code})=>{
	ajax(`/login_sms`,{phone,code},'POST')
}
//9根据会话获取用户信息
export const info=()=>{
	ajax(`/userinfo`)
}
//10用户登出
export const logout=()=>{
	ajax(`/logout`)
}
import axios from 'axios'
//封装ajax函数模块
export default function ajax((url,data={},type='GET'){
	return new Promise((resolve,reject)=>{
		let promise
     if(type='GET'){
		 let datastr
		 Object.key(data).forEach(key=>{
			 datastr+=key+'='+data[key]+'&'
			 
		 })
		 if(datastr!==''){
			 datastr=datastr.substring(0,datastr.lastIndexOf('&'))
			 url=url+'?'+datastr
		 }
		 //发送get请求
		 promise=axios.get(url)
		 else{
			 //发送post请求
			 promise=axios.post(url,data)
		 }
		 promise.then(function(response){
			 resolve(response.data)
		 }).catch(function(error){
			 reject(error.message)
		 })
		}
	})
})
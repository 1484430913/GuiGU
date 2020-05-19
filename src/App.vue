<template>
	<div id="app">
	<router-view/>
	<Footer v-show="$route.meta.showFooter"/> 
	</div>
</template>

<script>
	import Footer from './commponents/Footer/footer.vue'
	import {mapActions} from 'vuex'
	
	export default{
		mounted() {
		this.getaddress()
		this.getUserInfo()
		},
		components:{
			Footer
		},
		methods:{
		 ...mapActions(['getaddress','getUserInfo'])
		}
	}
	
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    color:red
</style>

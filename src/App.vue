<template>
	<div id="app">
	<router-view/>
	<Footer/> 
	</div>
</template>

<script>
	import Footer from './commponents/Footer/footer.vue'
	export default{
		components:{
			Footer
		}
	}
	
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    color:red
</style>

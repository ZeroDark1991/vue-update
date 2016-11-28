<template>
	<h1>{{msg}}</h1>
</template>
<script>
	export default {
		data(){
			return {
				msg: 'foo'
			}
		},
		created(){
		},
		update() {
      this.msg = 'it works -- foo -->'+ Date.now()
		},
		beforeRouteEnter(to, from, next) {
      next(vm => console.log('mix works fine'))
		}
	}
</script>
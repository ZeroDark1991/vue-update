<template>
	<h1>{{msg}}</h1>
</template>
<script>
	export default {
		data(){
			return {
				msg: 'bar'
			}
		},
		created(){
      this.$pushToUpdate('/foo')
		},
		update:function() {
      this.msg = 'it works -- bar -->'+ Date.now()
		},
		beforeRouteEnter(to, from, next) {
      next(vm => console.log('mix works fine'))
		}
	}
</script>
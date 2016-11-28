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
      this.$pushToUpdate('/foo')
		},
		update:function(vm) {
      vm.msg = 'it works -- bar -->'+ Date.now()
		},
		beforeRouteEnter(to, from, next) {
      next(vm => console.log('mix works fine'))
		}
	}
</script>
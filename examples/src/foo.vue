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
		update(vm) {
      vm.msg = 'it works -- foo -->'+ Date.now()
		},
		beforeRouteEnter(to, from, next) {
      next(vm => console.log('mix works fine'))
		}
	}
</script>
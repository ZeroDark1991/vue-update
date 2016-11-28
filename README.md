requires vue-router
## Install

	$ npm install vue-update vue-router --save-dev

main.js:

	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import VueUpdate from 'vue-update'
	
	Vue.use(VueRouter)
	Vue.use(VueUpdate)

## usage

	// sepecific which route needs to update data
	// paths will be pushed to a array
	
	this.$pushToUpdate('/foo')

in /foo:

	update(vm){
		// do something
		vm.msg = 'foo'
		// once it's triggerd, '/foo' will be removed from the list
	}

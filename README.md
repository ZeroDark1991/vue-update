requires Vuejs 2.0
works with vue-router
## Install
```
	$ npm install vue-update vue-router --save-dev
```
main.js:
```js
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import VueUpdate from 'vue-update'
	
	Vue.use(VueRouter)
	Vue.use(VueUpdate)
```

## usage
see /example
in bar.vue
```js
	// sepecific which route needs to update data
	// paths will be pushed to an Array
	
	this.$pushToUpdate('/foo')
```js

in foo.vue:
```js
	export default {
      data(){
        return {
	        msg: ''
        }
      },
      update(){
        // do something
        this.msg = 'foo'
        // once triggerd, '/foo' will be removed from the list
      }		
	}
```

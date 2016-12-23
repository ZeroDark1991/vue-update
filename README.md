### Requires Vuejs 2.0

Must works with vue-router

Use ``` this.$pushToUpdate('/foo') ``` to push a route path into the updateQueue.

Then write the code you want to excute in the hook ``` update(){} ``` which triggers when the current route matches anyone in the updateQueue.

You can use it to manually control whether data should be updated when route enters, or do some things else.

It can be helpful in some cases especially in 'keep-alive' mode.

## Install
```
	$ npm install vue-update --save-dev
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
```
  npm install
  npm run dev
```
in bar.vue:

You can push the ref of the target route (which should do something when enters) into a queue

```js
	// sepecific which route needs to update data
	// paths will be pushed to an Array
	
	this.$pushToUpdate('/foo')
	
	// or you can pass the route name
	this.$pushToUpdate('foo')
```

in foo.vue:

Here the update hook function will invoke if the update queue contains this route

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



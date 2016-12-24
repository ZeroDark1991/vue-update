# vue-update [![npm package](https://img.shields.io/npm/v/vue-update.svg)](https://www.npmjs.com/package/vue-update)


> Requires Vuejs 2.0

> Must works with [vue-router](https://github.com/vuejs/vue-router)

You can use it to manually control whether data should be updated when route enters, or do some things else.

It can be helpful in some cases, especially in 'keep-alive' mode.

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
  $ npm install
  $ npm run dev
```

Use ``` this.$pushToUpdate('/foo') ``` to push a route path into the updateQueue.

In bar.vue:

```js
	// sepecific which route needs to update data
	// paths will be pushed to an Array
	
	this.$pushToUpdate('/foo')
	
	// or you can pass the route name
	this.$pushToUpdate('foo')
```

Then when you navigate to a route the matches anyone in the updateQueue, the hook function ``` update(){} ``` in the target route will trigger.

In foo.vue:

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



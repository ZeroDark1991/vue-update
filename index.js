(function(){
	function VueUpdate(Vue){
		var warn = Vue.util.warn || function(){}
		var updateList = []

		Vue.prototype.$pushToUpdate = function(path){
			if(!ifExists(path)){
        updateList.push(path)
        console.log('pushed'+ path)
			}
		}

    function ifExists(path){
    	var checkResult = updateList.some(function(item){
    		return item === path
    	})

    	return checkResult
    }
  
		function hasRouter(vm){
			if(!vm.$route){
				warn(
          'requires vue-router',
          vm
				)
				return false
			}else {
				return true
			}
		}

    Vue.mixin({
    	beforeRouteEnter: function(to, from, next){
        next(function(vm) {
        	var cb = vm.$options.update || function(){}
        	if(!hasRouter(vm)) return
        	if(Object.prototype.toString.call(cb) === '[object Function]'){
        		var path = vm.$route.path
            if(ifExists(path)){
            	cb.bind(vm)()
            	// remove from updateList after updated
            	updateList.splice(updateList.indexOf(path),1)
            }
        	}else{
        		warn(
              'update hooks only accepts function',
              vm
        		)        		
        	}
        })
    	}
    })
	}

  // auto install
  if (typeof Vue !== 'undefined') {
    VueUpdate(Vue)
  }

  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = VueUpdate
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return VueUpdate })
  } else if (typeof window !== 'undefined') {
    window.VueUpdate = VueUpdate
  }	
})()
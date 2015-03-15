(function(app,undefined){
	'use strict';

	/**
	 * @ngdoc function
	 * @name todoApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the todoApp
	 */
	app.controller('MainCtrl', 
		[ 'localStorageService',
      'todoModel',
  		function (localStorageService, todoModel) {

  		  	var vm = this;  		  	  		  	
  		    vm.model = {
  					    	todo:'',
  					    	todos: (todoModel.loadTodo())
  					    		};

          vm.api= {
            addTodo:addTodo,
            removeTodo:removeTodo
          }; 


          function addTodo(){
            vm.model.todos = todoModel.addTodo(vm.model.todo);
          }

          function removeTodo(index){
            vm.model.todos = todoModel.removeTodo(index);
          }
          
          

  	  }]);

}(angular.module('todoApp')));
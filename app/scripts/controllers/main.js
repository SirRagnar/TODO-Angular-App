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
	['localStorageService',
	function (localStorageService) {

	  	var self=this;
	  	var todosInStore = localStorageService.get('todos');
	  	this.model = this.model || {};
	    this.model = {
				    	todo:'',
				    	todos: todosInStore || []
				    		};

	    this.api = this.api || {};
	    this.api = {
	    	addTodo: function(){
	    		self.model.todos.push(self.model.todo);
	    		localStorageService.set('todos', self.model.todos);
	    		self.model.todo='';
	    	},

	    	removeTodo: function(index){
	    		self.model.todos.splice(index, 1);
	    		localStorageService.set('todos', self.model.todos);
	    	}
	    };
  }]);

}(angular.module('todoApp')));
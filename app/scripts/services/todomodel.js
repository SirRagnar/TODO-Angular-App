(function(app,undefined){
  'use strict';

  /**
   * @ngdoc service
   * @name todoApp.TODOModel
   * @description
   * # TODOModel
   * Factory in the todoApp.
   */
   /* jshint validthis: true */
  app.factory('todoModel', todoModel);

  /* jshint validthis: true */
  todoModel.$inject=['localStorageService','$log'];

  function todoModel(localStorageService,log){
    
    // Public API here
    /* jshint validthis: true */
    var service = {
      loadTodo: loadTodo,
      addTodo: addTodo,
      removeTodo: removeTodo
    };

    return service;

    // API Impl
    /**
     * @description
     * Load to do list from local storage
     */
    function loadTodo(){
      log.log('loadTodo called');
      return localStorageService.get('todos') || [];
    }

    /**
     * @description
     * Add a to do to the to do list. Then cleans the to do and
     * return the to do list
     */
    function addTodo(todo){
      log.log('addTodo called');
      var todos = loadTodo();
      todos.push(todo);
      localStorageService.set('todos',todos);
      todo='';   
      return todos;   
    }

    /**
     * @description
     * Remove a task from the to do list.
     * then return the to do list
     */
    function removeTodo(index){
      log.log('removeTodo called');
      var todos = loadTodo();
      todos.splice(index, 1);
      localStorageService.set('todos', todos);     
      return todos; 
    }

  }


}(angular.module('todoApp')));

'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('La lista inicial debe contener un elemento', function () {
    expect(MainCtrl.model.todos.length).toBe(0);
  });

  it('Deberían añadirse nuevos elementos a la lista', function () {
    MainCtrl.model.todo = 'Test 1';
    MainCtrl.api.addTodo();
    expect(MainCtrl.model.todos.length).toBe(1);
  });

  it('Deberían eliminarse elementos de la lista', function () {
    MainCtrl.model.todo = 'Test 1';
    MainCtrl.api.addTodo();
    MainCtrl.api.removeTodo(0);
    expect(MainCtrl.model.todos.length).toBe(0);
  });


});

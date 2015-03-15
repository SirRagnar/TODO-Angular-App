'use strict';

describe('Service: TODOModel', function () {

  // load the service's module
  beforeEach(module('todoApp'));

  // instantiate service
  var TODOModel;
  beforeEach(inject(function (_TODOModel_) {
    TODOModel = _TODOModel_;
  }));

  it('should do something', function () {
    expect(!!TODOModel).toBe(true);
  });

});

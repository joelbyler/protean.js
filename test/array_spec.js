require('should');
require(__dirname + '/../lib/index');

describe('Array', function() {
  context('that is empty', function() {
    var test_array = [];
    it('is empty', function() {
      (test_array).empty().should.equal(true);
    });
  });
  context('full of integers', function() {
    var test_array = [1, 2, 3];
    it('is not empty', function() {
      (test_array).empty().should.equal(false);
    });
  });
  context('full of chars', function() {
    var test_array = ['a', 'b', 'c'];
    it('is not empty', function() {
      (test_array).empty().should.equal(false);
    });
  });
  context('of browser names', function() {
    browsers = ['Chrome', 'Firefox', 'Safari', 'Opera', 'IE'];
    it('has a count', function() {
      browsers.count().should.equal(5);
    });
  });
});


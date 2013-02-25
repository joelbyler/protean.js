var should = require('should');
var Person = require(__dirname + '/../src/protean_number');

describe('Integer Extension', function() {
  it('Knows what\'s next', function() {
    1.0.next().should.equal(2);
    (-1).next().should.equal(0);
  });
});


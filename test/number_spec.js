var should = require('should');
var Number = require(__dirname + '/../src/protean_number');
describe('Integer Extension', function() {
  it('Knows what\'s next', function() {
    (1.0).next().should.equal(2);
    (-1).next().should.equal(0);
  });
  it('Knows when it is odd', function() {
    (1.0).odd().should.equal(true);
    (2.0).odd().should.equal(false);
  });
  it('Knows when it is even', function() {
    (1.0).even().should.equal(false);
    (2.0).even().should.equal(true);
  });

  it('Can do thing n times', function() {
    var test_var = '';
    (5.0).times( function() {test_var=test_var+'a';} );
    test_var.should.equal('aaaaa');
  });
});


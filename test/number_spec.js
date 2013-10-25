require('should');
require(__dirname + '/../index');

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
    var r = '';
    (3).times( function() {r=r+'a';} );
    r.should.equal('aaa');
  });
  it('Knows what its absolute value is', function() {
    (12).abs().should.equal(12);
    (-6).abs().should.equal(6);
  });
  it('Knows how to truncate a number', function() {
    (12.5).floor().should.equal(12);
    (-6.2).floor().should.equal(-7);
  });
  it('Knows how to find the ceiling of anumber', function() {
    (12.5).ceil().should.equal(13);
    (-6.2).ceil().should.equal(-6);
  });
});


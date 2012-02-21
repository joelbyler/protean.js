var should = require('should');
var Person = require(__dirname + '/../src/js_extensions');

describe('String Extension', function() {
  it('should be able to trim a value of \'   text with extra spaces   \'', function() {
    var message = '   text with extra spaces   '.trim();
    message.should.equal('text with extra spaces');
  });
  it('should be able to right trim a value of \'text with extra spaces on the right   \'', function() {
    var message = 'text with extra spaces on the right   '.rtrim();
    message.should.equal('text with extra spaces on the right');
  });
  it('should be able to trim a value of \'   text with extra spaces on the left\'', function() {
    var message = '   text with extra spaces on the left'.ltrim();
    message.should.equal('text with extra spaces on the left');
  });
  it('should be able to chop the last char from string \'12345\'', function() {
    var message = '12345'.chop();
    message.should.equal('1234');
  });
  it('should be able to change the first character of \'smallcase\' to upper case', function() {
    var message = 'smallcase'.capitalize();
    message.should.equal('Smallcase');
  });
  it('should be able to match \'smallcase\' to \'smallcase\' (case sensitive)', function() {
    var comparison = 'smallcase'.str('smallcase');
    comparison.should.equal(0);
  });
  it('should be able to match \'smallcase\' to \'SmALlCaSe\' (case insensitive)', function() {
    var comparison = 'smallcase'.casecmp('SmALlCaSe');
    comparison.should.equal(0);
  });
  it('should be able to center the value \'foo\' with spaces to make it 9 wide (3 spaces on each side)', function() {
    var message = 'foo'.center(9);
    message.should.equal('   foo   ');
  });
  it('should be able to center the value \'foo\' with spaces to make it 10 wide (3 spaces on each side)', function() {
    var message = 'foo'.center(10);
    message.should.equal('   foo    ');
  });
  it('should be able to right justify the string \'foo\' to 10 characters long', function() {
    var message = 'foo'.rjust(10);
    message.should.equal('       foo');
  });
  it('should be able to left justify the string \'foo\' to 10 characters long', function() {
    var message = 'foo'.ljust(10);
    message.should.equal('foo       ');
  });
  it('should be able to center the value \'foobar\' with spaces to make it 10 wide (2 spaces on each side)', function() {
    var message = 'foobar'.center(10);
    message.should.equal('  foobar  ');
  });
  it('should be able to center the value \'foobar\' with spaces to make it 9 wide (1 spaces on the leading edge and 2 on the trailing)', function() {
    var message = 'foobar'.center(9);
    message.should.equal(' foobar  ');
  });
  it('when attempting to center a string that is longer than the number, it will simply return the (entire) string back', function() {
    var message = 'foobar'.center(4);
    message.should.equal('foobar');
  });
});

var should = require('should');
var Person = require(__dirname + '/../src/js_extensions');

describe('String Extension', function() {
  it('should be able to trim a value of \'   text with extra spaces   \'', function() {
    var message = '   text with extra spaces   '.strip();
    message.should.equal('text with extra spaces');
  });
  it('should be able to right trim a value of \'text with extra spaces on the right   \'', function() {
    var message = 'text with extra spaces on the right   '.rstrip();
    message.should.equal('text with extra spaces on the right');
  });
  it('should be able to trim a value of \'   text with extra spaces on the left\'', function() {
    var message = '   text with extra spaces on the left'.lstrip();
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
  it('should be able to right justify the string \'foo\' to 10 characters long', function() {
    var message = 'foo'.rjust(10);
    message.should.equal('       foo');
  });
  it('should be able to right justify the string \'foo\' to 21 characters long and fill with 123', function() {
    var message = 'foo'.rjust(21, '123');
    message.should.equal('123123123123123123foo');
  });
  it('should be able to right justify the string \'foo\' to 20 characters long and fill with 123', function() {
    var message = 'foo'.rjust(20, '123');
    message.should.equal('12312312312312312foo');
  });
  it('should be able to right justify the string \'foo\' to 19 characters long and fill with 123', function() {
    var message = 'foo'.rjust(19, '123');
    message.should.equal('1231231231231231foo');
  });
  it('should be able to left justify the string \'foo\' to 10 characters long', function() {
    var message = 'foo'.ljust(10);
    message.should.equal('foo       ');
  });
  it('should be able to left justify the string \'foo\' to 21 characters long and fill with 123', function() {
    var message = 'foo'.ljust(21, '123');
    message.should.equal('foo123123123123123123');
  });
  it('should be able to left justify the string \'foo\' to 20 characters long and fill with 123', function() {
    var message = 'foo'.ljust(20, '123');
    message.should.equal('foo12312312312312312');
  });
  it('should be able to left justify the string \'foo\' to 19 characters long and fill with 123', function() {
    var message = 'foo'.ljust(19, '123');
    message.should.equal('foo1231231231231231');
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
  it('should be able to center the string \'foo\' between chars abc and make it 10 chars wide', function() {
    var message = 'foo'.center(10, 'abc');
    message.should.equal('abcfooabca');
  });
  it('when chomping the phrase \'hello\' the result will be the same', function() {
    var message = 'hello'.chomp();
    message.should.equal('hello');
  });
  it('when chomping the phrase \'foo\\rbar\' the result will be \'foo\'', function() {
    var message = 'foo\rbar'.chomp();
    message.should.equal('foo');
  });
  it('when chomping the phrase \'hello\' with a delimiter of \'llo\' the result will be \'he\'', function() {
    var message = 'hello'.chomp('llo');
    message.should.equal('he');
  });
  it('should be able to change the text \'AbCdEfGh\' to lower case', function() {
    var message = 'AbCdEfGh'.downcase();
    message.should.equal('abcdefgh');
  });
  it('should be able to find \'ll\' at location 2 in \'hello\'', function() {
    var message = 'hello'.index('ll');
    message.should.equal(2);
  });
  it('should be able to find \'lo\' at location 2 in \'hello\'', function() {
    var message = 'hello'.index('lo');
    message.should.equal(3);
  });
  it('should return null when trying to find \'a\' in \'hello\'', function() {
    'hello'.index('a')+''.should.equal('');
  });
  it('should find the count of \'lo\' in \'hello world\' as 5', function() {
    var message = 'hello world'.count('lo');
    message.should.equal(5);
  });
 
});

var should = require('should');
var String = require(__dirname + '/../src/protean_string');

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
  it('should be able to right justify', function() {
    'foo'.rjust(10).should.equal('       foo');
    'foo'.rjust(21, '123').should.equal('123123123123123123foo');
    'foo'.rjust(20, '123').should.equal('12312312312312312foo');
    'foo'.rjust(19, '123').should.equal('1231231231231231foo');
  });
  it('should be able to left justify', function() {
    'foo'.ljust(10).should.equal('foo       ');
    'foo'.ljust(21, '123').should.equal('foo123123123123123123');
    'foo'.ljust(20, '123').should.equal('foo12312312312312312');
    'foo'.ljust(19, '123').should.equal('foo1231231231231231');
  });
  it('should be able to center', function() {
    'foobar'.center(10).should.equal('  foobar  ');
    'foobar'.center(9).should.equal(' foobar  ');
    'foobar'.center(4).should.equal('foobar');
    'foo'.center(10, 'abc').should.equal('abcfooabca');
  });
  it('when chomping the phrase \'hello\' the result will be the same', function() {
    'hello'.chomp().should.equal('hello');
  });
  it('when chomping the phrase \'foo\\rbar\' the result will be \'foo\'', function() {
    'foo\rbar'.chomp().should.equal('foo');
  });
  it('when chomping the phrase \'hello\' with a delimiter of \'llo\' the result will be \'he\'', function() {
    'hello'.chomp('llo').should.equal('he');
  });
  it('should be able to change the text \'AbCdEfGh\' to lower case', function() {
    'AbCdEfGh'.downcase().should.equal('abcdefgh');
  });
  it('should be able to find strings within strings', function() {
    'hello'.index('ll').should.equal(2);
    'hello'.index('lo').should.equal(3);
    'hello'.index('a')+''.should.equal('');
  });
  it('should find the location of a character in a string from the right side', function() {
    'hello'.rindex('e').should.equal(1);
    'hello'.rindex('l').should.equal(3);
    ('hello'.rindex('a')+'').should.equal('null');
  });
  it('Inserts Characters Anywhere Within A String', function() {
    "abcd".insert(0, 'X').should.equal("Xabcd");
    "abcd".insert(3, 'X').should.equal("abcXd");
    "abcd".insert(4, 'X').should.equal("abcdX");
  });
  it('Inserts Characters Anywhere From the Right Side of A String', function() {
    "abcd".insert(-3, 'X').should.equal("abXcd");
    "abcd".insert(-1, 'X').should.equal("abcdX");
  });
});
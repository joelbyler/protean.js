/**
 * Returns a copy of str with leading and trailing whitespace removed.
 * @example
 * "    hello    ".strip   #=> "hello"
 * "\tgoodbye\r\n".strip   #=> "goodbye"
 */
String.prototype.strip = function() { return this.replace(/^\s+|\s+$/g,""); };

/**
 * Returns a copy of str with leading whitespace removed. See also String#rstrip and String#strip.
 * @example
 * "  hello  ".lstrip   #=> "hello  "
 * "hello".lstrip       #=> "hello"
 */
String.prototype.lstrip = function() { return this.replace(/^\s+/,""); };

/**
 * Returns a copy of str with trailing whitespace removed. See also String#lstrip and String#strip.
 * @example
 * "  hello  ".rstrip   #=> "  hello"
 * "hello".rstrip       #=> "hello"
 */
String.prototype.rstrip = function() { return this.replace(/\s+$/,""); };

/**
 * Returns a new String with the last character removed. If the string ends with \r\n, both characters are removed. Applying chop to an empty string returns an empty string. String#chomp is often a safer alternative, as it leaves the string unchanged if it doesn’t end in a record separator.
 * @example
 * "string\r\n".chop   #=> "string"
 * "string\n\r".chop   #=> "string\n"
 * "string\n".chop     #=> "string"
 * "string".chop       #=> "strin"
 * "x".chop.chop       #=> ""
 */
String.prototype.chop = function() { return this.length > 0 ? this.substring(0,this.length - 1) : ""; };

/**
 * Returns a copy of str with all lowercase letters replaced with their uppercase counterparts. The operation is locale insensitive—only characters “a” to “z” are affected. Note: case replacement is effective only in ASCII region.
 * @example
 * "hEllO".upcase   #=> "HELLO"
 */
String.prototype.upcase = function() { return this.toUpperCase(); };

/**
 * Returns a copy of str with all uppercase letters replaced with their lowercase counterparts. The operation is locale insensitive—only characters “A” to “Z” are affected. Note: case replacement is effective only in ASCII region.
 * @example
 * "hEllO".downcase   #=> "hello"
 */
String.prototype.downcase = function() { return this.toLowerCase(); };

/**
 * Returns a copy of str with the first character converted to uppercase and the remainder to lowercase. Note: case conversion is effective only in ASCII region.
 * @example
 * "hello".capitalize    #=> "Hello"
 * "HELLO".capitalize    #=> "Hello"
 * "123ABC".capitalize   #=> "123abc"
 */
String.prototype.capitalize = function() {
	return (this.length > 0 ? this.substring(0,1).toUpperCase() : "" ) +
           (this.length > 1 ? this.substring(1,this.length) : "");
};

/**
 * Compare to string values (case sensitive)
 * @param string_to_compare The string to compare against
 * @example
 * "abcdef" <=> "abcde"     #=>  1
 * "abcdef" <=> "abcdef"    #=>  0
 * "abcdef" <=> "abcdefg"   #=> -1
 * "abcdef" <=> "ABCDEF"    #=>  1
 */
String.prototype.str = function(string_to_compare) {
	return this.localeCompare(string_to_compare);
};

/**
 * Case-insensitive string comparison
 * @param string_to_compare The string to compare against
 * @example
 * .casecmp
 * "abcdef".casecmp("abcde")   #=>  1
 * "aBcDeF".casecmp("abcdef")  #=>  0
 * "abcdef".casecmp("abcdefg") #=> -1
 * "abcdef".casecmp("ABCDEF")  #=>  0
 */
String.prototype.casecmp = function(string_to_compare) {
	return this.upcase().str(string_to_compare.upcase());
};

/**
 *  If integer is greater than the length of str, returns a new String of length integer with str right justified and padded with padstr; otherwise, returns str.
 * @param length_of_string final length of resulting string
 * @param chars_to_fill (optional) character(s) to use for padding (' ' is default)
 * @example
 * "hello".rjust(4)            #=> "hello"
 * "hello".rjust(20)           #=> "               hello"
 * "hello".rjust(20, '1234')   #=> "123412341234123hello"
 */
String.prototype.rjust = function(length_of_string, chars_to_fill) {
	if (length_of_string < this.length) return this.toString();
	var fillValue = "";
	while (this.length + fillValue.length < length_of_string) {
		if(chars_to_fill){
			if (fillValue.length + chars_to_fill.length + this.length > length_of_string) {
				fillValue += chars_to_fill.substring(0,  length_of_string - (fillValue.length + this.length));
			}
			else fillValue += chars_to_fill;
		}
		else fillValue += " ";
	}
	return fillValue + this;
};

/**
 * If integer is greater than the length of str, returns a new String of length integer with str left justified and padded with padstr; otherwise, returns str.
 * @param length_of_string final length of resulting string
 * @param chars_to_fill (optional) character(s) to use for padding (' ' is default)
 * @example
 * "hello".ljust(4)            #=> "hello"
 * "hello".ljust(20)           #=> "hello               "
 * "hello".ljust(20, '1234')   #=> "hello123412341234123"
 */
String.prototype.ljust = function(length_of_string, chars_to_fill) {
	if (length_of_string < this.length) return this.toString();
	var fillValue = "";
	while (this.length + fillValue.length < length_of_string) {
		if(chars_to_fill){
			if (fillValue.length + chars_to_fill.length + this.length > length_of_string) {
				fillValue += chars_to_fill.substring(0,  length_of_string - (fillValue.length + this.length));
			}
			else fillValue += chars_to_fill;
		}
		else fillValue += " ";
	}
	return this + fillValue;
};

/**
 * If integer is greater than the length of str, returns a new String of length integer with str centered and padded with padstr; otherwise, returns str.
 * @param length_of_string final length of resulting string
 * @param chars_to_fill (optional) character(s) to use for padding (' ' is default)
 * @example
 * .center
 * "hello".center(4) #=> "hello"
 * "hello".center(20) #=> " hello "
 * "hello".center(20, '123') #=> "1231231hello12312312"
 */
String.prototype.center = function(length_of_string, chars_to_fill) {
	if (length_of_string < this.length) return this.toString();
	if ((length_of_string - this.length) % 2 == 1) {
		return this.rjust(this.length + ((length_of_string - this.length - 1) / 2), chars_to_fill)
		           .ljust(length_of_string, chars_to_fill);
	}
	else {
		return this.rjust(this.length + ((length_of_string - this.length) / 2), chars_to_fill)
		           .ljust(length_of_string, chars_to_fill);
	}
	return this;
};

/**
 * Returns a new String with the given record separator removed from the end of str (if present). If $/ has not been changed from the default Ruby record separator, then chomp also removes carriage return characters (that is it will remove \n, \r, and \r\n).
 * @param delim (optional) delimiter to be used for chopping ('\r' is default)
 * @example
 * .chomp
 * "hello".chomp #=> "hello"
 * "hello\n".chomp #=> "hello"
 * "hello\r\n".chomp #=> "hello"
 * "hello\n\r".chomp #=> "hello\n"
 * "hello\r".chomp #=> "hello"
 * "hello \n there".chomp #=> "hello \n there"
 * "hello".chomp("llo") #=> "he"
 */
String.prototype.chomp = function(delim) {
	if(!delim){
		delim = '\r';
	}
	if(this.indexOf(delim)==-1)return this + '';
	else return this.substring(0,this.indexOf(delim));
};

/**
 * Returns the index of the first occurrence of the given substring or pattern (regexp) in str. Returns nil if not found. If the second parameter is present, it specifies the position in the string to begin the search.
 * @param match_string string to locate
 * @example
 * "hello".index('e')             #=> 1
 * "hello".index('lo')            #=> 3
 * "hello".index('a')             #=> nil
 */
String.prototype.index = function(match_string) {
	var returnValue = this.indexOf(match_string);
	if(returnValue == -1)returnValue = null;
	return returnValue;
};

/**
 * Returns the index of the last occurrence of the given substring or pattern (regexp) in str. Returns nil if not found. If the second parameter is present, it specifies the position in the string to end the search—characters beyond this point will not be considered.
 * @param match_string string to locate
 * @example
 * "hello".rindex('e')             #=> 1
 * "hello".rindex('l')             #=> 3
 * "hello".rindex('a')             #=> null
 */
String.prototype.rindex = function(match_string) {
	var returnValue = this.lastIndexOf(match_string);
	if(returnValue == -1)returnValue = null;
	return returnValue;
};

/**
 * Inserts other_str before the character at the given index, modifying str. Negative indices count from the end of the string, and insert after the given character. The intent is insert aString so that it starts at the given index.
 * "abcd".insert(0, 'X')    #=> "Xabcd"
 * "abcd".insert(3, 'X')    #=> "abcXd"
 * "abcd".insert(4, 'X')    #=> "abcdX"
 * "abcd".insert(-3, 'X')   #=> "abXcd"
 * "abcd".insert(-1, 'X')   #=> "abcdX"
 */
String.prototype.insert = function(position, chars_to_insert) {
	if (position < 0) {
		position = this.length + position + 1;
	}
  var first_part = this.substring(0, position);
  var last_part = this.substring(position);
  return first_part + chars_to_insert + last_part;
};


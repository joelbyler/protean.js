/**
 * Trim leading and trailing spaces from the string
 */
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g,""); };

/**
 * Trim leading spaces from the string
 */
String.prototype.ltrim = function() { return this.replace(/^\s+/,""); };

/**
 * Trim trailing spaces from the string
 */
String.prototype.rtrim = function() { return this.replace(/\s+$/,""); };

/**
 * Remove the last character from a string
 */
String.prototype.chop = function() { return this.length > 0 ? this.substring(0,this.length - 1) : ""; };

/**
 * Capitalize the first character in a string
 */
String.prototype.upcase = function() { return this.toUpperCase(); };

/**
 * Capitalize every character in a string
 */
String.prototype.capitalize = function() { 
	return (this.length > 0 ? this.substring(0,1).toUpperCase() : "" ) +
           (this.length > 1 ? this.substring(1,this.length) : "");
};

/** 
 * Compare to string values (case sensitive)
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
 * @example 
 * "hello".rjust(4)            #=> "hello"
 * "hello".rjust(20)           #=> "               hello"
 * "hello".rjust(20, '1234')   #=> "123412341234123hello"
 */
String.prototype.rjust = function(length_of_string) { 
	if (length_of_string < this.length) return this.toString();
	var returnValue = this;
	while (returnValue.length < length_of_string) {
		returnValue = " " + returnValue;
	}
	return returnValue;
};

/**
 * If integer is greater than the length of str, returns a new String of length integer with str left justified and padded with padstr; otherwise, returns str.
 * "hello".ljust(4)            #=> "hello"
 * "hello".ljust(20)           #=> "hello               "
 * "hello".ljust(20, '1234')   #=> "hello123412341234123"
 */
String.prototype.ljust = function(length_of_string) { 
	if (length_of_string < this.length) return this.toString();
	var returnValue = this;
	while (returnValue.length < length_of_string) {
		returnValue = returnValue + " ";
	}
	return returnValue;
};

/**
 * If integer is greater than the length of str, returns a new String of length integer with str centered and padded with padstr; otherwise, returns str.
 * @example
 * .center 
 * "hello".center(4) #=> "hello"
 * "hello".center(20) #=> " hello "
 * "hello".center(20, '123') #=> "1231231hello12312312"
 */
String.prototype.center = function(length_of_string) { 
	if (length_of_string < this.length) return this.toString();
	if (length_of_string - this.length % 2 == 1) return 
	return '   ' + this + '   ';
};

/**
 * Returns a new String with the given record separator removed from the end of str (if present). If $/ has not been changed from the default Ruby record separator, then chomp also removes carriage return characters (that is it will remove \n, \r, and \r\n).
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


/*Write a JavaScript function that checks whether a passed string is 
palindrome or not?
A palindrome is a word, phrase, or sequence that reads the same 
backward as forward, e.g., madam or nurses run.
step 1: set up our regular expression that will do a global 
(g modifier) search for the character-span that is not from A-Z,
a-z, and 0-9;
step 2: set our string to lower case and remove anything that is not
from A-Z, a-z, and 0-9 and replace it with an empty quotation mark('');
step 3:split our string, reverse it and join back together for comparsion;
step 4:check to see if our string is palindrome, returns true or false 
value.
*/

function isPalindrome(str) {
  var regex = /[^A-Za-z0-9]/g;
  var updatedString = str.toLowerCase().replace(regex, "");
  var reversedString = updatedString.split("").reverse().join("");
  return updatedString === reversedString;
  
}

console.log(isPalindrome("what did you have fo dinner last night ?"));

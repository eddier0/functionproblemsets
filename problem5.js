/*
Write a JavaScript program that iterates the integers from 1 to 100.
But for multiples of three print "Fizz" 
instead of the number and for the multiples of five print "Buzz". 
For numbers that are multiples of both three and five print "FizzBuzz".


Everywhere you used a "for" loop previously, replace 
it with either a #forEach, #map, or #filter method. 
Reference (study only forEach, map, or filter).
*/

function fizzBuzz(){
  for(var i=1; i <= 100; i++){
  var word ='';
  
  if (i % 3 ===0){
    word += "Fizz";
  }
  if (i % 5 ===0){
    word += 'Buzz';
  }
  console.log(i,word);
  }
}

fizzBuzz();

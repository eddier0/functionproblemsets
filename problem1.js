
/*
step 1: define a function that accepts a string as a parameter 
step 2: split the string into an array of words
step 3: define the variable for the longest word set it equal
to the first word in the array of words. 
step 4: start looping through the array of words.
step 5: comparing longest word in the loop and comparing which
one is longer.
step 6: if  current variable in the loop is longer than the longest word
update the current longest word variable to be equal to the current word
in our loop.
step 7: return the longest word. 
*/

function findLongestWord(str){
  var arrayOfWords = str.split(' ');
  
  var longestWord = arrayOfWords[0];
  
  for(var i = 0; i < arrayOfWords.length ; i++){
    
    if(longestWord.length < arrayOfWords[i].length){
      longestWord = arrayOfWords[i];
    }
  }
  
  return longestWord;
}

console.log(findLongestWord('What would you do if you had a second chance ?')); //second
        
/*
Step 1: define a function that accepts a string as a parameter.
Step 2: split the string passed in, turn it into an array for each letter. 
store it in a variable called arrayOfLetters 
Step 3: define a variable called numberOfVowels and set the initial value equal
ro zero.
Step 4: define a variable that defines what a vowel is. an arrray of vowels
Step 5: start looping through our array of letters
Step 6: increase the count variable by one for every letter that's a vowel
Step 7: return the count of vowels
*/

function vowelCount(str){
    var arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
    var currentVowelCount = 0;
    var arrayOfLetters = str.split('');
    
    arrayOfLetters.forEach(function(letter) {
      if (arrayOfVowels.includes(letter)) {
        currentVowelCount +=1;
      }
    });
    
    return currentVowelCount;
                          
        
  }
  
    console.log(vowelCount('How many vowels are in this sentence ?')); //11
  
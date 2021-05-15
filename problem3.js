/*
step 1: define a function that accepts a string as a parameter 
step 2: write a word and a letter to pass through the function as an argument
step 3: define the variable letter count and set it equal to 0.
step 4: define a variable for the number of characters in the word chosen
step 5: Step 5: start looping through the word and see how many letters are 
there dependent on the letter chosen in the argument. 
Step 6: increase the count variable by one for every letter that matches.
Step 7: console log the amount of time the chosen letter occured in the word. 
*/

function countLetter(str, letter){  
  var letterCount = 0;  
   
  for (var position = 0; position < str.length; position++){  
     if (str.charAt(position) == letter) {  
       letterCount += 1;  
       }  
   }  
   return letterCount;  
 }  
   
 console.log(countLetter('Mississippi', 's'));  
// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// create a variable called 'name', assign value of 'Dane'
// check to see if the value of 'name' is EXACTLY 'Mary'
// if it is console.log 'Hi, Mary!' -> but it is not, on to the next conditional
// since the value is not 'Mary' console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// create variable called 'secret'
// create variable called 'code' give a numeric value of 123
// check to see if the value of 'code' is EXACTLY equal to 123
// if it is equal to 123 assign value of 'super' to variable 'secret' 
// also, since it is equal to 123 multiply that value for 'code' by 2, giving 'code' a value of 246
// check to see if value of 'code' is greater than 250 -> since it is not, do nothing
// console.log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// create variable called 'isStudent' give a boolean value of true
// create variable called 'age' give a numeric value of 34
// create variable called 'zip' give a numeric value of 55407
// check to see if variable 'isStudent' is true AND if 'zip' is greater than 80000 -> our 'isStudent' is true, but our 'zip' is less than 80000
// check to see if 'isStudent' is false OR if 'age' is less than 30 -> our 'isStudent' is true and our 'age' is greater than 30
// check to see if 'isStudent' is true -> it is
// console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX values for colorOne and colorTwo are switched
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX need to also set value of colorTwo = 'purple'
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// POSSIBLE FIX wouldn't a variable like 'time' be likely to change, and therefore be create with 'let'
let temp = 40;
const time = 4;

// FIX need to check whether temp AND time are correct, need operator '&&'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX the console.log statements should be switched, so that if the conditional is true the console.log returns 'enter'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


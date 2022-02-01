"use strict";

// function logSomeThings() {
//     console.log('hello world');
//     console.log('hello from john smile');
// }

// var logSomeThings = function () {
//     console.log('hello world');
//     console.log('hello from john smile');
// }

// logSomeThings();
///above code is a basic function that has NO RETURN

// function returnValue() {
//     return "okay lol";
// }

// var hello = returnValue();
///the above is storing function inside a variable

// console.log(hello);

// console.log(returnValue() + ' ' + returnValue());

////// the above  code is a basic function that HAS A RETURN

//// Return value vs. Definition

// function returnValue() {
//     return 6;
// }
// console.log(returnValue())
// above is value

// function returnValue() {
//     return 7:
// }
// console.log(returnValue)
//above is definition

//=========== Arguments and Parameters


// function multiplyTwoNum(num1,num2 /* parameters */){
//     return num1 * num2
// }
//
// console.log (multiplyTwoNum(3,3));


// function  returnFive(){
//     return 5;
// }

//========== NUMBER 1 EXERCISE ^

// function isFive(num){
//     var five = 5
//     return five == num
// }

//======= NUMBER 2 EXERCISE

// function isShortWord(word){
//     return word.length < 5
// }
// console.log(isShortWord('lettering'));

//======= NUMBER 3 EXERCISE

// function isSameLength(word,words){
//     return word.length === words.length
//
// }
// console.log(isSameLength('lol','lulW'))

//========= NUMBER 4 EXERCISE

// function getSmallerSegment(aString,num){
//     // var lowerStr = aString.toLowerCase();
//     return aString.substring(0,num).toLowerCase();
// }
// console.log(getSmallerSegment('HelloOOO world', 7))



///=========================== QUESTIONS FOR ANSWERS ABOVE!!!!!!!!!!!!

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
// 1. What input does the function take in?
// 2. What does the function return?

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
// 1. What input does the function take in? (how many inputs / what type?)
// 2. What does function return? (what is the type)

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
// 1. What is the input? two string inputs
// 2. What is the function outputting?

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

// 1. What is the input? a string and a number
// 2. What is the return value? a string

//===============================================================================================================
// Refactor the following code to use functions...
/*
    var x = 2;
    var y = 4;
    var totalXY = x + y;
    console.log('The result of num1 + num2 is: ' + totalXY);
    var a = 5;
    var b = 1;
    var totalAB = a + b;
    console.log('The result of num1 + num2 is: ' + totalAB);
    var c = 10;
    var d = 5;
    var totalCD = c + d;
    console.log('The result of num1 + num2 is: ' + totalCD);
 */
function addNums (n1,n2){
    return 'The result of ' + n1 + " + " + n2 + " is: "+ (n1+n2)
}
console.log(addNums(2,4))
console.log(addNums(5,1))
console.log(addNums(10,5))

// this is crazy cool ^^^^ first multi function thingy
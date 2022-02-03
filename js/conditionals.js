"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(str){
//     if (str() === 'blue'){
//         return 'blue is the color of the sky';
//     } else if  (str === 'red'){
//         return'Strawberries are red';
//     } else if  (str === 'cyan'){
//         return'cyan is like nyan like the cat!';
//     } else if  (str === 'green'){
//         return 'green is like the trees and nature';
//     } else if  ( str === 'yellow'){
//         return 'yellow is like the sun well maybe not the sun is the color of light'
//     } else {
//         return 'I don\'t know that color'
//     }
//
// }
// console.log(analyzeColor('red'))



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function  analyzeColor(string) {
    switch (string.toLowerCase()) {
        case 'red':
            return('strawberries are red');
            break;
        case 'orange' :
            return('orange is orange');
            break;
        case 'yellow':
            return('fellow my favorite color is yellow');
            break;
        case 'blue':
            return('blue is the color of the sky');
            break;
        case 'green':
            return('green is the universal color of nature')
            break;
        default:
            return('that color is not embedded in my memory. please try again later')
            break;
    }
}
// analyzeColorSwitch(randomColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var userColor = prompt('What is your color')
// var returnValue = analyzeColor(userColor)
// alert(returnValue)



/* ########################################################################## */


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(num1,num2) {
    if (num1 === 0) {
        return num2;
    } else if (num1 === 1) {
        return num2 - (num2 * .10);
    } else if (num1 === 2) {
        return num2 - (num2 * .25);
    } else if (num1 === 3) {
        return num2 - (num2 * .35);
    } else if (num1 === 4) {
        return num2 - (num2 * .50);
    } else if (num1 === 5) {
        return 0
    }
}
// console.log(calculateTotal(0, 100)); // returns 100
// console.log(calculateTotal(4, 100)); // returns 50
// console.log(calculateTotal(5, 100)); // returns 0
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
var luckyNumber = Math.floor(Math.random() * 6);


function calculateTotalLuck(num){
    var promptTotal = Number(prompt('What is your total'));
    var num1 = luckyNumber;
    var num2 = promptTotal;
    calculateTotal(num1,num2);
    if (num1 === 0){
        alert('your lucky number is 0 you have no discount. '+ num2 + ' USD is still the total');
    } else if (num1 === 1){
        alert('your lucky number is 1 you get a 10% discount! The total went from '+ num2 + ' to '+(calculateTotal(1,num2))+ ' USD');
    } else if (num1 === 2){
        alert ('your lucky number is 2 you get a 25% discount! The total went from '+ num2 + ' to '+ (calculateTotal(2,num2))+' USD');
    } else if (num1 === 3){
        alert ('your lucky number is 3 you get a 35% discount! The total went from '+ num2 + ' to '+ (calculateTotal(3,num2))+' USD');
    } else if (num1 === 4){
        alert ('your lucky number is 4 you get a 50% discount! The total went from '+ num2 + 'to' + (calculateTotal(4,num2))+' USD');
    } else if (num1 === 5){
        alert('your lucky number is 5 you get everything FREE! The total went from '+ num2 + ' to free congrats!');
    } else {
        alert('That is an invalid number. try again later...')
    }

}
// calculateTotalLuck();



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var enterNumber = confirm('Would you like to enter a number?');

if (enterNumber){
    var numberEntered = Number(prompt('Enter Number'));
    if (numberEntered % 2 === 0) {
        alert('your number is even');
    } else {
        alert('your number is not an odd number');
    }

    alert(('your number plus 100 is ') + (numberEntered + 100));

    if (numberEntered <= -1){
        alert('your number is negative')
    } else {
        alert('your number is positive')
    }
} else {
    alert('System is shutting down...')
}

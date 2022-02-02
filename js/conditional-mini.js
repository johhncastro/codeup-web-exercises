'use strict';
// CONDITIONALS MINI-EXERCISES

// 1. Create conditional logic to represent the following scenario...
// If the car is locked, alert 'will not open', otherwise, alert 'will open'


// var carIsLocked = true;

// if (carStatus === true){
//     alert('Doors unable to open')
// } else {
//     alert('Door will open')
// }


// 2. Write a function that takes in a string and returns a message based on the string length:

// if the string is no characters, return "Empty string"
// if the string is one character long, return "One character long"
// if the string is two characters long, return "Two characters long"
// Otherwise, return, "That is a long string!"

// function stringLength(word) {
//     if (word.length === 0) {
//         alert('Empty String');
//     } else if (word.length === 1){
//         alert('One Character Long');
//     } else if (word.length === 2){
//         alert('Two Characters Long');
//     } else {
//         alert('That\'s is a long string!')
//     }
// }
//
// stringLength('')


// 3. Refactor the Following Code into a Ternary Operator:


    // var num = 5
    // var message= (num <10) ?'Num less than 10' : 'Num more than 10';
/*
    if (num < 10) {
        message = 'Num less than 10';
    } else {
        message = 'Num more than 10';
    }
*/

// console.log(message)


// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

// ABOVE CODE IS FROM JAVA.CODEUP SWITCH CONDITIONAL PAGE (SWITCH EXAMPLE)

var bondFilm = 'You only live twice';
switch (bondFilm){
    case 'Dr.No':
        console.log('Fantastic!');
        break;
    case 'From Russia With Love':
        console.log('Exploding barrels');
        break;
    case 'Goldfinger':
        console.log('I Expect you to die Mr Bond');
        break;
    case 'ThunderBall':
        console.log('Kinda Long');
        break;
    case 'You only live twice':
        console.log('One of the better theme songs');
        break;
        default:
        console.log('That is not one of the first 4 Bond films.');
}

//SWITCH EXAMPLE THAT WE DID IN CLASS FEB 2ND 2022
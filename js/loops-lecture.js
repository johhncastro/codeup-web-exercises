'use strict';

// var slicesOfPizza = 4;
// while(slicesOfPizza > 0){
//     console.log("I will have a slice !");
//     slicesOfPizza = slicesOfPizza -1;
//     // always declare conditional code block else you will get stuck in an Infinity loop of Despair aka very bad so do not do that
//     console.log('Now we have ' + slicesOfPizza + ' Left');
// }
// console.log('aw... no more pizza TrollDespair');

// var numberCounter = 0;
// while (numberCounter <= 100){
//     console.log(numberCounter);
//     // numberCounter =numberCounter +1;
//     numberCounter ++;
// }

// The Above code is a loop that counts from zero to one hundred

// var counter = 100;
// while (counter >= 0){
//     console.log(counter);
//     counter --;
// }
// console.log('Ive made it out of the loop!')

// the above code is to count from one hundred to zero

// var counter = 1;
// var number = 5;
// while (counter <= 5) {
//     number = number *2;
//     console.log(number);
//     counter =counter + 1;
// }
// console.log('the loop has ended dun dunnnnnnn')

// the above code shows a loop that can multiply a number by another number

// var number = 5;
// while (number < 200){
//     console.log(number);
//     number = number * 2;
// }
// console.log('the loop de loop is over')

// this loop only multiplies a number until it hits 200 the reason that it does not go over 200 is because if it goes one more time after 160 it will be over 200 so it will not show up  in the return. the reason for this is because the console log is before the number = number *2; part of the script if it is after it will show 3 hundred something this is because it is running after.


//do while loop

var randomNumber = Math.floor(Math.random() *6) +1
var guess;

do {
    guess = parseInt(prompt('Enter number between 1 and 6'));
} while (guess !== randomNumber);

alert('your guess of '+ guess + ' matches the number '+ randomNumber+ '!');


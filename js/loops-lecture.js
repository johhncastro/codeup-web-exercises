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

// var randomNumber = Math.floor(Math.random() *6) +1
// var guess;
//
// do {
//     guess = parseInt(prompt('Enter number between 1 and 6'));
// } while (guess !== randomNumber);
//
// alert('your guess of '+ guess + ' matches the number '+ randomNumber+ '!');



// var count =100;
// while (count >= 0){
//     console.log(count);
//     count = count -1;
// }

// for (var count =100; count >= 0; count = count -1){
//     console.log(count)
// }

//typically have a variable called i whichs means to itterate

// for (var i = 100; i >=0; i--){
//     console.log(i);
// }
// for (var i = 0; i <= 100; i ++){
//     console.log(i);
// }

// this is a for loop that typically we will be using the most


// for (var i = 0; i < 100; i ++){
//     console.log(i);
// }



// for(var z = 1 ; z <= 9; z++){
//     console.log(z.toString().repeat(z));
// }
//
// for(var outer = 1 ; outer <= 9; outer++){
//     var result = "";
//
//     for(var inner = 1 ; inner <= outer ; inner++){
//         // console.log('inner',inner);
//         result += outer;
//     }
//
//     console.log(result);
// }

// this is the answer to number 4 on the exercise on for loops


var string =''
for (var i =0; i < 8 ; i++){
    var word = prompt('lets make a sentence');
    if (word === 'curses'){
        console.log('u cannot say that');
        continue;
    }
    string = string + ' '+ word;
    console.log(string)
}


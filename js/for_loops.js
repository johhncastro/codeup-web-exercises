'use strict';


function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
// showMultiplicationTable(7)

var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20)
// generates random number between 20 - 200
// console.log(randomNumber);

// for (var i = 1; i <=10; i++) {
//     var randomNumber = Math.floor(Math.random() * (200 - 20 + 1) + 20)
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber+ ' is even')
//     } else {
//         console.log(randomNumber+ ' is odd')
//     }
// }

// for(var repeatingNum =1; repeatingNum<=9; repeatingNum++){
//     console.log(repeatingNum.toString().repeat(repeatingNum))
// }




// for (var i = 100; i >=5; i-=5){
//     console.log(i);
// }

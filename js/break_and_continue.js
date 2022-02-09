'use strict';

var num;

while(true){
    num = parseInt(prompt('Enter odd number between 1 - 50'));
        if (num % 2 === 1 && num <=50 && num >= 1){
            break;
        } else continue;
    console.log(num);
    console.log(5);
}

// for (var i =1 ; i< 50; i+=2){
//
// }

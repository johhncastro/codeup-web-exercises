'use strict';

// var number = 1;
// while (number < 65536){
//     number = number * 2;
//     console.log(number);
// }

//expected output should be
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

//do-While

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// var conesBought = Math.floor(Math.random()*5) +1;

// function noConesLeft(num){
//     if (allCones < 5){
//         return 'sorry not enough to sell.'
//     }
// }
// console.log(noConesLeft(allCones))


// do {
//     var conesBought = Math.floor(Math.random()*5) +1;
//     allCones = allCones - conesBought;
//     if (allCones - conesBought > 0) {
//         console.log(conesBought + ' Cones Bought! '+ allCones+ ' Cones are left!')
//     } else {
//         console.log('Not enough Cones!')
//     }
//
// } while (allCones > 0);
//
// // console.log('No cones left')


do{
    var conesBought = Math.floor(Math.random()*5) +1;
    if (conesBought > allCones) {
        console.log('Cannot sell you '+ conesBought + ' I only have ' + allCones);
    } else {
        console.log(conesBought + ' cones sold... '+ allCones + ' are left');
        allCones = allCones -conesBought
    }

} while (allCones > 0 );

console.log('yay all cones sold');
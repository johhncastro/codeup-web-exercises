'use strict';

var shoppingList = ['butter','bread','apples','milk','eggs'];
// console.log('i have to buy '+ shoppingList[0]);
// MAKE AN ARRAY WITH FAMILY MEMBERS CONSOLE LOG THE 1ST AND LAST LISTED
var familyMembers =['Google','Billy','Kathryn','Annette'];
var familyType = [' is my dog',' is my dad',' is my sister',' is my mom'];

console.log(familyMembers[0],familyMembers[3]);
// AFTER FIST AND LAST LISTED MAKE A CONSOLE LOG OF THE FAMILY MEMBER AND THEIR RELATIONSHIP TO YOU
console.log(familyMembers[0]+ familyType[0]);
console.log(familyMembers[1] + familyType[1]);
console.log(familyMembers[2]+ familyType[2]);
console.log(familyMembers[3]+ familyType[3]);

console.log(' FIRST TWO QUESTIONS ABOVE =======');

// for (var i =0 ; i < shoppingList.length; i++){
//     if (i !== shoppingList.length -1){
//         console.log('i have to buy '+ shoppingList[i]+ ' and...');
//     } else {
//         console.log('i have to buy ' + shoppingList[i] + '.');
//     }
// }


// THE ABOVE CODE SHOWS HOW TO IMPLEMENT A ARRAY INTO A LOOP

console.log('====== ABOVE IS A LOOP THAT HAS AN ARRAY IMPLEMENTED');

var cities = ['San Antonio', 'Austin','Dallas','Houston']

// for (var i = 0 ; i < cities.length; i ++) {
//     if (i === 0) {
//         console.log('Student 1 lives in ' + cities[0])
//     } else if (i === 1) {
//         console.log('Student 2 lives in ' + cities[1])
//     } else if (i === 2) {
//         console.log('Student 3 lives in ' + cities[2])
//     } else if (i === 3) {
//         console.log('Student 4 lives in ' + cities[3])
//     } else {
//         console.log(cities[i])
//     }
// }

for (var i = 0 ; i < cities.length; i ++) {
    console.log('Student '+ (i + 1) + ' lives in '+ cities[i]);
}

//next is for each loop this is when u act on an array

var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

prices.forEach(function (element,index){
    console.log('Item Number '+ (index + 1) + ' cost $'+ element );
})



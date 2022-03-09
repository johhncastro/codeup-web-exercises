'use strict';
// write a function that takes an input and returns the string I have no idea what you just said.

function unknownWords(input){
    return 'I have no idea what you just said.'
}

// console.log(unknownWords('loll'));
// console.log(unknownWords(4));

//write a function that takes in a number and returns a number that is double the input

function numberTimesTwo(num){
    return num * 2
}

// console.log(numberTimesTwo(4));
// console.log(numberTimesTwo(8));





// function createUserMessage(obj){
    // if (users.isAdmin === true){
    //     return 'User '+ users.username + ' is '+'an admin ' +'and can be reached at '+ users.email;
    // }
    // return 'User '+ users.username + ' is '+'not an admin ' +'and can be reached at '+ users.email;
//     users.forEach(function (usr){
//         if (users.isAdmin === true){
//                 console.log('User '+ usr.username + ' is '+'an admin ' +'and can be reached at '+ usr.email)
//             }
//             console.log('User '+ usr.username + ' is '+'not an admin ' +'and can be reached at '+ usr.email)
//     })
// }

// console.log(createUserMessage());


// var user1 = {
//     username: 'jcmoney',
//     email: 'johhncaastro@gmail.com',
//     isAdmin: true
//
// }
//
// var user2 = {
//     username: 'katthecat',
//     email: 'katis@home',
//     isAdmin: false
// }

// var users = [user1,user2]


// users.forEach(function (usr){
//     if (usr.isAdmin == true){
//         console.log(usr.username + ' is '+'an admin ' +'and can be reached at '+ usr.email)
//     } else
//     console.log(usr.username + ' is '+'not an admin ' +'and can be reached at '+ usr.email)
// })
//
// function areaOrPerimeter(l,w){
//     if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))){
//         return false;
//     } if (l === w){
//         return l*w;
//     } else {
//         return ((l +l)+(w+w));
//     }
//
// }
//
// function sumTheStrings(input1,input2){
//     if (isNaN(input1)  || isNaN(input2)){
//         return false;
//     } else {
//         return Number(parseFloat(input1)+parseFloat(input2))
//     }
// }
//
// var john ={
//     firstName: 'John',
//     lastName: 'Castro',
//     email: 'jcmoney123@lulw.com',
//     password: 'OMEGALUL777'
// }
// function getSimpleUser(user){
//     return {
//         firstName: user.firstName.toLowerCase(),
//         lastName: user.lastName.toLowerCase()
//     }
// }
//
//
// var firstNames = ['CJ','John','Kat','Google']
// var lastName = ['Cat','Castro','Lully','Yahoo']
//
// for (var i = 0; i < 4; i ++){
//
// }
// function createNames(array1,array2){
//     var output =[];
//     for (var i = 0; i < 4; i ++){
//         output.push({
//             firstNames:array1[i],
//             lastName:array2[i]
//         });
//     }
//     return output;
// }
//
// function remainder(int1,int2) {
//     if (int1 > int2){
//         return in1 % in2;
//     } else {
//         int2 % int1;
//     }
// }
//
// function printer_error(string){
//     return {
//     }
// }
//
//
// function isLockNessMonster(s){
//    return  s.includes('tree fiddy') || s.includes('3.50')||s.includes ('three fifty')
// }


// function sayHi(){
//     var count = 0;
//     function hi(){
//         console.log('hey '+ count);
//         count = count +1;
//     }
//     setInterval(hi,10000);
// }
// sayHi();

var count = 0;
    function hi(){
        console.log('hey '+ count);
        count = count +1;
    }

// setInterval(hi,10000);


var parcel = {
        parcelNumber: 1, weight: 20
}

function parcelWeight(weight){
    if (weight.parcelNumber === parcel.parcelNumber){
        return weight.parcelNumber.weight
    }
}

var toggleHeader = document.querySelector("button");
function turnHeaderOff(){
    document.querySelector('h1').innerHTML= 'GOOD AFTERNOON!'
}
toggleHeader.addEventListener('click',turnHeaderOff);


// ================================= JS WARM UP
//
// Consider the following array of users:
//
    var users = [
        {
            username: 'fsmith',
            email: 'fsmith@email.com',
            numberOfLogins: 23
        },
        {
            username: 'ksmith',
            email: 'ksmith@email.com',
            numberOfLogins: 100
        },
        {
            username: 'lsmith',
            email: 'lsmith@email.com',
            numberOfLogins: 10
        }
    ];
//
// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//

// function returnUsername(array){
//     return users[0];
// }
//
// console.log(returnUsername(users));




// returnFirstUser(users) should return...
//
// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }
//
// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// function returnTotalUserLogins(users){
    // var total= 0;
    // for (var i= 0; users.length; i++){
    //     console.log(users[i].numberOfLogins);
    //     total += users[i].numberOfLogins
    // }
//     users.forEach(function (user){
//         total += user.numberOfLogins
//     });
//     return total;
// }
// returnTotalUserLogins()




// returnTotalUserLogins(users) should return... 133
//
// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//

//
// function returnMostFrequentUser(users){
//     var mostFrequentObj = {
//         numberOFLogins: 0
//     };
//     users.forEach(function (user){
//         console.log()
//         if (user.numberOfLogins > mostFrequentObj.numberOfLogins){
//             mostFrequentObj = user;
//         }
//     });
//     return mostFrequentObj;
// }

// function returnMostFrequentUser(users){
//     let mostFrequentUser = users.sort((a,b) => b.numberOfLogins - a.numberOfLogins);
//     return mostFrequentUser;
// }
//
// console.log(returnMostFrequentUser(users));





// returnMostFrequentUser(users) should return...
//
// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }



// ================================= WARM UP
//
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//



// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...
//
var operations1 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
]
//
//
// computeOperations(operations1, 10) // returns 20
//
//
// Example 2...
//
var operations2 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
]
//
// computeOperations(operations2, 10) // returns 60
//
//
// Example 3...
//
var operations3 = [

    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    },
]
//
// computeOperations(operations3, 10) // returns 0

// function computeOperations(array,integer){
//     operations1.forEach(function (obj){
//         if (obj.operation === 'add'){
//               return console.log(obj.integer + integer);
//         }
//     })
//
// }

function computeOperations(operators,integer){
    // create total var that will change over time.
    // loop through each operation console log each number
        //based on operation value we can add subtract or multiply current int to total var.
    //end of function return total var.
    var total = integer

    //below is the for loop with if else statements this is also refactorable however this works great for assesment
   operators.forEach(function (operator){


       // remember that the console logs help to see where everything is at.
       if (operator.operation === 'add'){
           // console.log('add int');
           total += operator.integer;
       } else if (operator.operation === 'subtract'){
           // console.log('subtract the int');
           total -= operator.integer;
       } else if (operator.operation === 'multiply'){
           // console.log('multiply int');
           total *= operator.integer;
       }

   });
   return total;
}

console.log(computeOperations(operations1, 10)); // returns 20



//below is a cool little way to do the same problem however this is with a for loop



// function computeOperations(operations,int){
//     var total = int
//     for (var i = 0; i < operations.length; i++){
//         if (operations[i].operation === 'add'){
//             total += operations[i].integer;
//         } else if (operations[i].operation === 'subtract'){
//             total -= operations[i].integer;
//         } else if (operations.operation === 'multiply'){
//             total *= operations[i].integer;
//         }
//     }
//     return total;
// }
//
//
// console.log(computeOperations(operations1, 10));

// the above code is very useful and explains well how looping through the objects
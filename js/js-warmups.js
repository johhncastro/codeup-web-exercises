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


var user1 = {
    username: 'jcmoney',
    email: 'johhncaastro@gmail.com',
    isAdmin: true

}

var user2 = {
    username: 'katthecat',
    email: 'katis@home',
    isAdmin: false
}

var users = [user1,user2]


users.forEach(function (usr){
    if (usr.isAdmin == true){
        console.log(usr.username + ' is '+'an admin ' +'and can be reached at '+ usr.email)
    } else
    console.log(usr.username + ' is '+'not an admin ' +'and can be reached at '+ usr.email)
})


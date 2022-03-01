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

function areaOrPerimeter(l,w){
    if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))){
        return false;
    } if (l === w){
        return l*w;
    } else {
        return ((l +l)+(w+w));
    }

}

function sumTheStrings(input1,input2){
    if (isNaN(input1)  || isNaN(input2)){
        return false;
    } else {
        return Number(parseFloat(input1)+parseFloat(input2))
    }
}

var john ={
    firstName: 'John',
    lastName: 'Castro',
    email: 'jcmoney123@lulw.com',
    password: 'OMEGALUL777'
}
function getSimpleUser(user){
    return {
        firstName: user.firstName.toLowerCase(),
        lastName: user.lastName.toLowerCase()
    }
}


var firstNames = ['CJ','John','Kat','Google']
var lastName = ['Cat','Castro','Lully','Yahoo']

for (var i = 0; i < 4; i ++){

}
function createNames(array1,array2){
    var output =[];
    for (var i = 0; i < 4; i ++){
        output.push({
            firstNames:array1[i],
            lastName:array2[i]
        });
    }
    return output;
}

function remainder(int1,int2) {
    if (int1 > int2){
        return in1 % in2;
    } else {
        int2 % int1;
    }
}

function printer_error(string){
    return {
    }
}


function isLockNessMonster(s){
   return  s.includes('tree fiddy') || s.includes('3.50')||s.includes ('three fifty')
}
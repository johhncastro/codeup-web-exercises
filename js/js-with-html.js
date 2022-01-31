"use strict";

// alert('hello world! smile');

// var userChoice = confirm('u wanna buy some food yo!');
// console.log(userChoice);
//
// if(userChoice) {
//     alert('nice choice yo');
// }  else {
//     alert ('really man see ya later')
// }

var currentSpeed = Number(prompt('how  fast are u driving now?'));
console.log(currentSpeed);
var plannedSpeedIncrease = Number(prompt ('how many more MPH do u wanna go ?'));var newSpeed = currentSpeed +plannedSpeedIncrease;
console.log ('your planned speed is '+ newSpeed);

// or this way:
// console.log ('your planned speed is ' (currentSpeed + plannedSpeedIncrease));

var distanceLeft = Number(prompt('how many miles are you from your destination?'));

var timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
var timeAtPlannedSpeed = (distanceLeft/newSpeed) * 60;
var timeGain = (timeAtCurrentSpeed - timeAtPlannedSpeed);
alert("if you drive at "+ newSpeed + 'mph, you will arrive ' +  timeGain.toFixed(2) +'mins sooner');

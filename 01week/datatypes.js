'use strict'

/*
Write a JavaScript program to display the current day and time.

function will return the current day by using getDate
and time by using a combination of getHour and getMinute
*/

function dayAndTime() {
    let myDay = new Date();

    let thisDay = myDay.getDate();
    let thisHour = myDay.getHours();
    let thisMinute = myDay.getMinutes();
    return thisDay + ', ' + thisHour + ':' + thisMinute;
}


/*
Write a JavaScript program to convert a number to a string.

function will take in a number and return a string using concatenation
*/

function numToString(arg){
    return '' + arg + ''
}


/*
Write a JavaScript program to convert a string to the number.

function will take in a string and return a number using parseInt
*/

function stringToNum(arg){
    return parseInt(arg);
}

/*
Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String

function will take in a datatype and return what kind of datatype it is using typeof
*/

function whatDatatype(arg){
    return typeof(arg);
}



/*
Write a JavaScript program that adds 2 numbers together.

function will take in 2 arguments then return the sum of the 2 arguments
*/

function addTwoNumbers(arg1, arg2){
    return arg1 + arg2;
}


/*
Write a JavaScript program that runs only when 2 things are true.

function that returns true
function returns true when both of the conditionals of the if statement are true, using && to compare
*/

function bothTrue(){
    if(true && false){
        return true;
    }
}

/*
Write a JavaScript program that runs when 1 or two things are true.

function that returns true
function returns true when one of the conditionals of the if statement is true, using || to compare
*/

function oneTrue(){
    if(false || true){
        return true;
    }
}


/*
Write a JavaScript program that runs when both things are not true.

function that returns true
if statement that has two conditions that are both false, using &&,
then return true from the else statement
*/

function bothNotTrue(){
    if(false && false){
        return false;
    } else {
        return true;
    }
}

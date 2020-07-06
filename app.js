"use strict";
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
// this is how to work with arrays in typescript
var numResults = [];
var strResults = [];
// union types
// this means our function accepts both string and number arguments
function add(num1, num2) {
    // this is called type guard
    // if you passed number and number you want to add values
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
        // if you passed string and string you want to concatenate values
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
        // otherwise you could throw an error
        // i decided to convert both arguments to number and add them
        // this would execute for (number and string) and (string and number)
    }
    else {
        return +num1 + +num2;
    }
}
// using object types
// we can specify the structure of the object we are expecting
// or we can specify the object as in line 1
function printResult(result) {
    console.log(result.val);
}
if (buttonElement) {
    buttonElement.addEventListener('click', function () {
        var num1 = num1Element.value; // know we know that we have a value property in the HTMLInputElement
        var num2 = num2Element.value; // know we know that we have a value property in the HTMLInputElement
        // since our function accepts both string and number arguments this will pass
        var resultNumber = add(+num1, +num2);
        numResults.push(resultNumber);
        // since our function accepts both string and number arguments this will pass
        var resultString = add(num1, num2);
        strResults.push(resultString);
        console.log(numResults);
        console.log(strResults);
        printResult({ val: resultString });
    });
}

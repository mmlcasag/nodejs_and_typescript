"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
// this is how to work with arrays in typescript
// array is a generic type
// why? because array is a data type
// ok, but an array made of what?
// made of string, made of number, etc.
// the correct way of calling an array is this:
const numResults = [];
const strResults = [];
// promises are another generic type
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000);
});
myPromise
    .then(result => {
    console.log(result);
})
    .catch(err => {
    console.log(err);
});
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
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value; // know we know that we have a value property in the HTMLInputElement
        const num2 = num2Element.value; // know we know that we have a value property in the HTMLInputElement
        // since our function accepts both string and number arguments this will pass
        const resultNumber = add(+num1, +num2);
        numResults.push(resultNumber);
        // since our function accepts both string and number arguments this will pass
        const resultString = add(num1, num2);
        strResults.push(resultString);
        console.log(numResults);
        console.log(strResults);
        printResult({ val: resultString });
    });
}

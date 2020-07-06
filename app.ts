const num1Element = document.getElementById('num1') as HTMLInputElement; // type casting
const num2Element = document.getElementById('num2') as HTMLInputElement; // type casting
const buttonElement = document.querySelector('button') as HTMLButtonElement; // type casting

function add(num1: number, num2: number) {
    return num1 + num2;
}

if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value; // know we know that we have a value property in the HTMLInputElement
        const num2 = num2Element.value; // know we know that we have a value property in the HTMLInputElement
        const result = add(+num1, +num2); // raises error if i don't explicitly convert it to number
        console.log(result);
    });
}

// configuring typescript
// tsc --init
// this adds a tsconfig.json file to the project
// one specific important configuration you can set in that file is the strict option
// this option checks where you might get a possibly null
// also you have not set data type and so on
// if you have created a tsconfig.json file to your project
// you must not use tsc app.ts anymore, now you just use tsc and that's it!
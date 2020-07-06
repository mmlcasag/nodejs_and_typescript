const num1Element = document.getElementById('num1') as HTMLInputElement; // type casting
const num2Element = document.getElementById('num2') as HTMLInputElement; // type casting
const buttonElement = document.querySelector('button');

function add(num1: number, num2: number) {
    return num1 + num2;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value; // know we know that we have a value property in the HTMLInputElement
    const num2 = num2Element.value; // know we know that we have a value property in the HTMLInputElement
    const result = add(+num1, +num2); // raises error if i don't explicitly convert it to number
    console.log(result);
});
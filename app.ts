const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') as HTMLButtonElement;

// union types
// this means our function accepts both string and number arguments
function add(num1: number | string, num2: number | string) {
    // this is called type guard
    
    // if you passed number and number you want to add values
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    // if you passed string and string you want to concatenate values
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + num2;
    // otherwise you could throw an error
    // i decided to convert both arguments to number and add them
    // this would execute for (number and string) and (string and number)
    } else {
        return +num1 + +num2;
    }
}

if (buttonElement) {
    buttonElement.addEventListener('click', () => {
        const num1 = num1Element.value; // know we know that we have a value property in the HTMLInputElement
        const num2 = num2Element.value; // know we know that we have a value property in the HTMLInputElement
        
        // since our function accepts both string and number arguments this will pass
        const resultNumber = add(+num1, +num2);
        console.log('resultNumber: ' + resultNumber);

        // since our function accepts both string and number arguments this will pass
        const resultString = add(num1, num2);
        console.log('resultString: ' + resultString);
    });
}
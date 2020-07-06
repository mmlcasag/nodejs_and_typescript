var num1Element = document.getElementById('num1'); // type casting
var num2Element = document.getElementById('num2'); // type casting
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value; // know we know that we have a value property in the HTMLInputElement
    var num2 = num2Element.value; // know we know that we have a value property in the HTMLInputElement
    var result = add(+num1, +num2); // raises error if i don't explicitly convert it to number
    console.log(result);
});

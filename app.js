// we used the ".ts" extenstion because it is a typescript file
// first of all, we need to install the typescript compiler
// npm install -g typescript
// then you can run tsc app.ts
// and then this will convert the typescript file into a js file
// so you can notice a new app.js file in the project folder
// and then, o the index.html, you can import the .js file
// if you're having trouble trying to run tsc app.ts
// watch this video https://www.youtube.com/watch?v=J30n3lMyvbY
// now we want to specify the data type for these arguments
// and they should be number
// so how do we do that?
function add(num1, num2) {
    return num1 + num2;
}
// which data types are possible?
// number, string, boolean, object, Array
console.log(add(3, 2));
console.log(add('3', '2'));

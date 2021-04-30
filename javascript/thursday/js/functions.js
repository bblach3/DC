


//function expression
//anonymous functions
// var area = function(height, width){
//     return height * width
// }
// console.log(area(4, 5))



//function declaration
// function area(height, width){
//     return height * width
// }



//arrow function
// var area = (height)=>{

//     return height * height
// }

// var area = height=>height * height





//self-invoking function = IIFE

// (()=>{
//     console.log("I was immediately invoked")

// })();

// //design pattern


// (function (num1, num2){
//     console.log(num1 + num2)

// })(3,4)


// let a = 5;
// let b = a; //pass by value
// b = 8;

// let arrA = [4, 8, 3, 4, 67];  //pass by reference

// let arrB = arrA;  //same memory address  arrB = ArrA.copy()

// let arrB = [...arrA] //same memory address


// arrB[0] = 99;

// console.log(arrA)
// console.log(arrB)


// var a = 6; //global

// var testFunction = ()=>{
//     var hello = "Hello World";
//     console.log(a)
// }

// console.log(testFunction());

// var, let, const

// const myObj = {
//     key1: "value"
// }

// myObj.key1 = "value2"

// myObj = []
// console.log(myObj)



var count = 5;

for(let count = 0; count < 10; count++) {
    console.log(count);
}

var num = count * 4;
console.log(num)


// function callMe(){

//     callMe()
// }


//base case -> kind like if statement

// function callMe(){
//     if(){}
//       //base case
//       else
//       //recursive
//}

//recursive case

//return data





// function loopNTimes(n){
//     for (let i=0; i<n; i++){
//         console.log(`value of n: ${n}`)
//     }
// }
// loopNTimes(3)








// const loopNTimes = (n) => {
//     console.log(`value of n: ${n}`)

//         //base case
//         if(n <= 1){
//             return 'complete'
//         }
//         //recursive
//         return loopNTimes(n-1)

// }
// loopNTimes(3)


// loopNTimes(1)  => complete

// loopNTimes(2) => complete

// loopNTimes(3) => complete






//Write a fxn called power which accepts a base and an exponent. The fxn shuld return the power of the base to the exponent
// power(2,3) 2^3 => 2*2*2


// const power = (base, exponent) => {

//     //base case
//     if(exponent == 0) return 1;


//     //recursive
//     return base * power(base, exponent -1);


// }

// console.log(power(2,3))

// return 1
// 2 * power(2, 0) === 1  (2 * 1)
//2 * power(2, 1)  => 2 * 2 =4 
//2 * power(2, 2)  2 * 2 * 2 = 2*4
//power(2,3) = 8







//write a recursive funx called reverse which accepts a string and retyrns a new string in reverse

// const reverse = (str) => {
//     let reverse = '';

//     for (let i =0; i < str.length; i++){

//     reverse = str[i] + reverse; // e J
// }

// return reverse;
// }

// let result = reverse('Jennifer'.toLowerCase())
// console.log(result)


///with recursion:

// const reverse = (str) => {
//     //base
//     if(str.length ===0) return '';


//     //recursive case

//     return reverse(str.slice(1)) + str[0];
// }

// //reverse('') + 'o' => o
// //reverse('o') + 'l'
// //reverse('lo') + 'l'
// //reverse('llo') + 'e'
// //reverse('ello') + 'h'
// //reverse('hello')

// let result = reverse('hello')
// console.log(result)







//Write a function factorial which accepts a number and returns the factorial of that number.  A factorial is the product of an interger and all the integers below it; eg. , factorial four( 4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1


// const factorial = (n) => {

//     //base case
//     if(n == 0) return 0;

//     return n * factorial(n - 1)

// }


//1
//n:1, n * factorial(0) => 1*1 =1
//n:2, n * factorial(1) => 2*1 =2
//n:3, n * factorial(2) => 3 * 2 = 6
//n:4, n * factorial(3) => 4 * 6 = 24
//factorial(4)

// factorial(4)





//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function


//n=6 => 0+1+2+3+4+5+6


// const recursiveRange = (n) => {
//     //base
//     if(n==0) return 0; 

//     return n + recursiveRange(n -1)

// }










//palendrome - word read backward is the same as read left to right

// let rev= "racecar"

// let revArr = rev.split('').reversed();

// revRev = revArr.join('')

// if (rev == revRev){
//     console.log(true)
// }
// else {
//     console.log(false);
// }

// console.log(revRev)



//Write a recursive function called isPalindrome which returns true if the string passed to it is a plindrome (reads the same forward and backward). Otherwise returns false


// let isPalindrome = (str) => {
//     //base case 
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1]
//     if(str[0] === str.slice(-1)){
//         return isPalindrome(str.slice(1, -1))
//     }
//     return false;
// }






//Write function called product ofArray which takes in an array of numbers and returns the product of them all

// let productOfArray = (arr) => {
//     //base 
//     if(arr.length === 0) return 1;
//     return arr[0] * productOfArray(arr.slice(1))
//  }
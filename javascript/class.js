
// //javascript

// // //print
// // console.log('hello world')

// // `
// // hello worlds
// // dfdsd
// // dfdfdfd

// // `

// // var my_variable = 8


// // var firstName = "Veronica"


// // firstName.length



// var firstName = "Bogdan"
// var lastName = "Blach"
// var name = firstName + lastName

// console.log(name);


// var name1 = false;

// console.log(name1);

// console.log(typeof(name1))

// var isValid = true;

// var printThis = true + 4;

// console.log(printThis);

// var name2 = "Bogdan Blach";
// console.log(name2.indexOf("Blach"));


// var boolean = true;
// var not = !boolean;

// var and = boolean && false;

// var or = boolean || false;

// var equals = true == false;


// // loops
// var age = 21;
// if (age >= 21){

// console.log('you can drink')
// }
// else if (age < 18) {
//     console.log('you are not old enough')
// }
// else{
//     console.log('legal in some states')
// }

// var day = "Wednesday"

// if (day == "Monday"){
//     pass
// }
// else if(day == "Tuesday"){
//     pass
// }
// else if(day == "Wednesday"){
//     pass
// }
// else if()


// switchstatement

// switch(day){
//     case "Monday":
//         break;
//     case "Tuesday":
//         console.log("Tuesday");
//             break;
//     case "Wednesday":
//         break;
//     case "Thursday":
//         break;
//     case "Friday":
//         break;
//     case "Saturday":
//         break;
//     case "Sunday":
//         break;
//     case 1:
//         break;

//     default:
//         break; 


// }


// var expr = "Papayas";

// switch(expr){
//   case "Oranges":
//       console.log('Oranges are $0.59 a pound.');
//       break;
//   case "Mangose":
//   case "Papayas":
//       console.log('Mangose and papayas are $2.79 a pound.')
//       break;
//   default:
//       console.log('Sorry, we are out of ' + expr +  '.')  
//       break;
// }


// var count = 1
// while (count <= 10){
  
//      console.log(count)
//      count++
// }



// var i;
// var y;

// for(i = 1; i <= 10; i++){
//     for(y = 1; y <= 11; y++){
//         // console.log( i +  '*' + y + '=' + i*y)  --> works the same as below line
//         console.log(`${i} * ${y} = ${i*y}`)

// }
// }

// var arr = ['one', 'two', 'three']
// // arr[1]


// arr.push('four')
// console.log(arr)
// var newPoppedValue = arr.pop()
// arr.pop()

// console.log(arr)
// console.log(newPoppedValue)

// // var newVal = arr.shift()
// arr.unshift("front")

// console.log(arr)
 

// var name2 = "Veronica";

// console.log(name2[2])

// var words = "This is a great day!"
// var revWords = ""

// for(var index = 0; index < words.length; index++){

//    var char = words[index]
//    revWords = char + revWords;
// console.log(revWords)
// }

// var myArr = words.split(' ')

// console.log(myArr)


// var lottoNums = [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues);
// console.log(lottoNums)


// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2, 4))
// console.log(animals)


// var phoneBook = {keyName: true}

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }
// //for in
// for(keyName in characterSheet){

//     console.log(`${keyName} ${characterSheet[keyName]}`)  //keyName is just a dummy variable, it could as well be an 'i'
// }


// console.log(characterSheet["name"])

// console.log(characterSheet.name)

// delete characterSheet["name"]


function add(num1, num2){

    return num1 + num2
}

var add = (num1, num2) => num1 + num2

var result = add(3, 4)

console.log(result)
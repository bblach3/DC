//1. Positive Numbers

// let arr = [2, 3, -3, 45, 66, -12]

// let positiveNums = arr.filter(val =>{
//     return val > 0
    
// })

// console.log(positiveNums)




//##################################################################################


// 2. Even Numbers

// let arr = [2, 3, -3, 45, 66, -12]

// let evenNums = arr.filter(val =>{
//     return val % 2 == 0
    
// })

// console.log(evenNums)




// ####################################################################################


// 3. Square the Numbers

// let arr = [1, 2, 3]

// let squareTheNumbers = arr.map(val =>{
//     return val ** 2
    
// })

// console.log(squareTheNumbers)





//######################################################################################


//4. Cities 1

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

//     let newArr = cities.filter(val =>{
//     return val.temperature < 70;
// })

// console.log(newArr)



//########################################################################################

// 5. Cities 2

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

//     let newArr = cities.map(val =>{
//     return val.name;
// })

// console.log(newArr)




// #########################################################################################



// 6. Good Job!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

//     let newArr = people.forEach(val =>{
//         console.log("Good job, " + val +"!")
// })



//##########################################################################################



// 7. Sort an array

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

//     let newArr = people.sort( (a, b)=>{
//         if (a > b)
//             return 1;
//         if (a < b)
//             return -1;
//         return 0;
// })


//         console.log(newArr)



// #############################################################################################





// 8. Sort an array, 2

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

//     let newArr = people.sort( (a, b)=>{
//         if (a.length > b.length)
//             return 1;
//         if (a.length < b.length)
//             return -1;
//         return 0;
// })


//         console.log(newArr)





//#################################################################################################



/// 9. Sort an array, 3

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];


// let newArr1 = arr[0].reduce((acc, curr) =>{return acc + curr}, 0)
// let newArr2 = arr[1].reduce((acc, curr) =>{return acc + curr}, 0)
// let newArr3 = arr[2].reduce((acc, curr) =>{return acc + curr}, 0)

// var newArr = [newArr1, newArr2, newArr3]

// newArr1 = arr[0]
// newArr2 = arr[1]
// newArr3 = arr[2]

// // var newArr = [newArr1 = arr[0], newArr2 = arr[1], newArr3 = arr[2]]

//     let ArrSorted = newArr.sort( (a, b) =>{
//         if (a > b)
//             return 1;
//         if (a < b)
//             return -1;
//         return 0;
// })


    
// })

// console.log(newlist)


//####################################################################################


// 10. 3 times

// function call3Times(fun){
//     fun();
//     fun();
//     fun();
//     }

// var hello = function() {
//         console.log("Hello World!");
//     }

// call3Times(hello)





//####################################################################################


// 11. n times


// function callNTimes(n, fun) {
//     for (var i=0; i < n; i++){
//         fun();
//     }
// }
// var hello = function() {
//     console.log("Hello World!");

// }

// callNTimes(7, hello);



//####################################################################################




// 12. Sum an Array


// arr = [1 ,2 , 3]

// function sumof(arr){

// let newArr = arr.reduce((acc, curr) =>{return acc + curr}, 0)
//     return newArr
// }
//  console.log(sumof(arr))  //expected 6



//####################################################################################



// 13. Acronym

acr = ['very', 'important', 'person']


function acronym(acr){

let shorty = acr.reduce((acc, curr) =>{return acc + curr}, 0)
    return shorty
}
 console.log(acronym(acr)) 

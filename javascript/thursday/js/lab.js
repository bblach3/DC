// [{}, {}, {}]

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let isCompany = companies.some(company => {
    return company.name == "Company Six"

})

console.log(isCompany) //returns 'true'


// companies.forEach(company=>{
//     console.log(company);
// })

// ages.forEach(age=>{
//     console.log(age)
// })

// let newArr = ages.map(val=>{

//     return val + 5; 

// })
// console.log(newArr)


// let newCompaniesArr = companies.map(company =>{

//     company.end = 2020;
//     return company
// })

// console.log(newCompaniesArr)

// let newArr = ages.filter(val =>{
//     return val % 2 == 0;
// })

// console.log(newArr)

// let newArrA = ages.filter(val =>{
//     return val > 35;
// })

// console.log(newArrA)


// let newCompaniesArr = companies.filter(company =>{

      
//         return company.start > 1990

// })

// console.log(newCompaniesArr)
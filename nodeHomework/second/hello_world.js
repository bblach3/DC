const { response } = require('express');
const express = require('express')

const app = express()
let port = 3000



// 1. Hello World
app.get('/', (req, res)=>{
    res.send(`<h1>Hello World to you!</h1>`)
})



// 2. Routes
app.get('/cats', (req, res)=>{
    res.send('Meow')
})

app.get('/dogs', (req, res)=>{
    res.send('Woof')
})

app.get('/cats_and_dogs', (req, res)=>{
    res.send('Living Together')
})



// 3. Route Parameters
app.get('/greet/:id', (req, res)=>{

    let id = req.params.id

    res.send(`<h1>Hello, ${id}!</h1>`)
})


// 4. Query Parameters
app.get('/year', (req, res)=>{

    let age = parseInt(req.query.age)
    let currentYear = parseInt(new Date().getFullYear())
    console.log(currentYear);
   
    res.send(`<h1>You were born in ${currentYear - age} </h1>`)
})



app.listen(port, ()=>{
    console.log(`Server us running on port ${port}`);
})
const { response } = require('express');
const express = require('express')

const app = express()
let port = 3000
app.use(express.static('public')) //static assets


let albums = [{  
    id:0,
    name:"Thank Me Later",
    description:"2010",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/9/9c/Drake_-_Thank_Me_Later_cover.jpg",

   songTitles:["Fireworks"," Karaoke", " The Resistance", " Over", " Show me a good time", " Up all night", " Fancy", " Shut it down", " Unforgettable", " Light up", " Miss Me", " Cece Interlude", " Find Your Love", " Thank Me Now", " Best I Ever Had"]
 },
 {  
     id: 1,
    name:"Take Care",
    description:"2011",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg",

   songTitles:["Over My Dead Body"," Shot for Me", " Headlines", " Crew Love", " Take Care", " Marvin Room", " Burried Alive Interlude", " Under Ground Kings", " We'll Be Fine", " Make Me Proud", " Lord Knows", " Cameras", " Doing It Wrong", " The Real Her", " Look What You've Done", " HYFR", " Practice", " The Ride"]
 },
 {  
    id: 2,
    name:"Nothing Was the Same",
    description:"2013",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/4/42/Drake_-_Nothing_Was_the_Same_cover.png",

   songTitles:["Tuscan Leather"," Furthest Thing", " Started From the Bottom", " Wu-Tang Forever", " Own It", " Worst Behavior", " From Time", " Hold On, We're Going Home", " Connect", " The Language", " 305 to My City", " Too Much", " Pund Cake"]
 },
 {  
    id: 3,
    name:"Views",
    description:"2016",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",

   songTitles:["Keep the Family Close", " 9", " U with Me?", " Feel No Ways", " Hype", " Weston Road Flows", " Redemption", " With You", " Faithful", " Still Here", " Controlla"]
 },
 {  
    id: 4,
    name:"Scorpion",
    description:"2018",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",

   songTitles:["Survival", " Nonstop", " Elevate", " Emotionless", " God's Plan", " I'm Upset", " 8 Out of 10", " Mod Ties", " Can't Take a Joke", " Sandra's Rose", " Talk Up", " Is There More"]
 }
]

let nav = ` 
<h1>Albums:</h1>  
<ul>

<li><a href="/albums/0">Thank Me Later</a></li>
<li><a href="/albums/1">Take Care</a></li>
<li><a href="/albums/2">Nothing Was The Same</a></li>
<li><a href="/albums/3">Views</a></li>
<li><a href="/albums/4">Scorpion</a></li>

</ul>
`


app.get('/', (req, res) =>{

    res.send(`
    <h1>Drake</h1>
    <img src="https://a9p9n2x2.stackpathcdn.com/wp-content/blogs.dir/1/files/2019/11/Drake-Net-Worth.jpg" height="300px"">
    <img src="https://media.pitchfork.com/photos/5b353f9295d5421d58f012bc/16:9/w_1280,c_limit/Drake.jpg" height="300px">
    <p><b>Aubrey Drake Graham</b> (born October 24, 1986) is a Canadian rapper, singer, songwriter, actor, producer, and entrepreneur. A prominent figure in popular music, Drake is credited for popularizing the Toronto sound. He first gained recognition by starring in the teen drama television series Degrassi: The Next Generation (2001–2007); pursuing a career in music, he left the series and released his debut mixtapes before signing to Lil Wayne's Young Money Entertainment.</p>

  
    <a href="/albums">See Albums</a>
 `)
})

app.get('/albums', (req, res) =>{

    res.send(`

    <a href="/">Home</a>

    ${nav} `)

})


app.get('/albums/:id', (req, res)=>{

    let id = req.params.id
    res.send(`
    <a href="/">Home</a>
        ${nav}
        <br>
        <h2>${albums[id].name}</h2>
        <h3>Released: ${albums[id].description}</h3>

        <img src="${albums[id].imgURL}" height="300px">
        
        <h3>Songs:</h3>
    
        <p>${albums[id].songTitles}</p>
        


    `)

})

app.get('*', (req, res)=>{
    res.send(`You've reached an error`)
})


app.listen(port, ()=>{
    console.log(`Server us running on port ${port}`);
})


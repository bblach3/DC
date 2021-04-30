/*
  - guess the color (hint: it's "red")
  - disable a link
  1.create a var for the anchor
  2. create a fxn to handle the event
  3. connect your fxn to your anchor var
  - hijack a link
*/

// Variables
const correctAnser = "red";
const link = document.getElementById('dc-link')
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');




// Function
function handleClick(event) {
    console.log('you clicked a button!');
    // console.log(event);
    // console.log(event.value);
    console.log(event.target.value);
    // Earth.USA.Atlanta.Georgia.EastLake.ChrisHouse
}

function linkClick(event) {
    event.preventDefault();  //disables the link
    console.log('you clicked the link!')

}

    if (event.target === correctAnswer)  {
        console.log('😝')
    } else {
        console.log('💩')
    }


// Set the click for each button
link.addEventListener('click', linkClick)
redButton.addEventListener('click', handleClick);
greenButton.addEventListener('click', handleClick);
blueButton.addEventListener('click', handleClick);


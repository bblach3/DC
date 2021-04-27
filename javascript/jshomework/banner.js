

function printBanner(sentence) {
    var s =""
    for (var i = 1; i <= sentence.length; i++) {
           s += "*"

        }
        console.log(s + "****")
        // console.log("\n")
        console.log("* " + sentence + " *")
        // console.log("\n")
        console.log(s + "****")
}






printBanner("I wanna go to sleep already. I's almost midnight")
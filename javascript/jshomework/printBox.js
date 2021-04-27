


function printBox(width, height) {

    for (var i = 1; i <= height; i++) {
            var s =""
            for (var j = 1; j <= width; j++) {
        
                if (i == 1 || i == height || j == 1 || j == width){
                s += "*"
                }
                else {
                s += " "
                }
                
        
        }
        console.log(s)
}
console.log("\n")
}




printBox(6, 4)
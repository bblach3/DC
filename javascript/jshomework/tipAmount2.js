// var bill
// var service


function tipAmount(bill, service){
    if (service == "good"){
        return bill * 0.2
    }
    else 
    if (service == "fair") {
        return bill * 0.15
    }
    else if (service == "bad") {
        return bill * 0.1
    }
}

function tipAmount2(bill, service) {
    return tipAmount(bill, service) + bill
}



console.log(tipAmount2(100, "good")) //120
console.log(tipAmount2(40, "fair"))  //46
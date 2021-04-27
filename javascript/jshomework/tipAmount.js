var bill
var service

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
console.log(tipAmount(100, "good"))
console.log(tipAmount(40, "fair"))
console.log(tipAmount(75, "bad"))

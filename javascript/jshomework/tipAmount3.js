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

function splitAmount(bill, service, numberofpeople) {
    return tipAmount2(bill, service) / numberofpeople
}

console.log(splitAmount(100, 'good', 5))    //24
console.log(splitAmount(40, 'fair', 2))     //23
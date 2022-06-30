//My first function to splitbill between people

function splitBill(amount, numPeople) {
    return (`Each one has to pay ${amount/numPeople}`)
}

//Call the above function
console.log(splitBill(100,2))
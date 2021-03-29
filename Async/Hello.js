//This is async


function otherWork() {
    setTimeout(() => {
        console.log("We are inside function");
    }, 5000)
}

console.log("Start");
otherWork();
console.log("End");
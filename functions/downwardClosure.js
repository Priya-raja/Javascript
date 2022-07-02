

function countDown (steps) {
    let countFromNum = 15;
    return function minusNum() {
        countFromNum -= steps;
        return countFromNum;
    }
    
}

const result = countDown(5);

console.log(result())
console.log(result())
console.log(result())
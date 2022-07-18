function add(a,b) {
    return a + b;
}

//Write a function that adds from two invocations
// function addF(num) {
//     let result = num
//     return function two(num2)
//     {
//         result += num2;
//         return result;
//     }
// }
function addf(x) {
    return function(y) {
        return add(x,y);
    };
}

const one = addf(3)(4);
// const answer = addF(3)(4);
console.log(one)
//Write a function that takes in a function and an argument, 
//and returns a function that can take a second argument.

// curry (add,9) (3)
function add(x,y){
    return x+ y;
}
//This is called as currying
function curry(add, a) {
    return function (b){
        return add(a,b)
    }
}
const rules = curry(add,9)(3)
console.log(rules);
//do same with subtract
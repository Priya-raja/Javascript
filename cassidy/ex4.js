// Using the function we've written so far, write a function increment

// let increment = curry(add,1);

// increment(5)

function add(x,y) {
    return x+ y;
}

function curry(add) {
    return function(num2) {
        return function(num3){
            return add(num2, num3)
        }
    }

}

let increment = curry(add)(1)(2)
console.log(increment);

//answer
// let increment1 = addf(1);
// let increment2 = liftf(add)(1);
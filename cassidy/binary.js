//write a function that takes a binary function and makes it a callable with 2 invocations

// liftf(add)(2)(3)

function add (x,y) {
    return x+ y;
}

function binary(add){
    return function(a){
        return function (b){
            return add(a,b)

        };
    };
}
const result = binary(add)(2)(3);
console.log(result)
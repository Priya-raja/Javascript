var counter = function(arr){
    return `the length of Array is ${arr.length}`
}
// console.log(counter(['arya','priya']));

var add = function(a,b){
    return a+b;
}

// console.log(add(4,5));
module.exports = {
    counter :counter,
    add :add,
}
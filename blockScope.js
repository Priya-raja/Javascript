//Here we are seeing the propblem of variable shadowing

var price = 20;
var isSale = true;

// variable shadowing
if(isSale) {
    // price = 20-10;
    const price = 20-10;
    console.log('The sale price is', price);
}

console.log('The actual price is', price);

//o/p is 10 for both which is wrong var overrides the global scope.
//Use let and const


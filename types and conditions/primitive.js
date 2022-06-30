//Primitive type

//string
//number
//boolean
//undefined
//null
//symbol

//everything else is object
let message = 'some string';

console.log(typeof window)

//1)explicit 
//2) implicit conversion(coercion)

//truthy(true)
//falsy(false)

if(0) {
    console.log('run')
} else {
    console.log('skipped')
}
//Rmember the following 6 values are always falsy
/*
0
null
undefined
false
''
Nan */

// 1) Avoid direct comparisons in conditionals

// const username = null;

// if (!username) {
//   console.log('no user');
// }

// 2) Use triple equals === (strict equals operator) 

// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }

// 3) Convert to real Boolean values where needed

if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}

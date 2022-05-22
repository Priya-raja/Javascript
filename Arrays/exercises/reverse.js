function reverseString (str)  {
//     let reverseString = str.split('').reverse().join('');
//     return reverseString;
/******** */
// let rev = '';
// for (let ans of str)
// {
//    rev = ans +rev
// }
// return rev
let rev =''
// for (let i = 0 ; i<= str.length-1; i++)
// {
//    rev = str[i] + rev;
// }
//  str.split('').forEach(element => {
//     rev = element + rev;
// });
return str.split('').reduce((rev, action) => action + rev, '');


    // return rev
}


const output = reverseString('hello');
console.log(output);
const palindrome = (str) => {

//  let rev = str.split('').reverse().join('');
//  return (rev === str);
 //if a number

 let num = str.toString().split('').reverse().join('');
return parseInt(num) * Math.sign(str);

}

const output = palindrome(-12345);
console.log(output)

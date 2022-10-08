// Given two integers, generate a “fibonacci-like” sequence 
// of n digits (where the next number in the pattern is the sum of the previous two numbers). 
// Extra credit: Given a sequence, determine if the sequence is “fibonacci-like”.

const fibLike = (a, b, n) => {
  let fibSequence = [];

  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    let nextNum = a + b;
    a = b;
    b = nextNum;
  }
  console.log(fibSequence);
};

let firstSequence = fibLike(10, 20, 5);

let secondSequence = fibLike(3, 7, 6);

firstSequence;
secondSequence;

//Check is its a fib sequence

function isFib(result) {
  let isFib = false;
  let fibArray = [];
  for (i = 0; i < result.length - 2; i++) {
    if (result[i + 2] === result[i] + result[i + 1]) {
      isFib = true;
      fibArray.push(isFib);
    } else {
      isFib = false;
      fibArray.push(isFib);
    }
  }

  const allResult = fibArray.every((all) => all);

  if (allResult) {
    console.log(`${result} is a fibonacci-like`);
  } else {
    console.log(`${result} is not a fibonacci-like`);
  }
}

isFib([10, 20, 30, 50, 80]); //yes
isFib([3, 7, 10, 17, 27, 43]); //not

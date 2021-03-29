const numbers = [1,2,3];
const newNumbers = [...numbers,5];

console.log(newNumbers);

const person = {
    name: 'MaxMiller'
};

const newPerson = {
  ...person,  //spread operator
  age: 28
}
console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3));

//Array destructuring

const [num1, ,num3] = numbers;

console.log(num1,num3);

const {name1, age} = {name1:'Willow', age: 27};
console.log(name1);
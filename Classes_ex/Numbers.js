const numbers = [1,2,3];
const newNumbers = [...numbers,5];

console.log(newNumbers);

const person = {
    name: 'priya'
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

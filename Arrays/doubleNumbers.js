const numbers = [1,2,3,4,5,6];
const double = numbers.reduce((acc, num)=>{
    acc.push(num * 2)
    return acc
},[])

console.log(double)
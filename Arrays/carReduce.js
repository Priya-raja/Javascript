// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];
  
  
  const totalWeight = cars.reduce((acc,sum)=> {
      return acc + sum.weight;
  },0)
  console.log(totalWeight);
  const electricCar = cars.reduce((acc,sumWeight)=> {
      if (sumWeight.isElectric)
      {
          return acc + sumWeight.weight;
      }
      else 
      return acc;
  },0)
  
  console.log(electricCar);
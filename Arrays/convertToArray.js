//Object.values() Object.keys() Object.entries()
// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log('value', obj[key]);
// }

const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };

  const result = Object.entries(users).reduce((acc, [id,user]) => {
      if(user.age > 20)
      {
          acc.push({...user, id})
      }
      return acc

  },[])

  console.log(result);
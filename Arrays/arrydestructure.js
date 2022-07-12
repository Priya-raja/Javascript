const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];

  const [first, second] = finalMenuItems;

  console.log({first}, {second})

  const [winner, ...losers] = finalMenuItems;

  console.log({winner, losers})
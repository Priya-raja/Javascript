const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allItems = [...lunchMenuIdeas, 'cheese'];


// console.log(allItems);
// console.log(lunchMenuIdeas);

const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];
const newMenu = dinnerMenuIdeas.indexOf('Meatloaf')
const idea = dinnerMenuIdeas.slice(0,newMenu)
console.log(idea)
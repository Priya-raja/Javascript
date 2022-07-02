const username = 'priya';

//function to capitalize the 1st letter
const capitalize = (name) => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greet(name, callback) {
    return callback(capitalize(name))
}
//callback function
const result = greet(username, name => `Hi there, ${name}!`);
console.log(result);

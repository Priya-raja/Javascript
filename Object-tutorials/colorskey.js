//Create an object of colors and try to access them 

//dynamically adding
const color = 'green';
const hexCode = '#0f0';

const colors = {
    yellow: '#FFFF00',
    black: '#000',
    [color]: hexCode,

}
colors.red = '#foo';

console.log(colors)
//access using functions

function getColors(key) {
    return colors[key];
}

delete colors['black'];
console.log(colors)
//access using dot notation

console.log(colors.yellow);
console.log(getColors('green'));
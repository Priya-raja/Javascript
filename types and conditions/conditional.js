
//conditions for rendering different themes
const colorMode = 'dark'

switch (colorMode) {
    case "dark":
        console.log("ITs dark mode");
        document.body.style.background = 'black';
        break;
    case "polarized" :
        
        console.log("Its yellow!");
        document.body.style.background = 'yellow';
        break;

    default :
        console.log("white set!");
        document.body.style.background = 'ghostwhite'       
}
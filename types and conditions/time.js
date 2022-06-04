const time = "morning" // could be "afternoon", "evening" and "night"

if (time === "morning") {
    console.log("Good morning!");
} else if (time === "afternoon") {
    console.log("Good afternoon!");
} else if (time === "evening") {
    console.log("Good evening!");
} else {
    console.log("Good night!");
}

switch (time) {
    case "morning":
        console.log("Good morning!");
    break; 
    case "afternoon":
        console.log("Good afternoon!");
    break; 
    case "evening":
        console.log("Good evening!");
    break;
    default:
        console.log("Good night!");
}
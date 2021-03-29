function loginUser (email,password,callback) {
    
    setTimeout(() => {
        console.log("We have data");
        
        callback ({
        userEmail: email,
        userPassword: password
    }) 
}, 5000);
}
console.log("start");
const user = loginUser('priya.thevar@gmail.com', '12345', user => {});
console.log(user);

console.log("End")
var user = {
    firstName : "Priya",
    lastName: "Thevar",
    isSigned: true,
    loginCount: 32,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    
    getCourseCount : function () {
       return `${this.courseList.length} he is enrolled into`;
    }
};

// console.log(user.firstName);
// console.log(user["lastName"]);
// user.loginCount = 44;
// console.log(user.loginCount);
// console.table(user);
var courseList = true;
 user.buyCourse("Learn React js");
 user.buyCourse("Python");
console.log(user.getCourseCount());

// console.log(user);

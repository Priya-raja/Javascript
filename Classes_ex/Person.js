//Inheritance
class Human {
    constructor() {
        this.gender = 'Female';
    }
    printGender() {
        console.log(this.gender);
    }
}
class Person extends Human{   //Use the super keyword. Can also overwrite gender
    constructor() {
        super();
        this.name = 'Max';
        // this.gender ='Male';
    }
    printMyName() {
        console.log(this.name);
    }
}
const per = new Person();
per.printMyName();
per.printGender();
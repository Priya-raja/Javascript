class Human {
    
    gender = "Female";

    printGender = () => {
       console.log(this.gender);
    }
}

class ModernPerson extends Human {
    nameA = "Max";
    printName = () => {

        
        console.log(this.nameA);
    }
}

const per = new ModernPerson();
per.printName();
per.printGender();

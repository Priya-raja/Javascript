const person = {
    username: 'Priya',
    subject: 'Computer',
    getBio: () => {  
        console.log(`${person.username} like ${person.subject}`);
    },
    askToFriend() {
        setTimeout(()=>{
         console.log(`Can you be ${this.username} friend?`)
        },2000)
    }
}

person.getBio();
person.askToFriend();
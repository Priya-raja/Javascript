//To create a constructor function in javascript
//Create a book function with id, title, author

function Book(id,title,author, themes = []) 
{
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

Book.prototype.addThemes = function(newTheme){
    this.themes = [...this.themes, newTheme];
}

const book1 = new Book(2,'Lor of the Rings', 'JRR');
book1.addThemes('fantasy');
console.log(book1)

// console.log(new Object());
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  
  const student1 = new Student(1, 'Reed');
  
  // console.log(Object.getPrototypeOf(student1).constructor);
  console.log(student1.__proto__ === Student.prototype);
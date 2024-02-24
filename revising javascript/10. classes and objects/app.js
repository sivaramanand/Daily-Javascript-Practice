// class Book {
//     constructor(title, author, isbn) {
//       this.title = title;
//       this.author = author;
//       this.isbn = isbn;
//     }

//     getDetails() {
//       return `${this.title} by ${this.author}, ISBN: ${this.isbn}`;
//     }
//   }

// class Member {
//     constructor(name) {
//       this.name = name;
//       this.borrowedBooks = [];
//     }

//     borrowBook(book, returnDate) {
//       const borrowedBook = new BorrowedBook(book, returnDate);
//       this.borrowedBooks.push(borrowedBook);
//     }

//     listBorrowedBooks() {
//       this.borrowedBooks.forEach(book => {
//         console.log(`${book.getDetails()} - Return By: ${book.returnDate}`);
//       });
//     }
//   }

//   class BorrowedBook extends Book {
//     constructor(book, returnDate) {
//       super(book.title, book.author, book.isbn); // Call the parent class constructor
//       this.returnDate = returnDate;
//     }
//   }

//   const member1 = new Member("Alice Johnson");
// const book2 = new Book("Clean Code", "Robert C. Martin", "0132350882");

// // Alice borrows "Clean Code"
// member1.borrowBook(book2, "2024-03-01");
// member1.listBorrowedBooks();

// ----------------------------------------------------------------------------------------------------------------------------------//

// class toyotaCar {
//   constructor(brand, mileage) {
//     this.brands = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("Start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   setBrand(brands) {
//     console.log((this.brand = brands));
//   }
// }

// let fortuner = new toyotaCar("toy","20");
// fortuner.setBrand("fortuner");
// let lexus = new toyotaCar("toy","15");
// lexus.setBrand("lexus");

//---------------------------------------------------------------------------------//
// class person {
//   constructor(names) {
//     this.species = "homo sapiens";
//     this.name = names;
//   }
//   eat() {
//     console.log("eat");
//   }
//   work() {
//     console.log("work is not life");
//   }
// }

// class Enginner extends person{
//   constructor(name) {
//     super(name);
//   }
//   work() {
//     super.eat();
//     console.log("work is the most important");
//   }
// }

// let engObj = new Enginner();
// let personObj = new person();

// console.log(engObj);
// console.log(personObj);
//--------------------------------------------------------------------------//

let Data = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data=", Data);
  }
}
class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.name = name;
    this.email = email;
  }

  changeData() {
    Data = "hello world";
    console.log(Data);
  }
}
let student1 = new User("sharadha", "123@gmail.com");
let student2 = new User("aman", "456@gmail.com");
let teacher1 = new User("teacgheer12", "teacher123@gmail.com");
// student1.viewData()
let teacher2 = new Admin("admin1", "admin1@email.com");
teacher2.changeData()

/**
 * Bookshelf is an internal data structure
 * that manages Books.
 * @param {HTMLElement} htmlElement the element to render to
 * @param {Book[]} books an optional array of Books
 */
class Bookshelf {
  constructor(htmlElement, books = []) {
    this.books = books;
    this.htmlElement = htmlElement;
    this.visibleBooks = books;
  }


  /**
   * Process an array of raw book information
   * to initialize Bookshelf properties
   * @param {{author: string[], language: string, subject: string[], title: string}[]} data an array of book data
   */
  seed(data) {
    // Load in the data
    data.forEach((bookInfo) => {
      const book = new Book(
        bookInfo.author,
        bookInfo.language,
        bookInfo.subject,
        bookInfo.title
      );
      this.addBook(book);
    });

    // Prepare and sort visible books
    this.visibleBooks = this.books;
    this.sortVisibleBooks((a, b) => a.title.localeCompare(b.title));

    this.render();
  };

  /**
   * Add a book to the Bookshelf
   * @param {Book} book
   */
  addBook(book) {
    this.books.push(book);
    console.log(this.books)
  };

  /**
   * Use internal Book array to rerender the
   * existing DOM element for this Bookshelf.
   */
  render() {
    /* NOTE: Change render! This is currently a barebones template. */
    const ul = document.createElement("ul");
    ul.classList.add("bookshelf")
    const books = this.visibleBooks.map((b) => b.render());
    ul.replaceChildren(...books);
    this.htmlElement.replaceChildren(ul);
  };

  // render() {
  //   /* NOTE: Change render! This is currently a barebones template. */
  //   const ul = document.createElement("ul");
  //   const books = this.books.map((b) => b.render());
  //   ul.replaceChildren(...books);
  //   this.htmlElement.replaceChildren(ul);
  // };


  /**
   * @returns the number of favorite books
   */
  countFavoriteBooks() {
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  };

  /**
   * Filter visible books according to a given criteria function
   * @param {(book: Book) => boolean} criteria
   */
  filterVisibleBooks(criteria) {
    this.visibleBooks = this.books.filter(criteria);
    this.render();
  };

  /**
   * Sort visible books according to a given compare function
   * @param {(a: Book, b: Book) => number} compareFn
   */
  sortVisibleBooks(compareFn) {
    this.visibleBooks.sort(compareFn);
    this.render();
  };
}


///////////// REFERENCE NOTES
// Here's what each line does:

// class Bookshelf {: This declares a class called Bookshelf in JavaScript. A class is a blueprint for creating objects with certain properties and methods.
// constructor(htmlElement, books = []) {: This is the constructor function of the Bookshelf class. The constructor method is a special method that gets called when an object is created from this class using the new keyword. It takes two parameters: htmlElement and books.
// this.books = books;: This line assigns the value of the books parameter to the books property of the object being created. The this keyword refers to the instance of the object being created.
// this.htmlElement = htmlElement;: This line assigns the value of the htmlElement parameter to the htmlElement property of the object being created.
// this.visibleBooks = books;: This line assigns the value of the books parameter to the visibleBooks property of the object being created.
// The constructor function is typically used to initialize the properties of an object when it is created. In this case, the Bookshelf class is designed to represent a bookshelf with an HTML element and an array of books, and the constructor is used to set the initial values of the books, htmlElement, and visibleBooks properties of the Bookshelf object being created. The = in the books = [] parameter allows for a default value of an empty array if no books parameter is provided when creating a Bookshelf object.


/////////////////
// In JavaScript, classes and functions are both used to define objects and encapsulate behavior, but they have some differences in syntax and usage.

// Here are some key differences between classes and functions in JavaScript:

// Syntax: Classes in JavaScript are defined using the class keyword, whereas functions are defined using the function keyword.
// Instantiation: Classes are used to create objects using the new keyword followed by the class name, while functions are invoked directly using parentheses (). For example, to create an object from a class MyClass, you would use new MyClass(), whereas to invoke a function myFunction(), you would simply use myFunction().
// Constructor: Classes have a special method called constructor that is used to initialize object properties when the object is created. Functions, on the other hand, can also have parameters and can perform similar initialization tasks, but they do not have a special constructor method.
// Inheritance: Classes in JavaScript support inheritance, allowing for the creation of class hierarchies and the ability to extend and inherit behavior from parent classes. Functions, on the other hand, do not inherently support inheritance.
// Prototype vs. Closure: JavaScript functions are based on prototypes and closures, which allow for dynamic behavior and runtime modifications. Classes in JavaScript are syntactic sugar over prototypes and closures, providing a more concise and familiar syntax for creating objects and defining behavior.
// As for whether classes and functions can be used interchangeably or substituted for one another, it depends on the context and use case. Classes are commonly used when creating objects with shared behavior and state, and when inheritance and polymorphism are needed. Functions, on the other hand, are commonly used for encapsulating behavior in smaller units, such as utility functions, callbacks, or event handlers.

// Advantages of using classes in JavaScript:

// Provides a more familiar and concise syntax for defining objects and behavior, especially for developers coming from object-oriented programming (OOP) backgrounds.
// Supports inheritance, allowing for the creation of class hierarchies and code reuse through subclassing.
// Provides better support for encapsulation of state and behavior within objects through the use of constructor and class methods.
// Advantages of using functions in JavaScript:

// More flexible and dynamic, allowing for runtime modifications through closures and prototypes.
// Can be used for various purposes, such as utility functions, callbacks, event handlers, and more.
// Can be more lightweight and performant for smaller units of behavior or isolated tasks.
// Ultimately, the choice between using classes or functions in JavaScript depends on the specific requirements of your code and the style and preferences of your development team. Both classes and functions have their strengths and weaknesses, and the best approach may vary depending on the situation.


///////// Why 'seed' was chosen as a name
/**
 * In the provided code, seed(data) is a method of the Bookshelf class that processes an array of raw book information to initialize the properties of the Bookshelf object. The term "seed" in this context is not a part of JavaScript syntax, but rather a chosen name by the programmer to indicate the action of initializing or populating the Bookshelf object with initial data.

The term "seed" is often used in computer programming to refer to the process of providing initial data or values to set up an object or system. It is similar to how a seed provides the starting point for the growth of a plant. In this case, the seed(data) method takes an array of book data as input, creates Book objects from the data, and adds them to the books property of the Bookshelf object using the addBook(book) method. This helps to set up the initial state of the Bookshelf object with the provided book data. The programmer likely chose the name "seed" to convey this idea of initializing or populating the Bookshelf object with data in a way that aligns with the metaphor of a seed providing the starting point for growth. However, it's important to note that "seed" is not a reserved keyword in JavaScript and could have been chosen arbitrarily by the programmer.
 */
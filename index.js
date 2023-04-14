//  The index.js file contains the logic to interact with the UI and update the bookshelf
// My goal is 8/10 on this project
// My questions 
// step 1. visually add 4 input boxes and 1 button for newBooks to be added by 'title', 'author', 'subjects' 
// step 2. look at Real Estate project for help + look at his video

// step 3. Ask q's from mentors. You must reach out to mentors at 10am and at 2:30pm and then again at 5pm  do this Thurs and Fri and you will have finished the project. 
// step 4. Try working with a smaller array ie 5 books only for clarity and ease. 



// --------------------------
//#region Initialization / This needs to go at the top
// --------------------------
const bookshelfElement = document.querySelector(".books"); // select all the books from the element class in html 
const bookshelf = new Bookshelf(bookshelfElement); // create a new instance of Bookshelf with the books selected above
bookshelf.seed(bookData);
//#endregion Initialization


// -----------------
//#addEventListener for the 'form' submission.
// ---------------------------
// When the 'form' is submitted, retrieve the input values, create a new book object using the input values, and add it to the bookData array. You can use push method to add the new book object to the bookData array.
// -----------------
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()

    // retrieve the input values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const subject = document.getElementById('subject').value.split(', ')
    const language = document.getElementById('language').value

    //  create a new book object using the input values,
    const newBook = new Book(author, language, subject, title);  // created new instance

    // use array.push to add new book object to the bookData array.
    bookshelf.addBook(newBook);
    bookshelf.render(); // Update DOM to display the newly added book
})

// --------------------------
//#region Favorite Feature
// --------------------------
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

updateBtn.addEventListener("click", () => {
    favCount.textContent = bookshelf.countFavoriteBooks();
});

//#endregion Favorite Feature

// --------------------------
//#region Searching
// --------------------------
const searchInput = document.querySelector("nav input");
const searchBtn = document.querySelector(".searchBtn");

// NOTE: This only searches through the titles of the books!
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const searchFn = (b) => b.title.toLowerCase().includes(query);
    bookshelf.filterVisibleBooks(searchFn);
});

//#endregion Searching

// --------------------------
//#region Sorting
// --------------------------
const sortBy = document.querySelector(".sortBy");

// NOTE: This only sorts by the titles of the books!
sortBy.addEventListener("change", () => {
    const query = sortBy.value;
    let sortFn;

    if (query === "titleaz") {
        sortFn = (a, z) => a.title.localeCompare(z.title);
    } else if (query === "titleza") {
        sortFn = (a, z) => z.title.localeCompare(a.title);
    }

    bookshelf.sortVisibleBooks(sortFn);
});

//#endregion Sorting



///// extra fromMarven's review
//// counting all books in bookData
// const booksTotal = bookData.reduce((prev, curr) => {
//     return prev + 1
// }, 0)

// console.log("this is booksTotal", booksTotal)


// const booksTotal = bookData.reduce((prev, curr)=>{
//     if (prev[curr.language]){

//     }
// })


//////////////
// The code appears to be part of a larger program that interacts with a Bookshelf class instance, which represents a collection of books. Here's a summary of what the different sections of the code do:

// Initialization:
// It initializes a bookshelfElement by querying the DOM for an element with the class name "books".
// It creates a bookshelf instance by calling the Bookshelf constructor with the bookshelfElement as an argument, and then calls the seed() method on the bookshelf instance with bookData as an argument to populate the bookshelf with initial book data.

// Favorite Feature:
// It initializes favCount and updateBtn by querying the DOM for elements with class names "favCount" and "favUpdateBtn", respectively.
// It adds an event listener to updateBtn so that when it is clicked, the bookshelf instance's countFavoriteBooks() method is called, and the result is set as the text content of favCount. This updates the count of favorite books displayed on the page.

// Searching:
// It initializes searchInput and searchBtn by querying the DOM for elements with class names "nav input" and "searchBtn", respectively.
// It adds an event listener to searchBtn so that when it is clicked, the value of searchInput is used to filter the visible books in the bookshelf instance by calling the filterVisibleBooks() method with a custom search function that filters books based on their titles.

// Sorting:
// It initializes sortBy by querying the DOM for an element with the class name "sortBy".
// It adds an event listener to sortBy so that when its value changes, a sorting function is determined based on the selected value.
// Depending on the selected value, it sets the sorting function (sortFn) accordingly, which determines how the books should be sorted by their titles.
// It then calls the sortVisibleBooks() method on the bookshelf instance with sortFn as an argument to sort the visible books in the bookshelf accordingly.
// Overall, the code sets up event listeners on various elements in the DOM to interact with the bookshelf instance, allowing users to update the bookshelf's state, such as adding books, filtering books, and sorting books, based on user interactions with the webpage.




// --------------------------
//#region Initialization / This needs to go at the top
// --------------------------
const bookshelfElement = document.querySelector(".books"); 
const bookshelf = new Bookshelf(bookshelfElement); 
bookshelf.seed(bookData); 
//#endregion Initialization


// -----------------
//#addEventListener for the 'form' submission.
// -----------------
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault() 
    
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const subject = document.getElementById('subject').value.split(', ') 
    const language = document.getElementById('language').value

    const newBook = { title, author: [author], subject: subject, language }; 

    bookshelf.addBook(newBook)
    bookshelf.render
    
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
/// Plan for adding 'comments' should only take you 2 hours.  
// Comments are per book so put them in the 'Book' class
// Event listener is also in 'Book' class 
// When you 'render' the books it will render 'comments'
// Maybe make a new render function? not sure. 
// Attempt to put all in book.render 

// Make sure you render the comments in the event listener

//start with an empty array 
// array.push comments are an arry of strings them into // push string into the array 


/**
 * Book represents information about a book.
 * @param {string[]} authors array of the book's authors
 * @param {string} language the language the book is written in
 * @param {string[]} subject  array of book topics
 * @param {string} title title of the book
 */
class Book {
    constructor(authors, language, subject, title) {
        this.authors = authors;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.isFavorite = false;
        this.comments = []
    }

    /**
     * @returns a list item representing this Book
     */
    render() {

        const bookList = document.createElement("li")

        const titleh1 = document.createElement("h1");
        titleh1.textContent = this.title;
        bookList.append(titleh1)

        const authorh2 = document.createElement("h2")
        authorh2.textContent = `Author: ${this.authors}`;
        bookList.append(authorh2)

        const languageh3 = document.createElement("h3")
        languageh3.textContent = `Language: ${this.language}`;
        bookList.append(languageh3)

        const subjecth4 = document.createElement("h4")
        subjecth4.textContent = `Subject: ${this.subject}`;
        bookList.append(subjecth4)

        // Create favorite button
        const favButton = document.createElement("button");
        favButton.textContent = this.isFavorite ? "❤️" : "♡";
        bookList.append(favButton);

        // Toggle favorite property on click
        favButton.addEventListener("click", () => {
            this.isFavorite = !this.isFavorite;
            favButton.textContent = this.isFavorite ? "❤️" : "♡";
        });

        // Create your constants first 
        // Create a comments section with 'div' and use a .class 'commentsSection' to call it
        const commentsSection = document.createElement("div")
        commentsSection.classList.add("commentsSection")

        // Create comments input
        const commentsInput = document.createElement("Input")
        commentsInput.type = "text"  // limits it to text
        commentsInput.placeholder = "Leave a comment (max 280 characters)"// tells user to input text
        commentsInput.classList.add("comments-input")
        commentsSection.append(commentsInput)

        // Create comments button
        const commentsButton = document.createElement("button")
        commentsButton.textContent = "Commment"; // 
        commentsButton.classList.add("comments-button") // add .class name
        commentsSection.append(commentsButton); // append to comments section

        // Create comments list
        const commentsList = document.createElement("ul");
        commentsList.classList.add("commentsList");
        commentsSection.append(commentsList);

        // Add event listener for "input" event on commnentsInput
        commentsInput.addEventListener("input", () => {
            const commentText = commentsInput.value.trim();  // create own const within func that is current 'trim' comment
            if (commentText.length > 280){  // set 'if' statememt 
                //If comment text exceeds 280 characters, 'slice' it
                commentsInput.value = commentText.slice(0,280);
            }
        });

        // Add event listener to comments button
        commentsButton.addEventListener("click", () => {
            const commentText = commentsInput.value.trim(); //grabs current value of input and removes any whitespace from both ends of string and stores it in 'commentText'
            // create 'if' statement
            if (commentText !== "") {  // if string is empty create a list item called 'comment' and in that list item put 'commentText' (user 'commentsInput') in it. Then 'append' that user comment list to the larger ul called 'commentsList'. Then 'push' (or attach) 'commentText) to 'this.comments'
                const comment = document.createElement("li");
                comment.textContent = commentText;
                commentsList.append(comment);
                this.comments.push(commentText);
                this.commentsInput.value = "";
            }
        });
        
    bookList.append(commentsSection)

        return bookList;
    }
}

/**
 * The Book class also has a render() method, which is presumably responsible for rendering a list item (<li>) element in the UI that represents the book. Here's a breakdown of what the render() method does:

It creates a new <li> element using the document.createElement() method and assigns it to the variable li.
It sets the text content of the <li> element to this.title, which presumably represents the title of the book.
It creates a new <button> element using the document.createElement() method and assigns it to the variable favButton.
It sets the text content of the <button> element to a heart emoji ("❤️") if this.isFavorite is true, or to an empty heart ("♡") if this.isFavorite is false.
It appends the favButton to the li element as a child element using the append() method.
It adds an event listener to the favButton that listens for a click event. When the button is clicked, the event handler function is executed.
Inside the event handler function, it toggles the value of this.isFavorite using the logical NOT (!) operator, which means if this.isFavorite is true, it becomes false, and vice versa.
It updates the text content of the favButton based on the new value of this.isFavorite.
Finally, it returns the li element, which represents the rendered list item with the favorite button.
It's worth noting that the render() method is just a placeholder or a "barebones template" in the comments, and likely needs to be updated with actual rendering logic that aligns with the requirements and structure of the larger application where the Book class is used.
 */
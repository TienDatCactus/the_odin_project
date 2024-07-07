function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = true;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
}
const theHobbitt = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbitt.info());

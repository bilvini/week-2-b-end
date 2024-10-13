class Book {
    constructor(title, author) {
        this.id = Date.now().toString();
        this.title = title;
        this.author = author;
        this.available = true;
    }
}

module.exports = Book;

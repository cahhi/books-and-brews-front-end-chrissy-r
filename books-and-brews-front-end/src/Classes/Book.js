export default class Book {

    constructor(id, title, author, genres, description) {
        this.id = id;
        this.title = title;
        this.author = author; //author object
        this.genres = genres; //array of genres
        this.description = description; //this is the description object
    }

    getFormattedGenres() {
        return this.genres.map(genre => genre.title).join(', ');
    }
}
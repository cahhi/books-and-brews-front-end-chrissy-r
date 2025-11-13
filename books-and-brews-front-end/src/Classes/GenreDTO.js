//creating a new genreDTO instance
export default class GenreDTO {

    constructor(title) {
        this.title = title;
    }

    isValid() {
        return this.title !=="";
    }
}
export default class GenreDTO {

    constructor(title) {
        this.title = title;
    }

    isValid() {
        return this.title !=="";
    }
}
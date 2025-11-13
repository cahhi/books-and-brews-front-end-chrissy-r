//creating a new bookDTO
export default class BookDTO {

    constructor(title, authorId, genreIds, description) {
        this.title = title;
        this.authorId = authorId; //this is the author id
        this.genreIds = genreIds; //array of genreIds
        this.description = description; //this is the DescriptionDTO object
    }

    isValid() {
        return this.title.trim() && this.authorId && this.genreIds.length;
    }
}
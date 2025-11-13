//Initializing a new author object
export default class Author {

    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() { //using funtion to return author name as full name
        return `${this.firstName} ${this.lastName}`;
    }
}
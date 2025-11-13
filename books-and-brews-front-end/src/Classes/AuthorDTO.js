//creating a new artistDTO instance
export default class ArtistDTO {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    isValid() {
        return this.firstName.trim() !== '' && this.lastName.trim() !== ''; //making sure no empty strings
    }
}
//creating a new descriptionDTO instance
export default class DescriptionDTO {

    constructor(summary,salesPrice, originalPrice, image) {
        this.summary = summary;
        this.salesPrice = salesPrice;
        this.originalPrice = originalPrice;
        this.image = image;
    }

    isValid() {
        return (
            this.summary.trim() &&
            this.salesPrice && 
            this.originalPrice &&
            this.image
        );
    }
}
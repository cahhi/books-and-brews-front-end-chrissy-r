export default class Description {

    constructor(summary,salesPrice, originalPrice) {
        this.summary = summary;
        this.salesPrice = salesPrice;
        this.originalPrice = originalPrice;
    }

    isValid() {
        return (
            this.summary.trim() &&
            this.salesPrice && 
            this.originalPrice
        );
    }
}
export default class Description {

    constructor(summary, isTrending, salesPrice, originalPrice) {
        this.summary = summary;
        this.isTrending = isTrending;
        this.salesPrice = salesPrice;
        this.originalPrice = originalPrice;
    }

    isValid() {
        return (
            this.summary.trim() &&
            this.isTrending &&
            this.salesPrice && 
            this.originalPrice
        );
    }
}
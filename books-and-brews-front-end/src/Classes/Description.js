
export default class Description {

    constructor(id, summary, salesPrice, originalPrice, image) {
        this.id = id;
        this.summary = summary;
        this.salesPrice = salesPrice;
        this.originalPrice = originalPrice;
        this.image = image;
    }


    getImageURL(){
        return  this.image +'.png';
        
    }


    
}
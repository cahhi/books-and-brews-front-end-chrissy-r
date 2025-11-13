//Initializing a new description object
export default class Description {

    constructor(id, summary, salesPrice, originalPrice, image) {
        this.id = id;
        this.summary = summary;
        this.salesPrice = salesPrice;
        this.originalPrice = originalPrice;
        this.image = image;
    }


    getImageURL(){ //getting the imageid and adding '.png' so that react can find the image
        return  this.image +'.png';
        
    }


    
}
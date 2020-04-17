class Card {
    constructor(id,arrayImg, formatAddress, price, bedrooms, bathrooms, usableArea, parkingSpaces){
        this._id              = id
        this._images          = arrayImg;
        this._address         = formatAddress;
        this._price           = price;
        this._bedrooms        = bedrooms;
        this._parkingSpaces   = bathrooms;
        this._usableArea      = usableArea;
        this._bathrooms       = bathrooms;
    }

  
    get address() {
        return this._address;
    }

    get price() {
        return this._price.toLocaleString('pt-BR');
    }

    get bedrooms() {
        return this._bedrooms;
    }

    get parkingSpaces(){
        return this._parkingSpaces;
    }

    get usableArea() {
        return this._usableArea;
    }

    get bathrooms(){
        return this._bathrooms;
    }

    get images(){
        return  this._images;
    }

    set images(images) {
        this._images = images
    }

    get id() {
        return this._id;
    }

    set id(id) {{
        return this._id = id;
    }}
    set address(address) {
        this._address = address;
    }

    set price(price) {
        this._price = price;
    }

    set bedrooms(bedrooms){
        this._bedrooms = bedrooms;
    }

    set parkingSpaces(parkingSpaces){
        this._parkingSpaces = parkingSpaces;
    }

    set usableArea(utilArea) {
        this._usableArea = utilArea;
    }

    set bathrooms(bathrooms){
        this._bathrooms = bathrooms;
    }
}
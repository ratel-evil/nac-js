class Filter {
    constructor(price, address, utilArea, maxValues) {
        this._price = price.value;
        this._address = address.value;
        this._utilArea = utilArea.value;
        this._maxValues = maxValues.value;
    }

    get price() {
        return this._price;
    }

    get address() {
        return this._address;
    }

    get utilArea() {
        return this._utilArea;
    }

    get maxValues() {
        return this._maxValues;
    }
    
    set price(price) {
        this._price = price;
    }

    set address(address) {
        this._address = address;
    }
    
    set utilArea(utilArea) {
        this._utilArea = utilArea;
    }

    set maxValues(maxValues) {
        this._maxValues = maxValues;
    }


}
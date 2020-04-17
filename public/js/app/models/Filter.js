class Filter {
    constructor(minPrice,maxPrice) {
        const $ = document.querySelector.bind(document);
        this._priceElement = $("input[type='range'][id='price']");
        this._priceLabel = $("#priceLabel");
        this._usableAreaLabel = $("#usableAreaLabel");
        this._usableAreaElement = $("input[type='range'][id='usableArea']");
        this._usableArea = parseInt(this._usableAreaElement.value);
        this._price = parseInt(this._priceElement.value);
        this._address = $("input[type='search'][id='address']").value;
        this._maxValues = parseInt($("select[name='maxValues']").value);            
    }

    get price() {
        return this._price;
    }

    get address() {
        return this._address;
    }

    get usableArea() {
        return this._usableArea;
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
    
    set usableArea(utilArea) {
        this._usableArea = utilArea;
    }

    set maxValues(maxValues) {
        this._maxValues = maxValues;
    }
    
    setElementMinMaxAttrs(min, max,element) {
        this[element].setAttribute('max', max);
        this[element].setAttribute('min', min);
    }
    get usableAreaElement() {
        return this._usableAreaElement;
    }
    get priceElement() {
        return this._priceElement;
    }

    get usableAreaLabel() {
        return this._usableAreaLabel;
    }

    get priceLabel() {
        return this._priceLabel;
    }

    set usableAreaLabel(value) {
        this._usableAreaLabel = value;
    }

    set priceLabel(value) {
        this._priceLabel = value;
    }

    
}
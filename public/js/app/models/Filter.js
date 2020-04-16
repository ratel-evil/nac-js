class Filter {
    constructor(minPrice,maxPrice) {
        const $ = document.querySelector.bind(document);
        this._priceElement = $("input[type='range'][id='price']");
        this._priceLabel = $("#priceLabel");
        this._usableAreaLabel = $("#usableAreaLabel");
        this._usableArea = $("input[type='range'][id='usableArea']").value;
        this._usableAreaElement = $("input[type='range'][id='usableArea']");
        this._price = this._priceElement.value ;
        this._address = $("input[type='search'][id='address']").value;
        this._maxValues = $("select[name='maxValues']").value;
        //this._pag = parseInt($('.pag .selected').textContent);
     
 
            
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
        this._utilArea = utilArea;
    }

    set maxValues(maxValues) {
        this._maxValues = maxValues;
    }
    setPriceMinMaxAttrs(min, max) {
        this._priceElement.setAttribute('max', max);
        this._priceElement.setAttribute('min', min);
    }
    setUsableAreaMinMaxAttrs(min, max) {
        this._usableAreaElement.setAttribute('max', max);
        this._usableAreaElement.setAttribute('min', min);
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
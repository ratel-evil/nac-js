class Filter {
    constructor(price, address, utilArea) {
        this._price = price;
        this._address = address;
        this._utilArea = utilArea;
        Object.freeze(this);
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
}
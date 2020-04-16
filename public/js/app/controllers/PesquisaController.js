class PesquisaController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._datalist = $('datalist');
        this._url = "http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed";
        this._data = [];
        this.popularData();
        this._filter = new Filter();
    }

    get api() {
        return this._api;
    }

    changePriceLabel(price) {
        const $ = document.querySelector.bind(document);
        $('#priceLabel').textContent = price;
    }

    popularData() {
        fetch(this.url).then(data => data.json()).then(data => {
            this._data = data;
            setPriceMinMaxAttrs(this.getMinPrice(data), this.getMaxPrice(data));
        })
    }
    handleLabels(event) {
        this._filter[`${event.target.id}Label`].textContent = event.target.value
    }


    filtrar(event) {
        this._filter[event.target.id] = event.target.value;
        event.target.type == "range" && this.handleLabels(event)

        let filteredApto = this._data.filter((e) => {
            return ((this._filter.address && e.address.formattedAddress.search(new RegExp(`/${this._filter.address.value}/g`))) //||
                //(this._filter.price && e.price <= this._filter.price) ||
                //(this._filter.usableArea && e.usableArea <= usableArea)
            )
        })

        let arrayOfAptos = [];

        for (let i = 0; i < this._filter.maxValues; i++) {
            arrayOfAptos[i] = filteredApto[i]
        }
        console.log(arrayOfAptos)
        return arrayOfAptos
    }

    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
    get url() {
        return this._url;
    }

    getMin(data, attr) {
        return Math.min(...data.map(apto => apto[attr]))
    }
    getMax(data, attr) {
        return Math.max(...data.map(apto => apto[attr]))
    }
    popularData() {
        fetch(this.url).then(data => data.json()).then(data => {
            this._data = data;
            this._filter.setPriceMinMaxAttrs(this.getMin(this.data, 'price'), this.getMax(this.data, 'price'))
            this._filter.setUsableAreaMinMaxAttrs(this.getMin(this.data, 'usableArea'), this.getMax(this.data, 'usableArea'));
        })
    }

}
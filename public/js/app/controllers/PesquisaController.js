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


    handleLabels(event) {
        this._filter[`${event.target.id}Label`].textContent = event.target.value
    }
    handleCheck(event) {
        this._filter[`${event.target.name}`] = event.target.checked
        this.filtrar(null)
    }

    filtrar(event) {
        if (event) {
            this._filter[event.target.id] = event.target.value;
            event.target.type == "range" && this.handleLabels(event)
        }

        let aptos = []
        if (this._filter.address !== "")
            aptos = this._data.filter((e) => e.address.formattedAddress.search(new RegExp(`/${this._filter.address}/g`)))
        else
            aptos = this._data;


        if (this._filter.applyPrice)
            aptos = aptos.filter(e => e.price <= this._filter.price)

        if (this._filter.applyUsableArea)
            aptos = aptos.filter(e => e.usableArea <= this._filter.usableArea)


        let maxApto = [];

        for (let i = 0; i < this._filter.maxValues; i++) {
            maxApto[i] = aptos[i]
        }
        console.table(maxApto)
        console.log(`filtros -> ${this._filter.address} + ${this._filter.price} + ${this._filter.usableArea}`)
        //this._generateCards(maxApto)
        return maxApto
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
        let filteredData = data.filter(e => e.publish);
        return Math.min(...filteredData.map(apto => apto[attr]))
    }
    getMax(data, attr) {
        let filteredData = data.filter(e => e.publish);
        return Math.max(...filteredData.map(apto => apto[attr]))
    }
    popularData() {
        fetch(this.url).then(data => data.json()).then(data => {
            this._data = data.sort((a, b) => Helper.desc(a, b, 'price')).filter(e => e.publish);
            let minPrice = this.getMin(this.data, 'price');
            let minUsableArea = this.getMin(this.data, 'usableArea');
            this._filter.price = minPrice;
            this._filter.usableArea = minUsableArea;
            this._filter.priceLabel.textContent = minPrice;
            this._filter.usableAreaLabel.textContent = minUsableArea;
            this._filter.setPriceMinMaxAttrs(minPrice, this.getMax(this.data, 'price'))
            this._filter.setUsableAreaMinMaxAttrs(minUsableArea, this.getMax(this.data, 'usableArea'));
        })
    }

}
class PesquisaController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._datalist = $('datalist');
        this._data = [];
        this._api = "http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed"
        this._filter = new Filter(
            $("input[type='search', id='price']"),
            $("input[type='search', id='address']"),
            $("input[type='search', id='usableArea']"))   
    }

    get api() {
        return this._api;
    }

    set data(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }

    pesquisar() {

        fetch(this.api)
            .then(data => data.json())
            .then(data => this.data = data)
            .then(_ => {
                this.filtrar()
            })
    }

    filtrar() {
        let filteredApto = this.data.filter((e) =>
            (this._filter.address  && e.address.formattedAddress.match(new RegExp(`/${this._filter.address}/g`)) ||
            (this._filter.price    && (e.price === this._filter.price)) ||
            (this._filter.utilArea && e.usableArea == this._filter.usableArea)));
      
        console.log(filteredApto)
    }

}
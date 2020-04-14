class PesquisaController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._api = "http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed"
        this._datalist = $('datalist');
        this._data = [];
        this.popularData();

        
        this._filter = new Filter(
            $("input[type='search'][id='price']"),
            $("input[type='search'][id='address']"),
            $("input[type='search'][id='usableArea']"),
            $("select[name='maxValues']"));
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
    popularData() {
        fetch(this.api).then(data => data.json()).then(data => { this.data = data;console.log(data) })
    }
    

    filtrar(event) {
        this._filter[event.target.id] = event.target.value;

        let filteredApto = this.data.filter((e) => {
            return (this._filter.address && e.address.formattedAddress.search(new RegExp(`/${this._filter.address.value}/g`)))
        })
        
        let arrayOfAptos = [];

        for (let i = 0; i < this._filter.maxValues; i++){
            arrayOfAptos[i] = filteredApto[i]
        }
        return arrayOfAptos
    }

}
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
    }

    filtrar(event) {
        this._filter[event.target.id] = event.target.value;

        event.target.type == "range" && this.handleLabels(event)

        let filteredApto = this._data.filter((e) => {
            let match = false;

            if (this._filter.address !== "" && e.address.formattedAddress.search(new RegExp(`/${this._filter.address}/g`)))
                match = true;

            if(this._filter.applyPrice) 
                match = match || this._filter.price >= e.price 
            
            if (this._filter.applyUsableArea) {
                debugger
                match = match || this._filter.usableArea === e.usableArea
            }
            

            return match && e.publish;
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
        let filteredData = data.filter(e => e.publish);
        return Math.min(...filteredData.map(apto => apto[attr]))
    }
    getMax(data, attr) {
        let filteredData = data.filter(e => e.publish);
        return Math.max(...filteredData.map(apto => apto[attr]))
    }
    popularData() {
        fetch(this.url).then(data => data.json()).then(data => {
            this._data = data.sort((a, b) => Helper.desc(a, b, 'price'));;
            let minPrice = this.getMin(this.data, 'price');
            let minUsableArea = this.getMin(this.data, 'usableArea');
            this._filter.priceLabel.textContent = minPrice;
            this._filter.usableAreaLabel.textContent = minUsableArea;
            this._filter.setPriceMinMaxAttrs(minPrice, this.getMax(this.data, 'price'))
            this._filter.setUsableAreaMinMaxAttrs(minUsableArea, this.getMax(this.data, 'usableArea'));
        })
    }

}
class FilterController {
    constructor() {
        this._url = "https://www.mocky.io/v2/5e8bbc982f00006d0088c4ed";
        this._data = [];
        this._filter = new Filter();
        this.popularData();
        this._cardController = new CardController();
    }

    get api() {
        return this._api;
    }


    handleLabels(event) {
        this._filter[`${event.target.id}Label`].textContent = event.target.value
    }

    filtrar(event) {
        if (event) {
            this._filter[event.target.id] = event.target.value;
            event.target.type == "range" && this.handleLabels(event)
        }

        let aptos = this._data;
        
        
        
        if (this._filter.price > 0)
            aptos = aptos.filter(e => e.price <= this._filter.price)
        
        if (this._filter.usableArea > 0)
            aptos = aptos.filter(e => e.usableArea <= this._filter.usableArea)
        
        
        if (this._filter.address)
            aptos = aptos.filter((e) => {
                
                if (e.address.formattedAddress.toUpperCase().search(new RegExp(`\W*(${this._filter.address.toUpperCase()})\W*`)) >= 0) {
                    return e;
                }
                else {
                    return null;
                }
            }); 

        aptos = aptos.filter(e => !(e === null));
        let maxApto = [];

        for (let i = 0; i < this._filter.maxValues; i++) {
            maxApto[i] = aptos[i]
        }
        //console.table(maxApto)
        //console.log(`filtros -> ${this._filter.address} + ${this._filter.price} + ${this._filter.usableArea}`)
        this._cardController.generateCards(maxApto)
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
    
    
    popularData() {
        fetch(this.url).then(data => data.json()).then(data => {
            let firstFilteredData = data.filter(e => e.publish);
            
            let filteredData = firstFilteredData.filter(e => !(e.address.formattedAddress.includes('Desconhecido')))

            this._data = filteredData.sort((a, b) => Helper.desc(a, b, 'price'));

            let minPrice = Helper.getMin(this.data, 'price');
            let minUsableArea = Helper.getMin(this.data, 'usableArea');

            this._filter.price = minPrice;
            this._filter.usableArea = minUsableArea;
            this._filter.priceLabel.textContent = minPrice;
            this._filter.usableAreaLabel.textContent = minUsableArea;
            
            this._filter.setElementMinMaxAttrs(minPrice, Helper.getMax(this.data, 'price'),'priceElement')
            this._filter.setElementMinMaxAttrs(minUsableArea, Helper.getMax(this.data, 'usableArea'), 'usableAreaElement');
        }).finally(() => {
            this.filtrar(null);
        })
    }

}
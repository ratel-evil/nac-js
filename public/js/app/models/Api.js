let api = null;
class Api {
    constructor() {
        this._url = "http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed";
        this._data = []
        this.popularData();
        
        if (!api) {
            api = this
        }   
        
        return api;
    }
    
    static get instance() {
        return this._instance
    }
    static set instance(instance) {
        this._instance = instance;
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
        fetch(this.url).then(data => data.json()).then(data => { this.data = data })
    }
    
}


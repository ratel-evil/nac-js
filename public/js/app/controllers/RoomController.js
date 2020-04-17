class RoomController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._url = "https://www.mocky.io/v2/5e8bbc982f00006d0088c4ed";
        this._data = [];
        this.getData();
        this._roomView = new RoomView($('body'))
    }

    get url() {
        return this._url;
    }
    get roomView() {
        return this._roomView;
    }

    getData() {
        let id = window.location.search.split("id=")[1];
        fetch(this.url)
            .then(response => response.json())
            .then(payload => {
                let room = payload.filter(room => room.id == id).pop();
                this.render(room)
            })
    }

    render(room) {
        //console.log(room)
        let model = new Room(
            room.id,
            room.price,
            room.bathrooms,
            room.bedrooms,
            room.usableArea,
            room.parkingSpaces,
            room.address,
            room.images
        );
        //console.log(model)
        this.roomView.update(model);
        $('.carousel').carousel()

        Helper.configurateMap(model.address.geolocation.lat, model.address.geolocation.lng,model.address.formattedAddress);
    }
}


// {
//     "id": "ab1a3fc0-80dc-4025-8192-b9ba39e67a39",
//     "address": {
//       "formattedAddress": "Rua Bandeira Paulista, 594 Itaim Bibi - SP",
//       "geolocation": {
//         "lat": -23.58313,
//         "lng": -46.67611
//       }
//     },
//     "images": [
//       "https://i.imgur.com/ad0cUuB.jpg",
//       "https://i.imgur.com/7gdtIyN.jpg",
//       "https://i.imgur.com/V6bBVyF.jpg",
//       "https://i.imgur.com/WQ3gkSo.jpg",
//       "https://i.imgur.com/XAGtg4a.jpg",
//       "https://i.imgur.com/JMcV63z.jpg"
//     ],
//     "price": 1000000,
//     "bathrooms": 2,
//     "bedrooms": 1,
//     "parkingSpaces": 2,
//     "usableArea": 70,
//     "publish": true
//   },


class Room {
    constructor(id, price, bathrooms, bedrooms,
        usableArea, parkingSpaces, address, images){
        this._id = id;
        this._price = price;
        this._bathrooms = bathrooms; 
        this._bedrooms = bedrooms;
        this._parkingSpaces = parkingSpaces;
        this._usableArea = usableArea;
        this._address = address;
        this._images = images; 
              
    }

    get id(){
        return this._id; 
    } 

    set id(newId){
        this._id = id; 
    }

    get price(){
        return this._price; 
    } 

    set price(newPrice){
        this._price = newPrice; 
    } 

    get bathrooms(){
        return this._bathrooms; 
    } 

    set bathrooms(newBathrooms){
            this._bathrooms = newBathrooms ; 
    } 

    get parkingSpaces(){
        return this._parkingSpaces; 
    }

    set parkingSpaces(newParkinSpaces){
        this._parkingSpaces = newParkinSpaces 
    }

    get usableArea(){
        return this._usableArea; 
    }

    set usableArea(newUsableArea){
        this._usableArea =  newUsableArea;
    }

    get address(){
        return this._address; 
    }
     
    set address(newAddress){
        this._address = newAddress;
    }

    get images(){
        return this._images; 
    } 

    set images(newImages){
        this._images = newImages;
    } 

    get bedrooms() {
        return this._bedrooms;
    }
}
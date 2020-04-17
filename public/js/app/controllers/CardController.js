class CardController {
    constructor(){
        let $ = document.querySelector.bind(document);

        this._cardView = new CardView($('#cardContainer'));
    }

    get cardContainer(){
        return this._cardContainer;
    }

    generateCards(aptos) {
        
        let model = aptos.map(apto => {
            if (apto) {
                return new Card(
                    apto.id,
                    apto.images,
                    apto.address.formattedAddress,
                    apto.price,
                    apto.bedrooms,
                    apto.bathrooms,
                    apto.usableArea,
                    apto.parkingSpaces)
            }else{
                return null
            }
        })
        model = model.filter(apto => apto != null);
        this._cardView.update(model);
    }
}
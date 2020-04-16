class CardController {
    constructor(){
        let $ = document.querySelector.bind(document);

        this._cardView = new CardView($('#cardContainer'));
        
    }
}
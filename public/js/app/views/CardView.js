class CardView extends View{
    constructor(elemento) {
        super(elemento);
    }    

    _template(models){
        return models.map(model => {return (` 
        <div  class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img id="imageCard" src="${model.images[0]}" class="card-img" alt="..."></img>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h6 id="titleAdress" class="card-title">${model.address}</h6>
                    <ul class="list-group">
                        <li id="liPrice"             class="list-group-item">${model.price}</li>
                        <li id="liBedrooms"          class="list-group-item">${model.bedrooms}</li>
                        <li id="liParkingSpaces"     class="list-group-item">${model.parkingSpaces}</li>
                        <li id="liUsableArea"        class="list-group-item">${model.usableArea} m²</li>
                        <li id="liBathrooms"         class="list-group-item">${model.bathrooms}</li>
                    </ul>
                    <a id="btnCard" class="btn btn-primary" href="./description.html?id=${model.id}" role="button">Saiba mais...</a>
                    </div>
                </div>
                </div>
            </div>
        `)
        }
        ).join('')
    }
    };

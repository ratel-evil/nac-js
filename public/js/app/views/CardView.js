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
                        <li class="list-group-item">R$: ${model.price}</li>
                        <li class="list-group-item">quartos: ${model.bedrooms}</li>
                        <li class="list-group-item">vagas de garagem: ${model.parkingSpaces}</li>
                        <li class="list-group-item">área útil: ${model.usableArea} m²</li>
                        <li class="list-group-item">banheiro: ${model.bathrooms}</li>
                    </ul>
                    <a id="btnCard" class="btn btn-primary btn-lg btn-block" href="./description.html?id=${model.id}" role="button">Saiba mais...</a>

                    </div>
                </div>
                </div>
            </div>
           
        `)
        }
        ).join('')
    }
    };

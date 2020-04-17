class CardView extends View{
    constructor(elemento) {
        super(elemento);
    }    

    _template(models){
        return models.map((model,key) => {return (` 
        <div  class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4">
                <div id="carousel${key}" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    ${model.images.map((src,index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}" data-interval="3000">
                        <img src="${src}" class="d-block w-100" alt="...">
                    </div>
                    `).join('')}
                </div>
                <a class="carousel-control-prev" href="#carousel${key}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel${key}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
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

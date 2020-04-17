class RoomView extends View {
    constructor(el) {
        super(el)
    }

    _template(model) {
        let { price, bedrooms, bathrooms, usableArea, parkingSpaces, images } = model;
        let { formatedAddress } = model.address;
        return `
        <div class="description">
        <div class="side">
            
            <div class="images">


                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        ${images.map(src => `
                        <div class="carousel-item active" data-interval="3000">
                            <img src="${src}" class="d-block w-100" alt="...">
                        </div>
                        `).join('')}
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>

            <div class="legend">
                <ul class="list-group">
                <li class="list-group-item">
                        R$: ${formatedAddress}
                </li>    
                <li class="list-group-item">
                        R$: ${price}
                    </li>
                    <li class="list-group-item">
                        Banheiros: ${bathrooms}
                    </li>
                    <li class="list-group-item">
                        Quartos: ${bedrooms} 
                    </li>
                    <li class="list-group-item">
                        Vagas: ${parkingSpaces}
                    </li>
                    <li class="list-group-item">
                        M²: ${usableArea}
                    </li>
                </ul>
            </div>
        </div>


        <div class="mapa">
            <div id='map'></div>
        </div>

    </div>
        
        
        `


    }

}
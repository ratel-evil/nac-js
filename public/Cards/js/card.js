const selector = selector =>  document.querySelector(selector);
const create   = element  =>  document.createElement(element);

const card = selector('#card');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://www.mocky.io/v2/5e8bbc982f00006d0088c4ed', true);

xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
xhr.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');


xhr.addEventListener('load', function(){
    const resposta = xhr.responseText;
    const imoveis = JSON.parse(resposta);

    imoveis.forEach(function (imovel){
        const divCard = create('div');
        divCard.className = 'card mb-3';

        const divRow = create('div');
        divRow.className = 'row no-gutters'

        const divCol4 = create('div');
        divCol4.className = 'col-md-4';
        

        const cardImg = create('img');
        cardImg.className = 'card-img';
        cardImg.src = imovel.images[0];
       
       divCol4.appendChild(cardImg);
       divRow.appendChild(divCol4);
       
       const divCol8 = create('div');
       divCol8.className = 'col-md-8';

       const cardBody = create('div');
       cardBody.className = 'card-body';

       const h5cardTitle = create('h5');
       h5cardTitle.className = 'card-title';
       h5cardTitle.textContent = imovel.address.formattedAddress;       

       const cardText = create('p');
       cardText.className = 'card-text';
       
       cardText.textContent = [
                                  'WC: '                  + imovel.bathrooms         
                                + ' Quartos: '            + imovel.bedrooms          
                                + ' Vagas de Garagem:  '  + imovel.parkingSpaces     
                                + ' Área útil: '          + imovel.usableArea        
                                + ' R$: '                 + imovel.price.toFixed(2) 
                              ];
       
       
       cardBody.appendChild(h5cardTitle);
       cardBody.appendChild(cardText);
       divCol8.appendChild(cardBody);
       divRow.appendChild(divCol8);
       divCard.appendChild(divRow);
       card.appendChild(divCard);

    });
    
});

xhr.send();

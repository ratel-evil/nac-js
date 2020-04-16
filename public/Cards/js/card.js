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

       const h6cardTitle = create('h6');
       h6cardTitle.className = 'card-title';
       h6cardTitle.textContent = imovel.address.formattedAddress;    
       
       const ulCard = create('ul');
       ulCard.className = 'list-group';

       const liCard = create('li');
       liCard.className = 'list-group-item';

       if(imovel.publish == false && !imovel.adress){
        divCard.style.display = 'none';
      }

        if(imovel.price){
          ulCard.appendChild(createNewEl('li', `R$: ${imovel.price.toLocaleString('pt-BR')}`,'list-group-item'));
        }

        if(imovel.bathrooms){
          ulCard.appendChild(createNewEl('li', `banheiros: ${imovel.bedrooms}`, 'list-group-item'));
        }
       
        if(imovel.parkingSpaces){
          ulCard.appendChild(createNewEl('li', `Vaga de garagem: ${imovel.parkingSpaces}`, 'list-group-item'));
        }

        if(imovel.usableArea){
          ulCard.appendChild(createNewEl('li', `Área útil: ${imovel.usableArea} m²`, 'list-group-item'));
        }

        const linkCard = create('a');
        linkCard.className = 'btn btn-primary btn-lg active';
        linkCard.setAttribute('href', `./descricao.html?id=${imovel.id}`);
        linkCard.setAttribute('role', 'button');
        linkCard.textContent = 'Saiba Mais...';
        
              
        console.log(imovel);
      
       cardBody.appendChild(h6cardTitle);
       divCol8.appendChild(cardBody);
       divRow.appendChild(divCol8);
       cardBody.appendChild(ulCard); 
       divCard.appendChild(divRow);
       cardBody.appendChild(linkCard);
       card.appendChild(divCard);

    });
    
});

xhr.send();

function createNewEl(el,textcontent,classname){
  var el = document.createElement(el);
  el.classList.add(classname)
  el.textContent = textcontent
  return el;
}



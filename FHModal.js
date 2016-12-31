var body = document.body;
var modalContainer;
var optionsContainer;

var FHModal = function(props) {
  function create(props) {
    buildHTML(props)
  }

  return create(props)
}

function buildHTML(props) {
  var button = document.createElement('button');
  button.classList.add('FH-reservation-button');
  button.style.position = 'fixed';
  button.style.width = '130px';
  button.style.height = '30px';
  button.style.right = '20px';
  button.style.bottom = '20px';
  button.style.border = 'none';
  button.style.boxShadow = '0 1px 6px rgba(0,0,0,.06), 0 2px 32px rgba(0,0,0,.16)';

  button.textContent = props.text.mainActionButton;
  body.appendChild(button);

  modalContainer = document.createElement('div');
  modalContainer.style.position = 'fixed';
  modalContainer.style.display = 'none';
  modalContainer.style.bottom = '80px';
  modalContainer.style.right = '20px';
  modalContainer.style.height = '550px';
  modalContainer.style.width = '350px';
  modalContainer.style.boxSizing = 'border-box';
  modalContainer.style.backgroundColor = props.colors.headerColor || '#2EA1D9';
  modalContainer.style.textAlign = props.text.globalTextAlign || 'center';
  modalContainer.style.color = props.colors.headerTextColor || 'white';
  modalContainer.style.borderRadius = '10px 10px 10px 10px';
  modalContainer.style.boxShadow = '0 3px 5px rgba(0,0,0,.2)';


  var reservationTitle = document.createElement('div');
  reservationTitle.style.height = '15%';
  reservationTitle.textContent = props.text.headerText;

  modalContainer.appendChild(reservationTitle);
  body.appendChild(modalContainer);


  optionsContainer = document.createElement('section');
  optionsContainer.style.height = '85%';
  optionsContainer.style.backgroundColor = 'white';

  modalContainer.appendChild(optionsContainer);
  addOptions(props)
}

function addOptions(props) { //remove breaks after returning from case statements
  switch (props.modalType.toLowerCase()) {
    case 'simple':
      var cards = props.cards.cardDetail.filter(function(card) {
        return card.doesItExist === true
      });

      for(var i = 0; i < cards.length; i++) {
        var card = addCardToContainer(props, cards, i);

        card.appendChild(addTextToCard(cards, i));
        optionsContainer.appendChild(card);
      }

      break;
    case 'showactivities':
      console.log('in showactivities case statement');
      break;
    default:
      console.log('Incorrect modalType specified in FHModal.js');
  }
}

function addCardToContainer(props, cards, i) {
  var cardHeight = Math.floor(100 / cards.length);

  var card = document.createElement('div');

  card.style.height = '' + cardHeight + '%';
  if(i < cards.length - 1) {
    card.style.borderBottom = props.colors.headerColor ?
                                '' + '1px solid ' + props.colors.headerColor :
                                '1px solid #2EA1D9';
  }
  return card
}

function addTextToCard(cards, index) {
  var text = cards[index].linkTo ?
              document.createElement('a') :
              document.createElement('p');

  text.textContent = cards[index].text;
  text.style.color = 'red';
  text.href = cards[index].linkTo;

  return text
}

document.addEventListener('click', function(e) {
  if(e.target.className === 'FH-reservation-button') {
    if (modalContainer.style.display === 'none') {
      return modalContainer.style.display = 'block'
    }

    if (modalContainer.style.display === 'block') {
      return modalContainer.style.display = 'none'
    }
  }
})

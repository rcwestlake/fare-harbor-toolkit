var body = document.body;
var modalContainer;
var optionsContainer;

var FHModal = function(props) {
  function create(props) {
    buildModalHTML(props)
  }

  return create(props)
}

function buildModalHTML(props) {
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
  modalContainer.style.backgroundColor = '#ffffff';
  modalContainer.style.textAlign = props.text.globalTextAlign || 'center';
  modalContainer.style.color = props.colors.headerTextColor || 'white';
  modalContainer.style.fontFamily = props.text.fontPrimary || 'Tahoma, Geneva, sans-serif';
  modalContainer.style.borderRadius = '10px 10px 10px 10px';
  modalContainer.style.boxShadow = '0 3px 5px rgba(0,0,0,.2)';

  var reservationTitleContainer = document.createElement('div');
  var reservationTitle = document.createElement('p');
  var extraTitleText = document.createElement('a');

  reservationTitleContainer.style.height = '15%';
  reservationTitleContainer.style.boxSizing = 'border-box';
  reservationTitleContainer.style.paddingTop = '0px';
  reservationTitleContainer.style.backgroundColor = props.colors.headerColor || '#2EA1D9';
  reservationTitleContainer.style.borderRadius = '10px 10px 0px 0px';

  reservationTitle.textContent = props.text.headerText;
  reservationTitle.style.fontSize = props.text.headerTextSize || '30px';
  reservationTitle.style.fontSize = props.text.headerTextSize || '30px';
  reservationTitle.style.marginTop = '0px';
  reservationTitle.style.paddingTop = '3%';
  reservationTitle.style.marginBottom = props.marginsAndPadding.headerTextMarginBottom || '0px';
  reservationTitle.style.verticalAlign = 'middle';

  extraTitleText.textContent = props.text.headerExtraText;
  extraTitleText.style.fontSize = '10px';
  extraTitleText.style.margin = '0px';
  extraTitleText.href = 'http://www.fareharbor.com';
  extraTitleText.target = '_blank';

  reservationTitleContainer.appendChild(reservationTitle)
  reservationTitleContainer.appendChild(extraTitleText)
  modalContainer.appendChild(reservationTitleContainer);
  body.appendChild(modalContainer);


  optionsContainer = document.createElement('section');
  optionsContainer.style.height = '85%';
  optionsContainer.style.backgroundColor = 'white';

  modalContainer.appendChild(optionsContainer);
  addCards(props)
}

function addCards(props) { //remove breaks after returning from case statements
  switch (props.modalType.toLowerCase()) {
    case 'simple':
      var cards = props.cards.cardDetail.filter(function(card) {
        return card.doesItExist === true
      });

      for(var i = 0; i < cards.length; i++) {
        var card = addCardToContainer(props, cards, i);
        var text = addTextToCard(cards, i);

        card.appendChild(text[0]);
        text[1] ? card.appendChild(text[1]) : null
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
  var extraText;
  var text = cards[index].linkTo ?
              document.createElement('a') :
              document.createElement('p');

  if(cards[index].extraText) {
    extraText = document.createElement('p')
    extraText.textContent = cards[index].extraText;
    extraText.style.color = 'red';
  }

  text.textContent = cards[index].text;
  text.style.color = 'red';
  text.href = cards[index].linkTo;

  return [text, extraText]
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

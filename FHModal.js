var body = document.body;
var button;
var modalContainer;
var cardsContainer;
var reservationTitleContainer;
var reservationTitle;
var extraTitleText;
var textContainer;
var iconContainer;

var FHModal = function(props) {
  function create(props) {
    buildModalHTML(props)
  }
  return create(props)
}

function buildModalHTML(props) {
  buildFHButton(props);
  body.appendChild(button);

  buildModalContainer(props);
  buildHeaderContainer(props);
  buildHeaderTitle(props);
  buildExtraText(props);
  buildCardsContainer(props);

  reservationTitleContainer.appendChild(reservationTitle);
  extraTitleText ? reservationTitleContainer.appendChild(extraTitleText) : null;
  modalContainer.appendChild(reservationTitleContainer);
  body.appendChild(modalContainer);
  modalContainer.appendChild(cardsContainer);

  addCards(props);
}

function buildFHButton(props) {
  button = document.createElement('button');
  button.classList.add('FH-reservation-button');
  button.textContent = props.text.mainActionButton;
  button.style.position = 'fixed';
  button.style.width = '130px';
  button.style.height = '30px';
  button.style.right = '20px';
  button.style.bottom = '20px';
  button.style.border = 'none';
  button.style.boxShadow = '0 1px 6px rgba(0,0,0,.06), 0 2px 32px rgba(0,0,0,.16)';
  button.style.cursor = 'pointer';

  return button;
}

function buildModalContainer(props) {
  modalContainer = document.createElement('div');
  modalContainer.style.color = props.colors.headerTextColor || 'white';
  modalContainer.style.backgroundColor = '#ffffff';
  modalContainer.style.borderRadius = '10px 10px 10px 10px';
  modalContainer.style.boxShadow = '0 3px 5px rgba(0,0,0,.2)';
  modalContainer.style.boxSizing = 'border-box';
  modalContainer.style.display = 'none';
  modalContainer.style.fontFamily = props.text.fontPrimary || 'Tahoma, Geneva, sans-serif';
  modalContainer.style.position = 'fixed';
  modalContainer.style.bottom = '80px';
  modalContainer.style.right = '20px';
  modalContainer.style.height = '550px';
  modalContainer.style.width = '350px';
  modalContainer.style.textAlign = props.text.globalTextAlign || 'center';

  return modalContainer;
}

function buildHeaderContainer(props) {
  reservationTitleContainer = document.createElement('div');
  reservationTitleContainer.style.height = '15%';
  reservationTitleContainer.style.boxSizing = 'border-box';
  reservationTitleContainer.style.paddingTop = '0px';
  reservationTitleContainer.style.backgroundColor = props.colors.headerColor || '#2EA1D9';
  reservationTitleContainer.style.borderRadius = '10px 10px 0px 0px';

  return reservationTitleContainer;
}

function buildHeaderTitle(props) {
  reservationTitle = document.createElement('p');
  reservationTitle.textContent = props.text.headerText;
  reservationTitle.style.fontSize = props.text.headerTextSize || '30px';
  reservationTitle.style.fontSize = props.text.headerTextSize || '30px';
  reservationTitle.style.marginTop = '0px';
  reservationTitle.style.paddingTop = '3%';
  reservationTitle.style.marginBottom = props.marginsAndPadding.headerTextMarginBottom || '0px';
  reservationTitle.style.verticalAlign = 'middle';

  return reservationTitle;
}

function buildExtraText(props) {
  if(props.text.headerExtraTextLink) {
    extraTitleText = document.createElement('a');
    extraTitleText.textContent = props.text.headerExtraText;
    extraTitleText.style.fontSize = '10px';
    extraTitleText.style.margin = '0px';
    extraTitleText.href = props.text.headerExtraTextLink;
    extraTitleText.target = '_blank';

    return extraTitleText;
  } else if(props.text.headerExtraText) {
    extraTitleText = document.createElement('p');
    extraTitleText.textContent = props.text.headerExtraText;
    extraTitleText.style.fontSize = '10px';
    extraTitleText.style.margin = '0px';

    return extraTitleText
  }
}

function buildCardsContainer(props) {
  cardsContainer = document.createElement('section');
  cardsContainer.style.height = '85%';
  cardsContainer.style.backgroundColor = 'white';

  return cardsContainer;
}

function addCards(props) {
  switch (props.modalType.toLowerCase()) {
    case 'simple':
      var cards = props.cards.cardDetail.filter(function(card) {
        return card.doesItExist === true
      });

      for(var i = 0; i < cards.length; i++) {
        var card = addCardToContainer(props, cards, i);
        addTextToCard(props, cards, i);
        addIcons(props, cards, i);

        card.appendChild(textContainer);
        cards[i].icon ? card.appendChild(iconContainer): null;
        cardsContainer.appendChild(card);
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
  card.style.display = 'block';

  if(i < cards.length - 1) {
    card.style.borderBottom = props.colors.headerColor ?
                                '' + '1px solid ' + props.colors.headerColor :
                                '1px solid #2EA1D9';
  }
  return card
}

function addTextToCard(props, cards, index) {
  var extraText;
  textContainer = document.createElement('div');
  var text = cards[index].linkTo ?
              document.createElement('a') :
              document.createElement('p');

  textContainer.style.display = 'inline-block';
  textContainer.style.minHeight = '100%';
  textContainer.style.minWidth = cards[index].icon ? '75%' : '100%';
  textContainer.style.textAlign = 'right';

  text.textContent = cards[index].text;
  text.style.display = 'inline-block';
  text.style.fontSize = props.cardFontsAndColors.mainTextSize || '20px';
  text.style.color = props.cardFontsAndColors.mainTextColor || 'blue';
  text.style.paddingTop = '15%';
  text.style.paddingRight = '10%';
  text.style.margin = '0px';
  text.href = cards[index].linkTo;
  textContainer.appendChild(text);

  if(cards[index].extraText) {
    extraText = document.createElement('p');
    extraText.textContent = cards[index].extraText;
    extraText.style.color = props.cardFontsAndColors.extraTextColor || 'red';
    extraText.style.paddingTop = '5px';
    extraText.style.paddingRight = '10%';
    extraText.style.margin = '0px';
    textContainer.appendChild(extraText);
  }

  return textContainer
}

function addIcons(props, card, index) {
  var icon;

  if(card[index].icon) {
    iconContainer = document.createElement('div');
    icon = document.createElement('img');
    iconContainer.style.display = 'inline';
    iconContainer.style.float = 'left';
    iconContainer.style.paddingTop = '10%';
    iconContainer.style.paddingLeft = '3%';
    iconContainer.style.width = '20%';
    icon.src = card[index].icon;
    icon.style.height = 'auto';
    icon.style.width = 'auto';
    iconContainer.appendChild(icon);
  }

  return iconContainer
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

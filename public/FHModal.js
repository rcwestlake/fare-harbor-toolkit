var body = document.body;
var button;
var textContainer;
var alignContainer;
var iconContainer;
var bookButtonText;
var imgContainer;

var FHModal = function(props) {
  function create(props) {
    buildModalHTML(props)
  }
  return create(props)
}

function buildModalHTML(props) {
  buildFHButton(props);
  body.appendChild(button);

  var modalContainer = buildModalContainer(props);
  var headerAlignContainer = buildHeaderContainer(props);
  var headerTitle = buildHeaderTitle(props);
  var cardsContainer = buildCardsContainer(props);

  headerContainer.appendChild(headerTitle);
  modalContainer.appendChild(headerAlignContainer);
  body.appendChild(modalContainer);
  modalContainer.appendChild(cardsContainer);

  addCards(props);
}

function buildFHButton(props) {
  button = document.createElement('button');
  button.classList.add('FH-reservation-button');
  button.textContent = props.text.bookButtonText;
  button.style.backgroundColor = props.colors.bookButtonColor || '#dd5347';
  button.style.bottom = '20px';
  button.style.border = 'none';
  button.style.boxShadow = '0 1px 6px rgba(0,0,0,.06), 0 2px 32px rgba(0,0,0,.16)';
  button.style.cursor = 'pointer';
  button.style.color = props.colors.bookButtonTextColor || '#ffffff';
  button.style.fontSize = props.colors.bookButtonTextSize || '15px';
  button.style.position = 'fixed';
  button.style.right = '20px';
  button.style.height = '60px';
  button.style.width = '170px';
  button.style.zIndex = '3561031316';
  bookButtonText = props.text.bookButtonText;

  if(window.innerWidth < '500') {
    button.style.fontSize = '12px';
    button.style.height = '40px';
    button.style.width = '130px';
  }

  return button;
}

function buildModalContainer(props) {
  modalContainer = document.createElement('div');
  modalContainer.classList.add('FH-reservation-modal');
  modalContainer.style.color = props.colors.headerTextColor || 'white';
  modalContainer.style.backgroundColor = '#ffffff';
  modalContainer.style.borderRadius = '10px 10px 10px 10px';
  modalContainer.style.boxShadow = '0 3px 5px rgba(0,0,0,.2)';
  modalContainer.style.boxSizing = 'border-box';
  modalContainer.style.display = 'none';
  modalContainer.style.fontFamily = props.text.fontPrimary || 'Tahoma, Geneva, sans-serif';
  modalContainer.style.position = 'fixed';
  modalContainer.style.bottom = '100px';
  modalContainer.style.right = '20px';

  if(window.innerWidth < '550') {
    modalContainer.style.borderRadius = '0px';
    modalContainer.style.top = '0px';
    modalContainer.style.left = '0px';
    modalContainer.style.height = '100%';
    modalContainer.style.width = '100%';
  } else {
    modalContainer.style.height = '550px';
    modalContainer.style.width = '350px';
  }

  modalContainer.style.textAlign = props.text.globalTextAlign || 'center';
  modalContainer.style.zIndex = '35610311';

  return modalContainer;
}

function buildHeaderContainer(props) {
  headerContainer = document.createElement('section');
  headerContainer.style.height = '15%';
  headerContainer.style.boxSizing = 'border-box';
  headerContainer.style.paddingTop = '0px';
  headerContainer.style.backgroundColor = props.colors.headerColor || '#dd5347';
  headerContainer.style.borderRadius = '10px 10px 0px 0px';

  if(window.innerWidth < '500') {
    headerContainer.style.borderRadius = '0px';
  }

  return headerContainer;
}

function buildHeaderTitle(props) {
  var headerAlignContainer = document.createElement('div');
  headerTitle = document.createElement('p');

  headerAlignContainer.style.position = 'relative';
  headerAlignContainer.style.top = '50%';
  headerAlignContainer.style.transform = 'translateY(-50%)';

  headerTitle.textContent = props.text.headerText;
  headerTitle.style.fontSize = props.text.headerTextSize || '30px';
  headerTitle.style.fontSize = props.text.headerTextSize || '30px';
  headerTitle.style.marginTop = '0px';
  headerTitle.style.marginBottom = props.marginsAndPadding.headerTextMarginBottom || '0px';

  headerAlignContainer.appendChild(headerTitle);
  var extraTitleText = buildExtraText(props);
  extraTitleText ? headerAlignContainer.appendChild(extraTitleText) : null;

  return headerAlignContainer;
}

function buildExtraText(props) {
  if(props.text.headerExtraTextLink) {
    extraTitleText = document.createElement('a');
    extraTitleText.textContent = props.text.headerExtraText;
    extraTitleText.style.color = props.colors.headerExtraTextColor || '#ffffff';
    extraTitleText.style.fontSize = '10px';
    extraTitleText.style.margin = '0px';
    extraTitleText.href = props.text.headerExtraTextLink;
    extraTitleText.target = '_blank';
    extraTitleText.style.textDecoration = 'none';

    return extraTitleText;
  } else if(props.text.headerExtraText) {
    extraTitleText = document.createElement('p');
    extraTitleText.textContent = props.text.headerExtraText;
    extraTitleText.style.color = props.colors.headerExtraTextColor || '#ffffff';
    extraTitleText.style.textDecoration = 'none';
    extraTitleText.style.fontSize = '10px';
    extraTitleText.style.margin = '0px';

    return extraTitleText
  }
}

function buildCardsContainer(props) {
  cardsContainer = document.createElement('section');
  cardsContainer.style.boxSizing = 'border-box';
  cardsContainer.style.height = '85%';
  cardsContainer.style.backgroundColor = 'white';

  return cardsContainer;
}

function buildTextContainers(props, cards, index) {
  textContainer = document.createElement('div');
  alignContainer = document.createElement('div');

  textContainer.style.boxSizing = 'border-box';
  textContainer.style.display = 'inline-block';
  textContainer.style.float = 'right';
  textContainer.style.minHeight = '100%';
  textContainer.style.maxWidth = cards[index].icon ? '75%' : '100%';
  textContainer.style.height = '100%';
  textContainer.style.width = cards[index].icon ? '75%' : '100%';
  textContainer.style.textAlign = cards[index].icon ? 'left' : 'center';
  textContainer.style.position = 'relative';

  alignContainer.style.boxSizing = 'border-box';
  alignContainer.style.display = 'block';
  alignContainer.style.height = 'auto';
  alignContainer.style.width = '100%';
  alignContainer.style.position = 'relative';
  alignContainer.style.top = '50%';
  alignContainer.style.transform = 'translateY(-50%)';

  if(props.modalType.toLowerCase() === 'showitems') {
    alignContainer.style.position = 'absolute';
    alignContainer.style.top = '50%';
  }

  textContainer.appendChild(alignContainer)
}

function addCards(props) {
  var cards = props.cards.cardDetail.filter(function(card) {
    return card.doesItExist === true
  });

  switch (props.modalType.toLowerCase()) {
    case 'simple':
      for(var i = 0; i < cards.length; i++) {
        var card = addCardToContainer(props, cards, i);
        addTextToCard(props, cards, i);
        addIcons(props, cards, i);

        card.appendChild(textContainer);
        cards[i].icon ? card.appendChild(iconContainer): null;
        cardsContainer.appendChild(card);
      }

      break;
    case 'showitems':
      console.log('in show items');
      var selectedItems = props.selectedItems;
      var numOfCards = cards.length;

      filterAPIBySelectedItems(props, selectedItems, numOfCards);
      break;
    default:
      console.log('Incorrect modalType specified in FHModal.js');
  }
}

function filterAPIBySelectedItems(props, selectedItems, numOfCards) {
  var filteredItems = [];
  var url = 'http://localhost:8080/api';

  var hitAPI = new XMLHttpRequest();
  hitAPI.open("GET", url, true);
  hitAPI.onload = function(e) {
    if (hitAPI.readyState === 4) {
      if (hitAPI.status === 200) {
        var data = JSON.parse(hitAPI.responseText);
        var items = data.items

        if(selectedItems.length > 0) {
          var filtered = items.filter(function(item) {
            if(selectedItems.indexOf(item.pk) > -1) {
              filteredItems.push(item);
            }
          })
        } else {
          filteredItems = items.slice(0, numOfCards);
        }
        console.log(filteredItems);
        for(var i = 0; i < filteredItems.length; i++) {
          var item = addCardToContainer(props, filteredItems, i);
          addItemToCard(props, filteredItems, i);
          addTextToCard(props, filteredItems, i);

          cardsContainer.appendChild(item);
          item.appendChild(imgContainer);
          imgContainer.appendChild(alignContainer);
        }
      } else {
        console.error(hitAPI.statusText);
      }
    }
  }

  hitAPI.onerror = function(e) {
    console.error(hitAPI.statusText);
  }
  hitAPI.send(null);
}

function addItemToCard(props, items, index) {
  imgContainer = document.createElement('div');
  var anchorContainer = document.createElement('a');
  var img = document.createElement('p');

  anchorContainer.style.height = '100%';
  anchorContainer.style.width = '100%';

  imgContainer.style.boxSizing = 'border-box';
  imgContainer.style.display = 'block';
  imgContainer.style.height = '100%';
  imgContainer.style.width = '100%';

  img.style.backgroundImage = 'url(' + items[index].image_cdn_url + ')';
  img.style.backgroundRepeat = 'no-repeat';
  img.style.backgroundPosition = '50% 50%';
  img.style.backgroundSize = 'cover';
  img.style.margin = '0px';
  img.style.overflow = 'hidden';
  img.style.minHeight = '100%';
  imgContainer.style.position = 'relative';
  anchorContainer.appendChild(img);
  imgContainer.appendChild(anchorContainer);
}

function addCardToContainer(props, cards, index) {
  var cardHeight = Math.floor(100 / cards.length);

  var cardContainer = cards[index].linkTo ? document.createElement('a') : document.createElement('div') ;

  cardContainer.href = cards[index].linkTo;
  cardContainer.style.boxSizing = 'border-box';
  cardContainer.style.display = 'block';
  cardContainer.style.height = '' + cardHeight + '%';

  if(props.modalType.toLowerCase() === 'simple') {
    if(index < cards.length - 1) {
      cardContainer.style.borderBottom = props.colors.headerColor ?
      '' + '1px solid ' + props.colors.headerColor :
      '1px solid #dd5347';
    }
  }

  return cardContainer
}

function addTextToCard(props, cards, index) {
  var extraText;
  var text = cards[index].linkTo ?
              document.createElement('a') :
              document.createElement('p');

  buildTextContainers(props, cards, index)

  switch (props.modalType.toLowerCase()) {
    case 'simple':
      text.textContent = cards[index].text;
      text.href = cards[index].linkTo;
      text.style.display = 'inline-block';
      text.style.fontSize = props.cardFontsAndColors.mainTextSize || '20px';

      if(cards[index].textType.toLowerCase() === 'quote') {
        text.style.fontStyle = 'italic';
        text.style.fontSize = props.cardFontsAndColors.mainTextSize || '18px';
      }

      text.style.color = props.cardFontsAndColors.mainTextColor || '#333C4A';
      text.style.textDecoration = 'none';
      text.style.margin = '0px';
      text.style.marginLeft = cards[index].icon ? '10%': '3%';
      text.style.marginRight = '3%';


      alignContainer.appendChild(text);

      if(cards[index].extraText) {
        extraText = document.createElement('p');
        extraText.textContent = cards[index].extraText;
        extraText.style.color = props.cardFontsAndColors.extraTextColor || '#dd5347';
        extraText.style.margin = '0px';
        extraText.style.marginLeft = cards[index].icon ? '10%': '3%';
        alignContainer.appendChild(extraText);
      }
      break;
    case 'showitems':
      text.textContent = cards[index].name
      text.style.color = '#333C4A';
      text.style.display = 'inline-block';
      text.style.fontSize = props.cardFontsAndColors.mainTextSize || '20px';
      alignContainer.appendChild(text);
      break;
    default:
      console.log('Error with modalType case');
  }
}

function addIcons(props, card, index) {
  var icon;

  if(card[index].icon) {
    iconContainer = document.createElement('div');
    icon = document.createElement('img');
    iconContainer.style.boxSizing = 'border-box';
    iconContainer.style.float = 'left';
    iconContainer.style.paddingLeft = '3%';
    iconContainer.style.position = 'relative';
    iconContainer.style.top = '50%';
    iconContainer.style.transform = 'translateY(-50%)';
    iconContainer.style.maxWidth = '25%';
    iconContainer.style.width = '25%';
    icon.src = card[index].icon;
    icon.style.height = 'auto';
    icon.style.width = 'auto';
    iconContainer.appendChild(icon);
  }
}

document.addEventListener('click', function(e) {
  if(e.target.className === 'FH-reservation-button') {
    if (modalContainer.style.display === 'none') {
      button.textContent = 'X'
      return modalContainer.style.display = 'block'
    }

    if (modalContainer.style.display === 'block') {
      button.textContent = bookButtonText;
      return modalContainer.style.display = 'none'
    }
  }
})

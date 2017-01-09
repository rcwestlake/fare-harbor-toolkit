var FHModal = (function(props) {
  var body = document.body;
  var styles = FHModalStyles;
  var button;
  var textContainer;
  var alignContainer;
  var iconContainer;
  var bookButtonText;
  var imgContainer;

  function create(props) {
    buildModalHTML(props)
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
    bookButtonText = props.text.bookButtonText;

    styles.buildButtonStyles(button, props);
  }

  function buildModalContainer(props) {
    modalContainer = document.createElement('div');
    modalContainer.classList.add('FH-reservation-modal');
    styles.buildModalContainerStyles(modalContainer, props);

    return modalContainer;
  }

  function buildHeaderContainer(props) {
    headerContainer = document.createElement('section');
    headerContainer.classList.add('FH-modal-header');
    styles.buildHeaderContainerStyles(headerContainer, props);

    return headerContainer;
  }

  function buildHeaderTitle(props) {
    var headerAlignContainer = document.createElement('div');
    headerTitle = document.createElement('p');
    headerTitle.classList.add('FH-header-title');

    styles.buildHeaderAlignContainerStyles(headerAlignContainer, props);
    styles.buildHeaderTitleStyles(headerTitle, props);

    headerAlignContainer.appendChild(headerTitle);
    var extraTitleText = buildExtraText(props);
    extraTitleText ? headerAlignContainer.appendChild(extraTitleText) : null;

    return headerAlignContainer;
  }

  function buildExtraText(props) {
    if(props.text.headerExtraTextLink) {
      extraTitleText = document.createElement('a');
      styles.buildExtraTextLinkStyles(extraTitleText, props);

      return extraTitleText;
    } else if(props.text.headerExtraText) {
      extraTitleText = document.createElement('p');
      styles.buildExtraTextParaStyles(extraTitleText, props);

      return extraTitleText
    }
  }

  function buildCardsContainer(props) {
    cardsContainer = document.createElement('section');
    styles.buildCardsContainerStyles(cardsContainer, props);
    return cardsContainer;
  }

  function buildTextContainers(props, cards, index) {
    textContainer = document.createElement('div');
    alignContainer = document.createElement('div');

    styles.buildTextContainerStyles(textContainer, props, cards, index);

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
      alignContainer.style.height = '100%';
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
          var items = data.items;

          if(selectedItems.length > 0) {
            var filtered = items.filter(function(item) {
              if(selectedItems.indexOf(item.pk) > -1) {
                filteredItems.push(item);
              }
            })
          } else {
            filteredItems = items.slice(0, numOfCards);
          }
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
    imgContainer = document.createElement('a');
    var anchorContainer = document.createElement('div');
    var img = document.createElement('p');

    anchorContainer.style.height = '100%';
    anchorContainer.style.width = '100%';

    imgContainer.href = 'https://demo.fareharbor.com/embeds/book/' + props.shortname + '/items/' + items[index].pk + '/?full-items=yes'
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

    var cardContainer = cards[index].linkTo ?
                        document.createElement('a') :
                        document.createElement('div') ;

    cardContainer.classList.add('FH-modal-card');
    cardContainer.href = cards[index].linkTo;
    cardContainer.style.boxSizing = 'border-box';
    cardContainer.style.display = 'block';
    cardContainer.style.height = '' + cardHeight + '%';

    if(props.modalType.toLowerCase() === 'showitems') {
      cardContainer.style.marginBottom = '1px';
    }

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

    text.style.margin = '0px';

    switch (props.modalType.toLowerCase()) {
      case 'simple':
        text.textContent = cards[index].text;
        text.href = cards[index].linkTo;
        text.style.display = 'inline-block';
        text.style.fontSize = props.cardFontsAndColors.mainTextSize || '20px';

        if(cards[index].textType.toLowerCase() === 'quote') {
          text.style.fontStyle = 'italic';
          text.style.fontSize = props.cardFontsAndColors.extraTextSize || '18px';
        }

        text.style.color = props.cardFontsAndColors.mainTextColor || '#333C4A';
        text.style.textDecoration = 'none';
        text.style.marginLeft = cards[index].icon ? '10%': '3%';
        text.style.marginRight = '3%';

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
        extraText = document.createElement('p');

        text.textContent = cards[index].name
        text.style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
        text.style.borderRadius = '0px 10px 10px 0px';
        text.style.color = '#ffffff';
        text.style.fontSize = props.cardFontsAndColors.mainTextSize || '18px';
        text.style.padding = '15px 7px';
        text.style.position = 'absolute';
        text.style.top = '30%';
        text.style.textAlign = 'left';
        text.style.width = '55%';

        extraText.textContent = props.cards.cardDetail[index].extraText;
        extraText.style.backgroundColor = props.colors.headerColor || 'rgba(221, 82, 70, 0.78)';
        extraText.style.borderRadius = '5px 0px 0px 5px';
        extraText.style.color = '#ffffff';
        extraText.style.fontSize = props.cardFontsAndColors.extraTextSize || '15px';
        extraText.style.margin = '0px';
        extraText.style.padding = '0px 7px';
        extraText.style.position = 'absolute';
        extraText.style.top = '10px';
        extraText.style.right = '0px';
        extraText.style.width = '30%';
        extraText.style.textAlign = 'left';

        break;
      default:
        console.log('Error with modalType case');
    }

    alignContainer.appendChild(text);
    extraText ? alignContainer.appendChild(extraText) : null;
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

  return  {
    create: create
  }
})();

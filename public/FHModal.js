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
    styles.buildAlignContainerStyles(alignContainer, props, cards, index);

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

    styles.buildAnchorContainerStyles(anchorContainer);
    styles.buildImgContainerStyles(imgContainer);
    imgContainer.href = 'https://demo.fareharbor.com/embeds/book/' + props.shortname + '/items/' + items[index].pk + '/?full-items=yes'
    styles.buildImgStyles(img, items, index);

    anchorContainer.appendChild(img);
    imgContainer.appendChild(anchorContainer);
  }

  function addCardToContainer(props, cards, index) {
    var cardHeight = Math.floor(100 / cards.length);

    var cardContainer = cards[index].linkTo ?
                        document.createElement('a') :
                        document.createElement('div');

    cardContainer.href = cards[index].linkTo;
    styles.buildCardContainerStyles(cardContainer, cardHeight, props, cards, index);

    return cardContainer
  }

  function addTextToCard(props, cards, index) {
    var extraText;
    var text = cards[index].linkTo ?
                document.createElement('a') :
                document.createElement('p');

    buildTextContainers(props, cards, index);

    text.style.margin = '0px';

    switch (props.modalType.toLowerCase()) {
      case 'simple':
        text.textContent = cards[index].text;
        text.href = cards[index].linkTo;
        styles.buildSimpleTextStyles(text, props, cards, index)

        if(cards[index].extraText) {
          extraText = document.createElement('p');
          styles.buildSimpleExtraTextStyles(extraText, props, cards, index);
          alignContainer.appendChild(extraText);
        }
        break;
      case 'showitems':
        extraText = document.createElement('p');

        text.textContent = cards[index].name
        styles.buildItemsTextStyles(text, props, cards, index);

        extraText.textContent = props.cards.cardDetail[index].extraText;
        styles.buildItemsExtraTextStyles(extraText, props, cards, index);

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

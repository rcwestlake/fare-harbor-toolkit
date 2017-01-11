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
    styles.buildModalContainerStyles(modalContainer, props);

    return modalContainer;
  }

  function buildHeaderContainer(props) {
    headerContainer = document.createElement('section');
    styles.buildHeaderContainerStyles(headerContainer, props);

    return headerContainer;
  }

  function buildHeaderTitle(props) {
    var headerAlignContainer = document.createElement('div');
    headerTitle = document.createElement('p');

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
      typeCheck(card.doesItExist, 'boolean', 'doesItExist property in FHConfig > Modal > cardDetail needs to be a boolean')
      return card.doesItExist === true
    });

    typeCheck(props.modalType, 'string', 'modalType property in FHConfig > Modal needs to be a string')

    switch (props.modalType.toLowerCase()) {
      case 'simple':
        for(var i = 0; i < cards.length; i++) {
          var wrapper = addCardToContainer(props, cards, i)[0];
          var anchor = addCardToContainer(props, cards, i)[1];
          addTextToCard(props, cards, i);
          addIcons(props, cards, i);

          wrapper.appendChild(anchor);
          anchor.appendChild(textContainer);
          cards[i].icon ? anchor.appendChild(iconContainer): null;
          cardsContainer.appendChild(wrapper);
        }

        break;
      case 'showitems':
        var selectedItems = props.selectedItems;
        var numOfCards = cards.length;

        filterAPIBySelectedItems(props, selectedItems, numOfCards);
        break;
      default:
        console.error('Incorrect modalType specified in FHModal.js');
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
            var item = addCardToContainer(props, filteredItems, i)[0];
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
    styles.buildImgStyles(img, items, index);

    typeCheck(props.shortname, 'string', 'shortname in FHConfig needs to be a string')
    typeCheck(props.showFullItems, 'string', 'showFullItems option in FHConfig > toolDetails > Modal needs to be a string')

    imgContainer.onclick = function() {
      changeBookButtonText()
      showOrHideModal()
      return !(window.FH && FH.open({
        shortname: props.shortname,
        fallback: 'simple',
        fullItems: props.showFullItems,
        view: { item: items[index].pk }
      }))
    }

    anchorContainer.appendChild(img);
    imgContainer.appendChild(anchorContainer);
  }

  function addCardToContainer(props, cards, index) {
    var cardHeight = Math.floor(100 / cards.length);
    var wrapperContainer = document.createElement('div');
    var cardContainer = cards[index].linkTo ?
                        document.createElement('a') :
                        document.createElement('div');

    if(cards[index].linkTo) {
      typeCheck(cards[index].linkTo, 'string', 'linkTo property in FHConfig > toolDetails > Modal > Cards needs to be a string')
    }

    if(cards[index].fullItems) {
      typeCheck(cards[index].fullItems, 'string', 'showFullItems option in FHConfig > toolDetails > Modal > cardDetail needs to be a string')
    }

    typeCheck(props.shortname, 'string', 'shortname in FHConfig needs to be a string')


    styles.buildCardContainerStyles(cardContainer);
    styles.buildWrapperContainerStyles(wrapperContainer, cardHeight, props, cards, index);

    if(cards[index].linkTo) {
      cardContainer.onclick = function() {
        changeBookButtonText()
        showOrHideModal()
        return !(window.FH && FH.open({
          shortname: props.shortname,
          fallback: 'simple',
          fullItems: cards[index].fullItems,
          view: cards[index].linkTo
        }))
      }
    }

    return [wrapperContainer, cardContainer]
  }

  function addTextToCard(props, cards, index) {
    var extraText;
    var text = document.createElement('p');

    buildTextContainers(props, cards, index);

    switch (props.modalType.toLowerCase()) {
      case 'simple':
        text.textContent = cards[index].text;
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
        console.error('Error with modalType case');
    }

    alignContainer.appendChild(text);
    extraText ? alignContainer.appendChild(extraText) : null;
  }

  function addIcons(props, card, index) {
    var icon;

    if(card[index].icon) {
      typeCheck(card[index].icon, 'string', 'icon property in FHConfig > Modal > cardDetail needs to be a string')
      iconContainer = document.createElement('div');
      icon = document.createElement('img');

      styles.buildIconContainerStyles(iconContainer);
      styles.buildIconStyles(icon);
      icon.src = card[index].icon;
      iconContainer.appendChild(icon);
    }
  }

  function changeBookButtonText() {
    if (modalContainer.style.display === 'none') {
      return button.textContent = 'X'
    }

    if (modalContainer.style.display === 'block') {
      return button.textContent = bookButtonText;
    }
  }

  function showOrHideModal() {
    if (modalContainer.style.display === 'none') {
      return modalContainer.style.display = 'block'
    }

    if (modalContainer.style.display === 'block') {
      return modalContainer.style.display = 'none'
    }
  }

  function typeCheck(element, type, errorMessage) {
    if(typeof element !== type) {
      throw new Error(errorMessage)
    }
  }

  document.addEventListener('click', function(e) {
    if(e.target.className === 'FH-reservation-button') {
      changeBookButtonText()
      showOrHideModal()
    }
  })

  return  {
    create: create
  }
})();

var FHModalStyles = {
  buildButtonStyles: function(element, props) {
    element.textContent = props.text.bookButtonText;
    element.style.backgroundColor = props.colors.bookButtonColor || '#dd5347';
    element.style.bottom = '20px';
    element.style.border = 'none';
    element.style.boxShadow = '0 1px 6px rgba(0,0,0,.06), 0 2px 32px rgba(0,0,0,.16)';
    element.style.cursor = 'pointer';
    element.style.color = props.colors.bookButtonTextColor || '#ffffff';
    element.style.fontSize = props.colors.bookButtonTextSize || '15px';
    element.style.position = 'fixed';
    element.style.right = '20px';
    element.style.zIndex = '3561031316';
    element.style.height = '60px';
    element.style.width = '170px';

    if(window.innerWidth < '500') {
      element.style.fontSize = '12px';
      element.style.height = '40px';
      element.style.width = '130px';
    }
  },

  buildModalContainerStyles: function(element, props) {
    element.classList.add('FH-reservation-modal');
    element.style.color = props.colors.headerTextColor || 'white';
    element.style.backgroundColor = '#ffffff';
    element.style.borderRadius = '10px 10px 10px 10px';
    element.style.boxShadow = '0 3px 5px rgba(0,0,0,.2)';
    element.style.boxSizing = 'border-box';
    element.style.display = 'none';
    element.style.fontFamily = props.text.fontPrimary || 'Tahoma, Geneva, sans-serif';
    element.style.position = 'fixed';
    element.style.bottom = '100px';
    element.style.right = '20px';

    if(window.innerWidth < '550') {
      element.style.borderRadius = '0px';
      element.style.top = '0px';
      element.style.left = '0px';
      element.style.height = '100%';
      element.style.width = '100%';
    } else {
      element.style.height = '550px';
      element.style.width = '350px';
    }

    element.style.textAlign = props.text.globalTextAlign || 'center';
    element.style.zIndex = '35610311';
  },

  buildHeaderContainerStyles: function(element, props) {
    element.classList.add('FH-modal-header');
    element.style.height = '15%';
    element.style.boxSizing = 'border-box';
    element.style.paddingTop = '0px';
    element.style.backgroundColor = props.colors.headerColor || '#dd5347';
    element.style.borderRadius = '10px 10px 0px 0px';

    if(window.innerWidth < '500') {
      element.style.borderRadius = '0px';
    }
  },

  buildHeaderAlignContainerStyles: function(element, props) {
    element.style.position = 'relative';
    element.style.top = '50%';
    element.style.transform = 'translateY(-50%)';
  },

  buildHeaderTitleStyles: function(element, props) {
    element.classList.add('FH-header-title');
    element.textContent = props.text.headerText;
    element.style.fontSize = props.text.headerTextSize || '30px';
    element.style.fontSize = props.text.headerTextSize || '30px';
    element.style.marginTop = '0px';
    element.style.marginBottom = props.marginsAndPadding.headerTextMarginBottom || '0px';
  },

  buildExtraTextLinkStyles: function(element, props) {
    element.classList.add('FH-extra-title');
    element.textContent = props.text.headerExtraText;
    element.style.color = props.colors.headerExtraTextColor || '#ffffff';
    element.style.fontSize = '10px';
    element.style.margin = '0px';
    element.href = props.text.headerExtraTextLink;
    element.target = '_blank';
    element.style.textDecoration = 'none';
  },

  buildExtraTextParaStyles: function(element, props) {
    element.classList.add('FH-extra-title');
    element.textContent = props.text.headerExtraText;
    element.style.color = props.colors.headerExtraTextColor || '#ffffff';
    element.style.textDecoration = 'none';
    element.style.fontSize = '10px';
    element.style.margin = '0px';
  },

  buildCardsContainerStyles: function(element, props) {
    element.style.boxSizing = 'border-box';
    element.style.height = '85%';
    element.style.backgroundColor = 'white';
  },

  buildTextContainerStyles: function(element, props, cards, index) {
    element.style.boxSizing = 'border-box';
    element.style.display = 'inline-block';
    element.style.float = 'right';
    element.style.minHeight = '100%';
    element.style.maxWidth = cards[index].icon ? '75%' : '100%';
    element.style.height = '100%';
    element.style.width = cards[index].icon ? '75%' : '100%';
    element.style.textAlign = cards[index].icon ? 'left' : 'center';
    element.style.position = 'relative';
  },

  buildAlignContainerStyles: function(element, props, cards, index) {
    element.style.boxSizing = 'border-box';
    element.style.display = 'block';
    element.style.height = 'auto';
    element.style.width = '100%';
    element.style.position = 'relative';
    element.style.top = '50%';
    element.style.transform = 'translateY(-50%)';

    if(props.modalType.toLowerCase() === 'showitems') {
      element.style.position = 'absolute';
      element.style.top = '50%';
      element.style.height = '100%';
    }
  },

  buildAnchorContainerStyles: function(element) {
    element.style.height = '100%';
    element.style.width = '100%';
  },

  buildImgContainerStyles: function(element) {
    element.style.boxSizing = 'border-box';
    element.style.display = 'block';
    element.style.position = 'relative';
    element.style.height = '100%';
    element.style.width = '100%';
  },

  buildImgStyles: function(element, items, index) {
    element.style.backgroundImage = 'url(' + items[index].image_cdn_url + ')';
    element.style.borderRadius = '6px';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundPosition = '50% 50%';
    element.style.backgroundSize = 'cover';
    element.style.margin = '0px';
    element.style.overflow = 'hidden';
    element.style.minHeight = '100%';
  },

  buildCardContainerStyles: function(element, height, props, cards, index) {
    element.classList.add('FH-modal-card');
    element.style.boxSizing = 'border-box';
    element.style.display = 'block';
    element.style.height = '' + height + '%';

    if(props.modalType.toLowerCase() === 'showitems') {
      element.style.marginBottom = '2px';
    }

    if(props.modalType.toLowerCase() === 'simple') {
      if(index < cards.length - 1) {
        element.style.borderBottom = props.colors.headerColor ?
        '' + '1px solid ' + props.colors.headerColor :
        '1px solid #dd5347';
      }
    }
  },

  buildSimpleTextStyles: function(element, props, cards, index) {
    element.style.display = 'inline-block';
    element.style.fontSize = props.cardFontsAndColors.mainTextSize || '20px';

    if(cards[index].textType.toLowerCase() === 'quote') {
      element.style.fontStyle = 'italic';
      element.style.fontSize = props.cardFontsAndColors.extraTextSize || '18px';
    }

    element.style.color = props.cardFontsAndColors.mainTextColor || '#333C4A';
    element.style.margin = '0px';
    element.style.marginLeft = cards[index].icon ? '10%': '3%';
    element.style.marginRight = '3%';
    element.style.textDecoration = 'none';
  },

  buildSimpleExtraTextStyles: function(element, props, cards, index) {
    element.textContent = cards[index].extraText;
    element.style.color = props.cardFontsAndColors.extraTextColor || '#dd5347';
    element.style.margin = '0px';
    element.style.marginLeft = cards[index].icon ? '10%': '0%';
  },

  buildItemsTextStyles: function(element, props, cards, index) {
    element.style.backgroundColor = 'rgba(0, 0, 0, 0.45)';
    element.style.borderRadius = '0px 10px 10px 0px';
    element.style.color = '#ffffff';
    element.style.fontSize = props.cardFontsAndColors.mainTextSize || '18px';
    element.style.margin = '0px';
    element.style.padding = '15px 7px';
    element.style.position = 'absolute';
    element.style.top = '30%';
    element.style.textAlign = 'left';
    element.style.width = '55%';
  },

  buildItemsExtraTextStyles: function(element, props, cards, index) {
    element.style.backgroundColor = props.colors.headerColor || 'rgba(221, 82, 70, 0.78)';
    element.style.borderRadius = '5px 0px 0px 5px';
    element.style.color = '#ffffff';
    element.style.fontSize = props.cardFontsAndColors.extraTextSize || '15px';
    element.style.margin = '0px';
    element.style.padding = '0px 7px';
    element.style.position = 'absolute';
    element.style.top = '10px';
    element.style.right = '0px';
    element.style.width = '30%';
    element.style.textAlign = 'left';
  },

  buildIconContainerStyles: function(element) {
    element.style.boxSizing = 'border-box';
    element.style.float = 'left';
    element.style.paddingLeft = '3%';
    element.style.position = 'relative';
    element.style.top = '50%';
    element.style.transform = 'translateY(-50%)';
    element.style.maxWidth = '25%';
    element.style.width = '25%';
  },

  buildIconStyles: function(element) {
    element.style.height = 'auto';
    element.style.width = 'auto';
  }
}

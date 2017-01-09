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
  }
}

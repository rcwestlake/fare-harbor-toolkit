var FHFooter = function(obj) {

  var buildFooterHTML = function (obj) {
    var footer;
    var firstElementTextColor;
    var secondElementTextColor;
    var thirdElementTextColor;
    var fourthElementTextColor;
    var mobileView;

    if (window.innerWidth < 700) {
      mobileView = true;
    } else {
      mobileView = false;
    }

    var footerStyles = {
      backgroundColor: obj.footer.footerBackgroundColor || '#88BCF8',
      height: 'auto',
      width: '100vw',
      display: 'block',
      borderTopWidth: '1px',
      borderRightWidth: '1px',
      borderBottomWidth: '1px',
      borderLeftWidth: '1px',
      borderTopStyle: 'solid',
      borderRightStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftStyle: 'solid',
      borderTopColor: obj.footerBorders.footerBorderTopColor || '#88BCF8',
      borderRightColor: obj.footerBorders.footerBorderRightColor || '#88BCF8',
      borderBottomColor: obj.footerBorders.footerBorderBottomColor || '#88BCF8',
      borderLeftColor: obj.footerBorders.footerBorderLeftColor || '#88BCF8',
    };

    footer = document.createElement('FOOTER');
    document.body.appendChild(footer);
    footer.style.backgroundColor = footerStyles.backgroundColor;
    footer.style.height = footerStyles.height;
    footer.style.width = footerStyles.width;
    footer.style.display = footerStyles.display;
    footer.style.textAlign = 'center';
    footer.style.borderTopWidth = footerStyles.borderTopWidth;
    footer.style.borderRightWidth = footerStyles.borderRightWidth;
    footer.style.borderBottomWidth = footerStyles.borderBottomWidth;
    footer.style.borderLeftWidth = footerStyles.borderLeftWidth;
    footer.style.borderTopStyle = footerStyles.borderTopStyle;
    footer.style.borderRightStyle = footerStyles.borderRightStyle;
    footer.style.borderBottomStyle = footerStyles.borderBottomStyle;
    footer.style.borderLeftStyle = footerStyles.borderLeftStyle;
    footer.style.borderTopColor = footerStyles.borderTopColor;
    footer.style.borderRightColor = footerStyles.borderRightColor;
    footer.style.borderBottomColor = footerStyles.borderBottomColor;
    footer.style.borderLeftColor = footerStyles.borderLeftColor;

    var filteredElements = obj.elements.filter(function(element) {
        return element.doesItExist === true;
      })

    for (var i = 0; i < filteredElements.length; i++) {
      var linkWrapper = document.createElement('A');
      linkWrapper.id = filteredElements[i].id + 'link';
      footer.appendChild(linkWrapper);
      linkWrapper.href = filteredElements[i].linkTo;
      linkWrapper.style.textDecoration = 'none';
      linkWrapper.style.color = filteredElements[i].color || '#000000';

      var text = document.createElement('P');
      linkWrapper.appendChild(text);
      text.id = filteredElements[i].id;
      text.classList.add('footer-element');
      var textContent = document.createTextNode(filteredElements[i].textContent);
      text.appendChild(textContent);
      mobileView ? text.style.display = 'block' : text.style.display = 'inline-block';
      if (filteredElements[i].id === 'first') {
        firstElementTextColor = filteredElements[i].color || '#000000';
        text.style.color = firstElementTextColor;
      } else if (filteredElements[i].id === 'second') {
        secondElementTextColor = filteredElements[i].color || '#000000';
        text.style.color = secondElementTextColor;
      } else if (filteredElements[i].id === 'third') {
        thirdElementTextColor = filteredElements[i].color || '#000000';
        text.style.color = thirdElementTextColor;
      } else if (filteredElements[i].id === 'fourth') {
        fourthElementTextColor = filteredElements[i].color || '#000000';
        text.style.color = fourthElementTextColor;
      }
      text.style.fontFamily = filteredElements[i].fontName || 'Lucida-Grande, Verdana, sans-serif';
      text.style.fontSize = filteredElements[i].fontSize || '16px';
      text.style.fontWeight = filteredElements[i].fontWeight || 'normal';
      mobileView ? text.style.height = '' : text.style.height = '50px';
      mobileView ? text.style.lineHeight = '' : text.style.lineHeight = '50px';
      mobileView ? text.style.whiteSpace = '' : text.style.whiteSpace = 'noWrap';
    }

    formatElements();

    function formatElements() {
      var el1 = document.getElementById('first');
      var el2 = document.getElementById('second');
      var el3 = document.getElementById('third');
      var el4 = document.getElementById('fourth');
      if (mobileView) {
        if (filteredElements.length === 1) {
          el1.style.fontSize = '2em';
          el1.style.fontWeight = '900';
        }
        el1.style.margin = '40px auto';
        el2.style.margin = '40px auto';
        el3.style.margin = '40px auto';
        el4.style.margin = '40px auto';
      } else {
        if (filteredElements.length === 1) {
          el1.style.fontSize = '2em';
          el1.style.fontWeight = '900';
        } else if (filteredElements.length === 2) {
          el1.style.marginRight = '50px';
          el2.style.marginLeft = '50px';
        } else if (filteredElements.length === 3) {
          el1.style.marginRight = '50px';
          el2.style.marginRight = '50px';
        } else if (filteredElements.length === 4) {
          el1.style.marginRight = '50px';
          el2.style.marginRight = '50px';
          el3.style.marginRight = '50px';
        }
      }
    }

    document.addEventListener('mouseover', function () {
      if (event.target.className.toLowerCase() === 'footer-element') {
        event.target.style.color = obj.footer.elementHoverColor || 'rgb(136, 136, 136)';
        event.target.style.cursor = 'pointer';
      }
      });

      document.addEventListener('mouseout', function () {
        if (event.target.className.toLowerCase() === 'footer-element') {
          if (event.target.id === 'first') {
            event.target.style.color = firstElementTextColor;
          } else if (event.target.id === 'second') {
            event.target.style.color = secondElementTextColor;
          } else if (event.target.id === 'third') {
            event.target.style.color = thirdElementTextColor;
          } else if (event.target.id === 'fourth') {
            event.target.style.color = fourthElementTextColor;
          }
          event.target.style.cursor = 'pointer';
        }
        });
  }

  return buildFooterHTML(obj);

};

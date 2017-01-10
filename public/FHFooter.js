var FHFooter = function(obj) {

  var buildFooterHTML = function (obj) {
    var styles = FHFooterStyles;
    var footer;
    var firstElementTextColor;
    var secondElementTextColor;
    var thirdElementTextColor;
    var fourthElementTextColor;
    var filteredElements;
    var mobileView;

    (function makeResponsive() {
      if (window.innerWidth < 700) {
        mobileView = true;
      } else {
        mobileView = false;
      }
    })()

    makeTheFooterBackground();

    function makeTheFooterBackground(){
      footer = document.createElement('FOOTER');
      document.body.appendChild(footer);
      footer.style.backgroundColor = styles.backgroundColor;
      footer.style.height = styles.height;
      footer.style.width = styles.width;
      footer.style.display = styles.display;
      footer.style.textAlign = 'center';
      footer.style.borderTopWidth = styles.borderTopWidth;
      footer.style.borderRightWidth = styles.borderRightWidth;
      footer.style.borderBottomWidth = styles.borderBottomWidth;
      footer.style.borderLeftWidth = styles.borderLeftWidth;
      footer.style.borderTopStyle = styles.borderTopStyle;
      footer.style.borderRightStyle = styles.borderRightStyle;
      footer.style.borderBottomStyle = styles.borderBottomStyle;
      footer.style.borderLeftStyle = styles.borderLeftStyle;
      footer.style.borderTopColor = styles.borderTopColor;
      footer.style.borderRightColor = styles.borderRightColor;
      footer.style.borderBottomColor = styles.borderBottomColor;
      footer.style.borderLeftColor = styles.borderLeftColor;
    }

    (function filterElementsByExistence(){
      filteredElements = obj.elements.filter(function(element) {
        return element.doesItExist === true;
      })
    })()

    buildElements();

    function buildElements() {
      var linkWrapper;
      var text;
      for (var i = 0; i < filteredElements.length; i++) {

        (function buildLinkWrapper(){
          linkWrapper = document.createElement('A');
          linkWrapper.id = filteredElements[i].id + 'link';
          footer.appendChild(linkWrapper);
          linkWrapper.href = filteredElements[i].linkTo;
          linkWrapper.style.textDecoration = 'none';
          linkWrapper.style.color = filteredElements[i].color || '#000000';
        })()

        instantiateElementsInFooter();

        function instantiateElementsInFooter() {
          text = document.createElement('P');
          linkWrapper.appendChild(text);
          text.id = filteredElements[i].id;
          text.classList.add('footer-element');
          var textContent = document.createTextNode(filteredElements[i].textContent);
          text.appendChild(textContent);
          mobileView ? text.style.display = 'block' : text.style.display = 'inline-block';
        }

        (function styleElements(){
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
        })()

      }
    }

    (function formatElements() {
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
    })()

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

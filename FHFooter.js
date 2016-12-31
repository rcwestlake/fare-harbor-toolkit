var FHFooter = function(obj) {
  function create(obj) {
    buildFooterHTML(obj)

  }

  return create(obj)
}

function buildFooterHTML(obj) {

  var footerStyles = {
    backgroundColor: obj.footer.footerBackgroundColor || '#88BCF8',
    height: obj.footer.height || 'auto',
    width: obj.footer.width || '100vw',
    display: obj.footer.displayType || 'block',
    borderTopWidth: obj.footerBorders.footerBorderTopWidth || '1px',
    borderRightWidth: obj.footerBorders.footerBorderRightWidth || '1px',
    borderBottomWidth: obj.footerBorders.footerBorderBottomWidth || '1px',
    borderLeftWidth: obj.footerBorders.footerBorderLeftWidth || '1px',
    borderTopStyle: obj.footerBorders.footerBorderTopStyle || 'solid',
    borderRightStyle: obj.footerBorders.footerBorderRightStyle || 'solid',
    borderBottomStyle: obj.footerBorders.footerBorderBottomStyle || 'solid',
    borderLeftStyle: obj.footerBorders.footerBorderLeftStyle || 'solid',
    borderTopColor: obj.footerBorders.footerBorderTopColor || '#88BCF8',
    borderRightColor: obj.footerBorders.footerBorderRightColor || '#88BCF8',
    borderBottomColor: obj.footerBorders.footerBorderBottomColor || '#88BCF8',
    borderLeftColor: obj.footerBorders.footerBorderLeftColor || '#88BCF8',
  };

  var footer = document.createElement('FOOTER');
  document.body.appendChild(footer);
  footer.style.backgroundColor = footerStyles.backgroundColor;
  footer.style.height = footerStyles.height;
  footer.style.width = footerStyles.width;
  footer.style.display = footerStyles.display;
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
    footer.appendChild(linkWrapper);
    linkWrapper.href = filteredElements[i].linkTo;
    linkWrapper.style.textDecoration = 'none';
    linkWrapper.style.color = '#000000';
    if (filteredElements[i].type === 'textLink') {
      var text = document.createElement('P');
      linkWrapper.appendChild(text);
      var textContent = document.createTextNode(filteredElements[i].textContent);
      text.appendChild(textContent);
      text.style.display = 'inline-block';
      text.style.fontFamily = filteredElements[i].fontName || 'Palatino-Bold, serif';
      text.style.fontSize = filteredElements[i].fontSize || '16px';
      text.style.fontWeight = filteredElements[i].fontWeight || 'normal';
      text.style.marginTop = filteredElements[i].marginTop || '0';
      text.style.marginRight = filteredElements[i].marginRight || '0';
      text.style.marginBottom = filteredElements[i].marginBottom || '0';
      text.style.marginLeft = filteredElements[i].marginLeft || '0';
      text.style.height = '50px';
      text.style.lineHeight = '50px';
      text.style.whiteSpace = 'noWrap';
    } else if (filteredElements[i].type === 'socialMedia') {
      var img = document.createElement('IMG');
      var sources = {
        facebook: 'images/facebook.png',
        twitter: 'images/twitter.png',
        googlePlus: 'images/google-plus3.png',
      };
      linkWrapper.appendChild(img);
      var socialMediaType = filteredElements[i].socialMediaType.toLowerCase();
      img.src = sources[filteredElements[i].socialMediaType];
      img.style.verticalAlign = 'middle';
      img.style.height = filteredElements[i].height || 'auto';
      img.style.width = filteredElements[i].width || 'auto';
      img.style.marginTop = filteredElements[i].marginTop || '0';
      img.style.marginRight = filteredElements[i].marginRight || '0';
      img.style.marginBottom = filteredElements[i].marginBottom || '0';
      img.style.marginLeft = filteredElements[i].marginLeft || '0';
    }
  }

}

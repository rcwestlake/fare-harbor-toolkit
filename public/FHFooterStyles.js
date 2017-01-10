var footerObj = FHConfig.config.toolDetails.footer;

(function dataValidationFooter() {

  if (footerObj.elements[0].doesItExist !== true || typeof footerObj.elements[0].doesItExist !== 'boolean') {
    throw new Error('The value of doesItExist for the element with id of "first" should always be the boolean value true.')
  }

  if (typeof footerObj.elements[1].doesItExist !== 'boolean' || typeof footerObj.elements[2].doesItExist !== 'boolean' || typeof footerObj.elements[3].doesItExist !== 'boolean') {
    throw new Error('The value of doesItExist must always be a boolean.')
  }

  if (typeof footerObj.elements[0].textContent !== 'string' || typeof footerObj.elements[1].textContent !== 'string' || typeof footerObj.elements[2].textContent !== 'string' || typeof footerObj.elements[3].textContent !== 'string') {
    throw new Error('The value of textContent must always be a string.')
  }

  if (footerObj.elements[0].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[1].doesItExist === true && footerObj.elements[1].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[2].doesItExist === true && footerObj.elements[2].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[3].doesItExist === true && footerObj.elements[3].linkTo === '') {
    throw new Error('Each element included in the footer must have a valid link. Check the linkTo property of each element.')
  }

  if (footerObj.elements[1].doesItExist === false) {
    if (footerObj.elements[2].doesItExist || footerObj.elements[3].doesItExist) {
      throw new Error('Non-existing elements cannot be ordered before existing elements. Check the "doesItExist" properties of your elements.')
    }
  }

  if (footerObj.elements[2].doesItExist === false) {
    if (footerObj.elements[3].doesItExist) {
      throw new Error('Non-existing elements cannot be ordered before existing elements. Check the "doesItExist" properties of your elements.')
    }
  }

})()

var FHFooterStyles = {
  backgroundColor: footerObj.footerBackgroundColor || '#88BCF8',
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
  borderTopColor: footerObj.footerBorders.footerBorderTopColor || '#88BCF8',
  borderRightColor: footerObj.footerBorders.footerBorderRightColor || '#88BCF8',
  borderBottomColor: footerObj.footerBorders.footerBorderBottomColor || '#88BCF8',
  borderLeftColor: footerObj.footerBorders.footerBorderLeftColor || '#88BCF8',
}

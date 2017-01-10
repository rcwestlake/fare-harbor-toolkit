var searchInputObj = FHConfig.config.toolDetails.searchInput;

var mobileView;
var stackDependentStyle;
var stackOrientation = searchInputObj.stackOrientation || 'horizontal';

makeResponsive();

function makeResponsive() {
  if (window.innerWidth < 700) {
    mobileView = true;
  } else {
    mobileView = false;
  }
}

(function dataValidation() {
  if (searchInputObj.stackOrientation.toLowerCase() !== 'horizontal' && searchInputObj.stackOrientation.toLowerCase() !== 'vertical' && searchInputObj.stackOrientation.toLowerCase() !== '') {
    throw new Error('For the stackOrientation property, please enter "horizontal", "vertical", or an empty string.')
  }

  if (searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction !== '' && searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction !== 'datePicker' && searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction !== 'eventPicker') {
    throw new Error('For the leftInputFieldFunction, please enter "datePicker", "eventPicker", or an empty string.')
  }

  if (searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction !== '' && searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction !== 'datePicker' && searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction !== 'eventPicker') {
    throw new Error('For the rightInputFieldFunction, please enter "datePicker", "eventPicker", or an empty string.')
  }

  if (typeof searchInputObj.inputFields.inputFieldText.leftInputFieldTextContent !== 'string') {
    throw new Error('The leftInputFieldTextContent must be a string. (An empty string is fine, but no numbers, booleans, or other non-string types.)')
  }
})()

adjustOrientation();

function adjustOrientation() {
  if (mobileView) {
    stackDependentStyle = {
      leftInputFieldDisplay: 'block',
      rightInputFieldDisplay: 'block',
      leftInputFieldMarginTop: '15px',
      leftInputFieldMarginRight: 'auto',
      leftInputFieldMarginBottom: '15px',
      leftInputFieldMarginLeft: 'auto',
      rightInputFieldMarginTop: '15px',
      rightInputFieldMarginRight: 'auto',
      rightInputFieldMarginBottom: '15px',
      rightInputFieldMarginLeft: 'auto',
      detailsButtonMarginTop: '40px',
      detailsButtonMarginBottom: '40px',
      leftInputFieldWidth: '200px',
      rightInputFieldWidth: '200px',
      }
  } else if (stackOrientation === 'vertical') {
    stackDependentStyle = {
      leftInputFieldDisplay: 'block',
      rightInputFieldDisplay: 'block',
      leftInputFieldMarginTop: '15px',
      leftInputFieldMarginRight: 'auto',
      leftInputFieldMarginBottom: '15px',
      leftInputFieldMarginLeft: 'auto',
      rightInputFieldMarginTop: '15px',
      rightInputFieldMarginRight: 'auto',
      rightInputFieldMarginBottom: '15px',
      rightInputFieldMarginLeft: 'auto',
      detailsButtonMarginTop: '40px',
      detailsButtonMarginBottom: '40px',
      leftInputFieldWidth: '30vw',
      rightInputFieldWidth: '30vw',
      }
  } else {
    stackDependentStyle = {
      leftInputFieldDisplay: 'inline-block',
      rightInputFieldDisplay: 'inline-block',
      leftInputFieldMarginTop: '0px',
      leftInputFieldMarginRight: '5px',
      leftInputFieldMarginBottom: '0px',
      leftInputFieldMarginLeft: '5px',
      rightInputFieldMarginTop: '0px',
      rightInputFieldMarginRight: '5px',
      rightInputFieldMarginBottom: '0px',
      rightInputFieldMarginLeft: '5px',
      detailsButtonMarginTop: '20px',
      detailsButtonMarginBottom: '20px',
      leftInputFieldWidth: '200px',
      rightInputFieldWidth: '200px',
    }
  }
}

var FHContainerStyles = {
  border: searchInputObj.searchInputContainer.borderDebug ? '1px dotted red' : '',
  marginTop: '40vh',
  marginRight: 'auto',
  marginBottom: '40vh',
  marginLeft: 'auto',
}

var FHLeftInputStyles = {
  backgroundColor: searchInputObj.inputFields.inputFieldBackgroundColor.leftInputFieldBackgroundColor || '#ffffff',
  display: stackDependentStyle.leftInputFieldDisplay,
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.inputFields.inputFieldBorders.leftInputFieldBorderBottomColor || '#979797',
  borderTopColor: searchInputObj.inputFields.inputFieldBorders.leftInputFieldBorderTopColor || '#979797',
  borderRightColor: searchInputObj.inputFields.inputFieldBorders.leftInputFieldBorderRightColor || '#979797',
  borderLeftColor: searchInputObj.inputFields.inputFieldBorders.leftInputFieldBorderLeftColor || '#979797',
  color: searchInputObj.inputFields.inputFieldText.leftInputFieldTextColor || '#A09C9C',
  fontFamily: searchInputObj.inputFields.inputFieldText.leftInputFieldTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.inputFields.inputFieldText.leftInputFieldTextFontSize || '22px',
  height: '39px',
  marginTop: stackDependentStyle.leftInputFieldMarginTop,
  marginRight: stackDependentStyle.leftInputFieldMarginRight,
  marginBottom: stackDependentStyle.leftInputFieldMarginBottom,
  marginLeft: stackDependentStyle.leftInputFieldMarginLeft,
  width: stackDependentStyle.leftInputFieldWidth,
}

var FHRightInputStyles = {
  backgroundColor: searchInputObj.inputFields.inputFieldBackgroundColor.rightInputFieldBackgroundColor || '#ffffff',
  display: stackDependentStyle.rightInputFieldDisplay,
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.inputFields.inputFieldBorders.rightInputFieldBorderBottomColor || '#979797',
  borderTopColor: searchInputObj.inputFields.inputFieldBorders.rightInputFieldBorderTopColor || '#979797',
  borderRightColor: searchInputObj.inputFields.inputFieldBorders.rightInputFieldBorderRightColor || '#979797',
  borderLeftColor: searchInputObj.inputFields.inputFieldBorders.rightInputFieldBorderLeftColor || '#979797',
  color: searchInputObj.inputFields.inputFieldText.rightInputFieldTextColor || '#A09C9C',
  fontFamily: searchInputObj.inputFields.inputFieldText.rightInputFieldTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.inputFields.inputFieldText.rightInputFieldTextFontSize || '22px',
  height: '39px',
  marginTop: stackDependentStyle.rightInputFieldMarginTop,
  marginRight: stackDependentStyle.rightInputFieldMarginRight,
  marginBottom: stackDependentStyle.rightInputFieldMarginBottom,
  marginLeft: stackDependentStyle.rightInputFieldMarginLeft,
  width: stackDependentStyle.rightInputFieldWidth,
}

var FHGoButtonStyles = {
  backgroundColor: searchInputObj.buttons.buttonsBackgroundColor.goButtonBackgroundColor || '#3D89DF',
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.buttons.buttonsBorders.goButtonBorderBottomColor || '#8CC0FB',
  borderTopColor: searchInputObj.buttons.buttonsBorders.goButtonBorderTopColor || '#8CC0FB',
  borderRightColor: searchInputObj.buttons.buttonsBorders.goButtonBorderRightColor || '#8CC0FB',
  borderLeftColor: searchInputObj.buttons.buttonsBorders.goButtonBorderLeftColor || '#8CC0FB',
  borderRadius: '8px',
  boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
  color: searchInputObj.buttons.buttonsText.goButtonTextColor || '#000000',
  fontFamily: searchInputObj.buttons.buttonsText.goButtonTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.buttons.buttonsText.goButtonTextFontSize || '25px',
  height: '39px',
  marginTop: '0px',
  marginRight: '10px',
  marginBottom: '0px',
  marginLeft: '10px',
  width: '105px',
}

var FHDetailsButtonStyles = {
  backgroundColor: searchInputObj.buttons.buttonsBackgroundColor.detailsButtonBackgroundColor || '#3D89DF',
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.buttons.buttonsBorders.detailsButtonBorderBottomColor || '#8CC0FB',
  borderTopColor: searchInputObj.buttons.buttonsBorders.detailsButtonBorderTopColor || '#8CC0FB',
  borderRightColor: searchInputObj.buttons.buttonsBorders.detailsButtonBorderRightColor || '#8CC0FB',
  borderLeftColor: searchInputObj.buttons.buttonsBorders.detailsButtonBorderLeftColor || '#8CC0FB',
  borderRadius: '8px',
  boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
  color: searchInputObj.buttons.buttonsText.detailsButtonTextColor || '#000000',
  fontFamily: searchInputObj.buttons.buttonsText.detailsButtonTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.buttons.buttonsText.detailsButtonTextFontSize || '25px',
  height: 'auto',
  marginTop: stackDependentStyle.detailsButtonMarginTop,
  marginRight: 'auto',
  marginBottom: stackDependentStyle.detailsButtonMarginBottom,
  marginLeft: 'auto',
  padding: '10px',
  width: 'auto',
}

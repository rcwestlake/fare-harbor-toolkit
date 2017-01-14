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

(function dataValidationSearchInput() {

  if (typeof searchInputObj.container.borderDebug !== 'boolean') {
    throw new Error('Please enter a valid boolean value (true or false) for borderDebug.')
  }

  if (searchInputObj.stackOrientation.toLowerCase() !== 'horizontal' && searchInputObj.stackOrientation.toLowerCase() !== 'vertical' && searchInputObj.stackOrientation.toLowerCase() !== '') {
    throw new Error('For the stackOrientation property, please enter "horizontal", "vertical", or an empty string.')
  }

  if (searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction !== '' && searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction.toLowerCase() !== 'datepicker' && searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction.toLowerCase() !== 'eventpicker') {
    throw new Error('For the leftInputFieldFunction, please enter "datePicker", "eventPicker", or an empty string.')
  }

  if (searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction !== '' && searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction.toLowerCase() !== 'datePicker' && searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction.toLowerCase() !== 'eventPicker') {
    throw new Error('For the rightInputFieldFunction, please enter "datePicker", "eventPicker", or an empty string.')
  }

  if (searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction === 'datePicker' && searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction === 'datePicker') {
    throw new Error('Both input fields cannot be of the same type. One must be "datePicker" and the other "eventPicker". Check rightInputFieldFunction and leftInputFieldFunction.')
  }

  if (searchInputObj.inputFields.inputFieldTypes.rightInputFieldFunction === 'eventPicker' && searchInputObj.inputFields.inputFieldTypes.leftInputFieldFunction === 'eventPicker') {
    throw new Error('Both input fields cannot be of the same type. One must be "datePicker" and the other "eventPicker". Check rightInputFieldFunction and leftInputFieldFunction.')
  }

  if (typeof searchInputObj.inputFields.text.leftInputFieldTextContent !== 'string') {
    throw new Error('The leftInputFieldTextContent must be a string. (An empty string is fine, but no numbers, booleans, or other non-string types.)')
  }

  if (typeof searchInputObj.inputFields.text.rightInputFieldTextContent !== 'string') {
    throw new Error('The rightInputFieldTextContent must be a string. (An empty string is fine, but no numbers, booleans, or other non-string types.)')
  }

  if (typeof searchInputObj.buttons.doesDetailsButtonExist !== 'boolean') {
    throw new Error('Please enter a valid boolean (true or false) for doesDetailsButtonExist.')
  }

  if (typeof searchInputObj.buttons.text.goButtonTextContent !== 'string') {
    throw new Error('The goButtonTextContent must be a string. (An empty string is fine, but no numbers, booleans, or other non-string types.)')
  }

  if (typeof searchInputObj.buttons.text.detailsButtonTextContent !== 'string') {
    throw new Error('The detailsButtonTextContent must be a string. (An empty string is fine, but no numbers, booleans, or other non-string types.)')
  }

})()

adjustOrientation();

function adjustOrientation() {
  if (mobileView) {
    stackDependentStyle = {
      leftInputField: {
        display: 'block',
        marginTop: '15px',
        marginRight: 'auto',
        marginBottom: '15px',
        marginLeft: 'auto',
        width: '200px',
      },
      rightInputField: {
        display: 'block',
        marginTop: '15px',
        marginRight: 'auto',
        marginBottom: '15px',
        marginLeft: 'auto',
        width: '200px',
      },
      detailsButton: {
        marginTop: '40px',
        marginBottom: '40px',
      },
      container: {
        width: 'auto',
      },
    }
  } else if (stackOrientation === 'vertical') {
    stackDependentStyle = {
      leftInputField: {
        display: 'block',
        marginTop: '15px',
        marginRight: 'auto',
        marginBottom: '15px',
        marginLeft: 'auto',
        width: '30vw',
      },
      rightInputField: {
        display: 'block',
        marginTop: '15px',
        marginRight: 'auto',
        marginBottom: '15px',
        marginLeft: 'auto',
        width: '30vw',
      },
      detailsButton: {
        marginTop: '40px',
        marginBottom: '40px',
      },
      container: {
        width: '600px',
      },
    }
  } else {
    stackDependentStyle = {
      leftInputField: {
        display: 'inline-block',
        marginTop: '0px',
        marginRight: '5px',
        marginBottom: '0px',
        marginLeft: '5px',
        width: '200px',
      },
      rightInputField: {
        display: 'inline-block',
        marginTop: '0px',
        marginRight: '5px',
        marginBottom: '0px',
        marginLeft: '5px',
        width: '200px',
      },
      detailsButton: {
        marginTop: '20px',
        marginBottom: '20px',
      },
      container: {
        width: '600px',
      },
    }
  }
}

var FHContainerStyles = {
  border: searchInputObj.container.borderDebug ? '1px dotted red' : '',
  marginTop: '20vh',
  marginRight: 'auto',
  marginBottom: '20vh',
  marginLeft: 'auto',
  position: 'absolute',
  top: '20%',
  left: '0',
  right: '0',
  width: stackDependentStyle.container.width,
}

var FHLeftInputStyles = {
  backgroundColor: searchInputObj.inputFields.backgroundColor.leftInputFieldBackgroundColor || '#ffffff',
  display: stackDependentStyle.leftInputField.display,
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.inputFields.borders.leftInputFieldBorderBottomColor || '#979797',
  borderTopColor: searchInputObj.inputFields.borders.leftInputFieldBorderTopColor || '#979797',
  borderRightColor: searchInputObj.inputFields.borders.leftInputFieldBorderRightColor || '#979797',
  borderLeftColor: searchInputObj.inputFields.borders.leftInputFieldBorderLeftColor || '#979797',
  color: searchInputObj.inputFields.text.leftInputFieldTextColor || '#A09C9C',
  fontFamily: searchInputObj.inputFields.text.leftInputFieldTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.inputFields.text.leftInputFieldTextFontSize || '22px',
  height: '39px',
  marginTop: stackDependentStyle.leftInputField.marginTop,
  marginRight: stackDependentStyle.leftInputField.marginRight,
  marginBottom: stackDependentStyle.leftInputField.marginBottom,
  marginLeft: stackDependentStyle.leftInputField.marginLeft,
  width: stackDependentStyle.leftInputField.width,
}

var FHRightInputStyles = {
  backgroundColor: searchInputObj.inputFields.backgroundColor.rightInputFieldBackgroundColor || '#ffffff',
  display: stackDependentStyle.rightInputField.display,
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.inputFields.borders.rightInputFieldBorderBottomColor || '#979797',
  borderTopColor: searchInputObj.inputFields.borders.rightInputFieldBorderTopColor || '#979797',
  borderRightColor: searchInputObj.inputFields.borders.rightInputFieldBorderRightColor || '#979797',
  borderLeftColor: searchInputObj.inputFields.borders.rightInputFieldBorderLeftColor || '#979797',
  color: searchInputObj.inputFields.text.rightInputFieldTextColor || '#A09C9C',
  fontFamily: searchInputObj.inputFields.text.rightInputFieldTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.inputFields.text.rightInputFieldTextFontSize || '22px',
  height: '39px',
  marginTop: stackDependentStyle.rightInputField.marginTop,
  marginRight: stackDependentStyle.rightInputField.marginRight,
  marginBottom: stackDependentStyle.rightInputField.marginBottom,
  marginLeft: stackDependentStyle.rightInputField.marginLeft,
  width: stackDependentStyle.rightInputField.width,
}

var FHGoButtonStyles = {
  backgroundColor: searchInputObj.buttons.backgroundColor.goButtonBackgroundColor || '#3D89DF',
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.buttons.borders.goButtonBorderBottomColor || '#8CC0FB',
  borderTopColor: searchInputObj.buttons.borders.goButtonBorderTopColor || '#8CC0FB',
  borderRightColor: searchInputObj.buttons.borders.goButtonBorderRightColor || '#8CC0FB',
  borderLeftColor: searchInputObj.buttons.borders.goButtonBorderLeftColor || '#8CC0FB',
  borderRadius: '8px',
  boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
  color: searchInputObj.buttons.text.goButtonTextColor || '#000000',
  fontFamily: searchInputObj.buttons.text.goButtonTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.buttons.text.goButtonTextFontSize || '25px',
  height: '39px',
  marginTop: '0px',
  marginRight: '10px',
  marginBottom: '0px',
  marginLeft: '10px',
  width: '105px',
}

var FHDetailsButtonStyles = {
  backgroundColor: searchInputObj.buttons.backgroundColor.detailsButtonBackgroundColor || '#3D89DF',
  borderBottomWidth: '1px',
  borderTopWidth: '1px',
  borderRightWidth: '1px',
  borderLeftWidth: '1px',
  borderBottomStyle: 'solid',
  borderTopStyle: 'solid',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderBottomColor: searchInputObj.buttons.borders.detailsButtonBorderBottomColor || '#8CC0FB',
  borderTopColor: searchInputObj.buttons.borders.detailsButtonBorderTopColor || '#8CC0FB',
  borderRightColor: searchInputObj.buttons.borders.detailsButtonBorderRightColor || '#8CC0FB',
  borderLeftColor: searchInputObj.buttons.borders.detailsButtonBorderLeftColor || '#8CC0FB',
  borderRadius: '8px',
  boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
  color: searchInputObj.buttons.text.detailsButtonTextColor || '#000000',
  fontFamily: searchInputObj.buttons.text.detailsButtonTextFontName || 'Lucida-Grande, Verdana, sans-serif',
  fontSize: searchInputObj.buttons.text.detailsButtonTextFontSize || '15px',
  height: 'auto',
  marginTop: stackDependentStyle.detailsButton.marginTop,
  marginRight: 'auto',
  marginBottom: stackDependentStyle.detailsButton.marginBottom,
  marginLeft: 'auto',
  padding: '5px',
  width: 'auto',
}

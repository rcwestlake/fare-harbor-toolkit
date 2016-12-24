var FHSearchInput = function(obj) {
  function create(obj) {
    buildHTML(obj)

  }

  return create(obj)
}

function buildHTML(obj) {

  var leftmostFieldBackgroundIcon;
  if (obj.inputFieldIcons.leftmostFieldIconSource) {
    leftmostFieldBackgroundIcon = obj.inputFieldIcons.leftmostFieldIconSource;
  } else {
    leftmostFieldBackgroundIcon = 'images/location.png';
  }

  var secondFieldFromLeftBackgroundIcon;
  if (obj.inputFieldIcons.secondFieldFromLeftIconSource) {
    secondFieldFromLeftBackgroundIcon = obj.inputFieldIcons.secondFieldFromLeftIconSource;
  } else {
    secondFieldFromLeftBackgroundIcon = 'images/calendar.png';
  }

  var leftFieldInputStyles = {
    background: 'url("' +  leftmostFieldBackgroundIcon + '") no-repeat',
    backgroundPosition: obj.inputFieldIcons.leftmostFieldIconPosition || '10px 1px',
    backgroundSize: obj.inputFieldIcons.leftmostFieldIconSize || '28px 39px',
    borderBottomWidth: obj.inputFieldBorders.leftmostFieldBorderBottomWidth || '1px',
    borderTopWidth: obj.inputFieldBorders.leftmostFieldBorderTopWidth || '1px',
    borderRightWidth: obj.inputFieldBorders.leftmostFieldBorderRightWidth || '1px',
    borderLeftWidth: obj.inputFieldBorders.leftmostFieldBorderLeftWidth || '1px',
    borderBottomStyle: obj.inputFieldBorders.leftmostFieldBorderBottomStyle || 'solid',
    borderTopStyle: obj.inputFieldBorders.leftmostFieldBorderTopStyle || 'solid',
    borderRightStyle: obj.inputFieldBorders.leftmostFieldBorderRightStyle || 'solid',
    borderLeftStyle: obj.inputFieldBorders.leftmostFieldBorderLeftStyle || 'solid',
    borderBottomColor: obj.inputFieldBorders.leftmostFieldBorderBottomColor || '#979797',
    borderTopColor: obj.inputFieldBorders.leftmostFieldBorderTopColor || '#979797',
    borderRightColor: obj.inputFieldBorders.leftmostFieldBorderRightColor || '#979797',
    borderLeftColor: obj.inputFieldBorders.leftmostFieldBorderLeftColor || '#979797',
    color: obj.inputFieldText.leftmostFieldTextColor || '#A09C9C',
    fontFamily: 'Palatino-Roman, serif',
    fontSize: '22px',
    height: obj.inputFieldHeightAndWidth.leftmostFieldHeight || '39px',
    margin: '0px 5px',
    textAlign: 'center',
    width: obj.inputFieldHeightAndWidth.leftmostFieldWidth || '200px',
  }
  //need to add text via node and then bring it in from the object with default 'Where To?'

  var leftFieldInput = document.createElement('INPUT');
  document.body.appendChild(leftFieldInput);
  leftFieldInput.classList.add('where-to-input');
  leftFieldInput.style.background = leftFieldInputStyles.background;
  leftFieldInput.style.backgroundPosition = leftFieldInputStyles.backgroundPosition;
  leftFieldInput.style.backgroundSize = leftFieldInputStyles.backgroundSize;
  leftFieldInput.style.borderBottomWidth = leftFieldInputStyles.borderBottomWidth;
  leftFieldInput.style.borderTopWidth = leftFieldInputStyles.borderTopWidth;
  leftFieldInput.style.borderRightWidth = leftFieldInputStyles.borderRightWidth;
  leftFieldInput.style.borderLeftWidth = leftFieldInputStyles.borderLeftWidth;
  leftFieldInput.style.borderBottomStyle = leftFieldInputStyles.borderBottomStyle;
  leftFieldInput.style.borderTopStyle = leftFieldInputStyles.borderTopStyle;
  leftFieldInput.style.borderRightStyle = leftFieldInputStyles.borderRightStyle;
  leftFieldInput.style.borderLeftStyle = leftFieldInputStyles.borderLeftStyle;
  leftFieldInput.style.borderBottomColor = leftFieldInputStyles.borderBottomColor;
  leftFieldInput.style.borderTopColor = leftFieldInputStyles.borderTopColor;
  leftFieldInput.style.borderRightColor = leftFieldInputStyles.borderRightColor;
  leftFieldInput.style.borderLeftColor = leftFieldInputStyles.borderLeftColor;
  leftFieldInput.style.color = leftFieldInputStyles.color;
  leftFieldInput.style.fontFamily = leftFieldInputStyles.fontFamily;
  leftFieldInput.style.fontSize = leftFieldInputStyles.fontSize;
  leftFieldInput.style.height = leftFieldInputStyles.height;
  leftFieldInput.style.margin = leftFieldInputStyles.margin;
  leftFieldInput.style.textAlign = leftFieldInputStyles.textAlign;
  leftFieldInput.style.width = leftFieldInputStyles.width;

  var rightFieldInputStyles = {
    background: 'url("' +  secondFieldFromLeftBackgroundIcon + '") no-repeat',
    backgroundPosition: obj.inputFieldIcons.secondFieldFromLeftIconPosition || '10px 5px',
    backgroundSize: obj.inputFieldIcons.secondFieldFromLeftIconSize || '32px 32px',
    borderBottomWidth: obj.inputFieldBorders.secondFieldFromLeftBorderBottomWidth || '1px',
    borderTopWidth: obj.inputFieldBorders.secondFieldFromLeftBorderTopWidth || '1px',
    borderRightWidth: obj.inputFieldBorders.secondFieldFromLeftBorderRightWidth || '1px',
    borderLeftWidth: obj.inputFieldBorders.secondFieldFromLeftBorderLeftWidth || '1px',
    borderBottomStyle: obj.inputFieldBorders.secondFieldFromLeftBorderBottomStyle || 'solid',
    borderTopStyle: obj.inputFieldBorders.secondFieldFromLeftBorderTopStyle || 'solid',
    borderRightStyle: obj.inputFieldBorders.secondFieldFromLeftBorderRightStyle || 'solid',
    borderLeftStyle: obj.inputFieldBorders.secondFieldFromLeftBorderLeftStyle || 'solid',
    borderBottomColor: obj.inputFieldBorders.secondFieldFromLeftBorderBottomColor || '#979797',
    borderTopColor: obj.inputFieldBorders.secondFieldFromLeftBorderTopColor || '#979797',
    borderRightColor: obj.inputFieldBorders.secondFieldFromLeftBorderRightColor || '#979797',
    borderLeftColor: obj.inputFieldBorders.secondFieldFromLeftBorderLeftColor || '#979797',
    color: obj.inputFieldText.secondFieldFromLeftTextColor || '#A09C9C',
    fontFamily: 'Palatino-Roman, serif',
    fontSize: '22px',
    height: obj.inputFieldHeightAndWidth.secondFieldFromLeftHeight || '39px',
    margin: '0px 5px',
    textAlign: 'center',
    width: obj.inputFieldHeightAndWidth.secondFieldFromLeftWidth ||'200px',
  }
  //need to add in text node as indicated above for this field too

  var rightFieldInput = document.createElement('INPUT');
  document.body.appendChild(rightFieldInput);
  rightFieldInput.classList.add('when-input');
  rightFieldInput.placeholder = obj.inputFieldText.secondFieldFromLeftText || 'When?';
  rightFieldInput.style.background = rightFieldInputStyles.background;
  rightFieldInput.style.backgroundPosition = rightFieldInputStyles.backgroundPosition;
  rightFieldInput.style.backgroundSize = rightFieldInputStyles.backgroundSize;
  rightFieldInput.style.borderBottomWidth = rightFieldInputStyles.borderBottomWidth;
  rightFieldInput.style.borderTopWidth = rightFieldInputStyles.borderTopWidth;
  rightFieldInput.style.borderRightWidth = rightFieldInputStyles.borderRightWidth;
  rightFieldInput.style.borderLeftWidth = rightFieldInputStyles.borderLeftWidth;
  rightFieldInput.style.borderBottomStyle = rightFieldInputStyles.borderBottomStyle;
  rightFieldInput.style.borderTopStyle = rightFieldInputStyles.borderTopStyle;
  rightFieldInput.style.borderRightStyle = rightFieldInputStyles.borderRightStyle;
  rightFieldInput.style.borderLeftStyle = rightFieldInputStyles.borderLeftStyle;
  rightFieldInput.style.borderBottomColor = rightFieldInputStyles.borderBottomColor;
  rightFieldInput.style.borderTopColor = rightFieldInputStyles.borderTopColor;
  rightFieldInput.style.borderRightColor = rightFieldInputStyles.borderRightColor;
  rightFieldInput.style.borderLeftColor = leftFieldInputStyles.borderLeftColor;
  rightFieldInput.style.color = rightFieldInputStyles.color;
  rightFieldInput.style.fontFamily = rightFieldInputStyles.fontFamily;
  rightFieldInput.style.fontSize = rightFieldInputStyles.fontSize;
  rightFieldInput.style.height = rightFieldInputStyles.height;
  rightFieldInput.style.margin = rightFieldInputStyles.margin;
  rightFieldInput.style.textAlign = rightFieldInputStyles.textAlign;
  rightFieldInput.style.width = rightFieldInputStyles.width;

  var goButtonStyles = {
    background: '#3D89DF',
    border: '1px solid #8CC0FB',
    borderRadius: '8px',
    boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
    color: '#000000',
    fontFamily: 'Palatino-Bold, serif',
    fontSize: '25px',
    height: '39px',
    margin: '0px 10px',
    width: '105px',
  }

  var goButton = document.createElement('BUTTON');
  var goButtonText = document.createTextNode('Go!');
  goButton.appendChild(goButtonText);
  document.body.appendChild(goButton);
  goButton.classList.add('go-button');
  goButton.style.background = goButtonStyles.background;
  goButton.style.border = goButtonStyles.border;
  goButton.style.borderRadius = goButtonStyles.borderRadius;
  goButton.style.boxShadow = goButtonStyles.boxShadow;
  goButton.style.color = goButtonStyles.color;
  goButton.style.fontFamily = goButtonStyles.fontFamily;
  goButton.style.fontSize = goButtonStyles.fontSize;
  goButton.style.height = goButtonStyles.height;
  goButton.style.margin = goButtonStyles.margin;
  goButton.style.width = goButtonStyles.width;

}

document.addEventListener('click', function(event) {
  if (event.target.className.toLowerCase() === 'go-button') {
    console.log('the button works');
    //insert API call, etc.
  }
});

document.addEventListener('mouseover', function(event) {
  if (event.target.className.toLowerCase() === 'go-button') {
    event.target.style.backgroundColor = '#88BCF8';
    event.target.style.cursor = 'pointer';
  }
});

document.addEventListener('mouseout', function(event) {
  if (event.target.className.toLowerCase() === 'go-button') {
    event.target.style.backgroundColor = '#3D89DF';
  }
});

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
    // border: '1px solid #979797',
    borderBottomWidth: obj.inputFieldBorders.leftmostFieldBorderBottomWidth || '1px',
    color: '#A09C9C',
    fontFamily: 'Palatino-Roman, serif',
    fontSize: '22px',
    height: obj.inputFieldHeightAndWidth.leftmostFieldHeight || '39px',
    margin: '0px 5px',
    textAlign: 'center',
    width: obj.inputFieldHeightAndWidth.leftmostFieldWidth || '200px',
  }

  var leftFieldInput = document.createElement('INPUT');
  document.body.appendChild(leftFieldInput);
  leftFieldInput.classList.add('where-to-input');
  leftFieldInput.placeholder = obj.inputFieldText.leftmostFieldText || 'Where To?';
  leftFieldInput.style.background = leftFieldInputStyles.background;
  leftFieldInput.style.backgroundPosition = leftFieldInputStyles.backgroundPosition;
  leftFieldInput.style.backgroundSize = leftFieldInputStyles.backgroundSize;
  leftFieldInput.style.borderBottomWidth = leftFieldInputStyles.borderBottomWidth;
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
    border: '1px solid #979797',
    color: '#A09C9C',
    fontFamily: 'Palatino-Roman, serif',
    fontSize: '22px',
    height: obj.inputFieldHeightAndWidth.secondFieldFromLeftHeight || '39px',
    margin: '0px 5px',
    textAlign: 'center',
    width: obj.inputFieldHeightAndWidth.secondFieldFromLeftWidth ||'200px',
  }

  var rightFieldInput = document.createElement('INPUT');
  document.body.appendChild(rightFieldInput);
  rightFieldInput.classList.add('when-input');
  rightFieldInput.placeholder = obj.inputFieldText.secondFieldFromLeftText || 'When?';
  rightFieldInput.style.background = rightFieldInputStyles.background;
  rightFieldInput.style.backgroundPosition = rightFieldInputStyles.backgroundPosition;
  rightFieldInput.style.backgroundSize = rightFieldInputStyles.backgroundSize;
  rightFieldInput.style.border = rightFieldInputStyles.border;
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

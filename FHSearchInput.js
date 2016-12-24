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

  var whereToInputStyles = {
    background: 'url("' +  leftmostFieldBackgroundIcon + '") no-repeat',
    backgroundPosition: '10px 1px',
    backgroundSize: '28px 39px',
    border: '1px solid #979797',
    color: '#A09C9C',
    fontFamily: 'Palatino-Roman, serif',
    fontSize: '22px',
    height: obj.inputFieldHeightAndWidth.leftmostFieldHeight || '39px',
    margin: '0px 5px',
    textAlign: 'center',
    width: obj.inputFieldHeightAndWidth.leftmostFieldWidth || '200px',
  }

  var whereToInput = document.createElement('INPUT');
  document.body.appendChild(whereToInput);
  whereToInput.classList.add('where-to-input');
  whereToInput.placeholder = obj.inputFieldText.leftmostFieldText || 'Where To?';
  whereToInput.style.background = whereToInputStyles.background;
  whereToInput.style.backgroundPosition = whereToInputStyles.backgroundPosition;
  whereToInput.style.backgroundSize = whereToInputStyles.backgroundSize;
  whereToInput.style.border = whereToInputStyles.border;
  whereToInput.style.color = whereToInputStyles.color;
  whereToInput.style.fontFamily = whereToInputStyles.fontFamily;
  whereToInput.style.fontSize = whereToInputStyles.fontSize;
  whereToInput.style.height = whereToInputStyles.height;
  whereToInput.style.margin = whereToInputStyles.margin;
  whereToInput.style.textAlign = whereToInputStyles.textAlign;
  whereToInput.style.width = whereToInputStyles.width;

  var whenInputStyles = {
    background: 'url("' +  secondFieldFromLeftBackgroundIcon + '") no-repeat',
    backgroundPosition: '10px 5px',
    backgroundSize: '32px 32px',
    border: '1px solid #979797',
    color: '#A09C9C',
    fontFamily: 'Palatino-Roman, serif',
    fontSize: '22px',
    height: obj.inputFieldHeightAndWidth.secondFieldFromLeftHeight || '39px',
    margin: '0px 5px',
    textAlign: 'center',
    width: obj.inputFieldHeightAndWidth.secondFieldFromLeftWidth ||'200px',
  }

  var whenInput = document.createElement('INPUT');
  document.body.appendChild(whenInput);
  whenInput.classList.add('when-input');
  whenInput.placeholder = obj.inputFieldText.secondFieldFromLeftText || 'When?';
  whenInput.style.background = whenInputStyles.background;
  whenInput.style.backgroundPosition = whenInputStyles.backgroundPosition;
  whenInput.style.backgroundSize = whenInputStyles.backgroundSize;
  whenInput.style.border = whenInputStyles.border;
  whenInput.style.color = whenInputStyles.color;
  whenInput.style.fontFamily = whenInputStyles.fontFamily;
  whenInput.style.fontSize = whenInputStyles.fontSize;
  whenInput.style.height = whenInputStyles.height;
  whenInput.style.margin = whenInputStyles.margin;
  whenInput.style.textAlign = whenInputStyles.textAlign;
  whenInput.style.width = whenInputStyles.width;

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

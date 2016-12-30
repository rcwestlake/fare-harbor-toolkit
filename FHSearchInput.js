var FHSearchInput = function(obj) {
  function create(obj) {
    buildHTML(obj)

  }

  return create(obj)
}

function buildHTML(obj) {

  var leftmostFieldBackgroundIcon;
  if (obj.inputFieldTypes.leftmostFieldType === '' || obj.inputFieldTypes.leftmostFieldType === 'SELECT') {
    leftmostFieldBackgroundIcon === '';
  } else if (obj.inputFieldIcons.leftmostFieldIconSource) {
    leftmostFieldBackgroundIcon = obj.inputFieldIcons.leftmostFieldIconSource;
  } else {
    leftmostFieldBackgroundIcon = 'images/location.png';
  }

  var secondFieldFromLeftBackgroundIcon;
  if (obj.inputFieldTypes.secondFieldFromLeftType === '' || obj.inputFieldTypes.secondFieldFromLeftType === 'SELECT') {
    secondFieldFromLeftBackgroundIcon === '';
  } else if (obj.inputFieldIcons.secondFieldFromLeftIconSource) {
    secondFieldFromLeftBackgroundIcon = obj.inputFieldIcons.secondFieldFromLeftIconSource;
  } else {
    secondFieldFromLeftBackgroundIcon = 'images/calendar.png';
  }

  var leftFieldInputStyles = {
    background: 'url("' +  leftmostFieldBackgroundIcon + '") no-repeat' || null,
    backgroundColor: obj.inputFieldBackgroundColor.leftmostFieldBackgroundColor || '#ffffff',
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
    fontFamily: obj.inputFieldText.leftmostFieldTextFontName || 'Palatino-Roman, serif',
    fontSize: obj.inputFieldText.leftmostFieldTextFontSize || '22px',
    height: obj.inputFieldHeightAndWidth.leftmostFieldHeight || '39px',
    marginTop: obj.inputFieldMarginsAndPadding.leftmostFieldMarginTop || '0px',
    marginRight: obj.inputFieldMarginsAndPadding.leftmostFieldMarginRight || '5px',
    marginBottom: obj.inputFieldMarginsAndPadding.leftmostFieldMarginBottom || '0px',
    marginLeft: obj.inputFieldMarginsAndPadding.leftmostFieldMarginLeft || '5px',
    paddingTop: obj.inputFieldMarginsAndPadding.leftmostFieldPaddingTop || '0px',
    paddingRight: obj.inputFieldMarginsAndPadding.leftmostFieldPaddingRight || '0px',
    paddingBottom: obj.inputFieldMarginsAndPadding.leftmostFieldPaddingBottom || '0px',
    paddingLeft: obj.inputFieldMarginsAndPadding.leftmostFieldPaddingLeft || '0px',
    textAlign: obj.inputFieldText.leftmostFieldTextAlign || 'center',
    width: obj.inputFieldHeightAndWidth.leftmostFieldWidth || '200px',
  }

  var leftFieldType = obj.inputFieldTypes.leftmostFieldType || 'SELECT';

  var leftFieldInput = document.createElement(leftFieldType);
  document.body.appendChild(leftFieldInput);
  leftFieldInput.classList.add('left-field-input');
  leftFieldInput.value = obj.inputFieldText.leftmostFieldTextContent || 'Where To?';
  leftFieldInput.style.background = leftFieldInputStyles.background;
  leftFieldInput.style.backgroundColor = leftFieldInputStyles.backgroundColor;
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
  leftFieldInput.style.marginTop = leftFieldInputStyles.marginTop;
  leftFieldInput.style.marginRight = leftFieldInputStyles.marginRight;
  leftFieldInput.style.marginBottom = leftFieldInputStyles.marginBottom;
  leftFieldInput.style.marginLeft = leftFieldInputStyles.marginLeft;
  leftFieldInput.style.paddingTop = leftFieldInputStyles.paddingTop;
  leftFieldInput.style.paddingRight = leftFieldInputStyles.paddingRight;
  leftFieldInput.style.paddingBottom = leftFieldInputStyles.paddingBottom;
  leftFieldInput.style.paddingLeft = leftFieldInputStyles.paddingLeft;
  leftFieldInput.style.textAlign = leftFieldInputStyles.textAlign;
  leftFieldInput.style.width = leftFieldInputStyles.width;

  var rightFieldInputStyles = {
    background: 'url("' +  secondFieldFromLeftBackgroundIcon + '") no-repeat' || null,
    backgroundColor: obj.inputFieldBackgroundColor.secondFieldFromLeftBackgroundColor || '#ffffff',
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
    fontFamily: obj.inputFieldText.secondFieldFromLeftTextFontName || 'Palatino-Roman, serif',
    fontSize: obj.inputFieldText.secondFieldFromLeftTextFontSize || '22px',
    height: obj.inputFieldHeightAndWidth.secondFieldFromLeftHeight || '39px',
    marginTop: obj.inputFieldMarginsAndPadding.secondFieldFromLeftMarginTop || '0px',
    marginRight: obj.inputFieldMarginsAndPadding.secondFieldFromLeftMarginRight || '5px',
    marginBottom: obj.inputFieldMarginsAndPadding.secondFieldFromLeftMarginBottom || '0px',
    marginLeft: obj.inputFieldMarginsAndPadding.secondFieldFromLeftMarginLeft || '5px',
    paddingTop: obj.inputFieldMarginsAndPadding.secondFieldFromLeftPaddingTop || '0px',
    paddingRight: obj.inputFieldMarginsAndPadding.secondFieldFromLeftPaddingRight || '0px',
    paddingBottom: obj.inputFieldMarginsAndPadding.secondFieldFromLeftPaddingBottom || '0px',
    paddingLeft: obj.inputFieldMarginsAndPadding.secondFieldFromLeftPaddingLeft || '0px',
    textAlign: obj.inputFieldText.secondFieldFromLeftTextAlign || 'center',
    width: obj.inputFieldHeightAndWidth.secondFieldFromLeftWidth ||'200px',
  }

  var rightFieldType = obj.inputFieldTypes.secondFieldFromLeftType || 'SELECT';

  var rightFieldInput = document.createElement(rightFieldType);
  document.body.appendChild(rightFieldInput);
  rightFieldInput.classList.add('right-field-input');
  rightFieldInput.value = obj.inputFieldText.secondFieldFromLeftTextContent || 'When?';
  if (rightFieldType === 'SELECT') {
    var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currMonth = allMonths[new Date().getMonth()];
    var nextMonth = {
      'January': 'February',
      'February': 'March',
      'March': 'April',
      'April': 'May',
      'May': 'June',
      'June': 'July',
      'July': 'August',
      'August': 'September',
      'September': 'October',
      'October': 'November',
      'November': 'December',
      'December': 'January',
    };
    var currMonthPlusOne = nextMonth[currMonth];
    var currMonthPlusTwo = nextMonth[currMonthPlusOne];
    var currMonthPlusThree = nextMonth[currMonthPlusTwo];
    var currMonthPlusFour = nextMonth[currMonthPlusThree];
    var currYear = new Date().getFullYear();
    var yearOne;
    var yearTwo;
    var yearThree;
    var yearFour;
    if (currMonthPlusOne === 'January') {
      yearOne = new Date().getFullYear() + 1;
    } else {
      yearOne = currYear;
    }
    if (currMonthPlusTwo === 'January') {
      yearTwo = new Date().getFullYear() + 1;
    } else {
      yearTwo = yearOne;
    }
    if (currMonthPlusThree === 'January') {
      yearThree = new Date().getFullYear() + 1;
    } else {
      yearThree = yearTwo;
    }
    if (currMonthPlusFour === 'January') {
      yearFour = new Date().getFullYear() + 1;
    } else {
      yearFour = yearThree;
    }

    var opt0 = document.createElement('OPTION');
    rightFieldInput.appendChild(opt0);
    var text0 = document.createTextNode(obj.inputFieldText.secondFieldFromLeftTextContent || 'When?');
    opt0.appendChild(text0);
    var opt1 = document.createElement('OPTION');
    rightFieldInput.appendChild(opt1);
    var text1 = document.createTextNode(currMonth + ' ' + currYear);
    opt1.appendChild(text1);
    var opt2 = document.createElement('OPTION');
    rightFieldInput.appendChild(opt2);
    var text2 = document.createTextNode(currMonthPlusOne + ' ' + yearOne);
    opt2.appendChild(text2);
    var opt3 = document.createElement('OPTION');
    rightFieldInput.appendChild(opt3);
    var text3 = document.createTextNode(currMonthPlusTwo + ' ' + yearTwo);
    opt3.appendChild(text3);
    var opt4 = document.createElement('OPTION');
    rightFieldInput.appendChild(opt4);
    var text4 = document.createTextNode(currMonthPlusThree + ' ' + yearThree);
    opt4.appendChild(text4);
    var opt5 = document.createElement('OPTION');
    rightFieldInput.appendChild(opt5);
    var text5 = document.createTextNode(currMonthPlusFour + ' ' + yearFour);
    opt5.appendChild(text5);
  }

  rightFieldInput.style.background = rightFieldInputStyles.background;
  rightFieldInput.style.backgroundColor = rightFieldInputStyles.backgroundColor;
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
  rightFieldInput.style.marginTop = rightFieldInputStyles.marginTop;
  rightFieldInput.style.marginRight = rightFieldInputStyles.marginRight;
  rightFieldInput.style.marginBottom = rightFieldInputStyles.marginBottom;
  rightFieldInput.style.marginLeft = rightFieldInputStyles.marginLeft;
  rightFieldInput.style.paddingTop = rightFieldInputStyles.paddingTop;
  rightFieldInput.style.paddingRight = rightFieldInputStyles.paddingRight;
  rightFieldInput.style.paddingBottom = rightFieldInputStyles.paddingBottom;
  rightFieldInput.style.paddingLeft = rightFieldInputStyles.paddingLeft;
  rightFieldInput.style.textAlign = rightFieldInputStyles.textAlign;
  rightFieldInput.style.width = rightFieldInputStyles.width;

  var goButtonStyles = {
    backgroundColor: obj.buttonsBackgroundColor.leftmostButtonBackgroundColor || '#3D89DF',
    borderBottomWidth: obj.buttonsBorders.leftmostButtonBorderBottomWidth || '1px',
    borderTopWidth: obj.buttonsBorders.leftmostButtonBorderTopWidth || '1px',
    borderRightWidth: obj.buttonsBorders.leftmostButtonBorderRightWidth || '1px',
    borderLeftWidth: obj.buttonsBorders.leftmostButtonBorderLeftWidth || '1px',
    borderBottomStyle: obj.buttonsBorders.leftmostButtonBorderBottomStyle || 'solid',
    borderTopStyle: obj.buttonsBorders.leftmostButtonBorderTopStyle || 'solid',
    borderRightStyle: obj.buttonsBorders.leftmostButtonBorderRightStyle || 'solid',
    borderLeftStyle: obj.buttonsBorders.leftmostButtonBorderLeftStyle || 'solid',
    borderBottomColor: obj.buttonsBorders.leftmostButtonBorderBottomColor || '#8CC0FB',
    borderTopColor: obj.buttonsBorders.leftmostButtonBorderTopColor || '#8CC0FB',
    borderRightColor: obj.buttonsBorders.leftmostButtonBorderRightColor || '#8CC0FB',
    borderLeftColor: obj.buttonsBorders.leftmostButtonBorderLeftColor || '#8CC0FB',
    borderRadius: obj.buttonsBorders.leftmostButtonBorderRadius || '8px',
    boxShadow: obj.buttonsBellsAndWhistles.leftmostButtonBoxShadow || '0 3px 3px 0 rgba(0,0,0,0.50)',
    color: obj.buttonsText.leftmostButtonTextColor || '#000000',
    fontFamily: obj.buttonsText.leftmostButtonTextFontName || 'Palatino-Bold, serif',
    fontSize: obj.buttonsText.leftmostButtonTextFontSize || '25px',
    height: obj.buttonsHeightAndWidth.leftmostButtonHeight || '39px',
    marginTop: obj.buttonsMarginsAndPadding.leftmostButtonMarginTop || '0px',
    marginRight: obj.buttonsMarginsAndPadding.leftmostButtonMarginRight || '10px',
    marginBottom: obj.buttonsMarginsAndPadding.leftmostButtonMarginBottom || '0px',
    marginLeft: obj.buttonsMarginsAndPadding.leftmostButtonMarginLeft || '10px',
    paddingTop: obj.buttonsMarginsAndPadding.leftmostButtonPaddingTop || '0px',
    paddingRight: obj.buttonsMarginsAndPadding.leftmostButtonPaddingRight || '0px',
    paddingBottom: obj.buttonsMarginsAndPadding.leftmostButtonPaddingBottom || '0px',
    paddingLeft: obj.buttonsMarginsAndPadding.leftmostButtonPaddingLeft || '0px',
    width: obj.buttonsHeightAndWidth.leftmostButtonWidth || '105px',
  }

  var goButtonContent = obj.buttonsText.leftmostButtonTextContent || 'Go!';

  var goButton = document.createElement('BUTTON');
  var goButtonText = document.createTextNode(goButtonContent);
  goButton.appendChild(goButtonText);
  document.body.appendChild(goButton);
  goButton.classList.add('go-button');
  goButton.style.backgroundColor = goButtonStyles.backgroundColor;
  goButton.style.borderBottomWidth = goButtonStyles.borderBottomWidth;
  goButton.style.borderTopWidth = goButtonStyles.borderTopWidth;
  goButton.style.borderRightWidth = goButtonStyles.borderRightWidth;
  goButton.style.borderLeftWidth = goButtonStyles.borderLeftWidth;
  goButton.style.borderBottomStyle = goButtonStyles.borderBottomStyle;
  goButton.style.borderTopStyle = goButtonStyles.borderTopStyle;
  goButton.style.borderRightStyle = goButtonStyles.borderRightStyle;
  goButton.style.borderLeftStyle = goButtonStyles.borderLeftStyle;
  goButton.style.borderBottomColor = goButtonStyles.borderBottomColor;
  goButton.style.borderTopColor = goButtonStyles.borderTopColor;
  goButton.style.borderRightColor = goButtonStyles.borderRightColor;
  goButton.style.borderLeftColor = goButtonStyles.borderLeftColor;
  goButton.style.borderRadius = goButtonStyles.borderRadius;
  goButton.style.boxShadow = goButtonStyles.boxShadow;
  goButton.style.color = goButtonStyles.color;
  goButton.style.fontFamily = goButtonStyles.fontFamily;
  goButton.style.fontSize = goButtonStyles.fontSize;
  goButton.style.height = goButtonStyles.height;
  goButton.style.marginTop = goButtonStyles.marginTop;
  goButton.style.marginRight = goButtonStyles.marginRight;
  goButton.style.marginBottom = goButtonStyles.marginBottom;
  goButton.style.marginLeft = goButtonStyles.marginLeft;
  goButton.style.paddingTop = goButtonStyles.paddingTop;
  goButton.style.paddingRight = goButtonStyles.paddingRight;
  goButton.style.paddingBottom = goButtonStyles.paddingBottom;
  goButton.style.paddingLeft = goButtonStyles.paddingLeft;
  goButton.style.width = goButtonStyles.width;

  var companyName = obj.shortname;
  var eventName;
  var targetID;
  var itemsArray = [];
  var month;
  var year;

  //the dropdown
  window.addEventListener('load', function () {
    var hitAPI = new XMLHttpRequest();
    var url = 'https://demo.fareharbor.com/api/external/v1/companies/' + companyName + '/items/?api-app=5fa25381-5ec6-4e86-8b4e-a95735beffa4&api-user=1be378f8-8a6f-4788-b7f0-c2c9b02ca009';
    hitAPI.open('GET', url, true);
    hitAPI.send();
    hitAPI.onreadystatechange = function() {
      if (hitAPI.readyState === XMLHttpRequest.DONE) {
        if (hitAPI.status === 200) {
          var JSONObj = JSON.parse(hitAPI.responseText);
          var items = JSONObj["items"];
          if (leftFieldType === 'SELECT') {
            var opt0 = document.createElement('OPTION');
            leftFieldInput.appendChild(opt0);
            var text0 = document.createTextNode(obj.inputFieldText.leftmostFieldTextContent || 'Where To?');
            opt0.appendChild(text0);
            for (var i = 0; i < items.length; i++) {
              var opt = document.createElement('OPTION');
              leftFieldInput.appendChild(opt);
              var text1 = document.createTextNode(items[i]["name"]);
              var text2 = items[i]["name"];
              opt.appendChild(text1);
              itemsArray.push({
                name: items[i]["name"],
                id: items[i]["pk"]
              });
              document.addEventListener('change', function () {
                if (event.target.className.toLowerCase() === 'left-field-input') {
                    eventName = leftFieldInput.value;
                    var target = itemsArray.filter(function(item){
                        return item.name === eventName
                      });
                      targetID = target[0].id;
                  }
                });
            }
          }
        } else {
          console.error('There was a problem with the API call.');
        }
      }
    }
    });

  document.addEventListener('click', function(event) {
    if (event.target.className.toLowerCase() === 'left-field-input' && obj.inputFieldText.clearLeftmostFieldTextOnClick) {
      document.querySelector('.left-field-input').value = '';
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target.className.toLowerCase() === 'right-field-input' && obj.inputFieldText.clearSecondFieldFromLeftOnClick) {
      document.querySelector('.right-field-input').value = '';
    }
  });

  document.addEventListener('change', function () {
  if (event.target.className.toLowerCase() === 'right-field-input') {
    var target = document.querySelector('.right-field-input').value;
    var Jan = /Jan?/;
    var Feb = /Feb?/;
    var Mar = /Mar?/;
    var Apr = /Apr?/;
    var May = /May?/;
    var Jun = /Jun?/;
    var Jul = /Jul?/;
    var Aug = /Aug?/;
    var Sep = /Sep?/;
    var Oct = /Oct?/;
    var Nov = /Nov?/;
    var Dec = /Dec?/;
    var y16 = /[6]/g;
    var y17 = /[7]/g;
    var y18 = /[8]/g;
    var y19 = /[9]/g;

    if (Jan.test(target)) {
      month = '01';
    } else if (Feb.test(target)) {
      month = '02';
    } else if (Mar.test(target)) {
      month = '03';
    } else if (Apr.test(target)) {
      month = '04';
    } else if (May.test(target)) {
      month = '05';
    } else if (Jun.test(target)) {
      month = '06';
    } else if (Jul.test(target)) {
      month = '07';
    } else if (Aug.test(target)) {
      month = '08';
    } else if (Sep.test(target)) {
      month = '09';
    } else if (Oct.test(target)) {
      month = '10';
    } else if (Nov.test(target)) {
      month = '11';
    } else if (Dec.test(target)) {
      month = '12';
    }

    if (y16.test(target)) {
      year = '2016';
    } else if (y17.test(target)) {
      year = '2017';
    } else if (y18.test(target)) {
      year = '2018';
    } else if (y19.test(target)) {
      year = '2019';
    }

  }
    });

  document.addEventListener('mouseout', function(event) {
    if (event.target.className.toLowerCase() === 'go-button') {
      event.target.style.backgroundColor = obj.buttonsBackgroundColor.leftmostButtonBackgroundColor || '#3D89DF';
    }
  });

  document.addEventListener('mouseover', function(event) {
    if (event.target.className.toLowerCase() === 'go-button') {
      event.target.style.backgroundColor = obj.buttonsBackgroundColor.leftmostButtonBackgroundColorHover || '#88BCF8';
      event.target.style.cursor = 'pointer';
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target.className.toLowerCase() === 'go-button') {
      var hitAPI = new XMLHttpRequest();
      var url;
      if (targetID && month && year) {
        url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + year + '/' + month + '/';
      } else if (targetID && !month) {
        var currYear = new Date().getFullYear();
        var currMonth = new Date().getMonth() + 1;
        url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/';
      } else {
        url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/?full-items=yes';
      }
      hitAPI.open('GET', url, true);
      hitAPI.send();
      hitAPI.onreadystatechange = function() {
        if (hitAPI.readyState === XMLHttpRequest.DONE) {
          if (hitAPI.status === 200) {
            window.location = url;
          } else {
            console.error('There was a problem with the API call.');
          }
        }
      }
    }
  });

}

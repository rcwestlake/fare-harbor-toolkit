var FHSearchInput = function(obj) {
  function create(obj) {
    buildSearchInputHTML(obj)

  }

  return create(obj)
}

//just set default margins and padding 

function buildSearchInputHTML(obj) {

  var eventInputField;
  var eventInputFieldHTMLType;
  var eventInputFieldTextContent;
  var eventInputClass;
  var dateInputField;
  var dateInputFieldHTMLType;
  var dateInputFieldTextContent;
  var dateInputClass;
  var companyName = obj.shortname;
  var eventName;
  var targetID;
  var itemsArray = [];
  var month;
  var year;
  var container;
  var detailsButton;
  var detailsButtonExists = obj.doesDetailsButtonExist;

  createContainer(obj);

  function createContainer(obj) {
    var containerStyles = {
      border: obj.container.borderDebug ? '1px dotted red' : '',
      marginTop: obj.container.marginTop || '40vh',
      marginRight: obj.container.marginRight || 'auto',
      marginBottom: obj.container.marginBottom || '40vh',
      marginLeft: obj.container.marginLeft || 'auto',
    }

    container = document.createElement('DIV');
    document.body.appendChild(container);
    container.classList.add('container');
    container.style.border = containerStyles.border;
    container.style.marginTop = containerStyles.marginTop;
    container.style.marginRight = containerStyles.marginRight;
    container.style.marginBottom = containerStyles.marginBottom;
    container.style.marginLeft = containerStyles.marginLeft;
    container.style.textAlign = 'center';
  }

  createLeftInputField(obj);

  function createLeftInputField(obj) {
    var leftFieldHTMLType = obj.inputFieldTypes.leftInputFieldHTMLType || 'SELECT';
    var leftFieldFunction = obj.inputFieldTypes.leftInputFieldFunction || 'eventPicker';

    var leftFieldInputStyles = {
      backgroundColor: obj.inputFieldBackgroundColor.leftInputFieldBackgroundColor || '#ffffff',
      backgroundPosition: obj.inputFieldIcons.leftInputFieldIconPosition || '10px 1px',
      backgroundSize: obj.inputFieldIcons.leftInputFieldIconSize || '28px 39px',
      borderBottomWidth: obj.inputFieldBorders.leftInputFieldBorderBottomWidth || '1px',
      borderTopWidth: obj.inputFieldBorders.leftInputFieldBorderTopWidth || '1px',
      borderRightWidth: obj.inputFieldBorders.leftInputFieldBorderRightWidth || '1px',
      borderLeftWidth: obj.inputFieldBorders.leftInputFieldBorderLeftWidth || '1px',
      borderBottomStyle: obj.inputFieldBorders.leftInputFieldBorderBottomStyle || 'solid',
      borderTopStyle: obj.inputFieldBorders.leftInputFieldBorderTopStyle || 'solid',
      borderRightStyle: obj.inputFieldBorders.leftInputFieldBorderRightStyle || 'solid',
      borderLeftStyle: obj.inputFieldBorders.leftInputFieldBorderLeftStyle || 'solid',
      borderBottomColor: obj.inputFieldBorders.leftInputFieldBorderBottomColor || '#979797',
      borderTopColor: obj.inputFieldBorders.leftInputFieldBorderTopColor || '#979797',
      borderRightColor: obj.inputFieldBorders.leftInputFieldBorderRightColor || '#979797',
      borderLeftColor: obj.inputFieldBorders.leftInputFieldBorderLeftColor || '#979797',
      color: obj.inputFieldText.leftInputFieldTextColor || '#A09C9C',
      fontFamily: obj.inputFieldText.leftInputFieldTextFontName || 'Palatino-Roman, serif',
      fontSize: obj.inputFieldText.leftInputFieldTextFontSize || '22px',
      height: obj.inputFieldHeightAndWidth.leftInputFieldHeight || '39px',
      marginTop: obj.inputFieldMarginsAndPadding.leftInputFieldMarginTop || '0px',
      marginRight: obj.inputFieldMarginsAndPadding.leftInputFieldMarginRight || '5px',
      marginBottom: obj.inputFieldMarginsAndPadding.leftInputFieldMarginBottom || '0px',
      marginLeft: obj.inputFieldMarginsAndPadding.leftInputFieldMarginLeft || '5px',
      paddingTop: obj.inputFieldMarginsAndPadding.leftInputFieldPaddingTop || '0px',
      paddingRight: obj.inputFieldMarginsAndPadding.leftInputFieldPaddingRight || '0px',
      paddingBottom: obj.inputFieldMarginsAndPadding.leftInputFieldPaddingBottom || '0px',
      paddingLeft: obj.inputFieldMarginsAndPadding.leftInputFieldPaddingLeft || '0px',
      textAlign: obj.inputFieldText.leftInputFieldTextAlign || 'center',
      width: obj.inputFieldHeightAndWidth.leftInputFieldWidth || '200px',
    }

    var leftFieldInput = document.createElement(leftFieldHTMLType);
    container.appendChild(leftFieldInput);
    leftFieldInput.classList.add('left-field-input');
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

    assignLeftFieldFunction(
      {
      func: leftFieldFunction,
      input: leftFieldInput,
      type: leftFieldHTMLType,
      text: obj.inputFieldText.leftInputFieldTextContent,
    })
  }

  function assignLeftFieldFunction(options) {
    if (options.func === 'eventPicker') {
      eventInputField = options.input;
      eventInputFieldHTMLType = options.type;
      eventInputFieldTextContent = options.text || 'Which Event?';
      eventInputClass = 'left-field-input';
    } else if (options.func === 'datePicker') {
      dateInputField = options.input;
      dateInputFieldHTMLType = options.type;
      dateInputFieldTextContent = options.text || 'When?';
      dateInputClass = 'left-field-input';
    }
  }

  createRightInputField(obj);

  function createRightInputField(obj) {
    var rightFieldHTMLType = obj.inputFieldTypes.rightmostFieldHTMLType || 'SELECT';
    var rightFieldFunction = obj.inputFieldTypes.rightInputFieldFunction || 'datePicker';

    var rightFieldInputStyles = {
      backgroundColor: obj.inputFieldBackgroundColor.rightInputFieldBackgroundColor || '#ffffff',
      backgroundPosition: obj.inputFieldIcons.rightInputFieldIconPosition || '10px 5px',
      backgroundSize: obj.inputFieldIcons.rightInputFieldIconSize || '32px 32px',
      borderBottomWidth: obj.inputFieldBorders.rightInputFieldBorderBottomWidth || '1px',
      borderTopWidth: obj.inputFieldBorders.rightInputFieldBorderTopWidth || '1px',
      borderRightWidth: obj.inputFieldBorders.rightInputFieldBorderRightWidth || '1px',
      borderLeftWidth: obj.inputFieldBorders.rightInputFieldBorderLeftWidth || '1px',
      borderBottomStyle: obj.inputFieldBorders.rightInputFieldBorderBottomStyle || 'solid',
      borderTopStyle: obj.inputFieldBorders.rightInputFieldBorderTopStyle || 'solid',
      borderRightStyle: obj.inputFieldBorders.rightInputFieldBorderRightStyle || 'solid',
      borderLeftStyle: obj.inputFieldBorders.rightInputFieldBorderLeftStyle || 'solid',
      borderBottomColor: obj.inputFieldBorders.rightInputFieldBorderBottomColor || '#979797',
      borderTopColor: obj.inputFieldBorders.rightInputFieldBorderTopColor || '#979797',
      borderRightColor: obj.inputFieldBorders.rightInputFieldBorderRightColor || '#979797',
      borderLeftColor: obj.inputFieldBorders.rightInputFieldBorderLeftColor || '#979797',
      color: obj.inputFieldText.rightInputFieldTextColor || '#A09C9C',
      fontFamily: obj.inputFieldText.rightInputFieldTextFontName || 'Palatino-Roman, serif',
      fontSize: obj.inputFieldText.rightInputFieldTextFontSize || '22px',
      height: obj.inputFieldHeightAndWidth.rightInputFieldHeight || '39px',
      marginTop: obj.inputFieldMarginsAndPadding.rightInputFieldMarginTop || '0px',
      marginRight: obj.inputFieldMarginsAndPadding.rightInputFieldMarginRight || '5px',
      marginBottom: obj.inputFieldMarginsAndPadding.rightInputFieldMarginBottom || '0px',
      marginLeft: obj.inputFieldMarginsAndPadding.rightInputFieldMarginLeft || '5px',
      paddingTop: obj.inputFieldMarginsAndPadding.rightInputFieldPaddingTop || '0px',
      paddingRight: obj.inputFieldMarginsAndPadding.rightInputFieldPaddingRight || '0px',
      paddingBottom: obj.inputFieldMarginsAndPadding.rightInputFieldPaddingBottom || '0px',
      paddingLeft: obj.inputFieldMarginsAndPadding.rightInputFieldPaddingLeft || '0px',
      textAlign: obj.inputFieldText.rightInputFieldTextAlign || 'center',
      width: obj.inputFieldHeightAndWidth.rightInputFieldWidth ||'200px',
    }

    var rightFieldInput = document.createElement(rightFieldHTMLType);
    container.appendChild(rightFieldInput);
    rightFieldInput.classList.add('right-field-input');
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
    rightFieldInput.style.borderLeftColor = rightFieldInputStyles.borderLeftColor;
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

    assignRightFieldFunction(
      {
      func: rightFieldFunction,
      input: rightFieldInput,
      type: rightFieldHTMLType,
      text: obj.inputFieldText.rightInputFieldTextContent,
    });
  }

  function assignRightFieldFunction(options) {
    if (options.func === 'eventPicker') {
      eventInputField = options.input;
      eventInputFieldHTMLType = options.type;
      eventInputFieldTextContent = options.text || 'Which Event?';
      eventInputClass = 'right-field-input';
    } else if (options.func === 'datePicker') {
      dateInputField = options.input;
      dateInputFieldHTMLType = options.type;
      dateInputFieldTextContent = options.text || 'When?';
      dateInputClass = 'right-field-input';
    }
  }

  createGoButton(obj);

  function createGoButton(obj) {
    var goButtonContent = obj.buttonsText.goButtonTextContent || 'Go!';

    var goButtonStyles = {
      backgroundColor: obj.buttonsBackgroundColor.goButtonBackgroundColor || '#3D89DF',
      borderBottomWidth: obj.buttonsBorders.goButtonBorderBottomWidth || '1px',
      borderTopWidth: obj.buttonsBorders.goButtonBorderTopWidth || '1px',
      borderRightWidth: obj.buttonsBorders.goButtonBorderRightWidth || '1px',
      borderLeftWidth: obj.buttonsBorders.goButtonBorderLeftWidth || '1px',
      borderBottomStyle: obj.buttonsBorders.goButtonBorderBottomStyle || 'solid',
      borderTopStyle: obj.buttonsBorders.goButtonBorderTopStyle || 'solid',
      borderRightStyle: obj.buttonsBorders.goButtonBorderRightStyle || 'solid',
      borderLeftStyle: obj.buttonsBorders.goButtonBorderLeftStyle || 'solid',
      borderBottomColor: obj.buttonsBorders.goButtonBorderBottomColor || '#8CC0FB',
      borderTopColor: obj.buttonsBorders.goButtonBorderTopColor || '#8CC0FB',
      borderRightColor: obj.buttonsBorders.goButtonBorderRightColor || '#8CC0FB',
      borderLeftColor: obj.buttonsBorders.goButtonBorderLeftColor || '#8CC0FB',
      borderRadius: obj.buttonsBorders.goButtonBorderRadius || '8px',
      boxShadow: obj.buttonsBellsAndWhistles.goButtonBoxShadow || '0 3px 3px 0 rgba(0,0,0,0.50)',
      color: obj.buttonsText.goButtonTextColor || '#000000',
      fontFamily: obj.buttonsText.goButtonTextFontName || 'Palatino-Bold, serif',
      fontSize: obj.buttonsText.goButtonTextFontSize || '25px',
      height: obj.buttonsHeightAndWidth.goButtonHeight || '39px',
      marginTop: obj.buttonsMarginsAndPadding.goButtonMarginTop || '0px',
      marginRight: obj.buttonsMarginsAndPadding.goButtonMarginRight || '10px',
      marginBottom: obj.buttonsMarginsAndPadding.goButtonMarginBottom || '0px',
      marginLeft: obj.buttonsMarginsAndPadding.goButtonMarginLeft || '10px',
      paddingTop: obj.buttonsMarginsAndPadding.goButtonPaddingTop || '0px',
      paddingRight: obj.buttonsMarginsAndPadding.goButtonPaddingRight || '0px',
      paddingBottom: obj.buttonsMarginsAndPadding.goButtonPaddingBottom || '0px',
      paddingLeft: obj.buttonsMarginsAndPadding.goButtonPaddingLeft || '0px',
      width: obj.buttonsHeightAndWidth.goButtonWidth || '105px',
    }

    var goButton = document.createElement('BUTTON');
    var goButtonText = document.createTextNode(goButtonContent);
    goButton.appendChild(goButtonText);
    container.appendChild(goButton);
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
  }

  if (detailsButtonExists) {
    createDetailsButton(obj);
  }

  function createDetailsButton(obj) {
    var detailsButtonContent = obj.buttonsText.detailsButtonTextContent || 'See full event details';

    var detailsButtonStyles = {
      backgroundColor: obj.buttonsBackgroundColor.detailsButtonBackgroundColor || '#3D89DF',
      borderBottomWidth: obj.buttonsBorders.detailsButtonBorderBottomWidth || '1px',
      borderTopWidth: obj.buttonsBorders.detailsButtonBorderTopWidth || '1px',
      borderRightWidth: obj.buttonsBorders.detailsButtonBorderRightWidth || '1px',
      borderLeftWidth: obj.buttonsBorders.detailsButtonBorderLeftWidth || '1px',
      borderBottomStyle: obj.buttonsBorders.detailsButtonBorderBottomStyle || 'solid',
      borderTopStyle: obj.buttonsBorders.detailsButtonBorderTopStyle || 'solid',
      borderRightStyle: obj.buttonsBorders.detailsButtonBorderRightStyle || 'solid',
      borderLeftStyle: obj.buttonsBorders.detailsButtonBorderLeftStyle || 'solid',
      borderBottomColor: obj.buttonsBorders.detailsButtonBorderBottomColor || '#8CC0FB',
      borderTopColor: obj.buttonsBorders.detailsButtonBorderTopColor || '#8CC0FB',
      borderRightColor: obj.buttonsBorders.detailsButtonBorderRightColor || '#8CC0FB',
      borderLeftColor: obj.buttonsBorders.detailsButtonBorderLeftColor || '#8CC0FB',
      borderRadius: obj.buttonsBorders.detailsButtonBorderRadius || '8px',
      boxShadow: obj.buttonsBellsAndWhistles.detailsButtonBoxShadow || '0 3px 3px 0 rgba(0,0,0,0.50)',
      color: obj.buttonsText.detailsButtonTextColor || '#000000',
      fontFamily: obj.buttonsText.detailsButtonTextFontName || 'Palatino-Bold, serif',
      fontSize: obj.buttonsText.detailsButtonTextFontSize || '25px',
      height: obj.buttonsHeightAndWidth.detailsButtonHeight || 'auto',
      marginTop: obj.buttonsMarginsAndPadding.detailsButtonMarginTop || '10px',
      marginRight: obj.buttonsMarginsAndPadding.detailsButtonMarginRight || 'auto',
      marginBottom: obj.buttonsMarginsAndPadding.detailsButtonMarginBottom || '10px',
      marginLeft: obj.buttonsMarginsAndPadding.detailsButtonMarginLeft || 'auto',
      paddingTop: obj.buttonsMarginsAndPadding.detailsButtonPaddingTop || '5px',
      paddingRight: obj.buttonsMarginsAndPadding.detailsButtonPaddingRight || '5px',
      paddingBottom: obj.buttonsMarginsAndPadding.detailsButtonPaddingBottom || '5px',
      paddingLeft: obj.buttonsMarginsAndPadding.detailsButtonPaddingLeft || '5px',
      width: obj.buttonsHeightAndWidth.detailsButtonWidth || 'auto',
    }

    detailsButton = document.createElement('BUTTON');
    var detailsButtonText = document.createTextNode(detailsButtonContent);
    detailsButton.appendChild(detailsButtonText);
    container.appendChild(detailsButton);
    detailsButton.classList.add('details-button');
    detailsButton.style.display = 'block';
    detailsButton.disabled = true;
    detailsButton.style.backgroundColor = detailsButtonStyles.backgroundColor;
    detailsButton.style.borderBottomWidth = detailsButtonStyles.borderBottomWidth;
    detailsButton.style.borderTopWidth = detailsButtonStyles.borderTopWidth;
    detailsButton.style.borderRightWidth = detailsButtonStyles.borderRightWidth;
    detailsButton.style.borderLeftWidth = detailsButtonStyles.borderLeftWidth;
    detailsButton.style.borderBottomStyle = detailsButtonStyles.borderBottomStyle;
    detailsButton.style.borderTopStyle = detailsButtonStyles.borderTopStyle;
    detailsButton.style.borderRightStyle = detailsButtonStyles.borderRightStyle;
    detailsButton.style.borderLeftStyle = detailsButtonStyles.borderLeftStyle;
    detailsButton.style.borderBottomColor = detailsButtonStyles.borderBottomColor;
    detailsButton.style.borderTopColor = detailsButtonStyles.borderTopColor;
    detailsButton.style.borderRightColor = detailsButtonStyles.borderRightColor;
    detailsButton.style.borderLeftColor = detailsButtonStyles.borderLeftColor;
    detailsButton.style.borderRadius = detailsButtonStyles.borderRadius;
    detailsButton.style.boxShadow = detailsButtonStyles.boxShadow;
    detailsButton.style.color = detailsButtonStyles.color;
    detailsButton.style.fontFamily = detailsButtonStyles.fontFamily;
    detailsButton.style.fontSize = detailsButtonStyles.fontSize;
    detailsButton.style.height = detailsButtonStyles.height;
    detailsButton.style.marginTop = detailsButtonStyles.marginTop;
    detailsButton.style.marginRight = detailsButtonStyles.marginRight;
    detailsButton.style.marginBottom = detailsButtonStyles.marginBottom;
    detailsButton.style.marginLeft = detailsButtonStyles.marginLeft;
    detailsButton.style.paddingTop = detailsButtonStyles.paddingTop;
    detailsButton.style.paddingRight = detailsButtonStyles.paddingRight;
    detailsButton.style.paddingBottom = detailsButtonStyles.paddingBottom;
    detailsButton.style.paddingLeft = detailsButtonStyles.paddingLeft;
    detailsButton.style.width = detailsButtonStyles.width;
  }

  //eventPicker
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
          if (eventInputFieldHTMLType === 'SELECT') {
            var opt0 = document.createElement('OPTION');
            eventInputField.appendChild(opt0);
            var text0 = document.createTextNode(eventInputFieldTextContent);
            opt0.appendChild(text0);
            for (var i = 0; i < items.length; i++) {
              var opt = document.createElement('OPTION');
              eventInputField.appendChild(opt);
              var text1 = document.createTextNode(items[i]["name"]);
              var text2 = items[i]["name"];
              opt.appendChild(text1);
              itemsArray.push({
                name: items[i]["name"],
                id: items[i]["pk"]
              });
              document.addEventListener('change', function () {
                if (event.target.className.toLowerCase() === eventInputClass) {
                    eventName = eventInputField.value;
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

//datePicker
    if (dateInputFieldHTMLType === 'SELECT') {
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
      dateInputField.appendChild(opt0);
      var text0 = document.createTextNode(dateInputFieldTextContent);
      opt0.appendChild(text0);
      var opt1 = document.createElement('OPTION');
      dateInputField.appendChild(opt1);
      var text1 = document.createTextNode(currMonth + ' ' + currYear);
      opt1.appendChild(text1);
      var opt2 = document.createElement('OPTION');
      dateInputField.appendChild(opt2);
      var text2 = document.createTextNode(currMonthPlusOne + ' ' + yearOne);
      opt2.appendChild(text2);
      var opt3 = document.createElement('OPTION');
      dateInputField.appendChild(opt3);
      var text3 = document.createTextNode(currMonthPlusTwo + ' ' + yearTwo);
      opt3.appendChild(text3);
      var opt4 = document.createElement('OPTION');
      dateInputField.appendChild(opt4);
      var text4 = document.createTextNode(currMonthPlusThree + ' ' + yearThree);
      opt4.appendChild(text4);
      var opt5 = document.createElement('OPTION');
      dateInputField.appendChild(opt5);
      var text5 = document.createTextNode(currMonthPlusFour + ' ' + yearFour);
      opt5.appendChild(text5);
    }

  document.addEventListener('change', function () {
  if (event.target.className.toLowerCase() === dateInputClass) {
    var target = document.querySelector('.' + dateInputClass).value;
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

  //need to refactor to combine below two functions
  document.addEventListener('mouseout', function(event) {
    if (event.target.className.toLowerCase() === 'details-button') {
      event.target.style.backgroundColor = obj.buttonsBackgroundColor.detailsButtonBackgroundColor || '#3D89DF';
    }
  });

  document.addEventListener('mouseout', function(event) {
    if (event.target.className.toLowerCase() === 'go-button') {
      event.target.style.backgroundColor = obj.buttonsBackgroundColor.goButtonBackgroundColor || '#3D89DF';
    }
  });

  //need to refactor to combine below two functions
  document.addEventListener('mouseover', function(event) {
    if (event.target.className.toLowerCase() === 'go-button') {
      event.target.style.backgroundColor = obj.buttonsBackgroundColor.goButtonBackgroundColorHover || '#88BCF8';
      event.target.style.cursor = 'pointer';
    }
  });

  document.addEventListener('mouseover', function(event) {
    if (event.target.className.toLowerCase() === 'details-button') {
      event.target.style.backgroundColor = obj.buttonsBackgroundColor.detailsButtonBackgroundColorHover || '#88BCF8';
      event.target.style.cursor = 'pointer';
    }
  });

  //customize item IDs coming in
  //wrap button in anchor tag

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

  //need anchor tag here too
  document.addEventListener('click', function () {
    if (event.target.className.toLowerCase() === 'details-button') {
      var hitAPI = new XMLHttpRequest();
      var currYear = new Date().getFullYear();
      var currMonth = new Date().getMonth() + 1;
      var url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/?full-items=yes'; //this should to go a href
      if (targetID) {
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
      } else {
        alert('Please select a valid event.');
      }
    }
    });

    document.addEventListener('change', function () {
        if (document.querySelector('.' + eventInputClass).value === 'Which Event?') {
          detailsButton.disabled = true;
        } else {
          detailsButton.disabled = false;
        }
      });

}

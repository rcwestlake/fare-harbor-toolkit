var FHSearchInput = function(obj) {

  var buildSearchInputHTML = function(obj) {
    var eventInputField;
    var eventInputFieldTextContent;
    var eventInputClass;
    var dateInputField;
    var dateInputFieldTextContent;
    var dateInputClass;
    var companyName = obj.shortname;
    var eventName;
    var targetID;
    var itemsArray = [];
    var month;
    var year;
    var leftFieldInput;
    var rightFieldInput;
    var goButton;
    var container;
    var detailsButton;
    var detailsButtonExists = obj.doesDetailsButtonExist;
    var buttonLinkWrapper;
    var stackDependentStyle;
    var mobileView;

    makeResponsive();

    function makeResponsive() {
      if (window.innerWidth < 700) {
        mobileView = true;
      } else {
        mobileView = false;
      }
    }

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
      } else if (obj.stackOrientation === 'vertical') {
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

    createContainer(obj);

    function createContainer(obj) {
      var containerStyles = {
        border: obj.container.borderDebug ? '1px dotted red' : '',
        marginTop: '40vh',
        marginRight: 'auto',
        marginBottom: '40vh',
        marginLeft: 'auto',
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
      var leftFieldFunction = obj.inputFieldTypes.leftInputFieldFunction || 'eventPicker';

      var leftFieldInputStyles = {
        backgroundColor: obj.inputFieldBackgroundColor.leftInputFieldBackgroundColor || '#ffffff',
        display: stackDependentStyle.leftInputFieldDisplay,
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderLeftWidth: '1px',
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
        borderRightStyle: 'solid',
        borderLeftStyle: 'solid',
        borderBottomColor: obj.inputFieldBorders.leftInputFieldBorderBottomColor || '#979797',
        borderTopColor: obj.inputFieldBorders.leftInputFieldBorderTopColor || '#979797',
        borderRightColor: obj.inputFieldBorders.leftInputFieldBorderRightColor || '#979797',
        borderLeftColor: obj.inputFieldBorders.leftInputFieldBorderLeftColor || '#979797',
        color: obj.inputFieldText.leftInputFieldTextColor || '#A09C9C',
        fontFamily: obj.inputFieldText.leftInputFieldTextFontName || 'Lucida-Grande, Verdana, sans-serif',
        fontSize: obj.inputFieldText.leftInputFieldTextFontSize || '22px',
        height: '39px',
        marginTop: stackDependentStyle.leftInputFieldMarginTop,
        marginRight: stackDependentStyle.leftInputFieldMarginRight,
        marginBottom: stackDependentStyle.leftInputFieldMarginBottom,
        marginLeft: stackDependentStyle.leftInputFieldMarginLeft,
        width: stackDependentStyle.leftInputFieldWidth,
      }

      makeHTMLForLeftInput();

      function makeHTMLForLeftInput() {
        leftFieldInput = document.createElement('SELECT');
        container.appendChild(leftFieldInput);
        leftFieldInput.classList.add('left-field-input');
        leftFieldInput.style.display = leftFieldInputStyles.display;
        leftFieldInput.style.backgroundColor = leftFieldInputStyles.backgroundColor;
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
        leftFieldInput.style.width = leftFieldInputStyles.width;
      }

      assignLeftFieldFunction(
        {
        func: leftFieldFunction,
        input: leftFieldInput,
        text: obj.inputFieldText.leftInputFieldTextContent,
      });

      function assignLeftFieldFunction(options) {
        if (options.func === 'eventPicker') {
          eventInputField = options.input;
          eventInputFieldTextContent = options.text || 'Which Event?';
          eventInputClass = 'left-field-input';
        } else if (options.func === 'datePicker') {
          dateInputField = options.input;
          dateInputFieldTextContent = options.text || 'When?';
          dateInputClass = 'left-field-input';
        }
      }

    }

    createRightInputField(obj);

    function createRightInputField(obj) {
      var rightFieldFunction = obj.inputFieldTypes.rightInputFieldFunction || 'datePicker';

      var rightFieldInputStyles = {
        backgroundColor: obj.inputFieldBackgroundColor.rightInputFieldBackgroundColor || '#ffffff',
        display: stackDependentStyle.rightInputFieldDisplay,
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderLeftWidth: '1px',
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
        borderRightStyle: 'solid',
        borderLeftStyle: 'solid',
        borderBottomColor: obj.inputFieldBorders.rightInputFieldBorderBottomColor || '#979797',
        borderTopColor: obj.inputFieldBorders.rightInputFieldBorderTopColor || '#979797',
        borderRightColor: obj.inputFieldBorders.rightInputFieldBorderRightColor || '#979797',
        borderLeftColor: obj.inputFieldBorders.rightInputFieldBorderLeftColor || '#979797',
        color: obj.inputFieldText.rightInputFieldTextColor || '#A09C9C',
        fontFamily: obj.inputFieldText.rightInputFieldTextFontName || 'Lucida-Grande, Verdana, sans-serif',
        fontSize: obj.inputFieldText.rightInputFieldTextFontSize || '22px',
        height: '39px',
        marginTop: stackDependentStyle.rightInputFieldMarginTop,
        marginRight: stackDependentStyle.rightInputFieldMarginRight,
        marginBottom: stackDependentStyle.rightInputFieldMarginBottom,
        marginLeft: stackDependentStyle.rightInputFieldMarginLeft,
        width: stackDependentStyle.rightInputFieldWidth,
      }

      makeHTMLForRightInput();

      function makeHTMLForRightInput() {
        rightFieldInput = document.createElement('SELECT');
        container.appendChild(rightFieldInput);
        rightFieldInput.classList.add('right-field-input');
        rightFieldInput.style.display = rightFieldInputStyles.display;
        rightFieldInput.style.backgroundColor = rightFieldInputStyles.backgroundColor;
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
        rightFieldInput.style.width = rightFieldInputStyles.width;
      }

      assignRightFieldFunction(
        {
        func: rightFieldFunction,
        input: rightFieldInput,
        text: obj.inputFieldText.rightInputFieldTextContent,
      });

      function assignRightFieldFunction(options) {
        if (options.func === 'eventPicker') {
          eventInputField = options.input;
          eventInputFieldTextContent = options.text || 'Which Event?';
          eventInputClass = 'right-field-input';
        } else if (options.func === 'datePicker') {
          dateInputField = options.input;
          dateInputFieldTextContent = options.text || 'When?';
          dateInputClass = 'right-field-input';
        }
      }

    }

    createGoButton(obj);

    function createGoButton(obj) {
      var goButtonContent = obj.buttonsText.goButtonTextContent || 'Go!';

      var goButtonStyles = {
        backgroundColor: obj.buttonsBackgroundColor.goButtonBackgroundColor || '#3D89DF',
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderLeftWidth: '1px',
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
        borderRightStyle: 'solid',
        borderLeftStyle: 'solid',
        borderBottomColor: obj.buttonsBorders.goButtonBorderBottomColor || '#8CC0FB',
        borderTopColor: obj.buttonsBorders.goButtonBorderTopColor || '#8CC0FB',
        borderRightColor: obj.buttonsBorders.goButtonBorderRightColor || '#8CC0FB',
        borderLeftColor: obj.buttonsBorders.goButtonBorderLeftColor || '#8CC0FB',
        borderRadius: '8px',
        boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
        color: obj.buttonsText.goButtonTextColor || '#000000',
        fontFamily: obj.buttonsText.goButtonTextFontName || 'Lucida-Grande, Verdana, sans-serif',
        fontSize: obj.buttonsText.goButtonTextFontSize || '25px',
        height: '39px',
        marginTop: '0px',
        marginRight: '10px',
        marginBottom: '0px',
        marginLeft: '10px',
        width: '105px',
      }

      makeHTMLForGoButton();

      function makeHTMLForGoButton() {
        buttonLinkWrapper = document.createElement('A');
        buttonLinkWrapper.classList.add('go-button-wrapper');
        buttonLinkWrapper.href = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/?full-items=yes';
        buttonLinkWrapper.style.textDecoration = 'none';
        goButton = document.createElement('BUTTON');
        var goButtonText = document.createTextNode(goButtonContent);
        goButton.appendChild(goButtonText);
        container.appendChild(buttonLinkWrapper);
        buttonLinkWrapper.appendChild(goButton)
        goButton.classList.add('go-button');
        goButton.name = 'go-button';
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
        goButton.style.width = goButtonStyles.width;
      }

    }

    if (detailsButtonExists) {
      createDetailsButton(obj);
    }

    function createDetailsButton(obj) {
      var detailsButtonContent = obj.buttonsText.detailsButtonTextContent || 'See full event details';

      var detailsButtonStyles = {
        backgroundColor: obj.buttonsBackgroundColor.detailsButtonBackgroundColor || '#3D89DF',
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderLeftWidth: '1px',
        borderBottomStyle: 'solid',
        borderTopStyle: 'solid',
        borderRightStyle: 'solid',
        borderLeftStyle: 'solid',
        borderBottomColor: obj.buttonsBorders.detailsButtonBorderBottomColor || '#8CC0FB',
        borderTopColor: obj.buttonsBorders.detailsButtonBorderTopColor || '#8CC0FB',
        borderRightColor: obj.buttonsBorders.detailsButtonBorderRightColor || '#8CC0FB',
        borderLeftColor: obj.buttonsBorders.detailsButtonBorderLeftColor || '#8CC0FB',
        borderRadius: '8px',
        boxShadow: '0 3px 3px 0 rgba(0,0,0,0.50)',
        color: obj.buttonsText.detailsButtonTextColor || '#000000',
        fontFamily: obj.buttonsText.detailsButtonTextFontName || 'Lucida-Grande, Verdana, sans-serif',
        fontSize: obj.buttonsText.detailsButtonTextFontSize || '25px',
        height: 'auto',
        marginTop: stackDependentStyle.detailsButtonMarginTop,
        marginRight: 'auto',
        marginBottom: stackDependentStyle.detailsButtonMarginBottom,
        marginLeft: 'auto',
        padding: '10px',
        width: 'auto',
      }

      makeHTMLForDetailsButton();

      function makeHTMLForDetailsButton() {
        detailsButtonWrapper = document.createElement('A');
        detailsButtonWrapper.classList.add('details-button-wrapper');
        detailsButtonWrapper.href = '';
        detailsButtonWrapper.style.textDecoration = 'none';
        detailsButton = document.createElement('BUTTON');
        var detailsButtonText = document.createTextNode(detailsButtonContent);
        detailsButton.appendChild(detailsButtonText);
        container.appendChild(detailsButtonWrapper);
        detailsButtonWrapper.appendChild(detailsButton)
        detailsButton.classList.add('details-button');
        detailsButton.name = 'details-button';
        detailsButton.style.display = 'block';
        detailsButton.disabled = true;
        detailsButton.title = 'Please select an event.';
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
        detailsButton.style.padding = detailsButtonStyles.padding;
        detailsButton.style.width = detailsButtonStyles.width;
      }

    }

    window.addEventListener('load', function () {
      var hitAPI = new XMLHttpRequest();
      var url = 'http://localhost:8080/api';
      hitAPI.open('GET', url, true);
      hitAPI.send();
      hitAPI.onreadystatechange = function() {
        if (hitAPI.readyState === XMLHttpRequest.DONE) {
          if (hitAPI.status === 200) {
            var JSONObj = JSON.parse(hitAPI.responseText);
            var items = JSONObj["items"];
            var newItems = [];
            if (obj.selectedItems.length > 0) {
              for (var i = 0; i < obj.selectedItems.length; i++) {
                for (var j = 0; j < items.length; j++) {
                  if (items[j]["pk"] === obj.selectedItems[i]) {
                    newItems.push(items[j]);
                  }
                }
              }
            } else {
              newItems = items;
            }
            var opt0 = document.createElement('OPTION');
            eventInputField.appendChild(opt0);
            var text0 = document.createTextNode(eventInputFieldTextContent);
            opt0.appendChild(text0);
            for (var i = 0; i < newItems.length; i++) {
              var opt = document.createElement('OPTION');
              eventInputField.appendChild(opt);
              var text1 = document.createTextNode(newItems[i]["name"]);
              var text2 = newItems[i]["name"];
              opt.appendChild(text1);
              itemsArray.push({
                name: newItems[i]["name"],
                id: newItems[i]["pk"]
              });
              }
          } else {
            console.error('There was a problem with the API call.');
          }
        }
      }
      });

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

    document.addEventListener('change', function () {
      if (event.target.className.toLowerCase() === dateInputClass) {
        var url;
        var currYear = new Date().getFullYear();
        var currMonth = new Date().getMonth() + 1;

        var target = document.querySelector('.' + dateInputClass).value;
        var Jan = /Jan+/;
        var Feb = /Feb+/;
        var Mar = /Mar+/;
        var Apr = /Apr+/;
        var May = /May+/;
        var Jun = /Jun+/;
        var Jul = /Jul+/;
        var Aug = /Aug+/;
        var Sep = /Sep+/;
        var Oct = /Oct+/;
        var Nov = /Nov+/;
        var Dec = /Dec+/;
        var y16 = /16/;
        var y17 = /17/;
        var y18 = /18/;
        var y19 = /19/;

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

        if (document.querySelector('.' + dateInputClass).value === dateInputFieldTextContent) {
          if (!targetID || document.querySelector('.' + eventInputClass).value === eventInputFieldTextContent) {
          //no month and no event
          buttonLinkWrapper.href = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/?full-items=yes';
        } else {
          //event but no month
          eventName = eventInputField.value;
          var target = itemsArray.filter(function(item){
              return item.name === eventName
            });
            targetID = target[0].id;
          url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/';
          buttonLinkWrapper.href = url;
          }
        } else {
          if (!targetID) {
            //month but no event
            url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/calendar/' + year + '/' + month + '/';
            buttonLinkWrapper.href = url;
          } else {
            //event and month
            eventName = eventInputField.value;
            var target = itemsArray.filter(function(item){
                return item.name === eventName
              });
              targetID = target[0].id;
            url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + year + '/' + month + '/';
            buttonLinkWrapper.href = url;
          }
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

      document.addEventListener('change', function () {
        if (event.target.className.toLowerCase() === eventInputClass) {
          var url;
          var currYear = new Date().getFullYear();
          var currMonth = new Date().getMonth() + 1;
          if (document.querySelector('.' + eventInputClass).value === eventInputFieldTextContent) {
            targetID = null;
            detailsButtonWrapper.href = '';
            detailsButton.disabled = true;
            detailsButton.title = 'Please select an event.';
            if (!month || document.querySelector('.' + dateInputClass).value === dateInputFieldTextContent) {
              //no month and no event
              buttonLinkWrapper.href = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/?full-items=yes'
            } else {
              //month but no event
              url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/calendar/' + year + '/' + month + '/';
              buttonLinkWrapper.href = url;
            }
          } else {
            detailsButton.disabled = false;
            detailsButton.title = '';
            eventName = eventInputField.value;
            var target = itemsArray.filter(function(item){
                return item.name === eventName
              });
              targetID = target[0].id;
            var url1 = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/?full-items=yes';
            detailsButtonWrapper.href = url1;
            if (!month) {
              url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/';
              buttonLinkWrapper.href = url;
            } else {
              url = 'https://demo.fareharbor.com/embeds/book/' + companyName + '/items/' + targetID + '/calendar/' + year + '/' + month + '/';
              buttonLinkWrapper.href = url;
            }
          }
        }

      });

  };

  return buildSearchInputHTML(obj);

};

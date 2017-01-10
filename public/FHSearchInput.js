var FHSearchInput = function(obj) {

  var buildSearchInputHTML = function(obj) {
    var eventInputField;
    var eventInputFieldTextContent;
    var eventInputClass;
    var dateInputField;
    var dateInputFieldTextContent;
    var dateInputClass;

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
    var buttonLinkWrapper;

    var containerStyles = FHContainerStyles;
    var leftFieldInputStyles = FHLeftInputStyles;
    var rightFieldInputStyles = FHRightInputStyles;
    var goButtonStyles = FHGoButtonStyles;
    var detailsButtonStyles = FHDetailsButtonStyles;

    (function createContainer(obj) {

      container = document.createElement('DIV');
      document.body.appendChild(container);
      container.classList.add('container');
      container.style.border = containerStyles.border;
      container.style.marginTop = containerStyles.marginTop;
      container.style.marginRight = containerStyles.marginRight;
      container.style.marginBottom = containerStyles.marginBottom;
      container.style.marginLeft = containerStyles.marginLeft;
      container.style.textAlign = 'center';
    })()

    createLeftInputField(obj);

    function createLeftInputField(obj) {
      var leftFieldFunction = obj.inputFieldTypes.leftInputFieldFunction || 'eventPicker';

      (function makeHTMLForLeftInput() {
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
      })()

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

      (function makeHTMLForRightInput() {
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
      })()

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

      (function makeHTMLForGoButton() {
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
      })()

    }

    if (obj.doesDetailsButtonExist) {
      createDetailsButton(obj);
    }

    function createDetailsButton(obj) {
      var detailsButtonContent = obj.buttonsText.detailsButtonTextContent || 'See full event details';

      (function makeHTMLForDetailsButton() {
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
      })()

    }

      (function makeAPICallForEvents(){
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
                sliceItemsArray(obj.selectedItems, items, newItems);
              } else {
                newItems = items;
              }

              createEventInputDefaultText();
              populateEventsInEventField(newItems);

            } else {
              console.error('There was a problem with the API call.');
            }
          }
        }
      })()

      function sliceItemsArray(selectedItems, items, newItems){
        for (var i = 0; i < selectedItems.length; i++) {
          for (var j = 0; j < items.length; j++) {
            if (items[j]["pk"] === selectedItems[i]) {
              newItems.push(items[j]);
            }
          }
        }
      }

      function createEventInputDefaultText() {
        var opt = document.createElement('OPTION');
        eventInputField.appendChild(opt);
        var text = document.createTextNode(eventInputFieldTextContent);
        opt.appendChild(text);
      }

      function populateEventsInEventField(newItems) {
        for (var i = 0; i < newItems.length; i++) {
          var opt = document.createElement('OPTION');
          eventInputField.appendChild(opt);
          var text = document.createTextNode(newItems[i]["name"]);
          opt.appendChild(text);
          itemsArray.push({
            name: newItems[i]["name"],
            id: newItems[i]["pk"]
          });
          }
      }

      (function populateDatesField(){
        var currMonth;
        var currYear = new Date().getFullYear();
        var currMonthPlusOne;
        var currMonthPlusTwo;
        var currMonthPlusThree;
        var currMonthPlusFour;
        var yearOne;
        var yearTwo;
        var yearThree;
        var yearFour;

        findCurrentMonth();
        computeDates();
        populateTheActualDatesInTheField();

        function findCurrentMonth() {
          var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          currMonth = allMonths[new Date().getMonth()];
        }

        function computeDates() {
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

          currMonthPlusOne = nextMonth[currMonth];
          currMonthPlusTwo = nextMonth[currMonthPlusOne];
          currMonthPlusThree = nextMonth[currMonthPlusTwo];
          currMonthPlusFour = nextMonth[currMonthPlusThree];

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
        }

        function populateTheActualDatesInTheField() {
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

      })()

    document.addEventListener('change', function () {
      if (event.target.className.toLowerCase() === dateInputClass) {
        var url;
        var currYear = new Date().getFullYear();
        var currMonth = new Date().getMonth() + 1;

        matchSelectedMonthToURL();

        function matchSelectedMonthToURL() {
          var target = document.querySelector('.' + dateInputClass).value;

          if (/Jan+/.test(target)) {
            month = '01';
          } else if (/Feb+/.test(target)) {
            month = '02';
          } else if (/Mar+/.test(target)) {
            month = '03';
          } else if (/Apr+/.test(target)) {
            month = '04';
          } else if (/May+/.test(target)) {
            month = '05';
          } else if (/Jun+/.test(target)) {
            month = '06';
          } else if (/Jul+/.test(target)) {
            month = '07';
          } else if (/Aug+/.test(target)) {
            month = '08';
          } else if (/Sep+/.test(target)) {
            month = '09';
          } else if (/Oct+/.test(target)) {
            month = '10';
          } else if (/Nov+/.test(target)) {
            month = '11';
          } else if (/Dec+/.test(target)) {
            month = '12';
          }

          if (/2016/.test(target)) {
            year = '2016';
          } else if (/2017/.test(target)) {
            year = '2017';
          } else if (/2018/.test(target)) {
            year = '2018';
          } else if (/2019/.test(target)) {
            year = '2019';
          } else if (/2020/.test(target)) {
            year = '2020';
          } else if (/2021/.test(target)) {
            year = '2021';
          } else if (/2022/.test(target)) {
            year = '2022';
          } else if (/2023/.test(target)) {
            year = '2023';
          } else if (/2024/.test(target)) {
            year = '2024';
          } else if (/2025/.test(target)) {
            year = '2025';
          } else if (/2026/.test(target)) {
            year = '2026';
          } else if (/2027/.test(target)) {
            year = '2027';
          } else if (/2028/.test(target)) {
            year = '2028';
          } else if (/2029/.test(target)) {
            year = '2029';
          } else if (/2030/.test(target)) {
            year = '2030';
          }
        }

        var conditions = {
          noMonthIsSelected: document.querySelector('.' + dateInputClass).value === dateInputFieldTextContent,
          noEventIsSelected: !targetID || document.querySelector('.' + eventInputClass).value === eventInputFieldTextContent,
        }

        if (conditions.noMonthIsSelected) {
          if (conditions.noEventIsSelected) {
          buttonLinkWrapper.href = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/?full-items=yes';
        } else {
          reassignEventForURL();
          url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/';
          buttonLinkWrapper.href = url;
          }
        } else {
          if (conditions.noEventIsSelected) {
            url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/calendar/' + year + '/' + month + '/';
            buttonLinkWrapper.href = url;
          } else {
            reassignEventForURL();
            url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/' + targetID + '/calendar/' + year + '/' + month + '/';
            buttonLinkWrapper.href = url;
          }
        }

      function reassignEventForURL() {
        eventName = eventInputField.value;
        var target = itemsArray.filter(function(item){
            return item.name === eventName
          });
          targetID = target[0].id;
      }

    }
      });

    document.addEventListener('mouseout', function(event) {
      if (event.target.className.toLowerCase() === 'details-button') {
        event.target.style.backgroundColor = obj.buttonsBackgroundColor.detailsButtonBackgroundColor || '#3D89DF';
      } else if (event.target.className.toLowerCase() === 'go-button') {
        event.target.style.backgroundColor = obj.buttonsBackgroundColor.goButtonBackgroundColor || '#3D89DF';
      }
    });

    document.addEventListener('mouseover', function(event) {
      if (event.target.className.toLowerCase() === 'go-button') {
        event.target.style.backgroundColor = obj.buttonsBackgroundColor.goButtonBackgroundColorHover || '#88BCF8';
        event.target.style.cursor = 'pointer';
      } else if (event.target.className.toLowerCase() === 'details-button') {
        event.target.style.backgroundColor = obj.buttonsBackgroundColor.detailsButtonBackgroundColorHover || '#88BCF8';
        event.target.style.cursor = 'pointer';
      }
    });

      document.addEventListener('change', function () {
        if (event.target.className.toLowerCase() === eventInputClass) {
          var url;
          var currYear = new Date().getFullYear();
          var currMonth = new Date().getMonth() + 1;

          var conditions = {
            noEventIsSelected: document.querySelector('.' + eventInputClass).value === eventInputFieldTextContent,
            noMonthIsSelected: !month || document.querySelector('.' + dateInputClass).value === dateInputFieldTextContent,
          }

          if (conditions.noEventIsSelected) {
            targetID = null;
            disableDetailsButton();
            if (conditions.noMonthIsSelected) {
              buttonLinkWrapper.href = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/?full-items=yes'
            } else {
              url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/calendar/' + year + '/' + month + '/';
              buttonLinkWrapper.href = url;
            }
          } else {
            enableDetailsButton();
            reassignEventForURL();
            var detailsButtonURL = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/?full-items=yes';
            detailsButtonWrapper.href = detailsButtonURL;
            if (!month) {
              url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/' + targetID + '/calendar/' + currYear + '/' + currMonth + '/';
              buttonLinkWrapper.href = url;
            } else {
              url = 'https://demo.fareharbor.com/embeds/book/' + obj.shortname + '/items/' + targetID + '/calendar/' + year + '/' + month + '/';
              buttonLinkWrapper.href = url;
            }
          }
        }

        function disableDetailsButton() {
          detailsButtonWrapper.href = '';
          detailsButton.disabled = true;
          detailsButton.title = 'Please select an event.';
        }

        function enableDetailsButton() {
          detailsButton.disabled = false;
          detailsButton.title = '';
        }

        function reassignEventForURL() {
          eventName = eventInputField.value;
          var target = itemsArray.filter(function(item){
              return item.name === eventName
            });
            targetID = target[0].id;
        }

      });

  };

  return buildSearchInputHTML(obj);

};

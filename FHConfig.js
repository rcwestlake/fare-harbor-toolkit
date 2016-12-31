var shortname = 'bodyglove';
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;

var FHConfig = {
  toolType: 'Modal',
  shortname: 'bodyglove',
  text: {
    fontPrimary: '',
    headerText: 'Ticket Info',
    headerTextSize: '',
    headerExtraText: 'Powered by FareHarbor',
    headerExtraTextLink: 'http://www.fareharbor.com',
    headerExtraTextSize: '',
    mainActionButton: 'Book Now',
    globalTextAlign: '',
  },
  colors: {
    headerColor: '',
    headerTextColor: '',
    mainButtonColor: '',
    mainButtonTextColor: '',
  },
  toolDetails: {
    modal: {
      modalType: 'Simple',
      showFullItems: true,
      cards: {
        numberOfCards: null,
        cardDetail: [
          {
            doesItExist: true,
            text: 'See activities and tickets',
            extraText: '',
            itemID: '',
            linkTo: 'https://demo.fareharbor.com/embeds/book/' + shortname + '/items/?full-items=yes',
          },
          {
            doesItExist: true,
            text: 'View online calendar',
            extraText: '',
            itemID: '',
            linkTo: 'https://demo.fareharbor.com/embeds/book/' + shortname + '/items/calendar/' + year + '/' + month + '/',
          },
          {
            doesItExist: true,
            text: 'Tickets by phone',
            extraText: '555-555-5555',
            itemID: '',
            linkTo: '',
          },
          {
            doesItExist: false,
            text: '',
            extraText: '',
            itemID: '',
            linkTo: '',
          },
        ],
        marginsAndPadding: {
          headerTextPaddingLeft: '',
          headerTextPaddingTop: '',
          headerTextPaddingRight: '',
          headerTextPaddingBottom: '',
        },
      },
    },
    inputFields: {
      numberOfInputFields: null,
      inputFieldTypes: {
        leftmostFieldType: '',
        secondFieldFromLeftType: '',
      },
      inputFieldBackgroundColor: {
        leftmostFieldBackgroundColor: '',
        secondFieldFromLeftBackgroundColor: '',
        thirdFieldFromLeftBackgroundColor: '',
      },
      inputFieldText: {
        leftmostFieldTextAlign: '',
        secondFieldFromLeftTextAlign: '',
        thirdFieldFromLeftTextAlign: '',
        leftmostFieldTextContent: '',
        secondFieldFromLeftTextContent: '',
        thirdFieldFromLeftTextContent: '',
        leftmostFieldTextColor: '',
        secondFieldFromLeftTextColor: '',
        thirdFieldFromLeftTextColor: '',
        leftmostFieldTextFontName: '',
        secondFieldFromLeftTextFontName: '',
        thirdFieldFromLeftTextFontName: '',
        leftmostFieldTextFontSize: '',
        secondFieldFromLeftTextFontSize: '',
        thirdFieldFromLeftTextFontSize: '',
        clearLeftmostFieldTextOnClick: true,
        clearSecondFieldFromLeftOnClick: true,
        clearThirdFieldFromLeftOnClick: true,
      },
      inputFieldHeightAndWidth: {
        leftmostFieldHeight: '',
        leftmostFieldWidth: '',
        secondFieldFromLeftHeight: '',
        secondFieldFromLeftWidth: '',
        thirdFieldFromLeftHeight: '',
        thirdFieldFromLeftWidth: '',
      },
      inputFieldBorders: {
        leftmostFieldBorderBottomWidth: '',
        leftmostFieldBorderTopWidth: '',
        leftmostFieldBorderRightWidth: '',
        leftmostFieldBorderLeftWidth: '',
        leftmostFieldBorderBottomStyle: '',
        leftmostFieldBorderTopStyle: '',
        leftmostFieldBorderRightStyle: '',
        leftmostFieldBorderLeftStyle: '',
        leftmostFieldBorderBottomColor: '',
        leftmostFieldBorderTopColor: '',
        leftmostFieldBorderRightColor: '',
        leftmostFieldBorderLeftColor: '',
        secondFieldFromLeftBorderBottomWidth: '',
        secondFieldFromLeftBorderTopWidth: '',
        secondFieldFromLeftBorderRightWidth: '',
        secondFieldFromLeftBorderLeftWidth: '',
        secondFieldFromLeftBorderBottomStyle: '',
        secondFieldFromLeftBorderTopStyle: '',
        secondFieldFromLeftBorderRightStyle: '',
        secondFieldFromLeftBorderLeftStyle: '',
        secondFieldFromLeftBorderBottomColor: '',
        secondFieldFromLeftBorderTopColor: '',
        secondFieldFromLeftBorderRightColor: '',
        secondFieldFromLeftBorderLeftColor: '',
        thirdFieldFromLeftBorderBottomWidth: '',
        thirdFieldFromLeftBorderTopWidth: '',
        thirdFieldFromLeftBorderRightWidth: '',
        thirdFieldFromLeftBorderLeftWidth: '',
        thirdFieldFromLeftBorderBottomStyle: '',
        thirdFieldFromLeftBorderTopStyle: '',
        thirdFieldFromLeftBorderRightStyle: '',
        thirdFieldFromLeftBorderLeftStyle: '',
        thirdFieldFromLeftBorderBottomColor: '',
        thirdFieldFromLeftBorderTopColor: '',
        thirdFieldFromLeftBorderRightColor: '',
        thirdFieldFromLeftBorderLeftColor: '',
      },
      inputFieldIcons: {
        leftmostFieldIconSource: '',
        secondFieldFromLeftIconSource: '',
        thirdFieldFromLeftIconSource: '',
        leftmostFieldIconPosition: '',
        secondFieldFromLeftIconPosition: '',
        thirdFieldFromLeftIconPosition: '',
        leftmostFieldIconSize: '',
        secondFieldFromLeftIconSize: '',
        thirdFieldFromLeftIconSize: '',
      },
      inputFieldMarginsAndPadding: {
        leftmostFieldMarginTop: '',
        leftmostFieldMarginRight: '',
        leftmostFieldMarginBottom: '',
        leftmostFieldMarginLeft: '',
        secondFieldFromLeftMarginTop: '',
        secondFieldFromLeftMarginRight: '',
        secondFieldFromLeftMarginBottom: '',
        secondFieldFromLeftMarginLeft: '',
        thirdFieldFromLeftMarginTop: '',
        thirdFieldFromLeftMarginRight: '',
        thirdFieldFromLeftMarginBottom: '',
        thirdFieldFromLeftMarginLeft: '',
        leftmostFieldPaddingTop: '',
        leftmostFieldPaddingRight: '',
        leftmostFieldPaddingBottom: '',
        leftmostFieldPaddingLeft: '',
        secondFieldFromLeftPaddingTop: '',
        secondFieldFromLeftPaddingRight: '',
        secondFieldFromLeftPaddingBottom: '',
        secondFieldFromLeftPaddingLeft: '',
        thirdFieldFromLeftPaddingTop: '',
        thirdFieldFromLeftPaddingRight: '',
        thirdFieldFromLeftPaddingBottom: '',
        thirdFieldFromLeftPaddingLeft: '',
      },
    },
    buttons: {
      numberOfButtons: null,
      buttonsBackgroundColor: {
        leftmostButtonBackgroundColor: '',
        secondButtonFromLeftBackgroundColor: '',
        leftmostButtonBackgroundColorHover: '',
        secondButtonFromLeftBackgroundColorHover: '',
      },
      buttonsText: {
        leftmostButtonTextContent: '',
        secondButtonFromLeftTextContent: '',
        leftmostButtonTextColor: '',
        secondButtonFromLeftTextColor: '',
        leftmostButtonTextFontName: '',
        secondButtonFromLeftTextFontName: '',
        leftmostButtonTextFontSize: '',
        secondButtonFromLeftTextFontSize: '',
      },
      buttonsBorders: {
        leftmostButtonBorderBottomWidth: '',
        leftmostButtonBorderTopWidth: '',
        leftmostButtonBorderRightWidth: '',
        leftmostButtonBorderLeftWidth: '',
        leftmostButtonBorderBottomStyle: '',
        leftmostButtonBorderTopStyle: '',
        leftmostButtonBorderRightStyle: '',
        leftmostButtonBorderLeftStyle: '',
        leftmostButtonBorderBottomColor: '',
        leftmostButtonBorderTopColor: '',
        leftmostButtonBorderRightColor: '',
        leftmostButtonBorderLeftColor: '',
        secondButtonFromLeftBorderBottomWidth: '',
        secondButtonFromLeftBorderTopWidth: '',
        secondButtonFromLeftBorderRightWidth: '',
        secondButtonFromLeftBorderLeftWidth: '',
        secondButtonFromLeftBorderBottomStyle: '',
        secondButtonFromLeftBorderTopStyle: '',
        secondButtonFromLeftBorderRightStyle: '',
        secondButtonFromLeftBorderLeftStyle: '',
        secondButtonFromLeftBorderBottomColor: '',
        secondButtonFromLeftBorderTopColor: '',
        secondButtonFromLeftBorderRightColor: '',
        secondButtonFromLeftBorderLeftColor: '',
        leftmostButtonBorderRadius: '',
        secondButtonFromLeftBorderRadius: '',
      },
      buttonsHeightAndWidth: {
        leftmostButtonHeight: '',
        leftmostButtonWidth: '',
        secondButtonFromLeftHeight: '',
        secondButtonFromLeftWidth: '',
      },
      buttonsMarginsAndPadding: {
        leftmostButtonMarginTop: '',
        leftmostButtonMarginRight: '',
        leftmostButtonMarginBottom: '',
        leftmostButtonMarginLeft: '',
        secondButtonFromLeftMarginTop: '',
        secondButtonFromLeftMarginRight: '',
        secondButtonFromLeftMarginBottom: '',
        secondButtonFromLeftMarginLeft: '',
        leftmostButtonPaddingTop: '',
        leftmostButtonPaddingRight: '',
        leftmostButtonPaddingBottom: '',
        leftmostButtonPaddingLeft: '',
        secondButtonFromLeftPaddingTop: '',
        secondButtonFromLeftPaddingRight: '',
        secondButtonFromLeftPaddingBottom: '',
        secondButtonFromLeftPaddingLeft: '',
      },
      buttonsBellsAndWhistles: {
        leftmostButtonBoxShadow: '',
        secondButtonFromLeftBoxShadow: '',
      },
    },
    footer: {
      footerBackgroundColor: '',
      height: '',
      width: '',
      displayType: 'block',
      footerHideShowTextFont: '',
      footerBorders: {
        footerBorderBottomWidth: '',
        footerBorderTopWidth: '',
        footerBorderRightWidth: '',
        footerBorderLeftWidth: '',
        footerBorderBottomStyle: '',
        footerBorderTopStyle: '',
        footerBorderRightStyle: '',
        footerBorderLeftStyle: '',
        footerBorderBottomColor: '',
        footerBorderTopColor: '',
        footerBorderRightColor: '',
        footerBorderLeftColor: '',
      },
      elements: [
        {
          doesItExist: true,
          id: 0,
          type: 'textLink',
          textContent: 'Book Now',
          socialMediaType: '',
          linkTo: 'https://demo.fareharbor.com/embeds/book/' + shortname + '/items/',
          height: '',
          width: '',
          fontName: '',
          fontSize: '20px',
          fontWeight: 'bolder',
          marginTop: '',
          marginRight: '10%',
          marginBottom: '',
          marginLeft: '2%',
        },
        {
          doesItExist: true,
          id: 1,
          type: 'textLink',
          textContent: 'Contact Us',
          socialMediaType: '',
          linkTo: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
          marginTop: '',
          marginRight: '',
          marginBottom: '',
          marginLeft: '5%',
        },
        {
          doesItExist: true,
          id: 2,
          type: 'textLink',
          textContent: 'Feedback',
          socialMediaType: '',
          linkTo: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
          marginTop: '',
          marginRight: '',
          marginBottom: '',
          marginLeft: '3%',
        },
        {
          doesItExist: true,
          id: 3,
          type: 'textLink',
          textContent: 'Legal',
          socialMediaType: '',
          linkTo: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
          marginTop: '',
          marginRight: '',
          marginBottom: '',
          marginLeft: '3%',
        },
        {
          doesItExist: true,
          id: 4,
          type: 'textLink',
          textContent: 'Share:',
          socialMediaType: '',
          linkTo: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
          marginTop: '',
          marginRight: '',
          marginBottom: '',
          marginLeft: '15%',
        },
        {
          doesItExist: true,
          id: 5,
          type: 'socialMedia',
          textContent: '',
          socialMediaType: 'facebook',
          linkTo: '',
          height: '25px',
          width: '25px',
          fontName: '',
          fontSize: '',
          fontWeight: '',
          marginTop: '',
          marginRight: '',
          marginBottom: '',
          marginLeft: '3%',
        },
        {
          doesItExist: true,
          id: 6,
          type: 'socialMedia',
          textContent: '',
          socialMediaType: 'twitter',
          linkTo: '',
          height: '25px',
          width: '25px',
          fontName: '',
          fontSize: '',
          fontWeight: '',
          marginTop: '',
          marginRight: '',
          marginBottom: '',
          marginLeft: '3%',
        },
      ],
    },
  },
}

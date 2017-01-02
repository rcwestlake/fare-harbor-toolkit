var shortname = 'bodyglove';
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;

var FHConfig = {
  toolType: 'Footer',
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
        fontsAndColors: {
          mainTextSize: '',
          extraTextSize: '',
          mainTextColor: '',
          extraTextColor: '',
        },
        marginsAndPadding: {
          headerTextPaddingLeft: '',
          headerTextPaddingTop: '',
          headerTextPaddingRight: '',
          headerTextPaddingBottom: '',
        },
      },
    },
    container: {
      borderDebug: false,
      marginTop: '',
      marginRight: '',
      marginBottom: '',
      marginLeft: '',
    },
    inputFields: {
      inputFieldTypes: {
        leftInputFieldHTMLType: '',
        rightInputFieldHTMLType: '',
        leftInputFieldFunction: '',
        rightInputFieldFunction: '',
      },
      inputFieldBackgroundColor: {
        leftInputFieldBackgroundColor: '',
        rightInputFieldBackgroundColor: '',
      },
      inputFieldText: {
        leftInputFieldTextAlign: '',
        rightInputFieldTextAlign: '',
        leftInputFieldTextContent: '',
        rightInputFieldTextContent: '',
        leftInputFieldTextColor: '',
        rightInputFieldTextColor: '',
        leftInputFieldTextFontName: '',
        rightInputFieldTextFontName: '',
        leftInputFieldTextFontSize: '',
        rightInputFieldTextFontSize: '',
      },
      inputFieldHeightAndWidth: {
        leftInputFieldHeight: '',
        leftInputFieldWidth: '',
        rightInputFieldHeight: '',
        rightInputFieldWidth: '',
      },
      inputFieldBorders: {
        leftInputFieldBorderBottomWidth: '',
        leftInputFieldBorderTopWidth: '',
        leftInputFieldBorderRightWidth: '',
        leftInputFieldBorderLeftWidth: '',
        leftInputFieldBorderBottomStyle: '',
        leftInputFieldBorderTopStyle: '',
        leftInputFieldBorderRightStyle: '',
        leftInputFieldBorderLeftStyle: '',
        leftInputFieldBorderBottomColor: '',
        leftInputFieldBorderTopColor: '',
        leftInputFieldBorderRightColor: '',
        leftInputFieldBorderLeftColor: '',
        rightInputFieldBorderBottomWidth: '',
        rightInputFieldBorderTopWidth: '',
        rightInputFieldBorderRightWidth: '',
        rightInputFieldBorderLeftWidth: '',
        rightInputFieldBorderBottomStyle: '',
        rightInputFieldBorderTopStyle: '',
        rightInputFieldBorderRightStyle: '',
        rightInputFieldBorderLeftStyle: '',
        rightInputFieldBorderBottomColor: '',
        rightInputFieldBorderTopColor: '',
        rightInputFieldBorderRightColor: '',
        rightInputFieldBorderLeftColor: '',
      },
      inputFieldIcons: {
        leftInputFieldIconSource: '',
        rightInputFieldIconSource: '',
        leftInputFieldIconPosition: '',
        rightInputFieldIconPosition: '',
        leftInputFieldIconSize: '',
        rightInputFieldIconSize: '',
      },
      inputFieldMarginsAndPadding: {
        leftInputFieldMarginTop: '',
        leftInputFieldMarginRight: '',
        leftInputFieldMarginBottom: '',
        leftInputFieldMarginLeft: '',
        rightInputFieldMarginTop: '',
        rightInputFieldMarginRight: '',
        rightInputFieldMarginBottom: '',
        rightInputFieldMarginLeft: '',
        leftInputFieldPaddingTop: '',
        leftInputFieldPaddingRight: '',
        leftInputFieldPaddingBottom: '',
        leftInputFieldPaddingLeft: '',
        rightInputFieldPaddingTop: '',
        rightInputFieldPaddingRight: '',
        rightInputFieldPaddingBottom: '',
        rightInputFieldPaddingLeft: '',
      },
    },
    buttons: {
      doesDetailsButtonExist: true,
      buttonsBackgroundColor: {
        goButtonBackgroundColor: '',
        detailsButtonBackgroundColor: '',
        goButtonBackgroundColorHover: '',
        detailsButtonBackgroundColorHover: '',
      },
      buttonsText: {
        goButtonTextContent: '',
        detailsButtonTextContent: '',
        goButtonTextColor: '',
        detailsButtonTextColor: '',
        goButtonTextFontName: '',
        detailsButtonTextFontName: '',
        goButtonTextFontSize: '',
        detailsButtonTextFontSize: '',
      },
      buttonsBorders: {
        goButtonBorderBottomWidth: '',
        goButtonBorderTopWidth: '',
        goButtonBorderRightWidth: '',
        goButtonBorderLeftWidth: '',
        goButtonBorderBottomStyle: '',
        goButtonBorderTopStyle: '',
        goButtonBorderRightStyle: '',
        goButtonBorderLeftStyle: '',
        goButtonBorderBottomColor: '',
        goButtonBorderTopColor: '',
        goButtonBorderRightColor: '',
        goButtonBorderLeftColor: '',
        detailsButtonBorderBottomWidth: '',
        detailsButtonBorderTopWidth: '',
        detailsButtonBorderRightWidth: '',
        detailsButtonBorderLeftWidth: '',
        detailsButtonBorderBottomStyle: '',
        detailsButtonBorderTopStyle: '',
        detailsButtonBorderRightStyle: '',
        detailsButtonBorderLeftStyle: '',
        detailsButtonBorderBottomColor: '',
        detailsButtonBorderTopColor: '',
        detailsButtonBorderRightColor: '',
        detailsButtonBorderLeftColor: '',
        goButtonBorderRadius: '',
        detailsButtonBorderRadius: '',
      },
      buttonsHeightAndWidth: {
        goButtonHeight: '',
        goButtonWidth: '',
        detailsButtonHeight: '',
        detailsButtonWidth: '',
      },
      buttonsMarginsAndPadding: {
        goButtonMarginTop: '',
        goButtonMarginRight: '',
        goButtonMarginBottom: '',
        goButtonMarginLeft: '',
        detailsButtonMarginTop: '',
        detailsButtonMarginRight: '',
        detailsButtonMarginBottom: '',
        detailsButtonMarginLeft: '',
        goButtonPaddingTop: '',
        goButtonPaddingRight: '',
        goButtonPaddingBottom: '',
        goButtonPaddingLeft: '',
        detailsButtonPaddingTop: '',
        detailsButtonPaddingRight: '',
        detailsButtonPaddingBottom: '',
        detailsButtonPaddingLeft: '',
      },
      buttonsBellsAndWhistles: {
        goButtonBoxShadow: '',
        detailsButtonBoxShadow: '',
      },
    },
    footer: {
      footerBackgroundColor: '',
      height: '',
      width: '',
      footerBorders: {
        footerBorderBottomColor: '',
        footerBorderTopColor: '',
        footerBorderRightColor: '',
        footerBorderLeftColor: '',
      },
      elementHoverColor: '',
      elements: [
        {
          doesItExist: true,
          id: 'first',
          textContent: 'Book Now!',
          linkTo: 'https://demo.fareharbor.com/embeds/book/' + shortname + '/items/',
          color: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '20px',
          fontWeight: 'bolder',
        },
        {
          doesItExist: true,
          id: 'second',
          textContent: 'Check Availability',
          linkTo: 'https://demo.fareharbor.com/embeds/book/' + shortname + '/items/calendar/' + year + '/' + month + '/',
          color: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
        },
        {
          doesItExist: true,
          id: 'third',
          textContent: 'Offers',
          linkTo: '',
          color: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
        },
        {
          doesItExist: true,
          id: 'fourth',
          textContent: 'Deals',
          linkTo: '',
          color: '',
          height: '',
          width: '',
          fontName: '',
          fontSize: '',
          fontWeight: '',
        },
      ],
    },
  },
}

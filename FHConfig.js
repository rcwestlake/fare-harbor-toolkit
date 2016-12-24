var FHConfig = {
  toolType: 'SearchInput',
  shortname: 'bodyglove',
  text: {
    fontPrimary: '',
    headerText: 'Book Tickets Now',
    mainActionButton: 'Book Now',
    textAlign: '',
  },
  colors: {
    headerColor: 'green',
    mainButtonColor: '',
    mainButtonTextColor: '',
  },
  structure: { // consider adding the itemID so we can pass it to the api call
    cards: {
      numberOfCards: null,
      cardText: {
        topCard: 'Reserve Now',
        secondCardDown: '',
        thirdCardDown: '',
        bottomCard: '',
        //RW: we should change this to fourthCardDown to avoid confusion
      },
      marginsAndPadding: {
        global: {
          marginLeft: '',
          marginRight: '',
          marginTop: '',
          marginBottom: '',
          paddingLeft: '',
          paddingRight: '',
          paddingTop: '',
          paddingBottom: '',
        },
      },
    },
    inputFields: {
      numberOfInputFields: null,
      inputFieldText: {
        leftmostFieldText: '',
        secondFieldFromLeftText: '',
        thirdFieldFromLeftText: '',
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
    },
  },
}

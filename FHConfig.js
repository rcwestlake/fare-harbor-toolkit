var FHConfig = {
  toolType: 'Modal',
  shortname: 'bodyglove',
  text: {
    fontPrimary: '',
    headerText: 'Book Tickets Now',
    inputFieldPlaceholder: '',
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
  },
}

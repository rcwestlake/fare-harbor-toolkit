var FHConfig = (function () {
  var options = {
    shortname: 'bodyglove',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
  return {
    config: {
     toolType: 'SearchInput',
     shortname: options.shortname,
     selectedItems: [],
     text: {
       fontPrimary: '',
       headerText: 'Reservation Info',
       headerTextSize: '',
       headerExtraText: 'This is a placeholder',
       headerExtraTextLink: '',
       headerExtraTextSize: '',
       bookButtonText: 'BOOK NOW',
       bookButtonTextSize: '',
       globalTextAlign: '',
     },
     colors: {
       headerColor: '',
       headerTextColor: '',
       headerExtraTextColor: '',
       bookButtonColor: '',
       bookButtonTextColor: '',
     },
     toolDetails: {
       modal: {
         modalType: 'simple',
         cards: {
           showFullItems: 'yes',
           cardDetail: [
             {
               doesItExist: true,
               text: 'See activities and tickets',
               textType: '',
               extraText: 'Prices start at $100',
               linkTo: 'items',
               fullItems: 'yes',
               icon: 'images/ticket-icon-blue.png',
             },
             {
               doesItExist: true,
               text: 'View online calendar',
               textType: '',
               extraText: '',
               linkTo: 'all-availability',
               fullItems: 'yes',
               icon: 'images/calendar-icon-blue.png',
             },
             {
               doesItExist: true,
               text: '"It was the best tour of my life!"',
               textType: 'Quote',
               extraText: 'Julie, customer in 2016',
               linkTo: '',
               fullItems: 'yes',
               icon: '',
             },
             {
               doesItExist: false,
               text: '',
               textType: '',
               extraText: '',
               linkTo: '',
               fullItems: 'yes',
               icon: '',
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
       searchInput: {
         searchInputContainer: {
           borderDebug: false,
         },
         stackOrientation: '',
         inputFields: {
           inputFieldTypes: {
             leftInputFieldFunction: '',
             rightInputFieldFunction: '',
           },
           inputFieldBackgroundColor: {
             leftInputFieldBackgroundColor: '',
             rightInputFieldBackgroundColor: '',
           },
           inputFieldText: {
             leftInputFieldTextContent: '',
             rightInputFieldTextContent: '',
             leftInputFieldTextColor: '',
             rightInputFieldTextColor: '',
             leftInputFieldTextFontName: '',
             rightInputFieldTextFontName: '',
             leftInputFieldTextFontSize: '',
             rightInputFieldTextFontSize: '',
           },
           inputFieldBorders: {
             leftInputFieldBorderBottomColor: '',
             leftInputFieldBorderTopColor: '',
             leftInputFieldBorderRightColor: '',
             leftInputFieldBorderLeftColor: '',
             rightInputFieldBorderBottomColor: '',
             rightInputFieldBorderTopColor: '',
             rightInputFieldBorderRightColor: '',
             rightInputFieldBorderLeftColor: '',
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
             goButtonBorderBottomColor: '',
             goButtonBorderTopColor: '',
             goButtonBorderRightColor: '',
             goButtonBorderLeftColor: '',
             detailsButtonBorderBottomColor: '',
             detailsButtonBorderTopColor: '',
             detailsButtonBorderRightColor: '',
             detailsButtonBorderLeftColor: '',
           },
         },
       },
       footer: {
         isFooterSticky: false,
         footerBackgroundColor: '',
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
             linkTo: 'https://demo.fareharbor.com/embeds/book/' + options.shortname + '/items/',
             color: '',
             fontName: '',
             fontSize: '22px',
             fontWeight: 'bolder',
           },
           {
             doesItExist: true,
             id: 'second',
             textContent: 'Check Availability',
             linkTo: 'https://demo.fareharbor.com/embeds/book/' + options.shortname + '/items/calendar/' + options.year + '/' + options.month + '/',
             color: '',
             fontName: '',
             fontSize: '',
             fontWeight: '',
           },
           {
             doesItExist: true,
             id: 'third',
             textContent: 'Offers',
             linkTo: 'https://demo.fareharbor.com/embeds/book/' + options.shortname + '/items/calendar/' + options.year + '/' + options.month + '/',
             color: '',
             fontName: '',
             fontSize: '',
             fontWeight: '',
           },
           {
             doesItExist: true,
             id: 'fourth',
             textContent: 'Deals',
             linkTo: 'https://demo.fareharbor.com/embeds/book/' + options.shortname + '/items/calendar/' + options.year + '/' + options.month + '/',
             color: '',
             fontName: '',
             fontSize: '',
             fontWeight: '',
           },
         ],
       },
     },
   }
  };
})();

if(typeof module !== 'undefined') {
  module.exports = FHConfig.config;
}

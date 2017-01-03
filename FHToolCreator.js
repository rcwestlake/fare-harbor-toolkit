var config = window.FHConfig ? window.FHConfig : null;
var FHModal = window.FHModal ? window.FHModal : null;
var FHFooter = window.FHFooter ? window.FHFooter : null;
var FHSearchInput = window.FHSearchInput ? window.FHSearchInput : null;

var toolCreator = (function() {
  function create(config) {
    switch (config.toolType) {
      case 'Modal':
        return FHModal(
          {
            shortname: config.shortname,
            modalType: config.toolDetails.modal.modalType,
            showFullItems: config.toolDetails.modal.showFullItems,
            text: config.text,
            colors: config.colors,
            cards: config.toolDetails.modal.cards,
            numberOfCards: config.toolDetails.modal.cards.numberOfCards,
            cardFontsAndColors: config.toolDetails.modal.cards.fontsAndColors,
            marginsAndPadding: config.toolDetails.modal.cards.marginsAndPadding,
          }
      );
      case 'Footer':
        return FHFooter(
          {
            footer: config.toolDetails.footer,
            footerBorders: config.toolDetails.footer.footerBorders,
            elements: config.toolDetails.footer.elements,
            footerHideShowTextFont: config.toolDetails.footer.footerHideShowTextFont,
            shortname: config.shortname,
          }
      );
      case 'SearchInput':
        return FHSearchInput(
          {
            container: config.toolDetails.searchInputContainer,
            stackOrientation: config.toolDetails.inputFields.stackOrientation,
            inputFieldText: config.toolDetails.inputFields.inputFieldText,
            inputFieldTypes: config.toolDetails.inputFields.inputFieldTypes,
            inputFieldBorders: config.toolDetails.inputFields.inputFieldBorders,
            inputFieldBackgroundColor: config.toolDetails.inputFields.inputFieldBackgroundColor,
            doesDetailsButtonExist: config.toolDetails.buttons.doesDetailsButtonExist,
            buttonsBackgroundColor: config.toolDetails.buttons.buttonsBackgroundColor,
            buttonsText: config.toolDetails.buttons.buttonsText,
            buttonsBorders: config.toolDetails.buttons.buttonsBorders,
            buttonsHeightAndWidth: config.toolDetails.buttons.buttonsHeightAndWidth,
            shortname: config.shortname,
        }
      );
      default:
        console.error('No toolType specified in FHConfig.js');
    }
  }

  return create(config)
})();

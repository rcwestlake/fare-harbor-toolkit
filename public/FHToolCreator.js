var config = FHConfig.config;

var toolCreator = (function() {
  function create(config) {
    switch (config.toolType) {
      case 'Modal':
        return FHModal.create(
          {
            shortname: config.shortname,
            selectedItems: config.selectedItems,
            modalType: config.toolDetails.modal.modalType,
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
            container: config.toolDetails.searchInput.searchInputContainer,
            selectedItems: config.selectedItems,
            stackOrientation: config.toolDetails.searchInput.inputFields.stackOrientation,
            inputFieldText: config.toolDetails.searchInput.inputFields.inputFieldText,
            inputFieldTypes: config.toolDetails.searchInput.inputFields.inputFieldTypes,
            inputFieldBorders: config.toolDetails.searchInput.inputFields.inputFieldBorders,
            inputFieldBackgroundColor: config.toolDetails.searchInput.inputFields.inputFieldBackgroundColor,
            doesDetailsButtonExist: config.toolDetails.searchInput.buttons.doesDetailsButtonExist,
            buttonsBackgroundColor: config.toolDetails.searchInput.buttons.buttonsBackgroundColor,
            buttonsText: config.toolDetails.searchInput.buttons.buttonsText,
            buttonsBorders: config.toolDetails.searchInput.buttons.buttonsBorders,
            buttonsHeightAndWidth: config.toolDetails.searchInput.buttons.buttonsHeightAndWidth,
            shortname: config.shortname,
        }
      );
      default:
        console.error('No toolType specified in FHConfig.js');
    }
  }

  return create(config)
})();

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
            showFullItems: config.toolDetails.modal.cards.showFullItems,
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
            shortname: config.shortname,
          }
      );
      case 'SearchInput':
        return FHSearchInput(
          {
            container: config.toolDetails.searchInput.searchInputContainer,
            selectedItems: config.selectedItems,
            stackOrientation: config.toolDetails.searchInput.stackOrientation,
            text: config.toolDetails.searchInput.inputFields.text,
            inputFieldTypes: config.toolDetails.searchInput.inputFields.inputFieldTypes,
            borders: config.toolDetails.searchInput.inputFields.borders,
            inputFieldBackgroundColor: config.toolDetails.searchInput.inputFields.inputFieldBackgroundColor,
            doesDetailsButtonExist: config.toolDetails.searchInput.buttons.doesDetailsButtonExist,
            backgroundColor: config.toolDetails.searchInput.buttons.backgroundColor,
            text: config.toolDetails.searchInput.buttons.text,
            borders: config.toolDetails.searchInput.buttons.borders,
            shortname: config.shortname,
        }
      );
      default:
        console.error('No toolType specified in FHConfig.js');
    }
  }

  return create(config)
})();

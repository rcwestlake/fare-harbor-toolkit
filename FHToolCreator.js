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
            marginsAndPadding: config.toolDetails.modal.cards.marginsAndPadding.global,
          }
      );
      case 'Footer':
        return FHFooter(
          {
            footer: config.structure.footer,
            footerBorders: config.structure.footer.footerBorders,
            elements: config.structure.footer.elements,
            footerHideShowTextFont: config.structure.footer.footerHideShowTextFont,
            shortname: config.shortname,
          }
      );
      case 'SearchInput':
        return FHSearchInput(
          {
            inputFieldText: config.structure.inputFields.inputFieldText,
            inputFieldTypes: config.structure.inputFields.inputFieldTypes,
            inputFieldHeightAndWidth: config.structure.inputFields.inputFieldHeightAndWidth,
            inputFieldIcons: config.structure.inputFields.inputFieldIcons,
            inputFieldBorders: config.structure.inputFields.inputFieldBorders,
            inputFieldMarginsAndPadding: config.structure.inputFields.inputFieldMarginsAndPadding,
            inputFieldBackgroundColor: config.structure.inputFields.inputFieldBackgroundColor,
            buttonsBackgroundColor: config.structure.buttons.buttonsBackgroundColor,
            buttonsText: config.structure.buttons.buttonsText,
            buttonsBorders: config.structure.buttons.buttonsBorders,
            buttonsBellsAndWhistles: config.structure.buttons.buttonsBellsAndWhistles,
            buttonsHeightAndWidth: config.structure.buttons.buttonsHeightAndWidth,
            buttonsMarginsAndPadding: config.structure.buttons.buttonsMarginsAndPadding,
            shortname: config.shortname,
        }
      );
      default:
        console.error('No toolType specified in FHConfig.js');
    }
  }

  return create(config)
})();

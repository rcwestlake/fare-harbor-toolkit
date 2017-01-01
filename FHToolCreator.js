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
            inputFieldText: config.toolDetails.inputFields.inputFieldText,
            inputFieldTypes: config.toolDetails.inputFields.inputFieldTypes,
            inputFieldHeightAndWidth: config.toolDetails.inputFields.inputFieldHeightAndWidth,
            inputFieldIcons: config.toolDetails.inputFields.inputFieldIcons,
            inputFieldBorders: config.toolDetails.inputFields.inputFieldBorders,
            inputFieldMarginsAndPadding: config.toolDetails.inputFields.inputFieldMarginsAndPadding,
            inputFieldBackgroundColor: config.toolDetails.inputFields.inputFieldBackgroundColor,
            doesDetailsButtonExist: config.toolDetails.buttons.doesDetailsButtonExist,
            buttonsBackgroundColor: config.toolDetails.buttons.buttonsBackgroundColor,
            buttonsText: config.toolDetails.buttons.buttonsText,
            buttonsBorders: config.toolDetails.buttons.buttonsBorders,
            buttonsBellsAndWhistles: config.toolDetails.buttons.buttonsBellsAndWhistles,
            buttonsHeightAndWidth: config.toolDetails.buttons.buttonsHeightAndWidth,
            buttonsMarginsAndPadding: config.toolDetails.buttons.buttonsMarginsAndPadding,
            shortname: config.shortname,
        }
      );
      default:
        console.error('No toolType specified in FHConfig.js');
    }
  }

  return create(config)
})();

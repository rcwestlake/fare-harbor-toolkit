var config = window.FHConfig ? window.FHConfig : null;
var FHModal = window.FHModal ? window.FHModal : null;

var toolCreator = (function() {
  function create(config) {
    switch (config.toolType) {
      case 'Modal':
        return FHModal(
          {
            api: config.api,
            text: config.text,
            colors: config.colors,
            cards: config.structure.cards.cardText,
            numberOfCards: config.structure.cards.numberOfCards,
            marginsAndPadding: config.structure.cards.marginsAndPadding.global,
          }
      );
      case 'SearchInput':
        return FHSearchInput(config)
      default:
        console.error('No toolType specified in FHConfig.js');
    }
  }

  return create(config)
})();

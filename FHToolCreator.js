var config = window.FHConfig ? window.FHConfig : null;
var FHModal = window.FHModal ? window.FHModal : null;
console.log('Modal in toolCreator', FHModal);

var toolCreator = (function() {
  function create(config) {
    if(config.toolType === 'Modal') {
      return FHModal({api: config.api, buttonText: config.mainActionButton});
    }
  }

  return create(config)
})();

FHModal.test();

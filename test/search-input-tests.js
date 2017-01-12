var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var config = require('../public/FHConfig.js');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

//be sure to change toolType to SearchInput in FHConfig.js before running these tests!

//some tests below also depend on bodyglove as the shortname

var isBodygloveSelected;

if (config.shortname === 'bodyglove') {
  isBodygloveSelected = test.it;
} else {
  isBodygloveSelected = it.skip;
}

test.describe('Search Input',function(){
  this.timeout(15000)

  test.beforeEach(function() {
    driver.get('http://localhost:8080');
  });

  test.it('should render two input fields', function(){

    var inputFields = driver.findElements({tagName: 'select'}).then(function (select) {
      assert.equal(select.length, 2)
    })

  })

  test.it('main action button should render with the correct text', function () {

    var buttonText = config.toolDetails.searchInput.buttons.buttonsText.goButtonTextContent || 'Go!';

      driver.findElement({name: 'go-button'}).then(function(button) {
        return button.getText()
      }).then(function(text) {
        assert.strictEqual(text, buttonText);
      })

  });

  test.it('additional details button should render with correct text', function () {

    var buttonText = config.toolDetails.searchInput.buttons.buttonsText.detailsButtonTextContent || 'Full event details';

    driver.findElement({name: 'details-button'}).then(function(button) {
      return button.getText()
    }).then(function(text) {
      assert.strictEqual(text, buttonText);
    })

  })

  test.it('should render default link for main action button', function() {

    var newLink = 'https://demo.fareharbor.com/embeds/book/' + config.shortname + '/items/?full-items=yes'

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, newLink);
    })

  })

  test.it('should render an empty link by default for the additional details button', function() {

    driver.findElement({className: 'details-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, '');
    })

  })

  test.it('should change the main action button link appropriately when the date dropdown value changes', function () {

    var newLink = 'https://demo.fareharbor.com/embeds/book/' + config.shortname + '/items/calendar/2017/03/';

    var dateField = driver.findElement({id: 'date-dropdown'});
    dateField.click();
    dateField.sendKeys('March');
    dateField.click();

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, newLink);
    })

  })

  isBodygloveSelected('should change the main action button link appropriately when the event dropdown changes', function () {
    //this test depends on 'bodyglove' for the shortname
    this.timeout(10000);

      var detailsButton = driver.findElement({className: 'details-button'});
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();

      var eventField = driver.findElement({id: 'event-dropdown'});
      eventField.click();
      eventField.sendKeys('Sno');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/1/');
      })

  })

  isBodygloveSelected('should change the main action button link appropriately when both event and date input data change', function () {
    //this test depends on 'bodyglove' for the shortname

      var detailsButton = driver.findElement({className: 'details-button'});
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();

      var eventField = driver.findElement({id: 'event-dropdown'});
      eventField.click();
      eventField.sendKeys('Sno');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      var dateField = driver.findElement({id: 'date-dropdown'});
      dateField.click();
      dateField.sendKeys('Ma');
      dateField.click();

      driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/03/');
      })

  })

  isBodygloveSelected('should render the correct url on the main action button when the user enters in date and event data and then clicks back on the default text for the date', function () {
    //this test depends on 'bodyglove' for the shortname

      var detailsButton = driver.findElement({className: 'details-button'});
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();

      var dateField = driver.findElement({id: 'date-dropdown'});
      dateField.click();
      dateField.sendKeys('Ma');
      dateField.click();

      var eventField = driver.findElement({id: 'event-dropdown'});
      eventField.click();
      eventField.sendKeys('Sno');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      dateField.click();
      dateField.sendKeys('Whe');
      dateField.click();

      driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/1/');
      })

  })

  isBodygloveSelected('should render the correct url on the main action button when the user enters in date and event data and then clicks back on the default text for the event', function () {
    //this test depends on 'bodyglove' for the shortname

      var detailsButton = driver.findElement({className: 'details-button'});
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();

      var eventField = driver.findElement({id: 'event-dropdown'});
      eventField.click();
      eventField.sendKeys('Sno');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      var dateField = driver.findElement({id: 'date-dropdown'});
      dateField.click();
      dateField.sendKeys('Ma');
      dateField.click();

      eventField.click();
      eventField.sendKeys('Which');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/calendar/2017/03/');
      })

  })

  test.it('additional details button should be disabled by default', function () {

    driver.findElement({className: 'details-button'}).then(function (button) {
      return button.getAttribute('disabled')
    }).then(function (status) {
      assert.strictEqual(status, 'true');
    })

  })

  test.it('additional details button should not open lightframe by default', function () {

    var detailsButton = driver.findElement({className: 'details-button'});
    detailsButton.click();

    driver.findElement({className: 'fh-ready'}).then(function (wrapper) {
      return wrapper.getAttribute('style')
    }).then(function (style) {
      assert.notEqual(style, 'overflow: hidden;');
    })

  })

  isBodygloveSelected('additional details button should be enabled when an event is selected', function () {
    //this test depends on 'bodyglove' for the shortname

      var detailsButton = driver.findElement({className: 'details-button'});
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();

      var eventField = driver.findElement({id: 'event-dropdown'});
      eventField.click();
      eventField.sendKeys('Sno');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      driver.findElement({className: 'details-button'}).then(function (button) {
        return button.getAttribute('disabled')
      }).then(function (status) {
        assert.strictEqual(status, null);
      })

  })

  isBodygloveSelected('should change the additional details button link appropriately when the event data changes', function () {
    //this test depends on 'bodyglove' for the shortname

      var detailsButton = driver.findElement({className: 'details-button'});
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();
      detailsButton.click();

      var eventField = driver.findElement({id: 'event-dropdown'});
      eventField.click();
      eventField.sendKeys('Sno');
      eventField.sendKeys(webdriver.Key.RETURN);
      eventField.click();

      driver.findElement({className: 'details-button-wrapper'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/1/?full-items=yes');
      })

  })

  test.it('lightframe should activate when user presses the main action button', function () {

    var goButton = driver.findElement({className: 'go-button'})
    goButton.click();

    driver.findElement({className: 'fh-ready'}).then(function (wrapper) {
      return wrapper.getAttribute('style')
    }).then(function (style) {
      assert.strictEqual(style, 'overflow: hidden;');
    })

  })

})

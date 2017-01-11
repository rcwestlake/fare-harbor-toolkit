var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var config = require('../public/FHConfig.js');

//be sure to change toolType to SearchInput in FHConfig.js before running these tests!
//some tests below also depend on bodyglove as the shortname

test.describe('Search Input',function(){
  this.timeout(15000)

  test.it('should render two input fields', function(){
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    var inputFields = driver.findElements({tagName: 'select'}).then(function (select) {
      assert.equal(select.length, 2)
    })

    driver.quit()
  })

  test.it('main action button should render with the correct text', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var buttonText = config.toolDetails.searchInput.buttons.buttonsText.goButtonTextContent || 'Go!';

    driver.get('http://localhost:8080');

      driver.findElement({name: 'go-button'}).then(function(button) {
        return button.getText()
      }).then(function(text) {
        assert.strictEqual(text, buttonText);
      })

    driver.quit()
  });

  test.it('additional details button should render with correct text', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var buttonText = config.toolDetails.searchInput.buttons.buttonsText.detailsButtonTextContent || 'See full event details';

    driver.get('http://localhost:8080');

    driver.findElement({name: 'details-button'}).then(function(button) {
      return button.getText()
    }).then(function(text) {
      assert.strictEqual(text, buttonText);
    })

  driver.quit()
  })

  test.it('should render default link for main action button', function() {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var newLink = 'https://demo.fareharbor.com/embeds/book/' + config.shortname + '/items/?full-items=yes'

    driver.get('http://localhost:8080');

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, newLink);
    })

    driver.quit()
  })

  test.it('should render an empty link by default for the additional details button', function() {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElement({className: 'details-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, '');
    })

    driver.quit()
  })

  test.it('should change the main action button link appropriately when the date dropdown value changes', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var newLink = 'https://demo.fareharbor.com/embeds/book/' + config.shortname + '/items/calendar/2017/03/';

    driver.get('http://localhost:8080');

    var dateField = driver.findElement({className: 'right-field-input'});
    dateField.click();
    dateField.sendKeys('March');
    dateField.click();

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, newLink);
    })

    driver.quit()
  })

  test.it('should change the main action button link appropriately when the event dropdown changes', function () {
    //this test depends on 'bodyglove' for the shortname
    this.timeout(10000);
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

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

    var eventField = driver.findElement({className: 'left-field-input'});
    eventField.click();
    eventField.sendKeys('Sno');
    eventField.sendKeys(webdriver.Key.RETURN);
    eventField.click();

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/1/');
    })

    driver.quit()
  })

  test.it('should change the main action button link appropriately when both event and date input data change', function () {
    //this test depends on 'bodyglove' for the shortname
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

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

    var eventField = driver.findElement({className: 'left-field-input'});
    eventField.click();
    eventField.sendKeys('Sno');
    eventField.sendKeys(webdriver.Key.RETURN);
    eventField.click();

    var dateField = driver.findElement({className: 'right-field-input'});
    dateField.click();
    dateField.sendKeys('Ma');
    dateField.click();

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/03/');
    })

    driver.quit()
  })

  test.it('should render the correct url on the main action button when the user enters in date and event data and then clicks back on the default text for the date', function () {
    //this test depends on 'bodyglove' for the shortname
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

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

    var dateField = driver.findElement({className: 'right-field-input'});
    dateField.click();
    dateField.sendKeys('Ma');
    dateField.click();

    var eventField = driver.findElement({className: 'left-field-input'});
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

    driver.quit()
  })

  test.it('should render the correct url on the main action button when the user enters in date and event data and then clicks back on the default text for the event', function () {
    //this test depends on 'bodyglove' for the shortname
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

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

    var eventField = driver.findElement({className: 'left-field-input'});
    eventField.click();
    eventField.sendKeys('Sno');
    eventField.sendKeys(webdriver.Key.RETURN);
    eventField.click();

    var dateField = driver.findElement({className: 'right-field-input'});
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

    driver.quit()
  })

  test.it('additional details button should be disabled by default', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElement({className: 'details-button'}).then(function (button) {
      return button.getAttribute('disabled')
    }).then(function (status) {
      assert.strictEqual(status, 'true');
    })

    driver.quit()

  })

  test.it('additional details button should not open lightframe by default', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    var detailsButton = driver.findElement({className: 'details-button'});
    detailsButton.click();

    driver.findElement({className: 'fh-ready'}).then(function (wrapper) {
      return wrapper.getAttribute('style')
    }).then(function (style) {
      assert.notEqual(style, 'overflow: hidden;');
    })

    driver.quit()
  })

  test.it('additional details button should be enabled when an event is selected', function () {
    //this test depends on 'bodyglove' for the shortname
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

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

    var eventField = driver.findElement({className: 'left-field-input'});
    eventField.click();
    eventField.sendKeys('Sno');
    eventField.sendKeys(webdriver.Key.RETURN);
    eventField.click();

    driver.findElement({className: 'details-button'}).then(function (button) {
      return button.getAttribute('disabled')
    }).then(function (status) {
      assert.strictEqual(status, null);
    })

    driver.quit()
  })

  test.it('should change the additional details button link appropriately when the event data changes', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

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

    var eventField = driver.findElement({className: 'left-field-input'});
    eventField.click();
    eventField.sendKeys('Sno');
    eventField.sendKeys(webdriver.Key.RETURN);
    eventField.click();

    driver.findElement({className: 'details-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/183/calendar/2017/1/?full-items=yes');
    })

    driver.quit()

  })

  test.it('lightframe should activate when user presses the main action button', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    var goButton = driver.findElement({className: 'go-button'})
    goButton.click();

    driver.findElement({className: 'fh-ready'}).then(function (wrapper) {
      return wrapper.getAttribute('style')
    }).then(function (style) {
      assert.strictEqual(style, 'overflow: hidden;');
    })

    driver.quit()
  })

})

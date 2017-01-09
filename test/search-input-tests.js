var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

//be sure to change toolType to SearchInput in FHConfig.js before running these tests!

test.describe('Search Input',function(){
  this.timeout(10000)

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

    driver.get('http://localhost:8080');

      driver.findElement({name: 'go-button'}).then(function(button) {
        return button.getText()
      }).then(function(text) {
        assert.strictEqual(text, 'Go!');
      })

    driver.quit()
  });

  test.it('additional details button should render with correct text', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElement({name: 'details-button'}).then(function(button) {
      return button.getText()
    }).then(function(text) {
      assert.strictEqual(text, 'See full event details');
    })

  driver.quit()
  })

  test.it('should render default link for main action button', function() {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/?full-items=yes');
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

    driver.get('http://localhost:8080');

    var dateField = driver.findElement({className: 'right-field-input'});
    dateField.click();
    dateField.sendKeys('Ma');
    dateField.click();

    driver.findElement({className: 'go-button-wrapper'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/calendar/2017/03/');
    })

    driver.quit()
  })

})

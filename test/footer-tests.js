var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

//be sure to change toolType to Footer in FHConfig.js and shortname to 'bodyglove' in the same file before running these tests!

test.describe('Footer', function () {
  this.timeout(10000)

  it.only('should render with four elements by default', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElements({className: 'footer-element'}).then(function (element) {
      assert.strictEqual(element.length, 4);
    })

    driver.quit();
  })

})

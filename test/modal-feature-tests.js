var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
              .forBrowser('chrome')
              .build();
var test = require('selenium-webdriver/testing');
var assert = require('chai').assert;

test.describe('Modal - feature tests', function() {
  this.timeout(10000)

  test.beforeEach(function() {
    driver.get('http://localhost:8080')
  });

  test.it('finds the Modal button', function() {
    driver.findElements({className: 'FH-reservation-button'}).then(function(res) {
      assert.equal(res.length, 1, 'book button has 21 characters')
    });
  });

  test.ignore('finds the Modal button', function() {
    driver.findElements({className: 'FH-reservation-button'}).then(function(res) {
      assert.equal(res, 'BOOK NOW', 'book button has 21 characters')
    });
    driver.quit();
  });
})

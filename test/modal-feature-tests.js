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

  test.afterEach(function() {
    driver.quit();
  });

  test.it('visits localhost:8080', function() {
    assert(true);
  });
})

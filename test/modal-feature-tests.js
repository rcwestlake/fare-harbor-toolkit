var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
              .forBrowser('chrome')
              .build();
var test = require('selenium-webdriver/testing');
var assert = require('chai').assert;
// var config = require('./mock-config.js');

test.describe('Modal - feature tests', function() {
  this.timeout(10000);

  test.beforeEach(function() {
    driver.get('http://localhost:8080');
  });

  test.it('finds the Modal button', function() {
    driver.findElements({className: 'FH-reservation-button'}).then(function(res) {
      assert.equal(res.length, 1, 'book button has 21 characters')
    });
  });

  test.it('finds the Modal button text', function() {
    driver.findElement({className: 'FH-reservation-button'}).then(function(res) {
      return res.getAttribute("innerText")
    }).then(function(text) {
      assert.equal(text, 'BOOK NOW', 'book button has BOOK NOW text')
    })
  });

  test.it('finds the <p> tags in Modal', function() {
    driver.findElement({className: 'FH-modal-header'}).findElements({tagName: 'p'}).then(function(res) {
      assert.equal(res.length, 2, 'Modal header has correct number of <p> tags')
    })
  });

  test.it('finds the Modal title', function() {
    driver.findElement({className: 'FH-header-title'}).then(function(res) {
      return res.getAttribute("innerText")
    }).then(function(text) {
      assert.equal(text, 'Reservation Info', 'displays correct text in header')
    })
  });

  test.it('finds the Modal header extraText', function() {
    driver.findElement({className: 'FH-extra-title'}).then(function(res) {
      return res.getAttribute("innerText")
    }).then(function(text) {
      assert.equal(text, 'This is a placeholder', 'displays correct extraText in header')
    })
  });

  test.it('finds the length of cards in Modal', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      assert.equal(res.length, 3, 'displays correct number of cards')
    })
    driver.quit();
  });
})

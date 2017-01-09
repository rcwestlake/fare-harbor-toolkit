var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
              .forBrowser('chrome')
              .build();
var test = require('selenium-webdriver/testing');
var assert = require('chai').assert;
var config = require('../public/FHConfig.js');

test.describe('Modal - feature tests', function() {
  this.timeout(10000);

  test.beforeEach(function() {
    driver.get('http://localhost:8080');
  });

  test.it('finds the Modal button', function() {
    driver.findElements({className: 'FH-reservation-button'}).then(function(res) {
      assert.equal(res.length, 1, 'displays only 1 button')
    });
  });

  test.it('finds the Modal button text', function() {
    driver.findElement({className: 'FH-reservation-button'}).then(function(res) {
      return res.getAttribute("innerText")
    }).then(function(text) {
      assert.equal(text, config.text.bookButtonText, 'book button has BOOK NOW text')
    })
  });

  test.it('finds the <p> tags in Modal', function() {
    driver.findElement({className: 'FH-modal-header'}).findElements({tagName: 'p'}).then(function(res) {
      assert.equal(res.length, 2, 'Modal header has correct number of <p> tags')
    })
  });

  test.it('finds the Modal title', function() {
    driver.findElement({className: 'FH-header-title'}).then(function(res) {
      return res.getAttribute('innerText')
    }).then(function(text) {
      assert.equal(text, config.text.headerText, 'displays correct text in header')
    })
  });

  test.it('finds the Modal header extraText', function() {
    driver.findElement({className: 'FH-extra-title'}).then(function(res) {
      return res.getAttribute("innerText")
    }).then(function(text) {
      assert.equal(text, config.text.headerExtraText, 'displays correct extraText in header')
    })
  });

  test.it('finds the length of cards in Modal', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      assert.equal(res.length, 3, 'displays correct number of cards')
    })
  });

  test.it('finds the text of the first card', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      return res[0].getAttribute('innerText');
    }).then(function(text) {
      assert.equal(text, config.toolDetails.modal.cards.cardDetail[0].text, 'displays correct text for first card')
    })
  });

  test.it('has the correct href for the first card', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      return res[0].getAttribute('href');
    }).then(function(link) {
      assert.equal(link, config.toolDetails.modal.cards.cardDetail[0].linkTo, 'displays correct href')
    })
  });

  test.it('finds the text of the second card', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      return res[1].getAttribute('innerText');
    }).then(function(text) {
      assert.equal(text, config.toolDetails.modal.cards.cardDetail[1].text, 'displays correct text for second card')
    })
  });

  test.it('finds the href of the second card', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      return res[1].getAttribute('href');
    }).then(function(text) {
      assert.equal(text, config.toolDetails.modal.cards.cardDetail[1].linkTo, 'displays correct href for second card')
    })
  });

  test.it('finds the text of the third card', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      return res[2].getAttribute('innerText');
    }).then(function(text) {
      assert.equal(text, config.toolDetails.modal.cards.cardDetail[2].text, 'displays correct text for third card')
    })
  });

  test.it('finds the href of the third card', function() {
    driver.findElements({className: 'FH-modal-card'}).then(function(res) {
      return res[2].getAttribute('href');
    }).then(function(text) {
      assert.equal(text, config.toolDetails.modal.cards.cardDetail[2].linkTo, 'displays correct href for third card')
    })
  });

  test.it('changes the book now text on click', function() {
    var bookButton = driver.findElement({className: 'FH-reservation-button'})
    bookButton.click();

    driver.findElement({className: 'FH-reservation-button'}).then(function(res) {
      return res.getAttribute('innerText')
    })
    .then(function(text) {
      assert.equal(text, 'X', 'displays changed text after book button is clicked')
    })
    driver.quit();
  });

  if(config.toolDetails.modal.modalType.toLowerCase() === 'showitems') {
    //run tests for showItems type
  }
})

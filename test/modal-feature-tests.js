var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
              .forBrowser('chrome')
              .build();
var test = require('selenium-webdriver/testing');
var assert = require('chai').assert;
var config = require('../public/FHConfig.js');

test.describe('Modal - feature tests', function() {
  this.timeout(15000);

  test.beforeEach(function() {
    driver.get('http://localhost:8080');
  });

  test.it('should find the Modal button', function() {
    driver.findElements({className: 'FH-reservation-button'}).then(function(res) {
      assert.equal(res.length, 1);
    });
  });

  test.it('should find the Modal button text', function() {
    driver.findElement({className: 'FH-reservation-button'}).then(function(res) {
      return res.getAttribute("innerText")
    }).then(function(text) {
      assert.equal(text, config.text.bookButtonText);
    })
  });

  test.it('should change the book button text on click', function() {
    var bookButton = driver.findElement({className: 'FH-reservation-button'})
    bookButton.click();

    driver.findElement({className: 'FH-reservation-button'}).then(function(res) {
      return res.getAttribute('innerText')
    })
    .then(function(text) {
      assert.equal(text, 'X');
    })
  });

  test.it('should change the book button text after multiple clicks', function() {
    var bookButton = driver.findElement({className: 'FH-reservation-button'})
    bookButton.click();
    bookButton.click();
    bookButton.click();
    bookButton.click();

    driver.findElement({className: 'FH-reservation-button'}).then(function(res) {
      return res.getAttribute('innerText')
    })
    .then(function(text) {
      assert.equal(text, config.text.bookButtonText);
    })
  });

  /*--- Testing for app throwing errors when types are incorrect in FHConfig ---*/
  // To run these, follow the step above the test description

  if(typeof config.shortname !== 'string') {
    test.it('should throw an error and not run if shorname type is not a string in FHConfig', function() {
      driver.findElements({className: 'FH-modal-card'}).then(function(res) {
        assert.equal(res.length, 0);
      })
    });
  }

  /*--- To run these tests, set the modalType in FHConfig to 'Simple' ---*/

  if(config.toolDetails.modal.modalType.toLowerCase() === 'simple') {
    test.it('should find the <p> tags in Modal', function() {
      driver.findElement({className: 'FH-modal-header'}).findElements({tagName: 'p'}).then(function(res) {
        assert.equal(res.length, 2);
      })
    });

    test.it('should find the Modal title', function() {
      driver.findElement({className: 'FH-header-title'}).then(function(res) {
        return res.getAttribute('innerText')
      }).then(function(text) {
        assert.equal(text, config.text.headerText);
      })
    });

    test.it('should find the Modal header - extraText', function() {
      driver.findElement({className: 'FH-extra-title'}).then(function(res) {
        return res.getAttribute("innerText")
      }).then(function(text) {
        assert.equal(text, config.text.headerExtraText);
      })
    });

    test.it('should find the correct number of cards in Modal', function() {
      driver.findElements({className: 'FH-modal-card'}).then(function(res) {
        assert.equal(res.length, 3);
      })
    });

    test.it('should find the text of the first card', function() {
      driver.findElements({className: 'FH-modal-card'}).then(function(res) {
        return res[0].getAttribute('innerText');
      }).then(function(text) {
        assert.equal(text, config.toolDetails.modal.cards.cardDetail[0].text + config.toolDetails.modal.cards.cardDetail[0].extraText);
      })
    });

    test.it('should have the correct icon path for the first card', function() {
      //this test requires the 'localhost:8080' url
      if(config.toolDetails.modal.cards.cardDetail[0].icon) {
        var url = 'http://localhost:8080/'
        driver.findElements({className: 'FH-card-icon'}).then(function(res) {
          return res[0].getAttribute('src');
        }).then(function(link) {
          assert.equal(link, url + config.toolDetails.modal.cards.cardDetail[0].icon);
        })
      }
    });

    test.it('should find the text of the second card', function() {
      driver.findElements({className: 'FH-modal-card'}).then(function(res) {
        return res[1].getAttribute('innerText');
      }).then(function(text) {
        assert.equal(text, config.toolDetails.modal.cards.cardDetail[1].text + config.toolDetails.modal.cards.cardDetail[1].extraText);
      })
    });

    test.it('should have the correct icon path for the second card', function() {
      //this test requires the localhost:8080 url
      if(config.toolDetails.modal.cards.cardDetail[1].icon) {
        var url = 'http://localhost:8080/'
        driver.findElements({className: 'FH-card-icon'}).then(function(res) {
          return res[1].getAttribute('src');
        }).then(function(link) {
          assert.equal(link, url + config.toolDetails.modal.cards.cardDetail[1].icon);
        })
      }
    });

    test.it('should find the text of the third card', function() {
      driver.findElements({className: 'FH-modal-card'}).then(function(res) {
        return res[2].getAttribute('innerText');
      }).then(function(text) {
        assert.equal(text, config.toolDetails.modal.cards.cardDetail[2].text + config.toolDetails.modal.cards.cardDetail[2].extraText);
      })
    });

    test.it('should have the correct icon path for the third card', function() {
      //this test requires the localhost:8080 url
      if(config.toolDetails.modal.cards.cardDetail[2].icon) {
        var url = 'http://localhost:8080/'
        driver.findElements({className: 'FH-card-icon'}).then(function(res) {
          return res[2].getAttribute('src');
        }).then(function(link) {
          assert.equal(link, url + config.toolDetails.modal.cards.cardDetail[2].icon);
        })
      }
      driver.quit();
    });
  }

  /*--- To run these tests, set the modalType in FHConfig to 'showItems' ---*/

  if(config.toolDetails.modal.modalType.toLowerCase() === 'showitems') {
    test.it('should find the Modal title', function() {
      driver.findElement({className: 'FH-header-title'}).then(function(res) {
        return res.getAttribute('innerText')
      }).then(function(text) {
        assert.equal(text, config.text.headerText);
      })
    });

    test.it('should find the Modal header - extraText', function() {
      driver.findElement({className: 'FH-extra-title'}).then(function(res) {
        return res.getAttribute("innerText")
      }).then(function(text) {
        assert.equal(text, config.text.headerExtraText);
      })
    });

    test.it('should find the correct number of cards with images', function() {
      var cards;

      if(config.selectedItems.length) {
        cards = config.selectedItems
      } else {
        cards = config.toolDetails.modal.cards.cardDetail.filter(function(card) {
          return card.doesItExist === true
        })
      }

      var bookButton = driver.findElement({className: 'FH-reservation-button'})
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();

      driver.findElements({className: 'FH-item-img'}).then(function(items) {
        assert.strictEqual(items.length, cards.length);
      })
    })

    test.it('should find the correct number of extraText elements', function() {
      var elements;

      if(config.selectedItems.length) {
        elements = config.selectedItems
      } else {
        elements = config.toolDetails.modal.cards.cardDetail.filter(function(card) {
          return card.doesItExist === true
        })
      }

      var bookButton = driver.findElement({className: 'FH-reservation-button'})
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();
      bookButton.click();

      driver.findElements({className: 'FH-items-extratext'}).then(function(items) {
        assert.strictEqual(items.length, elements.length);
      })
      driver.quit();
    })
  }
});

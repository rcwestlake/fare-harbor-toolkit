var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var config = require('../public/FHConfig.js');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

//be sure to change toolType to Footer in FHConfig.js before running these tests!

var doesThirdNodeExist;

if (config.toolDetails.footer.elements[2].doesItExist) {
  doesThirdNodeExist = test.it;
} else {
  doesThirdNodeExist = it.skip;
}

test.describe('Footer', function () {
  this.timeout(10000)

  test.beforeEach(function() {
    driver.get('http://localhost:8080');
  });

  test.it('should render with the number of elements specified in the config object', function () {

    var realElements = config.toolDetails.footer.elements.filter(function (elem) {
      return elem.doesItExist === true;
    });

    var howManyElements = realElements.length;

    driver.findElements({className: 'footer-element'}).then(function (element) {
      assert.strictEqual(element.length, howManyElements);
    })

  })

  test.it('the default text for the first element in the footer should display the correct value', function () {

    var elemText = config.toolDetails.footer.elements[0].textContent || 'Book Now!';

    driver.findElement({id: 'first'}).then(function (elem) {
      return elem.getText()
    }).then(function (text) {
      assert.strictEqual(text, elemText);
    })

  })

  test.it('the first text node should go to the correct link', function () {

    var newLink = config.toolDetails.footer.elements[0].linkTo;

    driver.findElement({id: 'firstlink'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, newLink);
    })

  })

  doesThirdNodeExist('the third text node should go to the correct link', function () {

    var newLink = config.toolDetails.footer.elements[2].linkTo;

      driver.findElement({id: 'thirdlink'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, newLink);
      })

  })

  test.it('lightframe should activate when user clicks on the first element', function () {

    var bookNowLink = driver.findElement({id: 'first'})
    bookNowLink.click();

    driver.findElement({className: 'fh-ready'}).then(function (wrapper) {
      return wrapper.getAttribute('style')
    }).then(function (style) {
      assert.strictEqual(style, 'overflow: hidden;');
    })

  })


})

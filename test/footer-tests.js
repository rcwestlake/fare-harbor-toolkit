var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var config = require('../public/FHConfig.js');

//be sure to change toolType to Footer in FHConfig.js before running these tests!

test.describe('Footer', function () {
  this.timeout(10000)

  test.it('should render with the number of elements specified in the config object', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    var realElements = config.toolDetails.footer.elements.filter(function (elem) {
      return elem.doesItExist === true;
    });

    var howManyElements = realElements.length;

    driver.findElements({className: 'footer-element'}).then(function (element) {
      assert.strictEqual(element.length, howManyElements);
    })

    driver.quit();
  })

  test.it('the default text for the first element in the footer should display the correct value', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var elemText = config.toolDetails.footer.elements[0].textContent || 'Book Now!';

    driver.get('http://localhost:8080');

    driver.findElement({id: 'first'}).then(function (elem) {
      return elem.getText()
    }).then(function (text) {
      assert.strictEqual(text, elemText);
    })

    driver.quit();

  })

  test.it('the first text node should go to the correct link', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var newLink = config.toolDetails.footer.elements[0].linkTo;

    driver.get('http://localhost:8080');

    driver.findElement({id: 'firstlink'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, newLink);
    })

    driver.quit();

  })

  test.it('the third text node should go to the correct link', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    var newLink = config.toolDetails.footer.elements[2].linkTo;

    driver.get('http://localhost:8080');

      driver.findElement({id: 'thirdlink'}).then(function (wrapper) {
        return wrapper.getAttribute('href')
      }).then(function (link) {
        assert.strictEqual(link, newLink);
      })

    driver.quit();
  })

  test.it('lightframe should activate when user clicks on the first element', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    var bookNowLink = driver.findElement({id: 'first'})
    bookNowLink.click();

    driver.findElement({className: 'fh-ready'}).then(function (wrapper) {
      return wrapper.getAttribute('style')
    }).then(function (style) {
      assert.strictEqual(style, 'overflow: hidden;');
    })

    driver.quit()
  })


})

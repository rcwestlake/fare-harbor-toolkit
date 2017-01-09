var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

//be sure to change toolType to Footer in FHConfig.js and shortname to 'bodyglove' in the same file before running these tests!

test.describe('Footer', function () {
  this.timeout(10000)

  test.it('should render with four elements by default', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElements({className: 'footer-element'}).then(function (element) {
      assert.strictEqual(element.length, 4);
    })

    driver.quit();
  })

  test.it('the default text for the first element in the footer should read "Book Now!"', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElements({id: 'first'}).then(function (elem) {
      return elem.getText()
    }).then(function (text) {
      assert.strictEqual(text, 'Book Now!');
    })

    driver.quit();

  })

  it.only('the default link for the Book Now node should be correct', function () {
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    driver.findElements({id: 'firstlink'}).then(function (wrapper) {
      return wrapper.getAttribute('href')
    }).then(function (link) {
      assert.strictEqual(link, 'https://demo.fareharbor.com/embeds/book/bodyglove/items/?full-items=yes');
    })

    driver.quit();

  })

  //also test if the lightframe is activated by clickin on the Book Now link

})

var assert = require('assert');

// describe('webdriver.io page', function() {
//     it('should have the right title - the fancy generator way', function () {
//         browser.url('http://webdriver.io');
//         var title = browser.getTitle();
//         assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
//     });
// });

describe('Search Input', function () {
  // it('should render correct user input', function() {
  //   browser.url('http://localhost:8080/');
  //   //pass SearchInput to config file
  //   var leftFieldInput = browser.element(".left-field-input");
  //   var rightFieldInput = browser.element(".right-field-input");
  //
  //   browser.click(".left-field-input");
  //   leftFieldInput.setValue('Whale Watch');
  //   browser.click(".right-field-input");
  //   rightFieldInput.setValue('January 2017');
  //
  //   assert.equal(leftFieldInput.getValue(), 'Whale Watch');
  //   assert.equal(rightFieldInput.getValue(), 'January 2017');
  // });

  it('should render the correct default link for the Go! button', function() {
    browser.url('http://localhost:8080/')
    var linkText = browser.getAttribute('=Go!', 'href');
    assert.strictEqual(linkText, "https://demo.fareharbor.com/embeds/book/bodyglove/items/?full-items=yes");
  });
});

//passing in a given value for the toolType will render the correct page
//input fields recognize correct user input

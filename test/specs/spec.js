var assert = require('assert');

describe('Search Input', function () {

  it('should render the correct default link for the Go! button', function() {
    browser.url('http://localhost:8080/')
    var linkText = browser.getAttribute('=Go!', 'href');
    assert.strictEqual(linkText, "https://demo.fareharbor.com/embeds/book/bodyglove/items/?full-items=yes");
  });

  it('should render the correct default link for the Details button', function() {
    browser.url('http://localhost:8080/')
    var linkText = browser.getAttribute('=See full event details', 'href');
    assert.strictEqual(linkText, "");
  });

  it('should display the correct text in the left dropdown', function() {
    browser.url('http://localhost:8080/')
    assert.strictEqual("dogs", "cats");
  });
});

//passing in a given value for the toolType will render the correct page
//input fields recognize correct user input

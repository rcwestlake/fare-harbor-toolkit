var assert = require('chai').assert;
var searchInput = require('../public/FHSearchInput.js');

describe('Search Input', function(){
  it('should render two input fields', function(){
    var leftFieldInput = searchInput.querySelector('.left-field-input');
    console.log(leftFieldInput);
  });
});

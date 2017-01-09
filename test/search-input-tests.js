var assert    = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');

test.describe('Search Input',function(){
  this.timeout(10000)
  test.it('should render two input fields', function(){
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    driver.get('http://localhost:8080');

    // var title = driver.findElement({name: 'title'})
    // var description = driver.findElement({name: 'description'})
    // title.sendKeys('this is a title').then(()=>{
    //   return title.getAttribute('value')
    // }).then((value)=>{
    //   assert.equal(value, 'this is a title')
    // })
    //
    // description.sendKeys('this is a description').then(()=>{
    //   return description.getAttribute('value')
    // }).then((value)=>{
    //   assert.equal(value, 'this is a description')
    // })

    driver.quit()
  })
})

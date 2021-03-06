var assert    = require('chai').assert;
var webdriver = require('selenium-webdriver');
var test      = require('selenium-webdriver/testing');
var expect = require('chai').expect;

test.describe('testing diary', function() {
  var driver;
  this.timeout(10000);

  test.beforeEach(function() {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  })

  test.afterEach(function() {
    driver.quit();
  })

  test.it('adds the total calories eaten for breakfast', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-breakfast'}).click();

    driver.findElement({id: 'breakfast-total-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '150')
    });
  });

  test.it('calculates the total remaining calories for breakfast', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-breakfast'}).click();

    driver.findElement({id: 'breakfast-remaining-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '250')
    });
  });

  test.it('total remaining calories for breakfast are green if zero or positive', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-breakfast'}).click();

    driver.findElement({id: 'breakfast-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('total remaining calories for breakfast are red if negative', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '350'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-breakfast'}).click();

    driver.findElement({id: 'breakfast-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(255, 0, 0, 1)')
    });
  });

  test.it('adds the total calories eaten for lunch', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'sandwich', calories: '200'}, {name: 'juice', calories: '150'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-lunch'}).click();

    driver.findElement({id: 'lunch-total-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '350')
    });
  });

  test.it('calculates the total remaining calories for lunch', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'sandwich', calories: '200'}, {name: 'juice', calories: '150'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-lunch'}).click();

    driver.findElement({id: 'lunch-remaining-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '250')
    });
  });

  test.it('total remaining calories for lunch are green if zero or positive', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-lunch'}).click();

    driver.findElement({id: 'lunch-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('total remaining calories for lunch are red if negative', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'sandwich', calories: '500'}, {name: 'juice', calories: '150'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-lunch'}).click();

    driver.findElement({id: 'lunch-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(255, 0, 0, 1)')
    });
  });

  test.it('adds the total calories eaten for dinner', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'steak', calories: '600'}, {name: 'peas', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-dinner'}).click();

    driver.findElement({id: 'dinner-total-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '650')
    });
  });

  test.it('calculates the total remaining calories for dinner', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'steak', calories: '600'}, {name: 'peas', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-dinner'}).click();

    driver.findElement({id: 'dinner-remaining-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '150')
    });
  });

  test.it('total remaining calories for dinner are green if zero or positive', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-dinner'}).click();

    driver.findElement({id: 'dinner-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('total remaining calories for dinner are red if negative', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'steak', calories: '600'}, {name: 'beer', calories: '350'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-dinner'}).click();

    driver.findElement({id: 'dinner-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(255, 0, 0, 1)')
    });
  });

  test.it('adds the total calories eaten for snack', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'oreos', calories: '300'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-snack'}).click();

    driver.findElement({id: 'snack-total-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '300')
    });
  });

  test.it('calculates the total remaining calories for snack', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'oreos', calories: '150'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-snack'}).click();

    driver.findElement({id: 'snack-remaining-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '50')
    });
  });

  test.it('total remaining calories for snack are green if zero or positive', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'oreos', calories: '150'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-snack'}).click();

    driver.findElement({id: 'snack-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('total remaining calories for snack are red if negative', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'peach', calories: '225'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-snack'}).click();

    driver.findElement({id: 'snack-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(255, 0, 0, 1)')
    });
  });

  test.it('adds the total calories burned during exercise', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'running', calories: '100'}, {name: 'walk', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('exercise-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');
    driver.sleep(1000)
    driver.findElement({css: '#diary-exercise-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-exercise-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-selected-exercise'}).click();

    driver.findElement({id: 'exercise-total-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '150')
    });
  });

  test.it('exercise burned calories are green if greater than zero', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'running', calories: '100'}]);
    driver.executeScript("window.localStorage.setItem('exercise-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-exercise-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-selected-exercise'}).click();

    driver.findElement({id: 'exercise-total-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('exercise burned calories are black if zero', function(){

    driver.get('http://localhost:8080/index.html');

    driver.findElement({id: 'exercise-total-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(0, 0, 0, 0.870588)')
    });
  });

  test.it('displays a totals table', function(){

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#totals-table > thead > tr:nth-child(1) > th:nth-child(1)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, 'Goal Calories')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(1) > th:nth-child(2)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '2000')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(2) > th:nth-child(1)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, 'Calories Consumed')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(2) > th:nth-child(2)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '0')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(3) > th:nth-child(1)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, 'Calories Burned')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(3) > th:nth-child(2)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '0')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(4) > th:nth-child(1)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, 'Remaining Calories')
    });
    driver.findElement({css: '#totals-table > thead > tr:nth-child(4) > th:nth-child(2)'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '2000')
    });
  });

  test.it('total burned calories are green if greater than zero', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'running', calories: '100'}]);
    driver.executeScript("window.localStorage.setItem('exercise-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-exercise-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-selected-exercise'}).click();

    driver.findElement({id: 'total-burned-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('total burned calories are black if zero', function(){

    driver.get('http://localhost:8080/index.html');

    driver.findElement({id: 'total-burned-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(0, 0, 0, 0.870588)')
    });
  });

  test.it('total remaining calories on totals table are green if zero or positive', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '100'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-breakfast'}).click();

    driver.findElement({id: 'total-remaining-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '1850')
    });

    driver.findElement({id: 'total-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(76, 175, 80, 1)')
    });
  });

  test.it('total remaining calories on totals table are red if negative', function(){

    driver.get('http://localhost:8080/index.html');
    var calArray = JSON.stringify([{name: 'apple', calories: '2000'}, {name: 'pear', calories: '50'}]);
    driver.executeScript("window.localStorage.setItem('food-calories', '" + calArray + "');");

    driver.get('http://localhost:8080/index.html');

    driver.findElement({css: '#diary-food-body > tr:nth-child(1) > td:nth-child(3) > label'}).click();
    driver.findElement({css: '#diary-food-body > tr:nth-child(2) > td:nth-child(3) > label'}).click();
    driver.findElement({id: 'add-breakfast'}).click();

    driver.findElement({id: 'total-remaining-calories'})
    .getText()
    .then(function(textValue){
      assert.equal(textValue, '-50')
    });

    driver.findElement({id: 'total-remaining-calories'})
    .getCssValue("color")
    .then(function(rgbaValue){
      assert.equal(rgbaValue, 'rgba(255, 0, 0, 1)')
    });
  });

  test.it('redirects me to /foods.html when I click on the create new food button', function(){

    driver.get('http://localhost:8080/index.html');

    var newFoodButton = driver.findElement({id: 'create-food'});

    newFoodButton.click().then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        assert.equal(currentUrl, 'http://localhost:8080/foods.html')
    });
  });

  test.it('redirects me to /exercises.html when I click on the create new food button', function(){

    driver.get('http://localhost:8080/index.html');

    var newFoodButton = driver.findElement({id: 'create-exercise'});

    newFoodButton.click().then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        assert.equal(currentUrl, 'http://localhost:8080/exercises.html')
    });
  });

  function createExercise(driver, nameKeys, calorieKeys){
    var name = driver.findElement({id: 'exercise-name'});
    var calories = driver.findElement({id: 'exercise-calories'});
    var submitButton = driver.findElement({id: 'add-exercise'});

    name.sendKeys(nameKeys);
    calories.sendKeys(calorieKeys);
    submitButton.click();
  }

});

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "SwagLabs Website",
  "description": "I want to use this template for my feature file",
  "id": "swaglabs-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SwagLabs"
    }
  ]
});
formatter.scenario({
  "line": 81,
  "name": "Adding to cart and removing from the cart",
  "description": "",
  "id": "swaglabs-website;adding-to-cart-and-removing-from-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@SwagLabs_TS10"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "we need to launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "we are opening the swaglabs page",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "We should enter the usernme and password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "we should add an item to the cart and remove it",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingStep.Chrome_Launch_Fail()"
});
formatter.result({
  "duration": 46112822000,
  "status": "passed"
});
formatter.match({
  "location": "AddingStep.HomePage_Open_Fail()"
});
formatter.result({
  "duration": 1404090500,
  "status": "passed"
});
formatter.match({
  "location": "AddingStep.UserName_Enter()"
});
formatter.result({
  "duration": 49882581800,
  "status": "passed"
});
formatter.match({
  "location": "AddingStep.Adding_carts()"
});
formatter.result({
  "duration": 3136707000,
  "status": "passed"
});
});
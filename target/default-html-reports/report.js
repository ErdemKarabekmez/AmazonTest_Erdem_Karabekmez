$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazon.feature");
formatter.feature({
  "name": "Samsung TV",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is on the amazon home page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Samsung television and verify \"About this item\" section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user clicks on the hamburger menu in the top left corner",
  "keyword": "Given "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.user_clicks_on_the_hamburger_menu_in_the_top_left_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the TV, Appliances and Electronics",
  "keyword": "When "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userClicksOnTheTVAppliancesAndElectronics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Televisions",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userClicksOnTelevisions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user filters the results by Brand Samsung",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userFiltersTheResultsByBrandSamsung()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sorts the Samsung results with price High to Low",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userSortsTheSamsungResultsWithPriceHighToLow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the second highest priced item",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userClicksOnTheSecondHighestPricedItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "switch the window",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.switchTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"About this item\" section is present and log this section text to console",
  "keyword": "Then "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.verifyThatSectionIsPresentAndLogThisSectionTextToConsoleReport(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
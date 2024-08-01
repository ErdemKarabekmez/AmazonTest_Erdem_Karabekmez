$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazon.feature");
formatter.feature({
  "name": "Samsung TV",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Samsung television and verify and log \"About this item\" section",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 114.0.5735.90\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat in.amazon.utilities.Driver.get(Driver.java:36)\r\n\tat in.amazon.stepDefinitions.Hooks.setUp(Hooks.java:22)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 114.0.5735.90\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat in.amazon.utilities.Driver.get(Driver.java:36)\r\n\tat in.amazon.stepDefinitions.Hooks.setUp(Hooks.java:22)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the amazon home page and clicks on the hamburger menu in the top left corner",
  "keyword": "Given "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userIsOnTheAmazonHomePageAndClicksOnTheHamburgerMenuInTheTopLeftCorner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the TV, Appliances and Electronics",
  "keyword": "When "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userClicksOnTheTVAppliancesAndElectronics()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Televisions",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userClicksOnTelevisions()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filters the results by Brand Samsung",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userFiltersTheResultsByBrandSamsung()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sorts the Samsung results with price High to Low",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userSortsTheSamsungResultsWithPriceHighToLow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the second highest priced item",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.userClicksOnTheSecondHighestPricedItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "switch the window",
  "keyword": "And "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.switchTheWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that \"About this item\" section is present and log this section text to console",
  "keyword": "Then "
});
formatter.match({
  "location": "in.amazon.stepDefinitions.SamsungStepDefinitions.verifyThatSectionIsPresentAndLogThisSectionTextToConsoleReport(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 114.0.5735.90\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:747)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat in.amazon.utilities.Driver.get(Driver.java:36)\r\n\tat in.amazon.stepDefinitions.Hooks.tearDown(Hooks.java:36)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: No proper candidate URL to download chromedriver 114.0.5735.90\r\n\tat io.github.bonigarcia.wdm.online.UrlHandler.getCandidateUrl(UrlHandler.java:284)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:603)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:535)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:744)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:541)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:277)\r\n\tat in.amazon.utilities.Driver.get(Driver.java:36)\r\n\tat in.amazon.stepDefinitions.Hooks.tearDown(Hooks.java:36)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:55)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\r\n",
  "status": "failed"
});
});
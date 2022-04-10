package in.amazon.stepDefinitions;


import in.amazon.pages.HamburgerPage;
import io.cucumber.java.en.*;
import org.junit.Assert;


public class SamsungStepDefinitions {

    HamburgerPage hamburgerPage = new HamburgerPage();

    @Given("user is on the amazon home page and clicks on the hamburger menu in the top left corner")
    public void userIsOnTheAmazonHomePageAndClicksOnTheHamburgerMenuInTheTopLeftCorner() {

        hamburgerPage.hamburgerMenuClick();

    }

    @When("user clicks on the TV, Appliances and Electronics")
    public void userClicksOnTheTVAppliancesAndElectronics() {

        hamburgerPage.tvAppliancesElectronicsClick();

    }

    @And("user clicks on Televisions")
    public void userClicksOnTelevisions() {

        hamburgerPage.televisionsClick();

    }

    @And("user filters the results by Brand Samsung")
    public void userFiltersTheResultsByBrandSamsung() {

        hamburgerPage.samsungClick();

    }

    @And("user sorts the Samsung results with price High to Low")
    public void userSortsTheSamsungResultsWithPriceHighToLow() {

        hamburgerPage.highToLowClick();

    }

    @And("user clicks on the second highest priced item")
    public void userClicksOnTheSecondHighestPricedItem() {

        hamburgerPage.secondHighestPricedItemClick();

    }

    @And("switch the window")
    public void switchTheWindow() {

        hamburgerPage.switchWindow();

    }

    @Then("verify that {string} section is present and log this section text to console")
    public void verifyThatSectionIsPresentAndLogThisSectionTextToConsoleReport(String expectedText) {

        Assert.assertEquals(expectedText, hamburgerPage.getText());
        hamburgerPage.logAboutThisItemSection();

    }
}

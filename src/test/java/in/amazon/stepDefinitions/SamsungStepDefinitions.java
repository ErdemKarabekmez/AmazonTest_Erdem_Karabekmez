package in.amazon.stepDefinitions;

import in.amazon.pages.BasePage;
import in.amazon.pages.HamburgerPage;
import in.amazon.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class SamsungStepDefinitions {

    HamburgerPage hamburgerPage = new HamburgerPage();

    @Given("user clicks on the hamburger menu in the top left corner")
    public void user_clicks_on_the_hamburger_menu_in_the_top_left_corner() {

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

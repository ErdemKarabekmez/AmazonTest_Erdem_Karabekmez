package in.amazon.stepDefinitions;

import in.amazon.pages.BasePage;
import in.amazon.pages.HamburgerPage;
import io.cucumber.java.en.Given;

public class SamsungStepDefinitions {

    HamburgerPage hamburgerPage = new HamburgerPage();

    @Given("user clicks on the hamburger menu in the top left corner")
    public void user_clicks_on_the_hamburger_menu_in_the_top_left_corner() throws InterruptedException {

        hamburgerPage.hamburgerMenuClick();



    }
}

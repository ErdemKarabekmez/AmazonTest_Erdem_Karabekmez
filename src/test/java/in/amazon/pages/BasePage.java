package in.amazon.pages;


import in.amazon.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {
    /**
     * Constructor to initialize Driver
     */
    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    /**
     * Locators
     */

    @FindBy (className = "hm-icon-label")
    public WebElement hamburgerMenu;

}


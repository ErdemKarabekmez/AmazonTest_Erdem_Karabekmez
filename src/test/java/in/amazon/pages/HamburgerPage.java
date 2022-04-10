package in.amazon.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HamburgerPage extends BasePage {

    /**
     * Locators
     */

    @FindBy(linkText = "TV, Appliances, Electronics")
    public WebElement tvAppliancesElectronics;

    @FindBy(linkText = "Televisions")
    public WebElement televisions;




/**
 * Methods
 */

    /**
     * This method is clicking hamburger menu in the top left corner
     */
    public void hamburgerMenuClick() {
        hamburgerMenu.click();
    }

    /**
     * This method is clicking TV, Appliances and Electronics
     */

    public void tvAppliancesElectronicsClick(){
        tvAppliancesElectronics.click();
    }

    /**
     * This method is clicking Televisions
     */
    public void televisionsClick(){
        televisions.click();
    }
}

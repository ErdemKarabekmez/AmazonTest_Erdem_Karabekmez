package in.amazon.pages;

import in.amazon.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;
import java.util.Set;

public class HamburgerPage extends BasePage {

    /**
     * Locators
     */

    @FindBy(linkText = "TV, Appliances, Electronics")
    public WebElement tvAppliancesElectronics;

    @FindBy(linkText = "Televisions")
    public WebElement televisions;

    @FindBy(xpath = "//span[.='Samsung']")
    public WebElement samsung;

    @FindBy(className = "a-dropdown-prompt")
    public WebElement sortByDropdown;

    @FindBy(xpath = "//li[@aria-labelledby='s-result-sort-select_2']/a")
    public WebElement highToLow;

    @FindBy(xpath = "(//span[@class='a-price'])[2]")
    public WebElement secondHighestPricedItem;

    @FindBy(xpath = "//div[@id='feature-bullets']/h1")
    public WebElement getTextOfAboutThisItem;

    @FindBy(xpath = "//div[@id='feature-bullets']//li")
    public List<WebElement> logOfAboutThisItemToConsole;


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

    public void tvAppliancesElectronicsClick() {
        tvAppliancesElectronics.click();
    }

    /**
     * This method is clicking Televisions
     */
    public void televisionsClick() {
        televisions.click();
    }

    /**
     * This method is clicking Samsung
     */
    public void samsungClick() {
        samsung.click();
    }

    /**
     * This method is clicking High to Low
     */
    public void highToLowClick() {
        sortByDropdown.click();
        highToLow.click();

    }

    /**
     * This method is clicking second highest priced item
     */
    public void secondHighestPricedItemClick() {

        secondHighestPricedItem.click();

    }

    /**
     * This method is switching window
     */
    public void switchWindow() {

        String currentWindowHandle = Driver.get().getWindowHandle();
        Set<String> windowHandles = Driver.get().getWindowHandles();

        for (String handle : windowHandles) {
            if (!handle.equals(currentWindowHandle))
                Driver.get().switchTo().window(handle);
        }

    }

    /**
     * This method is getting "About this item" section text
     */
    public String getText() {

        return getTextOfAboutThisItem.getText();

    }

    /**
     * This method is logging "About this item" section to console
     */

    public void logAboutThisItemSection() {

        String aboutThisItem = "";
        List<WebElement> list = logOfAboutThisItemToConsole;
        for (WebElement webElement : list) {
            aboutThisItem += webElement.getText();
        }
        System.out.println("About This Item = " + aboutThisItem);

    }


}

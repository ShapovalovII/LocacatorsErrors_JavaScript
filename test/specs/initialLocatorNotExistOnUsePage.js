const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function initialLocatorNotExistOnUsePage() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        // Used locator taken from another page
        let Error = 'Element was not found on the page. Element \'Google:test:div\' with such locator is not on this page and could not be detected by TrueAutomation.';
        let withTALocator = By.css(ta('Google:test:div', '//div[@class=\'sl-more tlid-open-source-language-list\']'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
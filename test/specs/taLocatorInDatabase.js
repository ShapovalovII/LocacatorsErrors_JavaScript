const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function taLocatorInDatabase() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        // This locator is made on another page
        let Error = 'Element was not found on the page. Element \'Google:Translate\' with such locator is not on this page and could not be detected by TrueAutomation.';
        let withTALocator = By.ta('Google:Translate');
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
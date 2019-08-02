const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function initialLocatorNotExistOnUsePage() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        // Used locator taken from another page
        let Error = 'NOT_FOUND';
        let withTALocator = By.className(ta('Zachet:Zachet_Div_Initial', '.logo.top-menu'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
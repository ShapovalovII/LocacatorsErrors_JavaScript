const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function taLocatorNotInDatabase() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        // This locator is made on another page
        let Error = 'NOT_FOUND';
        let withTALocator = By.ta('SmartLocator:Not_in_the_database');
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
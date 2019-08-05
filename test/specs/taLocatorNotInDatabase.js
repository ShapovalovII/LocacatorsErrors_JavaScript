const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function taLocatorNotInDatabase() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        // This locator is made on another page
        let Error = 'There is no such TA Locator in the objects repository. Element \'SmartLocator:Not_in_the_database\' was not found in the objects repository of \'TestTA\' project.';
        let withTALocator = By.ta('SmartLocator:Not_in_the_database');
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function initialLocatorWithInvalidTAname() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        let Error = 'TrueAutomation locator ta-Name contains unsupported characters. Please make sure to use only letters, numbers, colon and underscore symbols in locator names.';
        let withTALocator = By.xpath(ta('ta-Name', '//span[@class=\'RveJvd snByac\']'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
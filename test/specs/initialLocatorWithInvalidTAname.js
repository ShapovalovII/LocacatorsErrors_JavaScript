const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function initialLocatorWithInvalidTAname() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://trueautomation.io');

        let Error = 'Such TrueAutomation locator name ta-Name can not be used. Locator name may consist of several parts separated by a colon. English letters, numbers and single underscores that are not at the beginning or at the end may be used.';
        let withTALocator = By.xpath(ta('ta-Name', '//span[@class=\'RveJvd snByac\']'));
        await checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
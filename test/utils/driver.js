const { Builder } = require('trueautomation-selenium-webdriver');
const assert = require('assert');


const driver = async (browserName = 'chrome') => {
    return  await new Builder().forBrowser(browserName).build();
}



const checkErrorMessage = async function (driver, withTa, expectedError)  {
    try {
        await driver.findElement(withTa).click()
    } catch (e) {
        let actualErrorMessageWithTA = e.message;

        console.log('\n**********************');
        console.log('Expected error: ' + expectedError);
        console.log('**********************');

        console.log('\n**********************');
        console.log('Actual error: ' + actualErrorMessageWithTA);
        console.log('**********************');

        assert(actualErrorMessageWithTA.includes(expectedError), 'Error messages not contains.');
    }
}

module.exports = {
    driver,
    checkErrorMessage,
}
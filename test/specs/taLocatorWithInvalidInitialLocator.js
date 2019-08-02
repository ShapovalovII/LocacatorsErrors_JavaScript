const { By } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { driver, checkErrorMessage } = require('../utils/driver');

(async function taLocatorWithInvalidCssSelector() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        // Missing dot "."
        let Error = 'Unable to locate element { using: "css selector", selector: ".RveJvd snByac" }';
        let withTALocator = By.css(ta('taName', '.RveJvd snByac'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();

(async function taLocatorWithInvalidId() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        //The extra two slashes "//"
        let Error = "Unable to locate element { using: \"css selector\", selector: \"//identifierId\" }";
        let withTALocator = By.id(ta('taName', '//identifierId'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();

(async function taLocatorWithInvalidXpath() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        // Missing two slashes "//"
        let Error = 'Unable to locate element { using: "xpath", selector: "span[@class=\'RveJvd snByac\']" }';
        let withTALocator = By.xpath(ta('taName', 'span[@class=\'RveJvd snByac\']'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();

(async function taLocatorWithInvalidLinkText() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        //The extra two slashes "//"
        let Error = "Unable to locate element { using: \"link text\", selector: \"//Справка\" }";
        let withTALocator = By.linkText(ta('taName', '//Справка'));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();

(async function taLocatorWithInvalidClassName() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        //The extra two slashes "//"
        let Error = "Unable to locate element { using: \"css selector\", selector: \"//RveJvd snByac\" }";
        let withTALocator = By.className(ta("taName", "//RveJvd snByac"));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();

(async function taLocatorWithInvalidName() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        //The extra two slashes "//"
        let Error = "Unable to locate element { using: \"css selector\", selector: \"//identifier\" }";
        let withTALocator = By.name(ta("taName", "//identifier"));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();

(async function taLocatorWithInvalidPartialLinkText() {
    const myDriver = await driver();

    try {
        await myDriver.manage().setTimeouts({implicit: 5000});
        await myDriver.get('https://accounts.google.com');

        //The extra two slashes "//"
        let Error = "Unable to locate element { using: \"partial link text\", selector: \"//Справка\" }";
        let withTALocator = By.partialLinkText(ta("taName", "//Справка"));
        checkErrorMessage(myDriver, withTALocator, Error);

    } finally {
        await myDriver.quit();
    }
})();
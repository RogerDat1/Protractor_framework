var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ registerHandler }) {
    registerHandler("BeforeFeature", { timeout: 10 * 1000 }, function () {
        //return console.log('Before Feature !!');
    });
    registerHandler("AfterFeature", { timeout: 10 * 1000 }, function () {
        //return console.log('After Feature !!');
    });
    registerHandler("BeforeScenario", { timeout: 10 * 1000 }, function () {
        //console.log('Before Scenario !!');
        //browser= browser.forkNewDriverInstance();

    });
    registerHandler("AfterScenario", { timeout: 10 * 1000 }, function () {
        //console.log('After Scenario !!');
        // browser.driver.manage().deleteAllCookies();
        //browser.close();
        browser.restart();
        browser.ignoreSynchronization = true;

    });
});
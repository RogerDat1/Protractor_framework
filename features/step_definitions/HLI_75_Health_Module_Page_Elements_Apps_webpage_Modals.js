var {defineSupportCode} = require("cucumber");
var webelement = require('../../testObjects/appWebObjects.js')

defineSupportCode(function ({Given}) {

    Given(/^The user clicks on Apps tab$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Health_Age|tab_App', function () {
                keyword.performclick('Health_Age|tab_App', function () {
                    done();
                });
            })

        });
    });

    Given(/^User should see the "([^"]*)" if no app is connected$/, function (value, done) {
        keyword.expectVisible('Health_Age|msg_NoApp', function () {
            keyword.scrollToElementByLocatorIntoView('Health_Age|msg_NoApp', function () {
                keyword.verifyText('Health_Age|msg_NoApp', value, function () {
                    done();
                });
            });
        });
    });

    Given(/^User Should see the option to add tracker$/, function (done) {
        keyword.expectVisible('Health_Age|button_Tracker', function () {
            keyword.scrollToElementByLocatorIntoView('Health_Age|button_Tracker', function () {
                done();
            });
        });
    });
    Given(/^User should see the list of all the app is connected$/, function (done) {
        keyword.expectVisible('Health_Age|list_App', function () {
            keyword.scrollToElementByLocatorIntoView('Health_Age|list_App', function () {
                done();
            });
        });
    });
    Given(/^User clicks on tracker$/, function (done) {
        keyword.expectVisible('Health_Age|button_Tracker', function () {
            keyword.scrollToElementByLocatorIntoView('Health_Age|button_Tracker', function () {
                keyword.performclick('Health_Age|button_Tracker', function () {
                    done();
                });
            });
        });
    });

    Given(/^User should see All the option to connect through App$/, function (done) {
        keyword.expectVisible('Health_Age|list_App_All', function () {
            done();
        });
    });

    var array = new Array();
    Given(/^User read the list of added App title$/, function (done) {
        keyword.getAttribute("Health_Age|list_ConnectedApp_First", 'title', function (result1) {
            array.push(result1);
            keyword.getAttribute("Health_Age|list_ConnectedApp_Second", 'title', function (result2) {
                array.push(result2);
                done();
            })
        })
    });


    Given(/^User check the title list in App Tab$/, function (done) {
        let index = 0;
        let index_1 = 1;
        let locator = "//a[contains(.,'<<index>>')]";
        locator = locator.replace('<<index>>', array[index]);

        let locator1 = "//a[contains(.,'<<index>>')]";
        locator1 = locator1.replace('<<index>>', array[index_1]);

        var locatorXpath1 = element(by.xpath(locator));
        var locatorXpath2 = element(by.xpath(locator1));
        var EC = protractor.ExpectedConditions;
        var promsieObject1 = browser.wait(EC.presenceOf(locatorXpath1), 30000);
        promsieObject1.then(function () {
            let promsieObject2 = browser.wait(EC.presenceOf(locatorXpath1), 30000);
            promsieObject2.then(function () {

                done();
            }).catch(function () {
                console.log("Not finding the locator " + locator1);
                throw 'locator not found ';
                done();
            })
        })
            .catch(function () {
                conosle.log("Not finding the locator " + locator);
                throw 'locator not found ';
                done();

            });
    });
});






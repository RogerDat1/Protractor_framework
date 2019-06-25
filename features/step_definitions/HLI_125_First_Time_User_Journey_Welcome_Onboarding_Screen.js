/**
 * Created by amod-mahajan on 11/16/2017.
 */
var {defineSupportCode} = require("cucumber");

defineSupportCode(function ({Given}) {

    Given(/^User has logged in HLI for the first time using username as "([^"]*)" and password as "([^"]*)"$/, function (value1, value2, callback) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', value1, function () {
                keyword.expectVisible('Login_Page|btn_Submit', function () {
                    keyword.performclick('Login_Page|btn_Submit', function () {
                        keyword.expectVisible("Login_Page|input_Password", function () {
                            keyword.setText('Login_Page|input_Password', value2, function () {
                                keyword.performclick('Login_Page|btn_Submit', function () {
                                    keyword.expectVisible('Home_Page|link_HLIlogo', function () {

                                        callback();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    Given(/^the system should direct him to the Welcome page$/, function (callback) {
        keyword.customisedSleep(10000, function () {
            keyword.getCurrentURL(function (url) {
                expect(url.toString().trim().includes("welcome")).to.equal(true);
                callback();
            })
        })
    });
    Given(/^User should see header Welcome To Wellness$/, function (callback) {
        keyword.expectVisible('Welcome_Screens|header_welcome', function () {
            callback();
        });
    });
    Given(/^User should see Accept & Activate button$/, function (callback) {
        keyword.expectVisible('Welcome_Screens|btn_acceptAndActivate', function () {
            callback();
        });
    });
    Given(/^User should see Connect A Tracker button$/, function (callback) {
        keyword.expectVisible('Welcome_Screens|btn_connectAnApp', function () {
            callback();
        });
    });
    Given(/^User should see Connect Manually button$/, function (callback) {
        keyword.expectVisible('Welcome_Screens|btn_ContinueManually', function () {
            callback();
        });
    });

    Given(/^User can view the points of value of the Health Module$/, function (callback) {
        keyword.expectVisible('Welcome_Screens|pointsOfValue_YourData', function () {
            keyword.expectVisible('Welcome_Screens|pointsOfValue_YourData', function () {
                keyword.expectVisible('Welcome_Screens|pointsOfValue_YourData', function () {
                    callback();
                });
            });
        });
    });

    Given(/^User can view and click  the Accept & Activate button$/, function (callback) {
        keyword.expectVisible('',function () {
            keyword.performclick('',function () {
                callback();
            })
        });
    });

    Given(/^User can view and click on the link for Connect An App to connect an App to the Health Module$/, function (value, callback) {
        keyword.expectVisible('',function () {
            keyword.performclick('',function () {
                callback();
            })
        });
    });

    Given(/^User can view and click on the link for  "([^"]*)" to enter the Health On boarding Module$/, function (value, callback) {
        keyword.expectVisible('',function () {
            keyword.performclick('',function () {
                callback();
            })
        });
    });

    Given(/^if the User clicks on the link for "([^"]*)" on the Health panel of the Dashboard$/, function (value, callback) {
        keyword.expectVisible('',function () {
            keyword.performclick('',function () {
                callback();
            })
        });
    });

    Given(/^the system should direct him to the introduction page$/, function (callback) {
        keyword.getAndVerifyPageTitle('',function () {
            callback();
        })
    });

    Given(/^the system should direct him to the Second Welcome page$/, function (callback) {
        keyword.customisedSleep(10000, function () {
            keyword.getCurrentURL(function (url) {
                expect(url.toString().trim().includes("questionnaire")).to.equal(true);
                callback();
            })
        })
    });
});

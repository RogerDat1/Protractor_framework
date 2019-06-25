/**
 * Created by amod-mahajan on 11/17/2017.
 */

var {defineSupportCode} = require("cucumber");
var users = globalData.Login_Credentials[globalData.Environment.trim()];


defineSupportCode(function ({Given}) {
    Given(/^system loads the branded HLI Login page in standard design$/, function (callback) {
        keyword.expectVisible('Login_Page|link_HLILogo', function () {

            callback();


        })
    });
    Given(/^User sees HLI logo$/, function (callback) {
        keyword.expectVisible('Login_Page|link_HLILogo_BeforeLogin', function () {
            callback();
        })
    });

    Given(/^User sees Email address input box$/, function (callback) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            callback();
        })
    });
    Given(/^User sees next button$/, function (callback) {
        keyword.expectVisible('Login_Page|btn_Submit', function () {
            callback();
        })
    });
    Given(/^User sees Feedback button$/, function (callback) {
        keyword.switchToFrame("", "Login_Page|iframe_feedback", function () {
            keyword.expectVisible('Login_Page|lnk_Feedback', function () {
                keyword.switchToDefaultContent(function () {
                    callback();
                })
            })
        })

    });
    Given(/^User sees about Who Is Mercer$/, function (callback) {
        keyword.expectVisible('Login_Page|lbl_WhoIsMercer', function () {
            callback();
        })
    });
    Given(/^User sees about What Is HLI$/, function (callback) {
        keyword.expectVisible('Login_Page|lbl_WhatIsHLI', function () {
            callback();
        })
    });
    Given(/^User sees about The value of HLI$/, function (callback) {
        keyword.expectVisible('Login_Page|lbl_ValueOfHLI', function () {
            callback();
        })
    });
    Given(/^User sees Healthy Living Index header$/, function (callback) {
        keyword.expectVisible('Login_Page|lnk_HLILogoFooter', function () {
            callback();
        })
    });
    Given(/^User sees Healthy Living Index paragraph$/, function (callback) {
        keyword.expectVisible('Login_Page|lnk_HLILogoFooterText', function () {
            callback();
        })
    });
    Given(/^User sees Find Out More button$/, function (callback) {
        keyword.expectVisible('Login_Page|lnk_findOutMore', function () {
            callback();
        })
    });
    Given(/^User sees Mercer logo$/, function (callback) {
        keyword.expectVisible('Login_Page|lnk_mercerLogo', function () {
            callback();
        })
    });
    Given(/^User sees Mercer tag line$/, function (callback) {
        keyword.expectVisible('Login_Page|lnk_mercerLogo', function () {
            callback();
        })
    });
    Given(/^User sees © 2017 MERCER LLC, ALL RIGHTS RESERVED$/, function (callback) {
        keyword.expectVisible('Login_Page|lbl_allRightReserved', function () {
            callback();
        })
    });
    Given(/^User enters email id and click on next button$/, function (callback) {
        callback.pending();
    });
    Given(/^User types password click on Next$/, function (callback) {
        callback.pending();
    });
    Given(/^System should authorise access for registered users$/, function (callback) {
        callback.pending();
    });
    Given(/^User sees Find Out More button and clicks on it$/, function (callback) {
        callback.pending();
    });
    Given(/^User should be redirected to user to the HLI B2B contacts page$/, function (callback) {
        callback.pending();
    });
    Given(/^System should not authorise access for non\-registered users and should see error message$/, function (callback) {
        keyword.expectVisible('Login_Page|lbl_IncorrectCredentialsErrorMessage', function () {
            callback();
        })
    });
    Given(/^User enters email id of "([^"]*)"$/, function (userType, callback) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                callback();
            });
        });
    });
    Given(/^User enters correct email id of "([^"]*)"$/, function (userType, callback) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                callback();
            });
        });
    });
    Given(/^User enters incorrect email id of "([^"]*)"$/, function (userType, callback) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].Incorrect_Email_Address, function () {
                callback();
            });
        });
    });
    Given(/^User enters wrong format email id of "([^"]*)"$/, function (userType, callback) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].IncorrectFormatMailId, function () {
                callback();

            });
        });
    });
    Given(/^EMail text box bottom color should be red$/, function (callback) {
        keyword.getCssAttributeValue('Login_Page|input_Email', 'border-bottom-color', function (val) {
            expect(val).to.equal('rgba(239, 78, 69, 1)');
            callback();
        })
    });
    Given(/^User clicks on Next button$/, function (callback) {
        keyword.expectVisible('Login_Page|btn_Submit', function () {
            keyword.performclick('Login_Page|btn_Submit', function () {
                callback();
            })
        })
    });

    Given(/^User sees Password text box$/, function (callback) {
        keyword.expectVisible('Login_Page|input_Password', function () {
            callback();
        });
    });
    Given(/^User types password of "([^"]*)"$/, function (userType, callback) {
        keyword.setText('Login_Page|input_Password', users[userType].Password, function () {
            callback();
        });
    });
    Given(/^User types wrong password of "([^"]*)"$/, function (userType, callback) {
        keyword.setText('Login_Page|input_Password', users[userType].WrongPassword, function () {
            callback();
        });
    });
    Given(/^User types correct password of "([^"]*)"$/, function (userType, callback) {
        keyword.setText('Login_Page|input_Password', users[userType].Password, function () {
            callback();
        });
    });
    Given(/^User should be logged in successful in HLI application and should see dashboard$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            callback();
        })
    });
    Given(/^User clicks on Find Out More Button$/, function (callback) {
        keyword.performclick('Login_Page|lnk_findOutMore', function () {
            callback();
        })
    });
});

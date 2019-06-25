/**
 * Created by amod-mahajan on 11/15/2017.
 */

var {defineSupportCode} = require("cucumber");

var users;
defineSupportCode(function ({Given}) {

    Given(/^User access HLI url$/, function (done) {
        browser.get(globalData.AUT_URL[globalData.Environment.trim()]).then(function () {
            browser.waitForAngularEnabled(false);
            var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.customisedSleep(10000, function () {
                done();
            })

        });

    }),

        Given(/^Verify correct HLI home page is loaded successfully$/, function (callback) {
            keyword.expectVisible('Login_Page|link_HLILogo_BeforeLogin', function () {
                callback();
            })
        });

    Given(/^User verify presence of Email text box and enters email id as "([^"]*)"$/, function (userType, callback) {
        var users = globalData.Login_Credentials[globalData.Environment.trim()];
        console.log(globalData.Login_Credentials[globalData.Environment.trim()])
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                    callback();
                });
            });
        });

        Given(/^User verify presence of Submit button and click on it$/, function (callback) {
            keyword.expectVisible('Login_Page|btn_Submit', function () {
                keyword.performclick('Login_Page|btn_Submit', function () {
                    callback();
                });
            });
        });

        Given(/^User navigates to forgot password page and verify page header$/, function (callback) {
            keyword.expectVisible('Login_Page|Forget_Pwd', function () {
                keyword.performclick('Login_Page|Forget_Pwd', function () {
            keyword.expectVisible('Forgot_Password_Page|headerText_ForgotYour', function () {
                keyword.expectVisible('Forgot_Password_Page|headerText_Password', function () {
                    callback();
                });
            });
        });
            });
        });

    Given(/^User verify presence of First Name text box and enters first name as "([^"]*)"$/, function (userType, callback) {
        var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.expectVisible('Forgot_Password_Page|txt_FirstName', function () {
                keyword.setText('Forgot_Password_Page|txt_FirstName', users[userType].first_name, function () {
                    callback();
                });
            });
        });

    Given(/^User verify presence of Last Name text box and enters last name as "([^"]*)"$/, function (userType, callback) {
        var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.expectVisible('Forgot_Password_Page|txt_LastName', function () {
                keyword.setText('Forgot_Password_Page|txt_LastName', users[userType].last_name, function () {
                    callback();
                });
            });
        });

    Given(/^User verify presence of Email Address text box and enters email address as "([^"]*)"$/, function (userType, callback) {
        var users = globalData.Login_Credentials[globalData.Environment.trim()]
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                callback();
            });
        });
    });

    Given(/^User clicks on expired "([^"]*)"$/, function (value, done) {
        browser.get(value).then(function () {
            browser.waitForAngularEnabled(false);

            done();

        });
        });

        Given(/^User should be directed to a page with title YOUR PASSWORD RESET LINK HAS EXPIRED$/, function (callback) {
            keyword.verifyText('Forgot_Password_Page|headerText_PasswordExpired', 'YOUR PASSWORD RESET LINK HAS EXPIRED', function () {
                callback();
            });
        });
    Given(/^User verify error message as Your password reset link has expired$/, function (callback) {
        keyword.expectVisible('Forgot_Password_Page|headerText_PasswordExpired', function () {
                callback();
            });
        });
        Given(/^User verify presence of contact our support team link$/, function (callback) {
            keyword.expectVisible('Forgot_Password_Page|contactDetails_PasswordExpired', function () {
                callback();
            });
        });
        Given(/^User verify presence of Back to Login button$/, function (callback) {
            keyword.expectVisible('Forgot_Password_Page|backToLogin_AccountLocked', function () {
                callback();
            });
        });
    Given(/^User verify presence of Back to Login button on Account Locked page$/, function (callback) {
        keyword.expectVisible('Forgot_Password_Page|backToLogin_AccountLocked', function () {
            callback();
        });
    });
    Given(/^User verify presence of Back to Login button on password expired page$/, function (callback) {
        keyword.expectVisible('Forgot_Password_Page|backToLogin_PasswordExpired', function () {
            callback();
        });
    });

        Given(/^User clicks on contact our support team link$/, function (callback) {
            keyword.performclick('', function () {
                callback();
            })
        });
        Given(/^User navigates to Help & Support page$/, function (callback) {
            keyword.getAndVerifyPageTitle('', function () {
                callback();
            })
        });

        Given(/^User go back to previous page$/, function (callback) {
            browser.back();
            callback();
        });

        Given(/^User clicks on Login button$/, function (callback) {
            keyword.expectVisible('Forgot_Password_Page|backToLogin_AccountLocked', function () {
                keyword.performclick('Forgot_Password_Page|backToLogin_AccountLocked', function () {
                    callback();
                });
            });
        });
    Given(/^User clicks on Login button on password expired page$/, function (callback) {
        keyword.expectVisible('Forgot_Password_Page|backToLogin_PasswordExpired', function () {
            keyword.performclick('Forgot_Password_Page|backToLogin_PasswordExpired', function () {
                callback();
            });
        });
    });

        Given(/^User navigates to Login page page$/, function (callback) {
            keyword.expectVisible('Login_Page|input_Email', function () {
                keyword.getAndVerifyPageTitle('Login', function () {
                callback();
            })
        });
});


});
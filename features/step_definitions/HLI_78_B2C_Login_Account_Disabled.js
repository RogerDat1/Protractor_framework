var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {


    Given(/^System should directs User to the Account Disabled page$/, function (done) {
        keyword.expectVisible('Forgot_Password_Page|headerText_AccountLocked', function () {
            keyword.verifyText('Forgot_Password_Page|headerText_AccountLocked', 'YOUR ACCOUNT HAS BEEN DISABLED', function () {
                done();
            });
        });
    });


    Given(/^Page heading start from  Your Account Has Been Disabled$/, function (done) {
        keyword.expectVisible('Forgot_Password_Page|headerText_AccountLocked', function () {
            keyword.verifyText('Forgot_Password_Page|headerText_AccountLocked', 'YOUR ACCOUNT HAS BEEN DISABLED', function () {
                done();
            });
        });
    });
    Given(/^User enters username and submit for disable user "([^"]*)"$/, function (userType, done) {
        var users = globalData.Login_Credentials[globalData.Environment.trim()]
        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                keyword.expectVisible('Login_Page|btn_Submit', function () {
                    keyword.performclick('Login_Page|btn_Submit', function () {
                        done();
                    });
                });
            });
        });
    });

    Given(/^User should verify the error msg "([^"]*)" of account disable$/, function (value, done) {
        //var users = globalData.Login_Credentials[globalData.Environment.trim()]
        keyword.expectVisible('Forgot_Password_Page|alertText_AccountDisable', function () {
            keyword.verifyText('Forgot_Password_Page|alertText_AccountDisable', value, function () {
                done();
            });
        });
    });


    Given(/^User should verify the Sub\-Heading stating "([^"]*)" of account disable$/, function (value, done) {
        keyword.expectVisible('Forgot_Password_Page|subHeading_AccountDisable', function () {
            keyword.verifyText('Forgot_Password_Page|subHeading_AccountDisable', value, function () {
                done();
            });
        });

    });


    Given(/^User should verify the Text stating "([^"]*)" of account disable$/, function (value, done) {
        keyword.expectVisible('Forgot_Password_Page|textStarting_AccountDisable', function () {
            keyword.verifyText('Forgot_Password_Page|textStarting_AccountDisable', value, function () {
                done();
            });
        });
    });
});

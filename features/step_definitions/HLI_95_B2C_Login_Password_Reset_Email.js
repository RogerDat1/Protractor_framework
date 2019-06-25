var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User has logged in HLI using userType as "([^"]*)" and click on forget password link$/, function (userType, done) {

        browser.get(globalData.AUT_URL[globalData.Environment.trim()]).then(function () {
            browser.waitForAngularEnabled(false);
            var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.expectVisible('Login_Page|input_Email', function () {

                keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {

                    keyword.expectVisible('Login_Page|btn_Submit', function () {
                        keyword.performclick('Login_Page|btn_Submit', function () {
                            keyword.expectVisible('Login_Page|Forget_Pwd', function () {
                                keyword.performclick('Login_Page|Forget_Pwd', function () {
                                    done();
                                });
                            });
                        });
                    });
                });
            });
        });
    }),

        Given(/^User verify cancel button$/, function (done) {
            keyword.expectVisible('Forgot_Password_Page|btn_Cancle', function () {
                done();
            });
        }),
        Given(/^User verify the error msg$/, function (done) {
            keyword.expectVisible('Forgot_Password_Page|Error_Msg', function () {
                done();
            });
        }),

        Given(/^User click on save button$/, function (done) {
            keyword.expectVisible('Login_Page|btn_Submit', function () {
                keyword.performclick('Login_Page|btn_Submit', function () {
                    done();
                });
            });
        });

});
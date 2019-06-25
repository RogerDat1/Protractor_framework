/**
 * Created by amrita-priti on 10/18/2017.
 */

var {defineSupportCode} = require("cucumber");

defineSupportCode(function ({Given}) {
    Given(/^User accesses HLI B2C Login Page$/, function (done) {

        browser.get(globalData.AUT_URL[globalData.Environment.trim()]).then(function () {
            browser.waitForAngularEnabled(false);
            done();

        });

    }),
        Given(/^System should direct User to the "Account Locked" page$/, function (done) {
            keyword.getAndVerifyPageTitle('Login', function () {
                done();
            });
        }),
        Given(/^User Verify Header stating Your Account Has been locked$/, function (done) {
            keyword.expectVisible('Forgot_Password_Page|headerText_AccountLocked', function () {
                keyword.verifyText('Forgot_Password_Page|headerText_AccountLocked', "YOUR ACCOUNT HAS BEEN", function () {

                    done();
                });
            });
        });


    Given(/^User enters Password and submit$/, function (done) {
        var count = 1;
        var users = globalData.Login_Credentials[globalData.Environment.trim()]
        // keyword.expectVisible('Login_Page|input_Password', function () {
        // keyword.expectVisible('Login_Page|btn_Submit', function () {
                var a = HLIData.Wrong_password;
        console.log(a.length)
                a.forEach(function (a1) {
                    keyword.setText('Login_Page|input_Email', users.userForAccountLock.Email_Address, function () {
                        keyword.expectVisible('Login_Page|btn_Submit', function () {
                            keyword.performclick('Login_Page|btn_Submit', function () {
                                keyword.expectVisible('Login_Page|input_Password', function () {
                    keyword.setText('Login_Page|input_Password', a1, function () {
                        keyword.performclick('Login_Page|btn_Submit', function () {
                            keyword.expectVisible('Login_Page|input_Email', function () {
                                //keyword.setText('Login_Page|input_Email', users.userForAccountLock.Email_Address, function () {
                                //   keyword.expectVisible('Login_Page|btn_Submit', function () {
                                //  keyword.performclick('Login_Page|btn_Submit', function () {
                                console.log(count >= 6)
                                count++;
                                if (count >= 6)
                                    done();

                            });

                        });
                    });
                                });
                            });


            });
        });
                });
    }),


        Given(/^User enters username and submit "([^"]*)"$/, function (userType, done) {
            var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.expectVisible('Login_Page|input_Email', function () {
                keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                    keyword.expectVisible('Login_Page|btn_Submit', function () {
                        keyword.performclick('Login_Page|btn_Submit', function () {
                            keyword.expectVisible('Login_Page|input_Password', function () {
                                keyword.setText('Login_Page|input_Password', users[userType].password, function () {
                                    keyword.performclick('Login_Page|btn_Submit', function () {
                            done();
                        });
                    });
                });
            });
                    });
                });
            });
        });


    Given(/^User enters 7th time wrong username and password to gets account lock$/, function (done) {
        tryLoginWithWrongPassword(function () {
            done();
        });
    });

    Given(/^User should see login page again$/, function (done) {
        keyword.expectVisible('Login_Page|input_Email', function () {
            done();
        });
    });
    Given(/^User enters 6 times wrong username and password$/, function (done) {
        tryLoginWithWrongPassword(function () {
            tryLoginWithWrongPassword(function () {
                tryLoginWithWrongPassword(function () {
                    tryLoginWithWrongPassword(function () {
                        tryLoginWithWrongPassword(function () {
                            tryLoginWithWrongPassword(function () {

                                done();
                            });

                        });
                    });
                });

            });
        });

    });

    Given(/^User clicks on Login button on Account Locked page$/, function (done) {
        keyword.expectVisible('Forgot_Password_Page|backToLogin_AccountLocked', function () {
            keyword.performclick('Forgot_Password_Page|backToLogin_AccountLocked', function () {
                done();
            });
        });
    });

    Given(/^User enters Password and submit "([^"]*)"$/, function (password, done) {
        keyword.expectVisible('Login_Page|input_Password', function () {
            keyword.expectVisible('Login_Page|btn_Submit', function () {
                keyword.setText('Login_Page|input_Password', password, function () {
                    keyword.performclick('Login_Page|btn_Submit', function () {
                        done();
                    });
                });
            });
        });
    });
});

function tryLoginWithWrongPassword(done) {
    var users = globalData.Login_Credentials[globalData.Environment.trim()]
    keyword.expectVisible('Login_Page|input_Email', function () {
        keyword.setText('Login_Page|input_Email', users.userForAccountLock.Email_Address, function () {
            keyword.expectVisible('Login_Page|btn_Submit', function () {
                keyword.performclick('Login_Page|btn_Submit', function () {
                    keyword.expectVisible('Login_Page|input_Password', function () {
                        keyword.setText('Login_Page|input_Password', users.userForAccountLock.Password, function () {
                            keyword.performclick('Login_Page|btn_Submit', function () {
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
}
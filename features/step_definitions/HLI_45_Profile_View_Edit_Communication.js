var {defineSupportCode} = require("cucumber");
/*var global_url = require('../../testdata/global.js');
 var HLIData = require('../../testdata/HLIData.js');*/

defineSupportCode(function ({Given}) {

    Given(/^User has logged in HLI using userType as "([^"]*)"$/, function (userType, done) {

        browser.get(globalData.AUT_URL[globalData.Environment.trim()]).then(function () {
            browser.waitForAngularEnabled(false);
            var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.expectVisible('Login_Page|input_Email', function () {

                keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {

                    keyword.expectVisible('Login_Page|btn_Submit', function () {
                        keyword.performclick('Login_Page|btn_Submit', function () {
                            keyword.expectVisible('Login_Page|input_Password', function () {
                                keyword.setText('Login_Page|input_Password', users[userType].Password, function () {
                                    keyword.expectVisible('Login_Page|btn_Submit', function () {
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
        });
    });

    Given(/^User have tapped the Profile Icon in the top right corner$/, function (done) {
        keyword.expectVisible('*****', function () {
            keyword.performclick('*************', function () {
                done();
            });
        });
    }),

        Given(/^the Communication tab has been selected$/, function (done) {
            keyword.expectVisible('View_Profile|tab_communications', function () {
                keyword.performclick('View_Profile|tab_communications', function () {
                    done();
                });
            });
        }),
        Given(/^System should display toggle with a yes switch$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();
            });
        }),
        Given(/^System should display toggle with a no switch$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^default toggle should be set to Yes$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^User should be sent marketing communication$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^User accesses Contact me with news$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^User selects toggle to No$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^Users marketing preference should save as No$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^User should not be sent any marketing communication$/, function (done) {
            keyword.expectVisible('*****', function () {

                done();

            });
        }),
        Given(/^User accesses Marketing Preferences Contact me with news$/, function (done) {
            keyword.expectVisible('*****', function () {
                keyword.performclick('*************', function () {
                    done();
                });
            });
        });
    Given(/^User see Marketing preference header at Communication page$/, function (callback) {
        keyword.expectVisible('Screen_Communication|header_MarketingPreference', function () {

            callback();

        });
    });
});

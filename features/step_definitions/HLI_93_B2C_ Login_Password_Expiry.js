/**
 * Created by amrita-priti on 10/23/2017.
 */
var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {
    Given(/^User enters expiry username and paswword$/, function (done) {

        keyword.expectVisible('Login_Page|input_Email', function () {
            keyword.expectVisible('Login_Page|btn_Submit', function () {
                keyword.setText('Login_Page|input_Email', "qatesT02401.eptest.admin2@gisqa.mercer.com  ", function () {
                    keyword.performclick('Login_Page|btn_Submit', function () {

                        keyword.expectVisible('Login_Page|input_Password', function () {
                            keyword.expectVisible('Login_Page|btn_Submit', function () {
                                keyword.setText('Login_Page|input_Password', "Welcome1", function () {
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
    }),

        Given(/^Current Password field validation "([^"]*)" "([^"]*)"$/, function (value1, value2, done) {
            keyword.setText(value1, value2, function () {
                done()
            });

        });


    Given(/^New_ReType_Password field validation "([^"]*)" "([^"]*)"$/, function (value3, value4, done) {
        keyword.setText(value3, value4, function () {
            done()
        });

    });
    Given(/^user validates all the web elements on the page$/, function (done) {
        keyword.expectVisible('Login_Page|Current_Password', function () {
            keyword.expectVisible('Login_Page|New_Password', function () {
                keyword.expectVisible('Login_Page|New_ReType_Password', function () {
                    keyword.expectVisible('Login_Page|btn_Submit', function () {
                        keyword.expectVisible('Forgot_Password_Page|btn_Cancle', function () {
                            done();
                        });
                    });
                });
            });
        });
    }),


        Given(/^New Password field validation "([^"]*)" "([^"]*)"$/, function (value5, value6, done) {
            keyword.setText(value5, value6, function () {
                done();
            });
        }),


        Given(/^validate the proper error message for each input "([^"]*)" "([^"]*)"$/, function (value1, value2, done) {
            // browser.executeScript('window.scrollTo(0,0);').then(function () {
            keyword.getText('Login_Page|Error_Latest', function () {
                keyword.verifyText(value1, value2, function () {
                    done();

                });
            });
        }),
        Given(/^user clicks on save button$/, function (done) {
            //  browser.executeScript('window.scrollTo(0,10000);').then(function () {
            keyword.expectVisible('Login_Page|btn_Submit', function () {

                keyword.performclick('Login_Page|btn_Submit', function () {

                    done();
                });
            });
        }),

        Given(/^user clicks on cancel button$/, function (done) {
            //  keyword.getPageLoadStatus(function () {
            keyword.expectVisible('Forgot_Password_Page|btn_Cancle', function () {
                keyword.performclick('Forgot_Password_Page|btn_Cancle', function () {
                    //
                    done();
                });
            })
        })


});

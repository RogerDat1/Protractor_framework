/**
 * Created by amrita-priti on 10/18/2017.
 */
var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User clicks on forget password link$/, function (done) {
        keyword.expectVisible('Login_Page|Forget_Pwd', function () {
            keyword.performclick('Login_Page|Forget_Pwd', function () {
                done();
            });
        });
    });

    Given(/^User enters first name$/, function (done) {
        keyword.expectVisible('Forgot_Password_Page|txt_FirstName', function () {
            keyword.setText('Forgot_Password_Page|txt_FirstName', HLIData.Forgot_Password.FirstName, function () {
                done();
            });
        });
    });

    Given(/^User enters last name$/, function (done) {
        keyword.expectVisible('Forgot_Password_Page|txt_LastName', function () {
            keyword.setText('Forgot_Password_Page|txt_LastName', HLIData.Forgot_Password.LastName, function () {
                done();
            });
        });
    });

    Given(/^User enters email address$/, function (done) {
        keyword.expectVisible('Forgot_Password_Page|txt_EmailAddress', function () {
            keyword.setText('Forgot_Password_Page|txt_EmailAddress', HLIData.Forgot_Password.EmailAddress, function () {
                done();
            });
        });
    });

});


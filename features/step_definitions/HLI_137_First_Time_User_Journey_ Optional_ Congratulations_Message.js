/**
 * Created by amod-mahajan on 11/17/2017.
 */

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {
    Given(/^User should see a Congratulation Page$/, function (callback) {
        keyword.expectVisible('optional_Congratulation_Message|header_Congratulations', function () {
            callback();
        })
    });

    Given(/^User clicks on Complete Manually button$/, function (callback) {
        keyword.expectVisible('Welcome_Screens|btn_ManuallyDoIt', function () {
            keyword.performclick('Welcome_Screens|btn_ManuallyDoIt', function () {
                callback();
            })
        })
    });
    Given(/^User should see text as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('optional_Congratulation_Message|msg_Congratulation', function () {
            callback();
        })
    });
    Given(/^User should see "([^"]*)" badge$/, function (value, callback) {
        keyword.expectVisible('optional_Congratulation_Message|icon_CompleteHealthBedge', function () {
            callback();
        })
    });
    Given(/^User should see "([^"]*)" button/, function (value, callback) {
        keyword.expectVisible('optional_Congratulation_Message|btn_MyDashboard', function () {
            callback();
        })
    });
    Given(/^User should see a "([^"]*)" icon at header/, function (value, callback) {
        keyword.expectVisible('optional_Congratulation_Message|btn_Close', function () {
            callback();
        })
    });
    Given(/^User clicks Close button$/, function (callback) {
        keyword.expectVisible('optional_Congratulation_Message|btn_Close', function () {
            keyword.performclick('optional_Congratulation_Message|btn_Close', function () {
                callback();
            })

        })
    });
    Given(/^User clicks My Dashboard button$/, function (callback) {
        keyword.expectVisible('optional_Congratulation_Message|btn_MyDashboard', function () {
            keyword.performclick('optional_Congratulation_Message|btn_MyDashboard', function () {
                callback();
            })
        })
    });
});

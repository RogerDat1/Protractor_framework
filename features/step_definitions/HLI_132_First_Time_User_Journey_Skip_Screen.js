/**
 * Created by amod-mahajan on 11/16/2017.
 */

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {
    Given(/^User sees Congratulation page$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|header_Congratulations', function () {
            callback();
        })
    });

    Given(/^User sees "You've earned the Health Onboarded Badge for completing the health survey." message for completing mandatory onboaridng screens$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|msg_Congratulation', function () {
            callback();
        })
    });

    Given(/^User sees "Health Onboarded" Badge$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|icon_HealthOnboardedBedge', function () {
            callback();
        });
    });
    Given(/^user sees "We have enough info for your Health Age Score but if you would like the exclusive one of a kind “Complete Health Nut Badge” and a more comprehensive Health Age complete the remaining questions of the health survey." message for taking optional onboarding screen$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|msg_ContinueOptionalSurvey', function () {
            callback();
        });
    });
    Given(/^User sees Continue Survey button$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|msg_Congratulation', function () {
            callback();
        });
    });
    Given(/^User clicks Continue Survey button$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|btn_ContinueSurvey', function () {
            keyword.performclick('Screen_Mandatory_Congratulation_Message|btn_ContinueSurvey', function () {
                keyword.customisedSleep(10000, function () {
                    callback();
                })
            })
        });
    });
    Given(/^User sees Complete Later button$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|btn_CompleteLater', function () {
            callback();
        });
    });

    Given(/^User should be navigated to the HLI Blood Pressure Optional Survey screen$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        })
    });

    Given(/^User clicks Go to Dashboard button$/, function (callback) {
        keyword.performclick('Screen_Mandatory_Congratulation_Message|btn_CompleteLater', function () {
            callback();
        })
    });
    Given(/^User should be navigated to the HLI main Dashboard$/, function (callback) {
        keyword.customisedSleep(10000, function () {
            keyword.getCurrentURL(function (url) {
                expect(url.toString().trim().includes("dashboard")).to.equal(true);
                callback();
            })
        })
    });


    Given(/^page should include text explaining value of continuing with the optional survey screens$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|msg_Congratulation', function () {
            callback();
        })
    });
    Given(/^User should be navigated to the OVERALL HEALTH Survey screen$/, function (callback) {
        keyword.expectVisible('Screen_Mandatory_Congratulation_Message|header_screen', function () {
            keyword.getTextOfElement('Screen_Mandatory_Congratulation_Message|header_screen', function (name) {
                expect(name).to.equal("OVERALL HEALTH");
                callback();
            })
        })
    });
});

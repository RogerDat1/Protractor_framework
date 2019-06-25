var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User is accessing HLI Help & Support$/, function (done) {
        keyword.expectVisible('Dashboard_page|lnk_HelpAndContactsAsSubmenu', function () {
            keyword.performclick('Dashboard_page|lnk_HelpAndContactsAsSubmenu', function () {
                done();
            });
        });
    });
    Given(/^User needs help on any topic related to HLI$/, function (done) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|header_Need_Help_Want_To_Give_Feedback', function () {
            done();
        });
    });

    Given(/^User should be able to chat with a customer service support by clicking link$/, function (done) {
        done();
    });
    Given(/^User should be able to START a chat during Customer support available timings$/, function (done) {
        done();
    });
    Given(/^User should be able to select a help category topic$/, function (done) {
        done();
    });
    Given(/^User should be able to see estimated wait time while in chat queue$/, function (done) {
        done();
    });
    Given(/^User should be able to Save a chat$/, function (done) {
        done();
    });
    Given(/^User should be able to End a chat$/, function (done) {
        done();
    });
    Given(/^User should be able to Send a message during outside support working hours$/, function (done) {
        done();
    });
});
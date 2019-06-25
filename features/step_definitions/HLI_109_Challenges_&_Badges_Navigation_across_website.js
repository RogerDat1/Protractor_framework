var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^System loads the HLI Dashboard$/, function (done) {
        done();
    });
    Given(/^User extends the burger menu/, function (done) {
        done();
    });
    Given(/^User should see Challenges & Badges as a menu item/, function (done) {
        done();
    });
    Given(/^Challenges & Badges should be associated with appropriate icon/, function (done) {
        done();
    });
    Given(/^Dashboard image section includes a nudge capturing Badges earned/, function (done) {
        done();
    });
    Given(/^Nudge should be clickable/, function (done) {
        done();
    });
    Given(/^Dashboard image section includes a nudge capturing Active Goals/, function (done) {
        done();
    });
    Given(/^Dashboard image section includes a nudge capturing Active Goals/, function (done) {
        done();
    });
    Given(/^User clicks Challenges & Badges from navigation/, function (done) {
        done();
    });
    Given(/^User should be directed to Challenges & Badges tab within Health module/, function (done) {
        done();
    });
    Given(/^Challenges & Badges should load in defined design/, function (done) {
        done();
    });
    Given(/^User should see secondary navigation under Header$/, function (callback) {
        keyword.expectVisible('Dashboard_page|SecondaryNavigation', function () {
            callback();
        })
    });
    Given(/^Secondary navigation should include Challenges next to Health Summary module$/, function (callback) {
        keyword.expectVisible('Dashboard_page|SecondaryNavigation_Challenges', function () {
            keyword.getTextOfElement('Dashboard_page|SecondaryNavigation_Challenges', function (text) {
                expect(text.toString().trim()).to.equal("Challenges")
                callback();
            })
        })
    });
    Given(/^Secondary navigation should include Badges next to Challenges$/, function (callback) {
        keyword.expectVisible('Dashboard_page|SecondaryNavigation_Badges', function () {
            keyword.getTextOfElement('Dashboard_page|SecondaryNavigation_Badges', function (text) {
                expect(text.toString().trim()).to.equal("Badges")
                callback();
            })
        })
    });


    Given(/^^User clicks on "([^"]*)" submenu from Secondary navigation$/, function (SubmenuName, callback) {
        keyword.expectVisible('Dashboard_page|SecondaryNavigation_' + SubmenuName, function () {
            keyword.performclick('Dashboard_page|SecondaryNavigation_' + SubmenuName, function () {
                keyword.customisedSleep(15000, function () {
                    callback();
                })
            })
        })
    });
});

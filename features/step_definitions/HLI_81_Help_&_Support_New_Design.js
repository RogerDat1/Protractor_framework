
var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {
    Given(/^User clicks on navigation menu$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                callback();
            });
        });
    });

    Given(/^User should see link to Help & Contacts module$/, function (callback) {
        keyword.expectVisible('Dashboard_page|submenu_HelpAndContacts', function () {
            callback();
        });
    });
    Given(/^User clicks on Help & Contacts module$/, function (callback) {
        keyword.expectVisible('Dashboard_page|submenu_HelpAndContacts', function () {
            keyword.performclick('Dashboard_page|submenu_HelpAndContacts', function () {
            callback();
        });
        });
    });
    Given(/^User should see Help & Contact page loaded$/, function (callback) {
        keyword.waitTillTitleOfPageMacthesWithExpected('Help & Contacts dashboard', function () {
            callback();
        });
    });
    Given(/^User should see Help & Contact page loaded in new tab$/, function (callback) {
        keyword.switchToWindow(function () {
            keyword.waitTillTitleOfPageMacthesWithExpected('Help & Contacts dashboard', function () {
                callback();
            });
        });
    });
    Given(/^User should see link to Help & Contacts module in site footer$/, function (callback) {
        keyword.scrollToElementByLocatorIntoView('Dashboard_page|lnk_HelpAndContacts', function () {
            keyword.expectVisible('Dashboard_page|lnk_HelpAndContacts', function () {
            callback();
            });
        });
    });
    Given(/^User clicks on Help & Contacts module in the site footer$/, function (callback) {
        keyword.scrollToElementByLocatorIntoView('Dashboard_page|lnk_HelpAndContacts', function () {
            keyword.expectVisible('Dashboard_page|lnk_HelpAndContacts', function () {
                keyword.performclick('Dashboard_page|lnk_HelpAndContacts', function () {
                    callback();
                });
            });
        });
    });
    Given(/^User should see Q&A section$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|arrow_QA', function () {
            keyword.performclick('Terms_Of_Help_And_Contact|arrow_QA', function () {
                keyword.expectVisible('Terms_Of_Help_And_Contact|text_QA', function () {
                    keyword.performclick('Terms_Of_Help_And_Contact|text_QA', function () {
                        callback();
                    });
                });
            });
        });
    });
    Given(/^User should see Chat with Support section$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Contact Help & Support section$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|lnk_HLIMailId', function () {
            callback();
        });
    });
    Given(/^User should see NEED HELP OR WANT TO GIVE FEEDBACK section$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|header_Need_Help_Want_To_Give_Feedback', function () {
            callback();
        });
    });
    Given(/^User views Frequently asked Q&A section$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|frequently_Ask_QA', function () {
            callback();
        });
    });
    Given(/^User should see Basic tab under Q&A$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Account & Settings tab under Q&A$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Products & Services tab under Q&A$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Q&A organised in HLI Sub-Topic in a Tab$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should be able to open an question detail$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should be able to collapse an question detail$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|arrow_QA', function () {
            keyword.performclick('Terms_Of_Help_And_Contact|arrow_QA', function () {
                keyword.expectVisible('Terms_Of_Help_And_Contact|text_QA', function () {
                    keyword.performclick('Terms_Of_Help_And_Contact|arrow_Close', function () {
                        keyword.customisedSleep(5000, function () {
                            callback();
                        })
                    });
                });
            });
        });
    });
});




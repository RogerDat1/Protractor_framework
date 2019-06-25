/**
 * Created by amod-mahajan on 11/28/2017.
 */
var {defineSupportCode} = require("cucumber");

var await = require('await');

defineSupportCode(function ({Given}) {
    Given(/^User clicks on HLI Help & Contacts link$/, function (callback) {
        keyword.expectVisible('Dashboard_page|lnk_HelpAndContacts', function () {
            keyword.performclick('Dashboard_page|lnk_HelpAndContacts', function () {
                callback();
            })
        })
    });
    Given(/^System loads Help & Contacts page in new tab and user switches to it$/, function (callback) {
        keyword.swicthToWindowUsingTitle("Help & Contacts dashboard", function () {
            callback();
        })
    });
    Given(/^User should see HLI support email address as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|lnk_HLIMailId', function () {
            callback();
        })
    });

});

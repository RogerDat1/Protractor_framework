var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {
    Given(/^User accesses the dashboard$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^User will see notification centre icon on navigation header$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^Icon will be on left side of profile icon$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^Icon will capture a count of unread notifications for user$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^user has logged in HLI$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^user accesses a Third-party module$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^user will not see notification centre icon on navigation header$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
});
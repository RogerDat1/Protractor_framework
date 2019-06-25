var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {
    Given(/^The User records data for specific health metrics$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The User accesses the Apps tab on the Health Summary page$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The User should be able to map Trackers or apps for health metrics tracking$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The system should prompt for appropriate authentication when mapping the metrics from the app$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The health metrics should be refreshed on scheduled basis in HLI to capture most current data$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The User disconnects a metric tracking from Tracker or apps$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The User disconnects the Tracker or apps as a tracker$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
    Given(/^The System should discontinue the tracking of metrics from the Tracker or App per the current logic for Keep Remove data$/, function (done) {
        keyword.expectVisible('Health_Age|*******', function () {
            done();
        });
    });
});
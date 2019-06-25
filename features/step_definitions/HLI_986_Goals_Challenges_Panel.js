var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given}) {
    Given(/^Panel should include goals for "([^"]*)"$/, function (MetricName, callback) {
        keyword.expectVisible('|metricName_' + MetricName, function () {
            callback();
        })
    });
    Given(/^Dashboard should include Available Goals\/ Challenges Panel$/, function (callback) {
        callback();
    });
    Given(/^Health Summary should include Available Goals\/ Challenges Panel$/, function (callback) {
        callback();
    });
    Given(/^Zoom Level two should include Available Goals\/ Challenges Panel$/, function (callback) {
        callback();
    });
    Given(/^Zoom Level three should include Available & Active Goals\/ Challenges Panel$/, function (callback) {
        callback();
    });
    Given(/^User Zooms to Level two of Fitness within a health category$/, function (callback) {
        callback();
    });
    Given(/^User Zooms to Level three of Steps within a health category$/, function (callback) {
        callback();
    });
    Given(/^panel should include Active Goals accepted by user$/, function (callback) {
        callback();
    });
    Given(/^panel should include Available Goal Tiers not accepted\/ dismissed by user$/, function (callback) {
        callback();
    });
    Given(/^User view HealthyLives Dashboard$/, function (callback) {
        callback();
    });
    Given(/^User should see minimum one and maximum four goals$/, function (callback) {
        callback();
    });
});
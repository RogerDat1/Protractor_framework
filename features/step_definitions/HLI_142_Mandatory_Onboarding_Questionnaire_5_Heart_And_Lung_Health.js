var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given}) {
    Given(/^User should see Try Again Text for pulse start button$/, function (callback) {
        keyword.expectVisible('Screen_HeartAndLungHealth|label_TryAgianPulse', function () {
            callback();
        })
    });
    Given(/^User see non zero value for "([^"]*)" for breath holding time at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|value_' + Question, function () {
            keyword.getTextOfElement('Screen_' + PageName + '|value_' + Question, function (text) {
                expect(text.toString().trim()).to.not.equal("00");
                callback();
            });
        })
    });
    Given(/^User see time for hold breath at "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|info_holdBreath', function () {
            callback();
        })
    });
    Given(/^User should see proper error message for invalid pulse value$/, function (callback) {
        keyword.expectVisible('Screen_HeartAndLungHealth|error_pulse', function () {
            callback();
        })
    });
});
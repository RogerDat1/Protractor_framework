var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given}) {
    Given(/^User see "([^"]*)" tab relevant to his Company$/, function (TabName, callback) {
        keyword.expectVisible('Screen_AdminConsole|tab_' + TabName, function () {
            callback();
        })
    });
    Given(/^Company Survey tab is listed next to Analytic$/, function (callback) {
        keyword.getTextOfElement('Screen_AdminConsole|second_CompanySurvey', function (text) {
            expect(text.toString().trim()).to.equal("Corporate survey")
            callback();
        })
    });
});
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given}) {
    Given(/^User clicks on burger menu of Dashboard page$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                callback();
            });
        });
    });
    Given(/^User should see admin console option in menu$/, function (callback) {
        keyword.expectVisible('Dashboard_page|submenu_AdminConsole', function () {
            callback();
        });
    });
    Given(/^User clicks on Admin Console option from burger menu$/, function (callback) {
        keyword.expectVisible('Dashboard_page|submenu_AdminConsole', function () {
            keyword.performclick('Dashboard_page|submenu_AdminConsole', function () {
                callback();
            });
        });
    });
    Given(/^User should see Admin Console dashboard$/, function (callback) {
        keyword.expectVisible('Screen_AdminConsole|tab_AnalyticsDashboard', function () {
            callback();
        });
    });
    Given(/^User should see a tab for Analytics dashboard$/, function (callback) {
        keyword.expectVisible('Screen_AdminConsole|tab_AnalyticsDashboard', function () {
            callback();
        });
    });
    Given(/^User should see a tab for Company survey$/, function (callback) {
        keyword.expectVisible('Screen_AdminConsole|tab_CompanySurvey', function () {
            callback();
        });
    });
});
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given}) {
    Given(/^User has accessed Goals Challenges tab in Health module$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            browser.sleep(3000)
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|lnk_HealthAge', function () {
                    keyword.performclick('Dashboard_page|lnk_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Goals', function () {
                            keyword.performclick('health_Summary|lnk_Goals', function () {
                                callback();
                            });
                        });
                    });
                });
            });
        });
    });
    Given(/^System loads Goals Challenges page in defined design$/, function (callback) {
        keyword.expectVisible('Screen_Goals|subNavigation_MyGoals', function () {
            callback();
        });
    });
    Given(/^Goal page includes sub\-navigation for "([^"]*)"$/, function (NavigationName, callback) {
        keyword.expectVisible('Screen_Goals|subNavigation_' + NavigationName, function () {
            callback();
        });
    });
    Given(/^My Goals page should be default open$/, function (callback) {
        // Need to check what attribute makes tab active
        // UI required
    });
    Given(/^User navigates to sub\-navigation "([^"]*)" of "([^"]*)" page$/, function (NavigationName, PageName, callback) {
        keyword.expectVisible('Screen_Goals|subNavigation_' + NavigationName, function () {
            keyword.performclick('Screen_Goals|subNavigation_' + NavigationName, function () {
                callback();
            });
        });
    });
    Given(/^System loads an empty tile nudging user to start a goal$/, function (callback) {
        keyword.expectVisible('Screen_Goals|btn_StartNewGoal', function () {
            callback();
        });
    });
    Given(/^Panel should include all Available Goals in tile format$/, function (callback) {
        callback.pending();
    });
    Given(/^Available Goals Tile should include "([^"]*)" associated with Goal$/, function (GoalProperty, callback) {
        callback.pending();
    });
    Given(/^Available Goals Tile should include "([^"]*)" button associated with Goal$/, function (GoalProperty, callback) {
        callback.pending();
    });
    Given(/^"([^"]*)" tile should include "([^"]*)"$/, function (GoalType, GoalProperty, callback) {
        keyword.expectVisible('Screen_Goals|' + GoalProperty + '_' + GoalProperty, function () {
            callback();
        });
    });
    Given(/^New panel with Available Goals should be shown on My Goals page$/, function (callback) {
        callback.pending();
    });
    Given(/^New panel with Active Goals should be shown on My Goals page$/, function (callback) {
        callback.pending();
    });
    Given(/^Panel should include all Active Goals in tile format$/, function (callback) {
        callback.pending();
    });
    Given(/^System loads an empty tile nudging user to start a goal at the end of all Active goals$/, function (callback) {
        callback.pending();
    });
    Given(/^New panel with Completed Goals should be shown on My Goals page$/, function (callback) {
        callback.pending();
    });
    Given(/^Panel should include all Completed Goals in tile format$/, function (callback) {
        callback.pending();
    });
    Given(/^New panel with "([^"]*)" should be shown on My Goals page$/, function (GoalType, callback) {
        callback.pending();
    });
    Given(/^Panel should include all "([^"]*)" in tile format$/, function (GoalType, callback) {
        callback.pending();
    });
    Given(/^System loads an empty tile nudging user to anticipate a 'Company Challenges'$/, function (callback) {
        callback.pending();
    });
    Given(/^Available Goals panel from 'My Goals' page should also show in 'Company Challenges'$/, function (callback) {
        callback.pending();
    });
});
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given}) {
    Given(/^User navigates to mandatory screen of substance usage$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            browser.sleep(3000)
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Data', function () {
                            keyword.performclick('health_Summary|lnk_Data', function () {
                                keyword.expectVisible('Health_Age|button_MandatoryQuestions', function () {
                                    keyword.performclick('Health_Age|button_MandatoryQuestions', function () {
                                        keyword.expectVisible('Health_Age|button_EditIconOfSubstanceUsage', function () {
                                            keyword.performclick('Health_Age|button_EditIconOfSubstanceUsage', function () {
                                                callback();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
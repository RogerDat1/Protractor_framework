var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {

    Given(/^User navigates to health Module$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|icon_Menu', function () {
                keyword.performclick('Dashboard_page|icon_Menu', function () {
                    keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                        keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                            keyword.customisedSleep(10000, function () {
                                done();
                            })
                        });
                    });
                });
            });
        });
    });
    Given(/^User clicks on BIOMETRICS in zoom level 1$/, function (done) {
        done();
    })
    Given(/^User enters design of zoom leve 2$/, function (done) {
        keyword.expectVisible('Health_Age|summary_Button', function () {
            done();
        })
    })
    Given(/^User can see Add App page$/, function (done) {
        keyword.expectVisible('Health_Age|text_AddApp', function () {
            done();
        })
    })
    Given(/^User can see Data Source button$/, function (done) {
        keyword.expectVisible('Health_Age|data_Source_Button', function () {
            done();
        })
    })
    Given(/^User click on Data source button$/, function (done) {
        keyword.expectVisible('Health_Age|icon_connect_App', function () {
            keyword.performclick('Health_Age|icon_connect_App', function () {
                done();
            })
        })
    })

    Given(/^User can see Title and Details$/, function (done) {
        keyword.expectVisible('Health_Age|data_Source_Button', function () {
            done();
        })
    })
    Given(/^User can see Record data manually$/, function (done) {
        keyword.expectVisible('Health_Age|record_Data_Manually', function () {
            done();
        })
    })
    Given(/^User clicks on Record data manually$/, function (done) {
        keyword.expectVisible('Health_Age|record_Data_Manually', function () {
            keyword.performclick('Health_Age|record_Data_Manually', function () {
                done();
            })
        })
    })
    Given(/^User can see Record data manually page$/, function (done) {
        keyword.expectVisible('Health_Age|text_record_Data_Manually', function () {
            done();
        })
    })

    Given(/^User clicks on "([^"]*)" in zoom level one$/, function (ParameterName, callback) {
        keyword.expectVisible('Health_Age|parameter_' + ParameterName, function () {
            keyword.performclick('Health_Age|parameter_' + ParameterName, function () {
                callback();
            })
        })
    });


});






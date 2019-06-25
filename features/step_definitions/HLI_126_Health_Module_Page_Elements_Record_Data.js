var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {

    Given(/^User can view a button at the left side of the page for 'Record Data'$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Record_Data', function () {
            done();
        });
    });
    Given(/^The User clicks on this button$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Record_Data', function () {
            keyword.performclick('Health_Age|icon_Record_Data', function () {
                done();
            });
        });
    });


    Given(/^System should open a pop\-up box for Record Data$/, function (done) {
        keyword.expectVisible('Health_Age|text_Record_Data', function () {
            done();
        });
    });

    Given(/^User has to see select a category$/, function (done) {
        keyword.getSelectedOptionFromSelectDropdown('Health_Age|text_Select_Category', function (text) {
            console.log(text);
            done();
        });
    });


    Given(/^User has to see select a Metric$/, function (done) {
        keyword.getSelectedOptionFromSelectDropdown('Health_Age|text_Select_Matric', function (text) {
            console.log(text);
            done();
        });
    });
    Given(/^The User has the option to record the metric through an App or Manually$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Add_App', function () {
            keyword.performclick('Health_Age|icon_Add_App', function () {
                done();
            });
        });
    });
    Given(/^The User chooses to record the data through an App$/, function (done) {
        keyword.expectVisible('Health_Age|app_Garmine', function () {
            keyword.performclick('Health_Age|app_Garmine', function () {
                done();
            });
        });
    });
    Given(/^User has to click on cancle$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Record_Data_Cancle', function () {
            keyword.performclick('Health_Age|icon_Record_Data_Cancle', function () {
                done();
            });
        });
    });
    Given(/^User can click on an App option to connect$/, function (done) {
        keyword.expectVisible('Health_Age|option_Activity', function () {
            keyword.performclick('Health_Age|option_Activity', function () {
                done();
            });
        });
    });
});




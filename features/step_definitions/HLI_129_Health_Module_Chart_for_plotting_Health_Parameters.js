var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {


    Given(/^User should see link to Health & Age Contacts module$/, function (done) {
        keyword.expectVisible('Dashboard_page|lnk_HealthAge', function () {
            done();
        });
    });
    Given(/^User clicks on Health & Age module$/, function (done) {
        keyword.expectVisible('Dashboard_page|lnk_HealthAge', function () {
            keyword.performclick('Dashboard_page|lnk_HealthAge', function () {
                done();
            });
        });
    });
    Given(/^The User can view the Homepage for Health$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Healthy', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Biometrics$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Biometrics', function () {
            done();
        });
    });
    Given(/^User graph should capture overall Health Age Score$/, function (done) {
        keyword.expectVisible('Health_Age|user_Total_Score', function () {
            done();
        });
    });
    Given(/^User should view HealthyLives circular graph on page$/, function (done) {
        keyword.expectVisible('Health_Age|user_Graph', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Mood$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Mood', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Sleep$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Sleep', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Stress$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Stress', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Clinical$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Clinical', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Mental Wellness$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Mental_Wellness', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Substances$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Substances', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Nutrition$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Nutrition', function () {
            done();
        });
    });
    Given(/^User can view the graph plotting parameters Fitness$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Fitness', function () {
            done();
        });
    });
    Given(/^Icon for Manual data$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Record_Data', function () {
            done();
        });
    });
    Given(/^Icons for apps connected$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Add_App', function () {
            done();
        });
    });
    Given(/^The category dot will be plotted in the chart on the side$/, function (done) {
        keyword.expectVisible('Health_Age|icon_Dot', function () {
            done();
        });
    });
    Given(/^The Overall status will be determined as Green$/, function (done) {
        keyword.expectVisible('Health_Age|tab_Fitness', function () {
            done();
        });
    });
});

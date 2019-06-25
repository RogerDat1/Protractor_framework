var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {

    Given(/^User should see a view details option for weight$/, function (done) {
        keyword.expectVisible('Health_Age|weight_Details', function () {
            done();
        })
    })
    Given(/^User should see a view details option for HeartRate$/, function (done) {
        keyword.expectVisible('Health_Age|heart_Rate_Details', function () {
            done();
        })
    })
    Given(/^User should see a view details option for stariFlight$/, function (done) {
        keyword.expectVisible('Health_Age|Stairs_Climbed_Details', function () {
            done();
        })
    })
    Given(/^User should see a view details option for steps$/, function (done) {
        keyword.expectVisible('Health_Age|steps_Details', function () {
            done();
        })
    })
    Given(/^User should see a view details option for CaloriesBurned$/, function (done) {
        keyword.expectVisible('Health_Age|Calories_Burned_Details', function () {
            done();
        })
    })
    Given(/^User should see a view details option for Distance$/, function (done) {
        keyword.expectVisible('Health_Age|Distance_Details', function () {
            done();
        })
    })
    Given(/^User clicks on view details option for weight$/, function (done) {
        keyword.expectVisible('Health_Age|weight_Details', function () {
            keyword.performclick('Health_Age|weight_Details', function () {
                done();
            })
        })
    })
    Given(/^Page should include graphical presentation of User's data over a weekly by default$/, function (done) {
        keyword.expectVisible('Health_Age|weekly_avg_Details', function () {
            keyword.getTextOfElement('Health_Age|weekly_avg_Details', function (val) {
                expect(val.toString().includes("Weekly")).to.equal(true);
                done();
            })
        })
    })
    Given(/^Page should include average metric value for the weekly$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User should allow to navigate back into primary Zoom 2 metric$/, function (done) {
        keyword.expectVisible('Health_Age|back_to_Zoom2', function () {
            keyword.performclick('Health_Age|back_to_Zoom2', function () {
                done();
            })
        })
    })
    Given(/^Page should include average metric value for the yearly$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^Page should include graphical presentation of User's data over a yearly$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User clicks on year option first$/, function (done) {
        keyword.customisedSleep('50000', function () {
            keyword.expectVisible('Health_Age|button_Yearly', function () {
                done();
            })
        })
    })
    Given(/^Page should include average metric value for the monthly$/, function (done) {
        keyword.expectVisible('Health_Age|weekly_avg_Details', function () {
            done();
        })
    })
    Given(/^Page should include graphical presentation of User's data over a monthly$/, function (done) {
        keyword.customisedSleep('50000', function () {
            keyword.expectVisible('Health_Age|count_weekly_Details', function () {
                done();
            })
        })
    })
    Given(/^User clicks on month option first$/, function (done) {
        keyword.expectVisible('Health_Age|button_Monthly', function () {
            keyword.performclick('Health_Age|button_Monthly', function () {
                done();
            })
        })
    })
    Given(/^Metric value for each day of week should be plotted as a bar graph$/, function (done) {
        keyword.expectVisible('Health_Age|graph_Weekly', function () {
            done();
        })
    })
    Given(/^Graph has Y axis display daily average of defined metric value units$/, function (done) {
        keyword.expectVisible('Health_Age|graph_Weekly', function () {
            done();
        })
    })
    Given(/^Graph has X axis display current status$/, function (done) {
        keyword.expectVisible('Health_Age|graph_Weekly', function () {
            done();
        })
    })
    Given(/^Graph includes a sub-title capturing Average value for Metric$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^Graph includes a title capturing Metric name$/, function (done) {
        keyword.expectVisible('Health_Age|weekly_avg_Details', function () {
            done();
        })
    })
    Given(/^User views the default Zoom 3 graph$/, function (done) {
        keyword.expectVisible('Health_Age|graph_Weekly', function () {
            done();
        })
    })
    Given(/^User has accessed Zoom 3 page of week$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User views Annual Zoom 3 graph$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User should view average daily value associated with that date$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User hovers over any bar graph Plotting$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User views Weekly Zoom 3 graph$/, function (done) {
        keyword.expectVisible('Health_Age|count_weekly_Details', function () {
            done();
        })
    })
    Given(/^User should see "([^"]*)" details at zoom level (\d+)$/, function (ParameterName, arg2, callback) {
        keyword.expectVisible('Health_Age|Zoom3_' + ParameterName, function () {
            callback();
        })
    });
    Given(/^Page should include graphical presentation of User's data over a month$/, function (callback) {
        keyword.expectVisible('Health_Age|DataOver_Month', function () {
            keyword.performclick('Health_Age|DataOver_Month', function () {
                keyword.customisedSleep(10000, function () {
                    keyword.getTextOfElement('Health_Age|weekly_avg_Details', function (val) {
                        expect(val.toString().includes("Monthly")).to.equal(true);
                        callback();
                    })
                })
            })
        })
    });

    Given(/^Page should include graphical presentation of User's data over a year/, function (callback) {
        keyword.expectVisible('Health_Age|DataOver_Year', function () {
            keyword.performclick('Health_Age|DataOver_Year', function () {
                keyword.customisedSleep(10000, function () {
                    keyword.getTextOfElement('Health_Age|weekly_avg_Details', function (val) {
                        expect(val.toString().includes("Annual ")).to.equal(true);
                        callback();
                    })
                })
            })
        })
    });
    Given(/^User should be navigated to zoom level (\d+) of "([^"]*)"$/, function (Arg1, ParameterName, callback) {
        keyword.expectVisible('Health_Age|Zoom2_' + ParameterName, function () {
            callback();
        })
    });
    Given(/^User should see a view details option for "([^"]*)"$/, function (ParameterName, callback) {
        keyword.expectVisible('Health_Age|ViewHistory_' + ParameterName, function () {
            callback();
        })
    });
    Given(/^User clicks on view details option for "([^"]*)"$/, function (ParameterName, callback) {
        keyword.performclick('Health_Age|ViewHistory_' + ParameterName, function () {
            callback();
        })
    });
});

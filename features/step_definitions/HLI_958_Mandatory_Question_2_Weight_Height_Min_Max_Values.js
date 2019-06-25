var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^User toggles unit types of weight to fill weight in Kgs$/, function (callback) {
        keyword.expectNotVisible('Screen_BMIBodyShape|textbox_Kgs', function (flag) {
            if (flag) {
                keyword.performclick('Screen_BMIBodyShape|toggle_WeightUnits', function () {
                    callback();
                })
            }
            else {
                callback();
            }
        })
    });
    Given(/^User should see an error message to enter a valid value$/, function (callback) {
        keyword.expectVisible('Screen_BMIBodyShape|ErrorMsg_InvalidValue', function () {
            callback();
        })
    });
    Given(/^User should not see a BMI score in BMI chart$/, function (callback) {
        keyword.expectVisible('Screen_BMIBodyShape|NoBMIValue', function () {
            callback();
        })
    });
    Given(/^User should not see an error message to enter a valid value$/, function (callback) {
        keyword.expectNotVisible('Screen_BMIBodyShape|NoBMIValue', function (flag) {
            expect(flag).to.equal(true);
            callback();
        })
    });
    Given(/^User should see a non zero BMI score in BMI chart$/, function (callback) {
        keyword.expectVisible('Screen_BMIBodyShape|score_BMI', function () {
            keyword.getTextOfElement('Screen_BMIBodyShape|score_BMI', function (text) {
                expect(text.toString().trim()).to.not.equal("0");
                callback();
            })
        })
    });
    Given(/^User toggles unit types of height to fill weight in Feet$/, function (callback) {
        keyword.expectNotVisible('Screen_BMIBodyShape|textbox_Feet', function (flag) {
            if (flag) {
                keyword.performclick('Screen_BMIBodyShape|toggle_HeightUnits', function () {
                    callback();
                })
            }
            else {
                callback();
            }
        })
    });
});
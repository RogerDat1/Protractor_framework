var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^User should see body shape as "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|bodyShape_' + Question, function () {
            callback();
        })
    });
    Given(/^User clicks on body shape as "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|bodyShape_' + Question, function () {
            keyword.performclick('Screen_' + PageName + '|bodyShape_' + Question, function () {
                callback();
            })
        })
    });
    Given(/^User should see header info about body shape as "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|bodyshapeDescription_Header', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|bodyshapeDescription_Header', function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['bodyShape_' + Question].header);
                callback();
            })
        })
    });

    Given(/^User should see header info about "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|bodyshapeDescription_Header', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|bodyshapeDescription_Header', function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['bodyShape_' + Question].header);
                callback();
            })
        })
    });
    Given(/^User should see description info about body shape as "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|bodyshapeDescription_Header', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|bodyshapeDescription_label', function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['bodyShape_' + Question].description);
                callback();
            })
        })
    });
    Given(/^User provides "([^"]*)" value for field "([^"]*)" at "([^"]*)" screen$/, function (BmiType, Question, PageName, callback) {
        var value = HLIData['Screen_' + PageName]['bmi_' + BmiType][Question];
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + Question, function () {
            keyword.setText('Screen_' + PageName + '|textbox_' + Question, value, function () {
                keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                    callback();
                })
            })
        })
    });
    Given(/^User should see BMI Result value for "([^"]*)" at "([^"]*)" screen$/, function (BmiType, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|score_BMI', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|score_BMI', function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['bmi_' + BmiType].bmi);
                callback();
            })
        })
    });
    Given(/^User should see label as "([^"]*)" at "([^"]*)" screen$/, function (BmiScore, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|label_' + BmiScore, function () {
            callback();
        })
    });
    Given(/^User should see BMI SCORE as "([^"]*)" at "([^"]*)" screen$/, function (BmiType, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|bmiScoreType', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|bmiScoreType', function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['bmi_' + BmiType].type);
                callback();
            })
        })
    });
    Given(/^User should see BMI SCORE as "([^"]*)" color at "([^"]*)" screen$/, function (BmiType, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|bmiScoreType', function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|bmiScoreType', 'color', function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['bmi_' + BmiType].color);
                callback();
            })
        })
    });
    Given(/^User selects a body shape for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.performclick('Screen_' + PageName + '|bodyShape_' + answerToBeGiven, function () {
            callback();
        })
    });

    Given(/^User see selected body shape for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.expectPresence('Screen_' + PageName + '|bodyShapeSelected_' + answerToBeGiven, function () {
            callback();
        })
    });

});

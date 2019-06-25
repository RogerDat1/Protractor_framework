/**
 * Created by amod-mahajan on 12/11/2017.
 */



var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User sees Nutrition Inputs as "([^"]*)" for Nutrition questions "([^"]*)"$/, function (value1, value2, callback) {
        switch (value2) {
            case "How do you rate your diet?": {

            }
            case "Satisfied with your diet?": {

            }
            case "Have you ever sought advice on your diet?": {

            }
            case "Would you like access to advice on balanced meal planning?": {

            }
            case "Food intolerances or allergies?": {

            }
            case "Do you observe a restricted diet": {

            }
            case "Do you track calorie intake": {

            }
            case "If healthy snacks would be available at work, would you swap/eat them?": {

            }
            case "How many times a week do you cook using main base ingredients?": {

            }
            case "How many times per day do you eat packaged convenience meals?": {

            }
            case "how many times per day do you eat prepackeged store-bought meals (such as takeaways,…)": {

            }
            default: {
                console.log("Incorrect questions");
                callback();
            }
        }
    });


    Given(/^User sees default selected Nutrition Input as "([^"]*)" for Nutrition questions "([^"]*)"$/, function (value1, value2, callback) {
        switch (value2) {
            case "How do you rate your diet?": {

            }
            case "Satisfied with your diet?": {

            }
            case "Have you ever sought advice on your diet?": {

            }
            case "Would you like access to advice on balanced meal planning?": {

            }
            case "Food intolerances or allergies?": {

            }
            case "Do you observe a restricted diet": {

            }
            case "Do you track calorie intake": {

            }
            case "If healthy snacks would be available at work, would you swap/eat them?": {

            }
            case "How many times a week do you cook using main base ingredients?": {

            }
            case "How many times per day do you eat packaged convenience meals?": {

            }
            case "how many times per day do you eat prepackeged store-bought meals (such as takeaways,…)": {

            }
            default: {
                console.log("Incorrect questions");
                callback();
            }
        }
    });

    Given(/^User navigates to "([^"]*)" screen$/, function (arg1, callback) {

    });

    Given(/^User should see questions related to Nutrition on a pop-up screen$/, function (callback) {

    });

    Given(/^User should not be able to click outside screen$/, function (callback) {

    });

    Given(/^User should see Screen Title as NUTRITION$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|header_Nutrition', function () {
            callback();
        })
    });

    Given(/^User should see Screen Description as Could you tell us a bit about your nutrition\? If you can’t right now, don’t worry you can always come back to this page later on$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|description_Nutrition', function () {
            callback();
        })
    });

    Given(/^User should see eleven Nutrition Questions$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|XXXX', function () {
            callback();
        })
    });

    Given(/^User should see CTA to "Save and continue later"$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|description_Nutrition', function () {
            callback();
        })
    });

    Given(/^User should see button to 'next' screen enabled by default$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|btn_Next', function () {
            callback();
        })
    });

    Given(/^User should see button to 'previous' screen enabled by default$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|btn_Previous', function () {
            callback();
        })
    });

    Given(/^It should be third screen of optional onboarding survey$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|label_ScreenNumber', function () {
            callback();
        })
    });

    Given(/^user should see first question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question1', function () {
            callback();
        })
    });

    Given(/^User should see second question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question2', function () {
            callback();
        })
    });

    Given(/^User should see third question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question3', function () {
            callback();
        })
    });

    Given(/^User should see fourth question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question4', function () {
            callback();
        })
    });

    Given(/^User should see fifth question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question5', function () {
            callback();
        })
    });

    Given(/^User should see sixth question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question6', function () {
            callback();
        })
    });

    Given(/^User should see seventh question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question7', function () {
            callback();
        })
    });


    Given(/^User should see eighth question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question8', function () {
            callback();
        })
    });


    Given(/^User should see ninth question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question9', function () {
            callback();
        })
    });

    Given(/^User should see tenth question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question10', function () {
            callback();
        })
    });

    Given(/^User should see eleventh question as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Nutrition_Screen|label_question11', function () {
            callback();
        })
    });

    Given(/^User clicks on 'Next' button in Nutrition screen$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|btn_Next', function () {
            keyword.performclick('Nutrition_Screen|btn_Next', function () {
                callback();
            })
        })
    });

    Given(/^User clicks 'Previous' button in Nutrition screen$/, function (callback) {
        keyword.expectVisible('Nutrition_Screen|btn_Previous', function () {
            keyword.performclick('Nutrition_Screen|btn_Previous', function () {
                callback();
            })
        })
    });

    Given(/^User selects answer for some questions$/, function (callback) {

    });
    Given(/^User should see all given answers$/, function (callback) {

    });

    Given(/^User has mapped Calorie Intake to be tracked from a Tracker$/, function (callback) {

    });

    Given(/^User should see "Do you track calorie intake" set to "Yes"$/, function (callback) {

    });

    Given(/^User should not be able to update the field$/, function (callback) {

    });

    Given(/^User has not mapped Calorie Intake to be tracked from a Tracker$/, function (callback) {

    });

    Given(/^User should see "Do you track calorie intake" defaulted to "No"$/, function (callback) {

    });

    Given(/^User should be able to update the field$/, function (callback) {

    });


});




/**
 * Created by amod-mahajan on 12/5/2017.
 */
var {defineSupportCode} = require("cucumber");

var reusable = require('./Reusable_Step_Definitions.js');

var users;

defineSupportCode(function ({Given}) {


    Given(/^NEED HELP OR WANT TO GIVE FEEDBACK section should contain a drop down of help type$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Dropdown', function () {
            callback();
        });
    });
    Given(/^Default option in dropdown should be Choose one$/, function (callback) {
        keyword.getSelectedOptionFromSelectDropdown('Terms_Of_Help_And_Contact|default_Dropdown_Value', function (text) {
            expect(text).to.equal("Choose one")

            callback();

        });
    });
    Given(/^NEED HELP OR WANT TO GIVE FEEDBACK section should contain a text area to describe$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Textarea', function () {
            callback();
        });
    });
    Given(/^NEED HELP OR WANT TO GIVE FEEDBACK section should contain a Send feedback to send$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Send_button', function () {
            callback();
        });
    });
    Given(/^User clicks on drop down$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Dropdown', function () {
            keyword.performclick('Terms_Of_Help_And_Contact|feedback_Dropdown', function () {
            callback();
        });
        });
    });
    Given(/^Form should include dropdownlist of feedback topics "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, function (d1, d2, d3, d4, d5, d6, callback) {
        keyword.getDropdownvalues('Terms_Of_Help_And_Contact|default_Dropdown_Value', function (list) {

            drpvalues = [d1, d2, d3, d4, d5, d6];
            if (drpvalues.equals(list, false) !== true) {
                throw "Dropdown values mismatch"
            }
            callback();
        });
    });

    Array.prototype.equals = function (array, strict) {
        if (!array)
            return false;
        if (arguments.length == 1)
            strict = true;

        if (this.length != array.length)
            return false;

        for (var i = 0; i < this.length; i++) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i], strict))
                    return false;
            }
            else if (strict && this[i] != array[i]) {
                return false;
            }
            else if (!strict) {
                return this.sort().equals(array.sort(), true);
            }
        }
        return true;
    }
    Given(/^User should see Feedback as an option in drop down$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Product Issue as an option in drop down$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Security as an option in drop down$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see Other as an option in drop down$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User does not select any option from drop down and it has default value Choose one$/, function (callback) {
        keyword.getSelectedOptionFromSelectDropdown('Terms_Of_Help_And_Contact|default_Dropdown_Value', function (text) {
            expect(text).to.equal("Choose one");
            callback();
        });
    });
    Given(/^User types comment in comment area$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Textarea', function () {
            keyword.setText('Terms_Of_Help_And_Contact|feedback_Textarea', 'Testing', function () {
            callback();
        });
        });
    });
    Given(/^User clicks on submit button$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Send_button', function () {
            keyword.performclick('Terms_Of_Help_And_Contact|feedback_Send_button', function () {
            callback();
        });
        });
    });
    Given(/^System should validate & prompt User to select a Topic "([^"]*)"$/, function (msg, done) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|error_Default_Msg', function () {
            keyword.verifyText('Terms_Of_Help_And_Contact|error_Default_Msg', msg, function () {
                done();
            });
        });
    });

    Given(/^User has selected feedback topic from dropdown list "([^"]*)"$/, function (topic, done) {
        keyword.selectByVisibleText('Terms_Of_Help_And_Contact|feedback_Dropdown', topic, function () {
            done();
        });
    });
    Given(/^User has not included text to describe feedback$/, function (callback) {
        keyword.isFieldEmpty('Terms_Of_Help_And_Contact|feedback_Textarea', function () {
            callback();
        });
    });
    Given(/^User clicks Submit button$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^System should validate & prompt User to describe feedback "([^"]*)"$/, function (msg, done) {
        keyword.verifyText('Terms_Of_Help_And_Contact|error_FeedbackRequired', msg, function () {
            done();
        });
    });

    Given(/^User has selected feedback topic from drop-down list$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User has included text to describe feedback$/, function (callback) {
        keyword.expectVisible('Terms_Of_Help_And_Contact|feedback_Textarea', function () {
            keyword.setText('Terms_Of_Help_And_Contact|feedback_Textarea', 'Testing', function () {
                callback();
            });
        });
    });
    Given(/^User should see successful submission confirmation message "([^"]*)"$/, function (msg, done) {
        // shortWait(function() {
        keyword.customisedSleep(10000, function () {
            keyword.scrollToElementByLocatorIntoView('Terms_Of_Help_And_Contact|error_SuccessMessage', function () {
                keyword.expectVisible('Terms_Of_Help_And_Contact|error_SuccessMessage', function () {
                    keyword.verifyText('Terms_Of_Help_And_Contact|error_SuccessMessage', msg, function () {
                        done();
                    });
                });
            });
        })

    });
    Given(/^Successful message should show Thank you for your feedback query$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^System fails to submit Form successfully to HLI Support Inbox$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User should see failure message$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^Failure message should contain Unfortunately we cannot submit your query at this time. Please try again later.$/, function (callback) {
        keyword.expectVisible('', function () {
            callback();
        });
    });
    Given(/^User see types of feedback options avilable in dropdown$/, function (callback) {
        reusable.getOptionValues('dropdownOptions_feedback', 'dropdown_feedback', 'Terms_Of_Help_And_Contact', function (values) {
            expect(JSON.stringify(values)).to.be.equal('["Choose one","Complaint","Feedback","Product Issue","Security","Other"]');
            callback();
        })
    });
});

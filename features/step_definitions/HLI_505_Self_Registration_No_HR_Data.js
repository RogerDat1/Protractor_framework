/**
 * Created by amod-mahajan on 1/12/2018.
 */

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User access HLI registration URL$/, function (done) {
        browser.get(globalData.Registration_URL[globalData.Environment.trim()]).then(function () {
            browser.waitForAngularEnabled(false);
            keyword.customisedSleep(10000, function () {
                done();
            })
        });
    });

    Given(/^User see HLI registration page$/, function (done) {
        keyword.getTextOfElement('Self_Registration_Page|header_Screen', function (headerText) {
            expect(headerText).to.equal("CREATE YOUR HEALTHY LIVES™ ACCOUNT");
            done();
        })
    });

    Given(/^Uses see HLI logo$/, function (done) {
        keyword.expectVisible('Login_Page|link_HLILogo', function () {
            done();
        })
    });

    Given(/^User see header as Create Your Account$/, function (done) {
        keyword.getTextOfElement('Self_Registration_Page|header_Screen', function (headerText) {
            expect(headerText).to.equal("CREATE YOUR HEALTHY LIVES™ ACCOUNT");
            done();
        })
    });

    Given(/^User see Registration page description$/, function (done) {
        keyword.getTextOfElement('Self_Registration_Page|descriptionScreen', function (headerText) {
            expect(headerText).to.equal("There's just one more step to activate your account! Your employer has already provided the details we need to identify you, so all you need to do now is choose your password" +
                " and security questions and confirm you’re not a robot. When you’ve done that click on 'save' and log in!");
            done();
        })
    });

    Given(/^User see First Name text box$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_firstName', function () {
            done();
        })
    });

    Given(/^User see Email Address box$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_emailAddress', function () {
            done();
        })
    });

    Given(/^User see Last Name text box$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_lastName', function () {
            done();
        })
    });

    Given(/^User see Re-type Email Address text box$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_retypeEmailAddress', function () {
            done();
        })
    });

    Given(/^User see Day text box of Date Of Birth$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_day', function () {
            done();
        })
    });

    Given(/^User see Month text box of Date Of Birth$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_month', function () {
            done();
        })
    });

    Given(/^User see Year text box of Date Of Birth$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_year', function () {
            done();
        })
    });

    Given(/^User see Password text box in Registration page$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_password', function () {
            done();
        })
    });

    Given(/^User see Gender drop down$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|dropdown_gender', function () {
            done();
        })
    });

    Given(/^User see Re-enter Password text box$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|txt_retypePassword', function () {
            done();
        })
    });

    Given(/^User see Captcha$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|lbl_captch', function () {
            done();
        })
    });


    Given(/^User see next button in Registration page$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|btn_next', function () {
            done();
        })
    });


    Given(/^User see cancel button in Registration page$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|btn_cancel', function () {
            done();
        })
    });


    Given(/^User sess HLI standard footer$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|footer_HLI', function () {
            done();
        })
    });

    Given(/^User see First Name as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_firstName', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });


    Given(/^User see Last Name as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_lastName', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });


    Given(/^User see Email Address as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_emailAddress', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });

    Given(/^User see Re-type Email Address as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_retypeEmailAddress', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });


    Given(/^User see Password as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_password', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });


    Given(/^User see Re-type Password as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_retypePassword', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });

    Given(/^User see Day as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_day', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });

    Given(/^User see Month as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_month', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });

    Given(/^User see Year as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_year', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });

    Given(/^User see Gender as mandatory field$/, function (done) {
        keyword.getCssAttributeValue('Self_Registration_Page|dropdown_gender', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            done();
        })
    });

    Given(/^User see Info icon at Password label$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|icon_infoAtPassword', function () {
            done();
        })
    });

    Given(/^User clicks on Info icon$/, function (done) {
        keyword.performclick('Self_Registration_Page|icon_infoAtPassword', function () {
            done();
        })
    });

    Given(/^User see rules for valid password$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|msg_PasswordError', function () {
            done();
        })
    });

    Given(/^User clicks on Next button in Registration page$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|btn_next', function () {
            keyword.performclick('Self_Registration_Page|btn_next', function () {
                done();
            })
        })
    });

    Given(/^User see proper error message$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|XXXX', function () {
            done();
        })
    });

    Given(/^User enters last name as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_lastName', function () {
            keyword.setText('Self_Registration_Page|txt_lastName', value1, function () {
                callback();
            })
        })
    });


    Given(/^User enters first name as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_firstName', function () {
            keyword.setText('Self_Registration_Page|txt_firstName', value1, function () {
                callback();
            })
        })
    });

    Given(/^User clicks on Cancel button in Registration page$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|btn_cancel', function () {
            keyword.performclick('Self_Registration_Page|btn_cancel', function () {
                done();
            })
        })
    });


    Given(/^User enters Email Address as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_emailAddress', function () {
            keyword.setText('Self_Registration_Page|txt_emailAddress', value1, function () {
                callback();
            })
        })
    });

    Given(/^User enters Re-type Email Address as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_retypeEmailAddress', function () {
            keyword.setText('Self_Registration_Page|txt_retypeEmailAddress', value1, function () {
                callback();
            })
        })
    });


    Given(/^User enters Password as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_password', function () {
            keyword.setText('Self_Registration_Page|txt_password', value1, function () {
                callback();
            })
        })
    });

    Given(/^User enters Re-type Password as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_retypePassword', function () {
            keyword.setText('Self_Registration_Page|txt_retypePassword', value1, function () {
                callback();
            })
        })
    });


    Given(/^User enters Day as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_day', function () {
            keyword.setText('Self_Registration_Page|txt_day', value1, function () {
                callback();
            })
        })
    });


    Given(/^User enters Month as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_month', function () {
            keyword.setText('Self_Registration_Page|txt_month', value1, function () {
                callback();
            })
        })
    });

    Given(/^User enters year as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|txt_year', function () {
            keyword.setText('Self_Registration_Page|txt_year', value1, function () {
                callback();
            })
        })
    });


    Given(/^User enters Gender as "([^"]*)"$/, function (value1, callback) {
        keyword.expectVisible('Self_Registration_Page|dropdown_gender', function () {
            keyword.selectByVisibleText('Self_Registration_Page|dropdown_gender', value1, function () {
                callback();
            })
        })
    });

    Given(/^User see First Name text box should show red color in bottom$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|XXXX', function () {
            done();
        })
    });


    Given(/^User see Last Name text box should show red color in bottom$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|XXX', function () {
            done();
        })
    });


    Given(/^User should see proper error message for unmatched email address$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|XXXX', function () {
            done();
        })
    });

    Given(/^User should see proper error message for unmatched password$/, function (done) {
        keyword.expectVisible('Self_Registration_Page|XXXX', function () {
            done();
        })
    });

    Given(/^User see HLI EMail id for help$/, function (callback) {
        keyword.expectVisible('Self_Registration_Page|email_HLI', function () {
            callback();
        })
    });
    Given(/^User see HLI phone number for help$/, function (callback) {
        keyword.getTextOfElement('Self_Registration_Page|phone_HLI', function (headerText) {
            expect(headerText).to.equal("Call Us? UK: 0330 102 8392* or IRE : 1890 400700*");
            callback();
        })
    });
    Given(/^User see availability of helplines of HLI$/, function (callback) {
        keyword.getTextOfElement('Self_Registration_Page|help_info', function (headerText) {
            expect(headerText).to.equal("* Lines are open 9.00am to 5.00pm, Monday to Friday except bank holidays.\n" +
                "Costs to this number can vary in accordance with your carrier; with calls from mobiles possibly costing more.");
            callback();
        })
    });
    Given(/^User see Company Name as mandatory field$/, function (callback) {
        keyword.getCssAttributeValue('Self_Registration_Page|txt_CompanyKeyword', "border-bottom-color", function (value) {
            expect(value).to.equal("rgba(255, 221, 172, 1)");
            callback();
        })
    });
});

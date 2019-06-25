var {defineSupportCode} = require("cucumber");

defineSupportCode(function ({Given, When, Then}) {
    Given(/^User should see a Feedback button$/, function (done) {
        keyword.expectVisible('Login_Page|iframe_feedback', function () {
            done();
        });
    });
    When(/^User clicks on Feedback button$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Login_Page|iframe_feedback', function () {
                keyword.performclick('Login_Page|iframe_feedback', function () {
                    done();
                });
            });
        });
    });
    Then(/^System should create a pop-up with Feedback options$/, function (done) {
        keyword.customisedSleep(5000, function () {
            browser.switchTo().frame(3);
            keyword.expectVisible('Usabilla_Page|lbl_PoweredByUsabela', function () {
                keyword.expectVisible('Usabilla_Page|tab_SpeceficFeedback', function () {
                    keyword.expectVisible('Usabilla_Page|tab_GenericFeedback', function () {
                        keyword.expectVisible('Usabilla_Page|tab_HelpAndSupport', function () {
                            done();
                        });
                    });
                });
            });
        });
    });
    Then(/^Feedback options include General Feedback$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|lbl_PoweredByUsabela', function () {
                keyword.expectVisible('Usabilla_Page|tab_GenericFeedback', function () {
                    done();
                });
            });
        });
    });
    Then(/^Feedback options include Specific Feedback$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|lbl_PoweredByUsabela', function () {
                keyword.expectVisible('Usabilla_Page|tab_SpeceficFeedback', function () {
                    done();
                });
            });
        });
    });
    Then(/^Feedback options include link to contact Help & Contacts page$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|tab_HelpAndSupport', function () {
                keyword.performclick('Usabilla_Page|tab_HelpAndSupport', function () {
                    done();
                });
            });
        });
    });
    Then(/^User clicks on Generic Feedback$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|tab_GenericFeedback', function () {
                keyword.performclick('Usabilla_Page|tab_GenericFeedback', function () {
                    browser.switchTo().frame(3);
                    keyword.expectVisible('Usabilla_Page|txt_ThankYouOnGenFeedback', function () {
                        done();
                    });
                });
            });
        });
    });
    Then(/^User fills all necessary feedback details$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.performclick('Usabilla_Page|img_LoveOnGenFeedback', function () {
                keyword.selectByVisibleText('Usabilla_Page|drp_SelectSubOnGenFeedback', HLIData.Usabilla_FeedbackData.GenFeedcack.SelectSubOnGenFeedback, function () {
                    keyword.setText('Usabilla_Page|input_DisstasfactionOnGenFeedback', HLIData.Usabilla_FeedbackData.GenFeedcack.DisstasfactionOnGenFeedback, function () {
                        keyword.setText('Usabilla_Page|input_emailOnGenFeedback', HLIData.Usabilla_FeedbackData.GenFeedcack.emailOnGenFeedback, function () {
                            keyword.scrollToElementByLocatorIntoView('Usabilla_Page|btn_Submit', function () {
                                done();
                            });
                        });
                    });
                });
            });
        });
    });
    Then(/^User clicks on submit button of feedback form$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.performclick('Usabilla_Page|btn_Submit', function () {
                keyword.expectVisible('Usabilla_Page|txt_GotFeedBackSuccessFrame', function () {
                    done();
                });
            });
        });
    });
    Then(/^User should see successful feedback submition message$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|txt_GotFeedBackSuccessFrame', function () {
                keyword.expectVisible('Usabilla_Page|txt_ThankYouSuccessFrame', function () {
                    done();
                });
            });
        });
    });
    Then(/^User Should see the Usabella Genric Feedback form$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|txt_ThankYouOnGenFeedback', function () {
                done();
            });
        });
    });
    Then(/^User clicks on Specific Feedback$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|tab_SpeceficFeedback', function () {
                keyword.performclick('Usabilla_Page|tab_SpeceficFeedback', function () {
                    done();
                });
            });
        });
    });
    Then(/^User select area of page for which he wants to give feedback$/, function (done) {
        keyword.customisedSleep(5000, function () {
            browser.actions().mouseMove({x: 0, y: 100}).doubleClick().perform();
            keyword.customisedSleep(5000, function () {
                done();

            });
        });
    });
    Then(/^User Should see the Usabella Specific Feedback form$/, function (done) {
        keyword.customisedSleep(5000, function () {
            browser.switchTo().frame(3);
            keyword.expectVisible('Usabilla_Page|txt_ThankYouOnGenFeedback', function () {
                done();
            });
        });
    });
    Then(/^User should close Feddback form$/, function (done) {
        keyword.customisedSleep(5000, function () {
            keyword.expectVisible('Usabilla_Page|btn_CloseUsabilla', function () {
                keyword.performclick('Usabilla_Page|btn_CloseUsabilla', function () {
                done();
            });
            });
        });
    });
});

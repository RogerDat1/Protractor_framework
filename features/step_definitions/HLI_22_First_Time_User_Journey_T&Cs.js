/**
 * Created by amod-mahajan on 11/14/2017.
 */
let webObjects = require('./../../utilities/webObjectHandler.js');

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User should see Terms & Conditions \(T&C\) page of HLI as first\-time user$/, function (callback) {
        keyword.waitTillTitleOfPageMacthesWithExpected('Terms of Use', function () {
            keyword.getAndVerifyPageTitle('Terms of Use', function () {
                callback();
            })
        })

    }),
        Given(/^T&C page includes a page header$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|lbl_termsOfUse', function () {
                callback();
            })
        }),
        Given(/^T&C page shows Full policy$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|text_TermsParagraphs', function () {
                webObjects.getWebElements('Terms_And_Condition|text_TermsParagraphs', function (webObjs) {
                    var counter = 0;
                    webObjs.forEach(function (ele) {
                        ele.getText().then(function (text) {
                            expect(text).to.not.equal("");
                            counter++;
                            if (counter === webObjs.length) {
                                callback();
                            }
                        });

                    })

                });
            });
        }),
        Given(/^T&C page includes a checkbox to accept the T&C$/, function (callback) {
            browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
            keyword.expectPresence('Terms_And_Condition|cb_TickToAcceptTheTermsOfUse', function () {
                callback();
            })
        }),
        Given(/^T&C page includes a button to Agree to accepted T&C$/, function (callback) {
            keyword.expectPresence('Terms_And_Condition|btn_Agree', function () {
                callback();
            })
        }),
        Given(/^T&C page includes an option to Disagree to T&C$/, function (callback) {
            keyword.expectPresence('Terms_And_Condition|btn_Disagree', function () {
                callback();
            })
        }),
        Given(/^User does not check in Accept T&C checkbox$/, function (callback) {
            keyword.verifyCheckboxSelectionState('Terms_And_Condition|cb_TickToAcceptTheTermsOfUse', function (state) {
                expect(state, 'Agree checkbox is selected.').to.equal(false);
                callback();
            })
        }),
        Given(/^Agree button should be in disabled state by default$/, function (callback) {
            keyword.getAttribute('Terms_And_Condition|btn_Agree', 'class', function (attributeValue) {
                expect(attributeValue, "Agree button is not disable.").to.have.string("disabled");
                callback();
            })
        }),
        Given(/^User should receive tool tip on clicking of disabled Agree button$/, function (callback) {
            keyword.performclick('Terms_And_Condition|btn_Agree', function () {
                keyword.expectVisible('Terms_And_Condition|lbl_AgreeTooltip', function () {
                    callback();
                })

            })
        }),
        Given(/^Disagree CTA link should be active by default$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|btn_Disagree', function () {
                keyword.verifyIfElementIsEnable('Terms_And_Condition|btn_Disagree', function (status) {
                    expect(status, 'Disagree button is not enabled.').to.equal(true);
                    callback();
                })
            })
        }),
        Given(/^User checks in Accept T&C checkbox$/, function (callback) {
            browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
            keyword.expectPresence('Terms_And_Condition|cb_TickToAcceptTheTermsOfUse', function () {
                keyword.performclick('Terms_And_Condition|cb_TickToAcceptTheTermsOfUse', function () {
                    keyword.customisedSleep(3000, function () {
                        callback();
                    })

                })
            })
        }),
        Given(/^Agree button should change to enabled state$/, function (callback) {
            keyword.verifyIfElementIsEnable('Terms_And_Condition|btn_Agree', function (state) {
                expect(state, 'Agree checkbox is not selected.').to.equal(true);
                callback();
            })
        }),
        Given(/^User clicks on Agree button to continue welcome journey$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|btn_Agree', function () {
                keyword.performclick('Terms_And_Condition|btn_Agree', function () {
                    callback();
                })
            })
        }),
        Given(/^email message to welcome user in HLI should be triggered$/, function (callback) {
            callback();
        }),
        Given(/^User clicks on Disagree to deny T&C$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|btn_Disagree', function () {
                keyword.performclick('Terms_And_Condition|btn_Disagree', function () {
                    callback();
                })
            })
        }),
        Given(/^System should launch browser modal with copy$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|modalDialog_DisagreeModalWIndow', function () {
                callback();
            })
        }),
        Given(/^modal should include dismiss button to close modal$/, function (callback) {
            keyword.expectVisible('Terms_And_Condition|btn_dismiss', function () {
                callback();
            })
        });
    Given(/^Dismiss button should be enabled$/, function (callback) {
        keyword.expectVisible('Terms_And_Condition|btn_dismiss', function () {
            keyword.verifyIfElementIsEnable('Terms_And_Condition|btn_dismiss', function (status) {
                expect(status, 'Disagree button is not enabled.').to.equal(true);
                callback();
            })
        })
    });
    Given(/^User clicks on Dismiss button$/, function (callback) {
        keyword.expectVisible('Terms_And_Condition|btn_dismiss', function () {
            keyword.performclick('Terms_And_Condition|btn_dismiss', function () {
                callback();
            })
        })
    });
    Given(/^modal should be closed$/, function (callback) {
        keyword.expectNotVisible('Terms_And_Condition|modalDialog_DisagreeModalWIndow', function () {
            callback();
        })
    })
});

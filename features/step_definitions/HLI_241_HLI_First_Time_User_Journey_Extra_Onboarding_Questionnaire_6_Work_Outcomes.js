/**
 * Created by amod-mahajan on 1/11/2018.
 */

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User navigates to "Work outcomes" screen$/, function (done) {
        keyword.expectVisible('Work_Outcomes|header_workOutcomes', function () {
            done();
        })
    });

    Given(/^User should see header as Work outcomes$/, function (done) {
        keyword.expectVisible('Work_Outcomes|header_workOutcomes', function () {
            done();
        })
    });

    Given(/^User should see a close icon on header$/, function (done) {
        keyword.expectVisible('Work_Outcomes|btn_close', function () {
            done();
        })
    });

    Given(/^It should be sixth screen of optional on boarding survey$/, function (done) {
        keyword.expectVisible('Work_Outcomes|lbl_screenNumber', function () {
            done();
        });

        Given(/^User description of Work outcomes screen$/, function (done) {
            keyword.expectVisible('Work_Outcomes|lbl_screenNumber', function () {
                done();
            })
        });

        Given(/^user see first question as "([^"]*)"$/, function (value1, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_ifWorkGetsDifficultMyColleaguesHelpMe', value1, function () {
                callback();
            })
        });


        Given(/^user see second question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iAmClearWhatIsExpectedAtWork', value, function () {
                callback();
            })
        });

        Given(/^user see third question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iAmGivingSupportiveFeedbackOnTheWorkIDo', value, function () {
                callback();
            })
        });

        Given(/user see fourth question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iGetHelpAndSupportINeedFomMyColleagues', value, function () {
                callback();
            })
        });

        Given(/^user see fifth question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iKnowHowToGoAboutGettingMyJobDone', value, function () {
                callback();
            })
        });


        Given(/^user see sixth question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iAmClearAboutMyDutiesAndResponsiblities', value, function () {
                callback();
            })
        });


        Given(/^user see seventh question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iUnderstandHowMyWorkFitsInTheOverallAimOfTheOrganisation', value, function () {
                callback();
            })
        });

        Given(/^user see eight question as "([^"]*)"$/, function (value, callback) {
            keyword.getTextAndVerify('Work_Outcomes|txt_iAmClearAboutTheGoalsAndObjectivesOfMyDepartment', value, function () {
                callback();
            })
        });

        Given(/^User clicks on 'Next' button in Work outcomes screen$/, function (done) {
            keyword.expectVisible('Work_Outcomes|btn_next', function () {
                done();
            })
        });

        Given(/^User clicks 'Previous' button in Work outcomes screen$/, function (done) {
            keyword.expectVisible('Work_Outcomes|btn_previous', function () {
                done();
            })
        });

        Given(/^User should navigate to previous survey screen$/, function (done) {
            keyword.expectVisible('Work_Outcomes|btn_previous', function () {
                done();
            })
        });

        Given(/^User should see selected answers for questions at Work outcomes screen$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.expectVisible('', function () {
                    keyword.expectVisible('', function () {
                        done();
                    })
                })
            })
        });

        Given(/^User should see default value  as No for all questions$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.expectVisible('', function () {
                    keyword.expectVisible('', function () {
                        keyword.expectVisible('', function () {
                            keyword.expectVisible('', function () {
                                keyword.expectVisible('', function () {
                                    keyword.expectVisible('', function () {
                                        keyword.expectVisible('', function () {
                                            done();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        });


        Given(/^User clicks on toggles for some question at Work outcomes screen$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.performclick('', function () {
                    keyword.expectVisible('', function () {
                        keyword.performclick('', function () {
                            keyword.expectVisible('', function () {
                                keyword.performclick('', function () {
                                    done();
                                })
                            })
                        })
                    })
                })
            })
        });

    });
});

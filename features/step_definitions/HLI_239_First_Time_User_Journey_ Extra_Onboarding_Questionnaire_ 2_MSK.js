/**
 * Created by amod-mahajan on 1/17/2018.
 */

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User see "([^"]*)" MSK question as expected$/, function (QuestionNumber, callback) {
        var objQuestion = HLIData.Screen_Musculosketal[QuestionNumber];
        var question_locator = "";
        switch (QuestionNumber) {
            case 'Question1':
                question_locator = "lbl_FrequencyOfMusclesBonePain";
                break;
            case 'Question2':
                question_locator = "lbl_HowOftenDoYouTakeMedication";
                break;
            case 'Question3':
                question_locator = "lbl_MSKProblemsPreventMeFromLeadingANormalActiveLiveOutsideWork";
                break;
            case 'Question4':
                question_locator = "lbl_DoYouReceiveSupportAtWork";
                break;
            case 'Question5':
                question_locator = "lbl_IHaveUndertakenAppropriateTrainingToDealWithMSKAtWork";
                break;
            case 'Question6':
                question_locator = "lbl_HowLongDoYouSpendSittingDownInATypicalWorkingDay";
                break;
            case 'Question7':
                question_locator = "lbl_IAmAbleToHaveRegularBreaksAwayFromMyDesk";
                break;

        }

        keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|' + question_locator, function () {
            keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IHaveUndertakenAppropriateTrainingToDealWithMSKAtWork', HLIData.Screen_Musculosketal[QuestionNumber].label, function () {
                callback();
            })
        })
    });


    Given(/^User see default answer for "([^"]*)" as expected$/, function (QuestionNumber, callback) {
        switch (QuestionNumber) {
            case "Question1": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_FrequencyOfMusclesBonePain', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_FrequencyOfMusclesBonePain', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question2": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowOftenDoYouTakeMedication', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowOftenDoYouTakeMedication', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question3": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_MSKProblemsPreventMeFromLeadingANormalActiveLiveOutsideWork', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_MSKProblemsPreventMeFromLeadingANormalActiveLiveOutsideWork', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question4": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_DoYouReceiveSupportAtWork', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_DoYouReceiveSupportAtWork', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question5": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IHaveUndertakenAppropriateTrainingToDealWithMSKAtWork', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IHaveUndertakenAppropriateTrainingToDealWithMSKAtWork', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question6": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowLongDoYouSpendSittingDownInATypicalWorkingDay', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowLongDoYouSpendSittingDownInATypicalWorkingDay', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question7": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IAmAbleToHaveRegularBreaksAwayFromMyDesk', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IAmAbleToHaveRegularBreaksAwayFromMyDesk', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            default: {
                console.log("Invalid question number");
                callback();
            }
        }

    });


    Given(/^User answers for "([^"]*)"$/, function (QuestionNumber, callback) {
        switch (QuestionNumber) {
            case "Question1": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_FrequencyOfMusclesBonePain', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_FrequencyOfMusclesBonePain', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question2": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowOftenDoYouTakeMedication', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowOftenDoYouTakeMedication', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question3": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_MSKProblemsPreventMeFromLeadingANormalActiveLiveOutsideWork', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_MSKProblemsPreventMeFromLeadingANormalActiveLiveOutsideWork', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question4": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_DoYouReceiveSupportAtWork', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_DoYouReceiveSupportAtWork', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question5": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IHaveUndertakenAppropriateTrainingToDealWithMSKAtWork', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IHaveUndertakenAppropriateTrainingToDealWithMSKAtWork', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question6": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowLongDoYouSpendSittingDownInATypicalWorkingDay', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_HowLongDoYouSpendSittingDownInATypicalWorkingDay', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            case "Question7": {
                keyword.expectVisible('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IAmAbleToHaveRegularBreaksAwayFromMyDesk', function () {
                    keyword.getTextAndVerify('Optional_Onboarding_Screen_MUSCULOSKELETAL|lbl_IAmAbleToHaveRegularBreaksAwayFromMyDesk', HLIData.Screen_Musculosketal[QuestionNumber].defaultAnswer, function () {
                        callback();
                    })
                })
            }
            default: {
                console.log("Invalid question number");
                callback();
            }
        }
    });
});

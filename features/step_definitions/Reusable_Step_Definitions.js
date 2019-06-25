/**
 * Created by amod-mahajan on 1/18/2018.
 */

var {defineSupportCode} = require("cucumber");
var webelements = require('./../../testObjects/appWebObjects');
var webObjects = require('./../../utilities/webObjectHandler.js');


defineSupportCode(function ({Given}) {

    Given(/^User navigates to "([^"]*)" screen of Onboarding journey$/, function (screenName, callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            browser.sleep(3000)
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Data', function () {
                            keyword.performclick('health_Summary|lnk_Data', function () {
                                keyword.expectVisible('health_Summary|btn_RetakeHealthAgeQuiz', function () {
                                    keyword.performclick('health_Summary|btn_RetakeHealthAgeQuiz', function () {
                                        keyword.expectVisible('health_Summary|header_OnboardingScreen', function () {
                                            webObjects.getWebElement('health_Summary|header_OnboardingScreen', function (webObj) {
                                                webObj.getText().then(function (text) {

                                                    if (text.toString().trim() === screenName) {
                                                        callback();
                                                    }

                                                    else {
                                                        if (text.toString().trim() === 'PHYSICAL PRIORITIES' || text.toString().trim() === 'OVERALL HEALTH') {
                                                            goToNext(screenName, callback);


                                                        }
                                                    }
                                                });
                                            });

                                        });
                                    });
                                });
                            });

                        });
                    });

                });
            });

        });
    });

    Given(/^User see "([^"]*)" header as expected$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|header_Screen', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|header_Screen', function (screenName) {
                expect(screenName.toString().trim()).to.equal(HLIData['Screen_' + PageName].screen_Design.screenName);
                callback();
            })
        })
    });

    Given(/^User see "([^"]*)" info as expected of "([^"]*)" screen$/, function (ElementName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|info_' + ElementName, function () {
            keyword.getTextOfElement('Screen_' + PageName + '|info_' + ElementName, function (screenName) {
                expect(screenName.toString().trim()).to.equal(HLIData['Screen_' + PageName]['question_' + ElementName].info);
                callback();
            });
        });

    });

    Given(/^User see "([^"]*)" description as expected of "([^"]*)" screen$/, function (ElementName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|info_' + ElementName, function () {
            keyword.getTextOfElement('Screen_' + PageName + '|info_' + ElementName, function (screenName) {
                expect(screenName.toString().trim()).to.equal(HLIData['Screen_' + PageName]['info_' + ElementName].label);
                callback();
            });
        });

    });


    Given(/^User see "([^"]*)" description as expected$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|description_Screen', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|description_Screen', function (screenName) {
                expect(screenName.toString().trim()).to.equal(HLIData['Screen_' + PageName].screen_Design.screenDescription);
                callback();
            })
        })
    });


    Given(/^User see "([^"]*)" screen number as expected$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|lbl_ScreenNumber', function () {
            keyword.getTextOfElement('Screen_' + PageName + '|lbl_ScreenNumber', function (screenName) {
                expect(screenName.toString().trim()).to.equal(HLIData['Screen_' + PageName].screen_Design.screenNumber);
                callback();
            })
        })
    });

    Given(/^User see "([^"]*)" close button$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Close', function () {
            callback();
        })
    });

    Given(/^User see "([^"]*)" Save & Continue button$/, function (PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|btn_SaveAndContinue', function () {
            keyword.customisedSleep(5000, function () {
                callback();
            })
        })
    });

    Given(/^User see "([^"]*)" Next button$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Next', function () {
            callback();
        })
    });

    Given(/^User see "([^"]*)" Previous button$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Previous', function () {
            callback();
        })
    });

    Given(/^User see "([^"]*)" Connect an App\/Tracker button$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_ConnectTracker', function () {
            callback();
        })
    });


    Given(/^User see question "([^"]*)" of "([^"]*)"$/, function (Question, PageName, callback) {
        keyword.scrollToElementByLocatorIntoView('Screen_' + PageName + '|question_' + Question, function () {
            keyword.expectVisible('Screen_' + PageName + '|question_' + Question, function () {
                keyword.getTextOfElement('Screen_' + PageName + '|question_' + Question, function (QuestionName) {
                    expect(QuestionName).to.equal(HLIData['Screen_' + PageName]['question_' + Question].label);
                    callback();
                })
            })
        });
    });


    Given(/^User see answer input box for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + Question, function () {
            callback();
        })
    });

    Given(/^User see answer dropdown box for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|dropdown_' + Question, function () {
            callback();
        })
    });

    Given(/^User see answer checkbox for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        console.log('Screen_' + PageName + '|checkbox_' + Question);
        keyword.expectPresence('Screen_' + PageName + '|checkbox_' + Question, function () {
            callback();
        })
    });

    Given(/^User see answer toggle for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|toggle_' + Question, function () {
            callback();
        })
    });

    Given(/^User see available options "([^"]*)" in "([^"]*)" for question "([^"]*)" of "([^"]*)"$/, function (availableOptions, mainOption, Question, PageName, callback) {
        getOptionValues(availableOptions, mainOption, PageName, function (values) {
            console.log(JSON.stringify(values) === JSON.stringify(HLIData[PageName][Question].options));
            callback();
        })
    });


    Given(/^User see available options in dropdown for question "([^"]*)" of "([^"]*)"$/, function (Question, PageName, callback) {
        getOptionValues('dropdownOptions_' + Question, 'dropdown_' + Question, 'Screen_' + PageName, function (values) {
            expect(JSON.stringify(values)).to.be.equal(JSON.stringify(HLIData['Screen_' + PageName]['question_' + Question].options));
            keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                callback();
            })
        })
    });

    Given(/^User toggles on option "([^"]*)" for question "([^"]*)" of "([^"]*)"$/, function (Options, Question, PageName, callback) {
        var valueToBeSelected = HLIData[PageName][Question].userAnswer;
        console.log(valueToBeSelected);
        keyword.expectVisible(PageName + '|' + Options, function () {
            keyword.performclick(PageName + '|' + Options, function () {
                callback();
            })
        })

    });


    Given(/^User toggle for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            if (!(answerToBeGiven.trim() === text.trim())) {
                keyword.performclick('Screen_' + PageName + "|toggle_" + Question, function () {
                    callback();
                })
            }
            else
                callback();
        })
    });

    Given(/^User toggle Yes for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = "Yes";
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            if (!(answerToBeGiven.trim() === text.toString().trim())) {
                keyword.performclick('Screen_' + PageName + "|toggle_" + Question, function () {
                    callback();
                })
            }
            else
                callback();
        })
    });

    Given(/^User toggle No for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = "No";
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            if (answerToBeGiven.toString().trim() === text.toString().trim()) {
                callback();
            }
            else
                keyword.clickByJavascript('Screen_' + PageName + "|toggleNo_" + Question, function () {
                    keyword.customisedSleep(3000, function () {
                        callback();
                    })

                })
        })
    });

    Given(/^User see toggled answer for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            expect(text.trim()).to.be.equal(answerToBeGiven.trim());
            callback();
        })
    });

    Given(/^User see toggled answer as Yes for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = "Yes";
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            expect(text.trim()).to.be.equal(answerToBeGiven.trim());
            callback();
        })
    });

    Given(/^User see default toggle answer for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var defaultSelectedAnswer = HLIData['Screen_' + PageName]['question_' + Question].defaultAnswer;
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            expect(text.trim()).to.be.equal(defaultSelectedAnswer.trim());
            callback();
        })
    });


    Given(/^User selects for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.selectValueFromClickableListbox('Screen_' + PageName + '|answer_' + Question, 'Screen_' + PageName + '|options_' + Question, answerToBeGiven, function () {
            browser.sleep(3000);
            callback();
        })
    });

    Given(/^User see selected answer in dropdown for question "([^"]*)" on "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.getText('Screen_' + PageName + "|answer_" + Question, function (text) {
            expect(text.trim()).to.be.equal(answerToBeGiven.trim());
            callback();
        })
    });

    Given(/^User see default selected answer in dropdown for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var defaultAnswer = HLIData['Screen_' + PageName]['question_' + Question].defaultAnswer;
        keyword.getText('Screen_' + PageName + "|answer_" + Question, function (text) {
            expect(text.trim()).to.be.equal(defaultAnswer.trim());
            callback();
        })
    });


    Given(/^User clicks on Previous button of "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Previous', function () {
            keyword.performclick('Screen_' + PageName + '|btn_Previous', function () {
                keyword.customisedSleep(5000, function () {
                    callback();
                })

            })
        })
    });

    Given(/^User clicks on Next button of "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Next', function () {
            keyword.performclick('Screen_' + PageName + '|btn_Next', function () {
                keyword.customisedSleep(5000, function () {
                    callback();
                })
            })
        })
    });

    Given(/^User clicks on Close button of "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Close', function () {
            keyword.performclick('Screen_' + PageName + '|btn_Close', function () {
                callback();
            })
        })
    });

    Given(/^User clicks on Save button of "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|button_Save', function () {
            keyword.performclick('Screen_' + PageName + '|button_Save', function () {
                keyword.customisedSleep(15000, function () {
                    callback();
                })
            })
        })
    });

    Given(/^User clicks on Save & Continue button of "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_SaveAndContinue', function () {
            keyword.performclick('Screen_' + PageName + '|btn_SaveAndContinue', function () {
                callback();
            })
        })
    });

    Given(/^User should ne navigated to Dashboard page$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                callback();
            })
        })
    });

    Given(/^User should see screen with header "([^"]*)"$/, function (Header, callback) {
        keyword.expectVisible('Screen_FinancialPressures|header_Screen', function () {
            keyword.getTextOfElement('Screen_FinancialPressures|header_Screen', function (screenName) {
                expect(screenName.toString().trim()).to.equal(Header.trim());
                callback();
            })
        })
    });


    Given(/^Popup window should be closed$/, function (callback) {
        keyword.expectVisible('health_Summary|btn_onboardingQuiz', function () {
            callback();
        });
    });

    Given(/^User types value for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answer = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.expectVisible('Screen_' + PageName + "|textbox_" + Question, function () {
            keyword.setText('Screen_' + PageName + "|textbox_" + Question, answer, function () {
                callback();
            })
        })
    });

    Given(/^User types value "([^"]*)" for field "([^"]*)" of "([^"]*)" screen$/, function (value, Question, PageName, callback) {
        var answer = HLIData['Screen_' + PageName]['question_' + Question][value];
        keyword.expectVisible('Screen_' + PageName + "|txtbox_" + Question, function () {
            keyword.setText('Screen_' + PageName + "|txtbox_" + Question, answer, function () {
                callback();
            })
        })
    });

    Given(/^User verify typed value for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answer = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.expectVisible('Screen_' + PageName + "|textbox_" + Question, function () {
            keyword.getAttribute('Screen_' + PageName + "|textbox_" + Question, "value", function (text) {
                expect(text.toString().trim()).to.equal(answer.toString().trim());
                callback();
            })
        })
    });

    Given(/^User see default value for input field for "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answer = HLIData['Screen_' + PageName]['question_' + Question].defaultAnswer;
        keyword.expectVisible('Screen_' + PageName + "|textbox_" + Question, function () {
            keyword.getTextOfElement('Screen_' + PageName + "|textbox_" + Question, function (text) {
                expect(text.toString().trim()).to.equal(answer.toString().trim());
                callback();
            })
        })
    });

    Given(/^User should see no value for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answer = "";
        keyword.expectVisible('Screen_' + PageName + "|txtBox_" + Question, function () {
            keyword.getAttribute('Screen_' + PageName + "|txtBox_" + Question, "value", function (text) {
                expect(text.toString().trim()).to.equal(answer.toString().trim());
                callback();
            })
        })
    });

    Given(/^User should see value from app for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answer = "";
        keyword.expectVisible('Screen_' + PageName + "|txtBox_" + Question, function () {
            keyword.getAttribute('Screen_' + PageName + "|txtBox_" + Question, "value", function (text) {
                expect(text.toString().trim()).to.not.equal(null);
                ;
                callback();
            })
        })
    });

    Given(/^User selects for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        console.log(answerToBeGiven)
        keyword.selectValueFromClickableListbox('Screen_' + PageName + '|dropdown_' + Question, 'Screen_' + PageName + '|dropdownOptions_' + Question, answerToBeGiven, function () {
            browser.sleep(3000);
            callback();
        })
    });

    Given(/^User clicks on checkbox for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = "true";
        keyword.verifyCheckboxSelectionState('Screen_' + PageName + '|checkbox_' + Question, function (flag) {
            if (answerToBeGiven.toString().trim() === flag.toString().trim()) {
                callback();
            }
            else {
                keyword.expectPresence('Screen_' + PageName + '|checkbox_' + Question, function () {
                    keyword.checkPresenceAndClick('Screen_' + PageName + '|checkbox_' + Question, function () {
                        callback();
                    })

                });

            }
        })

    });


    Given(/^User clicks on button for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|button_' + Question, function () {
            keyword.performclick('Screen_' + PageName + '|button_' + Question, function () {
                callback();
            })
        })

    });

    Given(/^User uncheck checkbox for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.verifyCheckboxSelectionState('Screen_' + PageName + '|checkbox_' + Question, function (flag) {
            if (true.toString().trim() === flag.toString().trim()) {
                keyword.expectPresence('Screen_' + PageName + '|checkbox_' + Question, function () {
                    keyword.checkPresenceAndClick('Screen_' + PageName + '|checkbox_' + Question, function () {
                        callback();
                    })

                });
            }
            else {

                callback();
            }
        })

    });


    Given(/^User verify status of checkbox for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        console.log(answerToBeGiven);
        keyword.verifyCheckboxSelectionState('Screen_' + PageName + '|checkbox_' + Question, function (flag) {
            expect(flag.toString().trim()).to.equal(answerToBeGiven.toString().trim());
            callback();
        })

    });

    Given(/^User see unchecked checkbox for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.verifyCheckboxSelectionState('Screen_' + PageName + '|checkbox_' + Question, function (flag) {
            expect(flag.toString().trim()).to.equal("false");
            callback();
        })

    });

    Given(/^User verify checked checkbox for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.verifyCheckboxSelectionState('Screen_' + PageName + '|checkbox_' + Question, function (flag) {
            expect(flag.toString().trim()).to.equal("true");
            callback();
        })

    });

    Given(/^User verify selected value for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        console.log(answerToBeGiven)
        keyword.getText('Screen_' + PageName + '|dropdown_' + Question, function (text) {
            expect(text.toString().trim()).to.equal(answerToBeGiven.toString().trim());
            callback();

        })
    });

    Given(/^User see unit for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|unitFor_' + Question, function () {
            callback();
        })
    });


    Given(/^User should see Next button of "([^"]*)" screen as "([^"]*)"$/, function (PageName, status, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Next', function () {
            keyword.verifyIfElementIsEnable('Screen_' + PageName + '|btn_Next', function (flag) {
                if (status === 'disabled') {
                    expect(flag).to.equals("false");
                    callback();
                }
                else {
                    expect(flag).to.equals("true");
                    callback();
                }
            })
        })
    });


    Given(/^User clicks on "([^"]*)" of "([^"]*)" screen$/, function (ElementName, PageName, callback) {
        console.log('Screen_' + PageName + '|' + ElementName)
        keyword.expectVisible('Screen_' + PageName + '|' + ElementName, function () {
            keyword.performclick('Screen_' + PageName + '|' + ElementName, function () {
                //callback();
            })

        });
    });


    Given(/^Text box bottom color for field "([^"]*)" of "([^"]*)" screen should not be red$/, function (ElementName, PageName, callback) {
        keyword.getCssAttributeValue('Screen_' + PageName + '|textbox' + ElementName, 'border-bottom-color', function (val) {
            expect(val).to.not.equal('rgba(239, 78, 69, 1)');
            callback();
        })
    });

    Given(/^Field "([^"]*)" at "([^"]*)" screen should be underlined in Yellow color representing mandatory field/, function (ElementName, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border-bottom-color', function (val) {
                expect(val.toString().trim().includes('255, 221, 172')).to.equal(true);
                callback();
            })
        })

    });

    Given(/^Field "([^"]*)" at "([^"]*)" screen should be grey in color represnting non editable data$/, function (ElementName, PageName, callback) {
        keyword.expectPresence(PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue(PageName + '|' + ElementName, 'color', function (val) {
                console.log(val)
                expect(val.toString().trim().includes('rgba(179, 179, 179, 1)')).to.equal(true);
                callback();
            })
        })
    });

    Given(/^Field checkbox "([^"]*)" at "([^"]*)" screen should be underlined in Yellow color representing mandatory field/, function (ElementName, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border', function (val) {
                expect(val.toString().trim().includes('255, 221, 172')).to.equal(true);
                callback();
            })
        })

    });

    Given(/^Field checkbox "([^"]*)" at "([^"]*)" screen should be underlined in Blue color representing non mandatory field/, function (ElementName, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border', function (val) {
                expect(val.toString().trim().includes('0, 109, 158')).to.equal(true);
                callback();
            })
        })

    });

    Given(/^Field checkbox "([^"]*)" at "([^"]*)" screen should be underlined in Red color representing unchecked mandatory field/, function (ElementName, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border', function (val) {
                expect(val.toString().trim().includes('239, 78, 69')).to.equal(true);
                callback();
            })
        })

    });

    Given(/^Field checkbox "([^"]*)" at "([^"]*)" screen should be filed by blue color/, function (ElementName, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border', function (val) {
                expect(val.toString().trim().includes('0, 109, 158')).to.equal(true);
                callback();
            })
        })

    });

    Given(/^Field "([^"]*)" at "([^"]*)" screen should be underlined in Blue color representing valid value/, function (ElementName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border-bottom-color', function (val) {
                expect(val.toString().trim().includes('0, 109, 158')).to.equal(true);
                callback();
            })
        });
    });

    Given(/^Field "([^"]*)" at "([^"]*)" screen should be underlined in Red color representing invalid value/, function (ElementName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border-bottom-color', function (val) {
                expect(val.toString().trim().includes('239, 78, 69')).to.equal(true);
                callback();
            })
        })
    });

    Given(/^Field "([^"]*)" at "([^"]*)" screen should be underlined in Blue color representing non mandatory field/, function (ElementName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|' + ElementName, function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|' + ElementName, 'border-bottom-color', function (val) {
                expect(val.toString().trim().includes('0, 109, 158')).to.equal(true);
                callback();
            })
        })
    });

    Given(/^Text box bottom color for field "([^"]*)" of "([^"]*)" screen should be red$/, function (ElementName, PageName, callback) {
        keyword.getCssAttributeValue('Screen_' + PageName + '|textbox' + ElementName, 'border-bottom-color', function (val) {
            expect(val).to.be.equal('rgba(239, 78, 69, 1)');
            callback();
        })
    });

    Given(/^Text box bottom color should be red$/, function (callback) {
        keyword.getCssAttributeValue('Login_Page|input_Email', 'border-bottom-color', function (val) {
            expect(val).to.equal('rgba(239, 78, 69, 1)');
            callback();
        })
    });


    Given(/^Text box bottom color for field "([^"]*)" of "([^"]*)" screen should be blue \(Non\-mandatory field\)/, function (ElementName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + ElementName, 'border-bottom-color', function () {
            keyword.getCssAttributeValue('Screen_' + PageName + '|textbox_' + ElementName, 'border-bottom-color', function (val) {
                expect(val).to.equal('rgba(0, 109, 158, 1)');
                callback();
            })
        })

    });


    Given(/^User should not see question "([^"]*)" of "([^"]*)"$/, function (ElementName, PageName, callback) {
        keyword.customisedSleep(3000, function () {
            keyword.expectNotPresent('Screen_' + PageName + '|' + ElementName, function () {

                callback();


            });
        })

    });
    Given(/^User reloads the page$/, function (callback) {
        browser.refresh();
        callback();
    });

    Given(/^User should see question related to "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.scrollToElementByLocatorIntoView('Screen_' + PageName + '|question_' + Question, function () {
            keyword.expectVisible('Screen_' + PageName + '|question_' + Question, function () {
                keyword.getTextOfElement('Screen_' + PageName + '|question_' + Question, function (QuestionName) {
                    expect(QuestionName).to.equal(HLIData['Screen_' + PageName]['question_' + Question].label);
                    callback();
                })
            })
        });
    });


    Given(/^User should not see question related to "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {

        keyword.expectNotVisible('Screen_' + PageName + '|question_' + Question, function () {
            callback();
        })

    });

    Given(/^User should see a text box for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + Question, function () {
            callback();
        })
    });

    Given(/^User should see a checkbox for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|checkbox_' + Question, function () {
            callback();
        })
    });

    Given(/^User should see a button for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|button_' + Question, function () {
            callback();
        })
    });

    Given(/^User should see a slider for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|slider_' + Question, function () {
            callback();
        })
    });

    Given(/^User should see a drop down for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|dropdown_' + Question, function () {
            callback();
        })
    });
    Given(/^User should see available options in drop down for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        getOptionValues('dropdownOptions_' + Question, 'dropdown_' + Question, 'Screen_' + PageName, function (values) {
            console.log(JSON.stringify(values))
            expect(JSON.stringify(values) === JSON.stringify(HLIData['Screen_' + PageName]['question_' + Question].options)).to.equal(true);
            keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                callback();
            })

        })
    });


    Given(/^User should see available options in below drop down for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        getOptionValuesIfDropdownInLast('dropdownOptions_' + Question, 'dropdown_' + Question, 'Screen_' + PageName, function (values) {
            console.log(JSON.stringify(values))
            expect(JSON.stringify(values) === JSON.stringify(HLIData['Screen_' + PageName]['question_' + Question].options)).to.equal(true);
            keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                callback();
            })

        })
    });
    Given(/^User should see a toggle button for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|toggle_' + Question, function () {
            callback();
        })
    });
    Given(/^User should see a header for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|header_' + Question, function () {
            callback();
        })
    });
    Given(/^User selects a value from drop down for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.selectValueFromClickableListbox('Screen_' + PageName + '|dropdown_' + Question, 'Screen_' + PageName + '|dropdownOptions_' + Question, answerToBeGiven, function () {
            //keyword.customisedSleep(10000, function () {
            callback();
            //})

        })

    });

    Given(/^User selects a value from select drop down for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
        keyword.selectByVisibleText('Screen_' + PageName + '|dropdown_' + Question, answerToBeGiven, function () {
            browser.sleep(3000);
            callback();
        })
    });

    Given(/^User toggles on "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.performclick('Screen_' + PageName + '|toggle_' + Question, function () {
            callback();
        })
    });
    Given(/^User navigates to "([^"]*)" screen of Onboarding journey through health age$/, function (PageName, callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            browser.sleep(3000)
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Data', function () {
                            keyword.performclick('health_Summary|lnk_Data', function () {
                                keyword.expectVisible('health_Summary|btn_extraOnboardingQuiz', function () {
                                    keyword.performclick('health_Summary|btn_extraOnboardingQuiz', function () {
                                        keyword.expectVisible('health_Summary|edit_' + PageName, function () {
                                            keyword.performclick('health_Summary|edit_' + PageName, function () {
                                                callback();
                                            });
                                        });
                                    });
                                });
                            });

                        });
                    });

                });
            });

        });
    });
    Given(/^User clicks on slider value "([^"]*)" for question "([^"]*)" at "([^"]*)" screen$/, function (sliderValue, sliderQuestion, PageName, callback) {
        keyword.setAttribute('Screen_' + PageName + '|demo', function () {
            keyword.customisedSleep(2000000, function () {
                callback();
            })
        })
    });
    Given(/^User should see slider value "([^"]*)" for question "([^"]*)" at "([^"]*)" screen$/, function (sliderValue, sliderQuestion, PageName, callback) {
        keyword.expectPresence('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function () {
            keyword.getTextOfElement('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function (text) {
                var header = HLIData['Screen_' + PageName]['question_' + sliderValue].label;
                expect(text.toString().trim()).to.equal(header);
                callback();
            })
        })
    });


    Given(/^User should see$/, function (callback) {
        var req = "Fit";
        var number = HLIData.Screen_ActivityLevel.question_SelfReportFitness[req];
        console.log(number);
        keyword.getTextOfElement('Screen_ActivityLevel|sliderHeader_SelfReportFitness', function (text) {
            if (text.toString().trim() === req) {
                callback();
            }
            else {
                var number1 = HLIData.Screen_ActivityLevel.question_SelfReportFitness[text.toString().trim()];
                console.log(number1);
                if (number1 > number) {
                    keyword.performclick('Screen_ActivityLevel|demo', function () {
                        clickKeyboardLeft(req, callback);
                    })

                }
                else {
                    keyword.performclick('Screen_ActivityLevel|demo', function () {
                        clickKeyboardRight(req, callback);
                    })

                }
            }
        })

    });
    Given(/^User slides to select answer for question "([^"]*)" at "([^"]*)" screen$/, function (sliderQuestion, PageName, callback) {
        var req = HLIData['Screen_' + PageName]['question_' + sliderQuestion].userAnswer;
        var number = HLIData['Screen_' + PageName]['question_' + sliderQuestion][req];
        keyword.getTextOfElement('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function (text) {
            if (text.toString().trim() === req) {
                callback();
            }
            else {
                var number1 = HLIData['Screen_' + PageName]['question_' + sliderQuestion][text.toString().trim()];
                if (number1 > number) {
                    keyword.performclick('Screen_' + PageName + '|sliderPoint_' + sliderQuestion, function () {
                        clickKeyboardLeft(PageName, sliderQuestion, req, callback);
                    })

                }
                else {
                    keyword.performclick('Screen_' + PageName + '|sliderPoint_' + sliderQuestion, function () {
                        clickKeyboardRight(PageName, sliderQuestion, req, callback);
                    })

                }
            }
        })
    });

    Given(/^User slides to select "([^"]*)" for question "([^"]*)" at "([^"]*)" screen$/, function (answer, sliderQuestion, PageName, callback) {
        var req = answer;
        var number = HLIData['Screen_' + PageName]['question_' + sliderQuestion][req];
        keyword.getTextOfElement('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function (text) {
            if (text.toString().trim() === req) {
                callback();
            }
            else {
                var number1 = HLIData['Screen_' + PageName]['question_' + sliderQuestion][text.toString().trim()];
                if (number1 > number) {
                    keyword.performclick('Screen_' + PageName + '|sliderPoint_' + sliderQuestion, function () {
                        clickKeyboardLeft(PageName, sliderQuestion, req, callback);
                    })

                }
                else {
                    keyword.performclick('Screen_' + PageName + '|sliderPoint_' + sliderQuestion, function () {
                        clickKeyboardRight(PageName, sliderQuestion, req, callback);
                    })

                }
            }
        })
    });

    Given(/^User clears all existing selected options at "([^"]*)" screen$/, function (PageName, callback) {
        clearAllCheckBox(PageName, function () {
            keyword.customisedSleep(5000, function () {
                callback();
            })
        })
    });
    Given(/^User clicks on checkboxes for question "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        clickOnCheckbox(PageName, Question, function () {
            callback();
        })


    });

    Given(/^User should see selected answer on slider for "([^"]*)" at "([^"]*)" screen$/, function (sliderQuestion, PageName, callback) {
        var req = HLIData['Screen_' + PageName]['question_' + sliderQuestion].userAnswer;
        keyword.getTextOfElement('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function (text) {
            expect(text.toString().trim()).to.equal(req);
            callback();
        })
    });
    Given(/^User waits for "([^"]*)" seconds$/, function (seconds, callback) {
        keyword.customisedSleep(seconds, function () {
            callback();
        })
    });
    Given(/^User removes focus from textbox$/, function (callback) {
        keyword.performclick('Screen_HeartAndLungHealth|header_Screen', function () {
            callback();
        })
    });
    Given(/^User provides "([^"]*)" value for question "([^"]*)" at "([^"]*)" screen$/, function (valueType, Question, PageName, callback) {
        var value = HLIData['Screen_' + PageName]['question_' + Question][valueType];
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + Question, function () {
            keyword.setText('Screen_' + PageName + '|textbox_' + Question, value, function () {
                keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                    callback();
                })
            })
        })
    });


    Given(/^User navigates to "([^"]*)" screen of "([^"]*)" Onboarding journey$/, function (screenName, flag, callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            browser.sleep(3000)
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Data', function () {
                            keyword.performclick('health_Summary|lnk_Data', function () {
                                keyword.expectVisible('health_Summary|btn_RetakeHealthAgeQuiz', function () {
                                    keyword.performclick('health_Summary|btn_RetakeHealthAgeQuiz', function () {
                                        keyword.expectVisible('health_Summary|header_OnboardingScreen', function () {
                                            webObjects.getWebElement('health_Summary|header_OnboardingScreen', function (webObj) {
                                                webObj.getText().then(function (text) {

                                                    if (text.toString().trim() === screenName) {
                                                        callback();
                                                    }

                                                    else {
                                                        if (text.toString().trim() === 'PHYSICAL PRIORITIES' || text.toString().trim() === 'OVERALL HEALTH') {
                                                            console.log("not macthed" + text)
                                                            goToOptional(screenName, flag, callback);


                                                        }
                                                    }
                                                });
                                            });

                                        });
                                    });
                                });
                            });

                        });
                    });

                });
            });

        });
    });

    Given(/^User click on cancel icon of new bookmark$/, function (done) {
        keyword.expectVisible('Dashboard_page|iframe_feedback', function () {
            keyword.switchToFrame('', 'Dashboard_page|iframe_feedback', function () {
                keyword.expectVisible('Dashboard_page|icon_Cancel_New_Bookmark', function () {
                    keyword.performclick('Dashboard_page|icon_Cancel_New_Bookmark', function () {
                        keyword.switchToDefaultContent(function () {
                            done();
                        })
                    });
                });
            });
        })

    });

    Given(/^User should see default answer in dropdown for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].defaultAnswer;
        keyword.getTextOfElement('Screen_' + PageName + "|dropdown_" + Question, function (text) {
            expect(answerToBeGiven.trim()).to.be.equal(text.toString().trim());
            callback();
        })
    });
    Given(/^User should see default answer in toggle for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].defaultAnswer;
        keyword.getText('Screen_' + PageName + "|toggleAnswer_" + Question, function (text) {
            expect(answerToBeGiven.trim()).to.be.equal(text.toString().trim());
            callback();
        })
    });
    Given(/^User clears text box for field "([^"]*)" of "([^"]*)" screen$/, function (Question, PageName, callback) {
        webObjects.getWebElement('Screen_' + PageName + "|textbox_" + Question, function (WebObj) {
            WebObj.clear().then(function () {
                keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                    callback();
                })
            })
        })
    });

    Given(/^Next button at "([^"]*)" screen should be enable$/, function (PageName, callback) {
        keyword.verifyIfElementIsEnable('Screen_' + PageName + '|btn_Next', function (status) {
            expect(status).to.be.equals(true)
        })
    });
    Given(/^User navigates to Profile page$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Profile', function () {
            keyword.performclick('Dashboard_page|icon_Profile', function () {
                keyword.expectVisible('Dashboard_page|icon_View_Profile', function () {
                    keyword.performclick('Dashboard_page|icon_View_Profile', function () {
                        callback();

                    });
                });

            });
        });
    });
    Given(/^User clicks on edit icon of "([^"]*)" section$/, function (sectionName, callback) {
        keyword.expectVisible('Screen_PersonalInfo|editIcon_' + sectionName, function () {
            keyword.performclick('Screen_PersonalInfo|editIcon_' + sectionName, function () {
                callback();

            });
        });
    });


    Given(/^User types "([^"]*)" in input box for question "([^"]*)" at "([^"]*)" screen$/, function (Value, Question, PageName, callback) {
        var answer = Value;
        keyword.expectVisible('Screen_' + PageName + "|textbox_" + Question, function () {
            keyword.setText('Screen_' + PageName + "|textbox_" + Question, answer, function () {
                keyword.performclick('Screen_' + PageName + '|header_Screen', function () {
                    callback();
                })
            })
        })
    });

    Given(/^User should not be able to type alphabets in input box for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + "|textbox_" + Question, function () {
            keyword.getTextOfElement('Screen_' + PageName + "|textbox_" + Question, function (text) {
                expect(text).to.be.equal('');
                callback();
            })
        })
    });


    Given(/^User should see pre\-populated non\-editable field for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        keyword.getText('Screen_' + PageName + "|dropdown_" + Question, function (text) {
            expect(answerToBeGiven.trim()).to.not.equal("");
            keyword.verifyIfElementIsEnable('Screen_' + PageName + "|dropdown_" + Question, function (text) {
                expect(text).to.not.equal(false);
                callback();
            })
        })
    });


    Given(/^User navigates to "([^"]*)" page from burger menu$/, function (Option, callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            browser.sleep(3000)
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_' + Option, function () {
                        callback();
                    });
                });
            });
        });
    });
    Given(/^User should view "([^"]*)" button at "([^"]*)" screen$/, function (ButtonName, PageName, callback) {
        keyword.expectVisible(PageName + '|button_' + ButtonName, function () {
            callback();
        });
    });
    Given(/^User clicks on "([^"]*)" button at "([^"]*)" screen$/, function (ButtonName, PageName, callback) {
        keyword.expectVisible(PageName + '|button_' + ButtonName, function () {
            keyword.performclick(PageName + '|button_' + ButtonName, function () {
                callback();
            });
        });
    });
    Given(/^User should see "([^"]*)" dropdown at "([^"]*)" screen$/, function (DropdownName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|dropdown_' + DropdownName, function () {
            callback();
        });
    });

    Given(/^User should see default answer in select dropdown for question "([^"]*)" at "([^"]*)" screen$/, function (Question, PageName, callback) {
        var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].defaultAnswer;

        keyword.getSelectedOptionFromSelectDropdown('Screen_' + PageName + "|dropdown_" + Question, function (text) {
            console.log(text)
            expect(answerToBeGiven.trim()).to.be.equal(text.toString().trim());
            callback();
        });
    });
    Given(/^User navigates "([^"]*)" screen of "([^"]*)" onboarding survey$/, function (ScreenName, ScreenType, callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Data', function () {
                            keyword.performclick('health_Summary|lnk_Data', function () {
                                keyword.expectVisible('Health_Age|button_' + ScreenType + 'Questions', function () {
                                    keyword.performclick('Health_Age|button_' + ScreenType + 'Questions', function () {
                                        keyword.expectVisible('Health_Age|button_EditIconOf' + ScreenName, function () {
                                            keyword.performclick('Health_Age|button_EditIconOf' + ScreenName, function () {
                                                callback();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });


    Given(/^User opens "([^"]*)" questionnaires of "([^"]*)" on\-boarding journey in edit mode$/, function (ScreenName, OnboardingType, callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.performclick('Dashboard_page|icon_Menu', function () {
                keyword.expectVisible('Dashboard_page|submenu_HealthAge', function () {
                    keyword.performclick('Dashboard_page|submenu_HealthAge', function () {
                        keyword.expectVisible('health_Summary|lnk_Data', function () {
                            keyword.performclick('health_Summary|lnk_Data', function () {
                                keyword.expectVisible('Health_Age|button_' + OnboardingType + 'Questions', function () {
                                    keyword.performclick('Health_Age|button_' + OnboardingType + 'Questions', function () {
                                        keyword.expectVisible('Health_Age|button_EditIconOf' + ScreenName, function () {
                                            keyword.performclick('Health_Age|button_EditIconOf' + ScreenName, function () {
                                                keyword.customisedSleep(5000, function () {
                                                    callback();
                                                })
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

});

function getOptionValues(availableOptions, mainOption, PageName, callback) {
    var optns = [], count = 0;
    keyword.scrollToElementByLocatorIntoView(PageName + '|' + mainOption, function () {
        keyword.performclick(PageName + '|' + mainOption, function () {
            browser.executeScript('window.scrollBy(0,100);').then(function () {
                keyword.customisedSleep(3000, function () {
                    element.all(by.xpath(webelements[PageName][availableOptions].selector)).then(function (elements) {
                        elements.forEach(function (ele) {
                            keyword.scrollToLocatedElementIntoView(ele, function () {
                                ele.getText().then(function (text) {
                                    count = count + 1;
                                    optns.push(text.toString().trim());
                                    if (count === elements.length) {

                                        callback(optns);


                                    }
                                });
                            })

                        });
                    });
                });
            });
        })
    })


}


function getOptionValuesIfDropdownInLast(availableOptions, mainOption, PageName, callback) {
    var optns = [], count = 0;
    keyword.performclick(PageName + '|' + mainOption, function () {
        keyword.scrollToElementByLocatorIntoView('Screen_PhysicalPriorities|btn_Next', function () {
            keyword.customisedSleep(3000, function () {
                element.all(by.xpath(webelements[PageName][availableOptions].selector)).then(function (elements) {
                    elements.forEach(function (ele) {
                        keyword.scrollToLocatedElementIntoView(ele, function () {
                            ele.getText().then(function (text) {
                                count = count + 1;
                                optns.push(text.toString().trim());
                                if (count === elements.length) {

                                    callback(optns);


                                }
                            });
                        })

                    });
                });
            });
        });
    })

}

function goToNext(screenName, done) {
    keyword.scrollToElementByLocatorIntoView('Screen_PhysicalPriorities|btn_Next', function () {
        //browser.sleep(2000);
        keyword.conditionalClick('Screen_PhysicalPriorities|btn_Next', 'Mandatory_Congratulation_Message|btn_ContinueSurvey', function () {
            if (screenName === "WORK RELATIONS & ENGAGEMENTS") {
                keyword.customisedSleep(3000, function () {
                    keyword.expectVisible('health_Summary|header_OnboardingScreen', function () {
                        webObjects.getWebElement('health_Summary|header_OnboardingScreen', function (webObj) {
                            webObj.getText().then(function (text) {
                                if (text.toString().trim() === screenName) {
                                    done();
                                }
                                else if (text.toString().trim() === 'CONGRATULATIONS') {
                                    element(by.xpath('//button[@title=\'Continue Survey\']')).click();
                                    browser.sleep(5000);
                                    goToNext(screenName, done);
                                }
                                else
                                    goToNext(screenName, done);
                            });
                        });
                    })
                });
            }
            else {
                keyword.expectVisible('health_Summary|header_OnboardingScreen', function () {
                    webObjects.getWebElement('health_Summary|header_OnboardingScreen', function (webObj) {
                        webObj.getText().then(function (text) {
                            if (text.toString().trim() === screenName) {
                                done();
                            }
                            else if (text.toString().trim() === 'CONGRATULATIONS') {
                                element(by.xpath('//button[@title=\'Continue Survey\']')).click();
                                browser.sleep(5000);
                                goToNext(screenName, done);
                            }
                            else
                                goToNext(screenName, done);
                        });
                    });
                })
            }

        })
    });
}


function clickKeyboardRight(PageName, sliderQuestion, req, callback) {
    browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform().then(function () {
        keyword.getTextOfElement('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function (text) {
            console.log(text.toString().trim())
            if (text.toString().trim() === req) {
                callback();
            }
            else {
                clickKeyboardRight(PageName, sliderQuestion, req, callback)
            }
        })
    })


}


function clickKeyboardLeft(PageName, sliderQuestion, req, callback) {
    browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform().then(function () {
        keyword.getTextOfElement('Screen_' + PageName + '|sliderHeader_' + sliderQuestion, function (text) {
            if (text.toString().trim() === req) {
                callback();
            }
            else {
                clickKeyboardLeft(PageName, sliderQuestion, req, callback)
            }
        })
    });
}


function clearAllCheckBox(PageName, callback) {

    webObjects.getWebElements('Screen_' + PageName + '|allCheckboxes', function (webObj) {
        webObj.forEach(function (element) {
            element.isSelected().then(function (status) {
                if (status.toString().trim() === "true") {
                    element.click();
                }

            });

        })
        callback();
    });
}

function clickOnCheckbox(PageName, Question, callback) {

    var answerToBeGiven = HLIData['Screen_' + PageName]['question_' + Question].userAnswer;
    var size = answerToBeGiven.length;
    var counter = 0;
    answerToBeGiven.forEach(function (checkbox) {
        console.log(checkbox)
        keyword.verifyCheckboxSelectionState('Screen_' + PageName + '|checkbox_' + checkbox, function (flag) {
            console.log(flag);
            if ("true" === flag.toString().trim()) {
                console.log("Already checked")
            }
            else {
                element(By.xpath(webelements['Screen_' + PageName]['checkbox_' + checkbox].selector)).click();
            }
            if (counter === size)
                callback();
        });
        counter++;

    });


}


function goToOptional(screenName, flag, done) {
    keyword.scrollToElementByLocatorIntoView('Screen_PhysicalPriorities|btn_Next', function () {
        browser.sleep(2000);
        //keyword.conditionalClick('Screen_PhysicalPriorities|btn_Next', 'Mandatory_Congratulation_Message|btn_ContinueSurvey', function () {
        keyword.performclick('Screen_PhysicalPriorities|btn_Next', function () {
            keyword.expectVisible('health_Summary|header_OnboardingScreen', function () {
                webObjects.getWebElement('health_Summary|header_OnboardingScreen', function (webObj) {
                    webObj.getText().then(function (text) {
                        if (text.toString().trim() === screenName) {
                            if (text.toString().trim() === 'OVERALL HEALTH') {
                                if (flag.toString().trim() === "Optional") {
                                    keyword.expectPresence('Screen_MandatoryOverallHealth|lbl_ScreenNumber', function () {
                                        keyword.getTextOfElement('Screen_MandatoryOverallHealth|lbl_ScreenNumber', function (number) {
                                            if (number.toString().trim() === "1/10") {
                                                done();
                                            }
                                            else {
                                                goToOptional(screenName, flag, done);
                                            }
                                        })
                                    })
                                }

                                else {
                                    done();
                                }
                            }
                            else if (text.toString().trim() === 'NUTRITION') {
                                console.log("2. Inside if of NUTRITION health");
                                if (flag.toString().trim() === "Optional") {
                                    console.log("2. Inside if of optional check");
                                    keyword.expectPresence('Screen_OptionalNutrition|lbl_ScreenNumber', function () {
                                        keyword.getTextOfElement('Screen_OptionalNutrition|lbl_ScreenNumber', function (number) {
                                            console.log("4. Number" + number);
                                            if (number.toString().trim() === "3/10") {
                                                done();
                                            }
                                            else {
                                                goToOptional(screenName, flag, done);
                                            }
                                        })
                                    })
                                }

                                else {
                                    done();
                                }
                            }
                            else {
                                done();
                            }
                        }
                        else if (text.toString().trim() === 'CONGRATULATIONS') {
                            element(by.xpath('//button[@title=\'Continue Survey\']')).click();
                            console.log("Inside screen name verification")
                            keyword.customisedSleep(10000, function () {
                                //goToOptional(screenName,flag, done);

                                webObjects.getWebElement('health_Summary|header_OnboardingScreen', function (webObj) {
                                    webObj.getText().then(function (text) {
                                        if (text.toString().trim() === screenName) {
                                            done();
                                        }
                                        else {
                                            goToOptional(screenName, flag, done);
                                        }
                                    });
                                });
                            })

                        }

                        else
                            goToOptional(screenName, flag, done);
                    });
                });
            })
        });
    })
}


/*function selectByVisibleText(locator, data, callback) {

    let flag = false;
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isDisplayed();
        }, 5000).then(function () {
            webObj.all(by.tagName('option')).then(function (options) {
                options.forEach(function (option) {
                    option.getText().then(function (text) {
                        if (text.toString().trim() === data.trim()) {
                            option.click();
                            flag = true;
                            callback();
                        }
                    });
                });
            });
        }).then(function () {
            if (flag === false)
                throw "Nothing Selected"
        }).catch(function (error) {
            console.log("Handled")
            callback();
        })
    });
}*/

module.exports = {
    getOptionValues: getOptionValues,
}
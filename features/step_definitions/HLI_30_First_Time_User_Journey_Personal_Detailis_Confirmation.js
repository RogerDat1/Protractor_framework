var {defineSupportCode} = require("cucumber");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var UserDateOfBirth = "";

defineSupportCode(function ({Given}) {

    Given(/^User has logged in HLI for the first time$/, function (done) {

        browser.get("http://usdf23v0218.mrshmc.com:5024/provision/login");
        browser.waitForAngularEnabled(false);
        keyword.expectVisible('Login_Page|input_Email', function () {

            keyword.setText('Login_Page|input_Email', HLIData.Login_Credentails.Email_Address, function () {

                keyword.expectVisible('Login_Page|btn_Submit', function () {
                    keyword.performclick('Login_Page|btn_Submit', function () {
                        keyword.expectVisible('Login_Page|input_Password', function () {
                            keyword.setText('Login_Page|input_Password', HLIData.Login_Credentails.Password, function () {
                                keyword.performclick('Login_Page|btn_Submit', function () {
                                    keyword.expectVisible('Home_Page|lbl_Ageingworks', function () {

                                        done();
                                    })

                                });
                            });
                        });
                    });
                });
            });
        });
    }),

        Given(/^User is on Welcome video page$/, function (done) {
            keyword.getAndVerifyPageTitle('', function () {

                done();
            })
        }),

        Given(/^User clicks on Skip Video button on Welcome page$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.performclick('', function () {
                    done();

                })
            })
        }),

        Given(/^System will populate a personal details page$/, function (done) {
            keyword.waitTillTitleOfPageMacthesWithExpected('Profile', function () {
                done();
            })
        }),
        Given(/^User should see LET'S GET GOING HEADER$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|header_letsGetGoing', function () {
                done();
            })
        }),
        Given(/^User should see LET'S GET GOING HEADER text$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|lbl_letsGetGoing', function () {
                done();
            })
        }),
        Given(/^User should see WHAT WE KNOW ABOUT YOU section$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|header_whatWeKnowAboutYou', function () {
                done();
            })
        }),
        Given(/^User should see MORE ABOUT YOU section$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|header_moreAboutYou', function () {
                done();
            })
        }),
        Given(/^User should see JOB & EDUCATION section$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|header_jobsAndEducation', function () {
                done();
            })
        }),
        Given(/^User should see WHAT WE KNOW ABOUT YOU HEADER text$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|lbl_whatWeKnowAboutYou', function () {
                done();
            })
        }),
        Given(/^User should see MORE ABOUT YOU HEADER text$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|lbl_moreAboutYou', function () {
                done();
            })
        }),
        Given(/^User should see JOB & EDUCATION HEADER text$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|lbl_jobsAndEducation', function () {
                done();
            })
        }),
        Given(/^User should see a button to Save & Continue$/, function (done) {
            keyword.expectVisible('Screen_PersonalDetailsConfirmation|btn_saveAndContinue', function () {
                done();
            })
        }),
        Given(/^User clicks on Save And Continue button$/, function (done) {
            keyword.performclick('Screen_PersonalDetailsConfirmation|btn_SaveAndContinue', function () {
                done();
            })
        }),
        Given(/^User views and verify non-editable fields populated from HR file under About you section of page$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.getTextAndVerify('', '', function () {
                    keyword.expectVisible('', function () {
                        keyword.getTextAndVerify('', '', function () {
                            keyword.expectVisible('', function () {
                                keyword.getTextAndVerify('', '', function () {
                                    done();
                                })
                            })
                        })
                    })
                })
            })
        }),

        Given(/^User can access a link to understand How to manage changes to non-editable fields$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.getTextAndVerify('', '', function () {
                    keyword.performclick('', function () {
                        keyword.getTextAndVerify('', '', function () {
                            done();
                        });
                    });
                });
            })

        }),
        Given(/^User should be able to view and update Relationship Status under Need more information section of page$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.selectByVisibleText('', '', function () {
                    keyword.getSelectedOptionFromSelectDropdown('', function () {
                        done();
                    })
                })
            });
        }),
        Given(/^User should be able to update Rent\/Own status of Home under Need more information section of page$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.selectByVisibleText('', '', function () {
                    keyword.getSelectedOptionFromSelectDropdown('', function () {
                        done();
                    })
                })
            });
        }),
        Given(/^the User should have ability to update contact details and contact preferences$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.setText('', '', function () {
                    keyword.expectVisible('', function () {
                        keyword.selectByVisibleText('', '', function () {
                            keyword.getSelectedOptionFromSelectDropdown('', function () {
                                keyword.expectVisible('', function () {
                                    keyword.setText('', '', function () {
                                        keyword.expectVisible('', function () {
                                            keyword.selectByVisibleText('', '', function () {
                                                keyword.getSelectedOptionFromSelectDropdown('', function () {
                                                    done();
                                                })
                                            })
                                        });
                                    })
                                });
                            })
                        })
                    });
                })
            });
        }),

        Given(/^User should see a button to Finish the Welcome journey and go to HLI Dashboard$/, function (done) {
            keyword.performclick('', function () {
                done();
            })
        }),


        Given(/^User accesses First\/ Main Accordion page$/, function (done) {
            done();
        }),
        Given(/^System should include Age as a calculated field from Date of Birth in About you section of page$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.getTextAndVerify('', '', function () {
                    done();
                })
            })
        }),
        Given(/^Age should be a non\-editable field$/, function (done) {
            done();
        }),
        Given(/^User's Date of Birth value is not available in Runpath database$/, function (done) {
            done();
        }),
        Given(/^System will not include Age field in About you section of page$/, function (done) {
            keyword.expectNotVisible('', function () {
                done();
            })
        }),
        Given(/^User clicks on Are these details correct\? link below non\-editable fields$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.getTextAndVerify('', '', function () {
                    keyword.performclick('', function () {
                        done();
                    });
                });
            })
        }),
        Given(/^System will expand text section to explain how non\-editable fields can be corrected$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.getTextAndVerify('', '', function () {
                    done();
                });
            })
        }),
        Given(/^"Are these details correct\?" link wil not be visible when text section is expanded$/, function (done) {
            keyword.expectNotVisible('', function () {
                done();
            })
        }),
        Given(/^a chevron to close the expanded text section$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.performclick('', function () {
                    done();
                });
            })
        }),
        Given(/^User clicks on "([^"]*)" button on page$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.performclick('', function () {
                    done();
                });
            })
        }),
        Given(/^System should navigate User to HLI Dashboard$/, function (done) {
            keyword.getAndVerifyPageTitle('', function () {
                done();
            })
        });
    Given(/^User should see non editable First Name Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_firstName', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_firstName', globalData.personalDetailsOfUser[globalData.Environment.trim()].firstName, function () {
                done();
            });
        })
    });
    Given(/^User should see non editable Last Name Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_lastName', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_lastName', globalData.personalDetailsOfUser[globalData.Environment.trim()].lastName, function () {
                done();
            });
        })
    });
    Given(/^User should see non editable Date of birth Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_dateOfBirth', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_dateOfBirth', globalData.personalDetailsOfUser[globalData.Environment.trim()].dateOfBirth, function () {
                done();
            });
        })
    });
    Given(/^User should see editable Gender Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_gender', function () {
            keyword.getSelectedOptionFromSelectDropdown('Screen_PersonalDetailsConfirmation|dropDown_gender', function (gender) {
                expect(gender).to.equal(globalData.personalDetailsOfUser[globalData.Environment.trim()].gender);
                done();
            })

        })
    });
    Given(/^User should see non editable Address Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_address', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_address', globalData.personalDetailsOfUser[globalData.Environment.trim()].address, function () {
                done();
            });
        })
    });
    Given(/^User should see non editable Postcode Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_postcode', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_postcode', globalData.personalDetailsOfUser[globalData.Environment.trim()].postcode, function () {
                done();
            });
        })
    });
    Given(/^User should see non editable City Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_city', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_city', globalData.personalDetailsOfUser[globalData.Environment.trim()].cityCounty, function () {
                done();
            });
        })
    });
    Given(/^User should see non editable Country Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_country', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_country', globalData.personalDetailsOfUser[globalData.Environment.trim()].country, function () {
                done();
            });
        })
    });
    Given(/^User should see non editable Work Email Field and verify value$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_workEmail', function () {
            keyword.getTextAndVerify('Screen_PersonalDetailsConfirmation|txt_workEmail', globalData.personalDetailsOfUser[globalData.Environment.trim()].workEmailAddress, function () {
                done();
            });
        })
    });
    Given(/^User should see editable Ethnicity Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_ethnicity', function () {
            done();
        })
    });
    Given(/^User should see editable Ethnicity Group Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDwon_ethnicityGroup', function () {
            done();
        })
    });
    Given(/^User should see editable Marital Status Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_maritalStatus', function () {
            done();
        })
    });
    Given(/^User should see editable Number Of Children Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmationScreen_PersonalDetailsConfirmation|txt_noOfChildren', function () {
            done();
        })
    });
    Given(/^User should see editable Are You A Carer Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|toggle_areYouACarer', function () {
            done();
        })
    });


    Given(/^User should see editable Highest Level Of Education Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_heighestLevelOfEducation', function () {
            done();
        })
    });

    Given(/^User should see editable Job Role Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_jobRole', function () {
            done();
        })
    });


    Given(/^User should see non editable Annual Salary Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_annualSalary', function () {
            done();
        })
    });


    Given(/^User should see non editable Currency Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_currency', function () {
            done();
        })
    });

    Given(/^User select Gender as "([^"]*)"$/, function (value, callback) {
        keyword.expectVisible('Personal_Details_Confirmation|dropdown_gender', function () {
            keyword.selectByVisibleText('Screen_PersonalDetailsConfirmation|dropdown_gender', value, function () {
                callback();
            })
        })


    });

    Given(/^Are you pregnant field should be shown under More About You section$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|toggle_areYouAPregnant', function () {
            done();
        })
    });

    Given(/^Are you pregnant field should not be shown under More About You section$/, function (done) {
        keyword.expectNotVisible('Screen_PersonalDetailsConfirmation|toggle_AreYouAPregnant', function () {
            done();
        })
    });


    Given(/^User selects "([^"]*)" from Ethnicity Group dropdown$/, function (value, callback) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDwon_ethnicityGroup', function () {
            keyword.selectByVisibleText('Screen_PersonalDetailsConfirmation|dropDwon_ethnicityGroup', value, function () {
                callback();
            })
        })
    });


    Given(/^User selects "([^"]*)" from Ethnicity dropdown$/, function (value, callback) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_ethnicity', function () {
            keyword.selectByVisibleText('Screen_PersonalDetailsConfirmation|dropDown_ethnicity', value, function () {
                callback();
            })
        })
    });

    Given(/^User selects "([^"]*)" from Marital Status dropdown$/, function (value, callback) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_maritalStatus', function () {
            keyword.selectByVisibleText('Screen_PersonalDetailsConfirmation|dropDown_maritalStatus', value, function () {
                callback();
            })
        })
    });

    Given(/^User tyepes No of children in appropriate field$/, function (callback) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_noOfChildren', function () {
            keyword.setText('Screen_PersonalDetailsConfirmation|txt_noOfChildren', '10', function () {
                callback();
            })
        })
    });

    Given(/^User selects "([^"]*)" from Highest level of Education dropdown$/, function (value, callback) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_heighestLevelOfEducation', function () {
            keyword.selectByVisibleText('Screen_PersonalDetailsConfirmation|dropDown_heighestLevelOfEducation', value, function () {
                callback();
            })
        })
    });

    Given(/^User selects "([^"]*)" from Job Role dropdown$/, function (value, callback) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|dropDown_jobRole', function () {
            keyword.selectByVisibleText('Screen_PersonalDetailsConfirmation|dropDown_jobRole', value, function () {
                callback();
            })
        })
    });

    Given(/^User should see editable Address Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_editableAddress', function () {
            done();
        })
    });

    Given(/^User should see editable Postcode Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_editablePostcode', function () {
            done();
        })
    });

    Given(/^User should see editable City Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_editableCity', function () {
            done();
        })
    });

    Given(/^User should see editable Country Field$/, function (done) {
        keyword.expectVisible('Screen_PersonalDetailsConfirmation|txt_editableCountry', function () {
            done();
        })
    });

    Given(/^User should see "([^"]*)" header at "([^"]*)" page$/, function (HeaderName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|header_' + HeaderName, function () {
            callback();
        })
    });
    Given(/^User should see "([^"]*)" header description at "([^"]*)" page$/, function (HeaderDesc, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|headerDescription_' + HeaderDesc, function () {
            callback();
        })
    });
    Given(/^User should see a "([^"]*)" button at "([^"]*)" page$/, function (ButtonName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_' + ButtonName, function () {
            callback();
        })
    });
    Given(/^User should see non editable input field "([^"]*)" and verify its value at "([^"]*)" page$/, function (FieldName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + FieldName, function () {
            keyword.getAttribute('Screen_' + PageName + '|textbox_' + FieldName, "class", function (value) {
                expect(value.toString().includes("non-editable")).to.equal(true);
                keyword.getTextAndVerify('Screen_' + PageName + '|textbox_' + FieldName, HLIData['Screen_' + PageName][globalData.Environment.trim()][FieldName], function () {
                    callback();
                });
            })

        })
    });

    Given(/^User should see editable non select drop down field "([^"]*)" and verify its value at "([^"]*)" page$/, function (FieldName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|dropdown_' + FieldName, function () {
            keyword.verifyIfElementIsEnable('Screen_' + PageName + '|dropdown_' + FieldName, function (flag) {
                expect(flag).to.equal(true);
                keyword.getSelectedOptionFromDropdown('Screen_' + PageName + '|dropdown_' + FieldName, function (gender) {
                    expect(gender.toString().trim()).to.equal(HLIData['Screen_' + PageName][globalData.Environment.trim()][FieldName]);
                    callback();
                })
            })

        })
    });
    Given(/^User should see editable input field "([^"]*)" at "([^"]*)" page$/, function (FieldName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|textbox_' + FieldName, function () {
            keyword.verifyIfElementIsEnable('Screen_' + PageName + '|textbox_' + FieldName, function (flag) {
                expect(flag).to.equal(true);
                callback();
            })

        })
    });
    Given(/^User should see editable drop down field "([^"]*)" at "([^"]*)" page$/, function (FieldName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|dropdown_' + FieldName, function () {
            keyword.verifyIfElementIsEnable('Screen_' + PageName + '|dropdown_' + FieldName, function (flag) {
                expect(flag).to.equal(true);
                callback();
            })

        })
    });
    Given(/^User should see editable toggle button for field "([^"]*)" at "([^"]*)" page$/, function (FieldName, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|toggle_' + FieldName, function () {
            keyword.verifyIfElementIsEnable('Screen_' + PageName + '|toggle_' + FieldName, function (flag) {
                expect(flag).to.equal(true);
                callback();
            })

        })
    });
    Given(/^User selects a "([^"]*)" value from drop down for question "([^"]*)" at "([^"]*)" screen$/, function (Value, Question, PageName, callback) {
        var answerToBeGiven = Value;
        console.log("fsdf" + answerToBeGiven)
        keyword.selectValueFromClickableListbox('Screen_' + PageName + '|dropdown_' + Question, 'Screen_' + PageName + '|dropdownOptions_' + Question, answerToBeGiven, function () {
            //keyword.customisedSleep(5000, function () {
                callback();
            //})

        })
    });
});



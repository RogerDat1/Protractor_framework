var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^I should not be able to edit or enter First name$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Fisrt_Name', function () {
            keyword.getAttribute('View_Profile|profile_Fisrt_Name', 'class', function (text) {
                var value = text.includes("non-editable");
                console.log(value);
                done()
            });
        });

    });
    Given(/^I should not be able to edit or enter Last name$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Last_Name', function () {
            keyword.getAttribute('View_Profile|profile_Last_Name', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should not be able to edit or enter Address$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Address', function () {
            keyword.scrollToElementByLocatorIntoView('View_Profile|profile_Address', function () {
                keyword.getAttribute('View_Profile|profile_Address', 'class', function (text) {
                    var value = text.includes("non-editable")
                    done();
                });
                //});
            });
        });
    });
    Given(/^I should not be able to edit or enter Date of birth$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Date_of_Birth', function () {
            keyword.getAttribute('View_Profile|profile_Date_of_Birth', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });
    });
    Given(/^I should not be able to edit or enter Postcode$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Post_Code', function () {
            keyword.getAttribute('View_Profile|profile_Post_Code', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should not be able to edit or enter city$/, function (done) {
        keyword.expectVisible('View_Profile|profile_City', function () {
            keyword.getAttribute('View_Profile|profile_City', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should not be able to edit or enter country$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Country', function () {
            keyword.getAttribute('View_Profile|profile_Country', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should be able to edit gender$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Gender', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Gender', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit Ethnicity Group$/, function (done) {
        keyword.expectVisible('View_Profile|Ethnicity_Group', function () {
            keyword.verifyIfElementIsEnable('View_Profile|Ethnicity_Group', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit Ethnicity$/, function (done) {
        keyword.expectVisible('View_Profile|Ethnicity', function () {
            keyword.verifyIfElementIsEnable('View_Profile|Ethnicity', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit Marital Status$/, function (done) {
        keyword.expectVisible('View_Profile|marital_Status', function () {
            keyword.verifyIfElementIsEnable('View_Profile|marital_Status', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit qus 'i am carer'$/, function (done) {
        keyword.expectVisible('View_Profile|qus_Carer', function () {
            keyword.verifyIfElementIsEnable('View_Profile|qus_Carer', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit qus 'i am pregnant'$/, function (done) {
        keyword.expectVisible('View_Profile|qus_Pregnent', function () {
            keyword.verifyIfElementIsEnable('View_Profile|qus_Pregnent', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I tap the pencil icon next to 'Job And Education'$/, function (done) {
        keyword.expectVisible('View_Profile|about_You_edit_icon_Job', function () {
            keyword.scrollToElementByLocatorIntoView('View_Profile|about_You_edit_icon_Job', function () {
                browser.executeScript('window.scrollTo(0,200);').then(function () {
                    keyword.performclick('View_Profile|about_You_edit_icon_Job', function () {
                        done();
                    });
                });
            });
        });

    });
    Given(/^I should be able to edit Highest Level Educations$/, function (done) {
        keyword.expectVisible('View_Profile|qus_HLE', function () {
            keyword.verifyIfElementIsEnable('View_Profile|qus_HLE', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit Job Role$/, function (done) {
        keyword.expectVisible('View_Profile|qus_Job_Description', function () {
            keyword.verifyIfElementIsEnable('View_Profile|qus_Job_Description', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit Annual Salary$/, function (done) {
        keyword.expectVisible('View_Profile|qus_Annual_Salary', function () {
            keyword.verifyIfElementIsEnable('View_Profile|qus_Annual_Salary', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^I should be able to edit qus currency$/, function (done) {
        keyword.expectVisible('View_Profile|qus_Currency', function () {
            keyword.scrollToElementByLocatorIntoView('View_Profile|qus_Currency', function () {
                keyword.verifyIfElementIsEnable('View_Profile|qus_Currency', function (status) {
                    expect(status, 'Gender should be enable').to.equal(true)
                    done()
                })
            })
        })
    })
    Given(/^I should be able to edit qus Branch Location$/, function (done) {
        keyword.expectVisible('View_Profile|qus_Work_Location', function () {
            keyword.verifyIfElementIsEnable('View_Profile|qus_Work_Location', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
});
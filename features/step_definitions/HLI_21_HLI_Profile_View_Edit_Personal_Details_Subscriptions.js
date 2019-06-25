var {defineSupportCode} = require("cucumber");

let webObjects = require('./../../utilities/webObjectHandler.js');

var styleValue;
var styleValueForAvatarImage;

defineSupportCode(function ({Given}) {

    Given(/^I have tapped the Profile Icon in the top right corner$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Profile', function () {
            keyword.performclick('Dashboard_page|icon_Profile', function () {
                done();

            });
        });

    });


    Given(/^The Personal info page is selected displayed$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_View_Profile', function () {
            keyword.performclick('Dashboard_page|icon_View_Profile', function () {
                keyword.expectVisible('View_Profile|tab_personal', function () {
                    keyword.performclick('View_Profile|tab_personal', function () {
                        keyword.customisedSleep(10000, function () {
                            done();
                        })
                    })
                });

            });
        });
    });


    Given(/^I should be able to view Menu Personal Info$/, function (done) {
        keyword.expectVisible('View_Profile|tab_personal', function () {
            done();
        });
    });
    Given(/^I should be able to view Menu Communications$/, function (done) {
        keyword.expectVisible('View_Profile|tab_communications', function () {
            done();
        });
    });
    Given(/^I should be able to view Menu privacy$/, function (done) {
        keyword.expectVisible('View_Profile|tab_privacy', function () {
            done();
        });
    });


    Given(/^I view the background photo$/, function (done) {
        keyword.expectVisible('View_Profile|img_Background', function () {
        keyword.getAttribute('View_Profile|img_Background', 'style', function (text) {
            // expect(text).to.have.string('https://ampstoragetest.blob.core.windows.net/mercer-headers/f317338b-bec9-b40a-3645-fa2618cdfa0d.jpg');
            done();
        });
        });
    });

    Given(/^I tap the photo_icon in the top right$/, function (done) {
        keyword.expectVisible('View_Profile|icon_Camera_Background', function () {
            keyword.performclick('View_Profile|icon_Camera_Background', function () {
                keyword.customisedSleep(5000, function () {
                    done();
                })
            });
        });
    });


    Given(/^I can change and upload the background photo$/, function (done) {

        var imageToUpload = __dirname + '/NeedSpace.png';
        keyword.getAttribute('View_Profile|img_background', 'style', function (value) {
            styleValue = value;
            webObjects.getWebElement('View_Profile|icon_Camera', function (webObj) {
                browser.executeScript("arguments[0].style.display = 'block';", webObj).then(function () {
                    keyword.setText('View_Profile|icon_Camera', imageToUpload, function () {
                        keyword.customisedSleep(10000, function () {
                            done();
                        })
                    })
                })
            });
        })


    });

    Given(/^I tap the avatar_photo_icon$/, function (done) {
        keyword.expectVisible('View_Profile|about_You_edit_icon', function () {
            keyword.performclick('View_Profile|about_You_edit_icon', function () {
                done();
            });
        });
    });


    Given(/^I should be able to upload and change photos$/, function (done) {
        done();
    });


    Given(/^I tap on Browse my computer$/, function (done) {
        keyword.expectVisible('View_Profile|icon_Browse_my_computer', function () {
            keyword.performclick('View_Profile|icon_Browse_my_computer', function () {
                done();
            });
        });
    });


    Given(/^I tap the pencil icon next to 'Profile Overview'$/, function (done) {
        keyword.expectVisible('View_Profile|about_You_edit_icon', function () {
            keyword.scrollToElementByLocatorIntoView('View_Profile|about_You_edit_icon', function () {
                browser.executeScript('window.scrollTo(0,200);').then(function () {
                    keyword.performclick('View_Profile|about_You_edit_icon', function () {
                        done();
                    });
                });
            });
        });

    });
    Given(/^I tap the pencil icon next to 'More about You'$/, function (done) {
        keyword.expectVisible('View_Profile|about_You_edit_icon_MoreAboutU', function () {
            keyword.scrollToElementByLocatorIntoView('View_Profile|about_You_edit_icon_MoreAboutU', function () {
                browser.executeScript('window.scrollTo(0,200);').then(function () {
                    keyword.performclick('View_Profile|about_You_edit_icon_MoreAboutU', function () {
                        done();
                    });
                });
            });
        });

    });


    Given(/^I should be able to edit or enter First name$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Fisrt_Name', function () {
            keyword.getAttribute('View_Profile|profile_Fisrt_Name', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should be able to edit or enter Last name$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Last_Name', function () {
            keyword.getAttribute('View_Profile|profile_Last_Name', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should be able to edit or enter Address$/, function (done) {
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
    Given(/^I should be able to edit or enter Date of birth$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Date_of_Birth', function () {
            keyword.getAttribute('View_Profile|profile_Date_of_Birth', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });
    });
    Given(/^I should be able to edit or enter Postcode$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Post_Code', function () {
            keyword.getAttribute('View_Profile|profile_Post_Code', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should be able to edit or enter city$/, function (done) {
        keyword.expectVisible('View_Profile|profile_City', function () {
            keyword.getAttribute('View_Profile|profile_City', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^I should be able to edit or enter country$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Country', function () {
            keyword.getAttribute('View_Profile|profile_Country', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });

    });
    Given(/^Email address is set to read-only$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Email', function () {
            keyword.getAttribute('View_Profile|profile_Email', 'class', function (text) {
                var value = text.includes("non-editable")
                done();
            });
        });
    });


    Given(/^I navigate to Personal info subscriptions section$/, function (done) {
        keyword.expectVisible('View_Profile|profile_My_Sub', function () {
            keyword.scrollToElementByLocatorIntoView('View_Profile|profile_My_Sub', function () {
                done();
                });


        });
    });
    Given(/^I should see subscribed article_category under my Subscriptions$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Sub_List', function () {
            done();
        });
    });
    Given(/^User click on cancle icon of new bookmark$/, function (done) {
        keyword.expectVisible('Login_Page|iframe_feedback', function () {
            keyword.switchToFrame('', 'Login_Page|iframe_feedback', function () {
                keyword.expectVisible('Dashboard_page|icon_Cancle_New_Bookmark', function () {
                    keyword.performclick('Dashboard_page|icon_Cancle_New_Bookmark', function () {
                        keyword.switchToDefaultContent(function () {
                            done();
                        })
                    });
                });
            });
        })

    });
    Given(/^I should be able to remove any article_category already subscribed$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Sub_Cancle', function () {
            keyword.performclick('View_Profile|profile_Sub_Cancle', function () {
                done();
            });
        });
    });
    Given(/^I click on save button to save new image$/, function (callback) {
        keyword.expectVisible('View_Profile|button_SaveImage', function () {
            keyword.performclick('View_Profile|button_SaveImage', function () {
                callback();
            });
        });
    });
    Given(/^I verify new image has been uploaded$/, function (callback) {
        keyword.getAttribute('View_Profile|img_background', 'style', function (value) {
            expect(value).to.not.equal(styleValue);
            callback();
        });
    });
    Given(/^I should be able to change avatar profile pic$/, function (callback) {
        var imageToUpload = __dirname + '/Avatar.jpg';
        keyword.getAttribute('View_Profile|img_avatar', 'src', function (value) {
            styleValueForAvatarImage = value;
            webObjects.getWebElement('View_Profile|upload_ProfilePic', function (webObj) {
                browser.executeScript("arguments[0].style.display = 'block';", webObj).then(function () {
                    keyword.setText('View_Profile|upload_ProfilePic', imageToUpload, function () {
                        keyword.customisedSleep(10000, function () {
                            callback();
                        })
                    })
                })
            });
        })
    });
    Given(/^I verify new profile avatar image has been uploaded$/, function (callback) {
        keyword.getAttribute('View_Profile|img_avatar', 'src', function (value) {
            expect(value).to.not.equal(styleValueForAvatarImage);
            callback();
        });
    });

    Given(/^User try to update profile pic with size more than five MB$/, function (callback) {
        var imageToUpload = __dirname + '/441H.jpg';
        keyword.getAttribute('View_Profile|img_avatar', 'src', function (value) {
            styleValueForAvatarImage = value;
            webObjects.getWebElement('View_Profile|upload_ProfilePic', function (webObj) {
                browser.executeScript("arguments[0].style.display = 'block';", webObj).then(function () {
                    keyword.setText('View_Profile|upload_ProfilePic', imageToUpload, function () {
                        keyword.customisedSleep(10000, function () {
                            callback();
                        })
                    })
                })
            });
        })
    });
    Given(/^User should see error message File size should be less than (\d+) MB$/, function (arg1, callback) {
        keyword.expectVisible('View_Profile|errorMsg_5Mb', function () {
            callback();
        });
    });
    Given(/^I verify new profile avatar image has not been uploaded$/, function (callback) {
        keyword.getAttribute('View_Profile|img_avatar', 'src', function (value) {
            expect(value).to.equal(styleValueForAvatarImage);
            callback();
        });
    });

    Given(/^User try to update background pic with size more than five MB$/, function (callback) {
        var imageToUpload = __dirname + '/441H.jpg';
        keyword.getAttribute('View_Profile|img_background', 'style', function (value) {
            styleValue = value;
            webObjects.getWebElement('View_Profile|icon_Camera', function (webObj) {
                browser.executeScript("arguments[0].style.display = 'block';", webObj).then(function () {
                    keyword.setText('View_Profile|icon_Camera', imageToUpload, function () {
                        keyword.customisedSleep(10000, function () {
                            callback();
                        })
                    })
                })
            });
        })
    });
    Given(/^User should see error message The file size exceeds the 5Mb$/, function (callback) {
        keyword.expectVisible('View_Profile|errorMsg_5MBBackgroundImage', function () {
            callback();
        });
    });
    Given(/^I verify new background image has not been uploaded$/, function (callback) {
        keyword.getAttribute('View_Profile|img_background', 'style', function (value) {
            expect(value).to.equal(styleValue);
            callback();
        });
    });
    Given(/^User clicks on cancel button to cancel update of background image$/, function (callback) {
        keyword.expectVisible('View_Profile|btn_CancelBackgroundPic', function () {
            keyword.performclick('View_Profile|btn_CancelBackgroundPic', function () {
                keyword.customisedSleep(5000, function () {
                    callback();
                })
            });
        });
    });
});
/**
 * Created by amod-mahajan on 11/13/2017.
 */

var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {
    Given(/^User has logged in HLI as UserType "([^"]*)"$/, function (userType, done) {
        browser.get(globalData.AUT_URL[globalData.Environment.trim()]).then(function () {
            browser.waitForAngularEnabled(false);
            var users = globalData.Login_Credentials[globalData.Environment.trim()]
            keyword.expectVisible('Login_Page|input_Email', function () {
                keyword.setText('Login_Page|input_Email', users[userType].Email_Address, function () {
                    keyword.expectVisible('Login_Page|btn_Submit', function () {
                        keyword.performclick('Login_Page|btn_Submit', function () {
                            keyword.expectVisible('Login_Page|input_Password', function () {
                                keyword.setText('Login_Page|input_Password', users[userType].Password, function () {
                                    keyword.performclick('Login_Page|btn_Submit', function () {
                                        keyword.expectVisible('Login_Page|link_HLILogo', function () {
                                            keyword.customisedSleep(5000, function () {
                                                done();
                                            })
                                        })
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

    }),

        Given(/^User accesses dashboard page$/, function (done) {

            keyword.waitTillTitleOfPageMacthesWithExpected('Dashboard', function () {
                keyword.getAndVerifyPageTitle('Dashboard', function (flag) {
                    if (!flag)
                        throw "Page title not matched as expected."
                    done();

                })
            })


        }),
        Given(/^User sees PRIVACY POLICY DASHBOARD header$/, function (callback) {
            keyword.expectVisible('Privacy_Policy_Dashboard|header_PrivacyPolicyDashBoard', function () {
                callback();
            })
        });
    Given(/^User sees SOME OTHER MATTERS header$/, function (callback) {
        keyword.expectVisible('Privacy_Policy_Dashboard|header_SOME_OTHER_MATTERS', function () {
            callback();
        })
    });
    Given(/^User sees WHAT DATA DO WE COLLECT DASHBOARD header$/, function (callback) {
        keyword.expectVisible('Privacy_Policy_Dashboard|header_WHAT_DATA_DO_WE_COLLECT', function () {
            callback();
        })
    });
    Given(/^User sees HOW DO WE USE THE DATA WE COLLECT DASHBOARD header$/, function (callback) {
        keyword.expectVisible('Privacy_Policy_Dashboard|header_HOW_DO_WE_USE_THE_DATA_WE_COLLECT', function () {
            callback();
        })
    });
    Given(/^User sees WITH WHOM DO WE SHARE YOUR DATA header$/, function (callback) {
        keyword.expectVisible('Privacy_Policy_Dashboard|header_WITH_WHOM_DO_WE_SHARE_YOUR_DATA', function () {
            callback();
        })
    });
    Given(/^User sees WHAT STEPS DO WE TAKE TO PROTECT YOUR INFORMATION header$/, function (callback) {
        keyword.expectVisible('Privacy_Policy_Dashboard|header_WHAT_STEPS_DO_WE_TAKE_TO_PROTECT_YOUR_INFORMATION', function () {
            callback();
        })
    });
    Given(/^User sees WHAT RIGHTS AND OBLIGATIONS DO YOU HAVE WITH RESPECT TO YOUR DATA header$/, function (callback) {
        keyword.expectVisible('Privacy_Policy_Dashboard|header_WHAT_RIGHTS_AND_OBLIGATIONS_DO_YOU_HAVE_WITH_RESPECT_TO_YOUR_DATA', function () {
            callback();
        })
    });

    Given(/^User should see link for Privacy Policy on page footer$/, function (done) {
        keyword.expectVisible('Dashboard_page|lnk_PrivacyPolicy', function () {
            done();
        })
    }),

        Given(/^User should see link for Cookie Policy on page footer$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_CookiePolicy', function () {
                done();
            })
        }),

        Given(/^User should see link for Terms of Use on page footer$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_TermsOfUse', function () {
                done();
            })
        }),

        Given(/^User should see link for Acceptable Use on page footer$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_acceptableUse', function () {
                done();
            })
        }),
        Given(/^User should see link for Help & Contacts on page footer$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_HelpAndContacts', function () {
                done();
            })
        }),
        Given(/^User clicks on Privacy Policy and Policy page should open in new tab with Privacy Policy dashboard$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_PrivacyPolicy', function () {
                keyword.performclick('Dashboard_page|lnk_PrivacyPolicy', function () {
                    keyword.swicthToWindowUsingTitle("Privacy Policy dashboard", function () {
                        done();
                    })

                })
            })
        }),
        Given(/^User clicks on Cookie Policy and Policy page should open in new tab with Cookie Policy dashboard$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_CookiePolicy', function () {
                keyword.performclick('Dashboard_page|lnk_CookiePolicy', function () {
                    keyword.swicthToWindowUsingTitle("Cookie Policy dashboard", function () {
                        done();
                    })

                })
            })
        }),
        Given(/^User clicks on Terms of Use and Policy page should open in new tab with title Terms of Use dashboard$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_TermsOfUse', function () {
                keyword.scrollToElementByLocatorIntoView('Dashboard_page|lnk_TermsOfUse', function () {
                    keyword.performclick('Dashboard_page|lnk_TermsOfUse', function () {
                        keyword.swicthToWindowUsingTitle("Terms of Use dashboard", function () {
                            done();
                        })

                    })
                })

            })
        }),
        Given(/^User clicks on Acceptable Use and Policy page should open in new tab with Acceptable Use$/, function (done) {
            keyword.expectVisible('Dashboard_page|lnk_acceptableUse', function () {
                keyword.performclick('Dashboard_page|lnk_acceptableUse', function () {
                    keyword.swicthToWindowUsingTitle("Acceptable Use", function () {
                        done();
                    })

                })
            })
        }),
        Given(/^System should display Privacy Policy content in defined Policy page design$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.expectVisible('', function () {
                    keyword.expectVisible('', function () {
                        keyword.expectVisible('', function () {
                            done();
                        })
                    })
                })
            })
        }),
        Given(/^System should display Cookie Policy content in defined Policy page design$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.expectVisible('', function () {
                    keyword.expectVisible('', function () {
                        keyword.expectVisible('', function () {
                            done();
                        })
                    })
                })
            })
        }),

        Given(/^System should display Terms of Use content in defined Policy page design$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.expectVisible('', function () {
                    keyword.expectVisible('', function () {
                        keyword.expectVisible('', function () {
                            done();
                        })
                    })
                })
            })
        }),

        Given(/^System should display Acceptable Use  content in defined Policy page design$/, function (done) {
            keyword.expectVisible('', function () {
                keyword.expectVisible('', function () {
                    keyword.expectVisible('', function () {
                        keyword.expectVisible('', function () {
                            done();
                        })
                    })
                })
            })
        });

    Given(/^User sees COOKIE POLICY DASHBOARD header$/, function (callback) {
        keyword.expectVisible('Cookies_Policy_Dashboard|header_CookiesPolicyDashBoard', function () {
            callback();
        })
    });
    Given(/^User sees WHAT IS A COOKIE$/, function (callback) {
        keyword.expectVisible('Cookies_Policy_Dashboard|header_WHAT_IS_A_COOKIE', function () {
            callback();
        })
    });
    Given(/^User sees HOW AND WHY WE USE COOKIES$/, function (callback) {
        keyword.expectVisible('Cookies_Policy_Dashboard|header_HOW_AND_WHY_WE_USE_COOKIES', function () {
            callback();
        })
    });
    Given(/^User sees KEEPING YOUR PERSONAL INFORMATION SAFE$/, function (callback) {
        keyword.expectVisible('Cookies_Policy_Dashboard|header_KEEPING_YOUR_PERSONAL_INFORMATION_SAFE', function () {
            callback();
        })
    });
    Given(/^User sees WHAT COOKIES DO WE USE ON OUR WEBSITE$/, function (callback) {
        keyword.expectVisible('Cookies_Policy_Dashboard|header_WHAT_COOKIES_DO_WE_USE_ON_OUR_WEBSITE', function () {
            callback();
        })
    });
    Given(/^User sees HOW TO MANAGE COOKIES THROUGH THE BROWSER$/, function (callback) {
        keyword.expectVisible('Cookies_Policy_Dashboard|header_HOW_TO_MANAGE_COOKIES_THROUGH_THE_BROWSER', function () {
            callback();
        })
    });


    Given(/^User sees TERMS OF USE DASHBOARD header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_TERMSOFUSEDASHBOARD', function () {
            callback();
        })
    });
    Given(/^User sees GENERAL header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_General', function () {
            callback();
        })
    });
    Given(/^User sees AVAILIBILITY AND ACCESS header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Availibility_and_Access', function () {
            callback();
        })
    });
    Given(/^User sees ACCESS DETAILS header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Access_Details', function () {
            callback();
        })
    });
    Given(/^User sees INFORMATION header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Information', function () {
            callback();
        })
    });
    Given(/^User sees YOUR USE header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Your_Use', function () {
            callback();
        })
    });
    Given(/^User sees OUR RIGHTS IN THIS WEBSITE header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Our_rights_in_this_Website', function () {
            callback();
        })
    });
    Given(/^User sees LINKING FROM THIS WEBSITE header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Linking_from_this_Website', function () {
            callback();
        })
    });
    Given(/^User sees LINKING TO THIS WEBSITE header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Linking_to_this_Website', function () {
            callback();
        })
    });
    Given(/^User sees APPLICABLE LAW header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Applicable_Law', function () {
            callback();
        })
    });
    Given(/^User sees CHANGES header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Changes', function () {
            callback();
        })
    });
    Given(/^User sees LIMITATION OF LIABILITY header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Limitation_of_Liability', function () {
            callback();
        })
    });
    Given(/^User sees CONTACT US header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Use_Dashboard|header_Contact_us', function () {
            callback();
        })
    });
    Given(/^User sees Acceptable Use header$/, function (callback) {
        keyword.expectVisible('Terms_Of_Acceptable_Use|header_Acceptable_Use', function () {
            callback();
        })
    });
    Given(/^User sees PROHIBITED USES$/, function (callback) {
        keyword.expectVisible('Terms_Of_Acceptable_Use|header_Prohibited_Uses', function () {
            callback();
        })
    });
    Given(/^User sees INTERACTIVE SERVICES$/, function (callback) {
        keyword.expectVisible('Terms_Of_Acceptable_Use|header_Interactive_Services', function () {
            callback();
        })
    });
    Given(/^User sees CONTENT STANDARDS$/, function (callback) {
        keyword.expectVisible('Terms_Of_Acceptable_Use|header_Content_Standards', function () {
            callback();
        })
    });
    Given(/^User sees CHANGES TO THE ACCEPTABLE USE POLICY$/, function (callback) {
        keyword.expectVisible('Terms_Of_Acceptable_Use|header_CHANGES_TO_THE_ACCEPTABLE_USE_POLICY', function () {
            callback();
        })
    });
    Given(/^User should see Privacy Policy on header and when clicks on it then privacy police is loaded in same window$/, function (callback) {
        keyword.expectVisible('Dashboard_page|lnk_HeaderPrivacyPolicy', function () {
            keyword.performclick('Dashboard_page|lnk_HeaderPrivacyPolicy', function () {
                keyword.expectVisible('Privacy_Policy_Dashboard|header_PrivacyPolicyDashBoard', function () {
                    keyword.getAndVerifyPageTitle('Privacy Policy dashboard', function () {
                        callback();
                    })
                })


            })
        })
    });
    Given(/^User should see Cookie Policy and when clicks on it then Cookie Policy is loaded in same window$/, function (callback) {
        keyword.expectVisible('Dashboard_page|lnk_HeaderCookiePolicy', function () {
            keyword.performclick('Dashboard_page|lnk_HeaderCookiePolicy', function () {
                keyword.expectVisible('Cookies_Policy_Dashboard|header_CookiesPolicyDashBoard', function () {
                    keyword.getAndVerifyPageTitle('Cookie Policy dashboard', function () {
                        callback();
                    })
                })


            })
        })
    });
    Given(/^User should see Terms of Use and when clicks on it then Terms of Use is loaded in same window$/, function (callback) {
        keyword.expectVisible('Dashboard_page|lnk_HeaderTermsOfUse', function () {
            keyword.performclick('Dashboard_page|lnk_HeaderTermsOfUse', function () {
                keyword.expectVisible('Terms_Of_Use_Dashboard|header_TERMSOFUSEDASHBOARD', function () {
                    keyword.getAndVerifyPageTitle('Terms of Use dashboard', function () {
                        callback();
                    })
                })

            })
        })
    });
    Given(/^User should see Help & Contacts and when clicks on it then Help & Contacts is loaded in same window$/, function (callback) {
        keyword.expectVisible('Dashboard_page|lnk_HeaderHelpAndContacts', function () {
            keyword.performclick('Dashboard_page|lnk_HeaderHelpAndContacts', function () {
                keyword.expectVisible('Terms_Of_Help_And_Contact|header_Need_Help_Want_To_Give_Feedback', function () {
                    keyword.getAndVerifyPageTitle('Help & Contacts dashboard', function () {
                        callback();
                    })
                });

            })
        })
    });

});


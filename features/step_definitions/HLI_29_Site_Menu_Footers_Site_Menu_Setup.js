/**
 * Created by amod-mahajan on 11/13/2017.
 */

var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^User sees Burger menu icon$/, function (callback) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            callback();
        })
    }),
        Given(/^I click the top left burger menu icon$/, function (callback) {
            keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|icon_Menu', function () {
                keyword.performclick('Dashboard_page|icon_Menu', function () {
                    callback();
                })
            })
            })
        }),
        Given(/^the task bar shows Home link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_Home', function () {
                callback();
            })
        }),

        Given(/^the task bar shows Health Age link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_HealthAge', function () {
                callback();
            })
        }),

        Given(/^the task bar shows Challenges & Badges link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_ChallengesAndBadges', function () {
                callback();
            })
        }),

        Given(/^the task bar shows Products & Services link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_ProductAndServices', function () {
                callback();
            })
        }),

        Given(/^the task bar shows Articles & Videos link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_ArticlesAndVideos', function () {
                callback();
            })
        }),
        Given(/^the task bar shows Digital Filing Cabinet link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_DigitalFilingCabinet', function () {
                callback();
            })
        }),
        Given(/^the task bar shows Help & Contacts link$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_HelpAndContactsAsSubmenu', function () {
                callback();
            })
        }),
        Given(/^I click a Home from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_Home', function () {
                keyword.performclick('Dashboard_page|lnk_Home', function () {
                    callback();
                })
            })
        }),

        Given(/^I click a Health Age from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_HealthAge', function () {
                keyword.performclick('Dashboard_page|lnk_HealthAge', function () {
                    callback();
                })
            })
        }),

        Given(/^I click a Challenges & Badges from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_ChallengesAndBadges', function () {
                keyword.performclick('Dashboard_page|lnk_ChallengesAndBadges', function () {
                    callback();
                })
            })
        }),
        Given(/^I click a Products & Services from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_ProductAndServices', function () {
                keyword.performclick('Dashboard_page|lnk_ProductAndServices', function () {
                    callback();
                })
            })
        }),
        Given(/^I click a Articles & Videos from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_ArticlesAndVideos', function () {
                keyword.performclick('Dashboard_page|lnk_ArticlesAndVideos', function () {
                    callback();
                })
            })
        }),
        Given(/^I click a Digital Filing Cabinet from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_DigitalFilingCabinet', function () {
                keyword.performclick('Dashboard_page|lnk_DigitalFilingCabinet', function () {
                    callback();
                })
            })
        }),
        Given(/^I click a Help & Contacts from the site menu$/, function (callback) {
            keyword.expectVisible('Dashboard_page|lnk_HelpAndContactsAsSubmenu', function () {
                keyword.performclick('Dashboard_page|lnk_HelpAndContactsAsSubmenu', function () {
                    callback();
                })
            })
        }),
        Given(/^I should be directed to the "([^"]*)" page in a new tab$/, function (title, callback) {
            keyword.switchToWindow(function () {
                keyword.waitTillTitleOfPageMacthesWithExpected(title, function () {
                    callback();
                })
            })
        }),

        Given(/^I should be directed to the "([^"]*)" page$/, function (title, callback) {
            keyword.waitTillTitleOfPageMacthesWithExpected(title, function () {
                callback();
            })
        });

    Given(/^The task bar shows "([^"]*)" submenu$/, function (SubmenuName, callback) {
        keyword.expectVisible('Dashboard_page|submenu_' + SubmenuName, function () {
            callback();
        })
    });
    Given(/^User clicks on "([^"]*)" submenu from burger menu$/, function (SubmenuName, callback) {
        keyword.expectVisible('Dashboard_page|submenu_' + SubmenuName, function () {
            keyword.performclick('Dashboard_page|submenu_' + SubmenuName, function () {
                keyword.customisedSleep(15000, function () {
                    callback();
                })
            })
        })
    });
    Given(/^User should be re\-directed to "([^"]*)" page$/, function (Title, callback) {
        keyword.getCurrentURL(function (url) {
            expect(url.toString().trim().includes(Title)).to.equal(true);
            callback();
        })
    });
    Given(/^User should be re\-directed to "([^"]*)" page in new tab$/, function (Title, callback) {
        keyword.switchToWindow(function () {
            keyword.waitTillTitleOfPageMacthesWithExpected(Title, function () {
                callback();
            })
        })
    });
    Given(/^"([^"]*)" submenu should be associated with appropriate icon$/, function (SubmenuName, callback) {
        keyword.expectVisible('Dashboard_page|iconImg_' + SubmenuName, function () {
            callback();
        })
    });
});


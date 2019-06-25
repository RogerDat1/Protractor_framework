var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^I have clicked on a keep reading to read full articles$/, function (done) {
        keyword.expectVisible('Articles_Videos|txt_Keep_Reading', function () {
            keyword.performclick('Articles_Videos|txt_Keep_Reading', function () {
                keyword.customisedSleep(10000, function () {
                    done();
                })
            });
        });
    });


    Given(/^I scroll down and click the bookmark icon$/, function (done) {
        //keyword.scrollToElementByLocatorIntoView('Articles_Videos|icon_LastBookMark', function () {
        keyword.expectPresence('Articles_Videos|icon_LastBookMark', function () {
            keyword.performclick('Articles_Videos|icon_LastBookMark', function () {
                    done();
                });
            });
        //});
    });
    Given(/^The icon changes colour to black$/, function (callback) {
        keyword.expectVisible('Articles_Videos|icon_Bookmarked', function () {
            keyword.getCssAttributeValue('Articles_Videos|icon_Bookmarked', "color", function (clr) {
                expect(clr).to.equal("rgba(64, 64, 64, 1)");
                callback();
            })
        });
    });
});
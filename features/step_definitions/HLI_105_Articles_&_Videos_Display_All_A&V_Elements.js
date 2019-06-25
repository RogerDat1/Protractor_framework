var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {


    Given(/^I am on the homepage view$/, function (done) {
        keyword.waitTillTitleOfPageMacthesWithExpected('Dashboard', function () {
            done();

        });
    });
    Given(/^I am on the Articles and Videos view$/, function (done) {
        keyword.waitTillTitleOfPageMacthesWithExpected('Dashboard', function () {
            done();

        });
    });
    Given(/^I should see Debt tab$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Debt', function () {
            done();
        });
    });
    Given(/^I should see Health tab$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Health', function () {
            done();
        });
    });
    Given(/^I scroll down to view an article$/, function (done) {
        keyword.scrollToElementByLocatorIntoView('Articles_Videos|confirm_Article', function () {
            keyword.expectVisible('Articles_Videos|confirm_Article1', function () {
                done();
            });
        });
    });
    Given(/^I should see an aligned header name 'Popular Articles'$/, function (done) {
        keyword.expectVisible('Articles_Videos|text_PopularArticle', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|text_PopularArticle', function () {
                done();
            });
        });
    });
    Given(/^I should see a Photo of popular Article$/, function (done) {
        keyword.expectVisible('Articles_Videos|popular_Article1_Img', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|popular_Article1_Img', function () {
                done();
            });
        });
    });
    Given(/^I should see a Photo of popular Title$/, function (done) {
        keyword.expectVisible('Articles_Videos|popular_Article1_Header', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|popular_Article1_Header', function () {
                done();
            });
        });
    });
    Given(/^I should see a Photo of popular description$/, function (done) {
        keyword.expectVisible('Articles_Videos|popular_Article1_Title', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|popular_Article1_Title', function () {
                done();
            });
        });
    });
    Given(/^I should see Insurance tab$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });
    Given(/^I should be shown a photo$/, function (done) {
        keyword.expectVisible('Articles_Videos|article1_Img', function () {
            done();
        });
    });
    Given(/^I should be shown a bookmark icon$/, function (done) {
        keyword.expectVisible('Articles_Videos|icon_FirstBookMark', function () {
            done();
        });
    });
    Given(/^I should be shown a date$/, function (done) {
        keyword.expectVisible('Articles_Videos|article1_Date', function () {
            done();
        });
    });
    Given(/^I should be shown a views$/, function (done) {
        keyword.expectVisible('Articles_Videos|article1_View', function () {
            done();
        });
    });
    Given(/^I should be shown a Article Title$/, function (done) {
        keyword.expectVisible('Articles_Videos|article1_Header', function () {
            done();
        });
    });
    Given(/^I should be shown a bookmark Summary$/, function (done) {
        keyword.expectVisible('Articles_Videos|article1_Text', function () {
            done();
        });
    });
    Given(/^I should be shown a bookmark Keep Reading$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
            done();
        });
    });


    Given(/^I should see and verify Menu$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            done();
        });
    });
    Given(/^I should see and verify HLI icon$/, function (done) {
        keyword.expectVisible('Login_Page|link_HLILogo', function () {
            done();
        });
    });
    Given(/^I should see and verify your profile$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Profile', function () {
            done();
        });
    });
    Given(/^I should see and verify all 2 catagory$/, function (done) {
        keyword.expectVisible('Articles_Videos|menu_Health', function () {
            keyword.expectVisible('Articles_Videos|menu_Insurance', function () {
                done();
            });
        });
    });
});
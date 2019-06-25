var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {

    Given(/^I have scrolled down on article page with promo cards enabled$/, function (done) {
        keyword.expectVisible('Articles_Videos|text_PopularArticle', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|text_PopularArticle', function () {
                done()
            });
        });
    });
    Given(/^I view the promo card in resources$/, function (done) {
        keyword.expectVisible('Articles_Videos|text_Resourse', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|text_Resourse', function () {
                done()
            });
        });
    });
    Given(/^I should see 'Short Summary'$/, function (done) {
        keyword.expectVisible('Articles_Videos|short_Discription_Resoursee', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|short_Discription_Resourse', function () {
                done()
            });
        });
    });
    Given(/^I should see 'Title'$/, function (done) {
        keyword.expectVisible('Articles_Videos|title_Resourse', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|title_Resourse', function () {
                done()
            });
        });
    });
    Given(/^I should see 'Image'$/, function (done) {
        keyword.expectVisible('Articles_Videos|img_Resourse', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|img_Resourse', function () {
                done()
            });
        });
    });
    Given(/^I should see the page refresh to display the promo_content$/, function (done) {
        keyword.expectVisible('Articles_Videos|text_PromoCardPage', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|text_PromoCardPage', function () {
                done()
            });
        });
    });
    Given(/^I view the promo cards in resources$/, function (done) {
        keyword.expectVisible('Articles_Videos|text_PopularArticle', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|text_PopularArticle', function () {
                done()
            });
        });
    });
    Given(/^I click on the Promo card$/, function (done) {
        keyword.expectVisible('Articles_Videos|text_PromoCard', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|text_PromoCard', function () {
                keyword.performclick('Articles_Videos|text_PromoCard', function () {
                    done()
                });
            });
        });
    });
    Given(/^I should see no more than 6 promo cards displayed$/, function (done) {
        keyword.expectVisible('Articles_Videos|lst_PromoCard', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|lst_PromoCard', function () {
                keyword.getElementsCount("Articles_Videos|lst_PromoCard", function (length) {
                    let i = 1;
                    if (i <= length <= 6) {
                        done();
                    }
                    else
                        throw "More then Six promo cards are displayed "
                    done();

                });
            });
        });

    });
    Given(/^a minimum of 1 promo card$/, function (done) {
        keyword.expectVisible('Articles_Videos|lst_PromoCard', function () {
            keyword.scrollToElementByLocatorIntoView('Articles_Videos|lst_PromoCard', function () {
                keyword.getElementsCount("Articles_Videos|lst_PromoCard", function (length) {
                    let i = 1;
                    if (i <= length <= 1) {
                        done();
                    }
                    else
                        throw "No promo cards are displayed "
                    done();

                });
            });
        });

    });
});
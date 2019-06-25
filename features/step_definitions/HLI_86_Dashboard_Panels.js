var {defineSupportCode} = require("cucumber");
var webelement = require('../../testObjects/appWebObjects.js')


defineSupportCode(function ({Given}) {
    Given(/^User is logged in HLI dashboard$/, function (done) {
        keyword.waitTillTitleOfPageMacthesWithExpected('Dashboard', function () {
            done();
        });
    });
    Given(/^System loads standard HLI 'dashboard features'$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Summary', function () {
            keyword.expectVisible('Dashboard_page|icon_Data', function () {
                done();
            });
        });
    });
    Given(/^User should be able to see 'Dashboard image'$/, function (done) {
        keyword.expectVisible('Dashboard_page|img_Dashboard_Background', function () {
            done();
        });
    });
    Given(/^User should be able to see 'Health Age Large Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Health_Module', function () {
            done();
        });
    });
    Given(/^User should be able to see 'Default Article Large Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Explore_Module', function () {
            done();
        });
    });
    Given(/^User should be able to see 'Recommended Article Large Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Recommended_Module', function () {
            done();
        });
    });
    Given(/^User should be able to see 'Bookmarked Articles Large Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Bookmarked_Articles', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|title_Bookmarked_Articles', function () {
                done();
            });
        });
    });
    Given(/^User should be able to see 'DFC Small Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_DFC_Small_Panel', function () {
            done();
        });
    });
    Given(/^User should be able to see 'Products & Services Small Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Products_Services', function () {
            done();
        });
    });

    Given(/^User should be able to see 'Quick Links Large Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Quick_Links', function () {
            done();
        });
    });
    Given(/^User should be able to see 'You & Your Employer Large Panel'$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Employer_Large_Panel', function () {
            done();
        });
    });
    Given(/^User views background image$/, function (done) {
        keyword.expectVisible('Dashboard_page|img_Dashboard_Background', function () {
            done();
        });
    });

    Given(/^User views the Health Age score panel$/, function (done) {
        keyword.scrollToElementByLocatorIntoView('Dashboard_page|title_Health_Module', function () {
            keyword.expectVisible('Dashboard_page|Health_Age_Score_Panel', function () {
                done();
            });
        });
    });
    Given(/^panel should include other links maxim 4 for navigation to relevant content site$/, function (done) {
        keyword.expectVisible('Dashboard_page|Health_Link_One', function () {
            keyword.expectVisible('Dashboard_page|Health_Link_Two', function () {
                keyword.expectVisible('Dashboard_page|Health_Link_Three', function () {
                    var EC = protractor.ExpectedConditions;
                    let locator = webelement.Dashboard_page.Health_Link_Count.selector;
                    let list = element.all(by.xpath(locator));
                    list.count().then(function (count) {
                        if (count <= 4) {
                            //console.log("count is less then 4")

                        }
                        if (count > 4) {
                            throw 'links are more than 4 ';

                        }
                        done();
                    });

                });
            });
        });

    });
    Given(/^User can see two large article under explore articles panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|Explore_Article1', function () {
            keyword.expectVisible('Dashboard_page|Explore_Article2', function () {

                done();
            });
        });
    });


    Given(/^User can see two small article$/, function (done) {
        keyword.expectVisible('Dashboard_page|Explore_Article3', function () {
            keyword.expectVisible('Dashboard_page|Explore_Article4', function () {

                done();
            });
        });
    });
    Given(/^User logged out as defalut user$/, function (done) {
        keyword.expectVisible('Dashboard_page|lnk_profileIcon', function () {
            keyword.performclick('Dashboard_page|lnk_profileIcon', function () {
                keyword.expectVisible('Dashboard_page|lnk_logout', function () {
                    keyword.performclick('Dashboard_page|lnk_logout', function () {
                        done();
                    });
                });
            });
        });
    });


    Given(/^panel should include a description text below Title$/, function (done) {
        keyword.expectVisible('Dashboard_page|Title_Sub_Health', function () {
            done();
        });
    });

    Given(/^User scrolls to the explore articles panel$/, function (done) {
        keyword.scrollToElementByLocatorIntoView('Dashboard_page|title_Recommended_Module', function () {

            done();
        });
    });
    Given(/^panel should include Title for Health module$/, function (done) {
        keyword.expectVisible('Dashboard_page|Icon_Health', function () {
            done();
        });
    });
    Given(/^Panel should include 2 articles with image tiles newest 1 & 2 by publish date$/, function (done) {
        keyword.expectVisible('Dashboard_page|img_Explore_Articles1', function () {
            keyword.expectVisible('Dashboard_page|img_Explore_Articles2', function () {
                keyword.getElementsCount('Dashboard_page|img_Explore_Articles_TwoImg', function (count) {
                    expect(count.toString().trim()).to.be.equal("2");
                    done();
                });
            });
        });
    });
    Given(/^Panel should include 2 articles without image tiles newest 3 & 4 by publish date$/, function (done) {
        keyword.getElementsCount('Dashboard_page|Explore_Article3', function (count) {
            expect(count.toString().trim()).to.be.equal("1");
            keyword.getElementsCount('Dashboard_page|Explore_Article4', function (count) {
                expect(count.toString().trim()).to.be.equal("1");
                done();
            });
        });
    });
    Given(/^panel should include icon for Health$/, function (done) {
        keyword.expectVisible('Dashboard_page|Title_Health', function () {
            done();
        });
    });
    Given(/^User has bookmarked at least one articles$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|icon_Menu', function () {
                keyword.performclick('Dashboard_page|icon_Menu', function () {
                    keyword.expectVisible('Dashboard_page|submenu_ArticlesAndVideos', function () {
                        keyword.performclick('Dashboard_page|submenu_ArticlesAndVideos', function () {
                            keyword.expectVisible('Articles_Videos|icon_FirstBookMark', function () {
                                console.log("1");
                                keyword.expectVisible('Articles_Videos|icon_SecondBookMark', function () {
                                    console.log("2");
                                    keyword.expectVisible('Articles_Videos|txt_AtSecondBookMark', function () {
                                        console.log("3");
                                        done();
                                    });
                                });

                            })
                        })
                    })
                })
            })

        });
    });
    Given(/^User navigates to Dashboard$/, function (done) {
        keyword.expectVisible('Dashboard_page|icon_Menu', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|icon_Menu', function () {
                keyword.performclick('Dashboard_page|icon_Menu', function () {
                    keyword.expectVisible('Dashboard_page|submenu_Home', function () {
                        keyword.performclick('Dashboard_page|submenu_Home', function () {
                            done();
                        });
                    });
                });
            });
        });
    });
    Given(/^Dashboard should include Bookmarked articles panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Bookmarked_Articles', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|title_Bookmarked_Articles', function () {
                keyword.expectVisible('Dashboard_page|txt_AtSecondBookMarkOnBookMarrkArticle', function () {
                    done();
                });
            });
        });
    });

    Given(/^panel should include other links (maximum 4) for navigation to relevant content site$/, function (done) {
        done();
    });
    Given(/^panel should capture Health Age of User$/, function (done) {
        keyword.expectVisible('Dashboard_page|Health_Score', function () {
            done();
        });
    });
    Given(/^panel should include button to navigate to Health Summary$/, function (done) {
        keyword.expectVisible('Dashboard_page|Button_Health_Summary', function () {
            done();
        });
    });
    Given(/^panel should include See less chevron to minimise the card view for the selected Card$/, function (done) {
        keyword.expectVisible('Dashboard_page|Health_SeeLess', function () {
            done();
        });

    });
    Given(/^User can move panel for re-ordering$/, function (done) {
        done();


    });


    Given(/^User scrolls to Products & Services DFC Small panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_DFC_Small_Panel', function () {
            done();
        });
    });
    Given(/^User should see both small panels placed side by side$/, function (done) {
        keyword.expectVisible('Dashboard_page|location_DFC_SideBySide', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|location_DFC_SideBySide', function () {
                keyword.getTextOfElement('Dashboard_page|location_DFC_SideBySide', function (text) {
                    text.includes("PRODUCTS AND SERVICES")
                    done();
                });
            });
        });
    });
    Given(/^User scrolls to Quick links panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Quick_Links', function () {
            done();
        });
    });
    Given(/^Panel should include Quicklink_image$/, function (done) {
        keyword.expectVisible('Dashboard_page|quickLink_Img', function () {
            done();
        });
    });
    Given(/^User can move both small panels together for re-ordering$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_DFC_Small_Panel', function () {
            done();
        });
    });
    Given(/^Panel should include Quicklink_Name$/, function (done) {
        keyword.expectVisible('Dashboard_page|quickLink_Name', function () {
            done();
        });
    });
    Given(/^Panel should include Quicklink_link$/, function (done) {
        keyword.expectVisible('Dashboard_page|quickLink_Link', function () {
            done();
        });
    })
    Given(/^User scrolls to You & Your Employer Panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Employer_Large_Panel', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|title_Employer_Large_Panel', function () {
                done();
            });
        });
    });
    Given(/^User should see read Article in the panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|btn_ReadArticle', function () {
            done();
        });
    });
    Given(/^Only the headline is displayed in the panels$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Explore_Module', function () {
            keyword.expectVisible('Dashboard_page|title_Bookmarked_Articles', function () {
                keyword.expectVisible('Dashboard_page|Title_Health', function () {
                    done();
                });
            });
        });
    });
    Given(/^All dashboard panels collapse$/, function (done) {
        keyword.expectNotVisible('Dashboard_page|Explore_Article1', function () {
            keyword.expectNotVisible('Dashboard_page|show_More_BookMark', function () {
                keyword.expectNotVisible('Dashboard_page|Health_Link_One', function () {
                    done();
                });
            });
        });
    });
    Given(/^I click the 'panel_toggle' to Off$/, function (done) {
        keyword.expectVisible('Dashboard_page|toggle_DashBoard', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|toggle_DashBoard', function () {
                keyword.performclick('Dashboard_page|toggle_DashBoard', function () {
                    done();
                });
            });
        });
    });
    Given(/^Headline, sub header information is displayed$/, function (done) {
        keyword.expectVisible('Dashboard_page|title_Explore_Module', function () {
            keyword.expectVisible('Dashboard_page|title_Bookmarked_Articles', function () {
                keyword.expectVisible('Dashboard_page|Title_Health', function () {
                    done();
                });
            });
        });
    });
    Given(/^All dashboard panels stack open$/, function (done) {
        keyword.expectVisible('Dashboard_page|Explore_Article1', function () {
            keyword.expectVisible('Dashboard_page|show_More_BookMark', function () {
                keyword.expectVisible('Dashboard_page|Health_Link_One', function () {
                    done();
                });
            });
        });
    });
    Given(/^I click the 'panel_toggle' to On$/, function (done) {
        keyword.expectVisible('Dashboard_page|toggle_DashBoard', function () {
            keyword.scrollToElementByLocatorIntoView('Dashboard_page|toggle_DashBoard', function () {
                keyword.performclick('Dashboard_page|toggle_DashBoard', function () {
                    done();
                });
            });
        });
    });
    Given(/^The panel state is saved in the new order set by user$/, function (done) {
        keyword.expectVisible('Dashboard_page|quickLink_Link', function () {
            done();
        });
    });
    Given(/^I arrange it in a different order$/, function (done) {
        keyword.expectVisible('Dashboard_page|quickLink_Link', function () {
            done();
        });
    });
    Given(/^I click to drag a panel$/, function (done) {
        keyword.expectVisible('Dashboard_page|quickLink_Link', function () {
            done();
        });
    });
});




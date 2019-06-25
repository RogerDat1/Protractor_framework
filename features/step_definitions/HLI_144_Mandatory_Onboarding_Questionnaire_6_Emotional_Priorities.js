/**
 * Created by amod-mahajan on 1/10/2018.
 */

var {defineSupportCode} = require("cucumber");
var orderBeforeDragAndDrop;
var orderAfterDragAndDrop;


defineSupportCode(function ({Given}) {

    Given(/^User navigates to Physical Priorities screen$/, function (done) {
        keyword.expectVisible('Physical_Priorities|header_physicalPriorities', function () {
            done();
        })
    });

    Given(/^It should be first screen of on-boarding journey$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_numberOfScreen', function () {
            done();
        })
    });

    Given(/^Physical Priorities screen should be displayed as a pop up screen$/, function (done) {
        keyword.expectVisible('Physical_Priorities|popup_physicalPriorities', function () {
            done();
        })
    });
    Given(/^User should see Screen Title as Physical Priorities$/, function (done) {
        keyword.expectVisible('Physical_Priorities|header_physicalPriorities', function () {
            done();
        })
    });

    Given(/^User should see Screen Description for Physical Priorities$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_physicalPrioritiesDescription', function () {
            done();
        })
    });
    Given(/^User should see Nutrition as first priority area$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_firstPhysicalPriorities', function () {
            done();
        })
    });
    Given(/User should see Fitness as second priority area$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_secondPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User should see Heart Health as third priority area$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_thirdPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User should see Substance Usage as fourth priority area$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_fourthPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User should see BMI - Weight as fifth priority area$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_fifthPhysicalPriorities', function () {
            done();
        })
    });
    Given(/User should see Connect an App Tracker link$/, function (done) {
        keyword.expectVisible('Physical_Priorities|btn_connectToTracker', function () {
            done();
        })
    });
    Given(/^User should see button to next screen enabled by default$/, function (done) {
        keyword.expectVisible('Physical_Priorities|btn_next', function () {
            done();
        })
    });
    Given(/^User should see button to previous screen enabled by default$/, function (done) {
        keyword.expectVisible('Physical_Priorities|btn_Previous', function () {
            done();
        })
    });
    Given(/^User Clicks on any Nutrition icon$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_firstPhysicalPriorities', function () {
            keyword.performclick('Physical_Priorities|lbl_firstPhysicalPriorities', function () {
                done();
            })
        })
    });
    Given(/^System should display Nutrition below$/, function (done) {
        keyword.expectVisible('Physical_Priorities|txt_firstPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User Clicks on any Fitness icon$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_secondPhysicalPriorities', function () {
            keyword.performclick('Physical_Priorities|lbl_secondPhysicalPriorities', function () {
                done();
            })
        })
    });
    Given(/^System should display Fitness below$/, function (done) {
        keyword.expectVisible('Physical_Priorities|txt_secondPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User Clicks on any Heart Health icon$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_thirdPhysicalPriorities', function () {
            keyword.performclick('Physical_Priorities|lbl_thirdPhysicalPriorities', function () {
                done();
            })
        })
    });
    Given(/^System should display Heart Health below$/, function (done) {
        keyword.expectVisible('Physical_Priorities|txt_thirdPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User Clicks on any Substance Usage icon$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_fourthPhysicalPriorities', function () {
            keyword.performclick('Physical_Priorities|lbl_fourthPhysicalPriorities', function () {
                done();
            })
        })
    });
    Given(/^System should display Substance Usage below$/, function (done) {
        keyword.expectVisible('Physical_Priorities|txt_fourthPhysicalPriorities', function () {
            done();
        })
    });
    Given(/^User Clicks on any BMI - Weight icon$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_fifthPhysicalPriorities', function () {
            keyword.performclick('Physical_Priorities|lbl_fifthPhysicalPriorities', function () {
                done();
            })
        })
    });
    Given(/^System should display BMI - Weight below$/, function (done) {
        keyword.expectVisible('Physical_Priorities|txt_fifthPhysicalPriorities', function () {
            done();
        })
    });

    Given(/^User drags any Priority Area icon to a new order in sequence$/, function (done) {
        keyword.expectVisible('Physical_Priorities|lbl_firstPhysicalPriorities', function () {
            keyword.dragNdrop('Physical_Priorities|lbl_firstPhysicalPriorities', 'Physical_Priorities|lbl_fifthPhysicalPriorities', function () {
                done();
            })
        })

    });


    Given(/^System should display Priority Area icon in new location$/, function (done) {
        keyword.expectVisible('Physical_Priorities|txt_fifthPhysicalPriorities', function () {
            done();
        })
    });

    Given(/^User clicks 'Next' in Priority Areas survey screen$/, function (done) {
        keyword.expectVisible('Physical_Priorities|btn_next', function () {
            done();
        })
    });

    Given(/^User should navigate to next survey screen$/, function (done) {
        keyword.expectVisible('XXXX', function () {
            done();
        })
    });

    Given(/^User has not changed physical priorities$/, function (done) {
        keyword.expectVisible('XXXX', function () {
            done();
        })
    });

    Given(/^Priority Area should be saved in default order$/, function (done) {
        keyword.expectVisible('XXXX', function () {
            done();
        })
    });
    Given(/^Priority Area should be saved in order set by User$/, function (done) {
        keyword.expectVisible('XXXX', function () {
            done();
        })
    });
    Given(/^User clicks 'Previous' in Priority Areas survey screen$/, function (done) {
        keyword.expectVisible('Physical_Priorities|btn_Previous', function () {
            done();
        })
    });

    Given(/^User should see "([^"]*)" as a emotional priority at "([^"]*)" screen$/, function (PhysicalPriority, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|emotionalPriorityName_' + PhysicalPriority, function () {
            callback();
        })
    });
    Given(/^User clicks on "([^"]*)" emotional priority at "([^"]*)" screen$/, function (PhysicalPriority, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|emotionalPriorityName_' + PhysicalPriority, function () {
            keyword.performclick('Screen_' + PageName + '|emotionalPriorityName_' + PhysicalPriority, function () {
                keyword.customisedSleep(2000, function () {
                    callback();
                })
            })
        })
    });
    Given(/^User should see emotional priority "([^"]*)" header below at "([^"]*)" screen$/, function (PhysicalPriority, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|emotionalPriorityHeader_' + PhysicalPriority, function () {
            keyword.getTextOfElement('Screen_' + PageName + '|emotionalPriorityHeader_' + PhysicalPriority, function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['emotionalPriorityName_' + PhysicalPriority].header);
                callback();
            })
        })
    });
    Given(/^User should see emotional priority "([^"]*)" description below at "([^"]*)" screen$/, function (PhysicalPriority, PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|emotionalPriorityDescription_' + PhysicalPriority, function () {
            keyword.getTextOfElement('Screen_' + PageName + '|emotionalPriorityDescription_' + PhysicalPriority, function (text) {
                expect(text.toString().trim()).to.equal(HLIData['Screen_' + PageName]['emotionalPriorityName_' + PhysicalPriority].about);
                callback();
            })
        })
    });

    Given(/^User see existing order of emotional priorities at "([^"]*)" screen$/, function (PageName, callback) {
        getAllPhysicalPrioritiesName(function (order1) {
            orderBeforeDragAndDrop = order1;
            console.log(orderBeforeDragAndDrop)
            callback();
        });
    });

    Given(/^User drags a emotional priority and drop at "([^"]*)" screen$/, function (PageName, callback) {
        keyword.dragNdrop('Screen_PhysicalPriorities|first', 'Screen_PhysicalPriorities|Five', function () {
            callback();
        })
    });

    Given(/^User see new order of emotional priorities at "([^"]*)" screen$/, function (PageName, callback) {
        getAllPhysicalPrioritiesName(function (order2) {
            orderAfterDragAndDrop = order2;
            console.log(orderAfterDragAndDrop)
            callback();
        });
    });

    Given(/^Existing and new order should be different at Emotional Priorities screen$/, function (callback) {
        expect(JSON.stringify(orderBeforeDragAndDrop) === JSON.stringify(orderAfterDragAndDrop)).to.equal(false);
        callback();
    });


    Given(/^User see default order of emotional priorities at "([^"]*)" screen$/, function (PageName, callback) {
        getAllPhysicalPrioritiesName(function (order1) {
            orderBeforeDragAndDrop = order1;
            console.log(orderBeforeDragAndDrop)
            expect(JSON.stringify(orderBeforeDragAndDrop)).to.equal(HLIData['Screen_' + PageName].screen_Design.defaultOrder);
            callback();
        });
    });
    Given(/^User clicks on next without modifying default order of emotional priorities at "([^"]*)" screen$/, function (PageName, callback) {
        keyword.expectVisible('Screen_' + PageName + '|btn_Next', function () {
            keyword.performclick('Screen_' + PageName + '|btn_Next', function () {
                keyword.customisedSleep(10000, function () {
                    callback();
                })
            })
        })
    });
});


function getAllPhysicalPrioritiesName(callback) {
    var optns = [], count = 0;
    element.all(by.xpath("//hm-drag-and-drop-vertical-item//div[@class='left-item']")).then(function (elements) {
        elements.forEach(function (ele) {
            ele.getText().then(function (text) {
                count = count + 1;
                optns.push(text.toString().trim());
                if (count === elements.length) {
                    callback(optns);
                }
            });
        });
    });
}







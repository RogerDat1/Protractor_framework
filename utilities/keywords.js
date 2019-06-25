/**
 * Created by sudip-prasad on 7/17/2017.
 */
let webObjects = require('./../utilities/webObjectHandler.js');
let Random = require("random-js");

/*******************************************************************************
 * Function Description: setText - this function used to click on the web element
 * Created Date : 07/15/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function click(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isDisplayed();
        }, 5000).then(function () {
            webObj.click().then(function () {
                callback();
            });
        })
    });
}

function checkPresenceAndClick(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isPresent();
        }, 5000).then(function () {
            webObj.click().then(function () {
                callback();
            });
        })
    });
}


function clickByJavascript(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isPresent();
        }, 5000).then(function () {
            browser.executeScript("arguments[0].click();", webObj);
            callback();
        })
    });
}


function setAttribute(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isPresent();
        }, 5000).then(function () {
            browser.executeScript("arguments[0].setAttribute('style','left:50%');", webObj).then(function () {
                    callback();
                }
            )

        })
    });
}
/*******************************************************************************
 * Function Description: setText - this function used to set the text into input box
 * Created Date : 07/15/2017
 * Created by : Muthupondi
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function setText(locator, data, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isPresent();
        }, 10000).then(function () {
            webObj.clear();
            customisedSleep(2000, function () {
                webObj.sendKeys(data).then(function () {
                    // console.log("Value has been passed")
                    callback();
                });
            })

        })
    });
}

/*******************************************************************************
 * Function Description: expectVisible - this function used to verify web element should be displayed on the page
 * Created Date : 11/02/2017
 * Created by : Muthupondi
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/

/*function expectVisible(locator,callback) {
 console.log("dfgdsgfdg");
 webObjects.getWebElement(locator, function (webObj) {
 var EC = protractor.ExpectedConditions;
 var a = browser.wait(EC.visibilityOf(webObj), 10000)
 a.then(function (isvisible) {
 if (isvisible) {
 console.log("Element Exists");
 callback();}
 else if(!isvisible) {
 console.log("Element doesn't Exists");
 callback();}
 });
 });
 }*/


function expectVisible(locator, callback) {

    webObjects.getWebElement(locator, function (webObj) {
        var EC = protractor.ExpectedConditions;
        var a = browser.wait(EC.visibilityOf(webObj), 30000);
        a.then(function () {
                //console.log("Element Exists");
                callback();
            },
            function (err) {
                console.log(err)
                throw("Element not Exists");

            });
    });
}

function expectPresence(locator, callback) {

    webObjects.getWebElement(locator, function (webObj) {
        var EC = protractor.ExpectedConditions;
        var a = browser.wait(EC.presenceOf(webObj), 30000);
        a.then(function () {
                //console.log("Element Exists");
                callback();
            },
            function (err) {
                console.log(err)
                throw("Element not Exists");

            });
    });
}

/*******************************************************************************
 * Function Description: ExpectNotVisible1 - this function used to verify web element shouldn't be displayed
 * Created Date : 11/12/2017
 * Created by : Muthupondi
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectNotVisible(locator, callback) {

    webObjects.getWebElement(locator, function (webObj) {
        try {
            webObj.isPresent().then(function (present) {
                if (!present) {
                    callback(true);
                } else {
                    //throw("Element exists which should not.");
                    callback(false);
                }

            });
        } catch (e) {
            callback(false);
        }
    });
}

function expectNotPresent(locator, callback) {

    webObjects.getWebElement(locator, function (webObj) {
        var EC = protractor.ExpectedConditions;
        var a = browser.wait(EC.presenceOf(webObj), 10000);
        a.then(function () {
                throw("Element exists. Expectation is element should not be present.");

            },
            function (err) {
                callback();

            });
    });
}



/*******************************************************************************
 * Function Description: getDisplayStatus - this function used to check visibility of web element
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: boolean (True/False)
 *********************************************************************************/
function getDisplayStatus(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isDisplayed();
        }, 5000).then(function (isVisible) {
            callback(isVisible);
        });
    });
}

/***************************************************************************
 DropDown Value
 */
function getDropdownvalues(locator, callback) {
    var values = [];

    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isDisplayed();
        }, 5000).then(function () {
            webObj.all(by.tagName('option')).then(function (options) {
                options.forEach(function (option) {
                    option.getText().then(function (v) {
                        values.push(v.trim())
                    });
                });
            });
        }).then(function () {
            callback(values);
        })
    });

}


/*******************************************************************************
 * Function Description: expectEnabled - this function used to verify web element should be enabled in state
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectEnabled(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isEnabled();
        }, 5000).then(function (isEnabled) {
            expect(isEnabled);
            callback();
        });
    });
}


function isElementSelected(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isEnabled();
        }, 5000).then(function (isEnabled) {
            expect(isEnabled);
            callback();
        });
    });
}

/*******************************************************************************
 * Function Description: expectDisabled - this function used to verify web element shouldn't be enabled in state
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: pass or fail the script
 *********************************************************************************/
function expectDisabled(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isEnabled();
        }, 5000).then(function (isEnabled) {
            expect(!isEnabled);
            callback();
        });
    });
}

/*******************************************************************************
 * Function Description: dragNdrop - this function used to drag and drop first web element over second web element
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName1|ObjectName1" and "PageName2|ObjectName2"
 * Output: pass the script if performed successfully
 *********************************************************************************/
function dragNdrop(locator1, locator2, callback) {
    webObjects.getWebElement(locator1, function (webObj1) {
        webObjects.getWebElement(locator2, function (webObj2) {
            browser.wait(function () {
                return webObj1.isDisplayed();
            }, 5000).then(function () {
                browser.actions().dragAndDrop(webObj1, webObj2).perform().then(function () {
                    callback();
                });
            });
        });
    });
}

/*******************************************************************************
 * Function Description: getEnabledStatus - this function get true in case of web element is enabled state and false if the web element is disabled
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: boolean
 *********************************************************************************/
function getEnabledStatus(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isEnabled();
        }, 5000).then(function (isEnabled) {
            callback(isEnabled);
        });
    });
}

/*******************************************************************************
 * Function Description: getElementsCount - this function get integer number dependence on how many element that locator corresponds to
 * Created Date : 07/20/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: Integer
 *********************************************************************************/
function getElementsCount(locator, callback) {
    webObjects.getByObject(locator, function (by_obj) {
        browser.wait(function () {
            return element.all(by_obj);
        }, 5000).then(function (elements) {
            callback(elements.length);
        });
    });
}

/*******************************************************************************
 * Function Description: selectList - this function get integer number dependence on how many element that locator corresponds to
 * Created Date : 10/20/2017
 * Created by : Muthupondi
 * Input: locator in format "PageName|ObjectName"
 * Output: pass the script if performed successfully
 *********************************************************************************/
function selectByVisibleText(locator, data, callback) {

    let flag = false;
    webObjects.getWebElement(locator, function (webObj) {
        browser.wait(function () {
            return webObj.isDisplayed();
        }, 5000).then(function () {
            webObj.all(by.tagName('option')).then(function (options) {
                options.forEach(function (option) {
                    option.getText().then(function (text) {
                        if (text.toString().trim() === data.trim()) {
                            option.click();
                            flag = true;
                        }
                    });
                });
            });
        }).then(function () {
            if (flag === false)
                throw "Nothing Selected"
            callback();
        }).catch(function (error) {
            throw error
        })
    });
}


/*******************************************************************************
 * Function Description: selectList - this function get integer number dependence on how many element that locator corresponds to
 * Created Date : 10/20/2017
 * Created by : Muthupondi
 * Input: locator in format "PageName|ObjectName"
 * Output: pass the script if performed successfully
 *********************************************************************************/

/*function selectValueFromClickableListbox(Menu, SubMenu, data, callback) {
    try {
        var flag = false;
        webObjects.getWebElement(Menu, function (webObj) {
            browser.wait(function () {
                return webObj.isDisplayed();
            }, 10000).then(function () {
                keyword.scrollToElementByLocatorIntoView(Menu, function () {
                    keyword.performclick(Menu, function () {
                        browser.executeScript('window.scrollTo(0,0);').then(function () {
                            webObjects.getWebElements(SubMenu, function (webObjs) {
                                browser.executeScript('window.scrollTo(0,0);').then(function () {
                                    webObjs.forEach(function (ele) {
                                        ele.getText().then(function (text) {
                                            if (text.toString().trim() === data) {

                                                    ele.click();
                                                    flag = true;;
                                                if (flag) {
                                                        callback();
                                                }
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    })

                });
            });
        });
    } catch (e) {
        console.log(e);
        console.log("Unable to select")
        expect(false);
        callback();
    }
}*/

function selectValueFromClickableListbox(Menu, SubMenu, data, callback) {
    var flag = false;
    webObjects.getWebElement(Menu, function (webObj) {
        browser.wait(function () {
            return webObj.isDisplayed();
        }, 10000).then(function () {
            keyword.scrollToElementByLocatorIntoView(Menu, function () {
                keyword.performclick(Menu, function () {
                    browser.executeScript('window.scrollTo(0,0);').then(function () {
                        webObjects.getWebElements(SubMenu, function (webObjs) {
                            browser.executeScript('window.scrollTo(0,0);').then(function () {
                                webObjs.forEach(function (ele) {
                                    ele.getText().then(function (text) {
                                        console.log(text.toString().trim() + "a")
                                        console.log(data.toString().trim() + "a")
                                        if (text.toString().trim() + "a" === data.toString().trim() + "a") {

                                            ele.click();
                                            flag = true;
                                            if (flag) {
                                                callback();
                                            }
                                        }
                                    });
                                });
                            });
                        });
                    });
                })

            });
        }).then(function () {
            if (flag === false)
                throw "Nothing Selected"
        }).catch(function (error) {
            //console.log("Handled")
            callback();
        })
    });

}


function selectValueFromClickableListbox1(Menu, SubMenu, data, callback) {
    try {
        console.log(1)
        var flag = false;
        webObjects.getWebElement(Menu, function (webObj) {
            browser.wait(function () {
                return webObj.isDisplayed();
            }, 10000).then(function () {
                console.log(2)
                //keyword.scrollToElementByLocatorIntoView(Menu, function () {
                keyword.performclick(Menu, function () {
                    console.log(3)
                    browser.executeScript('window.scrollTo(0,200);').then(function () {
                        webObjects.getWebElements(SubMenu, function (webObjs) {
                            browser.executeScript('window.scrollTo(0,200);').then(function () {
                                someName(webObjs, data, function () {
                                    callback();
                                })
                            });
                        });
                    });
                })

                //});
            });
        });
    } catch (e) {
        console.log(e);
        console.log("Unable to select")
        expect(false);
        callback();
    }
}

function someName(webObjs, data, callback) {
    try {
        webObjs.forEach(function (ele) {
            ele.getText().then(function (text) {
                console.log(text)
                if (text.toString().trim() === data) {
                    ele.click();
                    flag = true;
                    if (flag)
                        callback();
                }
            });
        });
    } catch (err) {
        console.log("rruyuire")
    }
}

function scrollToelementPosition(coordinate, callback) {
    browser.sleep(2000);
    browser.executeScript('window.scrollTo(0,700);').then(function () {
        console.log("Scrolled to the given position");
        callback();
    });
}

function scrollToelement(coordinate, locator, callback) {
    browser.sleep(2000);
    webObjects.getWebElement(locator, function (webObj) {
        console.log(webObj.getLocation());
        callback();
    });
}


function customisedSleep(waitTime, callback) {
    browser.sleep(waitTime).then(function () {
        callback();
    });


}

/********************************************************************************************
 * Function Description: getRandom - it is used to get different types of random data like, date, phone number, number or text etc
 * Created Date : 07/18/2017
 * Created by : Sudip Prasad
 * Input: random type eg. "date", phone_number"
 * Output: pass the script if performed successfully
 ********************************************************************************************/
function getRandom(data, optArgs, callback) {
    let randomParameters = optArgs || 1;
    let randomValue = "";
    let possText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    switch (data) {
        case "text":
            for (let i = 0; i < randomParameters; i++) {
                randomValue += possText.charAt(Math.floor(Math.random() * possText.length));
            }
            break;
        case "integer":
            fnRandomInteger(function (integer) {
                callback(integer);
            });
            break;
        case "number":
            fnRandomNumber(randomParameters, function (rand_num) {
                callback(rand_num);
            });
            break;
        case "phone_number":
            fnRandomPhoneNumber(function (rand_number) {
                callback(rand_number);
            });
            break;
        case "date":
            fnRandomDate(function (date) {
                callback(date);
            });
            break;
        case "email":
            fnRandomEmailId(function (email) {
                callback(email);
            });
            break;
    }
}

function fnRandomEmailId(callback) {
    var max = 9, min = 0, str = "", i;
    for (i = 0; i < 5; i++) {
        str = str + Math.floor(Math.random() * (max - min) + min);
    }
    return callback('email' + str + '@mercer.com');
}

function fnRandomPhoneNumber(callback) {
    var max = 9, min = 0, str = "", i;
    for (i = 0; i < 10; i++) {
        str = str + Math.floor(Math.random() * (max - min) + min);
    }
    return callback(str);
}

function fnRandomInteger(min, max, callback) {
    return callback(min + Math.floor(Math.random() * (max - min + 1)));
}

function fnRandomNumber(no_of_digit, callback) {
    let number = "";
    let max = 9, min = 0;
    while (true) {
        number += min + Math.floor(Math.random() * (max - min + 1));
        no_of_digit--;
        if (no_of_digit !== 0) {
            callback(number);
        }
    }
}

var fnRandomDate = function (callback) {
    fnRandomInteger(1, 30, function (day) {
        fnRandomInteger(3, 12, function (month) {
            fnRandomInteger(1999, 2014, function (year) {
                if (parseInt(day) < 10) {
                    day = '0' + day;
                }
                if (parseInt(month) < 10) {
                    month = '0' + month;
                }
                var date = day + "/" + month + "/" + year;
                callback(date);
            })
        })
    })
}

/********************************************************************************************
 * Function Description: getTodaysDate - it is used to get today's date in provided formate
 * Created Date : 07/18/2017
 * Created by : Sudip prasad
 * Input: date format "dd/mm/yyyy"
 * Output: date in string form
 ********************************************************************************************/
function getTodaysDate(format, callback) {
    var day = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var monthName;

    switch (parseInt(month) + 1) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "Febuary";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
    }
    if (format == 'DD/MM/YYYY') {
        month = (parseInt(month) + 1);
        if (parseInt(day) < 10) day = '0' + parseInt(day);
        if (parseInt(month) < 10) month = '0' + parseInt(month);
        callback(day + '/' + month + '/' + year);
    }
    else if (format == 'MM DD, YYYY') {
        if (parseInt(day) < 10) day = '0' + parseInt(day);
        callback(monthName.substring(0, 3) + ' ' + day + ', ' + year);
    } else {
        callback(day + ' ' + monthName + ', ' + year);
    }
}

/********************************************************************************************
 * Function Description: UploadFile - it is used to upload a file in page from physical drive path
 * Created Date : 07/18/2017
 * Created by : Sudip prasad
 * Input: file name along with the complete path in the physical driver
 * Output: pass the script if performed successfully
 ********************************************************************************************/
function uploadFile(file, callback) {
    file = file.replace('\\', '/');
    var slashIndex = file.lastIndexOf('/');
    var path = file.substring(0, slashIndex);
    var filename = file.substring(parseInt(slashIndex) + 1, file.length);
    clipboard.copy(path, function () {
        browser.pause(2000);
        NavigateToFolderLocation(function () {
            browser.pause(2000);
            TypeFileName(filename, function () {
                browser.pause(2000);
                callback('File uploading Completed!!');
            });
        });
    });
}

//********************************************************************************************/
function FocusOnFileNameInput(callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    var tabIndex = [];
    var times = 4;
    for (var i = 0; i < times; i++) {
        tabIndex.push(i + 1);
    }
    browser.pause(2000);
    k.click(robot.KEY_F3);
    k.click(robot.KEY_ENTER);
    browser.pause(1000);
    tabIndex.forEach(function (index) {
        setTimeout(function () {
            k.click(robot.KEY_TAB);
            browser.pause(1000);
            if (index == times) {
                k.click(robot.KEY_ENTER);
                browser.pause(4000);
                callback();
            }
        }, 2000);

    });
}

function pastePath(callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    k.press(robot.KEY_CONTROL);
    browser.pause(1000);
    k.click(robot.KEY_V);
    browser.pause(1000);
    k.release(robot.KEY_CONTROL);
    browser.pause(1000);
    k.click(robot.KEY_ENTER);
    browser.pause(2000);
    callback();
}

function NavigateToFolderLocation(callback) {
    browser.pause(2000);
    FocusOnTopFolderNavigator(function () {
        browser.pause(2000);
        pastePath(function () {
            callback();
        })
    })
}

function FocusOnTopFolderNavigator(callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    setTimeout(function () {
        k.click(robot.KEY_F4);
        browser.pause(1000);
        k.press(robot.KEY_CONTROL);
        browser.pause(1000);
        k.click(robot.KEY_A);
        browser.pause(1000);
        k.release(robot.KEY_CONTROL);
        browser.pause(1000);
        k.click(robot.KEY_BACKSPACE);
        browser.pause(2000);
        callback();
    }, 4000);
}

function TypeFileName(filename, callback) {
    var Keyboard = robot.Keyboard;
    var k = Keyboard();
    var keystoke = [];
    FocusOnFileNameInput(function () {
        browser.pause(2000);
        for (var i = 0, len = filename.length; i < len; i++) {
            if (filename[i] == '_') {
                keystoke.push("KEY_SLASH");
            } else if (filename[i] == '-') {
                keystoke.push("KEY_MINUS");
            } else {
                keystoke.push("KEY_" + filename[i].toUpperCase());
            }
        }
        var count = keystoke.length;
        keystoke.forEach(function (key) {
            k.click(robot[key]);
            count = count - 1;
            if (count < 1) {
                k.click(robot.KEY_ENTER);
                callback();
            }
        });
    })
}

//********************************************************************************************/

/********************************************************************************************
 * Function Description: getText - it is used to get the text of web element label div, span, link etc.
 * Created Date : 07/18/2017
 * Created by : Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: return a string value (text associated with the web element)
 ********************************************************************************************/
function getText(locator, callback) {
    try {


        webObjects.getWebElement(locator, function (webObj) {

            browser.wait(function () {
                return webObj.isDisplayed();
            }, 5000).then(function () {
                browser.wait(function () {
                    //console.log(webObj.getText);
                    return webObj.getText();

                }, 10000).then(function (text) {
                    //console.log("text value is :::" + text);
                    callback(text);
                }, function (err) {
                    console.log(err)

                });
            })


        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}


function getCurrentURL(callback) {
    try {
        browser.getCurrentUrl().then(function (url) {
            callback(url);
        })
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: getAttribute - it is used to get any attribute of web element like class, background, color, font size etc.
 * Created Date: 07/18/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName" , "attribute_name"
 * Output: return a string value (attribute value associated with the web element)
 ********************************************************************************************/
function getAttribute(locator, attr_name, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.getAttribute(attr_name);
            }, 5000).then(function (text) {
                callback(text);
            });
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: getAttribute - it is used to get any css attribute of web element like class, background, color, font size etc.
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName" , "css_attribute_name"
 * Output: return a string value (css attribute value associated with the web element)
 ********************************************************************************************/
function getCss(locator, attr_name, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.getCssValue(attr_name);
            }, 5000).then(function (text) {
                callback(text);
            });
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: expectSelected - it is used to verify radio or check box is selected
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: pass the script if check box is selected else it will fail the script
 ********************************************************************************************/
function expectSelected(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.isSelected();
            }, 5000).then(function (isSelected) {
                expect(isSelected);
                callback();
            });
        });
    }
    catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: getSelectedStatus - it is used to get boolean on radio or check box is selected or not
 * Created Date: 07/20/2017
 * Created by: Sudip Prasad
 * Input: "PageName|ObjectName"
 * Output: boolean
 ********************************************************************************************/
function getSelectedStatus(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.isSelected();
            }, 5000).then(function (isSelected) {
                callback(isSelected);
            });
        });
    }
    catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: getInputBoxText - it is used to get the text of a input box or a text box or text area
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: return a string
 ********************************************************************************************/
function getInputBoxText(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.getAttribute('value');
            }, 5000).then(function (txt) {
                callback(txt);
            });
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: verifyText - it is used to verify the text contains in the web element locator provided
 * Created Date: 07/19/2017
 * Created by: Arif Shaik
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script
 ********************************************************************************************/
function verifyText(locator, data, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.getText();
            }, 5000).then(function (txt) {
                expect(txt === data);
                callback();
            });
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}


/********************************************************************************************
 * Function Description: verifyText - it is used to verify the input box text contains in the web element locator provided
 * Created Date: 07/19/2017
 * Created by: Sudip Prasad
 * Input: "PageName|ObjectName"
 * Output: pass or fail the fail the script
 ********************************************************************************************/
function verifyInputBoxText(locator, data, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.wait(function () {
                return webObj.getAttribute('value');
            }, 5000).then(function (txt) {
                expect(txt === data);
                callback();
            });
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: isInteger - it is used to check whether the input field is empty
 * Created Date: 10/20/2017
 * Created by: Muthu Pondi
 * Input: string value
 * Output: boolean
 ********************************************************************************************/
function isFieldEmpty(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.textToBePresentInElement(webObj, ""), 5000).then(function (t) {
            expect(t);
            callback(true);
        }).catch(function (err) {
            throw 'Field is not empty';
            callback(false);
        });
    });
}

/* if(t) {
 console.log("Text is NOT present"+t);
 callback(true);
 }

 else {
 console.log("Text is present");
 callback(false);
 }
 });
 });
 }*/
/********************************************************************************************
 * Function Description: isInteger - it is used to check whether the supplied argument is integer or not - return boolean
 * Created Date: 07/19/2017
 * Created by: Sudip Prasad
 * Input: string value
 * Output: boolean
 ********************************************************************************************/
function isInteger(str, callback) {
    callback(/^\+?(0|[1-9]\d*)$/.test(str));
}

function mouseOver(locator, callback) {
    webObjects.getWebElement(locator, function (webObj) {
        var hover = browser.actions().mouseMove(webObj).perform();
        hover.then(function (status) {
            if (status)
                console.log("Moved to element");
            else if (!status)
                console.log("Unable to locate element");

        })
    })
}

/********************************************************************************************
 * Function Description: getAndVerifyPageTitle - it is used to get the title of currently referenced webpage
 * and compares with the expected title.
 * Created Date : 11/10/2017
 * Created by : Amod Mahajan
 * Input: expectedPageTitle
 * Output: NA
 ********************************************************************************************/


/********************************************************************************************
 * Function Description: getTextAndVerify - it is used to get the text of web element label div, span, link etc and verify with expected.
 * Created Date : 11/10/2017
 * Created by : Amod Mahajan
 * Input: "PageName|ObjectName" and ExpectedText
 * Output: NA
 ********************************************************************************************/
function getTextAndVerify(locator, expectedText, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {

            var actualText = webObj.getText();
            actualText.then(function (text) {
                expect(text.toString().trim()).to.equal(expectedText);
                callback();
            }, function (err) {
                console.log("Some error occurred while fetching text." + err)
                callback();
            });
        });

    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

function getAndVerifyPageTitle(expectedPageTitle, callback) {
    try {
        var actualPageTitle = browser.getTitle();
        actualPageTitle.then(function (title) {
            if (title === expectedPageTitle) {
                //console.log("Page title matched. Expected: " + expectedPageTitle + "Actual: " + title);
                callback(true);
            }
            else {
                console.log("Page title not matched.  Expected: " + expectedPageTitle + "Actual: " + title);
                throw "Title not matched";
            }

        }, function (err) {
            console.log("Some error occurred while fetching page title." + err)
            throw err;
        })

    } catch (e) {
        expect(false);
        console.log(e);
        callback(false);
    }
}

function getTextOfElement(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {

            var actualText = webObj.getText();
            actualText.then(function (text) {
                callback(text);
            }, function (err) {
                throw("Some error occurred while fetching text." + err);
            });
        });

    } catch (e) {
        expect(false);
        console.log(e);
        throw (e);
    }
}

/********************************************************************************************
 * Function Description: getSelectedOptionFromSelectDropdown - it is used to get the selected option from Select tag dropdown.
 * Created Date : 11/10/2017
 * Created by : Amod Mahajan
 * Input: "PageName|ObjectName"
 * Output: Selected text in select drop down
 ********************************************************************************************/
function getSelectedOptionFromSelectDropdown(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {

            /*webObj.getAttribute('value').then(function (i) {
                callback(i);
            })*/

            webObj.element(by.css('option:checked')).getText().then(function (text) {
                callback(text);
            })

        });

    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}


function getSelectedOptionFromDropdown(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {

            webObj.getText().then(function (i) {
                callback(i);
            })


        });

    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: swicthToWindowUsingTitle - it is used to swicth to a window using window title
 * Created Date : 11/13/2017
 * Created by : Amod Mahajan
 * Input: Title of window
 * Output: NA
 ********************************************************************************************/
function swicthToWindowUsingTitle(title, callback) {
    try {

        browser.sleep(10000);
        var flag = false;


        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            console.log(handles.length);

            for (var i = 0; i < handles.length; i++) {
                browser.switchTo().window(handles[i]);
                var actualPageTitle = browser.getTitle();
                actualPageTitle.then(function (titleNew) {
                    console.log("Title is " + titleNew);
                    if (title === titleNew) {
                        flag = true;
                        callback(true);
                    }

                });
            }

        }, function (err) {
            console.log(err)
        })


    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: switchToWindow - it is used to switch to a window using window handle
 * Created Date : 11/13/2017
 * Created by : Amod Mahajan
 * Input: Title of window
 * Output: NA
 ********************************************************************************************/
function switchToWindow(callback) {
    try {

        var flag = false;


        var winHandles = browser.getAllWindowHandles();
        winHandles.then(function (handles) {
            //console.log(handles.length);
            browser.switchTo().window(handles[1]);
            callback();


        }, function (err) {
            console.log(err);
            callback();
        })


    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: scrollToElementIntoView - it is used to  locate and scroll to  element in to view.
 * Created Date : 11/14/2017
 * Created by : Amod Mahajan
 * Input: Locator
 * Output: NA
 ********************************************************************************************/
function scrollToElementByLocatorIntoView(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            browser.executeScript("arguments[0].scrollIntoView(true);", webObj);
            callback();
        });


    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: scrollToLocatedElementIntoView - it is used to scroll to already located element in to view.
 * Created Date : 11/14/2017
 * Created by : Amod Mahajan
 * Input: Web element
 * Output: NA
 ********************************************************************************************/
function scrollToLocatedElementIntoView(webObj, callback) {
    try {

        var js = browser.executeScript("arguments[0].scrollIntoView(true);", webObj);
        js.then(function () {
            callback();
        });


    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: selectValueFromNonSelectTagDropdown - it is used to select value from non select tag drop downs.
 * Created Date : 11/27/2017
 * Created by : Amod Mahajan
 * Input: Web element
 * Output: NA
 ********************************************************************************************/

function selectValueFromNonSelectTagDropdown(locator, expectedValue, callback) {
    try {
        webObjects.getByObject(locator, function (by_obj) {
            browser.wait(function () {
                return element.all(by_obj);
            }, 5000).then(function (elements) {
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].getText() === expectedValue) {
                        elements[i].click();
                        callback();
                    }
                }
            });
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: switchToFrame - it is used to switch to a frame using either frame id or name or element or index
 * Created Date : 12/14/2017
 * Created by : Amod Mahajan
 * Input: Frame property
 * Output: NA
 ********************************************************************************************/
function switchToFrame(frameIndexOrIdOrName, frameWebElement, callback) {
    try {
        if (frameIndexOrIdOrName != "") {
            browser.switchTo().frame(frameIndexOrIdOrName).then(function () {
                //console.log("switched to frame");
                callback();
            }, function (err) {
                throw("Unable to switch to frame.");
            });
        }
        else {
            webObjects.getWebElement(frameWebElement, function (webObj) {
                browser.switchTo().frame(webObj.getWebElement()).then(function () {
                    //console.log("switched to frame");
                    callback();
                }, function (err) {
                    throw("Unable to switch to frame.");
                });
            });
        }
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
};

/********************************************************************************************
 * Function Description: switchToDefaultFrame - it is used to switch to default frame
 * Created Date : 12/14/2017
 * Created by : Amod Mahajan
 * Input: NA
 * Output: NA
 ********************************************************************************************/
function switchToDefaultContent(callback) {
    try {

        var flag = false;
        browser.switchTo().defaultContent().then(
            function () {
                //console.log("Switched to default content.");
                callback();
            }, function () {
                throw("Unable to switch to default content");
                callback();
            }
        )


    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

/********************************************************************************************
 * Function Description: switchToDefaultFrame - it is used to switch to default frame
 * Created Date : 12/14/2017
 * Created by : Amod Mahajan
 * Input: NA
 * Output: NA
 ********************************************************************************************/
function waitForWebpageLoadingCompletely(callback) {
    try {
        var status = "Incomplete";
        do {
            var flag = browser.executeScript("return window.document.readyState ;");
            //console.log(flag)
            flag.then(function (state) {
                console.log(state);
                if (state === "complete")
                    callback();
                else {
                    //status = "Incomplete";
                    console.log(state);
                }
            }, function (err) {
                console.log(err)
            })


        } while (!(status === "complete"));


    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

function getCssAttributeValue(locator, attributeName, callback) {

    webObjects.getWebElement(locator, function (webObj) {
        var EC = protractor.ExpectedConditions;
        var a = browser.wait(EC.visibilityOf(webObj), 30000);
        a.then(function () {
                webObj.getCssValue(attributeName).then(function (val) {
                    callback(val);

                }, function (err) {
                    console.log(err);
                    callback();
                })
            },
            function (err) {
                console.log(err)
                throw("Element not Exists...");

            });
    });
}

function waitTillTitleOfPageMacthesWithExpected(expectedTitle, callback) {
    try {
        var EC = protractor.ExpectedConditions;
        var a = browser.wait(EC.titleContains(expectedTitle), 30000);
        a.then(function () {
            callback();
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

function verifyCheckboxSelectionState(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            webObj.isSelected().then(function (flag) {
                callback(flag)
            }, function () {
                callback(false);
            });
        });

    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}

function verifyIfElementIsEnable(locator, callback) {
    try {
        webObjects.getWebElement(locator, function (webObj) {
            webObj.isEnabled().then(function (flag) {
                //console.log("acual stayus:" + flag)
                callback(flag)
            }, function () {
                callback(false);
            })
        });
    } catch (e) {
        expect(false);
        console.log(e);
        callback();
    }
}


function getTextAndReturnAsSet(locator, callback) {
    var set = new Set();
    element.all(by.xpath(locator)).then(function (allElements) {
        allElements.forEach(function (ele) {
            ele.getText().then(function (text) {
                set.add(text);
            });

        });
        callback(set);
    })
}


function conditionalClick(Locator1, Locator2, callback) {


    webObjects.getWebElements(Locator1, function (webObj) {
        if (webObj.length > 0) {
            var EC = protractor.ExpectedConditions;
            var a = browser.wait(EC.presenceOf(webObj[0]), 30000);
            a.then(function (status) {
                keyword.performclick(Locator1, function () {
                    keyword.customisedSleep(5000, function () {
                        callback();
                    });
                })
            }, function (status) {
                console.log(status);
                callback();
            });
        }
        else {
            webObjects.getWebElements(Locator2, function (webObj) {
                if (webObj.length > 0) {
                    console.log("Inside conntinue servay")
                    var EC = protractor.ExpectedConditions;
                    var a = browser.wait(EC.presenceOf(webObj[0]), 30000);
                    a.then(function (status) {
                        keyword.performclick(Locator2, function () {
                            callback();
                        })
                    }, function (status) {
                        console.log(status);
                        callback();
                    });
                }
            });
        }

    });
    /*try{

            element.all(by.xpath(Locator1)).isPresent().then(
                function (status) {
                    console.log(status)

                    keyword.performclick('Physical_Priorities|btn_next', function () {
                        callback();
                    })

                },function (err) {
                    console.log(err)


                }
            );





    }catch(e)
    {
        element(by.xpath(Locator2)).isPresent()
        console.log("catch")
    }*/


    /*webObjects.getWebElement(Locator1, function (webObj) {
        var EC = protractor.ExpectedConditions;
        var a = browser.wait(EC.presenceOf(webObj), 30000);
        a.then(function (status) {
            console.log(status)
            console.log("visible inside cond")
            keyword.performclick(Locator1, function () {
                callback();
            })
        }, function (status) {
            console.log(status);
            callback();
        });

    });*/
}


// catch (e) {
//     webObjects.getWebElement(Locator2, function (webObj) {
//         var EC = protractor.ExpectedConditions;
//         var a = browser.wait(EC.visibilityOf(webObj), 30000);
//         a.then(function () {
//             console.log("visible inside condgfhfd")
//             keyword.performclick(Locator2,function () {
//                 callback();
//             })
//         })
//     });

//};


//Keywords needs to be added....
//1. scrollToFocus
//

/*******************************************************************************
 * Description: Exporting available keyword to be used in the testing
 *******************************************************************************/
module.exports = {
    performclick: click,
    setText: setText,
    expectVisible: expectVisible,
    expectNotVisible: expectNotVisible,
    getDisplayStatus: getDisplayStatus,
    expectEnabled: expectEnabled,
    expectDisabled: expectDisabled,
    dragNdrop: dragNdrop,
    getEnabledStatus: getEnabledStatus,
    getElementsCount: getElementsCount,
    selectByVisibleText: selectByVisibleText,
    getRandom: getRandom,
    getText: getText,
    getAttribute: getAttribute,
    getCss: getCss,
    expectSelected: expectSelected,
    getInputBoxText: getInputBoxText,
    verifyText: verifyText,
    verifyInputBoxText: verifyInputBoxText,
    getSelectedStatus: getSelectedStatus,
    uploadFile: uploadFile,
    getTodaysDate: getTodaysDate,
    isInteger: isInteger,
    isFieldEmpty: isFieldEmpty,
    scrollToelementPosition: scrollToelementPosition,
    scrollToelement: scrollToelement,
    mouseOver: mouseOver,
    getAndVerifyPageTitle: getAndVerifyPageTitle,
    getTextAndVerify: getTextAndVerify,
    getSelectedOptionFromSelectDropdown: getSelectedOptionFromSelectDropdown,
    swicthToWindowUsingTitle: swicthToWindowUsingTitle,
    scrollToElementByLocatorIntoView: scrollToElementByLocatorIntoView,
    scrollToLocatedElementIntoView: scrollToLocatedElementIntoView,
    switchToFrame: switchToFrame,
    switchToDefaultContent: switchToDefaultContent,
    waitForWebpageLoadingCompletely: waitForWebpageLoadingCompletely,
    getCssAttributeValue: getCssAttributeValue,
    waitTillTitleOfPageMacthesWithExpected: waitTillTitleOfPageMacthesWithExpected,
    verifyCheckboxSelectionState: verifyCheckboxSelectionState,
    verifyIfElementIsEnable: verifyIfElementIsEnable,
    switchToWindow: switchToWindow,
    getTextOfElement: getTextOfElement,
    selectValueFromClickableListbox: selectValueFromClickableListbox,
    conditionalClick: conditionalClick,
    customisedSleep: customisedSleep,
    expectPresence: expectPresence,
    checkPresenceAndClick: checkPresenceAndClick,
    expectNotPresent: expectNotPresent,
    clickByJavascript: clickByJavascript,
    setAttribute: setAttribute,
    selectValueFromClickableListbox1: selectValueFromClickableListbox1,
    getCurrentURL: getCurrentURL,
    getSelectedOptionFromDropdown: getSelectedOptionFromDropdown

}
/*******************************************************************************
 * Function Description: This whole file to fetch locator from appWebObjects.js and covert in element obj that can be used anywhere into code
 * Created Date : 07/17/2017
 * Created by : Sudip Prasad
 * Input: locator in format "PageName|ObjectName"
 * Output: element (web element instance)
 *********************************************************************************/

let pageObject = require('./../testObjects/appWebObjects.js');


function getWebElement(locator, callback) {

    getByObject(locator, function (by_obj) {
        callback(element(by_obj));
    });
}


function getWebElements(locator, callback) {

    getByObject(locator, function (by_obj) {
        element.all(by_obj).then(function (webElements) {
            callback(webElements);
        });
    });
}

function getByObject(locator, callback) {
    getObjectSelectorDetails(locator, function (obj_json) {
        switch (obj_json.locateStrategy) {
            case 'xpath': {
                callback(by.xpath(obj_json.selector));
                break;
            }
            case 'css':
                callback(by.css(obj_json.selector));
                break;
            case 'className':
                callback(by.className(obj_json.selector));
                break;
            case 'tagName':
                callback(by.tagName(obj_json.selector));
                break;
            case 'partialLinkText':
                callback(by.partialLinkText(obj_json.selector));
                break;
            case 'linkText':
                callback(by.linkText(obj_json.selector));
                break;
            case 'name':
                callback(by.name(obj_json.selector));
                break;
            case 'id':
                callback(by.id(obj_json.selector));
                break;
        }
    });
}

function getObjectSelectorDetails(locator, callback) {
    callback(pageObject[locator.split("|")[0]][locator.split("|")[1]]);
};

module.exports = {
    getWebElement: getWebElement,
    getByObject: getByObject,
    getWebElements: getWebElements
};
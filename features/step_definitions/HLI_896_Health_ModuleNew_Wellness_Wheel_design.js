var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {

    Given(/^User should see key value box$/, function (done) {
        keyword.expectVisible('Health_Age|key_Box', function () {
            done();
        });
    });
    Given(/^User should see what does this mean$/, function (done) {
        keyword.expectVisible('Health_Age|text_WhatDoesItMean', function () {
            done();
        });
    });
    Given(/^User should see article related to inprove your health score$/, function (done) {
        keyword.expectVisible('Health_Age|text_WhatDoesItMean', function () {
            done();
        });
    });
    Given(/^User should see above in green color in key value box$/, function (done) {
        keyword.expectVisible('Health_Age|key_Box_Green', function () {
            keyword.getCss('Health_Age|key_Box_Green', 'background', function (cssValue) {
                console.log(cssValue);
                var result = cssValue.includes("rgb(18, 140, 63)")
                console.log(result);
                done();
            });
        });
    });
    Given(/^User should see below in red color in key value box$/, function (done) {
        keyword.expectVisible('Health_Age|key_Box_Red', function () {
            keyword.getCss('Health_Age|key_Box_Red', 'background', function (cssValue) {
                console.log(cssValue);
                var result = cssValue.includes("rgb(239, 78, 69)")
                console.log(result);
                done();
            });
        });
    });
    Given(/^User should see avrage in white color in key value box$/, function (done) {
        keyword.expectVisible('Health_Age|key_Box_Grey', function () {
            keyword.getCss('Health_Age|key_Box_Grey', 'background', function (cssValue) {
                console.log(cssValue);
                var result = cssValue.includes("rgb(209, 209, 209)")
                console.log(result);
                done();
            });
        });
    });
});

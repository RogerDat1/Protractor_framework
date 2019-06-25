var {defineSupportCode} = require("cucumber");

var users;

defineSupportCode(function ({Given}) {

    Given(/^User should see  "([^"]*)" in zoom level two$/, function (ParameterName, done) {
        keyword.expectVisible('Health_Age|' + ParameterName, function () {
            done();
        })
    })
})

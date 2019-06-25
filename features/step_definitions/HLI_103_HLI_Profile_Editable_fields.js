var {defineSupportCode} = require("cucumber");


defineSupportCode(function ({Given}) {
    Given(/^User should be able to edit or enter First name$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Fisrt_Name', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Fisrt_Name', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^User should be able to edit or enter Last name$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Last_Name', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Last_Name', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^User should be able to edit or enter Date of birth$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Date_of_Birth', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Date_of_Birth', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^User should be able to edit or enter Address$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Address', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Address', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^User should be able to edit or enter Postcode$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Address', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Address', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^User should be able to edit or enter city$/, function (done) {
        keyword.expectVisible('View_Profile|profile_City', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_City', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
    Given(/^User should be able to edit or enter country$/, function (done) {
        keyword.expectVisible('View_Profile|profile_Country', function () {
            keyword.verifyIfElementIsEnable('View_Profile|profile_Country', function (status) {
                expect(status, 'Gender should be enable').to.equal(true)
                done()
            })
        })
    })
})

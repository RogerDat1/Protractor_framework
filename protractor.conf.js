exports.config = {
    baseUrl: 'http://www.google.co.in/',
    projectName: 'Harmonise AgeingWorks',
    isApplicationAngular : true,
    // Specify the patterns for test files
    // to include in the test run
    specs: [
        'features/**/*.feature'
    ],

    allScriptsTimeout: 240000, //This is the overall Timeout
    getPageTimeout: 120000, //This is the Page timeout
    directConnect: true,
    ignoreUncaughtExceptions: true, // This is to execute next step/scenario after the assertion failure
    // Use this to exclude files from the test run.
    // In this case it's empty since we want all files
    // that are mentioned in the specs.
    //SELENIUM_PROMISE_MANAGER: 1,
    //restartBrowserBetweenTests: true,
    exclude: [],
    // Use cucumber for the tests
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Contains additional settings for cucumber-js
    cucumberOpts: {
        format: ['json:reports/json/results.json', 'pretty'],
        require: ['features/step_definitions/*.js','support/*.js' ],
        tags: "@HLI-21:2"

    },

    // These capabilities tell protractor about the browser
    // it should use for the tests. In this case chrome.

    multiCapabilities: [{
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions', '--start-maximized', "start-fullscreen, --no-sandbox", '--silent']
        }


    },
        {
            'browserName': 'firefox'
        }],
    /*capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-extensions', '--start-maximized', "start-fullscreen, --no-sandbox", '--silent']
            //'args': ['--disable-extensions','--window-size=1366,768','--no-sandbox']

        }
    },*/

    // This setting tells protractor to wait for all apps
    // to load on the page instead of just the first.
    onPrepare: () => {
        //global.globalData = require('./testData/global.js');
        global.globalData = require(__dirname + '/testData/global.js');
        global.HLIData = require(__dirname + '/testData/HLIData.js');
        //global.imageToUpload = require(__dirname +'/Images/NeedSpace.png');
        if(globalData.isApplicationAngular){
            console.log('~Testing a Angular Application~');
            //browser.waitForAngular();
            browser.ignoreSynchronization = false;
        }else{
            browser.ignoreSynchronization = true;
            console.log('~Testing a Non-Angular Application~');
            /*  console.log(globalData.AUT_URL.QA)
             console.log(globalData.Environment)
             var v= globalData.Environment;
             console.log(v)
             console.log(globalData.AUT_URL.v)*/

        }



        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;


        var { defineSupportCode } = require("cucumber");
        defineSupportCode(function ({ setDefaultTimeout }) {
            setDefaultTimeout(300000);
        });

        global.keyword = require('./utilities/keywords.js');

    },

    beforeLaunch: () => {

    },

    afterLaunch: () => {

    },

    onComplete: () => {
    },

    onCleanUp: () => {
    },

}
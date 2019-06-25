/*
If OnDemand test scripts are run:
1. Change "UserAtTermsAndConditionPage" because of test script number  @HLI-22:5
 */


module.exports = {
    isApplicationAngular: false,
    Environment: process.env.TEST_ENV || 'QA',

    // URL for application under test. It has url for each environments.
    AUT_URL: {
        "QA": "http://usdf23v0218.mrshmc.com:5036/",
        "UAT": "xxxxxxx",
        "PROD": "xxxxxxx"
    },

    Registration_URL: {
        QA: "http://usdf23v0218.mrshmc.com:5036/provision/registration",
        UAT: "XXXX",
        PROD: "XXX"
    },


    // Login credentials for each environment
    Login_Credentials: {

        QA: {
            basicUser: {
                Email_Address: 'hliqa22.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome2',
                Incorrect_Email_Address: 'pmqa05.eptest.ad@gisqa.mercer.com',
                WrongPassword: 'Welcome134',
                IncorrectFormatMailId: 'pmqa05.eptest.adgisqa.mercer.com',
                msgToConnect: 'Weve put together some recommended goals to help improve your score. Complete these and gain 25 points'
            },
            onboardingUser: {
                Email_Address: 'hliqa22.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome2'
            },
            userWithDefaultPhysicalPriority: {
                Email_Address: 'hliqa80.eptest.admin2@gisqa.mercer.com',
                Password: 'Automation1',
            },
            userWithSkippedOptionalOnboarding: {
                Email_Address: 'hliqa104.eptest.admin2@gisqa.mercer.com',
                Password: 'Automation1',
            },
            NewUserAtAubstanceUsageOnboarding: {
                Email_Address: 'hliqa99.eptest.admin2@gisqa.mercer.com',
                Password: 'Mercer123',
            },

            SampleUser: {
                Email_Address: 'hliqa22.eptest.admin2@gisqa.mercer.com',
                first_name: 'Jon',
                last_name: 'Ram',
            },
            NonHrUser: {
                Email_Address: 'hliqa22.eptest.admin2@gisqa.mercer.com',
                first_name: 'Jon',
                last_name: 'Ram',
            },

            adminUser: {
                Email_Address: 'hliqa39.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome3'
            },
            UserInBetweenOnboarding: {
                Email_Address: 'hliqa58.eptest.admin2@gisqa.mercer.com',
                Password: 'Donotuse123'
            },
            OptionalOnboardingCompletedUser: {
                Email_Address: 'hliqa18.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },
            UserAtRegistrationPage: {
                Email_Address: 'xxxxxxxxx',
                Password: 'xxxxx'
            },
            UserAtTermsAndConditionPage: {
                Email_Address: 'amodloves@gmail.com',
                Password: 'Donotuse123'
            },
            UserAtMandatoryOnboardingCompleted: {
                Email_Address: 'xxxxxxxxx',
                Password: 'xxxxx'
            },
            UserAtPersonalDetailsPageWithProperHRData: {
                Email_Address: 'hliqa27.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },
            UserAtPersonalDetailsPageWithIncompleteHRData: {
                Email_Address: 'hliqa73.eptest.admin2@gisqa.mercer.com',
                Password: 'Donotuse123'
            },
            UserAtWelcomeOnboardingScreen: {
                Email_Address: 'hliqa72.eptest.admin2@gisqa.mercer.com',
                Password: 'Donotuse123'
            },
            UserAtWelcomeSecondScreen: {
                Email_Address: 'hliqa28.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },
            onboardingUserMale: {
                Email_Address: 'hliqa18.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome2'
            },
            onboardingUserFemale: {
                Email_Address: 'hliqa22.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },
            UserAtPhysicalPriorities: {
                Email_Address: 'XXXX',
                Password: 'Welcome1'

            },
            expiryUser: {
                Email_Address: 'hliqa20.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },
            UserWithAppDetails: {
                Email_Address: 'vijaypakala+4@gmail.com',
                Password: 'Welcome1',
                msgToConnect: 'Weve put together some recommended goals to help improve your score. Complete these and gain 25 points'
            },
            UserNeverBrowseAnyArticle: {
                Email_Address: 'vijaypakala+4@gmail.com',
                Password: 'Welcome1'
            },
            userForAccountLock: {
                Email_Address: 'hliqa18.eptest.admin2@gisqa.mercer.com',
                Password: 'wrongPassword'
            },
            disableUser: {
                Email_Address: 'hliqa05.eptest.admin2@gisqa.mercer.com',
                Password: '',
                Message1: 'You have not completed the registration process. As a result, your account has been temporarily disabled for your',
                Message2: 'What to do next? ',
                Message3: 'An email has been sent out to you to confirm whats gone wrong. Follow the instructions in the email or contact your support team for further assistance',
            },
            UserAtPersonalDetailsPage: {
                Email_Address: 'hliqa59.eptest.admin2@gisqa.mercer.com',
                Password: 'Automation1'
            },
            UserWithoutGoalSet: {
                Email_Address: 'XXXX',
                Password: 'Automation1'
            }
        },

        UAT: {
            basicUser: {
                Email_Address: 'hliqa18.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },

            adminUser: {
                Email_Address: 'xxxxxxxxx',
                Password: 'xxxxx'
            }

        },

        PROD: {
            basicUser: {
                Email_Address: 'pmqa05.eptest.admin2@gisqa.mercer.com',
                Password: 'Welcome1'
            },

            adminUser: {
                Email_Address: 'xxxxxxxxx',
                Password: 'xxxxx'
            }

        },

    },


    personalDetailsOfUser: {
        QA: {
            firstName: "Jerome",
            lastName: "Wise",
            dateOfBirth: "01/01/1996",
            gender: "Male",
            address: "9 Swift Cl\nLee-on-the-Solent",
            postcode: "PO13 8LF",
            cityCounty: "Hampshire",
            country: "UK",
            workEmailAddress: "hliqa27.eptest.admin2@gisqa.mercer.com"

        }
    }

};
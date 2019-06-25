
module.exports = {
    Login_Page: {
        input_Email: {
            selector:'//input[@type="email"]',
            locateStrategy: 'xpath'
        },
        input_Password: {
            selector: '//input[@type="password"]',
            locateStrategy: 'xpath'
        },
        link_HLIlogo: {
            selector: '//img[@class="header__logo"]',
            locateStrategy: 'xpath'
        },
        btn_Submit: {
            selector: '//button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        lbl_NewtoAgeingWorks: {
            selector: '//div[text()="New to AgeingWorks™?"]',
            locateStrategy: 'xpath'
        },
        lnk_Registerhere: {
            selector: '//a[@title="Register Here"]',
            locateStrategy: 'xpath'
        }

    },

    Registration_page: {
        link_AGlogo: {
            selector: '//img[@class="header__logo"]',
            locateStrategy: 'xpath'
        },
        Lbl_Personal_Info: {
            selector: '(//h5[@class="evo-type--header-rule evo-layout--margin-bottom"]/text())[2]',
            locateStrategy: 'xpath'
        },
        lbl_Firstname: {
            selector: '//strong[text()="First Name"]',
            locateStrategy: 'xpath'
        },
        input_Firstname: {
            selector: '//input[@formcontrolname="firstName"]',
            locateStrategy: 'xpath'
        },
        lbl_Lastname: {
            selector: '//*[text()="Last Name"]',
            locateStrategy: 'xpath'
        },

        input_Lastname: {
            selector: '//input[@formcontrolname="lastName"]',
            locateStrategy: 'xpath'
        },
        LLbl_Login_Info: {
            selector: '',
            locateStrategy: 'id'
        },

        input_Day: {
            selector: '(//div[@class="evo-dropdown "])[1]',
            locateStrategy: 'xpath'
        },
        input_Month: {
            selector: '(//div[@class="evo-dropdown "])[2]',
            locateStrategy: 'id'
        },
        input_Year: {
            selector: '(//div[@class="evo-dropdown "])[3]',
            locateStrategy: 'id'
        },
        drp_Gender: {
            selector: '//select[@formcontrolname="gender"]',
            locateStrategy: 'xpath'
        },


        input_Companykeyword: {
            selector: '//input[@formcontrolname="companyKeyword"]',
            locateStrategy: 'xpath'
        },
        input_Emailaddress: {
            selector: '//input[@formcontrolname="email"]',
            locateStrategy: 'xpath'
        },

        input_RetypeEmailaddress: {
            selector: '//input[@formcontrolname="repeatEmail"]',
            locateStrategy: 'xpath'
        },
        input_RegPassword: {
            selector: '//input[@formcontrolname="password"]',
            locateStrategy: 'xpath'
        },
        input_RetypePassword: {
            selector: '//input[@formcontrolname="repeatPassword"]',
            locateStrategy: 'xpath'
        },
        btn_Save: {
            selector: '//button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        btn_Cancel: {
            selector: '',
            locateStrategy: 'id'
        },
        msg_Completefields: {
            selector: '//*[text()="Please complete all fields."]',
            locateStrategy: 'xpath'
        },
        msg_Header: {
            selector: '//*[@class="evo-layout--margin-top evo-layout--padding-bottom"]',
            locateStrategy: 'xpath'
        }
    },
    Home_Page: {
        lbl_Ageingworks: {
            selector: '//h1[text()="AgeingWorks™"]',
            locateStrategy: 'xpath'
        },
        lnk_Healthmenu: {
            selector: '//a[contains(text(),"Health")]',
            locateStrategy: 'xpath'
        },
        lnk_AcceptableUse: {
            selector: '//a[@title="Acceptable Use"]',
            locateStrategy: 'xpath'
        },
        lnk_Cookiepolicy: {
            selector: '//a[@title="Cookie Policy"]',
            locateStrategy: 'xpath'
        },
        lnk_Privacypolicy: {
            selector: '//a[@title="Privacy Policy"]',
            locateStrategy: 'xpath'
        },
        lnk_TermsofUse: {
            selector: '//a[@title="Terms of Use"]',
            locateStrategy: 'xpath'
        },
        lnk_Menu_Help_Contacts:{
            selector:'//span[text()="Help & Contacts"]',
            locateStrategy:'xpath'
        },
        lnk_Help_Contacts: {
            selector: '//a[@id="footer_HJ3BW-xEtig-"]',
            locateStrategy: 'xpath'
        },
        lnk_Menu:{
            selector:'//i[@class="hrm-icon hrm-icon--menuIcon"]',
            locateStrategy:'xpath'
        },
        lnk_DFC:{
            selector:'//span[text()="Digital Filing Cabinet"]',
            locateStrategy:'xpath'
        },
        lnk_Profile:{
            selector:'//a[@title="Profile"]',
            locateStrategy:'xpath'
        },
        lnk_Viewprofile:{
            selector:'//a[@title="View Profile"]',
            locateStrategy:'xpath'
        }
    },
    Footer_Page: {
        lnkheader_AcceptableUse: {
            selector: '(//a[contains(text(),"Acceptable Use")])[1]',
            locateStrategy: 'xpath'
        },
        lblheader_AcceptableUse: {
            selector: '//h1[text()="Acceptable Use"]',
            locateStrategy: 'xpath'
        },
        lblcontent_AcceptableUse: {
            selector: '//h3[text()="1. Prohibited uses"]',
            locateStrategy: 'xpath'
        },
        lnkheader_Cookiepolicy: {
            selector: '(//a[contains(text(),"Cookie Policy")])[1]',
            locateStrategy: 'xpath'
        },
        lblheader_Cookiepolicy: {
            selector: '//h1[text()="Cookie Policy"]',
            locateStrategy: 'xpath'
        },
        lblcontent_Cookiepolicy: {
            selector: '//h3[text()="1. WHAT IS A COOKIE?"]',
            locateStrategy: 'xpath'
        },
        lblheader_Privacypolicy: {
            selector: '//h1[text()="Privacy Policy"]',
            locateStrategy: 'xpath'
        },
        lblcontent_Privacypolicy: {
            selector: '//h1[text()="1. WHAT DATA DO WE  COLLECT?"]',
            locateStrategy: 'xpath'
        },
        lnkheader_TermsofUse: {
            selector: '(//a[contains(text(),"Terms of Use")])[1]',
            locateStrategy: 'xpath'
        },
        lblheader_TermsofUse: {
            selector: '//h1[text()="Terms of Use"]',
            locateStrategy: 'xpath'
        },
        lblcontent_TermsofUse: {
            selector: '//strong[text()="Other Applicable Terms"]',
            locateStrategy: 'xpath'
        },
        lnkheader_Help_Contacts: {
            selector: '(//a[contains(text(),"Help & Contacts")])[1]',
            locateStrategy: 'xpath'
        },
        lblheader_Help_Contacts: {
            selector: '//a[@id="evo-tab-group_ByvHZWlEtslZ"]',
            locateStrategy: 'xpath'
        },
        lblcontent_Help_Contacts: {
            selector: '//evo-accordion-static[text()="How do I search for information on the site?"]',
            locateStrategy: 'xpath'
        },


    },
    Health_page: {

        btn_Keepreading: {
            selector: '(//*[text()="Keep Reading"])[1]',
            locateStrategy: 'xpath'
        }
    },
    FullArticle_page: {
        lnk_Send: {
            selector: '//a[@title="Send"]',
            locateStrategy: 'xpath'

        },
        lbl_Sendtome: {
            selector: '//label[text()="Send to me"]',
            locateStrategy: 'xpath'
        },
        toggle_Sendtome:{
            selector: '//div[@class="evo-slide-toggle--slider"]',
            locateStrategy: 'xpath'
        },
        lbl_Selectexistingmember: {
            selector: '//label[text()="Select existing Member"]',
            locateStrategy: 'xpath'

        },

        drp_Selectexistingmember: {
            selector: '//select',
            locateStrategy: 'xpath'
        },
        lnk_nonmember: {
            selector: '//a[text()="Send to a non-member"]',
            locateStrategy: 'xpath'
        },
        btn_Send:{
            selector:'//button[@title="Send"]',
            locateStrategy:'xpath'
        },
        lnk_Cancel:{
            selector:'//a[@title="Cancel"]',
            locateStrategy:'xpath'
        },
        input_Firstname: {
            selector: '//input[@formcontrolname="firstName"]',
            locateStrategy: 'xpath'
        },
        input_Lastname: {
            selector: '//input[@formcontrolname="lastName"]',
            locateStrategy: 'xpath'
        },
        input_Emailaddress: {
            selector: '//input[@formcontrolname="email"]',
            locateStrategy: 'xpath'
        },
        lbl_Alertmsg:{
            selector:'//evo-alert-content[text()="Your Article has been sent."]',
            locateStrategy:'xpath'
        },
        lnk_Close:{
            selector:'//a[@title="Close"]',
            locateStrategy:'xpath'
        }

    },

    // Following section has web elements of Forgot password page of HLI
    Forgot_Password_Page : {

        headerText_ForgotYour :{
            selector :'//h2[contains(text(),"Forgot Your")]',
            locateStrategy :'xpath'
        },

        headerText_Password :{
            selector :'//h2/span[contains(text(),"Password")]',
            locateStrategy :'xpath'
        },

        txt_FirstName :{
            selector :'//input[@placeholder="First Name"]',
            locateStrategy :'xpath'
        },

        txt_LastName :{
            selector :'//input[@placeholder="Last Name"]',
            locateStrategy :'xpath'
        },

        txt_EmailAddress :{
            selector :'//input[@placeholder="Email Address"]',
            locateStrategy :'xpath'
        }



    }

}



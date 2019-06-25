module.exports = {

    // Below section has web elements of Login page of HLI
    Login_Page: {
        link_HLILogo: {
            selector: "//a[contains(@class,'header__title header__logo')]",
            locateStrategy: 'xpath'
        },
        link_HLILogo_BeforeLogin: {
            selector: '//a[@class="header__title header__logo"]',
            locateStrategy: 'xpath'
        },
        input_Email: {
            selector: '//input[@type="email"]',
            locateStrategy: 'xpath'
        },
        input_Password: {
            selector: '//input[@type="password"]',
            locateStrategy: 'xpath'
        },
        btn_Submit: {
            selector: '//button[@type="submit"]',
            locateStrategy: 'xpath'
        },
        lnk_Feedback: {
            selector: "//body/img",
            locateStrategy: 'xpath'
        },
        iframe_feedback: {
            selector: '//div[@class="usabilla_live_button_container"]/iframe',
            locateStrategy: 'xpath'
        },
        lnk_HLILogoFooter: {
            selector: "//div[text()='HEALTHY LIVES INDEX']",
            locateStrategy: 'xpath'
        },
        lnk_HLILogoFooterText: {
            selector: '//p[contains(.,"Interested in Healthy Lives for your business? We\'d love to hear from you.")]',
            locateStrategy: 'xpath'
        },
        lbl_WhatIsHLI: {
            selector: '//div[text()="HLI is an online service that brings together information about your health, wealth and career in one secure place, giving you get a clearer view of your present and helping you understand what changes you could make to improve your future."]',
            locateStrategy: 'xpath'
        },
        lbl_WhoIsMercer: {
            selector: '//div[text()="Mercer makes a difference in the lives of more than 110 million people every day by advancing their health, wealth, and careers. For more than 70 years, we\'ve turned our insights into actions, enabling people around the globe to live, work, and retire well."]',
            locateStrategy: 'xpath'
        },
        lbl_ValueOfHLI: {
            selector: '//div[text()="By using our simple online tools, you are able to see how small changes (for example to your lifestyle or your pension contribution) could have a significant impact on your future. It is then possible to take immediate action by choosing one of the personalized options provided."]',
            locateStrategy: 'xpath'
        },
        lnk_findOutMore: {
            selector: "//a[contains(text(),'Find Out More')]",
            locateStrategy: 'xpath'
        },
        lnk_mercerLogo: {
            selector: "//img[@src='assets/images/logo-mercer.png']",
            locateStrategy: 'xpath'
        },
        lbl_allRightReserved: {
            selector: "//div[contains(text(),'© 2018 MERCER LLC, ALL RIGHTS RESERVED.')]",
            locateStrategy: 'xpath'
        },
        lbl_IncorrectCredentialsErrorMessage: {
            selector: "//span[contains(text(),'Sorry, your email address or password is incorrect. Please try again.')]",
            locateStrategy: 'xpath'

        },
        Forget_Pwd: {
            selector: "//strong[contains(text(),'Forgot Your Password')]",
            locateStrategy: 'xpath'
        },
        Current_Password: {
            selector: "(//input[@type='password'])[1]",
            locateStrategy: 'xpath'
        },
        New_Password: {
            selector: "(//input[@type='password'])[2]",
            locateStrategy: 'xpath'
        },
        New_ReType_Password: {
            selector: "(//input[@type='password'])[3]",
            locateStrategy: 'xpath'
        },
        feedBack_Button: {
            selector: "//img[@src='https://d6tizftlrpuof.cloudfron .net/themes/production/mercer-button-f2ef7634711daefaed73e063ecf3a7d2.png']",
            locateStrategy: 'xpath'
        },
        FeedBack_Logo: {
            selector: "//div[@id='logo']",
            locateStrategy: 'xpath'
        },


    },

    // Following section has web elements of Forgot password page of HLI
    Forgot_Password_Page: {

        headerText_AccountLocked: {
            selector: '//h2[contains(text(),"Your Account Has Been ")]',
            locateStrategy: 'xpath'
        },
        alertText_AccountDisable: {
            selector: '//div[@class="evo-alert__container evo-alert--danger"]',
            locateStrategy: 'xpath'
        },
        subHeading_AccountDisable: {
            selector: '//h5[contains(text(), " What To Do Next?")]',
            locateStrategy: 'xpath'
        },
        textStarting_AccountDisable: {
            selector: '//p[@class="evo-layout--margin-bottom"]',
            locateStrategy: 'xpath'
        },
        headerText_ForgotYour: {
            selector: '//h2[contains(text(),"Forgot Your")]',
            locateStrategy: 'xpath'
        },
        headerText_PasswordExpired: {
            selector: '//h2[contains(text(),"Your Password Reset Link Has")]',
            locateStrategy: 'xpath'
        },
        contactDetails_PasswordExpired: {
            selector: '//a[@title="Contact Support Team"]',
            locateStrategy: 'xpath'
        },
        backToLogin_PasswordExpired: {
            selector: '//a[contains(@id,"reset-password-expired")]',
            locateStrategy: 'xpath'
        },
        backToLogin_AccountLocked: {
            selector: '//a[contains(@title,"Back to Login")]',
            locateStrategy: 'xpath'
        },

        headerText_Password: {
            selector: '//h2/span[contains(text(),"Password")]',
            locateStrategy: 'xpath'
        },

        txt_FirstName: {
            selector: '//input[@placeholder="First Name"]',
            locateStrategy: 'xpath'
        },

        txt_LastName: {
            selector: '//input[@placeholder="Last Name"]',
            locateStrategy: 'xpath'
        },

        txt_EmailAddress: {
            selector: '//input[@placeholder="Email Address"]',
            locateStrategy: 'xpath'
        },
        btn_Cancle: {
            selector: '//button[@type="button"]',
            locateStrategy: 'xpath'
        },
        Error_Msg: {
            selector: '//div[@class="evo-alert__content"]',
            locateStrategy: 'xpath'
        }

    },


    Dashboard_page: {
        icon_Profile: {
            selector: '//a[@class=\'header__anchor--avatar\']',
            locateStrategy: "xpath"
        },
        img_avatar: {
            selector: "//div[@class='profile__avatar__image']/img",
            locateStrategy: "xpath"
        },
        icon_View_Profile: {
            selector: '//a[@title="View Profile"]',
            locateStrategy: "xpath"
        },
        icon_Cancle_New_Bookmark: {
            selector: '//a[@id="close"]',
            locateStrategy: "xpath"
        },
        icon_Menu: {
            selector: "//div[@class='header__burger u-flex align-middle']",
            locateStrategy: "xpath"
        },
        icon_Summary: {
            selector: "//a[@href='/health/summary']",
            locateStrategy: "xpath"
        },
        icon_Data: {
            selector: "//a[@href='/health/data']",
            locateStrategy: "xpath"
        },
        img_Dashboard_Background: {
            selector: "//hm-banner-component/div[1]",
            locateStrategy: "xpath"
        },
        img_Explore_Articles1: {
            selector: "(//div[@class='dashboard__article__image'])[1]",
            locateStrategy: "xpath"
        },
        img_Explore_Articles_TwoImg: {
            selector: "//div[@class='dashboard__article__image']",
            locateStrategy: "xpath"
        },
        img_Explore_Articles2: {
            selector: "(//div[@class='dashboard__article__image'])[2]",
            locateStrategy: "xpath"
        },
        title_Health_Module: {
            selector: "(//h4[@class='evo-layout--no-margin-bottom'])[1]",
            locateStrategy: "xpath"
        },
        title_Explore_Module: {
            selector: "(//h4[@class='evo-layout--no-margin-bottom'])[2]",
            locateStrategy: "xpath"
        },
        title_Recommended_Module: {
            selector: "//div[@class='dashboard-card dashboard-card--ad dashboard_NxjGvW9x5t']",
            locateStrategy: "xpath"
        },
        link_seeMoreAtBookMarkArticale: {
            selector: "(//i[@class='evo-icon evo-icon--arrow-down3'])[2]",
            locateStrategy: "xpath"
        },

        title_Bookmarked_Articles: {
            selector: "(//div[@class='large-9 medium-7 small-8'])[2]",
            locateStrategy: "xpath"
        },
        title_Products_Services: {
            selector: "(//h4[@class='evo-layout--no-margin-bottom'])[4]",
            locateStrategy: "xpath"
        },
        title_DFC_Small_Panel: {
            selector: "(//h4[@class='evo-layout--no-margin-bottom'])[5]",
            locateStrategy: "xpath"
        },
        title_Quick_Links: {
            selector: "(//h4[@class='evo-layout--no-margin-bottom'])[3]",
            locateStrategy: "xpath"
        },
        title_Employer_Large_Panel: {
            selector: "(//h4[@class='evo-layout--no-margin-bottom'])[4]",
            locateStrategy: "xpath"
        },
        Health_Age_Score_Panel: {
            selector: "//div[@class='hm-circle-chart-container']",
            locateStrategy: "xpath"
        },
        Icon_Health: {
            selector: "(//div[@class='evo-icon-circle__content'])[2]",
            locateStrategy: "xpath"
        },
        Title_Health: {
            selector: "//div[@class='large-9 medium-7 small-8']",
            locateStrategy: "xpath"
        },
        Title_Sub_Health: {
            selector: "(//p[@class='evo-layout--no-margin evo-font--medium'])[2]",
            locateStrategy: "xpath"
        },
        Health_Link_One: {
            selector: "(//h5[@class='evo-type--subheader'])[1]",
            locateStrategy: "xpath"
        },
        Health_Link_Two: {
            selector: "(//h5[@class='evo-type--subheader'])[2]",
            locateStrategy: "xpath"
        },
        Health_Link_Three: {
            selector: "(//h5[@class='evo-type--subheader'])[3]",
            locateStrategy: "xpath"
        },
        Health_Link_Count: {
            selector: "//h5[@class='evo-type--subheader']",
            locateStrategy: "xpath"

        },
        Health_Score: {
            selector: "//div[@class='dashboard-card__score']",
            locateStrategy: "xpath"
        },
        Button_Health_Summary: {
            selector: "//a[@class='evo-button evo-button--inverted evo-button--expand dashboard_TVEkL6Hm95 evo-button--white chevron-button']",
            locateStrategy: "xpath"
        },
        Health_SeeLess: {
            selector: "//i[@class='evo-icon evo-icon--arrow-up3']",
            locateStrategy: "xpath"
        },
        Explore_Article1: {
            selector: "(//div[@class='small-6 column'])[1]",
            locateStrategy: "xpath"
        },
        Explore_Article2: {
            selector: "(//div[@class='small-6 column'])[2]",
            locateStrategy: "xpath"
        },
        Explore_Article3: {
            selector: "(//div[@class='small-12'])[3]",
            locateStrategy: "xpath"
        },
        Explore_Article4: {
            selector: "(//div[@class='small-12'])[4]",
            locateStrategy: "xpath"
        },

        show_More_BookMark: {
            selector: " //a[@class='evo-button evo-button--lime evo-button--wide-md evo-button--expand-mobile evo-layout--clearfix']",
            locateStrategy: "xpath"
        },
        location_DFC_SideBySide: {
            selector: "((//div[@class='evo-spacer-mobile--padding-left-base evo-spacer-mobile--padding-right-base'])//div[@class='dashboard-card__header'])[1]",
            locateStrategy: "xpath"
        },
        toggle_DashBoard: {
            selector: "//input[@class='evo-slide-toggle--input ng-untouched ng-valid ng-dirty']",
            locateStrategy: "xpath"
        },


        quickLink_Img: {
            selector: "(//i[@class='icon-separator evo-icon evo-icon--cog'])[1]",
            locateStrategy: "xpath"
        },
        quickLink_Name: {
            selector: "(//a[@class='no-text-decoration evo-text--onyx-dark-60'])[1]",
            locateStrategy: "xpath"
        },
        quickLink_Link: {
            selector: "(//a[@href='/health/summary'])[2]",
            locateStrategy: "xpath"
        },

        submenu_Home: {
            selector: "//span[text()='Home']",
            locateStrategy: "xpath"
        },
        submenu_HealthAge: {
            selector: "//span[text()='Health Age']",
            locateStrategy: "xpath"
        },
        submenu_Badges: {
            selector: "//span[text()='Badges']",
            locateStrategy: "xpath"
        },
        submenu_Challenges: {
            selector: "//span[text()='Challenges']",
            locateStrategy: "xpath"
        },
        submenu_ProductAndServices: {
            selector: "//span[text()='Product & Services']",
            locateStrategy: "xpath"
        },
        submenu_ArticlesAndVideos: {
            selector: "//span[text()='Articles & Videos']",
            locateStrategy: "xpath"
        },
        submenu_DigitalFilingCabinet: {
            selector: "//span[text()='Digital Filing Cabinet']",
            locateStrategy: "xpath"
        },
        submenu_HelpAndContacts: {
            selector: "//span[text()='Help & Contacts']",
            locateStrategy: "xpath"
        },
        submenu_AdminConsole: {
            selector: "//span[text()='Admin Console']",
            locateStrategy: "xpath"
        },
        lnk_profileIcon: {
            selector: "//a[@title='Profile']",
            locateStrategy: "xpath"

        },
        lnk_viewProfile: {
            selector: "//a[@title='View Profile']",
            locateStrategy: "xpath"

        },
        lnk_logout: {
            selector: "//a[@title='Log Out']",
            locateStrategy: "xpath"

        },
        lnk_acceptableUse: {
            selector: "//a[@title='Acceptable Use']",
            locateStrategy: "xpath"

        },
        lnk_CookiePolicy: {
            selector: "//a[@title='Cookie Policy']",
            locateStrategy: "xpath"

        },
        lnk_PrivacyPolicy: {
            selector: "//a[@title='Privacy Policy']",
            locateStrategy: "xpath"

        },
        lnk_TermsOfUse: {
            selector: "//a[@title='Terms of Use']",
            locateStrategy: "xpath"

        },
        lnk_HelpAndContacts: {
            selector: "//a[@title='Help & Contacts']",
            locateStrategy: "xpath"
        },
        btn_NotificationBell: {
            selector: "//i[@class='hrm-icon hrm-icon--notifications']",
            locateStrategy: "xpath"
        },
        btn_ReadArticle: {
            selector: "//a[@href='/article/2363']",
            locateStrategy: "xpath"
        },
        lnk_HeaderAcceptableUse: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[contains(text(),'Acceptable Use')]",
            locateStrategy: "xpath"

        },
        lnk_HeaderCookiePolicy: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[contains(text(),'Cookie Policy')]",
            locateStrategy: "xpath"

        },
        lnk_HeaderPrivacyPolicy: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[contains(text(),'Privacy Policy')]",
            locateStrategy: "xpath"

        },
        lnk_HeaderTermsOfUse: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[contains(text(),'Terms of Use')]",
            locateStrategy: "xpath"

        },
        lnk_HeaderHelpAndContacts: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[contains(text(),'Help & Contacts')]",
            locateStrategy: "xpath"
        },
        iframe_feedback: {
            selector: '//div[@class="usabilla__overlay"]/iframe',
            locateStrategy: 'xpath'
        },
        icon_Cancel_New_Bookmark: {
            selector: '//a[@id="close"]',
            locateStrategy: "xpath"
        },
        iconImg_Badges: {
            selector: "//i[@class='hrm-icon hrm-icon--badge menu__anchor__icon']",
            locateStrategy: "xpath"
        },
        iconImg_Challenges: {
            selector: "//i[@class='hrm-icon hrm-icon--challenges menu__anchor__icon']",
            locateStrategy: "xpath"
        },
        SecondaryNavigation: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']",
            locateStrategy: "xpath"
        },
        SecondaryNavigation_Challenges: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[2]",
            locateStrategy: "xpath"
        },
        SecondaryNavigation_Badges: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav hide-for-small-only']//a[3]",
            locateStrategy: "xpath"
        }

    },

    //locators for Privacy Policy dashboard
    Privacy_Policy_Dashboard: {
        header_PrivacyPolicyDashBoard: {
            selector: "//h1[text()='Privacy Policy dashboard']",
            locateStrategy: "xpath"
        },
        header_WHAT_DATA_DO_WE_COLLECT: {
            selector: "//h3[text()='1. WHAT DATA DO WE COLLECT?']",
            locateStrategy: "xpath"
        },
        header_HOW_DO_WE_USE_THE_DATA_WE_COLLECT: {
            selector: "//h3[text()='2. HOW DO WE USE THE DATA WE COLLECT?']",
            locateStrategy: "xpath"
        },
        header_WITH_WHOM_DO_WE_SHARE_YOUR_DATA: {
            selector: "//h3[text()='3. WITH WHOM DO WE SHARE YOUR DATA?']",
            locateStrategy: "xpath"
        },
        header_WHAT_STEPS_DO_WE_TAKE_TO_PROTECT_YOUR_INFORMATION: {
            selector: "//h3[text()='4. WHAT STEPS DO WE TAKE TO PROTECT YOUR INFORMATION?']",
            locateStrategy: "xpath"
        },
        header_WHAT_RIGHTS_AND_OBLIGATIONS_DO_YOU_HAVE_WITH_RESPECT_TO_YOUR_DATA: {
            selector: "//h3[text()='5. WHAT RIGHTS AND OBLIGATIONS DO YOU HAVE WITH RESPECT TO YOUR DATA?']",
            locateStrategy: "xpath"
        },
        header_SOME_OTHER_MATTERS: {
            selector: "//h3[text()='6. SOME OTHER MATTERS']",
            locateStrategy: "xpath"
        },

    },

    // Locators for cookies policy
    Cookies_Policy_Dashboard: {
        header_CookiesPolicyDashBoard: {
            selector: "//h1[text()='Cookie Policy dashboard']",
            locateStrategy: "xpath"
        },
        header_WHAT_IS_A_COOKIE: {
            selector: "//h3[text()='1. WHAT IS A COOKIE?']",
            locateStrategy: "xpath"
        },
        header_HOW_AND_WHY_WE_USE_COOKIES: {
            selector: "//h3[text()='2. HOW AND WHY WE USE COOKIES']",
            locateStrategy: "xpath"
        },
        header_KEEPING_YOUR_PERSONAL_INFORMATION_SAFE: {
            selector: "//h3[text()='3. KEEPING YOUR PERSONAL INFORMATION SAFE']",
            locateStrategy: "xpath"
        },
        header_WHAT_COOKIES_DO_WE_USE_ON_OUR_WEBSITE: {
            selector: "//h3[text()='4. WHAT COOKIES DO WE USE ON OUR WEBSITE?']",
            locateStrategy: "xpath"
        },
        header_HOW_TO_MANAGE_COOKIES_THROUGH_THE_BROWSER: {
            selector: "//h3[text()='5. HOW TO MANAGE COOKIES THROUGH THE BROWSER']",
            locateStrategy: "xpath"
        }
    },
// Locators for view profile
    View_Profile: {
        tab_personal: {
            selector: '//a[@href="/profile/personal-info"]',
            locateStrategy: "xpath"
        },
        tab_communications: {
            selector: '//a[@href="/profile/communications"]',
            locateStrategy: "xpath"
        },
        tab_privacy: {
            selector: '//a[@href="/profile/privacy"]',
            locateStrategy: "xpath"
        },
        img_Background: {
            selector: '//div[@class="evo-banner banner evo-flex-column--center evo-position--relative evo-banner__hue  evo-layout--no-padding"]',
            locateStrategy: "xpath"
        },
        icon_Camera_Background: {
            selector: '(//i[@class="hrm-icon hrm-icon--camera"])[1]',
            locateStrategy: "xpath"
        },
        icon_Camera: {
            selector: "//span[contains(text(),'Browse my computer')]/../../input",
            locateStrategy: "xpath"
        },
        icon_Browse_my_computer: {
            selector: '//span[contains(text(),"Browse my computer")]',
            locateStrategy: "xpath"
        },
        about_You_edit_icon: {
            selector: '(//i[@class="evo-icon evo-icon--pen6"])[1]',
            locateStrategy: "xpath"
        },
        about_You_edit_icon_MoreAboutU: {
            selector: '(//i[@class="evo-icon evo-icon--pen6"])[2]',
            locateStrategy: "xpath"
        },
        about_You_edit_icon_Job: {
            selector: '(//i[@class="evo-icon evo-icon--pen6"])[3]',
            locateStrategy: "xpath"
        },
        profile_Fisrt_Name: {
            selector: '(//div[@class="profile__box__value profile__box__value__non-editable"])[1]',
            locateStrategy: "xpath"
        },

        profile_Last_Name: {
            selector: '(//div[@class="profile__box__value profile__box__value__non-editable"])[2]',
            locateStrategy: "xpath"
        },
        profile_Date_of_Birth: {
            selector: '//label[text()="Date of Birth"]/..//div',
            locateStrategy: "xpath"

        },
        profile_Address: {
            selector: "(//div[@class='profile__box__value profile__box__value__non-editable'])[4]",
            locateStrategy: "xpath"

        },
        profile_Post_Code: {
            selector: "(//div[@class='profile__box__value profile__box__value__non-editable'])[5]",
            locateStrategy: "xpath"

        },
        profile_My_Sub: {
            selector: '//h3[contains(text(),"My Subscriptions")]',
            locateStrategy: "xpath"

        },

        profile_City: {
            selector: "(//div[@class='profile__box__value profile__box__value__non-editable'])[6]",
            locateStrategy: "xpath"

        },
        profile_Sub_List: {
            selector: "//li[@class='profile-list__sub']",
            locateStrategy: "xpath"

        },
        profile_Sub_Cancle: {
            selector: '//i[@class="evo-icon evo-icon--cross2"]',
            locateStrategy: "xpath"

        },

        profile_Country: {
            selector: "(//div[@class='profile__box__value profile__box__value__non-editable'])[7]",
            locateStrategy: "xpath"


        },
        profile_Email: {
            selector: ' //div[@class="profile__box__value profile__box__value--fade profile__box__value__non-editable"]',
            locateStrategy: "xpath"


        },
        profile_Gender: {
            selector: " //div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"


        },
        Ethnicity_Group: {
            selector: " (//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        Ethnicity: {
            selector: " (//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        marital_Status: {
            selector: " (//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: "xpath"
        },
        no_Of_Children: {
            selector: "//input[@class='evo-layout--no-margin profile__box__input ng-pristine ng-valid ng-touched']",
            locateStrategy: "xpath"
        },
        qus_Carer: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        qus_Pregnent: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        qus_Work_Location: {
            selector: "(//div[@class='evo-dropdown__value'])[5]",
            locateStrategy: "xpath"
        },
        qus_Currency: {
            selector: "(//div[@class='evo-dropdown__value'])[4]",
            locateStrategy: "xpath"
        },
        qus_Annual_Salary: {
            selector: "(//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: "xpath"
        },
        qus_Job_Description: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        qus_HLE: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"

        },
        button_SaveImage: {
            selector: "//span[text()='Save']/..",
            locateStrategy: "xpath"
        },

        img_background: {
            selector: "//div[@class='evo-banner banner evo-flex-column--center evo-position--relative evo-banner__hue  evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        img_avatar: {
            selector: "//div[@class='profile__avatar__image']/img",
            locateStrategy: "xpath"
        },
        upload_ProfilePic: {
            selector: "//span[@class='profile__avatar__icon']/..//input",
            locateStrategy: "xpath"
        },
        errorMsg_5Mb: {
            selector: "//*[contains(text(),'File size should be less than 5 MB.')]",
            locateStrategy: "xpath"
        },
        errorMsg_5MBBackgroundImage: {
            selector: "//*[contains(text(),'The file size exceeds the 5Mb')]",
            locateStrategy: "xpath"
        },
        btn_CancelBackgroundPic: {
            selector: "//button[text()='Cancel']",
            locateStrategy: "xpath"
        }

    },
    // Locators for terms of use page
    Terms_Of_Use_Dashboard: {
        header_GOTODASHBOARD: {
            selector: "//a[@class='evo-button evo-button--inverted evo-button--expand dashboard_TVEkL6Hm95 evo-button--white']",
            locateStrategy: "xpath"
        },
        header_TERMSOFUSEDASHBOARD: {
            selector: "//h1[text()='Terms of Use dashboard']",
            locateStrategy: "xpath"
        },
        header_General: {
            selector: "//h3[text()='1. General']",
            locateStrategy: "xpath"
        },
        header_Availibility_and_Access: {
            selector: "//h3[text()='2. Availibility and Access']",
            locateStrategy: "xpath"
        },
        header_Access_Details: {
            selector: "//h3[text()='3. Access Details']",
            locateStrategy: "xpath"
        },
        header_Information: {
            selector: "//h3[text()='4. Information']",
            locateStrategy: "xpath"
        },
        header_Your_Use: {
            selector: "//h3[text()='5. Your Use']",
            locateStrategy: "xpath"
        },
        header_Our_rights_in_this_Website: {
            selector: "//h3[text()='6. Our rights in this Website']",
            locateStrategy: "xpath"
        },
        header_Linking_from_this_Website: {
            selector: "//h3[text()='7. Linking from this Website']",
            locateStrategy: "xpath"
        },
        header_Linking_to_this_Website: {
            selector: "//h3[text()='8. Linking to this Website']",
            locateStrategy: "xpath"
        },
        header_Applicable_Law: {
            selector: "//h3[text()='9. Applicable Law']",
            locateStrategy: "xpath"
        },
        header_Changes: {
            selector: "//h3[text()='10. Changes']",
            locateStrategy: "xpath"
        },
        header_Limitation_of_Liability: {
            selector: "//h3[text()='11. Limitation of Liability']",
            locateStrategy: "xpath"
        },
        header_Contact_us: {
            selector: "//h3[text()='12. Contact us']",
            locateStrategy: "xpath"
        }


    },


    // Locators for Acceptable Use
    Terms_Of_Acceptable_Use: {
        header_Acceptable_Use: {
            selector: "//h1[text()='Acceptable Use']",
            locateStrategy: "xpath"
        },
        header_Prohibited_Uses: {
            selector: "//h3[text()='1. Prohibited uses']",
            locateStrategy: "xpath"
        },
        header_Interactive_Services: {
            selector: "//h3[text()='2. Interactive services']",
            locateStrategy: "xpath"
        },
        header_Content_Standards: {
            selector: "//h3[text()='3. Content standards']",
            locateStrategy: "xpath"
        },
        header_CHANGES_TO_THE_ACCEPTABLE_USE_POLICY: {
            selector: "//h3[text()='4. Changes to the acceptable use policy']",
            locateStrategy: "xpath"
        },
    },
    Health_Age: {
        tab_Healthy: {
            selector: "//a[@href='/health-redesign/healthy-age']",
            locateStrategy: "xpath"
        },
        tab_Fitness: {
            selector: '//span[text()="Fitness"]',
            locateStrategy: "xpath"
        },
        parameter_Fitness: {
            selector: '(//span[text()="Fitness"])[1]',
            locateStrategy: "xpath"
        },
        tab_Nutrition: {
            selector: '//span[text()="Nutrition"]',
            locateStrategy: "xpath"
        },
        parameter_Nutrition: {
            selector: '//span[text()="Nutrition"]',
            locateStrategy: "xpath"
        },
        tab_Substances: {
            selector: '//span[text()="Substances"]',
            locateStrategy: "xpath"
        },
        parameter_Substances: {
            selector: '//span[text()="Substances"]',
            locateStrategy: "xpath"
        },
        tab_Mental_Wellness: {
            selector: '//span[text()="Mental Wellness"]',
            locateStrategy: "xpath"
        },
        parameter_MentalWellness: {
            selector: '//span[text()="Mental Wellness"]',
            locateStrategy: "xpath"
        },
        tab_Clinical: {
            selector: '//span[text()="Clinical"]',
            locateStrategy: "xpath"
        },
        parameter_Clinical: {
            selector: '//span[text()="Clinical"]',
            locateStrategy: "xpath"
        },
        tab_Stress: {
            selector: '//span[text()="Stress"]',
            locateStrategy: "xpath"
        },
        data_Source_Button: {
            selector: '//h3[@class="evo-type--header-rule"]',
            locateStrategy: "xpath"
        },

        tab_Sleep: {
            selector: '//span[text()="Sleep"]',
            locateStrategy: "xpath"
        },
        record_Data_Manually: {
            selector: '//button[@title="Record Data Manually"]',
            locateStrategy: "xpath"
        },
        text_record_Data_Manually: {
            selector: '//div[@class="evo-modal__topper-title"]',
            locateStrategy: "xpath"
        },
        //div[@class='evo-modal__topper-title']
        parameter_OverallWellbeing: {
            selector: '//span[text()="Overall Wellbeing"]',
            locateStrategy: "xpath"
        },
        tab_Mood: {
            selector: '//span[text()="Mood"]',
            locateStrategy: "xpath"
        },
        summary_Button: {
            selector: '//div[@class="summary-button"]',
            locateStrategy: "xpath"
        },
        tab_Biometrics: {
            selector: '//span[text()="Biometrics"]',
            locateStrategy: "xpath"
        },
        parameter_Biometrics: {
            selector: '(//span[text()="Biometrics"])[1]',
            locateStrategy: "xpath"
        },
        icon_Dot: {
            selector: "//div[@class='hm-wheel__marker hm-wheel__marker--value0']",
            locateStrategy: "xpath"
        },
        icon_Add_App: {
            selector: "//img[@alt='Add App']",
            locateStrategy: "xpath"
        },
        icon_connect_App: {
            selector: "//a[@title='Add App']",
            locateStrategy: "xpath"
        },
        text_AddApp: {
            selector: "//div[@class='evo-modal evo-modal__money evo-modal--apps-modal visible']",
            locateStrategy: "xpath"
        },
        icon_Record_Data: {
            selector: "//a[@title='Record Data']",
            locateStrategy: "xpath"
        },
        icon_Record_Data_Cancle: {
            selector: "//a[@class='evo-button evo-button--text evo-button--expand evo-layout--float-left center']",
            locateStrategy: "xpath"
        },
        user_Graph: {
            selector: "//div[@class='hm-wheel']",
            locateStrategy: "xpath"
        },
        user_Total_Score: {
            selector: "//h1[@class='evo-text--sapphire-bright evo-font--bold summary__health-age__age evo-layout--no-margin-bottom']",
            locateStrategy: "xpath"
        },
        text_Record_Data: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        text_Select_Category: {
            selector: "(//div[@class='evo-select-wrapper'])[1]",
            locateStrategy: "xpath"
        },
        text_Select_Matric: {
            selector: "(//div[@class='evo-select-wrapper'])[2]",
            locateStrategy: "xpath"
        },
        app_Garmine: {
            selector: "//a[@title='Garmin']",
            locateStrategy: "xpath"
        },
        option_Activity: {
            selector: "//input[@id='chk0']",
            locateStrategy: "xpath"
        },
        button_RecordDataManually: {
            selector: "//a[@title='Record Data Manually']",
            locateStrategy: "xpath"
        },
        button_Data: {
            selector: "//a[text()='Data']",
            locateStrategy: "xpath"
        },
        button_MandatoryQuestions: {
            selector: "//div[contains(text(),'Mandatory Questions')]",
            locateStrategy: "xpath"
        },
        button_OptionalQuestions: {
            selector: "//div[contains(text(),'Optional Questions')]",
            locateStrategy: "xpath"
        },
        button_EditIconOfSubstanceUsage: {
            selector: "//div[contains(text(),'Substance Usage')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfWorkPressures: {
            selector: "//div[contains(text(),'WORKS PRESSURES')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfWorkOutcomes: {
            selector: "//div[contains(text(),'WORK OUTCOMES')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfEmploymentDetails: {
            selector: "//div[contains(text(),'EMPLOYMENT DETAILS')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfHeartAndLungHealth: {
            selector: "//div[contains(text(),'HEART AND LUNG HEALTH')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfWorkRelationsEngagement: {
            selector: "//div[contains(text(),'WORK RELATIONS & ENGAGEMENTS')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfBMI: {
            selector: "//div[contains(text(),'BMI')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfSubstanceAndActivityLevel: {
            selector: "//div[contains(text(),'SUBSTANCE & ACTIVITY LEVEL')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfFinancialPressure: {
            selector: "//div[contains(text(),'FINANCIAL PRESSURES')]/i",
            locateStrategy: "xpath"
        },
        button_EditIconOfSupportAtWork: {
            selector: "//div[contains(text(),'SUPPORT AT WORK')]/i",
            locateStrategy: "xpath"
        },
        key_Box: {
            selector: "//div[@class='legend']",
            locateStrategy: "xpath"
        },
        key_Box_Green: {
            selector: "//div[@class='circle green-circle']",
            locateStrategy: "xpath"
        },
        key_Box_Grey: {
            selector: "//div[@class='circle grey-circle']",
            locateStrategy: "xpath"
        },
        key_Box_Red: {
            selector: "//div[@class='circle red-circle']",
            locateStrategy: "xpath"
        },
        text_WhatDoesItMean: {
            selector: "//a[@id='health-summary_Hk9SgbeVFseW']",
            locateStrategy: "xpath"
        },
        tab_App: {
            selector: "//a[@href='/health/apps']",
            locateStrategy: "xpath"
        },
        msg_NoApp: {
            selector: "//div[@class='font-regular-proxima_nova']",
            locateStrategy: "xpath"
        },
        button_Tracker: {
            selector: "//button[contains(text(), 'Add a tracker')]",
            locateStrategy: "xpath"
        },
        list_App: {
            selector: "//div[@class='health-apps--container']//img",
            locateStrategy: "xpath"
        },
        lbl_GoogleFit: {
            selector: "//a[contains(.,'Google Fit')]",
            locateStrategy: "xpath"
        },
        list_App_All: {
            selector: "//div[@class='evo-modal__content']",
            locateStrategy: "xpath"
        },
        heart_Rate_Details: {
            selector: "(//span[contains(text(),'Heart Rate: ')])[1]",
            locateStrategy: "xpath"
        },
        weight_Details: {
            selector: "(//span[contains(text(),'Weight: ')])[1]",
            locateStrategy: "xpath"
        },
        Zoom3_Weight: {
            selector: "//div[contains(text(),'Weight')]",
            locateStrategy: "xpath"
        },
        Zoom3_HeartRate: {
            selector: "//div[contains(text(),'Heart Rate')]",
            locateStrategy: "xpath"
        },
        Zoom3_StairsClimbed: {
            selector: "//div[contains(text(),'Stairs Climbed')]",
            locateStrategy: "xpath"
        },
        Zoom3_CaloriesBurned: {
            selector: "//div[contains(text(),'Calories Burned')]",
            locateStrategy: "xpath"
        },
        Zoom3_Distance: {
            selector: "//div[contains(text(),'Distance')]",
            locateStrategy: "xpath"
        },
        Zoom3_Steps: {
            selector: "//div[contains(text(),'Steps')]",
            locateStrategy: "xpath"
        },
        Calories_Burned_Details: {
            selector: "(//span[contains(text(),'Calories Burned:')])[1]",
            locateStrategy: "xpath"
        },
        Stairs_Climbed_Details: {
            selector: "(//span[contains(text(),'Stairs Climbed: ')])[1]",
            locateStrategy: "xpath"
        },
        ViewHistory_StairsClimbed: {
            selector: "(//span[contains(text(),'Stairs Climbed: ')])[1]/..//span[text()='View History']",
            locateStrategy: "xpath"
        },
        ViewHistory_CaloriesBurned: {
            selector: "(//span[contains(text(),'Calories Burned:')])[1]/..//span[text()='View History']",
            locateStrategy: "xpath"
        },
        ViewHistory_Distance: {
            selector: "(//span[contains(text(),'Distance:')])[1]/..//span[text()='View History']",
            locateStrategy: "xpath"
        },
        ViewHistory_Steps: {
            selector: "(//span[contains(text(),'Steps:')])[1]/..//span[text()='View History']",
            locateStrategy: "xpath"
        },
        ViewHistory_Weight: {
            selector: "(//span[contains(text(),'Weight:')])[1]/..//span[text()='View History']",
            locateStrategy: "xpath"
        },
        ViewHistory_HeartRate: {
            selector: "(//span[contains(text(),'Heart Rate:')])[1]/..//span[text()='View History']",
            locateStrategy: "xpath"
        },
        Distance_Details: {
            selector: "(//span[contains(text(),'Distance: ')])[1]",
            locateStrategy: "xpath"
        },
        steps_Details: {
            selector: "(//span[contains(text(),'Steps:')])[1]",
            locateStrategy: "xpath"
        },
        weekly_avg_Details: {
            selector: "//div[@class='evo-text-align--center evo-text-size--medium']",
            locateStrategy: "xpath"
        },
        DataOver_Month: {
            selector: "//div[contains(text(),'Month')]",
            locateStrategy: "xpath"
        },
        DataOver_Year: {
            selector: "//div[contains(text(),'Year')]",
            locateStrategy: "xpath"
        },
        count_weekly_Details: {
            selector: "//span[@class='evo-font--medium']",
            locateStrategy: "xpath"
        },
        back_to_Zoom2: {
            selector: "//a[@class='evo-text--sapphire-bright no-text-decoration evo-text-size--medium']",
            locateStrategy: "xpath"
        },
        Zoom2_Biometrics: {
            selector: "//h2[@class='evo-page-header__subtitle' and contains(text(),'Biometrics')]",
            locateStrategy: "xpath"
        },
        Zoom2_Fitness: {
            selector: "//h2[@class='evo-page-header__subtitle' and contains(text(),'Fitness')]",
            locateStrategy: "xpath"
        },
        button_Monthly: {
            selector: "//div[text()='Month']",
            locateStrategy: "xpath"
        },
        button_Yearly: {
            selector: "//div[text()='Year']",
            locateStrategy: "xpath"
        },
        button_Weekly: {
            selector: "//div[text()='This week']",
            locateStrategy: "xpath"
        },
        graph_Weekly: {
            selector: "//div[@class='health-bar-chart-wrapper evo-position--relative']",
            locateStrategy: "xpath"
        },
        Weight: {
            selector: "(//div[@class='hm-wheel__label'])[5]",
            locateStrategy: "xpath"
        },
        Waist_Measurement: {
            selector: "(//div[@class='hm-wheel__label'])[4]",
            locateStrategy: "xpath"
        },
        Heart_Rate: {
            selector: "(//div[@class='hm-wheel__label'])[3]",
            locateStrategy: "xpath"
        },
        Body_Temperature: {
            selector: "(//div[@class='hm-wheel__label'])[2]",
            locateStrategy: "xpath"
        },
        BMI: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        Blood_Pressure: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        Steps: {
            selector: "(//div[@class='hm-wheel__label'])[7]",
            locateStrategy: "xpath"
        },
        Distance: {
            selector: "(//div[@class='hm-wheel__label'])[6]",
            locateStrategy: "xpath"
        },
        Stairs_Climbed: {
            selector: "(//div[@class='hm-wheel__label'])[5]",
            locateStrategy: "xpath"
        },
        Calories_Burned: {
            selector: "(//div[@class='hm-wheel__label'])[4]",
            locateStrategy: "xpath"
        },
        Breath_Holding: {
            selector: "(//div[@class='hm-wheel__label'])[3]",
            locateStrategy: "xpath"
        },
        Activity_Frequency: {
            selector: "(//div[@class='hm-wheel__label'])[2]",
            locateStrategy: "xpath"
        },

        Activity_Duration: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        Strees: {
            selector: "(//div[@class='hm-wheel__label'])[3]",
            locateStrategy: "xpath"
        },
        Sleep_Durations: {
            selector: "(//div[@class='hm-wheel__label'])[2]",
            locateStrategy: "xpath"
        },

        Happines: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        Water_Intake: {
            selector: "(//div[@class='hm-wheel__label'])[7]",
            locateStrategy: "xpath"
        },
        Unhealthy_Snacks: {
            selector: "(//div[@class='hm-wheel__label'])[6]",
            locateStrategy: "xpath"
        },
        Fruit_Veg_Intake: {
            selector: "(//div[@class='hm-wheel__label'])[5]",
            locateStrategy: "xpath"
        },
        Cooking_Frequency: {
            selector: "(//div[@class='hm-wheel__label'])[4]",
            locateStrategy: "xpath"
        },
        Cholesterol: {
            selector: "(//div[@class='hm-wheel__label'])[3]",
            locateStrategy: "xpath"
        },
        Calories_Intake: {
            selector: "(//div[@class='hm-wheel__label'])[2]",
            locateStrategy: "xpath"
        },

        Blood_Sugar_Fasting: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        Mental_Health_Self_Assessment: {
            selector: "(//div[@class='hm-wheel__label'])[2]",
            locateStrategy: "xpath"
        },

        Health_Self_Assessment: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        Alcohol: {
            selector: "(//div[@class='hm-wheel__label'])[2]",
            locateStrategy: "xpath"
        },

        Smoking: {
            selector: "(//div[@class='hm-wheel__label'])[1]",
            locateStrategy: "xpath"
        },
        list_ConnectedApp_First: {
            selector: "(//a[@data-reveal-id='connectApp'])[1]",
            locateStrategy: "xpath"

        },
        list_ConnectedApp_Second: {
            selector: "(//a[@data-reveal-id='connectApp'])[2]",
            locateStrategy: "xpath"

        },
        list_ConnectedApp_Third: {
            selector: "(//a[@data-reveal-id='connectApp'])[3]",
            locateStrategy: "xpath"

        },


    },

    // Locators for Help and contact
    Terms_Of_Help_And_Contact: {
        header_Need_Help_Want_To_Give_Feedback: {
            selector: "//h5[contains(text(),'Need help or want to give feedback')]",
            locateStrategy: "xpath"
        },
        lnk_HLIMailId: {
            selector: "//div[@class='row contact-buttons show-for-large-only']//a[contains(text(),'healthylives@mercer.com')]",
            locateStrategy: "xpath"
        },
        arrow_QA: {
            selector: "(//h2[@class='evo-accordion__title evo-accordion__title--collapsed evo-flex-row--center-left']//i)[1]",
            locateStrategy: "xpath"
        },
        text_QA: {
            selector: "(//div[@class='article-component__copy'])[1]",
            locateStrategy: "xpath"
        },
        arrow_Close: {
            selector: "//i[@class='evo-icon evo-icon--arrow-up3']",
            locateStrategy: "xpath"
        },
        frequently_Ask_QA: {
            selector: "//div[@id='help-contacts-1']",
            locateStrategy: "xpath"
        },
        feedback_Dropdown: {
            selector: "//select[@id='type']",
            locateStrategy: "xpath"
        },
        dropdown_feedback: {
            selector: "//select[@id='type']",
            locateStrategy: "xpath"
        },
        dropdownOptions_feedback: {
            selector: "//select[@id='type']/option",
            locateStrategy: "xpath"
        },
        default_Dropdown_Value: {
            selector: '//select[@formcontrolname="type"]',
            locateStrategy: 'xpath'
        },
        feedback_Textarea: {
            selector: "//textarea[@id='description']",
            locateStrategy: "xpath"
        },
        feedback_Send_button: {
            selector: "//button[@class='evo-button evo-button--standard']",
            locateStrategy: "xpath"
        },
        error_Default_Msg: {
            selector: "(//div[@class='evo-feedback-form--box__error'])[1]",
            locateStrategy: "xpath"
        },
        error_FeedbackRequired: {
            selector: '//div[@class="evo-feedback-form--box__error"]',
            locateStrategy: 'xpath'
        },
        error_SuccessMessage: {
            selector: "//div[@class='evo-alert__content']",
            locateStrategy: 'xpath'
        },

    },

    // Locators for Terms and condition page
    Terms_And_Condition: {
        lbl_termsOfUse: {
            selector: "//h1[contains(text(),'Terms of Use')]",
            locateStrategy: "xpath"
        },
        lnk_FullPolicy: {
            selector: "//a[contains(.,'Full Policy')]",
            locateStrategy: "xpath"
        },
        cb_TickToAcceptTheTermsOfUse: {
            selector: "//span[@class='checkmark']",
            locateStrategy: "xpath"
        },
        btn_Agree: {
            selector: "//button[contains(.,'Activate my account')]",
            locateStrategy: "xpath"
        },
        btn_Disagree: {
            selector: "//button[contains(text(),'Disagree')]",
            locateStrategy: "xpath"
        },
        modalDialog_DisagreeModalWIndow: {
            selector: "//h1[contains(.,'TERMS OF USE')]",
            locateStrategy: "xpath"
        },
        btn_dismiss: {
            selector: "//button[@class='evo-button evo-button--standard evo-button--wide-lg']",
            locateStrategy: "xpath"
        },
        lbl_AgreeTooltip: {
            selector: '(//*[contains(.,"OOPS! Please accept the Terms of Use. Thank you!")])[4]',
            locateStrategy: 'xpath'
        },
        text_TermsParagraphs: {
            selector: "//div[@class='terms-group__policy']//div[@class='row']//p",
            locateStrategy: 'xpath'
        }


    },

    optional_Congratulation_Message: {
        header_Congratulations: {
            selector: "//div[contains(text(),'Congratulations')]",
            locateStrategy: 'xpath'
        },
        msg_Congratulation: {
            selector: "//div[contains(text(),'You’ve earned the Complete Health Nut Badge for completing the health survey.')]",
            locateStrategy: 'xpath'
        },
        icon_CompleteHealthBedge: {
            selector: "//div[@class='evo-card evo-card--info evo-text-align--center evo-spacer--margin-bottom-medium']",
            locateStrategy: 'xpath'
        },
        btn_MyDashboard: {
            selector: "//a[@title='My Dashboard']",
            locateStrategy: 'xpath'
        },
        btn_Close: {
            selector: "//i[@class='evo-icon evo-icon--cancel-circle evo-modal__close']",
            locateStrategy: 'xpath'
        }


    },

    Screen_Mandatory_Congratulation_Message: {
        header_Congratulations: {
            selector: "//div[contains(text(),'Congratulations')]",
            locateStrategy: 'xpath'
        },
        msg_Congratulation: {
            selector: '//div[@class=\'evo-text--onyx-medium evo-text-align--left evo-font--regular badge-skip--subtitle\']',
            locateStrategy: 'xpath'
        },
        msg_ContinueOptionalSurvey: {
            selector: "//div[contains(text(),'We have enough info for your Health Age Score but if you would like the exclusive one of a kind “Complete Health Nut Badge” and a more comprehensive Health Age complete the remaining questions of the health survey.')]",
            locateStrategy: 'xpath'
        },
        icon_HealthOnboardedBedge: {
            selector: "//div[@class='evo-card evo-card--info evo-text-align--center evo-spacer--margin-bottom-medium']",
            locateStrategy: 'xpath'
        },
        btn_CompleteLater: {
            selector: "//button[@title='Complete Later']",
            locateStrategy: 'xpath'
        },
        btn_ContinueSurvey: {
            selector: "//button[@title='Continue Survey']",
            locateStrategy: 'xpath'
        },
        header_screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: 'xpath'
        }


    },

    Articles_Videos: {
        menu_Icon: {
            selector: "//a[@title='Continue Survey']",
            locateStrategy: 'xpath'
        },
        menu_Health: {
            selector: "//a[contains(text(), 'Health')]",
            locateStrategy: 'xpath'
        },
        menu_Insurance: {
            selector: "//a[contains(text(), 'Insurance')]",
            locateStrategy: 'xpath'
        },
        menu_Debt: {
            selector: "//a[contains(text(), 'Debt')]",
            locateStrategy: 'xpath'
        },
        txt_Keep_Reading: {
            selector: "//i[@class='hrm-icon hrm-icon--bookmark']/../../../..//a[@title='Keep Reading']",
            locateStrategy: 'xpath'
        },
        icon_Bookmarked: {
            selector: "(//i[@class='hrm-icon hrm-icon--marker_flag'])[2]",
            locateStrategy: 'xpath'
        },
        icon_LastBookMark: {
            selector: "(//i[@class='hrm-icon hrm-icon--bookmark'])/..",
            locateStrategy: 'xpath'
        },
        icon_FirstBookMark: {
            selector: "(//i[@class='hrm-icon hrm-icon--marker_flag'])[1]",
            locateStrategy: 'xpath'
        },
        icon_SecondBookMark: {
            selector: "(//i[@class='hrm-icon hrm-icon--marker_flag'])[2]",
            locateStrategy: 'xpath'
        },
        txt_AtSecondBookMark: {
            selector: "//h3[text()='The truth about Vitamin C']",
            locateStrategy: 'xpath'

        },
        txt_AtSecondBookMarkOnBookMarrkArticle: {
            selector: "//div[text()='The truth about Vitamin C']",
            locateStrategy: 'xpath'

        },
        text_PopularArticle: {
            selector: "//h6[contains(text(),'Popular Articles')]",
            locateStrategy: 'xpath'
        },
        lst_PromoCard: {
            selector: '//ul[@evo-equalizer="header content"][1]/li',
            locateStrategy: 'xpath'
        },
        text_PromoCard: {
            selector: "//div[@class='read_status']",
            locateStrategy: 'xpath'
        },
        text_PromoCardPage: {
            selector: "//a[@title='Back to Category']",
            locateStrategy: 'xpath'
        },
        text_Resourse: {
            selector: "(//h6)[2]",
            locateStrategy: 'xpath'
        },
        img_Resourse: {
            selector: '//div[@class="article-component__articles__image"]',
            locateStrategy: 'xpath'
        },
        title_Resourse: {
            selector: '//div[@class="article-component__articles__title"]',
            locateStrategy: 'xpath'
        },
        short_Discription_Resourse: {
            selector: '//div[@evo-equalizer-child="content"]',
            locateStrategy: 'xpath'
        },
        confirm_Article1: {
            selector: '(//div[@class="article-catalogue__category"])[1]',
            locateStrategy: 'xpath'
        },
        article1_Img: {
            selector: "(//div[@class='article-catalogue__feature__image image-darken'])[1]",
            locateStrategy: 'xpath'
        },
        article1_Date: {
            selector: "(//span[@class='article-catalogue__feature__date'])[1]",
            locateStrategy: 'xpath'
        },
        article1_View: {
            selector: "(//span[@class='article-catalogue__feature__date'])[1]",
            locateStrategy: 'xpath'
        },
        article1_Header: {
            selector: "//h3[1]",
            locateStrategy: 'xpath'
        },
        article1_Text: {
            selector: "(//p[@class='text-summary'])[1]",
            locateStrategy: 'xpath'
        },
        popular_Article1_Img: {
            selector: "//div[@class='small-12 columns evo-layout--no-padding']//div[1]",
            locateStrategy: 'xpath'
        },
        popular_Article1_Header: {
            selector: "//div[@class='small-12 columns evo-layout--no-padding']//div[2]",
            locateStrategy: 'xpath'
        },
        popular_Article1_Title: {
            selector: "//div[@class='small-12 columns evo-layout--no-padding']//div[3]",
            locateStrategy: 'xpath'
        }
    },
    Welcome_Screens: {
        btn_ManuallyDoIt: {
            selector: "//a[@title='Manually do it']",
            locateStrategy: 'xpath'
        },
        header_welcome: {
            selector: "//h1/span[contains(text(),'Welcome to Wellness')]",
            locateStrategy: 'xpath'
        },
        pointsOfValue_YourData: {
            selector: "//h2[contains(text(),'Your Data')]",
            locateStrategy: 'xpath'
        },
        pointsOfValue_YourData: {
            selector: "//h2[contains(text(),'Confidentiality')]",
            locateStrategy: 'xpath'
        },
        pointsOfValue_YourData: {
            selector: "//h2[contains(text(),'Security')]",
            locateStrategy: 'xpath'
        },
        btn_acceptAndActivate: {
            selector: "//button[contains(text(),'Accept and Activate')]",
            locateStrategy: 'xpath'
        },
        btn_connectAnApp: {
            selector: "//a[@title='Connect a Tracker']",
            locateStrategy: 'xpath'
        },
        btn_ContinueManually: {
            selector: "//a[@title='Continue Manually']",
            locateStrategy: 'xpath'
        },
        button_ContinueManually: {
            selector: "//a[@title='Continue Manually']",
            locateStrategy: 'xpath'
        }

    },

    Screen_PersonalDetailsConfirmation: {
        header_LetsGetGoing: {
            selector: "//h1[text()='LET’S GET GOING']",
            locateStrategy: 'xpath'
        },
        headerDescription_LetsGetGoing: {
            selector: "//h1[text()='LET’S GET GOING']/..//p",
            locateStrategy: 'xpath'
        },
        header_WhatWeKnowABoutYou: {
            selector: "//h3[contains(text(),'What we know about you')]",
            locateStrategy: 'xpath'
        },
        headerDescription_WhatWeKnowABoutYou: {
            selector: "(//div[@class='profile__box__label'])[1]",
            locateStrategy: 'xpath'
        },
        header_MoreAboutYou: {
            selector: "//h3[contains(text(),'More about you')]",
            locateStrategy: 'xpath'
        },
        headerDescription_MoreAboutYou: {
            selector: "(//div[@class='profile__box__label'])[2]",
            locateStrategy: 'xpath'
        },
        header_JobAndEducation: {
            selector: "//h3[contains(text(),'Job & Education')]",
            locateStrategy: 'xpath'
        },
        headerDescription_JobAndEducation: {
            selector: "(//div[@class='profile__box__label'])[3]",
            locateStrategy: 'xpath'
        },
        textbox_FirstName: {
            selector: "//label[text()='First name']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        textbox_LastName: {
            selector: "//label[text()='Last name']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        textbox_DateOfBirth: {
            selector: "//label[text()='Date of Birth']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        dropdown_Gender: {
            selector: "//label[text()='Gender']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_Gender: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: 'xpath'
        },
        textbox_Address: {
            selector: "//label[text()='Address']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        textbox_Postcode: {
            selector: "//label[text()='Postcode']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        textbox_City: {
            selector: "//label[text()='City']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        textbox_Country: {
            selector: "//label[text()='Country']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        textbox_EditableAddress: {
            selector: "//label[text()='Address']/..//input[1]",
            locateStrategy: 'xpath'
        },
        textbox_EditablePostcode: {
            selector: "//label[text()='Postcode']/..//input[1]",
            locateStrategy: 'xpath'
        },
        textbox_EditableCity: {
            selector: "//label[text()='City']/..//input[1]",
            locateStrategy: 'xpath'
        },
        textbox_EditableCountry: {
            selector: "//label[text()='Country']/..//input[1]",
            locateStrategy: 'xpath'
        },
        textbox_WorkEmail: {
            selector: "//label[text()='Work Email Address']/..//div[@class='profile__box__value profile__box__value--fade profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        dropdown_Ethnicity: {
            selector: "//label[text()='Ethnicity']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_Ethnicity: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        dropdown_EthnicityGroup: {
            selector: "//label[text()='Ethnicity Group']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_EthnicityGroup: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        dropdown_MaritalStatus: {
            selector: "//label[text()='Marital status']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_MaritalStatus: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        textbox_NumberOfChildren: {
            selector: "//label[text()='Number of children']/..//input",
            locateStrategy: 'xpath'
        },
        toggle_AreYouACarer: {
            selector: "//strong[text()='Are you a Carer?']/../..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: 'xpath'
        },
        toggle_AreYouAPregnant: {
            selector: "//strong[text()='Are you Pregnant?']/../..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: 'xpath'
        },
        dropdown_HighestLevelOfEducation: {
            selector: "//label[text()='Highest Level of Education']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_HighestLevelOfEducation: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        dropdown_JobRole: {
            selector: "//label[text()='Job Role']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_JobRole: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        question_AnnualSalary: {
            selector: "//label[text()='Annual Salary']",
            locateStrategy: 'xpath'
        },
        dropdown_AnnualSalary: {
            selector: "//label[text()='Annual Salary']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        question_Currency: {
            selector: "//label[text()='Currency']",
            locateStrategy: 'xpath'
        },
        dropdown_Currency: {
            selector: "//label[text()='Currency']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdown_BranchWorkLocation: {
            selector: "//label[text()='Branch/Work Location']/..//div[@class='evo-dropdown__value']",
            locateStrategy: 'xpath'
        },
        dropdownOptions_BranchWorkLocation: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        dropdownOptions_AnnualSalary: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        dropdownOptions_Currency: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        btn_SaveAndContinue: {
            selector: "//button[@title='Save']",
            locateStrategy: 'xpath'
        },
        txt_editableAddress: {
            selector: "//label[text()='Address']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        txt_editablePostcode: {
            selector: "//label[text()='Postcode']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        txt_editableCity: {
            selector: "//label[text()='City/County']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },
        txt_editableCountry: {
            selector: "//label[text()='Country']/..//div[@class='profile__box__value profile__box__value__non-editable']",
            locateStrategy: 'xpath'
        },

    },


    Screen_WorkOutcomes: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        btn_close: {
            selector: "//span[text()='x']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns evo-spacer-mobile--no-padding']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        question_HelpFromColleaguesWhenStuck: {
            selector: "//div[contains(text(),'If work gets difficult my colleagues help me')]",
            locateStrategy: "xpath"
        },
        toggle_HelpFromColleaguesWhenStuck: {
            selector: "//div[contains(text(),'If work gets difficult my colleagues help me')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_HelpFromColleaguesWhenStuck: {
            selector: "//div[contains(text(),'If work gets difficult my colleagues help me')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_ExpectedFromWork: {
            selector: "//div[contains(text(),'I am clear what is expected at work')]",
            locateStrategy: "xpath"
        },
        toggle_ExpectedFromWork: {
            selector: "//div[contains(text(),'I am clear what is expected at work')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_ExpectedFromWork: {
            selector: "//div[contains(text(),'I am clear what is expected at work')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_SupportiveFeedbackOnWorkDone: {
            selector: "//div[contains(text(),'I am giving supportive feedback on the work I do')]",
            locateStrategy: "xpath"
        },
        toggle_SupportiveFeedbackOnWorkDone: {
            selector: "//div[contains(text(),'I am giving supportive feedback on the work I do')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_SupportiveFeedbackOnWorkDone: {
            selector: "//div[contains(text(),'I am giving supportive feedback on the work I do')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_HelpFromColleagues: {
            selector: "//div[contains(text(),'I get help and support I need from my colleagues')]",
            locateStrategy: "xpath"
        },
        toggle_HelpFromColleagues: {
            selector: "//div[contains(text(),'I get help and support I need from my colleagues')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_HelpFromColleagues: {
            selector: "//div[contains(text(),'I get help and support I need from my colleagues')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_KnowHowToGetWorkDone: {
            selector: "//div[contains(text(),'I know how to go about getting my job done')]",
            locateStrategy: "xpath"
        },
        toggle_KnowHowToGetWorkDone: {
            selector: "//div[contains(text(),'I know how to go about getting my job done')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_KnowHowToGetWorkDone: {
            selector: "//div[contains(text(),'I know how to go about getting my job done')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_ClearAboutRoles: {
            selector: "//div[contains(text(),'I am clear about my duties and responsiblities')]",
            locateStrategy: "xpath"
        },
        toggle_ClearAboutRoles: {
            selector: "//div[contains(text(),'I am clear about my duties and responsiblities')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_ClearAboutRoles: {
            selector: "//div[contains(text(),'I am clear about my duties and responsiblities')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_HowRoleFitsInOrganisation: {
            selector: "//div[contains(text(),'I understand how my work fits in the overall aim of the organisation')]",
            locateStrategy: "xpath"
        },
        toggle_HowRoleFitsInOrganisation: {
            selector: "//div[contains(text(),'I understand how my work fits in the overall aim of the organisation')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_HowRoleFitsInOrganisation: {
            selector: "//div[contains(text(),'I understand how my work fits in the overall aim of the organisation')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_KnowGoalOfDepartment: {
            selector: "//div[contains(text(),'I am clear about the goals and objectives of my department')]",
            locateStrategy: "xpath"
        },
        toggle_KnowGoalOfDepartment: {
            selector: "//div[contains(text(),'I am clear about the goals and objectives of my department')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_KnowGoalOfDepartment: {
            selector: "//div[contains(text(),'I am clear about the goals and objectives of my department')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },

    },

    Self_Registration_Page: {
        header_Screen: {
            selector: "//h2[@class='evo-layout--margin-top evo-text--sapphire-dark highlight-header']",
            locateStrategy: "xpath"
        },
        descriptionScreen: {
            selector: "//p[@class='evo-layout--margin-top evo-layout--padding-bottom']",
            locateStrategy: "xpath"
        },
        txt_firstName: {
            selector: "//input[@formcontrolname=\"firstName\"]",
            locateStrategy: "xpath"
        },
        txt_lastName: {
            selector: "//input[@formcontrolname=\"lastName\"]",
            locateStrategy: "xpath"
        },
        txt_CompanyKeyword: {
            selector: "//input[@formcontrolname=\"companyKeyword\"]",
            locateStrategy: "xpath"
        },
        txt_emailAddress: {
            selector: "//input[@formcontrolname=\"email\"]",
            locateStrategy: "xpath"
        },
        txt_retypeEmailAddress: {
            selector: "//input[@formcontrolname=\"repeatEmail\"]",
            locateStrategy: "xpath"
        },
        txt_password: {
            selector: "//input[@formcontrolname=\"password\"]",
            locateStrategy: "xpath"
        },
        txt_retypePassword: {
            selector: "//input[@formcontrolname=\"repeatPassword\"]",
            locateStrategy: "xpath"
        },
        txt_day: {
            selector: "//evo-dropdown[@id='day']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        txt_month: {
            selector: "//evo-dropdown[@id='month']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        txt_year: {
            selector: "//evo-dropdown[@id='year']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdown_gender: {
            selector: "//select[@formcontrolname=\"gender\"]",
            locateStrategy: "xpath"
        },
        btn_next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_cancel: {
            selector: "//button[contains(text(),'Cancel')]",
            locateStrategy: "xpath"
        },
        lbl_captch: {
            selector: "//re-captcha",
            locateStrategy: "xpath"
        },
        icon_infoAtPassword: {
            selector: "//i[@class='evo-icon evo-icon--info2 evo-text--sapphire-medium evo-tooltip--host']",
            locateStrategy: "xpath"
        },
        msg_PasswordError: {
            selector: "//*[contains(text(),'Passwords must be 8+ characters long, include at least one numeric character and one')]",
            locateStrategy: "xpath"
        },
        email_HLI: {
            selector: "//span[text()='healthlives@mercer.com']",
            locateStrategy: "xpath"
        },
        phone_HLI: {
            selector: "//div[@class='small-12 medium-6 large-6 columns call-us-style evo-layout--no-margin-bottom']",
            locateStrategy: "xpath"
        },
        help_info: {
            selector: "//p[@class='columns medium-10 large-12 evo-layout--float-center footer--text-style']",
            locateStrategy: "xpath"
        },


    },

    Nutrition_Screen: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='evo-font--medium evo-text-size--medium evo-type--text-left evo-layout--margin-bottom']",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },

    },

    Screen_FinancialPressures: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='evo-font--medium evo-text-size--medium evo-spacer--margin-bottom-base evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        question_financialPressureImpact: {
            selector: "//div[contains(text(),'Do financial pressures impact on your relationship with others')]",
            locateStrategy: "xpath"
        },
        question_financialPressureConcern: {
            selector: "//div[contains(text(),'Do you feel concerned about financial pressures')]",
            locateStrategy: "xpath"
        },
        question_householdIncome: {
            selector: "//div[contains(text(),'What role does your income occupy in the overall household income')]",
            locateStrategy: "xpath"
        },
        toggle_financialPressureImpact: {
            selector: "//hl-slide-toggle[@formcontrolname='financePressureImpactOthers']//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_financialPressureImpact: {
            selector: "//hl-slide-toggle[@formcontrolname='financePressureImpactOthers']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        toggle_financialPressureConcern: {
            selector: "//hl-slide-toggle[@formcontrolname='financePressureConcern']//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_financialPressureConcern: {
            selector: "//hl-slide-toggle[@formcontrolname='financePressureConcern']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        dropdown_householdIncome: {
            selector: "//evo-dropdown[@formcontrolname='financeHouseholdIncomeRole']//div[contains(@class,'evo-dropdown__value')]",
            locateStrategy: "xpath"
        },
        dropdownOptions_householdIncome: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        }

    },


    health_Summary: {
        lnk_Data: {
            selector: "//a[text()='Data']",
            locateStrategy: "xpath"
        },
        lnk_Goals: {
            selector: "//a[text()='Data']",
            locateStrategy: "xpath"
        },
        btn_RetakeHealthAgeQuiz: {
            selector: "//a[contains(text(),'Retake Health Age Quiz')]",
            locateStrategy: "xpath"
        },

        btn_onboardingQuiz: {
            selector: "//a[contains(text(),'Onboarding Quiz')]",
            locateStrategy: "xpath"
        },
        btn_extraOnboardingQuiz: {
            selector: "//div[contains(text(),'Optional Questions')]",
            locateStrategy: "xpath"
        },
        header_OnboardingScreen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        edit_OVERALL_HEALTH: {
            selector: "//div[contains(text(),'OVERALL HEALTH')]/..//i",
            locateStrategy: "xpath"
        }
    },

    Screen_EmploymentDetails: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns evo-spacer-mobile--no-padding']",
            locateStrategy: "xpath"
        },
        question_EmploymentType: {
            selector: "//div[contains(text(),'Employment type')]",
            locateStrategy: "xpath"
        },
        dropdown_EmploymentType: {
            selector: "//div[contains(text(),'Employment type')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_EmploymentType: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_HowLongEmployedToCompany: {
            selector: "//div[contains(text(),'How long have you been employed by this company')]",
            locateStrategy: "xpath"
        },
        dropdown_HowLongEmployedToCompany: {
            selector: "//div[contains(text(),'How long have you been employed by this company')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_HowLongEmployedToCompany: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },

        question_HoursPerWeekContract: {
            selector: "//div[contains(text(),'Hours per week - contractually obliged')]",
            locateStrategy: "xpath"
        },
        textbox_HoursPerWeekContract: {
            selector: "//div[contains(text(),'Hours per week - contractually obliged')]/..//input",
            locateStrategy: "xpath"
        },
        question_HoursPerWeekPerformed: {
            selector: "//div[contains(text(),'Hours per week - actually performed')]",
            locateStrategy: "xpath"
        },
        textbox_HoursPerWeekPerformed: {
            selector: "//div[contains(text(),'Hours per week - actually performed')]/..//input",
            locateStrategy: "xpath"
        },
        question_ExpectToRemain: {
            selector: "//div[contains(text(),'How long do you expect to remain?')]",
            locateStrategy: "xpath"
        },
        dropdown_ExpectToRemain: {
            selector: "//div[contains(text(),'How long do you expect to remain?')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_ExpectToRemain: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_UnsociableHours: {
            selector: "//div[contains(text(),'Do you work unsociable hours?')]",
            locateStrategy: "xpath"
        },
        toggle_UnsociableHours: {
            selector: "//div[contains(text(),'Do you work unsociable hours?')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_UnsociableHours: {
            selector: "//div[contains(text(),'Do you work unsociable hours?')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_CommutingType: {
            selector: "//div[contains(text(),'Commuting type?')]",
            locateStrategy: "xpath"
        },
        checkbox_CommutingTypeDrive: {
            selector: "//div[contains(text(),'Commuting type?')]/../..//span[text()='Drive']/../input[@type='checkbox']",
            locateStrategy: "xpath"
        },
        checkbox_CommutingTypeWalk: {
            selector: "//div[contains(text(),'Commuting type?')]/../..//span[text()='Walk']/../input[@type='checkbox']",
            locateStrategy: "xpath"
        },
        checkbox_CommutingTypeTrain: {
            selector: "//div[contains(text(),'Commuting type?')]/../..//span[text()='Train']/../input[@type='checkbox']",
            locateStrategy: "xpath"
        },
        checkbox_CommutingTypeBus: {
            selector: "//div[contains(text(),'Commuting type?')]/../..//span[text()='Bus']/../input[@type='checkbox']",
            locateStrategy: "xpath"
        },
        question_CommutingTime: {
            selector: "//div[contains(text(),'How long is your commute in mins?')]",
            locateStrategy: "xpath"
        },
        textbox_CommutingTime: {
            selector: "//div[contains(text(),'How long is your commute in mins?')]/..//input",
            locateStrategy: "xpath"
        },
        question_FlexibleWorkingHours: {
            selector: "//div[contains(text(),'Do you have flexible working hours?')]",
            locateStrategy: "xpath"
        },
        toggle_FlexibleWorkingHours: {
            selector: "//div[contains(text(),'Do you have flexible working hours?')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_FlexibleWorkingHours: {
            selector: "//div[contains(text(),'Do you have flexible working hours?')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_AbleToWFH: {
            selector: "//div[contains(text(),'Are you able to work from home')]",
            locateStrategy: "xpath"
        },
        toggle_AbleToWFH: {
            selector: "//div[contains(text(),'Are you able to work from home')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_AbleToWFH: {
            selector: "//div[contains(text(),'Are you able to work from home')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_HowOften: {
            selector: "//div[contains(text(),'How often in a month?')]",
            locateStrategy: "xpath"
        },
        dropdown_HowOften: {
            selector: "//div[contains(text(),'How often in a month?')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_HowOften: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_DecideWhatIDo: {
            selector: "//div[contains(text(),'Have a choice in deciding what I do at work?')]",
            locateStrategy: "xpath"
        },
        toggle_DecideWhatIDo: {
            selector: "//div[contains(text(),'Have a choice in deciding what I do at work?')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_DecideWhatIDo: {
            selector: "//div[contains(text(),'Have a choice in deciding what I do at work?')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_DecideWhenToTakBreak: {
            selector: "//div[contains(text(),'Can decide when to take a break')]",
            locateStrategy: "xpath"
        },
        toggle_DecideWhenToTakBreak: {
            selector: "//div[contains(text(),'Can decide when to take a break')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_DecideWhenToTakBreak: {
            selector: "//div[contains(text(),'Can decide when to take a break')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_FlexibleTime: {
            selector: "//div[contains(text(),'Working time is flexible')]",
            locateStrategy: "xpath"
        },
        toggle_FlexibleTime: {
            selector: "//div[contains(text(),'Working time is flexible')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_FlexibleTime: {
            selector: "//div[contains(text(),'Working time is flexible')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_WorkSpeed: {
            selector: "//div[contains(text(),'Have a say in my own work speed')]",
            locateStrategy: "xpath"
        },
        toggle_WorkSpeed: {
            selector: "//div[contains(text(),'Have a say in my own work speed')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_WorkSpeed: {
            selector: "//div[contains(text(),'Have a say in my own work speed')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        dropdownField_EmploymentType: {
            selector: "//evo-dropdown[@formcontrolname=\"employmentStatus\"]/div",
            locateStrategy: "xpath"
        },
        checkboxField_Walk: {
            selector: "(//span[@class='checkmark'])[2]",
            locateStrategy: "xpath"
        },

    },

    Screen_WorkPressures: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns evo-spacer-mobile--no-padding']",
            locateStrategy: "xpath"
        },
        question_LongHours: {
            selector: "//div[contains(text(),'Pressure to work long hours')]",
            locateStrategy: "xpath"
        },
        dropdown_LongHours: {
            selector: "//div[contains(text(),'Pressure to work long hours')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_LongHours: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_NeglectTasks: {
            selector: "//div[contains(text(),'I have to neglect tasks as I have too much to do')]",
            locateStrategy: "xpath"
        },
        dropdown_NeglectTasks: {
            selector: "//div[contains(text(),'I have to neglect tasks as I have too much to do')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_NeglectTasks: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_DifferentDemand: {
            selector: "//div[contains(text(),'Different groups demand different things of me that are hard to combine')]",
            locateStrategy: "xpath"
        },
        dropdown_DifferentDemand: {
            selector: "//div[contains(text(),'Different groups demand different things of me that are hard to combine')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_DifferentDemand: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_SufficientBreaks: {
            selector: "//div[contains(text(),'Unable to take sufficient breaks')]",
            locateStrategy: "xpath"
        },
        dropdown_SufficientBreaks: {
            selector: "//div[contains(text(),'Unable to take sufficient breaks')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_SufficientBreaks: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        question_TightDeadlines: {
            selector: "//div[contains(text(),'I have to work to tight deadlines')]",
            locateStrategy: "xpath"
        },
        dropdown_TightDeadlines: {
            selector: "//div[contains(text(),'I have to work to tight deadlines')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_TightDeadlines: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        }

    },

    Screen_SupportAtWork: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns evo-spacer-mobile--no-padding']",
            locateStrategy: "xpath"
        },
        question_TalkToManager: {
            selector: "//div[contains(text(),'Talk to my line manager about upsetting things')]",
            locateStrategy: "xpath"
        },
        question_RelyOnColleagues: {
            selector: "//div[contains(text(),'I can rely on my colleagues to help me out with work problems')]",
            locateStrategy: "xpath"
        },
        question_GoodRelationshipManager: {
            selector: "//div[contains(text(),'I have a good relationship with my line manager/my line manager supports me at work')]",
            locateStrategy: "xpath"
        },
        question_RelyOnManager: {
            selector: "//div[contains(text(),'I can rely on my line manager to help me out with a work problem')]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        toggle_TalkToManager: {
            selector: "//div[contains(text(),'Talk to my line manager about upsetting things')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_TalkToManager: {
            selector: "//div[contains(text(),'Talk to my line manager about upsetting things')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        toggle_RelyOnColleagues: {
            selector: "//div[contains(text(),'I can rely on my colleagues to help me out with work problems')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_RelyOnColleagues: {
            selector: "//div[contains(text(),'I can rely on my colleagues to help me out with work problems')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        toggle_GoodRelationshipManager: {
            selector: "//div[contains(text(),'I have a good relationship with my line manager/my line manager supports me at work')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_GoodRelationshipManager: {
            selector: "//div[contains(text(),'I have a good relationship with my line manager/my line manager supports me at work')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        toggle_RelyOnManager: {
            selector: "//div[contains(text(),'I can rely on my line manager to help me out with a work problem')]/..//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_RelyOnManager: {
            selector: "//div[contains(text(),'I can rely on my line manager to help me out with a work problem')]/..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        }


    },

    Screen_WorkRelationsEngagement: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns evo-spacer-mobile--no-padding']",
            locateStrategy: "xpath"
        },
        question_PersonalHarassment: {
            selector: "//div[contains(text(),'I am subject of personal harassment')]",
            locateStrategy: "xpath"
        },
        dropdown_PersonalHarassment: {
            selector: "//evo-dropdown[@formcontrolname='employmentHarrassment']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_PersonalHarassment: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },
        question_FrictionWithColleagues: {
            selector: "//div[contains(text(),'There is friction or anger with colleagues')]",
            locateStrategy: "xpath"
        },
        dropdown_FrictionWithColleagues: {
            selector: "//evo-dropdown[@formcontrolname='employmentColleagueFriction']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_FrictionWithColleagues: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },
        question_DiversityInclusion: {
            selector: "//div[contains(text(),'I work in an environment where Diversity and Inclusion are highly valued')]",
            locateStrategy: "xpath"
        },
        dropdown_DiversityInclusion: {
            selector: "//evo-dropdown[@formcontrolname='employmentDiversityValued']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_DiversityInclusion: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },
        question_QuestionManager: {
            selector: "//div[contains(text(),'Sufficient opportunities to quesiton managers about change at work')]",
            locateStrategy: "xpath"
        },
        toggle_QuestionManager: {
            selector: "//evo-slide-toggle[@formcontrolname='employmentChangeEngagement']//div[@class='evo-slide-toggle--slider']",
            locateStrategy: "xpath"
        },
        toggleAnswer_QuestionManager: {
            selector: "//evo-slide-toggle[@formcontrolname='employmentChangeEngagement']//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_EngagesStaff: {
            selector: "//div[contains(text(),'Senior management engages staff on changes in the organisation')]",
            locateStrategy: "xpath"
        },
        dropdown_EngagesStaff: {
            selector: "//evo-dropdown[@formcontrolname='employmentChangeQuestion']//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_EngagesStaff: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        }



    },
    Screen_BloodPressure: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "(//div[@class='evo-font--medium text-size evo-type--text-left evo-spacer--margin-bottom-base evo-spacer-mobile--margin-bottom-small'])[1]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        question_BloodPressure: {
            selector: "(//div[@class='evo-font--medium evo-text-size--medium evo-type--text-left evo-layout--margin-bottom'])[2]",
            locateStrategy: "xpath"
        },
        question_Cholesterol: {
            selector: "//div[@class='evo-font--medium evo-type--text-left evo-text-size--medium evo-layout--margin-top evo-layout--margin-bottom']",
            locateStrategy: "xpath"
        },
        question_LastMeasurementForBloodPressure: {
            selector: "(//div[@class='evo-font--medium evo-text-size--medium evo-type--text-left evo-layout--margin-bottom'])[3]",
            locateStrategy: "xpath"
        },
        question_LastMeasurementForCholesterol: {
            selector: "//div[@class='columns al-question small-12 medium-8 large-9 evo-text-size--medium evo-spacer--margin-top-base']",
            locateStrategy: "xpath"
        },
        textbox_systolic: {
            selector: "//input[@formcontrolname='bloodPressureSystolic']",
            locateStrategy: "xpath"
        },
        textbox_diastolic: {
            selector: "//input[@formcontrolname='bloodPressureDiastolic']",
            locateStrategy: "xpath"
        },
        textbox_Triglycerides: {
            selector: "//input[@formcontrolname='cholesterolTriglycerides']",
            locateStrategy: "xpath"
        },
        textbox_LDLCholesterol: {
            selector: "//input[@formcontrolname='cholesterolLdl']",
            locateStrategy: "xpath"
        },
        textbox_HDLCholesterol: {
            selector: "//input[@formcontrolname='cholesterolHdl']",
            locateStrategy: "xpath"
        },
        textbox_TotalCholesterol: {
            selector: "//input[@formcontrolname='cholesterolTotal']",
            locateStrategy: "xpath"
        },
        dropdown_LastMeasurementForBloodPressure: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdown_LastMeasurementForCholesterol: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdownOptions_LastMeasurementForBloodPressure: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdownOptions_LastMeasurementForCholesterol: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        unitFor_Triglycerides: {
            selector: "//div[contains(text(),'Triglycerides')]/../div[text()='mmol/L']",
            locateStrategy: "xpath"
        },
        unitFor_LDLCholesterol: {
            selector: "//div[contains(text(),'LDL Cholesterol')]/../div[text()='mmol/L']",
            locateStrategy: "xpath"
        },
        unitFor_HDLCholesterol: {
            selector: "//div[contains(text(),'HDL Cholesterol')]/../div[text()='mmol/L']",
            locateStrategy: "xpath"
        },
        unitFor_TotalCholesterol: {
            selector: "//div[contains(text(),'Total Cholesterol')]/../div[text()='mmol/L']",
            locateStrategy: "xpath"
        },
        info_Cholesterol: {
            selector: "XXXX",
            locateStrategy: "xpath"
        }


    },

    Screen_Nutrition: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "(//div[@class='evo-font--medium evo-text-size--medium evo-type--text-left evo-layout--margin-bottom'])[1]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        question_GlucoseLevel: {
            selector: "//label[@class='evo-font--medium small-11 medium-7 evo-text-size--medium']",
            locateStrategy: "xpath"
        },
        question_LastMeasurementForFasting: {
            selector: "//label[@class='evo-font--medium evo-text-size--medium']",
            locateStrategy: "xpath"
        },
        question_FruitVegetablesPerDay: {
            selector: "(//label[@class='evo-font--medium small-8 evo-text-size--medium'])[1]",
            locateStrategy: "xpath"
        },
        question_SaltySnacksPerDay: {
            selector: "(//label[@class='evo-font--medium small-8 evo-text-size--medium'])[2]",
            locateStrategy: "xpath"
        },
        question_WaterPerDay: {
            selector: "(//label[@class='evo-font--medium small-8 evo-text-size--medium'])[3]",
            locateStrategy: "xpath"
        },
        question_CaloriePerDay: {
            selector: "(//label[@class='evo-font--medium small-8 evo-text-size--medium'])[4]",
            locateStrategy: "xpath"
        },
        textbox_GlucoseLevel: {
            selector: '//input[@formcontrolname="fastingGlucose"]',
            locateStrategy: "xpath"
        },
        dropdown_FruitVegetablesPerDay: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdown_SaltySnacksPerDay: {
            selector: "(//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: "xpath"
        },
        txtBox_WaterPerDay: {
            selector: '//input[@formcontrolname="waterDrinks"]',
            locateStrategy: "xpath"
        },
        txtBox_CaloriePerDay: {
            selector: '//input[@formcontrolname="caloriesIntake"]',
            locateStrategy: "xpath"
        },
        dropdown_LastMeasurementForFasting: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_LastMeasurementForFasting: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdownOptions_FruitVegetablesPerDay: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdownOptions_SaltySnacksPerDay: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        unitFor_GlucoseLevel: {
            selector: "//input[@formcontrolname='fastingGlucose']/../..//label[contains(text(),'mmol/Li')]",
            locateStrategy: "xpath"
        },
        unitFor_WaterPerDay: {
            selector: "//input[@formcontrolname='waterDrinks']/../..//label[contains(text(),'ml')]",
            locateStrategy: "xpath"
        },
        unitFor_CaloriePerDay: {
            selector: "//input[@formcontrolname='caloriesIntake']/../..//label[contains(text(),'kCal')]",
            locateStrategy: "xpath"
        },
        info_GlucoseLevel: {
            selector: '(//*[contains(.,"XXXX")])[3]',
            locateStrategy: "xpath"
        },
        info_WaterPerDay: {
            selector: '(//*[contains(.,"XXXX")])[4]',
            locateStrategy: "xpath"
        },
        info_CaloriePerDay: {
            selector: '(//*[contains(.,"Calories are")])[3]',
            locateStrategy: "xpath"
        },
        infoIconOfGlucoseLevel: {
            selector: '//i[@class="evo-icon evo-icon--info2 info evo-text--sapphire-medium al-tooltip hide-for-small-only evo-tooltip--host"]',
            locateStrategy: "xpath"
        },
        infoIconOfWaterPerDay: {
            selector: '(//i[@class=\'small-6 evo-icon evo-icon--info2 info evo-text--sapphire-medium al-tooltip hide-for-small-only evo-tooltip--host\'])[1]',
            locateStrategy: "xpath"
        },
        infoIconOfCaloriePerDay: {
            selector: '(//i[@class=\'small-6 evo-icon evo-icon--info2 info evo-text--sapphire-medium al-tooltip hide-for-small-only evo-tooltip--host\'])[2]',
            locateStrategy: "xpath"
        }


    },


    Screen_MandatoryOverallHealth: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "(//div[@class='evo-spacer--margin-bottom-base evo-spacer-mobile--margin-bottom-small'])[1]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        question_RateOverallHealth: {
            selector: "(//div[@class='evo-spacer--margin-bottom-small'])[1]",
            locateStrategy: "xpath"
        },
        question_RateMentalHealth: {
            selector: "(//div[@class='evo-spacer--margin-bottom-small'])[2]",
            locateStrategy: "xpath"
        },
        question_TimesConsultGP: {
            selector: "//div[@class='evo-spacer--margin-top-medium evo-spacer--margin-bottom-small']",
            locateStrategy: "xpath"
        },
        question_DiagnosedConditions: {
            selector: "//div[@class='al-question evo-spacer--margin-bottom-base']",
            locateStrategy: "xpath"
        },
        question_MusclePain: {
            selector: "(//div[@class='columns small-12 medium-10'])[1]",
            locateStrategy: "xpath"
        },
        question_MSKDiscomfort: {
            selector: "(//div[@class='columns small-12 medium-10'])[2]",
            locateStrategy: "xpath"
        },
        question_MSKProblemAffecting: {
            selector: '(//div[@class=\'columns small-12 medium-10\'])[3]',
            locateStrategy: "xpath"
        },
        dropdown_RateOverallHealth: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdown_RateMentalHealth: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdown_TimesConsultGP: {
            selector: '(//div[@class=\'evo-dropdown__value\'])[3]',
            locateStrategy: "xpath"
        },
        toggle_MusclePain: {
            selector: '(//div[@class=\'evo-slide-toggle--slider\'])[1]',
            locateStrategy: "xpath"
        },
        toggle_MSKDiscomfort: {
            selector: "(//hl-slide-toggle)[2]",
            locateStrategy: "xpath"
        },
        toggle_MSKProblemAffecting: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[3]",
            locateStrategy: "xpath"
        },
        toggleNo_MSKDiscomfort: {
            selector: "(//input[contains(@id,'evo-slide-toggle')])[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_MusclePain: {
            selector: '(//hl-slide-toggle)[1]',
            locateStrategy: "xpath"
        },
        toggleAnswer_MSKDiscomfort: {
            selector: "(//hl-slide-toggle)[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_MSKProblemAffecting: {
            selector: "(//hl-slide-toggle)[3]",
            locateStrategy: "xpath"
        },
        dropdownOptions_RateOverallHealth: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdownOptions_RateMentalHealth: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdownOptions_TimesConsultGP: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        checkbox_Cancer: {
            selector: "//label//input[@class='ng-untouched ng-pristine ng-valid' and @value='Cancer']",
            locateStrategy: "xpath"
        },
        checkbox_Hypertension: {
            selector: "//input[@type='checkbox' and @value='Hypertension']",
            locateStrategy: "xpath"
        },
        checkbox_HeartCirculatoryDisease: {
            selector: "//input[@type='checkbox' and @value='HeartDisease']",
            locateStrategy: "xpath"
        },
        checkbox_ChronicObstructivePulmonaryDisease: {
            selector: "//input[@type='checkbox' and @value='ChronicObstructivePulmonaryDisease']",
            locateStrategy: "xpath"
        },
        checkbox_Diabetes: {
            selector: "//input[@type='checkbox' and @value='Diabetes']",
            locateStrategy: "xpath"
        },
        checkbox_RheumatoidArthritis: {
            selector: "//input[@type='checkbox' and @value='RheumatoidArthritis']",
            locateStrategy: "xpath"
        },
        checkbox_Osteoporosis: {
            selector: "//input[@type='checkbox' and @value='Osteoporosis']",
            locateStrategy: "xpath"
        },
        checkbox_AnyOtherChroniConditionPleaseState: {
            selector: "//input[@type='checkbox' and @value='Other']",
            locateStrategy: "xpath"
        },
        txtbox_AnyOtherChroniConditionPleaseState: {
            selector: "//textarea[@formcontrolname='conditionsDiagnosedOther']",
            locateStrategy: "xpath"
        }


    },

    Screen_PhysicalPriorities: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[contains(text(),'Now we’d like to know what’s important to you. This will help us offer you personalised goals, recommendations and articles. Re-order by dragging and dropping the elements below in order of priority, from highest (1) to lowest (5).')]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        physicalPriorityName_Fitness: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Fitness')]",
            locateStrategy: "xpath"
        },
        physicalPriorityName_Nutrition: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Nutrition')]",
            locateStrategy: "xpath"
        },
        physicalPriorityName_SubstanceUsage: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Substance usage')]",
            locateStrategy: "xpath"
        },
        physicalPriorityName_BMI: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'BMI')]",
            locateStrategy: "xpath"
        },
        physicalPriorityName_HeartHealth: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Heart Health')]",
            locateStrategy: "xpath"
        },
        physicalPriorityHeader_Fitness: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        physicalPriorityDescription_Fitness: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        physicalPriorityHeader_Nutrition: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        physicalPriorityDescription_Nutrition: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        physicalPriorityHeader_SubstanceUsage: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        physicalPriorityDescription_SubstanceUsage: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        physicalPriorityHeader_HeartHealth: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        physicalPriorityDescription_HeartHealth: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        physicalPriorityHeader_BMI: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        physicalPriorityDescription_BMI: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        first: {
            selector: "(//hm-drag-and-drop-vertical-item)[1]",
            locateStrategy: "xpath"
        },
        Five: {
            selector: "(//hm-drag-and-drop-vertical-item)[5]",
            locateStrategy: "xpath"
        }
    },

    Screen_BMIBodyShape: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        ErrorMsg_InvalidValue: {
            selector: "//evo-alert-content[contains(text(),'Those measurements seems unlikely, please check you have entered them correctly & try again.')]",
            locateStrategy: "xpath"
        },
        NoBMIValue: {
            selector: "//h2[@class='bmi__result__value' and text()='-']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: '//div[contains(text(),"What\'s your Body Mass Index (BMI)? Enter your height and weight and we we\'ll calculate it for you.")]',
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        question_Weight: {
            selector: "(//div[@class='no-letter-spacing'])[1]",
            locateStrategy: "xpath"
        },
        question_Height: {
            selector: "(//div[@class='no-letter-spacing'])[2]",
            locateStrategy: "xpath"
        },
        question_WaistCircumference: {
            selector: "(//div[@class='no-letter-spacing'])[3]",
            locateStrategy: "xpath"
        },
        question_BodyShape: {
            selector: "(//div[@class='column evo-type--text-left'])[1]",
            locateStrategy: "xpath"
        },
        question_ChangeBodyShape: {
            selector: "(//div[@class='columns small-8'])[1]",
            locateStrategy: "xpath"
        },
        textbox_Stones: {
            selector: "//span[text()='stones']/../input",
            locateStrategy: "xpath"
        },
        textbox_Lbs: {
            selector: "//span[text()='lbs.']/../input",
            locateStrategy: "xpath"
        },
        textbox_Kgs: {
            selector: "//span[text()='kg']/../input",
            locateStrategy: "xpath"
        },
        textbox_Cms: {
            selector: "//span[text()='cm']/../input",
            locateStrategy: "xpath"
        },
        textbox_Feet: {
            selector: "//span[text()='ft']/../input",
            locateStrategy: "xpath"
        },
        textbox_Inches: {
            selector: "//span[text()='in']/../input",
            locateStrategy: "xpath"
        },
        dropdown_WaistCircumference: {
            selector: "//evo-dropdown//div[@class='evo-dropdown evo-dropdown__health']",
            locateStrategy: "xpath"
        },
        dropdownField_WaistCircumference: {
            selector: "//evo-dropdown//div[@class='evo-dropdown evo-dropdown__health']",
            locateStrategy: "xpath"
        },
        dropdownOptions_WaistCircumference: {
            selector: "//ul[@class='evo-dropdown__options ']/li",
            locateStrategy: "xpath"
        },
        toggle_ChangeBodyShape: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[3]",
            locateStrategy: "xpath"
        },
        toggle_WeightUnits: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggle_HeightUnits: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        header_BodyShape: {
            selector: "(//harm-onboarding-body-shape//div[@class='column'])[1]",
            locateStrategy: "xpath"
        },
        bodyShape_Triangle: {
            selector: "(//p[text()='Triangle']/../div)[1]",
            locateStrategy: "xpath"
        },
        bodyShape_Square: {
            selector: "(//p[text()='Square']/../div)[1]",
            locateStrategy: "xpath"
        },
        bodyShape_Rectangle: {
            selector: "(//p[text()='Rectangle']/../div)[1]",
            locateStrategy: "xpath"
        },
        bodyShape_Hourglass: {
            selector: "(//p[text()='Hourglass']/../div)[1]",
            locateStrategy: "xpath"
        },
        bodyShape_Pear: {
            selector: "(//p[text()='Pear']/../div)[1]",
            locateStrategy: "xpath"
        },
        bodyShape_Oval: {
            selector: "(//p[text()='Oval']/../div)[1]",
            locateStrategy: "xpath"
        },
        bodyShapeSelected_Triangle: {
            selector: "((//p[text()='Triangle']/../div)[@class='body-shapes__body body-Triangle active'])[1]",
            locateStrategy: "xpath"
        },
        bodyShapeSelected_Square: {
            selector: "((//p[text()='Square']/../div)[@class='body-shapes__body body-Square active'])[1]",
            locateStrategy: "xpath"
        },
        bodyShapeSelected_Rectangle: {
            selector: "((//p[text()='Rectangle']/../div)[@class='body-shapes__body body-Rectangle active'])[1]",
            locateStrategy: "xpath"
        },
        bodyShapeSelected_Hourglass: {
            selector: "((//p[text()='Hourglass']/../div)[@class='body-shapes__body body-Hourglass active'])[1]",
            locateStrategy: "xpath"
        },
        bodyShapeSelected_Pear: {
            selector: "((//p[text()='Pear']/../div)[@class='body-shapes__body body-Pear active'])[1]",
            locateStrategy: "xpath"
        },
        bodyShapeSelected_Oval: {
            selector: "((//p[text()='Oval']/../div)[@class='body-shapes__body body-Oval active'])[1]",
            locateStrategy: "xpath"
        },
        bodyshapeDescription_Header: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        bodyshapeDescription_label: {
            selector: "//div[@class='evo-font--bold']/..//div[2]",
            locateStrategy: "xpath"
        },
        score_BMI: {
            selector: "//h2[@class='bmi__result__value']",
            locateStrategy: "xpath"
        },
        label_BmiScore: {
            selector: "//div[@class='bmi__result__caption']",
            locateStrategy: "xpath"
        },
        bmiScoreType: {
            selector: "//div[@class='bmi__result__caption__value']",
            locateStrategy: "xpath"
        }


    },


    Screen_OptionalOverallHealth: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "(//div[@class='column small-12 medium-12 evo-spacer--margin-bottom-medium'])[1]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        },
        question_routineScreening: {
            selector: "//div[contains(text(),'Routine screening in last 12 months?')]",
            locateStrategy: "xpath"
        },
        question_NumberOfSickLeave: {
            selector: "//div[contains(text(),'How much sick leave have you taken in the last 4 weeks')]",
            locateStrategy: "xpath"
        },
        question_areaImpactedByHealth: {
            selector: "//div[contains(text(),'Which areas have impacted your health over the last four weeks?')]",
            locateStrategy: "xpath"
        },
        textbox_NumberOfSickLeave: {
            selector: "//div[contains(text(),'How much sick leave have you taken in the last 4 weeks')]/..//input[@type='number']",
            locateStrategy: "xpath"
        },
        dropdown_areaImpactedByHealth: {
            selector: "//div[contains(text(),'Which areas have impacted your health over the last four weeks?')]/..//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownOptions_areaImpactedByHealth: {
            selector: "//div[@class='evo-dropdown__options_container']/ul/li",
            locateStrategy: "xpath"
        },
        toggle_routineScreening: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggleAnswer_routineScreening: {
            selector: "//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },

    },

    Screen_ActivityLevel: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns small-12 medium-12 large-12 activity-level-subtitle']",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        question_SelfReportFitness: {
            selector: "(//div[@class='al-question evo-spacer--margin-bottom-base'])[1]",
            locateStrategy: "xpath"
        },
        question_ExerciseInWeek: {
            selector: "(//div[@class='al-question evo-spacer--margin-bottom-base'])[2]",
            locateStrategy: "xpath"
        },
        question_HowLongExercise: {
            selector: "(//div[@class='al-question evo-spacer--margin-bottom-base'])[3]",
            locateStrategy: "xpath"
        },
        question_frequentActivityTypes: {
            selector: "(//div[@class='al-question evo-spacer--margin-bottom-base'])[4]",
            locateStrategy: "xpath"
        },
        question_intensiveExercise: {
            selector: "//div[@class='columns al-question small-12 medium-8 large-9']",
            locateStrategy: "xpath"
        },
        question_trackActivityLevel: {
            selector: "//div[@class='columns al-question small-6 medium-8 large-9']",
            locateStrategy: "xpath"
        },
        slider_SelfReportFitness: {
            selector: "(//div[@class='evo-card evo-card--info'])[1]",
            locateStrategy: "xpath"
        },
        slider_ExerciseInWeek: {
            selector: "(//div[@class='evo-card evo-card--info'])[2]",
            locateStrategy: "xpath"
        },
        slider_HowLongExercise: {
            selector: "(//div[@class='evo-card evo-card--info'])[3]",
            locateStrategy: "xpath"
        },
        checkbox_Walk: {
            selector: "//input[@type='checkbox' and @value='Walk']",
            locateStrategy: "xpath"
        },
        checkbox_Run: {
            selector: "//input[@type='checkbox' and @value='Run']",
            locateStrategy: "xpath"
        }, checkbox_Cycle: {
            selector: "//input[@type='checkbox' and @value='Cycle']",
            locateStrategy: "xpath"
        },
        checkbox_Swim: {
            selector: "//input[@type='checkbox' and @value='Swim']",
            locateStrategy: "xpath"
        },
        checkbox_Strength: {
            selector: "//input[@type='checkbox' and @value='Strength']",
            locateStrategy: "xpath"
        },
        dropdown_intensiveExercise: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_intensiveExercise: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        toggle_trackActivityLevel: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggleAnswer_trackActivityLevel: {
            selector: "//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        sliderHeader_SelfReportFitness: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[1]",
            locateStrategy: "xpath"
        },
        sliderHeader_ExerciseInWeek: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[2]",
            locateStrategy: "xpath"
        },
        sliderHeader_HowLongExercise: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[3]",
            locateStrategy: "xpath"
        },
        sliderPoint_SelfReportFitness: {
            selector: "(//div[@class='evo-slider--scrubber'])[1]",
            locateStrategy: "xpath"
        },
        sliderPoint_ExerciseInWeek: {
            selector: "(//div[@class='evo-slider--scrubber'])[2]",
            locateStrategy: "xpath"
        },
        sliderPoint_HowLongExercise: {
            selector: "(//div[@class='evo-slider--scrubber'])[3]",
            locateStrategy: "xpath"
        },
        allCheckboxes: {
            selector: "//label[@class='container']/input",
            locateStrategy: "xpath"
        }


    },

    Screen_SubstanceUsage: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns small-12 medium-12 large-12 activity-level-subtitle']",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        question_DoYouSmoke: {
            selector: "(//div[@class='columns al-question small-6 medium-8 large-9']/span)[1]",
            locateStrategy: "xpath"
        },
        question_DoYouSmokeTobaccoBefore: {
            selector: "(//div[@class='columns al-question small-6 medium-8 large-9']/span)[2]",
            locateStrategy: "xpath"
        },
        question_DoYouDrink: {
            selector: "(//div[@class='columns al-question small-12 medium-8 large-9']/span)[1]",
            locateStrategy: "xpath"
        },
        question_UnitsOfDrink: {
            selector: "(//div[@class='columns al-question small-12 medium-8 large-9']/span)[2]",
            locateStrategy: "xpath"
        },
        question_YearsOfSmoke: {
            selector: "(//div[@class='columns al-question small-12 medium-8 large-9'])[1]",
            locateStrategy: "xpath"
        },
        question_NoOfPacketsOfCigarette: {
            selector: "(//div[@class='columns al-question small-12 medium-8 large-9'])[2]",
            locateStrategy: "xpath"
        },
        checkbox_Cigarette: {
            selector: "//input[@type='checkbox' and @value='Cigarette']",
            locateStrategy: "xpath"
        },
        checkboxField_Cigarette: {
            selector: "(//span[@class='checkmark'])[1]",
            locateStrategy: "xpath"
        },
        checkbox_Cigar: {
            selector: "//input[@type='checkbox' and @value='Cigar']",
            locateStrategy: "xpath"
        },
        checkbox_ECigarette: {
            selector: "//input[@type='checkbox' and @value='Ecig']",
            locateStrategy: "xpath"
        },
        checkbox_Never: {
            selector: "(//input[@type='checkbox' and @value='1'])[1]",
            locateStrategy: "xpath"
        },
        checkboxField_Never: {
            selector: "(//span[@class='checkmark'])[1]",
            locateStrategy: "xpath"
        },
        checkbox_Occasionally: {
            selector: "(//input[@type='checkbox' and @value='2'])[1]",
            locateStrategy: "xpath"
        },
        checkbox_1to2TimesPerWeek: {
            selector: "(//input[@type='checkbox' and @value='3'])[1]",
            locateStrategy: "xpath"
        },
        checkbox_3to4TimesPerWeek: {
            selector: "(//input[@type='checkbox' and @value='4'])[1]",
            locateStrategy: "xpath"
        },
        checkbox_5PlusTimesPerWeek: {
            selector: "(//input[@type='checkbox' and @value='5'])",
            locateStrategy: "xpath"
        },
        checkbox_1to2Units: {
            selector: "(//input[@type='checkbox' and @value='1'])[2]",
            locateStrategy: "xpath"
        },
        checkbox_2to3Units: {
            selector: "(//input[@type='checkbox' and @value='3'])[2]",
            locateStrategy: "xpath"
        },
        checkbox_3to5Units: {
            selector: "(//input[@type='checkbox' and @value='4'])[2]",
            locateStrategy: "xpath"
        },
        checkbox_5PlusUnits: {
            selector: "(//input[@type='checkbox' and @value='6'])",
            locateStrategy: "xpath"
        },
        toggle_DoYouSmoke: {
            selector: "//span[text()='Do you smoke?']/../..//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DoYouSmoke: {
            selector: "//span[text()='Do you smoke?']/../..//div[contains(@class,'evo-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        toggleNo_DoYouSmoke: {
            selector: "(//input[contains(@id,'evo-slide-toggle')])[1]",
            locateStrategy: "xpath"
        },
        toggle_DoYouSmokeTobaccoBefore: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DoYouSmokeTobaccoBefore: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[2]",
            locateStrategy: "xpath"
        },
        toggleNo_DoYouSmokeTobaccoBefore: {
            selector: "(//input[contains(@id,'evo-slide-toggle')])[2]",
            locateStrategy: "xpath"
        },
        textbox_YearsOfSmoke: {
            selector: "//input[@formcontrolname='yearsOfSmoking']",
            locateStrategy: "xpath"
        },
        textbox_NoOfPacketsOfCigarette: {
            selector: "//input[@formcontrolname='howManyPerDay']",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        }


    },

    Screen_HeartAndLungHealth: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "(//div[@class='evo-layout--margin-bottom']/strong)[1]",
            locateStrategy: "xpath"
        },
        button_Save: {
            selector: "//button[contains(text(),'Save')]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        header_TimerToRecordPulse: {
            selector: "//strong[text()='Use The Timer To Record Your Pulse']",
            locateStrategy: "xpath"
        },
        info_TimerToRecordPulse: {
            selector: "(//p[@class='evo-spacer--margin-top-small'])[1]",
            locateStrategy: "xpath"
        },
        header_ShowMeHow: {
            selector: "//strong[text()='Show me how']",
            locateStrategy: "xpath"
        },
        info_ShowMeHow: {
            selector: "(//p[@class='evo-spacer--margin-top-small'])[2]",
            locateStrategy: "xpath"
        },
        header_AlreadyKnowPulse: {
            selector: "//strong[text()='Already know your pulse?']",
            locateStrategy: "xpath"
        },
        info_AlreadyKnowPulse: {
            selector: "(//p[@class='evo-spacer--margin-top-small'])[3]",
            locateStrategy: "xpath"
        },
        header_HoldingBreath: {
            selector: "//strong[contains(text(),'Holding Breath')]",
            locateStrategy: "xpath"
        },
        info_HoldingBreath: {
            selector: "(//p[@class='evo-spacer--margin-top-small'])[4]",
            locateStrategy: "xpath"
        },
        textbox_beatsPerMinute: {
            selector: "(//input[@type=\"number\"])[1]",
            locateStrategy: "xpath"
        },
        unitFor_beatsPerMinute: {
            selector: "//span[@class='count-your-pulse__label small-12 medium-8 columns align-middle']",
            locateStrategy: "xpath"
        },
        button_pulse: {
            selector: "//a[contains(@id,'count-your-pulse')]",
            locateStrategy: "xpath"

        },
        textbox_beatsPerSecond: {
            selector: "//div[@class='count-your-pulse__input evo-type--text-center']//input",
            locateStrategy: "xpath"
        },
        unitFor_beatsPerSecond: {
            selector: "//label[@class='count-your-pulse__label']",
            locateStrategy: "xpath"
        },
        button_breath: {
            selector: "//a[contains(@id,'hold-your-breath')]",
            locateStrategy: "xpath"
        },
        unitFor_minutes: {
            selector: "//label[@class='hold-your-breath__label']/span[1]",
            locateStrategy: "xpath"
        },
        unitFor_seconds: {
            selector: "//label[@class='hold-your-breath__label']/span[1]",
            locateStrategy: "xpath"
        },
        unitFor_miliseconds: {
            selector: "//label[@class='hold-your-breath__label']/span[1]",
            locateStrategy: "xpath"
        },
        value_minutes: {
            selector: "//div[@class='hold-your-breath__time evo-spacer--margin-top-medium']/span[1]",
            locateStrategy: "xpath"
        },
        value_seconds: {
            selector: "//div[@class='hold-your-breath__time evo-spacer--margin-top-medium']/span[2]",
            locateStrategy: "xpath"
        },
        value_miliseconds: {
            selector: "//div[@class='hold-your-breath__time evo-spacer--margin-top-medium']/span[3]",
            locateStrategy: "xpath"
        },
        info_holdBreath: {
            selector: "//evo-alert-title/strong",
            locateStrategy: "xpath"
        },
        label_TryAgianPulse: {
            selector: "//span[@class='count-your-pulse__circle__anchor__firstline']",
            locateStrategy: "xpath"
        },
        error_pulse: {
            selector: "//div[@class='count-your-pulse__error']",
            locateStrategy: "xpath"
        }


    },

    Screen_emotionalPriorities: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[contains(text(),'What do you care about most? Drag and drop the elements below in order of priority, from 1 (high) to 5 (low).')]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        emotionalPriorityName_Sleep: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Sleep')]",
            locateStrategy: "xpath"
        },
        emotionalPriorityName_Stress: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Stress')]/../..",
            locateStrategy: "xpath"
        },
        emotionalPriorityName_MoodToday: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Mood Today')]",
            locateStrategy: "xpath"
        },
        emotionalPriorityName_GeneralHappiness: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'General Happiness')]",
            locateStrategy: "xpath"
        },
        emotionalPriorityName_MentalWellness: {
            selector: "//div[@class='container-content evo-spacer-margin-left-small evo-spacer-margin-right-small']//div[contains(.,'Mental Wellness')]",
            locateStrategy: "xpath"
        },
        emotionalPriorityHeader_Sleep: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        emotionalPriorityDescription_Sleep: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        emotionalPriorityHeader_Stress: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        emotionalPriorityDescription_Stress: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        emotionalPriorityHeader_MoodToday: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        emotionalPriorityDescription_MoodToday: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        emotionalPriorityHeader_GeneralHappiness: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        emotionalPriorityDescription_GeneralHappiness: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        emotionalPriorityHeader_MentalWellness: {
            selector: "//div[@class='evo-font--bold']",
            locateStrategy: "xpath"
        },
        emotionalPriorityDescription_MentalWellness: {
            selector: "//div[@class='evo-font--bold']/../div[2]",
            locateStrategy: "xpath"
        },
        first: {
            selector: "(//hm-drag-and-drop-vertical-item)[1]",
            locateStrategy: "xpath"
        },
        Five: {
            selector: "(//hm-drag-and-drop-vertical-item)[5]",
            locateStrategy: "xpath"
        }
    },


    Screen_EmotionalLevels: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[contains(text(),'Good mental wellness goes beyond avoiding mental health problems. It means feeling good and functioning well. How do you rate your emotional levels?')]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "XXXX",
            locateStrategy: "xpath"
        },
        question_HowHappyAreYouGenerally: {
            selector: "(//div[@class='evo-text-size--medium evo-font--bold evo-text--onyx-medium evo-spacer--margin-bottom-base'])[1]",
            locateStrategy: "xpath"
        },
        question_HowStressedAreYou: {
            selector: "(//div[@class='evo-text-size--medium evo-font--bold evo-text--onyx-medium evo-spacer--margin-bottom-base'])[2]",
            locateStrategy: "xpath"
        },
        question_QualityOfSleep: {
            selector: "(//div[@class='evo-text-size--medium evo-font--bold evo-text--onyx-medium evo-spacer--margin-bottom-base'])[3]",
            locateStrategy: "xpath"
        },
        question_HoursOfSleep: {
            selector: "(//div[@class='evo-text-size--medium evo-font--bold evo-text--onyx-medium evo-spacer--margin-bottom-base'])[4]",
            locateStrategy: "xpath"
        },
        question_trackSleep: {
            selector: "(//div[@class='columns evo-text-size--medium evo-font--bold evo-text--onyx-medium small-8 medium-4 large-4'])[1]",
            locateStrategy: "xpath"
        },
        question_feelLethargic: {
            selector: "//div[@class='columns evo-layout--margin-bottom evo-text-size--medium evo-font--bold evo-text--onyx-medium small-12']",
            locateStrategy: "xpath"
        },
        question_DifficultInSleeping: {
            selector: "(//div[@class='columns evo-text-size--medium evo-font--bold evo-text--onyx-medium small-8 medium-4 large-4'])[2]",
            locateStrategy: "xpath"
        },
        question_DifficultyInGettingUpEarly: {
            selector: "(//div[@class='columns evo-text-size--medium evo-font--bold evo-text--onyx-medium small-8 medium-4 large-4'])[3]",
            locateStrategy: "xpath"
        },
        slider_HowHappyAreYouGenerally: {
            selector: "(//div[@class='evo-card evo-card--info'])[1]",
            locateStrategy: "xpath"
        },
        slider_HowStressedAreYou: {
            selector: "(//div[@class='evo-card evo-card--info'])[2]",
            locateStrategy: "xpath"
        },
        slider_QualityOfSleep: {
            selector: "(//div[@class='evo-card evo-card--info'])[3]",
            locateStrategy: "xpath"
        },
        slider_HoursOfSleep: {
            selector: "(//div[@class='evo-card evo-card--info'])[4]",
            locateStrategy: "xpath"
        },
        dropdown_feelLethargic: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_feelLethargic: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        toggle_trackSleep: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggleAnswer_trackSleep: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[1]",
            locateStrategy: "xpath"
        },
        toggle_DifficultInSleeping: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DifficultInSleeping: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[2]",
            locateStrategy: "xpath"
        },
        toggle_DifficultyInGettingUpEarly: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[3]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DifficultyInGettingUpEarly: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[3]",
            locateStrategy: "xpath"
        },
        sliderHeader_HowHappyAreYouGenerally: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[1]",
            locateStrategy: "xpath"
        },
        sliderHeader_HowStressedAreYou: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[2]",
            locateStrategy: "xpath"
        },
        sliderHeader_HoursOfSleep: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[4]",
            locateStrategy: "xpath"
        },
        sliderHeader_QualityOfSleep: {
            selector: "(//div[@class='large-12 columns slider-card-header'])[3]",
            locateStrategy: "xpath"
        },
        sliderPoint_HowHappyAreYouGenerally: {
            selector: "(//div[@class='evo-slider--scrubber'])[1]",
            locateStrategy: "xpath"
        },
        sliderPoint_HowStressedAreYou: {
            selector: "(//div[@class='evo-slider--scrubber'])[2]",
            locateStrategy: "xpath"
        },
        sliderPoint_HoursOfSleep: {
            selector: "(//div[@class='evo-slider--scrubber'])[4]",
            locateStrategy: "xpath"
        },
        sliderPoint_QualityOfSleep: {
            selector: "(//div[@class='evo-slider--scrubber'])[3]",
            locateStrategy: "xpath"
        }


    },

    Screen_Musculosketal: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='columns evo-spacer--padding-bottom-base evo-spacer-mobile--no-padding small-12 medium-12 large-12 evo-type--text-left']",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        question_MuscleBonePain: {
            selector: "//div[contains(text(),'Frequency of Muscles/bone pain')]",
            locateStrategy: "xpath"
        },
        question_Medication: {
            selector: "//div[contains(text(),'How often do you take medication')]",
            locateStrategy: "xpath"
        },
        question_MSKProblems: {
            selector: "//div[contains(text(),'MSK problems prevent me from leading a normal active live outside work')]",
            locateStrategy: "xpath"
        },
        question_MSKTraining: {
            selector: "//div[contains(text(),'I have undertaken appropriate training to deal with MSK at work')]",
            locateStrategy: "xpath"
        },
        question_SittomgdownTime: {
            selector: "//div[contains(text(),'How long do you spend sitting down in a typical working day')]",
            locateStrategy: "xpath"
        },
        question_RegularBreaks: {
            selector: "//div[contains(text(),'I am able to have regular breaks away from my desk')]",
            locateStrategy: "xpath"
        },
        question_WorkSupport: {
            selector: "//div[contains(text(),'Do you receive support at work')]",
            locateStrategy: "xpath"
        },
        dropdown_MuscleBonePain: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_MuscleBonePain: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdown_Medication: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdownOptions_Medication: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdown_SittomgdownTime: {
            selector: "(//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: "xpath"
        },
        dropdownOptions_SittomgdownTime: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        toggle_MSKProblems: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggleAnswer_MSKProblems: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[1]",
            locateStrategy: "xpath"
        },
        toggleNo_MSKProblems: {
            selector: "(//input[contains(@id,'evo-slide-toggle')])[1]",
            locateStrategy: "xpath"
        },
        toggle_MSKTraining: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_MSKTraining: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[2]",
            locateStrategy: "xpath"
        },
        toggle_RegularBreaks: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[3]",
            locateStrategy: "xpath"
        },
        toggleAnswer_RegularBreaks: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[3]",
            locateStrategy: "xpath"
        },
        toggle_WorkSupport: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[4]",
            locateStrategy: "xpath"
        },
        toggleAnswer_WorkSupport: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[4]",
            locateStrategy: "xpath"
        },

        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        }

    },



    Screen_OptionalNutrition: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[contains(text(),\"Could you tell us a bit about your nutrition? If you can’t right now, don’t worry you can always come back to this page later on.\")]",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        question_RateYourDiet: {
            selector: "//div[contains(text(),'How do you rate your health?')]",
            locateStrategy: "xpath"
        },
        question_DietSatisfied: {
            selector: "//div[contains(text(),'Satisfied with your diet?')]",
            locateStrategy: "xpath"
        },
        question_AdviceOnDiet: {
            selector: "//label[contains(text(),'Have you ever sought advice on your diet?')]",
            locateStrategy: "xpath"
        },
        question_AdviceOnBalancedMeal: {
            selector: "//label[contains(text(),'Would you like access to advice on balanced meal planning?')]",
            locateStrategy: "xpath"
        },
        question_FoodIntolerancesAllergies: {
            selector: "//label[contains(text(),'Food intolerances or allergies?')]",
            locateStrategy: "xpath"
        },
        question_ObserveRestrictedDiet: {
            selector: "//label[contains(text(),'Do you observe a restricted diet?')]",
            locateStrategy: "xpath"
        },
        question_TrackCalorieIntake: {
            selector: "//label[contains(text(),'Do you track calorie intake?')]",
            locateStrategy: "xpath"
        },
        question_HealthySnacksAtOffice: {
            selector: "//label[contains(text(),'If healthy snacks would be available at work, would you swap/eat them?')]",
            locateStrategy: "xpath"
        },
        question_CookUsingMainBaseIngredients: {
            selector: "//div[contains(text(),'How many times a week do you cook using main base ingredients?')]",
            locateStrategy: "xpath"
        },
        question_EatPackagedConvenienceMeals: {
            selector: "//div[contains(text(),'How many times per day do you eat packaged convenience meals?')]",
            locateStrategy: "xpath"
        },
        question_EatPrepackagedStoreBoughtMeals: {
            selector: "//div[contains(text(),'How many times per day do you eat prepackeged store-bought meals (such as takeaways…)?')]",
            locateStrategy: "xpath"
        },
        dropdown_RateYourDiet: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_RateYourDiet: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdown_CookUsingMainBaseIngredients: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdownOptions_CookUsingMainBaseIngredients: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: "xpath"
        },
        dropdown_EatPackagedConvenienceMeals: {
            selector: "(//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: "xpath"
        },
        dropdownOptions_EatPackagedConvenienceMeals: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdown_EatPrepackagedStoreBoughtMeals: {
            selector: "(//div[@class='evo-dropdown__value'])[4]",
            locateStrategy: "xpath"
        },
        dropdownOptions_EatPrepackagedStoreBoughtMeals: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        toggle_DietSatisfied: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DietSatisfied: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[1]",
            locateStrategy: "xpath"
        },
        toggle_AdviceOnDiet: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_AdviceOnDiet: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[2]",
            locateStrategy: "xpath"
        },
        toggle_AdviceOnBalancedMeal: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[3]",
            locateStrategy: "xpath"
        },
        toggleAnswer_AdviceOnBalancedMeal: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[3]",
            locateStrategy: "xpath"
        },
        toggle_FoodIntolerancesAllergies: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[4]",
            locateStrategy: "xpath"
        },
        toggleAnswer_FoodIntolerancesAllergies: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[4]",
            locateStrategy: "xpath"
        },
        toggle_ObserveRestrictedDiet: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[5]",
            locateStrategy: "xpath"
        },
        toggleAnswer_ObserveRestrictedDiet: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[5]",
            locateStrategy: "xpath"
        },
        toggle_TrackCalorieIntake: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[6]",
            locateStrategy: "xpath"
        },
        toggleAnswer_TrackCalorieIntake: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[6]",
            locateStrategy: "xpath"
        },
        toggle_HealthySnacksAtOffice: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[6]",
            locateStrategy: "xpath"
        },
        toggleAnswer_HealthySnacksAtOffice: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[6]",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        }

    },


    Screen_SubstanceActivityLevel: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[@class='evo-text-size--medium evo-font--medium evo-type--text-left evo-layout--margin-bottom']",
            locateStrategy: "xpath"
        },
        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        question_RateYourDiet: {
            selector: "//div[contains(text(),'How do you rate your health?')]",
            locateStrategy: "xpath"
        },
        question_DietSatisfied: {
            selector: "//div[contains(text(),'Satisfied with your diet?')]",
            locateStrategy: "xpath"
        },
        question_AdviceOnDiet: {
            selector: "//label[contains(text(),'Have you ever sought advice on your diet?')]",
            locateStrategy: "xpath"
        },
        question_AdviceOnBalancedMeal: {
            selector: "//label[contains(text(),'Would you like access to advice on balanced meal planning?')]",
            locateStrategy: "xpath"
        },
        question_FoodIntolerancesAllergies: {
            selector: "//label[contains(text(),'Food intolerances or allergies?')]",
            locateStrategy: "xpath"
        },
        question_ObserveRestrictedDiet: {
            selector: "//label[contains(text(),'Do you observe a restricted diet?')]",
            locateStrategy: "xpath"
        },
        question_TrackCalorieIntake: {
            selector: "//label[contains(text(),'Do you track calorie intake?')]",
            locateStrategy: "xpath"
        },
        question_HealthySnacksAtOffice: {
            selector: "//label[contains(text(),'If healthy snacks would be available at work, would you swap/eat them?')]",
            locateStrategy: "xpath"
        },
        question_CookUsingMainBaseIngredients: {
            selector: "//div[contains(text(),'How many times a week do you cook using main base ingredients?')]",
            locateStrategy: "xpath"
        },
        question_EatPackagedConvenienceMeals: {
            selector: "//div[contains(text(),'How many times per day do you eat packaged convenience meals?')]",
            locateStrategy: "xpath"
        },
        question_EatPrepackagedStoreBoughtMeals: {
            selector: "//div[contains(text(),'How many times per day do you eat prepackeged store-bought meals (such as takeaways…)?')]",
            locateStrategy: "xpath"
        },
        dropdown_RateYourDiet: {
            selector: "(//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_RateYourDiet: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdown_CookUsingMainBaseIngredients: {
            selector: "(//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdownOptions_CookUsingMainBaseIngredients: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: "xpath"
        },
        dropdown_EatPackagedConvenienceMeals: {
            selector: "(//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: "xpath"
        },
        dropdownOptions_EatPackagedConvenienceMeals: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        dropdown_EatPrepackagedStoreBoughtMeals: {
            selector: "(//div[@class='evo-dropdown__value'])[4]",
            locateStrategy: "xpath"
        },
        dropdownOptions_EatPrepackagedStoreBoughtMeals: {
            selector: "//ul[@class='evo-dropdown__options']/li",
            locateStrategy: "xpath"
        },
        toggle_DietSatisfied: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[1]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DietSatisfied: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[1]",
            locateStrategy: "xpath"
        },
        toggle_AdviceOnDiet: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[2]",
            locateStrategy: "xpath"
        },
        toggleAnswer_AdviceOnDiet: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[2]",
            locateStrategy: "xpath"
        },
        toggle_AdviceOnBalancedMeal: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[3]",
            locateStrategy: "xpath"
        },
        toggleAnswer_AdviceOnBalancedMeal: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[3]",
            locateStrategy: "xpath"
        },
        toggle_FoodIntolerancesAllergies: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[4]",
            locateStrategy: "xpath"
        },
        toggleAnswer_FoodIntolerancesAllergies: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[4]",
            locateStrategy: "xpath"
        },
        toggle_ObserveRestrictedDiet: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[5]",
            locateStrategy: "xpath"
        },
        toggleAnswer_ObserveRestrictedDiet: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[5]",
            locateStrategy: "xpath"
        },
        toggle_TrackCalorieIntake: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[6]",
            locateStrategy: "xpath"
        },
        toggleAnswer_TrackCalorieIntake: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[6]",
            locateStrategy: "xpath"
        },
        toggle_HealthySnacksAtOffice: {
            selector: "(//div[@class='evo-slide-toggle--slider'])[6]",
            locateStrategy: "xpath"
        },
        toggleAnswer_HealthySnacksAtOffice: {
            selector: "(//div[contains(@class,'hl-slide-toggle--label')])[6]",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[@class='save-and-continue-styles hide-for-small-only']",
            locateStrategy: "xpath"
        }

    },
    Screen_PersonalInfo: {
        editIcon_JobAndEducation: {
            selector: "(//i[@class=\"evo-icon evo-icon--pen6\"])[3]",
            locateStrategy: "xpath"
        },
        question_AnnualSalary: {
            selector: "//label[text()='Annual Salary']",
            locateStrategy: 'xpath'
        },
        dropdown_AnnualSalary: {
            selector: "(//div[@class='evo-dropdown__value'])[3]",
            locateStrategy: 'xpath'
        },
        question_Currency: {
            selector: "//label[text()='Currency']",
            locateStrategy: 'xpath'
        },
        dropdown_Currency: {
            selector: "(//div[@class='evo-dropdown__value'])[4]",
            locateStrategy: 'xpath'
        },
        dropdownOptions_AnnualSalary: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        dropdownOptions_Currency: {
            selector: "//ul[@class='evo-dropdown__options']/li/span",
            locateStrategy: 'xpath'
        },
        button_Save: {
            selector: "//button[@title='Save']",
            locateStrategy: 'xpath'
        }

    },

    Screen_Goals: {
        subNavigation_MyGoals: {
            selector: "XXXX",
            locateStrategy: 'xpath'
        },
        subNavigation_CompanyChallenges: {
            selector: "XXXX",
            locateStrategy: 'xpath'
        },
        btn_StartNewGoal: {
            selector: "XXXX",
            locateStrategy: 'xpath'
        },
        panel_Goals: {
            selector: "XXXX",
            locateStrategy: 'xpath'
        },
        btn_SelectATier: {
            selector: "XXXX",
            locateStrategy: 'xpath'
        },
        btn_Decline: {
            selector: "XXXX",
            locateStrategy: 'xpath'
        }

    },

    Screen_SubstanceAndActivityLevel: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        description_Screen: {
            selector: "//div[contains(text(),'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.')]",
            locateStrategy: "xpath"
        },

        btn_Close: {
            selector: "//span[@class='evo-modal__close money-close']",
            locateStrategy: "xpath"
        },
        btn_Next: {
            selector: "//button[contains(text(),'Next')]",
            locateStrategy: "xpath"
        },
        btn_Previous: {
            selector: "//button[contains(text(),'Previous')]",
            locateStrategy: "xpath"
        },
        btn_ConnectTracker: {
            selector: "//button[@class='evo-button evo-button--text evo-button--expand-mobile evo-layout--no-padding']",
            locateStrategy: "xpath"
        },
        lbl_ScreenNumber: {
            selector: "//div[@class='evo-font--medium evo-type--text-center custom-text-size evo-text--onyx-medium']",
            locateStrategy: "xpath"
        },
        btn_SaveAndContinue: {
            selector: "//span[contains(text(),'Save and Continue Later')]",
            locateStrategy: "xpath"
        },
        question_DoYouTrackCaloriesBurnt: {
            selector: "//div[contains(text(),'Do you track or target calories burnt from activity')]",
            locateStrategy: "xpath"
        },
        toggle_DoYouTrackCaloriesBurnt: {
            selector: "//hl-slide-toggle[@formcontrolname='workoutCaloriesTracked']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DoYouTrackCaloriesBurnt: {
            selector: "//hl-slide-toggle[@formcontrolname='workoutCaloriesTracked']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_AccessToExerciseAtWork: {
            selector: "//div[contains(text(),'Do you have access to exercise opportunities at work')]",
            locateStrategy: "xpath"
        },
        toggle_AccessToExerciseAtWork: {
            selector: "//hl-slide-toggle[@formcontrolname='exerciseAtWorkOpportunity']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_AccessToExerciseAtWork: {
            selector: "//hl-slide-toggle[@formcontrolname='exerciseAtWorkOpportunity']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_DoExerciseAtWork: {
            selector: "//div[contains(text(),'do you exercise at work?')]",
            locateStrategy: "xpath"
        },
        toggle_DoExerciseAtWork: {
            selector: "//hl-slide-toggle[@formcontrolname='exerciseAtWork']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleNo_DoExerciseAtWork: {
            selector: "//hl-slide-toggle[@formcontrolname=\"exerciseAtWork\"]//input",
            locateStrategy: "xpath"
        },
        toggleAnswer_DoExerciseAtWork: {
            selector: "//hl-slide-toggle[@formcontrolname='exerciseAtWork']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_WhatFactorsWouldInfluence: {
            selector: "//div[contains(text(),'what factors would influence')]",
            locateStrategy: "xpath"
        },
        textbox_WhatFactorsWouldInfluence: {
            selector: "//input[@formcontrolname='excerciseAtWorkFactors']",
            locateStrategy: "xpath"
        },
        question_SmokedTobaccoBefore: {
            selector: "//div[contains(text(),'Did you smoke tobacco before?')]",
            locateStrategy: "xpath"
        },
        toggle_SmokedTobaccoBefore: {
            selector: "//hl-slide-toggle[@formcontrolname='smokerPrevious']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_SmokedTobaccoBefore: {
            selector: "//hl-slide-toggle[@formcontrolname='smokerPrevious']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_IntendToStopSmoking: {
            selector: "//div[contains(text(),'Do you intend to stop smoking?')]",
            locateStrategy: "xpath"
        },
        toggle_IntendToStopSmoking: {
            selector: "//hl-slide-toggle[@formcontrolname='smokerIntendToStop']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_IntendToStopSmoking: {
            selector: "//hl-slide-toggle[@formcontrolname='smokerIntendToStop']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_HadAssisatnce: {
            selector: "//div[contains(text(),'Have you had any assistance?')]",
            locateStrategy: "xpath"
        },
        toggle_HadAssisatnce: {
            selector: "//hl-slide-toggle[@formcontrolname='anyAssistance']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_HadAssisatnce: {
            selector: "//hl-slide-toggle[@formcontrolname='anyAssistance']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_WhatAreTheBiggestBarriers: {
            selector: "//div[contains(text(),'What are the biggest barriers?')]",
            locateStrategy: "xpath"
        },
        textbox_WhatAreTheBiggestBarriers: {
            selector: "//input[@formcontrolname='smokerStopBarriers']",
            locateStrategy: "xpath"
        },
        question_DoYouTakeLegalHighs: {
            selector: "//div[contains(text(),'Do you take legal highs?')]",
            locateStrategy: "xpath"
        },
        toggle_DoYouTakeLegalHighs: {
            selector: "//hl-slide-toggle[@formcontrolname='legalHighUsage']//div[contains(@class,'evo-slide-toggle--slider')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_DoYouTakeLegalHighs: {
            selector: "//hl-slide-toggle[@formcontrolname='legalHighUsage']//div[contains(@class,'hl-slide-toggle--label')]",
            locateStrategy: "xpath"
        },
        question_LevelOfonsumptionOfAlcohol: {
            selector: "//div[contains(text(),'How do you feel about your level of consumption')]",
            locateStrategy: "xpath"
        },
        dropdown_LevelOfonsumptionOfAlcohol: {
            selector: "//select[@formcontrolname='alcoholConsumptionHappiness']",
            locateStrategy: "xpath"
        },
        dropdownOptions_LevelOfonsumptionOfAlcohol: {
            selector: "//select[@formcontrolname='alcoholConsumptionHappiness']/option",
            locateStrategy: "xpath"
        }


    },

    Screen_RecordData: {
        header_Screen: {
            selector: "//div[@class='evo-modal__topper-title']",
            locateStrategy: "xpath"
        },
        dropdown_Category: {
            selector: "(//evo-dropdown[contains(@id,'health-summary-record-data')]//div[@class='evo-dropdown__value'])[1]",
            locateStrategy: "xpath"
        },
        dropdownOptions_Category: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },
        dropdown_Metric: {
            selector: "(//evo-dropdown[contains(@id,'health-summary-record-data')]//div[@class='evo-dropdown__value'])[2]",
            locateStrategy: "xpath"
        },
        dropdownOptions_Metric: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },
        button_Next: {
            selector: "//span[text()='Next']/..",
            locateStrategy: "xpath"
        },
        button_RecordManually: {
            selector: "//span[text()='Record Manually']/..",
            locateStrategy: "xpath"
        },
        button_SaveData: {
            selector: "//span[text()='Save Data']/..",
            locateStrategy: "xpath"
        },
        dropdown_Alcohol: {
            selector: "//evo-dropdown[@formcontrolname=\"recordManuallyForm\"]//div[@class='evo-dropdown__value']",
            locateStrategy: "xpath"
        },
        dropdownField_Alcohol: {
            selector: "//evo-dropdown[@formcontrolname=\"recordManuallyForm\"]/div",
            locateStrategy: "xpath"
        },
        dropdownOptions_Alcohol: {
            selector: "//div[@class='evo-dropdown__options_container']//ul/li",
            locateStrategy: "xpath"
        },
        textbox_Steps: {
            selector: "//input",
            locateStrategy: "xpath"
        }
    },

    Screen_AdminConsole: {
        tab_AnalyticsDashboard: {
            selector: "//a[contains(text(),'Admin dashboard')]",
            locateStrategy: "xpath"
        },
        tab_CompanySurvey: {
            selector: "//a[contains(text(),'Corporate survey')]",
            locateStrategy: "xpath"
        },
        second_CompanySurvey: {
            selector: "//div[@class='evo-layout--full-width evo-bg--sapphire-dark evo-flex-row--center evo-subnav']/a[2]",
            locateStrategy: "xpath"
        }
    },
    Screen_Communication: {
        question_ContactForNewsOffersProduct: {
            selector: "//label[contains(text(),'Contact me with news, offers and suitable products')]",
            locateStrategy: "xpath"
        },
        toggle_ContactForNewsOffersProduct: {
            selector: "//label[contains(text(),'Contact me with news, offers and suitable products')]",
            locateStrategy: "xpath"
        },
        toggleAnswer_ContactForNewsOffersProduct: {
            selector: "//label[contains(text(),'Contact me with news, offers and suitable products')]",
            locateStrategy: "xpath"
        },
        toggleNo_ContactForNewsOffersProduct: {
            selector: "//label[contains(text(),'Contact me with news, offers and suitable products')]",
            locateStrategy: "xpath"
        },
        header_MarketingPreference: {
            selector: "//h3[text()='Marketing preferences']",
            locateStrategy: "xpath"
        }

    },

    // Below section has web elements of Usabilla Feedback of HLI

    Usabilla_Page: {

        lbl_PoweredByUsabela: {
            selector: '//a[@title="Powered by Usabilla"]',
            locateStrategy: 'xpath'
        },
        tab_SpeceficFeedback: {
            selector: '//h4[text() ="Specific feedback"]',
            locateStrategy: 'xpath'
        },
        tab_GenericFeedback: {
            selector: '//h4[text() ="Generic feedback"]',
            locateStrategy: 'xpath'
        },
        tab_HelpAndSupport: {
            selector: '//h4[text() ="Help and Support"]',
            locateStrategy: 'xpath'
        },
        iframe_GenericFeedback: {
            selector: '//iframe[@title="Usabilla Feedback Form Frame"]',
            locateStrategy: 'xpath'
        },
        txt_ThankYouOnGenFeedback: {
            selector: '//p[text()="Thank you for taking time to provide us with your feedback. "]',
            locateStrategy: 'xpath'
        },
        img_LoveOnGenFeedback: {
            selector: '//label[@for="star5"]',
            locateStrategy: 'xpath'
        },
        drp_SelectSubOnGenFeedback: {
            selector: '//select[@name="please_select_a_subj"]',
            locateStrategy: 'xpath'
        },
        input_DisstasfactionOnGenFeedback: {
            selector: '//textarea[@aria-labelledby="comment-input-suggestion"]',
            locateStrategy: 'xpath'
        },
        input_emailOnGenFeedback: {
            selector: '//input[@aria-labelledby="email-input-suggestion"]',
            locateStrategy: 'xpath'
        },
        lbl_ratingOnGenFeedback: {
            selector: '(//input[@type="radio"][@name="nps"])[3]/..',
            locateStrategy: 'xpath'
        },
        lbl_like: {
            selector: '//h4[@id="nps-input-suggestion"]',
            locateStrategy: 'xpath'
        },
        btn_Submit: {
            selector: '//button[@class="submit"]',
            locateStrategy: 'xpath'
        },
        txt_GotFeedBackSuccessFrame: {
            selector: '//h2[text()="We got your feedback!"]',
            locateStrategy: 'xpath'
        },
        txt_ThankYouSuccessFrame: {
            selector: '//p[text()="And we really appreciate it, thank you!"]',
            locateStrategy: 'xpath'
        },
        position_LayoverFrame: {
            selector: '//div[contains(@style,"position: fixed;")]',
            locateStrategy: 'xpath'
        },
        btn_CloseUsabilla: {
            selector: '//a[@class="close"]',
            locateStrategy: 'xpath'

        }

    }


}


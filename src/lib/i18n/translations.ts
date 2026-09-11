export type Locale = "mr" | "en";

export interface TranslationDict {
  nav: {
    home: string;
    packages: string;
    login: string;
    register: string;
    dashboard: string;
    downloadApp: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  freeTest: { title: string; description: string; cta: string };
  packages: {
    title: string;
    subtitle: string;
    popularBadge: string;
    testsLabel: string;
    buyCta: string;
    comingSoon: string;
    bannerTitle: string;
    bannerSubtitle: string;
    trustLine: string;
    buyComingSoonTitle: string;
    buyComingSoonDesc: string;
    closeCta: string;
  };
  standards: { title: string; subtitle: string; comingSoon: string };
  howItWorks: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  whyUs: { title: string; items: { title: string; desc: string }[] };
  benefits: { title: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  ctaBottom: { title: string; subtitle: string; cta: string; trustLine: string };
  footer: { tagline: string; rights: string };
  auth: {
    registerTitle: string;
    loginTitle: string;
    name: string;
    email: string;
    mobile: string;
    password: string;
    emailOrMobile: string;
    registerCta: string;
    loginCta: string;
    haveAccount: string;
    noAccount: string;
    goToLogin: string;
    goToRegister: string;
    success: string;
    verifyTitle: string;
    verifySubtitle: string;
    otpLabel: string;
    verifyCta: string;
    resendCta: string;
    resendWait: string;
    changeEmail: string;
    logout: string;
  };
  quiz: {
    loading: string;
    loginRequiredTitle: string;
    loginRequiredDesc: string;
    errorTitle: string;
    retryCta: string;
    alreadyAttemptedTitle: string;
    alreadyAttemptedDesc: string;
    viewAttemptCta: string;
    questionOf: string;
    prevCta: string;
    nextCta: string;
    submitCta: string;
    submitting: string;
    unansweredWarning: string;
    resultTitle: string;
    scoreLabel: string;
    correctLabel: string;
    incorrectLabel: string;
    unattemptedLabel: string;
    reviewTitle: string;
    yourAnswer: string;
    correctAnswer: string;
    notAnswered: string;
    backHome: string;
    explanationLabel: string;
    dayPickerTitle: string;
    todayLabel: string;
    dayLabel: string;
  };
  dashboard: {
    title: string;
    welcomeBack: string;
    totalAttempts: string;
    totalCorrect: string;
    totalIncorrect: string;
    totalUnattempted: string;
    averageScore: string;
    recentAttemptsTitle: string;
    noAttempts: string;
    noAttemptsCta: string;
    dateLabel: string;
    scoreLabel: string;
  };
  revision: {
    attemptTitle: string;
    backToDashboard: string;
    saveCta: string;
    savedCta: string;
    savedQuestionsNav: string;
    savedQuestionsTitle: string;
    savedEmpty: string;
    savedEmptyCta: string;
    removeCta: string;
    correctAnswerLabel: string;
  };
  downloadPage: {
    title: string;
    subtitle: string;
    downloadCta: string;
    fileNote: string;
    stepsTitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    allReleasesCta: string;
  };
  tickets: {
    navLabel: string;
    pageTitle: string;
    pageSubtitle: string;
    newTicketCta: string;
    cancelCta: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    attachLabel: string;
    attachCta: string;
    submitCta: string;
    submitting: string;
    noTickets: string;
    noTicketsDesc: string;
    statusOpen: string;
    statusAnswered: string;
    statusClosed: string;
    backCta: string;
    composerPlaceholder: string;
    sendCta: string;
    sending: string;
    closedNotice: string;
    loginRequiredTitle: string;
    loginRequiredDesc: string;
    errorTitle: string;
    loadingLabel: string;
  };
}

export const translations: Record<Locale, TranslationDict> = {
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      packages: "Test Series",
      login: "लॉगिन",
      register: "नोंदणी करा",
      dashboard: "डॅशबोर्ड",
      downloadApp: "ॲप डाउनलोड करा",
    },
    hero: {
      badge: "🏆 महाराष्ट्रातील #1 RTO परीक्षा तयारी प्लॅटफॉर्म",
      title: "RTO परीक्षेच्या तयारीला योग्य दिशा द्या",
      subtitle: "दररोज 10 प्रश्न मोफत सोडवा आणि तुमची तयारी तपासा.",
      primaryCta: "आजची मोफत टेस्ट सुरू करा",
      secondaryCta: "Test Series पहा",
      stat1Value: "10,000+",
      stat1Label: "विद्यार्थी",
      stat2Value: "95%",
      stat2Label: "यशाचा दर",
      stat3Value: "4.8★",
      stat3Label: "विद्यार्थी रेटिंग",
    },
    freeTest: {
      title: "आजचे 10 मोफत प्रश्न",
      description:
        "कोणताही खर्च न करता दररोज विषयनिहाय 10 प्रश्न सोडवा आणि तुमची प्रगती तपासा.",
      cta: "मोफत टेस्ट सुरू करा",
    },
    packages: {
      title: "Test Series Packages",
      subtitle: "तुमच्या तयारीसाठी योग्य पॅकेज निवडा",
      popularBadge: "सर्वाधिक लोकप्रिय",
      testsLabel: "Tests",
      buyCta: "खरेदी करा",
      comingSoon:
        "पॅकेजेस लवकरच उपलब्ध होतील. Admin panel वरून configure केल्यानंतर इथे दिसतील.",
      bannerTitle: "तुमचा परवाना नशिबावर सोडू नका",
      bannerSubtitle:
        "पूर्ण Test Series करणारे विद्यार्थी पहिल्याच प्रयत्नात 3 पट अधिक यशस्वी होतात. आजच तुमचे पॅकेज निवडा.",
      trustLine: "🔒 सुरक्षित पेमेंट  ·  ⚡ झटपट ऍक्सेस  ·  ✓ केव्हाही रद्द करा",
      buyComingSoonTitle: "लवकरच येत आहे",
      buyComingSoonDesc: "पेमेंट सुविधा सध्या तयार होत आहे. कृपया थोड्या वेळाने पुन्हा प्रयत्न करा.",
      closeCta: "बंद करा",
    },
    standards: {
      title: "Standard-wise Subjects",
      subtitle: "तुमचा वर्ग निवडा आणि विषयानुसार सराव करा",
      comingSoon: "अभ्यासक्रम लवकरच जोडला जाईल.",
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "नोंदणी करा",
          desc: "मोफत खाते तयार करा आणि प्लॅटफॉर्मवर प्रवेश मिळवा.",
        },
        {
          title: "सराव सुरू करा",
          desc: "दररोजची मोफत टेस्ट सोडवा किंवा Test Series खरेदी करा.",
        },
        {
          title: "प्रगती तपासा",
          desc: "प्रत्येक टेस्टनंतर सविस्तर निकाल आणि स्पष्टीकरण पहा.",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Us",
      items: [
        {
          title: "मराठी + इंग्रजी",
          desc: "प्रत्येक प्रश्न दोन्ही भाषांमध्ये उपलब्ध.",
        },
        {
          title: "तज्ज्ञांनी तयार केलेले प्रश्न",
          desc: "स्पष्टीकरणासह दर्जेदार प्रश्नसंच.",
        },
        {
          title: "खरी परीक्षा अनुभूती",
          desc: "टायमर आणि प्रश्न पॅलेटसह वास्तविक परीक्षेसारखी टेस्ट.",
        },
        {
          title: "परवडणाऱ्या किमतीत",
          desc: "बजेटमध्ये बसणारी टेस्ट सीरीज पॅकेजेस.",
        },
      ],
    },
    benefits: {
      title: "Student Benefits",
      items: [
        "दैनंदिन मोफत सराव",
        "विषयनिहाय आणि वर्गनिहाय टेस्ट्स",
        "सविस्तर कामगिरी विश्लेषण",
        "प्रत्येक उत्तराचे स्पष्टीकरण",
      ],
    },
    faq: {
      title: "वारंवार विचारले जाणारे प्रश्न",
      items: [
        {
          q: "मोफत टेस्ट खरंच मोफत आहे का?",
          a: "होय, दररोज 10 प्रश्नांची टेस्ट पूर्णपणे मोफत आहे.",
        },
        {
          q: "मी भाषा कशी बदलू शकतो?",
          a: "वरील नेव्हिगेशन बारमधील मराठी/English बटणावर क्लिक करा.",
        },
        {
          q: "पेमेंट सुरक्षित आहे का?",
          a: "होय, सर्व पेमेंट सुरक्षित गेटवेद्वारे प्रक्रिया केले जातील.",
        },
      ],
    },
    ctaBottom: {
      title: "आजच तुमची तयारी सुरू करा",
      subtitle: "हजारो विद्यार्थ्यांसोबत सामील व्हा आणि यशस्वी व्हा.",
      cta: "मोफत नोंदणी करा",
      trustLine: "कोणतीही अडचण नाही — एकदा पैसे भरा, अमर्यादित सराव करा.",
    },
    footer: {
      tagline: "महाराष्ट्रातील RTO परीक्षार्थींसाठी विश्वासार्ह तयारी व्यासपीठ.",
      rights: "सर्व हक्क राखीव.",
    },
    auth: {
      registerTitle: "नवीन खाते तयार करा",
      loginTitle: "लॉगिन करा",
      name: "पूर्ण नाव",
      email: "ईमेल",
      mobile: "मोबाईल नंबर",
      password: "पासवर्ड",
      emailOrMobile: "ईमेल किंवा मोबाईल नंबर",
      registerCta: "नोंदणी करा",
      loginCta: "लॉगिन करा",
      haveAccount: "आधीच खाते आहे?",
      noAccount: "खाते नाही?",
      goToLogin: "लॉगिन करा",
      goToRegister: "नोंदणी करा",
      success: "यशस्वी! स्वागत आहे",
      verifyTitle: "OTP पडताळणी करा",
      verifySubtitle: "तुमच्या ईमेलवर पाठवलेला 6-अंकी कोड टाका",
      otpLabel: "OTP कोड",
      verifyCta: "पडताळणी करा",
      resendCta: "पुन्हा कोड पाठवा",
      resendWait: "पुन्हा कोड पाठवण्यासाठी थांबा",
      changeEmail: "ईमेल बदला",
      logout: "लॉगआउट",
    },
    quiz: {
      loading: "प्रश्न लोड होत आहेत...",
      loginRequiredTitle: "मोफत टेस्ट सुरू करण्यासाठी लॉगिन करा",
      loginRequiredDesc: "दैनिक मोफत टेस्ट देण्यासाठी कृपया लॉगिन किंवा नोंदणी करा.",
      errorTitle: "काहीतरी चूक झाली",
      retryCta: "पुन्हा प्रयत्न करा",
      alreadyAttemptedTitle: "आजची मोफत टेस्ट आधीच दिली आहे",
      alreadyAttemptedDesc: "तुम्ही आज एकदाच मोफत टेस्ट देऊ शकता. उद्या पुन्हा प्रयत्न करा.",
      viewAttemptCta: "निकाल पहा",
      questionOf: "प्रश्न",
      prevCta: "मागील",
      nextCta: "पुढील",
      submitCta: "टेस्ट सबमिट करा",
      submitting: "सबमिट होत आहे...",
      unansweredWarning: "काही प्रश्न अनुत्तरित आहेत. तरीही सबमिट करायचे आहे का?",
      resultTitle: "तुमचा निकाल",
      scoreLabel: "गुण",
      correctLabel: "बरोबर",
      incorrectLabel: "चूक",
      unattemptedLabel: "अनुत्तरित",
      reviewTitle: "प्रश्न पुनरावलोकन",
      yourAnswer: "तुमचे उत्तर",
      correctAnswer: "बरोबर उत्तर",
      notAnswered: "उत्तर दिले नाही",
      backHome: "मुख्यपृष्ठावर जा",
      explanationLabel: "स्पष्टीकरण",
      dayPickerTitle: "मागील दिवसांची टेस्ट निवडा",
      todayLabel: "आज",
      dayLabel: "दिवस",
    },
    dashboard: {
      title: "डॅशबोर्ड",
      welcomeBack: "पुन्हा स्वागत आहे",
      totalAttempts: "एकूण टेस्ट",
      totalCorrect: "एकूण बरोबर",
      totalIncorrect: "एकूण चूक",
      totalUnattempted: "एकूण अनुत्तरित",
      averageScore: "सरासरी गुण",
      recentAttemptsTitle: "अलीकडील टेस्ट",
      noAttempts: "तुम्ही अजून कोणतीही टेस्ट दिलेली नाही.",
      noAttemptsCta: "मोफत टेस्ट सुरू करा",
      dateLabel: "तारीख",
      scoreLabel: "गुण",
    },
    revision: {
      attemptTitle: "टेस्ट तपशील",
      backToDashboard: "डॅशबोर्डवर परत जा",
      saveCta: "रिव्हिजनसाठी जतन करा",
      savedCta: "जतन केले",
      savedQuestionsNav: "जतन केलेले प्रश्न",
      savedQuestionsTitle: "जतन केलेले प्रश्न",
      savedEmpty: "तुम्ही अजून कोणताही प्रश्न जतन केलेला नाही.",
      savedEmptyCta: "डॅशबोर्डवर जा",
      removeCta: "काढून टाका",
      correctAnswerLabel: "बरोबर उत्तर",
    },
    downloadPage: {
      title: "RTO Quiz Android ॲप डाउनलोड करा",
      subtitle:
        "मोबाईलवर इन्स्टॉल करा आणि कधीही, कुठेही सर्व मोफत टेस्ट व Test Series सोडवा.",
      downloadCta: "APK डाउनलोड करा",
      fileNote: "थेट .apk फाईल — Android 8.0 आणि त्यावरील आवृत्तीसाठी.",
      stepsTitle: "इन्स्टॉल कसे करावे",
      step1: "वरील बटणावर क्लिक करून APK फाईल डाउनलोड करा.",
      step2:
        'फाईल उघडताना "Install unknown apps" परवानगी मागितली तर ती चालू करा (Settings मध्ये एकदाच करावे लागते).',
      step3: "डाउनलोड झालेली rto-quiz.apk फाईल उघडा आणि Install वर टॅप करा.",
      step4: "ॲप उघडा, लॉगिन करा आणि सराव सुरू करा — वेबसाईटप्रमाणेच सर्व सुविधा उपलब्ध आहेत.",
      allReleasesCta: "जुन्या आवृत्त्या पहा",
    },
    tickets: {
      navLabel: "तक्रारी",
      pageTitle: "माझ्या तक्रारी",
      pageSubtitle: "तुमचे प्रश्न किंवा अडचणी आमच्या टीमला कळवा.",
      newTicketCta: "नवीन तक्रार नोंदवा",
      cancelCta: "रद्द करा",
      subjectLabel: "विषय",
      subjectPlaceholder: "उदा. पेमेंट समस्या",
      messageLabel: "तुमचा प्रश्न",
      messagePlaceholder: "तुमची अडचण सविस्तर लिहा...",
      attachLabel: "फोटो जोडा (ऐच्छिक)",
      attachCta: "📎 फोटो निवडा",
      submitCta: "तक्रार सबमिट करा",
      submitting: "सबमिट करत आहे...",
      noTickets: "अजून कोणतीही तक्रार नाही",
      noTicketsDesc: "तुम्हाला काही अडचण असल्यास नवीन तक्रार नोंदवा.",
      statusOpen: "प्रलंबित",
      statusAnswered: "उत्तर दिले",
      statusClosed: "बंद",
      backCta: "मागे जा",
      composerPlaceholder: "तुमचा संदेश टाइप करा...",
      sendCta: "पाठवा",
      sending: "पाठवत आहे...",
      closedNotice: "ही तक्रार बंद करण्यात आली आहे.",
      loginRequiredTitle: "लॉगिन आवश्यक आहे",
      loginRequiredDesc: "तक्रारी पाहण्यासाठी कृपया लॉगिन करा.",
      errorTitle: "काहीतरी चुकले",
      loadingLabel: "लोड होत आहे...",
    },
  },
  en: {
    nav: {
      home: "Home",
      packages: "Test Series",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
      downloadApp: "Download App",
    },
    hero: {
      badge: "🏆 Maharashtra's #1 RTO Exam Prep Platform",
      title: "Give the right direction to your RTO exam preparation",
      subtitle: "Solve 10 questions free every day and test your preparation.",
      primaryCta: "Start Today's Free Test",
      secondaryCta: "View Test Series",
      stat1Value: "10,000+",
      stat1Label: "Students Trained",
      stat2Value: "95%",
      stat2Label: "Pass Rate",
      stat3Value: "4.8★",
      stat3Label: "Student Rating",
    },
    freeTest: {
      title: "Today's 10 Free Questions",
      description:
        "Practice 10 subject-wise questions every day at no cost, and track your progress.",
      cta: "Start Free Test",
    },
    packages: {
      title: "Test Series Packages",
      subtitle: "Choose the right package for your preparation",
      popularBadge: "Most Popular",
      testsLabel: "Tests",
      buyCta: "Buy Now",
      comingSoon:
        "Packages will appear here once configured from the admin panel.",
      bannerTitle: "Don't leave your license to luck",
      bannerSubtitle:
        "Students who complete a full test series pass on their first attempt 3x more often. Pick your plan and start today.",
      trustLine: "🔒 Secure payment  ·  ⚡ Instant access  ·  ✓ Cancel anytime",
      buyComingSoonTitle: "Coming Soon",
      buyComingSoonDesc: "Payments aren't live yet - we're putting the finishing touches on it. Please check back soon.",
      closeCta: "Close",
    },
    standards: {
      title: "Standard-wise Subjects",
      subtitle: "Pick your standard and practice subject-wise",
      comingSoon: "Curriculum will be added soon.",
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        {
          title: "Register",
          desc: "Create a free account and get access to the platform.",
        },
        {
          title: "Start Practicing",
          desc: "Attempt today's free test or purchase a test series.",
        },
        {
          title: "Track Progress",
          desc: "See detailed results and explanations after every test.",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Us",
      items: [
        {
          title: "Marathi + English",
          desc: "Every question available in both languages.",
        },
        {
          title: "Expert-crafted questions",
          desc: "High-quality question bank with explanations.",
        },
        {
          title: "Real exam experience",
          desc: "Timer and question palette just like a real exam.",
        },
        {
          title: "Affordable pricing",
          desc: "Test series packages that fit every budget.",
        },
      ],
    },
    benefits: {
      title: "Student Benefits",
      items: [
        "Daily free practice",
        "Subject-wise and standard-wise tests",
        "Detailed performance analytics",
        "Explanation for every answer",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is the free test really free?",
          a: "Yes, the daily 10-question test is completely free.",
        },
        {
          q: "How do I switch languages?",
          a: "Click the Marathi/English toggle in the navigation bar.",
        },
        {
          q: "Is payment secure?",
          a: "Yes, all payments are processed through a secure gateway.",
        },
      ],
    },
    ctaBottom: {
      title: "Start your preparation today",
      subtitle: "Join thousands of students and succeed.",
      cta: "Register for Free",
      trustLine: "No credit card stress — pay once, practice unlimited times.",
    },
    footer: {
      tagline:
        "A trusted preparation platform for RTO exam aspirants in Maharashtra.",
      rights: "All rights reserved.",
    },
    auth: {
      registerTitle: "Create a new account",
      loginTitle: "Login",
      name: "Full Name",
      email: "Email",
      mobile: "Mobile Number",
      password: "Password",
      emailOrMobile: "Email or Mobile Number",
      registerCta: "Register",
      loginCta: "Login",
      haveAccount: "Already have an account?",
      noAccount: "Don't have an account?",
      goToLogin: "Login",
      goToRegister: "Register",
      success: "Success! Welcome",
      verifyTitle: "Verify OTP",
      verifySubtitle: "Enter the 6-digit code sent to your email",
      otpLabel: "OTP Code",
      verifyCta: "Verify",
      resendCta: "Resend code",
      resendWait: "Wait to resend code",
      changeEmail: "Change email",
      logout: "Logout",
    },
    quiz: {
      loading: "Loading questions...",
      loginRequiredTitle: "Login to start the free test",
      loginRequiredDesc: "Please login or register to take the daily free test.",
      errorTitle: "Something went wrong",
      retryCta: "Try again",
      alreadyAttemptedTitle: "You've already attempted today's free test",
      alreadyAttemptedDesc: "You can attempt the free test once per day. Come back tomorrow for a new set of questions.",
      viewAttemptCta: "View Result",
      questionOf: "Question",
      prevCta: "Previous",
      nextCta: "Next",
      submitCta: "Submit Test",
      submitting: "Submitting...",
      unansweredWarning: "Some questions are unanswered. Submit anyway?",
      resultTitle: "Your Result",
      scoreLabel: "Score",
      correctLabel: "Correct",
      incorrectLabel: "Incorrect",
      unattemptedLabel: "Unattempted",
      reviewTitle: "Question Review",
      yourAnswer: "Your answer",
      correctAnswer: "Correct answer",
      notAnswered: "Not answered",
      backHome: "Back to Home",
      explanationLabel: "Explanation",
      dayPickerTitle: "Choose a day",
      todayLabel: "Today",
      dayLabel: "Day",
    },
    dashboard: {
      title: "Dashboard",
      welcomeBack: "Welcome back",
      totalAttempts: "Total Tests",
      totalCorrect: "Total Correct",
      totalIncorrect: "Total Incorrect",
      totalUnattempted: "Total Unattempted",
      averageScore: "Average Score",
      recentAttemptsTitle: "Recent Tests",
      noAttempts: "You haven't attempted any test yet.",
      noAttemptsCta: "Start Free Test",
      dateLabel: "Date",
      scoreLabel: "Score",
    },
    revision: {
      attemptTitle: "Test Details",
      backToDashboard: "Back to Dashboard",
      saveCta: "Save for revision",
      savedCta: "Saved",
      savedQuestionsNav: "Saved Questions",
      savedQuestionsTitle: "Saved Questions",
      savedEmpty: "You haven't saved any questions yet.",
      savedEmptyCta: "Go to Dashboard",
      removeCta: "Remove",
      correctAnswerLabel: "Correct answer",
    },
    downloadPage: {
      title: "Download the RTO Quiz Android App",
      subtitle:
        "Install it on your phone and attempt every free test and test series anytime, anywhere.",
      downloadCta: "Download APK",
      fileNote: "Direct .apk file — works on Android 8.0 and above.",
      stepsTitle: "How to install",
      step1: "Tap the button above to download the APK file.",
      step2:
        'If prompted, allow "Install unknown apps" for your browser (a one-time setting in Android Settings).',
      step3: "Open the downloaded rto-quiz.apk file and tap Install.",
      step4: "Open the app, log in, and start practicing — every feature from the website is available.",
      allReleasesCta: "View older versions",
    },
    tickets: {
      navLabel: "Support",
      pageTitle: "My Tickets",
      pageSubtitle: "Raise a query and chat with our support team.",
      newTicketCta: "Raise New Ticket",
      cancelCta: "Cancel",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. Payment issue",
      messageLabel: "Your query",
      messagePlaceholder: "Describe your issue in detail...",
      attachLabel: "Attach images (optional)",
      attachCta: "📎 Choose images",
      submitCta: "Submit Ticket",
      submitting: "Submitting...",
      noTickets: "No tickets yet",
      noTicketsDesc: "Raise a new ticket if you have any query or issue.",
      statusOpen: "Open",
      statusAnswered: "Answered",
      statusClosed: "Closed",
      backCta: "Back",
      composerPlaceholder: "Type your message...",
      sendCta: "Send",
      sending: "Sending...",
      closedNotice: "This ticket has been closed.",
      loginRequiredTitle: "Login Required",
      loginRequiredDesc: "Please log in to view your tickets.",
      errorTitle: "Something went wrong",
      loadingLabel: "Loading...",
    },
  },
};

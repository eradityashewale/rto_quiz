export type Locale = "mr" | "en";

export interface TranslationDict {
  nav: { home: string; packages: string; login: string; register: string; dashboard: string };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  freeTest: { title: string; description: string; cta: string };
  packages: {
    title: string;
    subtitle: string;
    popularBadge: string;
    testsLabel: string;
    buyCta: string;
    comingSoon: string;
  };
  standards: { title: string; subtitle: string; comingSoon: string };
  howItWorks: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  whyUs: { title: string; items: { title: string; desc: string }[] };
  benefits: { title: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  ctaBottom: { title: string; subtitle: string; cta: string };
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
}

export const translations: Record<Locale, TranslationDict> = {
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      packages: "Test Series",
      login: "लॉगिन",
      register: "नोंदणी करा",
      dashboard: "डॅशबोर्ड",
    },
    hero: {
      title: "RTO परीक्षेच्या तयारीला योग्य दिशा द्या",
      subtitle: "दररोज 10 प्रश्न मोफत सोडवा आणि तुमची तयारी तपासा.",
      primaryCta: "आजची मोफत टेस्ट सुरू करा",
      secondaryCta: "Test Series पहा",
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
  },
  en: {
    nav: {
      home: "Home",
      packages: "Test Series",
      login: "Login",
      register: "Register",
      dashboard: "Dashboard",
    },
    hero: {
      title: "Give the right direction to your RTO exam preparation",
      subtitle: "Solve 10 questions free every day and test your preparation.",
      primaryCta: "Start Today's Free Test",
      secondaryCta: "View Test Series",
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
  },
};

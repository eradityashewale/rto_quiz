import type { QuestionSetInput } from "./types";

// Source: All questions & answer/AMVI_Std5_EnvStudies_Questions.pdf (English-only source).
// NOTE: No paired Marathi PDF exists for this subject. All textMr/explanationMr fields
// below are translations produced during import by the assistant, not sourced from an
// original Marathi PDF (unlike the other bilingual subjects in this pipeline).
// The source PDF's cover/title page, "How to use this booklet" intro, and the trailing
// "Quick Revision - Key Facts Summary" table were skipped (not imported as questions).
const data: QuestionSetInput = {
  standard: { code: "STD5", nameEn: "Standard 5", nameMr: "इयत्ता ५वी", sortOrder: 5 },
  subject: { code: "EVS", nameEn: "Environmental Studies", nameMr: "पर्यावरण अभ्यास", sortOrder: 1 },
  questions: [
    {
      textEn: "What is the correct order of planets from the Sun?",
      textMr: "सूर्यापासून ग्रहांचा योग्य क्रम कोणता आहे?",
      explanationEn:
        "The eight planets in order from the Sun are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
      explanationMr:
        "सूर्यापासून क्रमाने आठ ग्रह आहेत: बुध, शुक्र, पृथ्वी, मंगळ, गुरू, शनि, युरेनस, नेपच्यून.",
      options: [
        { label: "A", textEn: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune", textMr: "बुध, शुक्र, पृथ्वी, मंगळ, गुरू, शनि, युरेनस, नेपच्यून", isCorrect: true },
        { label: "B", textEn: "Mercury, Earth, Venus, Mars, Jupiter, Saturn, Neptune, Uranus", textMr: "बुध, पृथ्वी, शुक्र, मंगळ, गुरू, शनि, नेपच्यून, युरेनस", isCorrect: false },
        { label: "C", textEn: "Venus, Mercury, Earth, Mars, Saturn, Jupiter, Uranus, Neptune", textMr: "शुक्र, बुध, पृथ्वी, मंगळ, शनि, गुरू, युरेनस, नेपच्यून", isCorrect: false },
        { label: "D", textEn: "Mercury, Venus, Mars, Earth, Jupiter, Saturn, Uranus, Neptune", textMr: "बुध, शुक्र, मंगळ, पृथ्वी, गुरू, शनि, युरेनस, नेपच्यून", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is classified as a dwarf planet?",
      textMr: "कोणता ग्रह 'बटु ग्रह' (Dwarf planet) म्हणून वर्गीकृत आहे?",
      explanationEn:
        "Pluto was reclassified as a dwarf planet by the International Astronomical Union (IAU). It is located beyond Neptune in the Kuiper Belt.",
      explanationMr:
        "आंतरराष्ट्रीय खगोलशास्त्रीय संघाने (IAU) प्लूटोला बटु ग्रह म्हणून पुनर्वर्गीकृत केले. तो नेपच्यूनच्या पलीकडे कायपर पट्ट्यात आहे.",
      options: [
        { label: "A", textEn: "Mars", textMr: "मंगळ", isCorrect: false },
        { label: "B", textEn: "Pluto", textMr: "प्लूटो", isCorrect: true },
        { label: "C", textEn: "Jupiter", textMr: "गुरू", isCorrect: false },
        { label: "D", textEn: "Neptune", textMr: "नेपच्यून", isCorrect: false },
      ],
    },
    {
      textEn: "India's Chandrayaan-1 was launched on:",
      textMr: "भारताचे चांद्रयान-१ कधी प्रक्षेपित करण्यात आले?",
      explanationEn:
        "Chandrayaan-1, India's first lunar mission by ISRO, was launched on October 22, 2008. It confirmed the presence of water molecules on the Moon.",
      explanationMr:
        "इस्रोचे भारताचे पहिले चांद्र मोहीम चांद्रयान-१ २२ ऑक्टोबर २००८ रोजी प्रक्षेपित करण्यात आले. यामुळे चंद्रावर पाण्याच्या रेणूंचे अस्तित्व सिद्ध झाले.",
      options: [
        { label: "A", textEn: "November 5, 2013", textMr: "५ नोव्हेंबर २०१३", isCorrect: false },
        { label: "B", textEn: "October 22, 2008", textMr: "२२ ऑक्टोबर २००८", isCorrect: true },
        { label: "C", textEn: "September 24, 2014", textMr: "२४ सप्टेंबर २०१४", isCorrect: false },
        { label: "D", textEn: "April 19, 1975", textMr: "१९ एप्रिल १९७५", isCorrect: false },
      ],
    },
    {
      textEn: "Rakesh Sharma became India's first astronaut in which year?",
      textMr: "राकेश शर्मा भारताचे पहिले अंतराळवीर कोणत्या वर्षी बनले?",
      explanationEn:
        "Rakesh Sharma became the first Indian to travel to space in 1984 aboard the Soviet Soyuz T-11 spacecraft. When Prime Minister Indira Gandhi asked how India looked from space, he replied 'Saare Jahan Se Achha'.",
      explanationMr:
        "राकेश शर्मा १९८४ मध्ये सोव्हिएत सोयुझ टी-११ या अंतराळयानातून अंतराळात जाणारे पहिले भारतीय ठरले. पंतप्रधान इंदिरा गांधींनी भारत अंतराळातून कसा दिसतो असे विचारले असता त्यांनी 'सारे जहाँ से अच्छा' असे उत्तर दिले.",
      options: [
        { label: "A", textEn: "1980", textMr: "१९८०", isCorrect: false },
        { label: "B", textEn: "1975", textMr: "१९७५", isCorrect: false },
        { label: "C", textEn: "1984", textMr: "१९८४", isCorrect: true },
        { label: "D", textEn: "1990", textMr: "१९९०", isCorrect: false },
      ],
    },
    {
      textEn: "The asteroid belt is located between which two planets?",
      textMr: "लघुग्रह पट्टा (Asteroid belt) कोणत्या दोन ग्रहांच्या दरम्यान आहे?",
      explanationEn:
        "The asteroid belt lies between Mars and Jupiter. It consists of millions of rocky bodies called asteroids that orbit the Sun. Ceres, the largest, is classified as a dwarf planet.",
      explanationMr:
        "लघुग्रह पट्टा मंगळ व गुरू यांच्या दरम्यान आहे. यात सूर्याभोवती फिरणारे लाखो खडकाळ पदार्थ (लघुग्रह) असतात. सर्वात मोठा लघुग्रह सीरीस हा बटु ग्रह म्हणून वर्गीकृत आहे.",
      options: [
        { label: "A", textEn: "Earth and Mars", textMr: "पृथ्वी व मंगळ", isCorrect: false },
        { label: "B", textEn: "Mars and Jupiter", textMr: "मंगळ व गुरू", isCorrect: true },
        { label: "C", textEn: "Jupiter and Saturn", textMr: "गुरू व शनि", isCorrect: false },
        { label: "D", textEn: "Saturn and Uranus", textMr: "शनि व युरेनस", isCorrect: false },
      ],
    },
    {
      textEn: "The rotation of the Earth is responsible for:",
      textMr: "पृथ्वीच्या परिवलनामुळे काय घडते?",
      explanationEn:
        "Earth rotates on its own axis from west to east, completing one rotation in approximately 24 hours. This rotation causes the alternation of day and night as different parts of Earth face the Sun.",
      explanationMr:
        "पृथ्वी पश्चिमेकडून पूर्वेकडे स्वतःभोवती फिरते, एक परिवलन सुमारे २४ तासांत पूर्ण होते. या परिवलनामुळे पृथ्वीचे वेगवेगळे भाग सूर्यासमोर येतात व दिवस-रात्र होतात.",
      options: [
        { label: "A", textEn: "Change of seasons", textMr: "ऋतू बदल", isCorrect: false },
        { label: "B", textEn: "Formation of day and night", textMr: "दिवस-रात्र निर्मिती", isCorrect: true },
        { label: "C", textEn: "Formation of tides", textMr: "भरती-ओहोटी निर्मिती", isCorrect: false },
        { label: "D", textEn: "Leap year", textMr: "लीप वर्ष", isCorrect: false },
      ],
    },
    {
      textEn: "How many days does a leap year have, and why?",
      textMr: "लीप वर्षात किती दिवस असतात व का?",
      explanationEn:
        "Earth takes approximately 365.25 days to complete one revolution around the Sun. The extra 0.25 day accumulates over 4 years, adding an extra day (Feb 29) to make a leap year of 366 days.",
      explanationMr:
        "पृथ्वीला सूर्याभोवती एक प्रदक्षिणा पूर्ण करण्यास सुमारे ३६५.२५ दिवस लागतात. उरलेला ०.२५ दिवस दर चार वर्षांनी साठून एक अतिरिक्त दिवस (२९ फेब्रुवारी) मिळतो, त्यामुळे लीप वर्ष ३६६ दिवसांचे असते.",
      options: [
        { label: "A", textEn: "364 days, because Earth's orbit is elliptical", textMr: "३६४ दिवस, कारण पृथ्वीची कक्षा लंबवर्तुळाकार आहे", isCorrect: false },
        { label: "B", textEn: "366 days, because Earth takes 365.25 days to orbit the Sun", textMr: "३६६ दिवस, कारण पृथ्वीला सूर्याभोवती फिरण्यास ३६५.२५ दिवस लागतात", isCorrect: true },
        { label: "C", textEn: "365 days, because of Earth's rotation speed", textMr: "३६५ दिवस, पृथ्वीच्या परिवलन गतीमुळे", isCorrect: false },
        { label: "D", textEn: "367 days, due to Moon's gravitational pull", textMr: "३६७ दिवस, चंद्राच्या गुरुत्वाकर्षणामुळे", isCorrect: false },
      ],
    },
    {
      textEn: "What are the six seasons (Rituchakra) of India in correct order?",
      textMr: "भारताचे सहा ऋतू (ऋतुचक्र) योग्य क्रमाने कोणते आहेत?",
      explanationEn:
        "India's six seasons are: Vasant (Spring), Grishma (Summer), Varsha (Monsoon), Sharad (Autumn), Hemant (Pre-winter), Shishir (Winter). These correspond to the two-month periods of the Hindu calendar.",
      explanationMr:
        "भारताचे सहा ऋतू आहेत: वसंत, ग्रीष्म, वर्षा, शरद, हेमंत, शिशिर. हे हिंदू पंचांगातील दोन-दोन महिन्यांच्या कालावधींशी सुसंगत आहेत.",
      options: [
        { label: "A", textEn: "Grishma, Vasant, Varsha, Sharad, Hemant, Shishir", textMr: "ग्रीष्म, वसंत, वर्षा, शरद, हेमंत, शिशिर", isCorrect: false },
        { label: "B", textEn: "Vasant, Grishma, Varsha, Sharad, Hemant, Shishir", textMr: "वसंत, ग्रीष्म, वर्षा, शरद, हेमंत, शिशिर", isCorrect: true },
        { label: "C", textEn: "Varsha, Vasant, Grishma, Shishir, Hemant, Sharad", textMr: "वर्षा, वसंत, ग्रीष्म, शिशिर, हेमंत, शरद", isCorrect: false },
        { label: "D", textEn: "Sharad, Vasant, Hemant, Grishma, Varsha, Shishir", textMr: "शरद, वसंत, हेमंत, ग्रीष्म, वर्षा, शिशिर", isCorrect: false },
      ],
    },
    {
      textEn: "The waxing phase of the Moon (increasing brightness) is called:",
      textMr: "चंद्राची वाढती कला (वाढता प्रकाश) यास काय म्हणतात?",
      explanationEn:
        "Shukla Paksha is the bright fortnight when the Moon waxes (grows larger) from new moon to full moon. Krishna Paksha is the dark fortnight when the Moon wanes. A lunar month (Chandramasa) is 28-30 days.",
      explanationMr:
        "शुक्ल पक्ष म्हणजे अमावस्येपासून पौर्णिमेपर्यंतचा प्रकाशित पंधरवडा, ज्यात चंद्र मोठा होत जातो. कृष्ण पक्ष म्हणजे चंद्र लहान होत जाणारा अंधारा पंधरवडा. चांद्रमास साधारण २८-३० दिवसांचा असतो.",
      options: [
        { label: "A", textEn: "Krishna Paksha", textMr: "कृष्ण पक्ष", isCorrect: false },
        { label: "B", textEn: "Amavasya", textMr: "अमावस्या", isCorrect: false },
        { label: "C", textEn: "Shukla Paksha", textMr: "शुक्ल पक्ष", isCorrect: true },
        { label: "D", textEn: "Purnima", textMr: "पौर्णिमा", isCorrect: false },
      ],
    },
    {
      textEn: "During which period does the Northern Hemisphere experience summer?",
      textMr: "उत्तर गोलार्धात कोणत्या काळात उन्हाळा असतो?",
      explanationEn:
        "The Northern Hemisphere experiences summer from approximately March 22 to September 23, when the Northern Hemisphere is tilted toward the Sun. India, being in the Northern Hemisphere, experiences summer during this period.",
      explanationMr:
        "उत्तर गोलार्धात साधारण २२ मार्च ते २३ सप्टेंबर या काळात उन्हाळा असतो, कारण त्या काळात उत्तर गोलार्ध सूर्याकडे झुकलेला असतो. भारत उत्तर गोलार्धात असल्याने याच काळात तेथे उन्हाळा असतो.",
      options: [
        { label: "A", textEn: "October to March", textMr: "ऑक्टोबर ते मार्च", isCorrect: false },
        { label: "B", textEn: "March 22 to September 23", textMr: "२२ मार्च ते २३ सप्टेंबर", isCorrect: true },
        { label: "C", textEn: "September 23 to March 22", textMr: "२३ सप्टेंबर ते २२ मार्च", isCorrect: false },
        { label: "D", textEn: "June 21 to December 21", textMr: "२१ जून ते २१ डिसेंबर", isCorrect: false },
      ],
    },
    {
      textEn: "What fraction of the Earth's surface is covered by land?",
      textMr: "पृथ्वीच्या पृष्ठभागाचा किती भाग जमिनीने व्यापलेला आहे?",
      explanationEn:
        "Land covers approximately one-third (1/3) of the Earth's surface, while water covers two-thirds (2/3). This is why Earth is sometimes called the 'Blue Planet'.",
      explanationMr:
        "पृथ्वीच्या पृष्ठभागाचा सुमारे एक-तृतीयांश (१/३) भाग जमीन व्यापते, तर दोन-तृतीयांश (२/३) भाग पाणी व्यापते. यामुळेच पृथ्वीला कधीकधी 'निळा ग्रह' म्हटले जाते.",
      options: [
        { label: "A", textEn: "Two-thirds (2/3)", textMr: "दोन-तृतीयांश (२/३)", isCorrect: false },
        { label: "B", textEn: "One-fourth (1/4)", textMr: "एक-चतुर्थांश (१/४)", isCorrect: false },
        { label: "C", textEn: "One-third (1/3)", textMr: "एक-तृतीयांश (१/३)", isCorrect: true },
        { label: "D", textEn: "Three-fourths (3/4)", textMr: "तीन-चतुर्थांश (३/४)", isCorrect: false },
      ],
    },
    {
      textEn: "Which is the largest continent and which is the smallest?",
      textMr: "सर्वात मोठा खंड कोणता आणि सर्वात लहान कोणता?",
      explanationEn:
        "Asia is the largest continent (covers about 30% of total land area) and Australia is the smallest continent. There are 7 continents in total: Asia, Africa, North America, South America, Antarctica, Europe, Australia.",
      explanationMr:
        "आशिया हा सर्वात मोठा खंड आहे (एकूण भूभागाच्या सुमारे ३०%) आणि ऑस्ट्रेलिया सर्वात लहान खंड आहे. एकूण ७ खंड आहेत: आशिया, आफ्रिका, उत्तर अमेरिका, दक्षिण अमेरिका, अंटार्क्टिका, युरोप, ऑस्ट्रेलिया.",
      options: [
        { label: "A", textEn: "Africa is largest; Europe is smallest", textMr: "आफ्रिका सर्वात मोठा; युरोप सर्वात लहान", isCorrect: false },
        { label: "B", textEn: "Asia is largest; Australia is smallest", textMr: "आशिया सर्वात मोठा; ऑस्ट्रेलिया सर्वात लहान", isCorrect: true },
        { label: "C", textEn: "Asia is largest; Antarctica is smallest", textMr: "आशिया सर्वात मोठा; अंटार्क्टिका सर्वात लहान", isCorrect: false },
        { label: "D", textEn: "North America is largest; Australia is smallest", textMr: "उत्तर अमेरिका सर्वात मोठा; ऑस्ट्रेलिया सर्वात लहान", isCorrect: false },
      ],
    },
    {
      textEn:
        "The ozone layer, which absorbs harmful ultraviolet rays from the Sun, is found in which atmospheric layer?",
      textMr: "सूर्याच्या हानिकारक अतिनील किरणांचे शोषण करणारा ओझोन थर कोणत्या वातावरणीय थरात आढळतो?",
      explanationEn:
        "The ozone layer is found in the Stratosphere, approximately 15-50 km above the Earth's surface. It absorbs most of the Sun's harmful ultraviolet (UV) radiation. The Troposphere (0-13 km) is the lowest layer where all weather occurs.",
      explanationMr:
        "ओझोन थर स्थितांबरात (Stratosphere) आढळतो, जो पृथ्वीच्या पृष्ठभागापासून सुमारे १५-५० किमी उंचीवर आहे. तो सूर्याच्या बहुतांश हानिकारक अतिनील (UV) किरणांचे शोषण करतो. तपांबर (०-१३ किमी) हा सर्वात खालचा थर आहे जिथे सर्व हवामान घडते.",
      options: [
        { label: "A", textEn: "Troposphere", textMr: "तपांबर", isCorrect: false },
        { label: "B", textEn: "Mesosphere", textMr: "मध्यांबर", isCorrect: false },
        { label: "C", textEn: "Ionosphere", textMr: "आयनांबर", isCorrect: false },
        { label: "D", textEn: "Stratosphere", textMr: "स्थितांबर", isCorrect: true },
      ],
    },
    {
      textEn: "Which atmospheric layer is closest to the Earth's surface and contains all weather phenomena?",
      textMr: "पृथ्वीच्या पृष्ठभागाच्या सर्वात जवळचा व सर्व हवामान घटना समाविष्ट असलेला वातावरणीय थर कोणता?",
      explanationEn:
        "The Troposphere extends from Earth's surface to about 13 km altitude. All weather phenomena (rain, clouds, storms) occur here. Temperature decreases with altitude in this layer.",
      explanationMr:
        "तपांबर पृथ्वीच्या पृष्ठभागापासून सुमारे १३ किमी उंचीपर्यंत पसरलेला आहे. सर्व हवामान घटना (पाऊस, ढग, वादळे) येथेच घडतात. या थरात उंचीनुसार तापमान कमी होते.",
      options: [
        { label: "A", textEn: "Stratosphere", textMr: "स्थितांबर", isCorrect: false },
        { label: "B", textEn: "Mesosphere", textMr: "मध्यांबर", isCorrect: false },
        { label: "C", textEn: "Troposphere", textMr: "तपांबर", isCorrect: true },
        { label: "D", textEn: "Ionosphere", textMr: "आयनांबर", isCorrect: false },
      ],
    },
    {
      textEn: "What is 'biodiversity'?",
      textMr: "'जैवविविधता' म्हणजे काय?",
      explanationEn:
        "Biodiversity refers to the variety of all living things (plants, animals, microorganisms) in a particular area or on Earth. High biodiversity indicates a healthy ecosystem.",
      explanationMr:
        "जैवविविधता म्हणजे एखाद्या विशिष्ट प्रदेशातील किंवा संपूर्ण पृथ्वीवरील सर्व सजीवांची (वनस्पती, प्राणी, सूक्ष्मजीव) विविधता. उच्च जैवविविधता निरोगी परिसंस्था दर्शवते.",
      options: [
        { label: "A", textEn: "Variety of living things in a particular area", textMr: "एखाद्या विशिष्ट प्रदेशातील सजीवांची विविधता", isCorrect: true },
        { label: "B", textEn: "The study of birds only", textMr: "फक्त पक्ष्यांचा अभ्यास", isCorrect: false },
        { label: "C", textEn: "Total area of forests in a region", textMr: "एखाद्या प्रदेशातील एकूण जंगल क्षेत्र", isCorrect: false },
        { label: "D", textEn: "Number of endangered species in an ecosystem", textMr: "परिसंस्थेतील नामशेष होण्याच्या मार्गावरील प्रजातींची संख्या", isCorrect: false },
      ],
    },
    {
      textEn: "In a food chain, which organisms are called producers?",
      textMr: "अन्नसाखळीत कोणत्या सजीवांना 'उत्पादक' म्हणतात?",
      explanationEn:
        "Green plants are called producers because they produce food by photosynthesis using sunlight. A typical food chain is: Sun -> Plants (Producers) -> Herbivores (Primary Consumers) -> Carnivores (Secondary Consumers).",
      explanationMr:
        "हरित वनस्पतींना उत्पादक म्हणतात कारण त्या सूर्यप्रकाशाचा वापर करून प्रकाशसंश्लेषणाद्वारे अन्न तयार करतात. ठराविक अन्नसाखळी अशी असते: सूर्य → वनस्पती (उत्पादक) → तृणभक्षी (प्राथमिक भक्षक) → मांसभक्षी (द्वितीयक भक्षक).",
      options: [
        { label: "A", textEn: "Herbivores", textMr: "तृणभक्षी", isCorrect: false },
        { label: "B", textEn: "Carnivores", textMr: "मांसभक्षी", isCorrect: false },
        { label: "C", textEn: "Decomposers", textMr: "विघटक", isCorrect: false },
        { label: "D", textEn: "Green plants", textMr: "हरितवनस्पती", isCorrect: true },
      ],
    },
    {
      textEn: "A food web is best described as:",
      textMr: "अन्नजाळे (Food web) याचे सर्वोत्तम वर्णन कोणते?",
      explanationEn:
        "A food web is formed by the interlinking of many food chains in an ecosystem. It is a more realistic representation of feeding relationships because most animals eat more than one type of food.",
      explanationMr:
        "परिसंस्थेतील अनेक अन्नसाखळ्या एकमेकांशी जोडल्या गेल्याने अन्नजाळे तयार होते. बहुतेक प्राणी एकापेक्षा जास्त प्रकारचे अन्न खात असल्याने हे भक्ष्य-भक्षक संबंधांचे अधिक वास्तववादी चित्रण आहे.",
      options: [
        { label: "A", textEn: "A single chain of eating relationships", textMr: "खाण्याच्या संबंधांची एकच साखळी", isCorrect: false },
        { label: "B", textEn: "A network of interlinking food chains", textMr: "परस्परसंबंधित अन्नसाखळ्यांचे जाळे", isCorrect: true },
        { label: "C", textEn: "The study of food preservation", textMr: "अन्न साठवणुकीचा अभ्यास", isCorrect: false },
        { label: "D", textEn: "A method of food production", textMr: "अन्न उत्पादनाची पद्धत", isCorrect: false },
      ],
    },
    {
      textEn: "The minimum voting age in India was lowered to 18 years after which year?",
      textMr: "भारतात मतदानाचे किमान वय १८ वर्षे कोणत्या वर्षानंतर करण्यात आले?",
      explanationEn:
        "The voting age in India was lowered from 21 years to 18 years by the 61st Constitutional Amendment Act, 1988. This change came into effect in 1989, enabling millions of young citizens to vote.",
      explanationMr:
        "६१ व्या घटनादुरुस्ती कायदा, १९८८ द्वारे भारतातील मतदानाचे वय २१ वरून १८ वर्षे करण्यात आले. हा बदल १९८९ पासून लागू झाला, ज्यामुळे लाखो तरुण नागरिकांना मतदानाचा हक्क मिळाला.",
      options: [
        { label: "A", textEn: "1947", textMr: "१९४७", isCorrect: false },
        { label: "B", textEn: "1975", textMr: "१९७५", isCorrect: false },
        { label: "C", textEn: "1988", textMr: "१९८८", isCorrect: true },
        { label: "D", textEn: "2000", textMr: "२०००", isCorrect: false },
      ],
    },
    {
      textEn:
        "Which social reformer from Maharashtra established a school for girls and is known as the 'Mother of Indian Feminism'?",
      textMr:
        "महाराष्ट्रातील कोणत्या समाजसुधारकाने मुलींसाठी शाळा सुरू केली आणि त्या 'भारतीय स्त्रीवादाची जननी' म्हणून ओळखल्या जातात?",
      explanationEn:
        "Savitribai Phule, along with her husband Jyotirao Phule, opened the first school for girls in Pune in 1848. She is regarded as the mother of Indian feminism and a pioneering social reformer of Maharashtra.",
      explanationMr:
        "सावित्रीबाई फुले यांनी त्यांचे पती जोतीराव फुले यांच्यासह १८४८ मध्ये पुण्यात मुलींसाठी पहिली शाळा सुरू केली. त्या भारतीय स्त्रीवादाची जननी आणि महाराष्ट्रातील एक अग्रणी समाजसुधारक मानल्या जातात.",
      options: [
        { label: "A", textEn: "Fatima Sheikh", textMr: "फातिमा शेख", isCorrect: false },
        { label: "B", textEn: "Savitribai Phule", textMr: "सावित्रीबाई फुले", isCorrect: true },
        { label: "C", textEn: "Mahatma Jotirao Phule", textMr: "महात्मा जोतीराव फुले", isCorrect: false },
        { label: "D", textEn: "Maharshi Karve", textMr: "महर्षी कर्वे", isCorrect: false },
      ],
    },
    {
      textEn: "Untouchability was abolished by the Indian Constitution under which article?",
      textMr: "भारतीय राज्यघटनेतील कोणत्या कलमाखाली अस्पृश्यता नष्ट करण्यात आली?",
      explanationEn:
        "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form. The practice of untouchability is declared an offence punishable by law.",
      explanationMr:
        "भारतीय राज्यघटनेचे कलम १७ अस्पृश्यता नष्ट करते आणि तिचा कोणत्याही स्वरूपात आचरण करण्यास मनाई करते. अस्पृश्यतेचे आचरण कायद्याने शिक्षापात्र गुन्हा घोषित करण्यात आले आहे.",
      options: [
        { label: "A", textEn: "Article 14", textMr: "कलम १४", isCorrect: false },
        { label: "B", textEn: "Article 15", textMr: "कलम १५", isCorrect: false },
        { label: "C", textEn: "Article 17", textMr: "कलम १७", isCorrect: true },
        { label: "D", textEn: "Article 21", textMr: "कलम २१", isCorrect: false },
      ],
    },
    {
      textEn: "The law against magic (Jadutona) was first enacted in which state?",
      textMr: "जादूटोणाविरोधी कायदा भारतात प्रथम कोणत्या राज्यात लागू झाला?",
      explanationEn:
        "Maharashtra was the first state in India to enact a law against superstitious practices and black magic - the Maharashtra Prevention and Eradication of Human Sacrifice and other Inhuman, Evil and Aghori Practices and Black Magic Act, 2013. The reformer Dr. Narendra Dabholkar campaigned for this law.",
      explanationMr:
        "अंधश्रद्धा व काळी जादू यांसारख्या अनिष्ट प्रथांविरुद्ध कायदा करणारे महाराष्ट्र हे भारतातील पहिले राज्य ठरले — महाराष्ट्र नरबळी व इतर अमानुष, अनिष्ट व अघोरी प्रथा व जादूटोणा प्रतिबंधक कायदा, २०१३. समाजसुधारक डॉ. नरेंद्र दाभोलकर यांनी या कायद्यासाठी मोहीम चालवली.",
      options: [
        { label: "A", textEn: "Karnataka", textMr: "कर्नाटक", isCorrect: false },
        { label: "B", textEn: "Gujarat", textMr: "गुजरात", isCorrect: false },
        { label: "C", textEn: "Maharashtra", textMr: "महाराष्ट्र", isCorrect: true },
        { label: "D", textEn: "Rajasthan", textMr: "राजस्थान", isCorrect: false },
      ],
    },
    {
      textEn: "The 'Mahatma Gandhi Dispute-Free Village Mission' was launched in Maharashtra from which year?",
      textMr: "'महात्मा गांधी तंटामुक्त गाव अभियान' महाराष्ट्रात कोणत्या वर्षापासून सुरू करण्यात आले?",
      explanationEn:
        "The Mahatma Gandhi Dispute-Free Village Mission (Tanta Mukt Gaon Mohim) was launched in Maharashtra in 2007 to resolve disputes in villages through dialogue and mutual understanding. Hiware Bazaar in Ahmadnagar is a famous example of a dispute-free village.",
      explanationMr:
        "महात्मा गांधी तंटामुक्त गाव अभियान संवाद व परस्पर सामंजस्याद्वारे गावातील तंटे सोडवण्यासाठी महाराष्ट्रात २००७ मध्ये सुरू करण्यात आले. अहमदनगर जिल्ह्यातील हिवरे बाजार हे तंटामुक्त गावाचे प्रसिद्ध उदाहरण आहे.",
      options: [
        { label: "A", textEn: "2000", textMr: "२०००", isCorrect: false },
        { label: "B", textEn: "2007", textMr: "२००७", isCorrect: true },
        { label: "C", textEn: "2010", textMr: "२०१०", isCorrect: false },
        { label: "D", textEn: "2015", textMr: "२०१५", isCorrect: false },
      ],
    },
    {
      textEn: "The United Nations (UN) headquarters is located in:",
      textMr: "संयुक्त राष्ट्रांचे (UN) मुख्यालय कोठे आहे?",
      explanationEn:
        "The United Nations headquarters is located in New York City, USA. The UN was established in 1945 after World War II to maintain international peace and security. The UN bell at headquarters is made from coins of approximately 60 nations.",
      explanationMr:
        "संयुक्त राष्ट्रांचे मुख्यालय न्यूयॉर्क शहर, अमेरिका येथे आहे. दुसऱ्या महायुद्धानंतर १९४५ मध्ये आंतरराष्ट्रीय शांतता व सुरक्षा राखण्यासाठी संयुक्त राष्ट्रांची स्थापना झाली. मुख्यालयातील घंटा सुमारे ६० राष्ट्रांच्या नाण्यांपासून बनवलेली आहे.",
      options: [
        { label: "A", textEn: "London, UK", textMr: "लंडन, ब्रिटन", isCorrect: false },
        { label: "B", textEn: "Geneva, Switzerland", textMr: "जिनिव्हा, स्वित्झर्लंड", isCorrect: false },
        { label: "C", textEn: "New York, USA", textMr: "न्यूयॉर्क, अमेरिका", isCorrect: true },
        { label: "D", textEn: "Paris, France", textMr: "पॅरिस, फ्रान्स", isCorrect: false },
      ],
    },
    {
      textEn: "Under the Right to Education Act, education is compulsory for children in which age group?",
      textMr: "शिक्षण हक्क कायद्यानुसार कोणत्या वयोगटातील मुलांसाठी शिक्षण सक्तीचे आहे?",
      explanationEn:
        "The Right to Education (RTE) Act 2009 makes free and compulsory education a fundamental right for all children aged 6 to 14 years. For children with special needs, the upper age limit is 18 years.",
      explanationMr:
        "शिक्षण हक्क (RTE) कायदा २००९ ६ ते १४ वयोगटातील सर्व मुलांसाठी मोफत व सक्तीचे शिक्षण हा मूलभूत हक्क बनवतो. विशेष गरजा असलेल्या मुलांसाठी कमाल वयोमर्यादा १८ वर्षे आहे.",
      options: [
        { label: "A", textEn: "4 to 12 years", textMr: "४ ते १२ वर्षे", isCorrect: false },
        { label: "B", textEn: "5 to 15 years", textMr: "५ ते १५ वर्षे", isCorrect: false },
        { label: "C", textEn: "6 to 14 years", textMr: "६ ते १४ वर्षे", isCorrect: true },
        { label: "D", textEn: "6 to 16 years", textMr: "६ ते १६ वर्षे", isCorrect: false },
      ],
    },
    {
      textEn: "The Survey of India, the national mapping agency, has its headquarters in:",
      textMr: "सर्व्हे ऑफ इंडिया या राष्ट्रीय मानचित्रण संस्थेचे मुख्यालय कोठे आहे?",
      explanationEn:
        "The Survey of India (SOI), the oldest scientific department of the Government of India, was established in 1767 and has its headquarters in Dehradun, Uttarakhand. It is responsible for mapping and surveying the country.",
      explanationMr:
        "सर्व्हे ऑफ इंडिया (SOI), भारत सरकारचा सर्वात जुना वैज्ञानिक विभाग, १७६७ मध्ये स्थापन झाला आणि त्याचे मुख्यालय डेहराडून, उत्तराखंड येथे आहे. देशाच्या मानचित्रण व सर्वेक्षणाची जबाबदारी या संस्थेकडे आहे.",
      options: [
        { label: "A", textEn: "Mumbai, Maharashtra", textMr: "मुंबई, महाराष्ट्र", isCorrect: false },
        { label: "B", textEn: "New Delhi", textMr: "नवी दिल्ली", isCorrect: false },
        { label: "C", textEn: "Dehradun, Uttarakhand", textMr: "डेहराडून, उत्तराखंड", isCorrect: true },
        { label: "D", textEn: "Pune, Maharashtra", textMr: "पुणे, महाराष्ट्र", isCorrect: false },
      ],
    },
    {
      textEn: "Contour lines on a map join places that are:",
      textMr: "नकाशावरील उंचीरेषा (Contour lines) कोणत्या ठिकाणांना जोडतात?",
      explanationEn:
        "Contour lines (isohypses) join all points on a map that have the same altitude (height above sea level). Closely spaced contour lines indicate steep slopes; widely spaced lines indicate gentle slopes.",
      explanationMr:
        "उंचीरेषा (Isohypses) नकाशावरील समुद्रसपाटीपासून समान उंची असलेल्या सर्व ठिकाणांना जोडतात. जवळजवळ असलेल्या उंचीरेषा तीव्र उतार दर्शवतात; दूरदूर असलेल्या रेषा सौम्य उतार दर्शवतात.",
      options: [
        { label: "A", textEn: "Of the same rainfall", textMr: "समान पावसाच्या", isCorrect: false },
        { label: "B", textEn: "Of the same temperature", textMr: "समान तापमानाच्या", isCorrect: false },
        { label: "C", textEn: "Of the same height (altitude)", textMr: "समान उंचीच्या", isCorrect: true },
        { label: "D", textEn: "On the same latitude", textMr: "समान अक्षांशावरील", isCorrect: false },
      ],
    },
    {
      textEn: "Which is the largest state in India by area?",
      textMr: "क्षेत्रफळानुसार भारतातील सर्वात मोठे राज्य कोणते?",
      explanationEn:
        "Rajasthan is the largest state in India by area (342,239 sq km). The order is: 1st Rajasthan, 2nd Madhya Pradesh, 3rd Maharashtra. Maharashtra is the 3rd largest state by area.",
      explanationMr:
        "राजस्थान क्षेत्रफळानुसार भारतातील सर्वात मोठे राज्य आहे (३,४२,२३९ चौ.किमी). क्रम असा आहे: १. राजस्थान, २. मध्य प्रदेश, ३. महाराष्ट्र. महाराष्ट्र क्षेत्रफळानुसार तिसऱ्या क्रमांकाचे राज्य आहे.",
      options: [
        { label: "A", textEn: "Maharashtra", textMr: "महाराष्ट्र", isCorrect: false },
        { label: "B", textEn: "Madhya Pradesh", textMr: "मध्य प्रदेश", isCorrect: false },
        { label: "C", textEn: "Rajasthan", textMr: "राजस्थान", isCorrect: true },
        { label: "D", textEn: "Uttar Pradesh", textMr: "उत्तर प्रदेश", isCorrect: false },
      ],
    },
    {
      textEn: "India's Lakshadweep islands are located in which water body?",
      textMr: "भारताची लक्षद्वीप बेटे कोणत्या जलाशयात आहेत?",
      explanationEn:
        "Lakshadweep is a group of coral islands located in the Arabian Sea. Andaman and Nicobar Islands are located in the Bay of Bengal. Both are Union Territories of India.",
      explanationMr:
        "लक्षद्वीप हा अरबी समुद्रातील प्रवाळ बेटांचा समूह आहे. अंदमान व निकोबार बेटे बंगालच्या उपसागरात आहेत. दोन्ही भारताचे केंद्रशासित प्रदेश आहेत.",
      options: [
        { label: "A", textEn: "Bay of Bengal", textMr: "बंगालचा उपसागर", isCorrect: false },
        { label: "B", textEn: "Indian Ocean", textMr: "हिंदी महासागर", isCorrect: false },
        { label: "C", textEn: "Arabian Sea", textMr: "अरबी समुद्र", isCorrect: true },
        { label: "D", textEn: "Andaman Sea", textMr: "अंदमान समुद्र", isCorrect: false },
      ],
    },
    {
      textEn: "Which crop is Nagpur famous for, earning it the title 'Orange City'?",
      textMr: "नागपूर कोणत्या पिकासाठी प्रसिद्ध आहे, ज्यामुळे त्याला 'ऑरेंज सिटी' ही उपाधी मिळाली?",
      explanationEn:
        "Nagpur in Maharashtra is famous for its oranges and is called the 'Orange City of India'. Other notable products by region: Saffron from Kashmir, Coffee from Karnataka/Kerala, Tea from Assam and West Bengal.",
      explanationMr:
        "महाराष्ट्रातील नागपूर हे संत्र्यांसाठी प्रसिद्ध आहे आणि त्याला 'भारताचे ऑरेंज सिटी' म्हणतात. इतर प्रादेशिक वैशिष्ट्ये: काश्मीरचा केशर, कर्नाटक/केरळची कॉफी, आसाम व पश्चिम बंगालचा चहा.",
      options: [
        { label: "A", textEn: "Grapes", textMr: "द्राक्षे", isCorrect: false },
        { label: "B", textEn: "Oranges", textMr: "संत्री", isCorrect: true },
        { label: "C", textEn: "Mangoes", textMr: "आंबे", isCorrect: false },
        { label: "D", textEn: "Cotton", textMr: "कापूस", isCorrect: false },
      ],
    },
    {
      textEn: "India is described as a democratic republic. This means:",
      textMr: "भारताचे वर्णन 'लोकशाही प्रजासत्ताक' असे केले जाते. याचा अर्थ काय?",
      explanationEn:
        "India is a Sovereign, Socialist, Secular, Democratic Republic. 'Democratic' means citizens elect their representatives, and 'Republic' means the head of state (President) is elected, not hereditary. The capital is New Delhi.",
      explanationMr:
        "भारत हा सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाही प्रजासत्ताक आहे. 'लोकशाही' म्हणजे नागरिक त्यांचे प्रतिनिधी निवडतात, आणि 'प्रजासत्ताक' म्हणजे राष्ट्रप्रमुख (राष्ट्रपती) निवडून येतो, वंशपरंपरागत नसतो. राजधानी नवी दिल्ली आहे.",
      options: [
        { label: "A", textEn: "The head of state is elected and citizens elect their representatives", textMr: "राष्ट्रप्रमुख निवडून येतो आणि नागरिक त्यांचे प्रतिनिधी निवडतात", isCorrect: true },
        { label: "B", textEn: "India is ruled by a king elected by people", textMr: "भारतावर लोकांनी निवडलेला राजा राज्य करतो", isCorrect: false },
        { label: "C", textEn: "Only educated citizens can vote", textMr: "फक्त सुशिक्षित नागरिकांना मतदान करता येते", isCorrect: false },
        { label: "D", textEn: "The President has absolute powers", textMr: "राष्ट्रपतींना अनिर्बंध अधिकार असतात", isCorrect: false },
      ],
    },
    {
      textEn: "Mumbai was originally formed by the merging of how many islands?",
      textMr: "मुंबई मूळतः किती बेटे एकत्र येऊन तयार झाली?",
      explanationEn:
        "Mumbai (originally called Bombay) was formed by the merging of seven islands: Colaba, Mazagaon, Old Woman's Island (Little Colaba), Wadala, Mahim, Parel, and Matunga-Sion. These islands were gradually connected through land reclamation.",
      explanationMr:
        "मुंबई (मूळचे नाव बॉम्बे) सात बेटे एकत्र येऊन तयार झाली: कुलाबा, माझगाव, ओल्ड वुमन्स आयलंड (लिटल कुलाबा), वरळी, माहीम, परळ आणि माटुंगा-शीव. ही बेटे भूभरणीद्वारे (Land reclamation) हळूहळू जोडली गेली.",
      options: [
        { label: "A", textEn: "Five islands", textMr: "पाच बेटे", isCorrect: false },
        { label: "B", textEn: "Six islands", textMr: "सहा बेटे", isCorrect: false },
        { label: "C", textEn: "Seven islands", textMr: "सात बेटे", isCorrect: true },
        { label: "D", textEn: "Nine islands", textMr: "नऊ बेटे", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is a non-exhaustible (renewable) source of energy?",
      textMr: "खालीलपैकी कोणता ऊर्जास्रोत अक्षय्य (Renewable) आहे?",
      explanationEn:
        "Solar energy, wind energy, and water (hydel) energy are non-exhaustible (renewable) sources because they are naturally replenished. Coal, natural gas, and mineral oil are non-renewable (exhaustible) fossil fuels that will eventually run out.",
      explanationMr:
        "सौर ऊर्जा, पवन ऊर्जा आणि जल (जलविद्युत) ऊर्जा हे अक्षय्य ऊर्जास्रोत आहेत कारण ते नैसर्गिकरित्या पुन्हा भरून निघतात. कोळसा, नैसर्गिक वायू व खनिज तेल हे अक्षय नसलेले (संपणारे) जीवाश्म इंधन आहेत जे कालांतराने संपणार आहेत.",
      options: [
        { label: "A", textEn: "Coal", textMr: "कोळसा", isCorrect: false },
        { label: "B", textEn: "Natural gas", textMr: "नैसर्गिक वायू", isCorrect: false },
        { label: "C", textEn: "Mineral oil", textMr: "खनिज तेल", isCorrect: false },
        { label: "D", textEn: "Solar energy", textMr: "सौर ऊर्जा", isCorrect: true },
      ],
    },
    {
      textEn: "Cement is made from which natural substance?",
      textMr: "सिमेंट कोणत्या नैसर्गिक पदार्थापासून बनते?",
      explanationEn:
        "Cement is primarily made from limestone (calcium carbonate). Glass is made from sand (silicon dioxide). Both are important industrial products derived from natural substances.",
      explanationMr:
        "सिमेंट प्रामुख्याने चुनखडी (कॅल्शियम कार्बोनेट) पासून बनते. काच वाळू (सिलिकॉन डायऑक्साइड) पासून बनते. दोन्ही नैसर्गिक पदार्थांपासून मिळणारी महत्त्वाची औद्योगिक उत्पादने आहेत.",
      options: [
        { label: "A", textEn: "Granite", textMr: "ग्रॅनाइट", isCorrect: false },
        { label: "B", textEn: "Sand", textMr: "वाळू", isCorrect: false },
        { label: "C", textEn: "Limestone", textMr: "चुनखडी", isCorrect: true },
        { label: "D", textEn: "Clay", textMr: "माती", isCorrect: false },
      ],
    },
    {
      textEn:
        "The Green Revolution in India, which led to significant increase in food grain production, is credited to:",
      textMr: "भारतातील हरित क्रांतीचे श्रेय कोणाला दिले जाते?",
      explanationEn:
        "Dr. M.S. Swaminathan is known as the 'Father of Green Revolution in India'. He introduced high-yielding varieties of wheat and rice in the 1960s. Dr. Norman Borlaug is credited for the global Green Revolution.",
      explanationMr:
        "डॉ. एम.एस. स्वामिनाथन यांना 'भारतीय हरित क्रांतीचे जनक' म्हटले जाते. त्यांनी १९६० च्या दशकात गहू व भाताच्या उच्च उत्पादन देणाऱ्या जाती सादर केल्या. डॉ. नॉर्मन बोरलॉग यांना जागतिक हरित क्रांतीचे श्रेय दिले जाते.",
      options: [
        { label: "A", textEn: "Dr. A.P.J. Abdul Kalam", textMr: "डॉ. ए.पी.जे. अब्दुल कलाम", isCorrect: false },
        { label: "B", textEn: "Dr. M.S. Swaminathan", textMr: "डॉ. एम.एस. स्वामिनाथन", isCorrect: true },
        { label: "C", textEn: "Dr. Norman Borlaug", textMr: "डॉ. नॉर्मन बोरलॉग", isCorrect: false },
        { label: "D", textEn: "Dr. Verghese Kurien", textMr: "डॉ. वर्गीस कुरियन", isCorrect: false },
      ],
    },
    {
      textEn: "Kharif crops are sown in which season?",
      textMr: "खरीप पिके कोणत्या हंगामात पेरली जातात?",
      explanationEn:
        "Kharif crops are sown at the beginning of the monsoon season (June) and harvested in October. Examples: Rice, Cotton, Maize, Groundnut, Sugarcane. Rabi crops are sown in October-November and harvested in March-April.",
      explanationMr:
        "खरीप पिके पावसाळ्याच्या सुरुवातीला (जून) पेरली जातात व ऑक्टोबरमध्ये काढली जातात. उदा: भात, कापूस, मका, भुईमूग, ऊस. रब्बी पिके ऑक्टोबर-नोव्हेंबरमध्ये पेरली जातात व मार्च-एप्रिलमध्ये काढली जातात.",
      options: [
        { label: "A", textEn: "October to March", textMr: "ऑक्टोबर ते मार्च", isCorrect: false },
        { label: "B", textEn: "January to April", textMr: "जानेवारी ते एप्रिल", isCorrect: false },
        { label: "C", textEn: "June to October", textMr: "जून ते ऑक्टोबर", isCorrect: true },
        { label: "D", textEn: "February to May", textMr: "फेब्रुवारी ते मे", isCorrect: false },
      ],
    },
    {
      textEn: "The National Food Security Act was enacted in India in which year?",
      textMr: "राष्ट्रीय अन्न सुरक्षा कायदा भारतात कोणत्या वर्षी लागू झाला?",
      explanationEn:
        "The National Food Security Act, 2013 (also called the Right to Food Act) was enacted to provide subsidized food grains to approximately two-thirds of India's population. It covers 75% of rural and 50% of urban populations.",
      explanationMr:
        "राष्ट्रीय अन्न सुरक्षा कायदा, २०१३ (अन्न हक्क कायदा असेही म्हणतात) भारताच्या सुमारे दोन-तृतीयांश लोकसंख्येला अनुदानित अन्नधान्य पुरवण्यासाठी लागू करण्यात आला. तो ग्रामीण भागातील ७५% व शहरी भागातील ५०% लोकसंख्येला समाविष्ट करतो.",
      options: [
        { label: "A", textEn: "2005", textMr: "२००५", isCorrect: false },
        { label: "B", textEn: "2010", textMr: "२०१०", isCorrect: false },
        { label: "C", textEn: "2013", textMr: "२०१३", isCorrect: true },
        { label: "D", textEn: "2016", textMr: "२०१६", isCorrect: false },
      ],
    },
    {
      textEn: "Which irrigation method is most water-efficient and directly delivers water to plant roots?",
      textMr: "कोणती सिंचन पद्धत सर्वात जास्त पाणी-कार्यक्षम असून थेट झाडांच्या मुळांपर्यंत पाणी पोहोचवते?",
      explanationEn:
        "Drip irrigation (also called trickle irrigation) delivers water directly to the roots of plants through a network of tubes, drippers, and emitters. It is the most water-efficient method, reducing water wastage significantly. Maharashtra promotes drip irrigation for sugarcane and fruit crops.",
      explanationMr:
        "ठिबक सिंचन (Trickle irrigation असेही म्हणतात) नळ्या, ड्रीपर व इमिटर यांच्या जाळ्याद्वारे थेट झाडांच्या मुळांपर्यंत पाणी पोहोचवते. ही सर्वात पाणी-कार्यक्षम पद्धत आहे, ज्यामुळे पाण्याचा अपव्यय मोठ्या प्रमाणात कमी होतो. महाराष्ट्र ऊस व फळपिकांसाठी ठिबक सिंचनाला प्रोत्साहन देतो.",
      options: [
        { label: "A", textEn: "Flood irrigation", textMr: "पूर सिंचन", isCorrect: false },
        { label: "B", textEn: "Canal irrigation", textMr: "कालवा सिंचन", isCorrect: false },
        { label: "C", textEn: "Drip irrigation", textMr: "ठिबक सिंचन", isCorrect: true },
        { label: "D", textEn: "Sprinkler irrigation", textMr: "तुषार सिंचन", isCorrect: false },
      ],
    },
    {
      textEn: "Food spoils mainly due to the action of:",
      textMr: "अन्न मुख्यतः कशामुळे खराब होते?",
      explanationEn:
        "Food spoils primarily due to the action of micro-organisms, particularly bacteria and fungi, which break down food substances. Heat, moisture, and air facilitate the growth of these micro-organisms.",
      explanationMr:
        "अन्न प्रामुख्याने सूक्ष्मजीवांच्या, विशेषतः जीवाणू व बुरशी यांच्या क्रियेमुळे खराब होते, जे अन्नपदार्थांचे विघटन करतात. उष्णता, आर्द्रता व हवा या सूक्ष्मजीवांच्या वाढीस मदत करतात.",
      options: [
        { label: "A", textEn: "Sunlight and heat only", textMr: "फक्त सूर्यप्रकाश व उष्णता", isCorrect: false },
        { label: "B", textEn: "Micro-organisms like fungi and bacteria", textMr: "बुरशी व जीवाणूंसारखे सूक्ष्मजीव", isCorrect: true },
        { label: "C", textEn: "Change in atmospheric pressure", textMr: "वातावरणीय दाबातील बदल", isCorrect: false },
        { label: "D", textEn: "Increase in oxygen levels", textMr: "ऑक्सिजन पातळीतील वाढ", isCorrect: false },
      ],
    },
    {
      textEn: "Which chemical substance is added to water for purification at water treatment plants as the final step?",
      textMr: "जलशुद्धीकरण केंद्रांवर पाणी शुद्धीकरणाच्या अंतिम टप्प्यात कोणता रासायनिक पदार्थ मिसळला जातो?",
      explanationEn:
        "The water purification process involves: (1) Settling - alum is added to settle impurities, (2) Oxygenation - spraying water for aeration, (3) Filtration - through sand/gravel filters, (4) Chlorination - chlorine is added to kill bacteria. Chlorination is the final step.",
      explanationMr:
        "पाणी शुद्धीकरण प्रक्रियेत पुढील टप्पे असतात: (१) निवळणे – अशुद्धी स्थिर करण्यासाठी तुरटी मिसळली जाते, (२) वायुमिश्रण – हवा मिसळण्यासाठी पाणी फवारले जाते, (३) गाळणे – वाळू/खडीच्या गाळण्यांतून, (४) क्लोरीनीकरण – जीवाणू नष्ट करण्यासाठी क्लोरीन मिसळले जाते. क्लोरीनीकरण हा अंतिम टप्पा आहे.",
      options: [
        { label: "A", textEn: "Alum", textMr: "तुरटी", isCorrect: false },
        { label: "B", textEn: "Sand", textMr: "वाळू", isCorrect: false },
        { label: "C", textEn: "Chlorine", textMr: "क्लोरीन", isCorrect: true },
        { label: "D", textEn: "Iodine", textMr: "आयोडीन", isCorrect: false },
      ],
    },
    {
      textEn: "Which natural substances are commonly used as food preservatives?",
      textMr: "अन्न टिकवण्यासाठी सामान्यतः कोणते नैसर्गिक पदार्थ वापरले जातात?",
      explanationEn:
        "Natural food preservatives include sugar (in jams), salt (in pickles), oil (in pickles), vinegar (in chutneys), and spices like asafoetida and mustard. These create conditions unfavorable for microbial growth.",
      explanationMr:
        "नैसर्गिक अन्न परिरक्षकांमध्ये साखर (जॅममध्ये), मीठ (लोणच्यात), तेल (लोणच्यात), व्हिनेगर (चटणीत) आणि हिंग व मोहरीसारखे मसाले यांचा समावेश होतो. हे सूक्ष्मजीवांच्या वाढीसाठी प्रतिकूल परिस्थिती निर्माण करतात.",
      options: [
        { label: "A", textEn: "Boric acid and formaldehyde", textMr: "बोरिक आम्ल व फॉर्मल्डिहाइड", isCorrect: false },
        { label: "B", textEn: "Sugar, salt, oil, and vinegar", textMr: "साखर, मीठ, तेल व व्हिनेगर", isCorrect: true },
        { label: "C", textEn: "Chlorine and bleaching powder", textMr: "क्लोरीन व ब्लीचिंग पावडर", isCorrect: false },
        { label: "D", textEn: "Sodium benzoate only", textMr: "फक्त सोडियम बेन्झोएट", isCorrect: false },
      ],
    },
    {
      textEn: "Which air pollutants are emitted by vehicles using petrol and diesel?",
      textMr: "पेट्रोल व डिझेल वापरणाऱ्या वाहनांमधून कोणते वायू प्रदूषक बाहेर पडतात?",
      explanationEn:
        "Vehicles emit harmful pollutants including carbon monoxide (CO), nitrogen dioxide (NO2), sulphur dioxide (SO2), and particles of carbon and lead. These cause respiratory diseases, smog, and acid rain.",
      explanationMr:
        "वाहनांमधून कार्बन मोनॉक्साइड (CO), नायट्रोजन डायऑक्साइड (NO₂), सल्फर डायऑक्साइड (SO₂) आणि कार्बन व शिशाचे कण यांसारखे हानिकारक प्रदूषक बाहेर पडतात. यामुळे श्वसनाचे आजार, धुके व आम्लवर्षा होते.",
      options: [
        { label: "A", textEn: "Oxygen and Nitrogen only", textMr: "फक्त ऑक्सिजन व नायट्रोजन", isCorrect: false },
        { label: "B", textEn: "Carbon monoxide, nitrogen dioxide, sulphur dioxide, and carbon/lead particles", textMr: "कार्बन मोनॉक्साइड, नायट्रोजन डायऑक्साइड, सल्फर डायऑक्साइड आणि कार्बन/शिशाचे कण", isCorrect: true },
        { label: "C", textEn: "Carbon dioxide and water vapour only", textMr: "फक्त कार्बन डायऑक्साइड व पाण्याची वाफ", isCorrect: false },
        { label: "D", textEn: "Ozone and methane", textMr: "ओझोन व मिथेन", isCorrect: false },
      ],
    },
    {
      textEn: "Using CNG or LPG as vehicle fuel instead of petrol or diesel is recommended because:",
      textMr: "पेट्रोल किंवा डिझेलऐवजी CNG किंवा LPG वाहन इंधन म्हणून वापरण्याची शिफारस का केली जाते?",
      explanationEn:
        "CNG (Compressed Natural Gas) and LPG (Liquefied Petroleum Gas) burn more cleanly than petrol or diesel, producing significantly less carbon monoxide, particulate matter, and other harmful emissions. This directly reduces air pollution.",
      explanationMr:
        "सीएनजी (कॉम्प्रेस्ड नॅचरल गॅस) व एलपीजी (लिक्विफाइड पेट्रोलियम गॅस) पेट्रोल किंवा डिझेलपेक्षा अधिक स्वच्छपणे जळतात, त्यामुळे कार्बन मोनॉक्साइड, सूक्ष्मकण व इतर हानिकारक उत्सर्जन लक्षणीयरीत्या कमी होते. यामुळे थेट वायू प्रदूषण कमी होते.",
      options: [
        { label: "A", textEn: "It is cheaper and widely available", textMr: "ते स्वस्त व सहज उपलब्ध आहे", isCorrect: false },
        { label: "B", textEn: "It produces less air pollution", textMr: "त्यामुळे कमी वायू प्रदूषण होते", isCorrect: true },
        { label: "C", textEn: "It gives better mileage", textMr: "त्यामुळे चांगले मायलेज मिळते", isCorrect: false },
        { label: "D", textEn: "It is easier to store", textMr: "ते साठवणे सोपे आहे", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is the most environment-friendly mode of transport for short distances?",
      textMr: "कमी अंतरासाठी कोणते वाहतूक साधन सर्वात पर्यावरणस्नेही आहे?",
      explanationEn:
        "The bicycle is the most environment-friendly transport for short distances. It produces zero pollution, requires no fuel, improves health, reduces traffic congestion, and is inexpensive. Using public transport is the next best option for longer distances.",
      explanationMr:
        "कमी अंतरासाठी सायकल हे सर्वात पर्यावरणस्नेही वाहतूक साधन आहे. यातून शून्य प्रदूषण होते, इंधनाची गरज नसते, आरोग्य सुधारते, वाहतूक कोंडी कमी होते आणि ते स्वस्त असते. जास्त अंतरासाठी सार्वजनिक वाहतूक हा पुढील उत्तम पर्याय आहे.",
      options: [
        { label: "A", textEn: "Car", textMr: "कार", isCorrect: false },
        { label: "B", textEn: "Motorcycle", textMr: "मोटरसायकल", isCorrect: false },
        { label: "C", textEn: "Bus", textMr: "बस", isCorrect: false },
        { label: "D", textEn: "Bicycle", textMr: "सायकल", isCorrect: true },
      ],
    },
    {
      textEn: "INSAT stands for:",
      textMr: "INSAT चा विस्तार काय आहे?",
      explanationEn:
        "INSAT stands for Indian National Satellites. These are multipurpose geostationary satellites operated by ISRO for telecommunications, broadcasting, meteorology, and search-and-rescue operations in India.",
      explanationMr:
        "INSAT म्हणजे भारतीय राष्ट्रीय उपग्रह (Indian National Satellites). हे इस्रोद्वारे संचालित बहुउद्देशीय भूस्थिर उपग्रह असून दूरसंचार, प्रसारण, हवामानशास्त्र आणि शोध-बचाव कार्यासाठी वापरले जातात.",
      options: [
        { label: "A", textEn: "Indian National Security and Telecommunications", textMr: "भारतीय राष्ट्रीय सुरक्षा व दूरसंचार", isCorrect: false },
        { label: "B", textEn: "Indian National Satellites", textMr: "भारतीय राष्ट्रीय उपग्रह", isCorrect: true },
        { label: "C", textEn: "International Navigation Satellite System", textMr: "आंतरराष्ट्रीय नेव्हिगेशन उपग्रह प्रणाली", isCorrect: false },
        { label: "D", textEn: "Indian Network of Science and Technology", textMr: "भारतीय विज्ञान व तंत्रज्ञान नेटवर्क", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is an advantage of mass media (TV, radio, newspapers)?",
      textMr: "जनसंवाद माध्यमांचा (टीव्ही, रेडिओ, वृत्तपत्रे) फायदा काय आहे?",
      explanationEn:
        "Advantages of mass media include: spreading awareness about social issues, providing entertainment, facilitating education, reporting news, helping in disaster communication, and creating civic awareness. However, it can also spread misinformation (disadvantage).",
      explanationMr:
        "जनसंवाद माध्यमांचे फायदे: सामाजिक विषयांबद्दल जागरूकता पसरवणे, मनोरंजन देणे, शिक्षणास मदत करणे, बातम्या देणे, आपत्ती संवादास मदत करणे, आणि नागरी जाणीव निर्माण करणे. तथापि, ती चुकीची माहितीही पसरवू शकतात (तोटा).",
      options: [
        { label: "A", textEn: "It always shows accurate information", textMr: "ते नेहमी अचूक माहिती दाखवतात", isCorrect: false },
        { label: "B", textEn: "It creates social awareness and provides entertainment and education", textMr: "ते सामाजिक जागरूकता निर्माण करतात व मनोरंजन आणि शिक्षण देतात", isCorrect: true },
        { label: "C", textEn: "It replaces the need for schools", textMr: "ते शाळांची गरज संपवतात", isCorrect: false },
        { label: "D", textEn: "It is available only to urban people", textMr: "ते फक्त शहरी लोकांसाठी उपलब्ध असतात", isCorrect: false },
      ],
    },
    {
      textEn: "India receives rainfall mainly during how many months of the year?",
      textMr: "भारतात मुख्यतः वर्षातील किती महिने पाऊस पडतो?",
      explanationEn:
        "India receives most of its rainfall during approximately 4 months of the year (June to September) due to the Southwest Monsoon. This makes water management and storage critical for the remaining 8 dry months.",
      explanationMr:
        "नैऋत्य मान्सूनमुळे भारतात वर्षातील सुमारे ४ महिने (जून ते सप्टेंबर) मुख्यतः पाऊस पडतो. त्यामुळे उरलेल्या ८ कोरड्या महिन्यांसाठी पाणी व्यवस्थापन व साठवण अत्यंत महत्त्वाचे ठरते.",
      options: [
        { label: "A", textEn: "2 months", textMr: "२ महिने", isCorrect: false },
        { label: "B", textEn: "4 months", textMr: "४ महिने", isCorrect: true },
        { label: "C", textEn: "6 months", textMr: "६ महिने", isCorrect: false },
        { label: "D", textEn: "8 months", textMr: "८ महिने", isCorrect: false },
      ],
    },
    {
      textEn: "Continuous Contour Trenches (CCT) are used for:",
      textMr: "सलग समपातळी चर (CCT) कशासाठी वापरले जातात?",
      explanationEn:
        "Continuous Contour Trenches (CCT) are trenches dug along the contour lines of a hill slope to stop rainwater runoff and allow it to seep into the ground. This helps in recharging groundwater and is a key water conservation technique used in Maharashtra.",
      explanationMr:
        "सलग समपातळी चर (CCT) हे डोंगर उतारावरील समपातळी रेषांवर खोदलेले चर असतात, जे पावसाच्या वाहत्या पाण्याला अडवून जमिनीत मुरवण्यास मदत करतात. यामुळे भूजल पुनर्भरण होते व महाराष्ट्रात हे एक महत्त्वाचे जलसंधारण तंत्र आहे.",
      options: [
        { label: "A", textEn: "Dividing agricultural fields", textMr: "शेतजमीन विभागण्यासाठी", isCorrect: false },
        { label: "B", textEn: "Stopping and storing rainwater (water management)", textMr: "पावसाचे पाणी अडवून साठवण्यासाठी (जलव्यवस्थापन)", isCorrect: true },
        { label: "C", textEn: "Building roads in hilly areas", textMr: "डोंगराळ भागात रस्ते बांधण्यासाठी", isCorrect: false },
        { label: "D", textEn: "Draining excess water from fields", textMr: "शेतातील अतिरिक्त पाणी काढून टाकण्यासाठी", isCorrect: false },
      ],
    },
    {
      textEn: "What is the first step in the water purification process at a water-works?",
      textMr: "जलशुद्धीकरण केंद्रावर पाणी शुद्धीकरण प्रक्रियेतील पहिली पायरी कोणती?",
      explanationEn:
        "The water purification sequence is: (1) Settling - alum (fitkari) is added to water; it attracts fine particles and makes them settle. (2) Oxygenation - water is sprayed to add oxygen. (3) Filtration - through sand beds. (4) Chlorination - to kill germs.",
      explanationMr:
        "पाणी शुद्धीकरणाचा क्रम असा आहे: (१) निवळणे – पाण्यात तुरटी (फिटकरी) मिसळली जाते; ती सूक्ष्म कण आकर्षित करून तळाशी बसवते. (२) वायुमिश्रण – पाणी फवारून त्यात ऑक्सिजन मिसळला जातो. (३) गाळणे – वाळूच्या थरांतून. (४) क्लोरीनीकरण – जंतू नष्ट करण्यासाठी. तुरटी ही पहिली पायरी आहे.",
      options: [
        { label: "A", textEn: "Chlorination", textMr: "क्लोरीनीकरण", isCorrect: false },
        { label: "B", textEn: "Filtration", textMr: "गाळणे", isCorrect: false },
        { label: "C", textEn: "Oxygenation", textMr: "वायुमिश्रण", isCorrect: false },
        { label: "D", textEn: "Settling with alum", textMr: "तुरटीने निवळणे", isCorrect: true },
      ],
    },
    {
      textEn: "The famous Paithani saree of Maharashtra is traditionally woven in which town(s)?",
      textMr: "महाराष्ट्रातील प्रसिद्ध पैठणी साडी पारंपरिकपणे कोणत्या गावात/शहरात विणली जाते?",
      explanationEn:
        "The Paithani saree, known for its distinctive peacock-eye and lotus border design woven in silk with gold/silver zari thread, is traditionally made in Paithan (Aurangabad district) and Yeola. It has a GI (Geographical Indication) tag.",
      explanationMr:
        "मोरपंखी डोळा व कमळाच्या नक्षीच्या वैशिष्ट्यपूर्ण डिझाइनसह रेशमी वस्त्रात सोन्या-चांदीच्या जरीने विणलेली पैठणी साडी पारंपरिकपणे पैठण (औरंगाबाद जिल्हा) व येवला येथे बनवली जाते. तिला भौगोलिक मानांकन (GI Tag) मिळाले आहे.",
      options: [
        { label: "A", textEn: "Nasik and Pune", textMr: "नाशिक व पुणे", isCorrect: false },
        { label: "B", textEn: "Paithan and Yeola", textMr: "पैठण व येवला", isCorrect: true },
        { label: "C", textEn: "Kolhapur and Aurangabad", textMr: "कोल्हापूर व औरंगाबाद", isCorrect: false },
        { label: "D", textEn: "Ichalkaranji and Solapur", textMr: "इचलकरंजी व सोलापूर", isCorrect: false },
      ],
    },
    {
      textEn: "Himroo shawls are a traditional textile associated with which city of Maharashtra?",
      textMr: "हिमरू शाली महाराष्ट्रातील कोणत्या शहराशी संबंधित पारंपरिक वस्त्रोद्योग आहे?",
      explanationEn:
        "Himroo shawls are a traditional textile from Aurangabad (now Chhatrapati Sambhajinagar), Maharashtra. They are made from a blend of cotton, silk, and sometimes wool, featuring intricate patterns. They have Mughal-era origins.",
      explanationMr:
        "हिमरू शाली महाराष्ट्रातील औरंगाबाद (आताचे छत्रपती संभाजीनगर) येथील पारंपरिक वस्त्र आहे. त्या सूती, रेशीम व कधीकधी लोकर यांच्या मिश्रणापासून बनवलेल्या असून त्यावर बारीक नक्षीकाम असते. यांचे मूळ मुघलकालीन आहे.",
      options: [
        { label: "A", textEn: "Nasik", textMr: "नाशिक", isCorrect: false },
        { label: "B", textEn: "Pune", textMr: "पुणे", isCorrect: false },
        { label: "C", textEn: "Aurangabad", textMr: "औरंगाबाद", isCorrect: true },
        { label: "D", textEn: "Nagpur", textMr: "नागपूर", isCorrect: false },
      ],
    },
    {
      textEn: "Which animal in India is considered extinct?",
      textMr: "भारतातील कोणता प्राणी नामशेष झाला असे मानले जाते?",
      explanationEn:
        "The Indian Cheetah (Acinonyx jubatus venaticus) became extinct in India around 1947-1952 due to hunting and habitat loss. However, African cheetahs were reintroduced to India at Kuno National Park, Madhya Pradesh in 2022 (Project Cheetah).",
      explanationMr:
        "भारतीय चित्ता (Acinonyx jubatus venaticus) शिकार व अधिवास नष्ट झाल्यामुळे सुमारे १९४७-१९५२ दरम्यान भारतातून नामशेष झाला. मात्र २०२२ मध्ये मध्य प्रदेशातील कुनो राष्ट्रीय उद्यानात आफ्रिकन चित्ते पुन्हा आणण्यात आले (प्रोजेक्ट चित्ता).",
      options: [
        { label: "A", textEn: "Bengal Tiger", textMr: "बंगाल वाघ", isCorrect: false },
        { label: "B", textEn: "Snow Leopard", textMr: "हिमबिबट्या", isCorrect: false },
        { label: "C", textEn: "Indian Cheetah", textMr: "भारतीय चित्ता", isCorrect: true },
        { label: "D", textEn: "Asiatic Lion", textMr: "आशियाई सिंह", isCorrect: false },
      ],
    },
    {
      textEn: "Radhanagari Wildlife Sanctuary in Maharashtra is famous for the conservation of:",
      textMr: "महाराष्ट्रातील राधानगरी वन्यजीव अभयारण्य कशाच्या संवर्धनासाठी प्रसिद्ध आहे?",
      explanationEn:
        "Radhanagari Wildlife Sanctuary in Kolhapur district is famous for the Indian Gaur (bison). It is also called the 'Dajipurchi Bison Sanctuary'. Nannaj (Solapur) sanctuary is famous for the Great Indian Bustard (Maldhok).",
      explanationMr:
        "कोल्हापूर जिल्ह्यातील राधानगरी वन्यजीव अभयारण्य भारतीय गव्यासाठी (बायसन) प्रसिद्ध आहे. त्याला 'दाजीपूरची गवा अभयारण्य' असेही म्हणतात. नान्नज (सोलापूर) अभयारण्य माळढोक पक्ष्यासाठी प्रसिद्ध आहे.",
      options: [
        { label: "A", textEn: "Tigers", textMr: "वाघ", isCorrect: false },
        { label: "B", textEn: "Bisons (Indian Gaur)", textMr: "गवा (Indian Gaur)", isCorrect: true },
        { label: "C", textEn: "Flamingos", textMr: "रोहित पक्षी", isCorrect: false },
        { label: "D", textEn: "Peacocks", textMr: "मोर", isCorrect: false },
      ],
    },
    {
      textEn: "The Great Indian Bustard (Maldhok/Huma) is protected in which Maharashtra sanctuary?",
      textMr: "माळढोक (हुमा) पक्षी महाराष्ट्रातील कोणत्या अभयारण्यात संरक्षित आहे?",
      explanationEn:
        "Nannaj Wildlife Sanctuary in Solapur district, Maharashtra, is India's most important habitat for the Great Indian Bustard (Ardeotis nigriceps), locally called Maldhok or Huma. It is critically endangered.",
      explanationMr:
        "सोलापूर जिल्ह्यातील नान्नज वन्यजीव अभयारण्य हे माळढोक पक्ष्याचे (Ardeotis nigriceps), ज्याला स्थानिक भाषेत माळढोक किंवा हुमा म्हणतात, भारतातील सर्वात महत्त्वाचे अधिवासस्थान आहे. हा पक्षी अतिशय दुर्मिळ (Critically Endangered) आहे.",
      options: [
        { label: "A", textEn: "Tadoba Tiger Reserve", textMr: "ताडोबा व्याघ्र प्रकल्प", isCorrect: false },
        { label: "B", textEn: "Radhanagari", textMr: "राधानगरी", isCorrect: false },
        { label: "C", textEn: "Nannaj Bustard Sanctuary (Solapur)", textMr: "नान्नज माळढोक अभयारण्य (सोलापूर)", isCorrect: true },
        { label: "D", textEn: "Melghat", textMr: "मेळघाट", isCorrect: false },
      ],
    },
    {
      textEn: "Migratory flamingos that come to Maharashtra's Mayani lake (Satara) migrate from:",
      textMr: "महाराष्ट्रातील सातारा जिल्ह्यातील मायणी तलावावर येणारे स्थलांतरित रोहित पक्षी कोठून येतात?",
      explanationEn:
        "Flamingos that visit Mayani lake in Satara district (and Mumbai's Thane Creek) migrate from Siberia (Russia) during winter months. This is an example of bird migration - birds travel thousands of kilometers to warmer regions.",
      explanationMr:
        "सातारा जिल्ह्यातील मायणी तलावावर (आणि मुंबईतील ठाणे खाडीवर) येणारे रोहित पक्षी हिवाळ्यात सायबेरिया (रशिया) येथून स्थलांतर करून येतात. हे पक्षी स्थलांतराचे उदाहरण आहे — पक्षी उबदार प्रदेशांकडे हजारो किलोमीटरचा प्रवास करतात.",
      options: [
        { label: "A", textEn: "Africa", textMr: "आफ्रिका", isCorrect: false },
        { label: "B", textEn: "Australia", textMr: "ऑस्ट्रेलिया", isCorrect: false },
        { label: "C", textEn: "Siberia (Russia)", textMr: "सायबेरिया (रशिया)", isCorrect: true },
        { label: "D", textEn: "South America", textMr: "दक्षिण अमेरिका", isCorrect: false },
      ],
    },
    {
      textEn: "Which nutrient is identified by turning blue-black when tested with iodine solution?",
      textMr: "आयोडीन द्रावणाची चाचणी केल्यावर निळसर-काळा रंग येणारे पोषक तत्त्व कोणते?",
      explanationEn:
        "Starch, a type of carbohydrate, turns blue-black when iodine solution is added. This is a standard test for identifying starch in food samples. Starch is found in rice, wheat, potatoes, and other staple foods.",
      explanationMr:
        "पिष्ट (स्टार्च), जो एक प्रकारचा कर्बोदक आहे, आयोडीन द्रावण टाकल्यावर निळसर-काळा होतो. अन्नपदार्थांमध्ये पिष्ट ओळखण्यासाठी ही मानक चाचणी आहे. तांदूळ, गहू, बटाटे यांसारख्या मुख्य अन्नपदार्थांत पिष्ट आढळते.",
      options: [
        { label: "A", textEn: "Fats", textMr: "स्निग्ध पदार्थ", isCorrect: false },
        { label: "B", textEn: "Proteins", textMr: "प्रथिने", isCorrect: false },
        { label: "C", textEn: "Vitamins", textMr: "जीवनसत्त्वे", isCorrect: false },
        { label: "D", textEn: "Starch (Carbohydrates)", textMr: "पिष्टमय पदार्थ (कर्बोदके)", isCorrect: true },
      ],
    },
    {
      textEn: "Deficiency of which vitamin leads to night-blindness?",
      textMr: "कोणत्या जीवनसत्त्वाच्या कमतरतेमुळे रातांधळेपणा होतो?",
      explanationEn:
        "Vitamin A deficiency causes night-blindness (inability to see in dim light) and can eventually lead to complete blindness. Vitamin A is found in carrots, leafy vegetables, eggs, and dairy products.",
      explanationMr:
        "जीवनसत्त्व अ च्या कमतरतेमुळे रातांधळेपणा (मंद प्रकाशात दिसू न शकणे) होतो व यामुळे शेवटी पूर्ण अंधत्वही येऊ शकते. गाजर, हिरव्या पालेभाज्या, अंडी व दुग्धजन्य पदार्थांत जीवनसत्त्व अ आढळते.",
      options: [
        { label: "A", textEn: "Vitamin C", textMr: "जीवनसत्त्व क", isCorrect: false },
        { label: "B", textEn: "Vitamin D", textMr: "जीवनसत्त्व ड", isCorrect: false },
        { label: "C", textEn: "Vitamin A", textMr: "जीवनसत्त्व अ", isCorrect: true },
        { label: "D", textEn: "Vitamin B12", textMr: "जीवनसत्त्व ब१२", isCorrect: false },
      ],
    },
    {
      textEn: "Proteins are called the 'building blocks of the body' because:",
      textMr: "प्रथिनांना 'शरीराचे बांधकाम साहित्य' का म्हणतात?",
      explanationEn:
        "Proteins are essential for the growth, repair, and maintenance of body tissues, muscles, and organs. They are made of amino acids. Sources include: daals, pulses, groundnuts, milk products, eggs, and meat.",
      explanationMr:
        "प्रथिने शरीराच्या ऊती, स्नायू व अवयवांची वाढ, दुरुस्ती व देखभाल यासाठी आवश्यक असतात. ती अमिनो आम्लांपासून बनलेली असतात. स्रोत: डाळी, कडधान्ये, भुईमूग, दुग्धजन्य पदार्थ, अंडी व मांस.",
      options: [
        { label: "A", textEn: "They provide quick energy", textMr: "ते त्वरित ऊर्जा देतात", isCorrect: false },
        { label: "B", textEn: "They are used for growth and repair of body tissues", textMr: "ती शरीराच्या पेशी व ऊतींच्या वाढ व दुरुस्तीसाठी वापरली जातात", isCorrect: true },
        { label: "C", textEn: "They regulate body temperature", textMr: "ती शरीराचे तापमान नियंत्रित करतात", isCorrect: false },
        { label: "D", textEn: "They absorb vitamins from food", textMr: "ती अन्नातून जीवनसत्त्वे शोषून घेतात", isCorrect: false },
      ],
    },
    {
      textEn: "Iron deficiency in the human body leads to:",
      textMr: "मानवी शरीरात लोहाच्या कमतरतेमुळे काय होते?",
      explanationEn:
        "Iron deficiency causes anaemia, a condition where the blood lacks sufficient healthy red blood cells to carry oxygen. Symptoms include fatigue, weakness, and pale skin. Iron-rich foods include green leafy vegetables, jaggery, pulses, and meat.",
      explanationMr:
        "लोहाच्या कमतरतेमुळे पंडुरोग (अॅनिमिया) होतो, ज्यात रक्तात ऑक्सिजन वाहून नेण्यासाठी पुरेशा निरोगी लाल रक्तपेशी नसतात. लक्षणे: थकवा, अशक्तपणा व फिकट त्वचा. लोहयुक्त अन्न: हिरव्या पालेभाज्या, गूळ, कडधान्ये व मांस.",
      options: [
        { label: "A", textEn: "Night blindness", textMr: "रातांधळेपणा", isCorrect: false },
        { label: "B", textEn: "Rickets", textMr: "मुडदूस", isCorrect: false },
        { label: "C", textEn: "Anaemia", textMr: "पंडुरोग (अॅनिमिया)", isCorrect: true },
        { label: "D", textEn: "Scurvy", textMr: "स्कर्व्ही", isCorrect: false },
      ],
    },
    {
      textEn: "Gas exchange in the lungs takes place in tiny air sacs called:",
      textMr: "फुफ्फुसांतील वायू विनिमय कोणत्या सूक्ष्म हवेच्या पिशव्यांमध्ये होतो?",
      explanationEn:
        "Alveoli are tiny, balloon-like air sacs at the ends of the bronchioles in the lungs. Oxygen from inhaled air passes into the blood, and carbon dioxide from the blood passes into the alveoli to be exhaled. This is called gas exchange.",
      explanationMr:
        "वायुकोश (Alveoli) हे फुफ्फुसातील श्वासवाहिन्यांच्या टोकाशी असलेले फुग्यासारखे सूक्ष्म हवेचे कोश आहेत. श्वासाद्वारे आत घेतलेल्या हवेतील ऑक्सिजन रक्तात जातो व रक्तातील कार्बन डायऑक्साइड वायुकोशांत येऊन बाहेर सोडला जातो. यालाच वायू विनिमय म्हणतात.",
      options: [
        { label: "A", textEn: "Bronchi", textMr: "श्वासनलिका शाखा", isCorrect: false },
        { label: "B", textEn: "Trachea", textMr: "श्वासनलिका", isCorrect: false },
        { label: "C", textEn: "Alveoli", textMr: "वायुकोश (Alveoli)", isCorrect: true },
        { label: "D", textEn: "Diaphragm", textMr: "पडदा (डायाफ्राम)", isCorrect: false },
      ],
    },
    {
      textEn: "The small intestine in the human digestive system is approximately how long?",
      textMr: "मानवी पचनसंस्थेतील लहान आतडे साधारण किती लांब असते?",
      explanationEn:
        "The small intestine is approximately 7 metres long and is the main site of digestion and nutrient absorption. The large intestine is approximately 1.5 metres long and mainly absorbs water from undigested food.",
      explanationMr:
        "लहान आतडे साधारण ७ मीटर लांब असते आणि पचन व पोषकतत्त्व शोषणाचे मुख्य स्थान आहे. मोठे आतडे साधारण १.५ मीटर लांब असते आणि मुख्यतः न पचलेल्या अन्नातून पाणी शोषून घेते.",
      options: [
        { label: "A", textEn: "1.5 metres", textMr: "१.५ मीटर", isCorrect: false },
        { label: "B", textEn: "3 metres", textMr: "३ मीटर", isCorrect: false },
        { label: "C", textEn: "7 metres", textMr: "७ मीटर", isCorrect: true },
        { label: "D", textEn: "10 metres", textMr: "१० मीटर", isCorrect: false },
      ],
    },
    {
      textEn: "Smoking tobacco is directly linked to which disease?",
      textMr: "तंबाखू धूम्रपान थेट कोणत्या आजाराशी संबंधित आहे?",
      explanationEn:
        "Smoking tobacco is a leading cause of lung cancer. It also causes chronic bronchitis, emphysema, cardiovascular diseases, and many other cancers. The law bans smoking in public places in India to protect non-smokers from passive smoking.",
      explanationMr:
        "तंबाखू धूम्रपान हे फुफ्फुसाच्या कर्करोगाचे प्रमुख कारण आहे. यामुळे तीव्र श्वासनलिकादाह, एम्फिसीमा, हृदय-रक्तवाहिन्यासंबंधी आजार व इतर अनेक कर्करोगही होतात. अधूम्रपान करणाऱ्यांना निष्क्रिय धूम्रपानापासून वाचवण्यासाठी भारतात सार्वजनिक ठिकाणी धूम्रपानास बंदी आहे.",
      options: [
        { label: "A", textEn: "Malaria", textMr: "मलेरिया", isCorrect: false },
        { label: "B", textEn: "Lung cancer", textMr: "फुफ्फुसाचा कर्करोग", isCorrect: true },
        { label: "C", textEn: "Typhoid", textMr: "विषमज्वर", isCorrect: false },
        { label: "D", textEn: "Cholera", textMr: "कॉलरा", isCorrect: false },
      ],
    },
    {
      textEn: "Alcohol affects which body system, making it dangerous to drive after drinking?",
      textMr: "मद्यपान शरीराच्या कोणत्या संस्थेवर परिणाम करते ज्यामुळे मद्यपान करून वाहन चालवणे धोकादायक ठरते?",
      explanationEn:
        "Alcohol affects the central nervous system (brain and nerves), causing slowed reactions, impaired judgment, blurred vision, and loss of coordination. This makes driving under the influence extremely dangerous and is a criminal offence.",
      explanationMr:
        "मद्य केंद्रीय मज्जासंस्थेवर (मेंदू व मज्जातंतू) परिणाम करते, ज्यामुळे प्रतिक्रिया मंदावतात, निर्णयक्षमता बिघडते, दृष्टी अस्पष्ट होते व समन्वय बिघडतो. त्यामुळे मद्यपान करून वाहन चालवणे अत्यंत धोकादायक असून तो फौजदारी गुन्हा आहे.",
      options: [
        { label: "A", textEn: "Digestive system", textMr: "पचनसंस्था", isCorrect: false },
        { label: "B", textEn: "Skeletal system", textMr: "सांगाडा संस्था", isCorrect: false },
        { label: "C", textEn: "Nervous system", textMr: "मज्जासंस्था", isCorrect: true },
        { label: "D", textEn: "Excretory system", textMr: "उत्सर्जन संस्था", isCorrect: false },
      ],
    },
    {
      textEn: "Malaria is spread by:",
      textMr: "मलेरिया कशामुळे पसरतो?",
      explanationEn:
        "Malaria is caused by the Plasmodium parasite and is spread through the bite of the female Anopheles mosquito. Prevention includes eliminating stagnant water, using mosquito nets and repellents.",
      explanationMr:
        "मलेरिया हा प्लाझमोडियम परजीवीमुळे होतो व मादी अॅनोफिलीस डासाच्या चाव्याद्वारे पसरतो. प्रतिबंधासाठी साचलेले पाणी नष्ट करणे, मच्छरदाणी व प्रतिबंधक क्रीम वापरणे आवश्यक आहे.",
      options: [
        { label: "A", textEn: "Contaminated water", textMr: "दूषित पाणी", isCorrect: false },
        { label: "B", textEn: "Air-borne droplets", textMr: "हवेतील थेंब", isCorrect: false },
        { label: "C", textEn: "Mosquito bite (Anopheles)", textMr: "डासाचा (अॅनोफिलीस) चावा", isCorrect: true },
        { label: "D", textEn: "Direct physical contact", textMr: "थेट शारीरिक संपर्क", isCorrect: false },
      ],
    },
    {
      textEn: "Diseases like typhoid and cholera spread mainly through:",
      textMr: "विषमज्वर व कॉलऱ्यासारखे आजार मुख्यतः कशामुळे पसरतात?",
      explanationEn:
        "Typhoid and cholera are waterborne diseases caused by contaminated water (and sometimes food). Proper water purification, sanitation, and handwashing are essential preventive measures.",
      explanationMr:
        "विषमज्वर व कॉलरा हे जलजन्य आजार असून दूषित पाण्यामुळे (व कधीकधी अन्नामुळे) होतात. योग्य जलशुद्धीकरण, स्वच्छता व हात धुणे हे आवश्यक प्रतिबंधात्मक उपाय आहेत.",
      options: [
        { label: "A", textEn: "Air", textMr: "हवा", isCorrect: false },
        { label: "B", textEn: "Mosquito bites", textMr: "डासांचे चावे", isCorrect: false },
        { label: "C", textEn: "Contaminated water", textMr: "दूषित पाणी", isCorrect: true },
        { label: "D", textEn: "Direct skin contact", textMr: "थेट त्वचेचा संपर्क", isCorrect: false },
      ],
    },
    {
      textEn: "DPT vaccine provides protection against:",
      textMr: "डीपीटी लस कोणत्या आजारांपासून संरक्षण देते?",
      explanationEn:
        "DPT is a combination vaccine protecting against Diphtheria, Pertussis (Whooping Cough), and Tetanus. It is given as an injection. The Polio vaccine is given orally (OPV - Oral Polio Vaccine). Newborns receive BCG vaccine against Tuberculosis.",
      explanationMr:
        "डीपीटी ही संयुक्त लस घटसर्प, डांग्या खोकला (Pertussis) व धनुर्वात यांपासून संरक्षण देते. ही इंजेक्शनद्वारे दिली जाते. पोलिओ लस तोंडावाटे (OPV) दिली जाते. नवजात बालकांना क्षयरोगाविरुद्ध बीसीजी लस दिली जाते.",
      options: [
        { label: "A", textEn: "Diphtheria, Polio, Tetanus", textMr: "घटसर्प, पोलिओ, धनुर्वात", isCorrect: false },
        { label: "B", textEn: "Diphtheria, Pertussis (Whooping Cough), Tetanus", textMr: "घटसर्प, डांग्या खोकला, धनुर्वात", isCorrect: true },
        { label: "C", textEn: "Dengue, Polio, Tuberculosis", textMr: "डेंग्यू, पोलिओ, क्षयरोग", isCorrect: false },
        { label: "D", textEn: "Diphtheria, Plague, Typhoid", textMr: "घटसर्प, प्लेग, विषमज्वर", isCorrect: false },
      ],
    },
    {
      textEn: "An epidemic is defined as:",
      textMr: "साथीचा रोग (Epidemic) म्हणजे काय?",
      explanationEn:
        "An epidemic occurs when many people in a particular area contract the same disease at the same time. When an epidemic spreads globally, it is called a pandemic (e.g., COVID-19). Primary Health Centres (PHCs) at the village level help in disease control.",
      explanationMr:
        "एखाद्या विशिष्ट भागातील अनेक लोकांना एकाच वेळी एकच आजार झाल्यास त्याला साथीचा रोग (Epidemic) म्हणतात. जेव्हा साथ जागतिक स्तरावर पसरते तेव्हा त्याला महामारी (Pandemic) म्हणतात (उदा. कोविड-१९). गावपातळीवरील प्राथमिक आरोग्य केंद्रे (PHC) रोगनियंत्रणास मदत करतात.",
      options: [
        { label: "A", textEn: "A disease found only in one person", textMr: "फक्त एका व्यक्तीत आढळणारा आजार", isCorrect: false },
        { label: "B", textEn: "A disease that spreads to many people in the same area at the same time", textMr: "एकाच वेळी एकाच भागातील अनेक लोकांमध्ये पसरणारा आजार", isCorrect: true },
        { label: "C", textEn: "A disease caused by genetic factors", textMr: "आनुवंशिक कारणांमुळे होणारा आजार", isCorrect: false },
        { label: "D", textEn: "A disease that is always fatal", textMr: "नेहमी प्राणघातक ठरणारा आजार", isCorrect: false },
      ],
    },
    {
      textEn: "The ancient Indian philosopher who proposed that all things are made of minute particles was:",
      textMr: "सर्व वस्तू सूक्ष्म कणांपासून बनलेल्या असतात असे मत मांडणारे प्राचीन भारतीय तत्त्वज्ञ कोण होते?",
      explanationEn:
        "Kanaad Maharshi (also called Uluk, literally 'owl'), who lived in 6th century BC in Gujarat, proposed the atomic theory - that all matter is made of indivisible minute particles called 'parmanu' (similar to modern atoms). He wrote the Vaisheshika Sutras.",
      explanationMr:
        "कणाद महर्षी (ज्यांना उलूक म्हणजे 'घुबड' असेही म्हणतात), जे इसवी सन पूर्व सहाव्या शतकात गुजरातमध्ये राहत होते, त्यांनी अणुसिद्धांत मांडला — सर्व पदार्थ 'परमाणू' नावाच्या अविभाज्य सूक्ष्म कणांपासून बनलेले असतात (आधुनिक अणूंसारखे). त्यांनी वैशेषिक सूत्रे लिहिली.",
      options: [
        { label: "A", textEn: "Aryabhata", textMr: "आर्यभट्ट", isCorrect: false },
        { label: "B", textEn: "Charaka", textMr: "चरक", isCorrect: false },
        { label: "C", textEn: "Kanaad Maharshi (Uluk)", textMr: "कणाद महर्षी (उलूक)", isCorrect: true },
        { label: "D", textEn: "Varahamihira", textMr: "वराहमिहीर", isCorrect: false },
      ],
    },
    {
      textEn: "Energy is defined as:",
      textMr: "ऊर्जेची व्याख्या काय आहे?",
      explanationEn:
        "Energy is defined as the capacity (ability) to do work. Everything that moves, heats, lights, or makes sound requires energy. Energy exists in many forms: kinetic (motion), potential (stored), heat, light, sound, and electrical.",
      explanationMr:
        "ऊर्जा म्हणजे काम करण्याची क्षमता (सामर्थ्य). हालचाल, उष्णता, प्रकाश किंवा आवाज निर्माण करणाऱ्या प्रत्येक गोष्टीला ऊर्जेची गरज असते. ऊर्जा अनेक स्वरूपात असते: गतिज (हालचालीची), स्थितिज (साठवलेली), उष्णता, प्रकाश, ध्वनी व विद्युत ऊर्जा.",
      options: [
        { label: "A", textEn: "Force applied on an object", textMr: "वस्तूवर लावलेले बल", isCorrect: false },
        { label: "B", textEn: "The capacity to do work", textMr: "काम करण्याची क्षमता", isCorrect: true },
        { label: "C", textEn: "The speed of a moving object", textMr: "हलणाऱ्या वस्तूचा वेग", isCorrect: false },
        { label: "D", textEn: "The weight of a substance", textMr: "पदार्थाचे वजन", isCorrect: false },
      ],
    },
    {
      textEn:
        "Which of the following is an example of stored energy (potential energy) that can be used to generate electricity?",
      textMr: "वीजनिर्मितीसाठी वापरता येणाऱ्या साठवलेल्या (स्थितिज) ऊर्जेचे उदाहरण कोणते?",
      explanationEn:
        "Water stored in a dam has potential energy (gravitational). When released, it converts to kinetic energy and drives turbines to generate hydroelectric power. This is how hydroelectric power stations work.",
      explanationMr:
        "धरणात साठवलेल्या पाण्यात स्थितिज (गुरुत्वीय) ऊर्जा असते. ते सोडल्यावर ती गतिज ऊर्जेत रूपांतरित होऊन टर्बाइन फिरवते व वीजनिर्मिती करते. अशा प्रकारे जलविद्युत केंद्रे कार्य करतात.",
      options: [
        { label: "A", textEn: "A moving car", textMr: "चालणारी कार", isCorrect: false },
        { label: "B", textEn: "Wind blowing", textMr: "वाहणारा वारा", isCorrect: false },
        { label: "C", textEn: "Water stored in a dam", textMr: "धरणात साठवलेले पाणी", isCorrect: true },
        { label: "D", textEn: "A rotating ceiling fan", textMr: "फिरणारा पंखा", isCorrect: false },
      ],
    },
    {
      textEn: "Solar batteries (solar cells) produce electricity using:",
      textMr: "सौर बॅटरी (सौर पेशी) कशाचा वापर करून वीज निर्माण करतात?",
      explanationEn:
        "Solar batteries (photovoltaic cells/solar panels) convert sunlight directly into electricity through the photovoltaic effect. Unlike coal or natural gas power plants, solar power produces no direct pollution.",
      explanationMr:
        "सौर बॅटरी (फोटोव्होल्टेइक पेशी/सौर पॅनेल) फोटोव्होल्टेइक परिणामाद्वारे सूर्यप्रकाशाचे थेट विजेत रूपांतर करतात. कोळसा किंवा नैसर्गिक वायू ऊर्जा प्रकल्पांप्रमाणे सौर ऊर्जेमुळे थेट प्रदूषण होत नाही.",
      options: [
        { label: "A", textEn: "Chemical reactions", textMr: "रासायनिक प्रक्रिया", isCorrect: false },
        { label: "B", textEn: "Sunlight (solar energy)", textMr: "सूर्यप्रकाश (सौर ऊर्जा)", isCorrect: true },
        { label: "C", textEn: "Wind power", textMr: "पवन ऊर्जा", isCorrect: false },
        { label: "D", textEn: "Nuclear fuel", textMr: "अणुइंधन", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is a THREAT to community health?",
      textMr: "खालीलपैकी कोणती गोष्ट सामुदायिक आरोग्यास धोका आहे?",
      explanationEn:
        "Threats to community health include: pollution, squalor (filth), epidemics of infectious diseases, addiction (tobacco/alcohol/drugs), and insect-borne diseases. These degrade the health of entire communities.",
      explanationMr:
        "सामुदायिक आरोग्यास धोका पोहोचवणाऱ्या गोष्टींमध्ये प्रदूषण, अस्वच्छता, संसर्गजन्य आजारांच्या साथी, व्यसन (तंबाखू/मद्य/अंमली पदार्थ) व कीटकजन्य आजार यांचा समावेश होतो. या गोष्टी संपूर्ण समुदायाचे आरोग्य बिघडवतात.",
      options: [
        { label: "A", textEn: "Personal hygiene and clean surroundings", textMr: "वैयक्तिक स्वच्छता व स्वच्छ परिसर", isCorrect: false },
        { label: "B", textEn: "Nutritious diet and regular exercise", textMr: "पौष्टिक आहार व नियमित व्यायाम", isCorrect: false },
        { label: "C", textEn: "Pollution, addiction, and insect-borne diseases", textMr: "प्रदूषण, व्यसन व कीटकजन्य आजार", isCorrect: true },
        { label: "D", textEn: "Safe drinking water and good medical facilities", textMr: "सुरक्षित पिण्याचे पाणी व चांगल्या वैद्यकीय सुविधा", isCorrect: false },
      ],
    },
    {
      textEn: "Spitting in public places in India is:",
      textMr: "भारतात सार्वजनिक ठिकाणी थुंकणे हे:",
      explanationEn:
        "Spitting in public places is a legal offence in India, prohibited to prevent the spread of diseases like tuberculosis (TB) which spreads through respiratory droplets. The fine for spitting in public was increased in many states.",
      explanationMr:
        "सार्वजनिक ठिकाणी थुंकणे हा भारतात कायदेशीर गुन्हा आहे, कारण त्यामुळे क्षयरोगासारखे (टीबी) श्वसनाद्वारे पसरणारे आजार पसरू शकतात. अनेक राज्यांत सार्वजनिक ठिकाणी थुंकल्यास दंडाची रक्कम वाढवण्यात आली आहे.",
      options: [
        { label: "A", textEn: "Allowed only in rural areas", textMr: "फक्त ग्रामीण भागात परवानगी आहे", isCorrect: false },
        { label: "B", textEn: "A legal offence that spreads diseases", textMr: "आजार पसरवणारा कायदेशीर गुन्हा आहे", isCorrect: true },
        { label: "C", textEn: "Allowed if done on roadsides", textMr: "रस्त्याच्या कडेला केल्यास परवानगी आहे", isCorrect: false },
        { label: "D", textEn: "Regulated only during festivals", textMr: "फक्त सणांच्या काळात नियंत्रित असते", isCorrect: false },
      ],
    },
    {
      textEn: "Ill effects of tobacco addiction include all of the following EXCEPT:",
      textMr: "तंबाखू व्यसनाच्या दुष्परिणामांमध्ये खालीलपैकी कोणता समावेश नाही?",
      explanationEn:
        "Tobacco addiction causes: mouth ulcers -> tumours -> cancer, digestive organ cancers, liver/kidney problems, and financial burden. It does NOT strengthen the immune system - on the contrary, it weakens it.",
      explanationMr:
        "तंबाखू व्यसनामुळे तोंडातील व्रण → गाठी → कर्करोग, पचनसंस्थेचे कर्करोग, यकृत/मूत्रपिंडाच्या समस्या व आर्थिक भार निर्माण होतो. यामुळे रोगप्रतिकारशक्ती मजबूत होत नाही — उलट ती कमकुवत होते.",
      options: [
        { label: "A", textEn: "Ulcers in the mouth developing into tumours", textMr: "तोंडातील व्रण गाठींमध्ये (Tumours) रूपांतरित होणे", isCorrect: false },
        { label: "B", textEn: "Cancer of the digestive organs", textMr: "पचनसंस्थेच्या अवयवांचा कर्करोग", isCorrect: false },
        { label: "C", textEn: "Strengthening of the immune system", textMr: "रोगप्रतिकारशक्ती मजबूत होणे", isCorrect: true },
        { label: "D", textEn: "Spending large amounts of money on treatment", textMr: "उपचारावर मोठा खर्च होणे", isCorrect: false },
      ],
    },
    {
      textEn: "Alcoholism causes diseases of which organs?",
      textMr: "मद्यपानाच्या व्यसनामुळे कोणत्या अवयवांचे आजार होतात?",
      explanationEn:
        "Alcoholism (addiction to alcohol) primarily damages the liver (cirrhosis), intestines, and urinary bladder. Alcohol also affects the nervous system (brain), causing confusion and loss of self-control. An addict's entire family suffers.",
      explanationMr:
        "मद्यपानाचे व्यसन प्रामुख्याने यकृत (सिरॉसिस), आतडी व मूत्राशय यांना हानी पोहोचवते. मद्य मज्जासंस्थेवर (मेंदूवर) देखील परिणाम करते, ज्यामुळे गोंधळ व आत्मनियंत्रण गमावले जाते. व्यसनी व्यक्तीच्या संपूर्ण कुटुंबाला त्रास सहन करावा लागतो.",
      options: [
        { label: "A", textEn: "Heart, lungs, and kidneys", textMr: "हृदय, फुफ्फुसे व मूत्रपिंड", isCorrect: false },
        { label: "B", textEn: "Liver, intestines, and urinary bladder", textMr: "यकृत, आतडी व मूत्राशय", isCorrect: true },
        { label: "C", textEn: "Brain, eyes, and ears", textMr: "मेंदू, डोळे व कान", isCorrect: false },
        { label: "D", textEn: "Bones, muscles, and skin", textMr: "हाडे, स्नायू व त्वचा", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following activities promotes 'wholesome living' and good community health?",
      textMr: "खालीलपैकी कोणती कृती 'सुदृढ जीवनशैली' व चांगले सामुदायिक आरोग्य वाढवते?",
      explanationEn:
        "Wholesome living involves: nutritious diet, personal hygiene, regular exercise, pursuing hobbies, staying happy, and avoiding addictions. This leads to good personal health and reduces social tensions, promoting community harmony.",
      explanationMr:
        "सुदृढ जीवनशैलीत पौष्टिक आहार, वैयक्तिक स्वच्छता, नियमित व्यायाम, छंद जोपासणे, आनंदी राहणे व व्यसनांपासून दूर राहणे यांचा समावेश होतो. यामुळे वैयक्तिक आरोग्य सुधारते व सामाजिक तणाव कमी होऊन सामुदायिक सौहार्द वाढते.",
      options: [
        { label: "A", textEn: "Tobacco consumption to relieve stress", textMr: "ताण कमी करण्यासाठी तंबाखू सेवन", isCorrect: false },
        { label: "B", textEn: "Consuming alcohol socially", textMr: "सामाजिकरित्या मद्यपान करणे", isCorrect: false },
        { label: "C", textEn: "Pursuing hobbies, staying happy, and exercising regularly", textMr: "छंद जोपासणे, आनंदी राहणे व नियमित व्यायाम करणे", isCorrect: true },
        { label: "D", textEn: "Spending maximum time on social media", textMr: "सोशल मीडियावर जास्तीत जास्त वेळ घालवणे", isCorrect: false },
      ],
    },
    {
      textEn: "As an AMVI (Motor Vehicle Inspector), which of the following is MOST relevant to your duties?",
      textMr: "सहाय्यक मोटार वाहन निरीक्षक (AMVI) म्हणून खालीलपैकी कोणती गोष्ट तुमच्या कर्तव्याशी सर्वाधिक संबंधित आहे?",
      explanationEn:
        "An AMVI's primary duty is to inspect motor vehicles for fitness, safety, emission compliance, and road worthiness under the Motor Vehicles Act, 1988. This includes checking pollution (PUC) certificates, vehicle documents, and ensuring vehicles meet safety standards.",
      explanationMr:
        "AMVI चे मुख्य कर्तव्य म्हणजे मोटार वाहन कायदा, १९८८ अंतर्गत वाहनांची सुस्थिती, सुरक्षा, उत्सर्जन अनुपालन व रस्ता-योग्यता तपासणे. यात प्रदूषण नियंत्रण (PUC) प्रमाणपत्रे, वाहन कागदपत्रे व सुरक्षा मानकांची तपासणी समाविष्ट आहे.",
      options: [
        { label: "A", textEn: "Checking food adulteration", textMr: "अन्न भेसळ तपासणे", isCorrect: false },
        { label: "B", textEn: "Inspecting vehicle fitness, emission levels, and road worthiness", textMr: "वाहनाची सुस्थिती, उत्सर्जन पातळी व रस्ता-योग्यता तपासणे", isCorrect: true },
        { label: "C", textEn: "Supervising agricultural land records", textMr: "शेतजमीन नोंदींचे निरीक्षण करणे", isCorrect: false },
        { label: "D", textEn: "Monitoring forest cover", textMr: "वनक्षेत्राचे निरीक्षण करणे", isCorrect: false },
      ],
    },
    {
      textEn: "The Motor Vehicles Act, 1988 is the primary legislation governing:",
      textMr: "मोटार वाहन कायदा, १९८८ हा प्रामुख्याने कशाचे नियमन करणारा कायदा आहे?",
      explanationEn:
        "The Motor Vehicles Act, 1988 (amended by MV Amendment Act 2019) is the central legislation governing road transport in India, including vehicle registration, driving licenses, traffic rules, insurance requirements, and penalties for violations.",
      explanationMr:
        "मोटार वाहन कायदा, १९८८ (मोटार वाहन सुधारणा कायदा २०१९ द्वारे सुधारित) हा भारतातील रस्ता वाहतुकीचे नियमन करणारा मुख्य कायदा आहे, ज्यात वाहन नोंदणी, वाहन परवाने, वाहतूक नियम, विमा आवश्यकता व उल्लंघनासाठीच्या दंडांचा समावेश होतो.",
      options: [
        { label: "A", textEn: "Air traffic control in India", textMr: "भारतातील हवाई वाहतूक नियंत्रण", isCorrect: false },
        { label: "B", textEn: "Road transport, vehicle registration, licensing, and traffic laws in India", textMr: "भारतातील रस्ता वाहतूक, वाहन नोंदणी, परवाना व वाहतूक कायदे", isCorrect: true },
        { label: "C", textEn: "Railway transport and safety", textMr: "रेल्वे वाहतूक व सुरक्षा", isCorrect: false },
        { label: "D", textEn: "Maritime laws for ships and vessels", textMr: "जहाजांसाठीचे सागरी कायदे", isCorrect: false },
      ],
    },
    {
      textEn: "Pollution Under Control (PUC) certificate for vehicles tests:",
      textMr: "वाहनांचे प्रदूषण नियंत्रण (PUC) प्रमाणपत्र कशाची चाचणी करते?",
      explanationEn:
        "The PUC (Pollution Under Control) certificate is issued after testing a vehicle's exhaust emission levels to ensure they are within permissible limits set by the Central Motor Vehicles Rules. Excess emissions fail the test.",
      explanationMr:
        "केंद्रीय मोटार वाहन नियमांनी ठरवलेल्या मर्यादेत उत्सर्जन आहे की नाही हे तपासण्यासाठी वाहनाच्या धुराच्या उत्सर्जन पातळीची चाचणी केल्यानंतर PUC (प्रदूषण नियंत्रण) प्रमाणपत्र दिले जाते. जास्त उत्सर्जन असल्यास चाचणी अयशस्वी ठरते.",
      options: [
        { label: "A", textEn: "Engine oil quality only", textMr: "फक्त इंजिन तेलाची गुणवत्ता", isCorrect: false },
        { label: "B", textEn: "Vehicle paint and exterior condition", textMr: "वाहनाचा रंग व बाह्य स्थिती", isCorrect: false },
        { label: "C", textEn: "Vehicular exhaust emission levels", textMr: "वाहनाच्या धुराच्या उत्सर्जन पातळी", isCorrect: true },
        { label: "D", textEn: "Brake efficiency and tyre condition", textMr: "ब्रेकची कार्यक्षमता व टायरची स्थिती", isCorrect: false },
      ],
    },
    {
      textEn: "The Bharat Stage (BS) emission standards for vehicles are modeled after:",
      textMr: "भारत स्टेज (BS) उत्सर्जन मानके कोणत्या मानकांवर आधारित आहेत?",
      explanationEn:
        "India's Bharat Stage (BS) emission standards are equivalent to the European emission (Euro) standards. India currently follows BS6 (equivalent to Euro 6). These standards limit the amount of harmful gases that vehicles can emit.",
      explanationMr:
        "भारताची भारत स्टेज (BS) उत्सर्जन मानके युरोपियन उत्सर्जन (युरो) मानकांच्या समतुल्य आहेत. सध्या भारत BS6 (युरो 6 समतुल्य) पाळतो. ही मानके वाहनांतून बाहेर पडणाऱ्या हानिकारक वायूंचे प्रमाण मर्यादित करतात.",
      options: [
        { label: "A", textEn: "USA's EPA standards", textMr: "अमेरिकेची EPA मानके", isCorrect: false },
        { label: "B", textEn: "European emission standards (Euro norms)", textMr: "युरोपियन उत्सर्जन मानके (युरो नॉर्म्स)", isCorrect: true },
        { label: "C", textEn: "Japan's JIS standards", textMr: "जपानची JIS मानके", isCorrect: false },
        { label: "D", textEn: "China's GB standards", textMr: "चीनची GB मानके", isCorrect: false },
      ],
    },
    {
      textEn: "Which gas is primarily responsible for the greenhouse effect and global warming?",
      textMr: "हरितगृह परिणाम व जागतिक तापमानवाढीस मुख्यतः कोणता वायू जबाबदार आहे?",
      explanationEn:
        "Carbon dioxide (CO2), along with methane (CH4), nitrous oxide (N2O), and water vapour are the primary greenhouse gases. CO2 from burning fossil fuels (vehicles, power plants) is the main driver of climate change and global warming.",
      explanationMr:
        "कार्बन डायऑक्साइड (CO2), मिथेन (CH4), नायट्रस ऑक्साइड (N2O) व पाण्याची वाफ हे प्रमुख हरितगृह वायू आहेत. जीवाश्म इंधन (वाहने, ऊर्जा प्रकल्प) जाळल्याने निर्माण होणारा CO2 हा हवामान बदल व जागतिक तापमानवाढीचे मुख्य कारण आहे.",
      options: [
        { label: "A", textEn: "Oxygen (O2)", textMr: "ऑक्सिजन (O2)", isCorrect: false },
        { label: "B", textEn: "Nitrogen (N2)", textMr: "नायट्रोजन (N2)", isCorrect: false },
        { label: "C", textEn: "Carbon dioxide (CO2)", textMr: "कार्बन डायऑक्साइड (CO2)", isCorrect: true },
        { label: "D", textEn: "Argon (Ar)", textMr: "आर्गॉन (Ar)", isCorrect: false },
      ],
    },
    {
      textEn: "The Right to Information (RTI) Act was enacted in India in:",
      textMr: "माहितीचा अधिकार (RTI) कायदा भारतात कोणत्या वर्षी लागू झाला?",
      explanationEn:
        "The Right to Information (RTI) Act, 2005 gives Indian citizens the right to request information from public authorities. It is a powerful tool for transparency and fighting corruption.",
      explanationMr:
        "माहितीचा अधिकार (RTI) कायदा, २००५ भारतीय नागरिकांना सार्वजनिक प्राधिकरणांकडून माहिती मागण्याचा अधिकार देतो. पारदर्शकता व भ्रष्टाचाराविरुद्ध लढण्याचे हे एक प्रभावी साधन आहे.",
      options: [
        { label: "A", textEn: "2000", textMr: "२०००", isCorrect: false },
        { label: "B", textEn: "2003", textMr: "२००३", isCorrect: false },
        { label: "C", textEn: "2005", textMr: "२००५", isCorrect: true },
        { label: "D", textEn: "2010", textMr: "२०१०", isCorrect: false },
      ],
    },
    {
      textEn: "Which Maharashtra district is known as the 'Sugarcane Belt'?",
      textMr: "महाराष्ट्रातील कोणता प्रदेश 'ऊस पट्टा' म्हणून ओळखला जातो?",
      explanationEn:
        "The Kolhapur-Sangli-Satara belt in western Maharashtra is called the sugarcane belt, producing the majority of Maharashtra's sugar. Maharashtra is the 2nd largest sugar-producing state after Uttar Pradesh.",
      explanationMr:
        "पश्चिम महाराष्ट्रातील कोल्हापूर-सांगली-सातारा पट्ट्याला ऊस पट्टा म्हणतात, जो महाराष्ट्राच्या बहुतांश साखर उत्पादनाचा स्रोत आहे. उत्तर प्रदेशनंतर महाराष्ट्र हे साखर उत्पादनात दुसऱ्या क्रमांकाचे राज्य आहे.",
      options: [
        { label: "A", textEn: "Nagpur", textMr: "नागपूर", isCorrect: false },
        { label: "B", textEn: "Nasik", textMr: "नाशिक", isCorrect: false },
        { label: "C", textEn: "Aurangabad", textMr: "औरंगाबाद", isCorrect: false },
        { label: "D", textEn: "Kolhapur-Sangli-Satara region", textMr: "कोल्हापूर-सांगली-सातारा प्रदेश", isCorrect: true },
      ],
    },
    {
      textEn: "The Kaziranga National Park, famous for the One-Horned Rhinoceros, is in:",
      textMr: "एक-शिंगी गेंड्यासाठी प्रसिद्ध असलेले काझीरंगा राष्ट्रीय उद्यान कोणत्या राज्यात आहे?",
      explanationEn:
        "Kaziranga National Park in Assam is a UNESCO World Heritage Site famous for the Indian One-Horned Rhinoceros. It is also home to elephants, tigers, wild water buffaloes, and numerous bird species. Mentioned in the Std 5 textbook (Ch18).",
      explanationMr:
        "आसाममधील काझीरंगा राष्ट्रीय उद्यान हे युनेस्को जागतिक वारसा स्थळ असून भारतीय एक-शिंगी गेंड्यासाठी प्रसिद्ध आहे. येथे हत्ती, वाघ, रानम्हैस व अनेक पक्षीही आढळतात. इयत्ता ५ वीच्या पाठ्यपुस्तकात (प्रकरण १८) याचा उल्लेख आहे.",
      options: [
        { label: "A", textEn: "West Bengal", textMr: "पश्चिम बंगाल", isCorrect: false },
        { label: "B", textEn: "Assam", textMr: "आसाम", isCorrect: true },
        { label: "C", textEn: "Meghalaya", textMr: "मेघालय", isCorrect: false },
        { label: "D", textEn: "Arunachal Pradesh", textMr: "अरुणाचल प्रदेश", isCorrect: false },
      ],
    },
    {
      textEn: "A 'Devrai' (sacred grove) in Maharashtra is:",
      textMr: "महाराष्ट्रातील 'देवराई' म्हणजे काय?",
      explanationEn:
        "A Devrai (or Dev-Van) is a patch of forest traditionally protected by communities for religious reasons. No trees are cut, and no animals are hunted in a Devrai. These sacred groves have helped preserve biodiversity. In Madhya Pradesh, similar forests are called Sharanvan.",
      explanationMr:
        "देवराई (किंवा देववन) हे धार्मिक कारणांसाठी पारंपरिकरित्या समुदायाने संरक्षित केलेले जंगलाचे तुकडे असतात. देवराईत झाडे तोडली जात नाहीत व प्राण्यांची शिकारही केली जात नाही. या पवित्र उपवनांनी जैवविविधता जपण्यास मदत केली आहे. मध्य प्रदेशात अशा जंगलांना 'शरणवन' म्हणतात.",
      options: [
        { label: "A", textEn: "A government forest reserved for timber", textMr: "लाकडासाठी राखीव सरकारी जंगल", isCorrect: false },
        { label: "B", textEn: "A jungle protected for religious/cultural reasons without cutting trees", textMr: "धार्मिक/सांस्कृतिक कारणांसाठी संरक्षित असे जंगल जेथे झाडे तोडली जात नाहीत", isCorrect: true },
        { label: "C", textEn: "A designated area for hunting", textMr: "शिकारीसाठी नेमून दिलेला भाग", isCorrect: false },
        { label: "D", textEn: "An agricultural land near a temple", textMr: "मंदिराजवळील शेतजमीन", isCorrect: false },
      ],
    },
    {
      textEn: "The Survey of India was established in which year?",
      textMr: "सर्व्हे ऑफ इंडियाची स्थापना कोणत्या वर्षी झाली?",
      explanationEn:
        "The Survey of India (SOI) was established in 1767 during the British colonial era, making it one of the oldest scientific institutions in India. James Rennell became the first Surveyor General of India. HQ is in Dehradun.",
      explanationMr:
        "सर्व्हे ऑफ इंडिया (SOI) ची स्थापना ब्रिटिश वसाहतकाळात १७६७ मध्ये झाली, त्यामुळे ती भारतातील सर्वात जुन्या वैज्ञानिक संस्थांपैकी एक आहे. जेम्स रेनेल हे भारताचे पहिले सर्वेक्षक-जनरल बनले. मुख्यालय डेहराडून येथे आहे.",
      options: [
        { label: "A", textEn: "1857", textMr: "१८५७", isCorrect: false },
        { label: "B", textEn: "1947", textMr: "१९४७", isCorrect: false },
        { label: "C", textEn: "1767", textMr: "१७६७", isCorrect: true },
        { label: "D", textEn: "1800", textMr: "१८००", isCorrect: false },
      ],
    },
    {
      textEn:
        "Statement 1: Rotation of the Earth causes day and night. Statement 2: Revolution of the Earth around the Sun causes seasons. Which of these statements is/are correct?",
      textMr:
        "विधान १: पृथ्वीच्या परिवलनामुळे दिवस-रात्र होतात. विधान २: पृथ्वीच्या सूर्याभोवतीच्या परिभ्रमणामुळे ऋतू होतात. यापैकी कोणते/कोणती विधान/विधाने बरोबर आहेत?",
      explanationEn:
        "Both statements are correct. Earth's rotation (on its own axis, west to east, ~24 hours) causes day and night. Earth's revolution (around the Sun, ~365.25 days) combined with Earth's axial tilt (23.5 degrees) causes the seasons.",
      explanationMr:
        "दोन्ही विधाने बरोबर आहेत. पृथ्वीच्या परिवलनामुळे (स्वतःभोवती, पश्चिमेकडून पूर्वेकडे, सुमारे २४ तासांत) दिवस-रात्र होतात. पृथ्वीच्या परिभ्रमणामुळे (सूर्याभोवती, सुमारे ३६५.२५ दिवसांत) व पृथ्वीच्या अक्षीय कलतेपणामुळे (२३.५°) ऋतू निर्माण होतात.",
      options: [
        { label: "A", textEn: "Only Statement 1", textMr: "फक्त विधान १", isCorrect: false },
        { label: "B", textEn: "Only Statement 2", textMr: "फक्त विधान २", isCorrect: false },
        { label: "C", textEn: "Both statements are correct", textMr: "दोन्ही विधाने बरोबर आहेत", isCorrect: true },
        { label: "D", textEn: "Neither statement is correct", textMr: "दोन्हीपैकी एकही विधान बरोबर नाही", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following pairs is CORRECTLY matched?",
      textMr: "खालीलपैकी कोणती जोडी योग्यरित्या जुळलेली आहे?",
      explanationEn:
        "Rakesh Sharma became the first Indian in space in 1984 - this is correct. Chandrayaan-1 is a MOON mission (not Mars). Mangalyaan is a MARS mission (not Moon). INSAT satellites are used for communication/broadcasting, not land survey.",
      explanationMr:
        "राकेश शर्मा १९८४ मध्ये अंतराळात जाणारे पहिले भारतीय ठरले — हे बरोबर आहे. चांद्रयान-१ ही चंद्र मोहीम आहे (मंगळ नव्हे). मंगळयान ही मंगळ मोहीम आहे (चंद्र नव्हे). INSAT उपग्रह संदेशवहन/प्रसारणासाठी वापरले जातात, भूमी सर्वेक्षणासाठी नाही.",
      options: [
        { label: "A", textEn: "Chandrayaan-1 : Mars Mission", textMr: "चांद्रयान-१ : मंगळ मोहीम", isCorrect: false },
        { label: "B", textEn: "Mangalyaan : Moon Mission", textMr: "मंगळयान : चंद्र मोहीम", isCorrect: false },
        { label: "C", textEn: "Rakesh Sharma : First Indian in Space (1984)", textMr: "राकेश शर्मा : अंतराळातील पहिले भारतीय (१९८४)", isCorrect: true },
        { label: "D", textEn: "INSAT : Land Survey Satellites", textMr: "INSAT : भूमी सर्वेक्षण उपग्रह", isCorrect: false },
      ],
    },
    {
      textEn:
        "Arrange the following in the correct sequence of water purification: (1) Chlorination (2) Filtration (3) Settling with alum (4) Oxygenation",
      textMr:
        "पाणी शुद्धीकरणाचा योग्य क्रम लावा: (१) क्लोरीनीकरण (२) गाळणे (३) तुरटीने निवळणे (४) वायुमिश्रण",
      explanationEn:
        "The correct sequence of water purification is: (3) Settling with alum -> (4) Oxygenation -> (2) Filtration -> (1) Chlorination. Alum makes impurities settle; oxygenation adds oxygen; filtration removes remaining particles; chlorination kills germs.",
      explanationMr:
        "पाणी शुद्धीकरणाचा योग्य क्रम आहे: (३) तुरटीने निवळणे → (४) वायुमिश्रण → (२) गाळणे → (१) क्लोरीनीकरण. तुरटी अशुद्धी तळाशी बसवते; वायुमिश्रणाने ऑक्सिजन मिसळला जातो; गाळण्याने उरलेले कण काढले जातात; क्लोरीनीकरणाने जंतू नष्ट होतात.",
      options: [
        { label: "A", textEn: "1-2-3-4", textMr: "१-२-३-४", isCorrect: false },
        { label: "B", textEn: "3-4-2-1", textMr: "३-४-२-१", isCorrect: true },
        { label: "C", textEn: "2-3-4-1", textMr: "२-३-४-१", isCorrect: false },
        { label: "D", textEn: "4-3-2-1", textMr: "४-३-२-१", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following options lists ONLY renewable (non-exhaustible) energy sources?",
      textMr: "खालीलपैकी कोणत्या पर्यायात फक्त अक्षय्य (न संपणारे) ऊर्जास्रोत आहेत?",
      explanationEn:
        "Renewable (non-exhaustible) energy sources are those that are naturally replenished: solar (from Sun), wind, and hydroelectric (from flowing water). Coal, petroleum, and natural gas are non-renewable fossil fuels that will eventually be depleted.",
      explanationMr:
        "अक्षय्य (न संपणारे) ऊर्जास्रोत ते आहेत जे नैसर्गिकरित्या पुन्हा भरून निघतात: सौर (सूर्यापासून), पवन व जलविद्युत (वाहत्या पाण्यापासून). कोळसा, खनिज तेल व नैसर्गिक वायू हे अक्षय नसलेले (संपणारे) जीवाश्म इंधन आहेत.",
      options: [
        { label: "A", textEn: "Coal, petroleum, natural gas", textMr: "कोळसा, खनिज तेल, नैसर्गिक वायू", isCorrect: false },
        { label: "B", textEn: "Solar energy, wind energy, hydroelectric power", textMr: "सौर ऊर्जा, पवन ऊर्जा, जलविद्युत ऊर्जा", isCorrect: true },
        { label: "C", textEn: "Coal, solar energy, petroleum", textMr: "कोळसा, सौर ऊर्जा, खनिज तेल", isCorrect: false },
        { label: "D", textEn: "Nuclear energy, coal, natural gas", textMr: "अणुऊर्जा, कोळसा, नैसर्गिक वायू", isCorrect: false },
      ],
    },
    {
      textEn:
        "Assertion (A): Smoking should be banned in public places. Reason (R): Passive smoking (inhaling second-hand smoke) also harms non-smokers. Which is correct?",
      textMr:
        "विधान (A): सार्वजनिक ठिकाणी धूम्रपानास बंदी असावी. कारण (R): निष्क्रिय धूम्रपानामुळे (परोक्ष धूर श्वासाद्वारे घेतल्यास) अधूम्रपान करणाऱ्यांनाही हानी पोहोचते. कोणते बरोबर आहे?",
      explanationEn:
        "Both Assertion and Reason are true. Smoking is banned in public places in India precisely because passive smoking (non-smokers inhaling exhaled smoke) causes serious health damage. The Cigarettes and Other Tobacco Products Act (COTPA), 2003 prohibits smoking in public.",
      explanationMr:
        "विधान व कारण दोन्ही बरोबर आहेत. भारतात सार्वजनिक ठिकाणी धूम्रपानास बंदी आहे कारण निष्क्रिय धूम्रपानामुळे (अधूम्रपान करणाऱ्यांनी सोडलेला धूर श्वासाद्वारे घेतल्याने) गंभीर आरोग्यहानी होते. सिगारेट व इतर तंबाखू उत्पादने कायदा (COTPA), २००३ सार्वजनिक ठिकाणी धूम्रपानास प्रतिबंध करतो.",
      options: [
        { label: "A", textEn: "Both A and R are true, and R is the correct reason for A", textMr: "A व R दोन्ही बरोबर आहेत, आणि R हे A चे योग्य कारण आहे", isCorrect: true },
        { label: "B", textEn: "A is true but R is false", textMr: "A बरोबर आहे पण R चूक आहे", isCorrect: false },
        { label: "C", textEn: "A is false but R is true", textMr: "A चूक आहे पण R बरोबर आहे", isCorrect: false },
        { label: "D", textEn: "Both A and R are false", textMr: "A व R दोन्ही चूक आहेत", isCorrect: false },
      ],
    },
  ],
};

export default data;

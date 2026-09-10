import type { QuestionSetInput } from "./types";

// Source: All questions & answer/AMVI_Std7_GS_English.pdf + AMVI_Std7_GS_Marathi.pdf
// Both PDFs share identical question numbering/options/answers (57 MCQs).
// GS = General Science (सामान्य विज्ञान), per the PDF's own header.
const data: QuestionSetInput = {
  standard: { code: "STD7", nameEn: "Standard 7", nameMr: "इयत्ता ७वी", sortOrder: 7 },
  subject: { code: "GS", nameEn: "General Science", nameMr: "सामान्य विज्ञान", sortOrder: 2 },
  questions: [
    {
      textEn: "What is it called when living organisms adjust to their environment?",
      textMr: "सजीवांना त्यांच्या परिसराशी जुळवून घेण्यास काय म्हणतात?",
      explanationEn:
        "Adaptation means changes in living organisms to suit their environment. E.g. Camel can survive without water in deserts.",
      explanationMr:
        "सजीवांचे त्यांच्या परिसरानुसार बदलणे म्हणजे अनुकूलन होय. उदा. वाळवंटातील उंट पाण्याशिवाय राहू शकतो.",
      options: [
        { label: "A", textEn: "Adaptation", textMr: "अनुकूलन", isCorrect: true },
        { label: "B", textEn: "Classification", textMr: "वर्गीकरण", isCorrect: false },
        { label: "C", textEn: "Evolution", textMr: "उत्क्रांती", isCorrect: false },
        { label: "D", textEn: "Reproduction", textMr: "प्रजनन", isCorrect: false },
      ],
    },
    {
      textEn: "Dividing living organisms into groups based on similar properties is called?",
      textMr: "सजीवांना त्यांच्या समान गुणधर्मांनुसार गटात विभाजित करणे म्हणजे काय?",
      explanationEn:
        "Classification means grouping living organisms based on similar characteristics. It helps in scientific study.",
      explanationMr:
        "सजीवांचे समान गुणधर्मांनुसार गटांमध्ये विभाजन करणे म्हणजे वर्गीकरण होय. हे शास्त्रीय अभ्यासास मदत करते.",
      options: [
        { label: "A", textEn: "Adaptation", textMr: "अनुकूलन", isCorrect: false },
        { label: "B", textEn: "Classification", textMr: "वर्गीकरण", isCorrect: true },
        { label: "C", textEn: "Evolution", textMr: "उत्क्रांती", isCorrect: false },
        { label: "D", textEn: "Nutrition", textMr: "पोषण", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is an adaptation of aquatic animals?",
      textMr: "खालीलपैकी कोणते जलीय प्राण्याचे अनुकूलन आहे?",
      explanationEn:
        "Aquatic animals have fins for movement in water. This is an adaptation for their aquatic life.",
      explanationMr:
        "जलीय प्राण्यांना पाण्यात हालचाल करण्यासाठी पर (Fins) असतात. हे त्यांचे जलीय जीवनासाठी अनुकूलन आहे.",
      options: [
        { label: "A", textEn: "Wings", textMr: "पंख", isCorrect: false },
        { label: "B", textEn: "Lungs", textMr: "फुफ्फुस", isCorrect: false },
        { label: "C", textEn: "Fins", textMr: "पर", isCorrect: true },
        { label: "D", textEn: "Hooves", textMr: "खूर", isCorrect: false },
      ],
    },
    {
      textEn: "What system did Carolus Linnaeus introduce?",
      textMr: "Carolus Linnaeus यांनी कशाची पद्धत सुरू केली?",
      explanationEn:
        "Carolus Linnaeus introduced the Binomial nomenclature system, where each organism is given two Latin names.",
      explanationMr:
        "Carolus Linnaeus यांनी द्विपद नामकरण पद्धत (Binomial nomenclature) सुरू केली, ज्यामध्ये प्रत्येक सजीवाला लॅटिनमध्ये दोन नावे दिली जातात.",
      options: [
        { label: "A", textEn: "Adaptation", textMr: "अनुकूलनाची", isCorrect: false },
        { label: "B", textEn: "Binomial nomenclature", textMr: "द्विपद नामकरणाची", isCorrect: true },
        { label: "C", textEn: "Evolution", textMr: "उत्क्रांतीची", isCorrect: false },
        { label: "D", textEn: "Cell theory", textMr: "पेशींची", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main function of roots in plants?",
      textMr: "वनस्पतींच्या मुळांचे मुख्य कार्य कोणते?",
      explanationEn:
        "Roots absorb water and minerals from the soil and provide support to the plant. This is the primary function of roots.",
      explanationMr:
        "मुळे जमिनीतून पाणी व खनिजे शोषतात आणि वनस्पतीला आधार देतात. हे मुळांचे प्रमुख कार्य आहे.",
      options: [
        { label: "A", textEn: "Photosynthesis", textMr: "प्रकाशसंश्लेषण", isCorrect: false },
        { label: "B", textEn: "Absorbing water and minerals", textMr: "पाणी व खनिजे शोषणे", isCorrect: true },
        { label: "C", textEn: "Respiration", textMr: "श्वसन", isCorrect: false },
        { label: "D", textEn: "Food production", textMr: "अन्ननिर्मिती", isCorrect: false },
      ],
    },
    {
      textEn: "Which pigment in leaves helps in photosynthesis?",
      textMr: "पानांमध्ये प्रकाशसंश्लेषण कोणत्या रंगद्रव्यामुळे होते?",
      explanationEn:
        "Chlorophyll, the green pigment in leaves, enables photosynthesis. Chlorophyll absorbs sunlight for the process.",
      explanationMr:
        "पानांमधील क्लोरोफिल या हरित रंगद्रव्यामुळे प्रकाशसंश्लेषण होते. क्लोरोफिल सूर्यप्रकाश शोषतो.",
      options: [
        { label: "A", textEn: "Xanthophyll", textMr: "झँथोफिल", isCorrect: false },
        { label: "B", textEn: "Anthocyanin", textMr: "अँथोसायनिन", isCorrect: false },
        { label: "C", textEn: "Chlorophyll", textMr: "क्लोरोफिल", isCorrect: true },
        { label: "D", textEn: "Carotene", textMr: "कॅरोटीन", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main function of the stem?",
      textMr: "देठाचे (खोडाचे) मुख्य कार्य कोणते?",
      explanationEn:
        "The stem transports water and minerals from roots to leaves. This is the primary function of the stem.",
      explanationMr:
        "देठ पाणी व खनिजे मुळांपासून पानांपर्यंत वाहून नेतो. हे देठाचे प्रमुख कार्य आहे.",
      options: [
        { label: "A", textEn: "Food production", textMr: "अन्ननिर्मिती", isCorrect: false },
        { label: "B", textEn: "Transport of water and minerals", textMr: "पाणी व खनिजे वहन", isCorrect: true },
        { label: "C", textEn: "Respiration", textMr: "श्वसन", isCorrect: false },
        { label: "D", textEn: "Reproduction", textMr: "प्रजनन", isCorrect: false },
      ],
    },
    {
      textEn: "Which gas is released by plants during photosynthesis?",
      textMr: "प्रकाशसंश्लेषणात वनस्पती कोणता वायू सोडते?",
      explanationEn:
        "During photosynthesis, plants use sunlight, water and CO2 to produce food and release oxygen.",
      explanationMr:
        "प्रकाशसंश्लेषणात वनस्पती सूर्यप्रकाश, पाणी व कार्बन डायऑक्साइड वापरून अन्न तयार करते आणि प्राणवायू सोडते.",
      options: [
        { label: "A", textEn: "Carbon dioxide", textMr: "कार्बन डायऑक्साइड", isCorrect: false },
        { label: "B", textEn: "Nitrogen", textMr: "नायट्रोजन", isCorrect: false },
        { label: "C", textEn: "Oxygen", textMr: "प्राणवायू", isCorrect: true },
        { label: "D", textEn: "Hydrogen", textMr: "हायड्रोजन", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main component of air?",
      textMr: "हवेचा मुख्य घटक कोणता आहे?",
      explanationEn:
        "Air contains approximately 78% nitrogen, making it the largest component. Oxygen constitutes about 21%.",
      explanationMr:
        "हवेत सुमारे ७८% नायट्रोजन असतो, जो हवेचा सर्वाधिक घटक आहे. ऑक्सिजन सुमारे २१% असतो.",
      options: [
        { label: "A", textEn: "Oxygen", textMr: "ऑक्सिजन", isCorrect: false },
        { label: "B", textEn: "Carbon dioxide", textMr: "कार्बन डायऑक्साइड", isCorrect: false },
        { label: "C", textEn: "Nitrogen", textMr: "नायट्रोजन", isCorrect: true },
        { label: "D", textEn: "Argon", textMr: "आर्गॉन", isCorrect: false },
      ],
    },
    {
      textEn: "At what temperature does water boil?",
      textMr: "पाणी कोणत्या तापमानाला उकळते?",
      explanationEn: "Water boils at 100°C under normal atmospheric pressure. This is the boiling point of water.",
      explanationMr: "पाणी सामान्य वातावरणीय दाबावर १००°C तापमानाला उकळते. हे पाण्याचे उत्कलनबिंदू आहे.",
      options: [
        { label: "A", textEn: "80°C", textMr: "८०°C", isCorrect: false },
        { label: "B", textEn: "90°C", textMr: "९०°C", isCorrect: false },
        { label: "C", textEn: "100°C", textMr: "१००°C", isCorrect: true },
        { label: "D", textEn: "110°C", textMr: "११०°C", isCorrect: false },
      ],
    },
    {
      textEn: "Which is the topmost layer of soil?",
      textMr: "जमिनीची उपरती थर कोणती?",
      explanationEn:
        "The topmost layer of soil is called 'Topsoil'. It is rich in organic matter and is important for agriculture.",
      explanationMr:
        "जमिनीची सर्वात वरची थर 'मृदा' (Topsoil) असते. ती सेंद्रिय पदार्थांनी समृद्ध असते व शेतीसाठी महत्त्वाची आहे.",
      options: [
        { label: "A", textEn: "Subsoil", textMr: "उपमृदा", isCorrect: false },
        { label: "B", textEn: "Bedrock", textMr: "शिलाखंड", isCorrect: false },
        { label: "C", textEn: "Topsoil", textMr: "मृदा", isCorrect: true },
        { label: "D", textEn: "Rock", textMr: "खडक", isCorrect: false },
      ],
    },
    {
      textEn: "What are organisms that make their own food called?",
      textMr: "स्वतः अन्न तयार करणाऱ्या सजीवांना काय म्हणतात?",
      explanationEn: "Autotrophs produce their own food. Plants are the primary example — they perform photosynthesis.",
      explanationMr: "स्वयंपोषी सजीव स्वतः अन्न तयार करतात. वनस्पती हे प्रमुख उदाहरण आहे — त्या प्रकाशसंश्लेषण करतात.",
      options: [
        { label: "A", textEn: "Heterotrophs", textMr: "विषमपोषी", isCorrect: false },
        { label: "B", textEn: "Autotrophs", textMr: "स्वयंपोषी", isCorrect: true },
        { label: "C", textEn: "Parasites", textMr: "परजीवी", isCorrect: false },
        { label: "D", textEn: "Saprophytes", textMr: "मृतोपजीवी", isCorrect: false },
      ],
    },
    {
      textEn: "Which acid is produced in the stomach?",
      textMr: "आमाशयात कोणते आम्ल तयार होते?",
      explanationEn: "Hydrochloric acid (HCl) is produced in the stomach. It helps digest food and kills germs.",
      explanationMr: "आमाशयात हायड्रोक्लोरिक आम्ल (HCl) तयार होते. हे अन्नाचे पचन करण्यास मदत करते व जंतूंना मारते.",
      options: [
        { label: "A", textEn: "Sulphuric acid", textMr: "सल्फ्युरिक आम्ल", isCorrect: false },
        { label: "B", textEn: "Nitric acid", textMr: "नायट्रिक आम्ल", isCorrect: false },
        { label: "C", textEn: "Hydrochloric acid", textMr: "हायड्रोक्लोरिक आम्ल", isCorrect: true },
        { label: "D", textEn: "Acetic acid", textMr: "ऍसिटिक आम्ल", isCorrect: false },
      ],
    },
    {
      textEn: "What fluid does the liver produce?",
      textMr: "यकृत (Liver) कोणते रस तयार करते?",
      explanationEn: "The liver produces bile juice. Bile juice helps in the digestion of fats.",
      explanationMr: "यकृत पित्त रस (Bile juice) तयार करते. पित्त रस चरबीचे पचन करण्यास मदत करतो.",
      options: [
        { label: "A", textEn: "Gastric juice", textMr: "जठर रस", isCorrect: false },
        { label: "B", textEn: "Bile juice", textMr: "पित्त रस", isCorrect: true },
        { label: "C", textEn: "Pancreatic juice", textMr: "स्वादुपिंड रस", isCorrect: false },
        { label: "D", textEn: "Saliva", textMr: "लाळ", isCorrect: false },
      ],
    },
    {
      textEn: "What is food adulteration?",
      textMr: "अन्नभेसळ म्हणजे काय?",
      explanationEn:
        "Food adulteration means adding harmful, inferior or fake substances to food to increase quantity or profit.",
      explanationMr: "अन्नभेसळ म्हणजे अन्नात हानिकारक, कमी दर्जाचे किंवा बनावट पदार्थ मिसळणे होय.",
      options: [
        { label: "A", textEn: "Cooking food", textMr: "अन्न शिजवणे", isCorrect: false },
        { label: "B", textEn: "Adding impure substances to food", textMr: "अन्नात अशुद्ध पदार्थ मिसळणे", isCorrect: true },
        { label: "C", textEn: "Storing food", textMr: "अन्न साठवणे", isCorrect: false },
        { label: "D", textEn: "Serving food", textMr: "अन्न वाढवणे", isCorrect: false },
      ],
    },
    {
      textEn: "What does FSSAI stand for?",
      textMr: "FSSAI म्हणजे काय?",
      explanationEn:
        "FSSAI stands for Food Safety and Standards Authority of India. It regulates and supervises food safety in India.",
      explanationMr:
        "FSSAI म्हणजे Food Safety and Standards Authority of India. हे भारतातील अन्न सुरक्षा नियंत्रण संस्था आहे.",
      options: [
        {
          label: "A",
          textEn: "Food Safety and Standards Authority of India",
          textMr: "Food Safety and Standards Authority of India",
          isCorrect: true,
        },
        {
          label: "B",
          textEn: "Food Supply and Storage Authority of India",
          textMr: "Food Supply and Storage Authority of India",
          isCorrect: false,
        },
        {
          label: "C",
          textEn: "Federal Standard for Safe Agriculture India",
          textMr: "Federal Standard for Safe Agriculture India",
          isCorrect: false,
        },
        {
          label: "D",
          textEn: "Food Service and Sanitation Authority of India",
          textMr: "Food Service and Sanitation Authority of India",
          isCorrect: false,
        },
      ],
    },
    {
      textEn: "Iodine test is performed to detect which substance?",
      textMr: "आयोडिन चाचणी कशासाठी केली जाते?",
      explanationEn:
        "Iodine solution turns blue-black in the presence of starch. This test is used to detect the presence of starch in food.",
      explanationMr:
        "आयोडिन द्रावण पिष्टमय पदार्थाच्या (Starch) संपर्कात आल्यास निळा-काळा रंग येतो. या चाचणीने स्टार्चची उपस्थिती ओळखता येते.",
      options: [
        { label: "A", textEn: "Proteins", textMr: "प्रथिने", isCorrect: false },
        { label: "B", textEn: "Fats", textMr: "स्निग्ध पदार्थ", isCorrect: false },
        { label: "C", textEn: "Starch", textMr: "पिष्टमय पदार्थ", isCorrect: true },
        { label: "D", textEn: "Sugar", textMr: "साखर", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of length?",
      textMr: "SI पद्धतीत लांबीचे एकक काय आहे?",
      explanationEn: "The SI unit of length is metre (m). The international SI system has seven fundamental units.",
      explanationMr: "SI पद्धतीत लांबीचे एकक मीटर (m) आहे. आंतरराष्ट्रीय SI पद्धतीत सात मूलभूत एकके आहेत.",
      options: [
        { label: "A", textEn: "Kilogram", textMr: "किलोग्राम", isCorrect: false },
        { label: "B", textEn: "Metre", textMr: "मीटर", isCorrect: true },
        { label: "C", textEn: "Second", textMr: "सेकंद", isCorrect: false },
        { label: "D", textEn: "Kelvin", textMr: "केल्विन", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of mass?",
      textMr: "द्रव्यमानाचे SI एकक कोणते?",
      explanationEn: "The SI unit of mass is kilogram (kg). It is one of the seven fundamental SI units.",
      explanationMr: "SI पद्धतीत द्रव्यमानाचे एकक किलोग्राम (kg) आहे. हे सात मूलभूत SI एककांपैकी एक आहे.",
      options: [
        { label: "A", textEn: "Newton", textMr: "न्यूटन", isCorrect: false },
        { label: "B", textEn: "Metre", textMr: "मीटर", isCorrect: false },
        { label: "C", textEn: "Kilogram", textMr: "किलोग्राम", isCorrect: true },
        { label: "D", textEn: "Litre", textMr: "लिटर", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of time?",
      textMr: "वेळाचे SI एकक काय आहे?",
      explanationEn: "The SI unit of time is second (s). One second is defined based on cesium-133 atomic vibrations.",
      explanationMr:
        "SI पद्धतीत वेळाचे एकक सेकंद (s) आहे. एक सेकंद म्हणजे सीझियम-133 अणूच्या 9,192,631,770 कंपनांचा काळ.",
      options: [
        { label: "A", textEn: "Minute", textMr: "मिनिट", isCorrect: false },
        { label: "B", textEn: "Hour", textMr: "तास", isCorrect: false },
        { label: "C", textEn: "Second", textMr: "सेकंद", isCorrect: true },
        { label: "D", textEn: "Day", textMr: "दिवस", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of work?",
      textMr: "कार्याचे SI एकक कोणते?",
      explanationEn:
        "The SI unit of work is Joule (J). Work of one Joule is done when a force of one Newton moves an object by one metre.",
      explanationMr:
        "कार्याचे SI एकक जूल (J) आहे. जेव्हा एक न्यूटन बल एक मीटर अंतरापर्यंत वस्तू हलवते, तेव्हा एक जूल कार्य होते.",
      options: [
        { label: "A", textEn: "Newton", textMr: "न्यूटन", isCorrect: false },
        { label: "B", textEn: "Watt", textMr: "वॅट", isCorrect: false },
        { label: "C", textEn: "Joule", textMr: "जूल", isCorrect: true },
        { label: "D", textEn: "Pascal", textMr: "पास्कल", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of force?",
      textMr: "बलाचे SI एकक कोणते?",
      explanationEn:
        "The SI unit of force is Newton (N). One Newton is the force that gives 1 kg mass an acceleration of 1 m/s².",
      explanationMr:
        "बलाचे SI एकक न्यूटन (N) आहे. एक न्यूटन बल म्हणजे एका किलोग्राम वस्तूला एक m/s² त्वरण देणारे बल.",
      options: [
        { label: "A", textEn: "Joule", textMr: "जूल", isCorrect: false },
        { label: "B", textEn: "Newton", textMr: "न्यूटन", isCorrect: true },
        { label: "C", textEn: "Watt", textMr: "वॅट", isCorrect: false },
        { label: "D", textEn: "Kilogram", textMr: "किलोग्राम", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of speed?",
      textMr: "वेगाचे SI एकक कोणते?",
      explanationEn: "The SI unit of speed is m/s (metre per second). It is the ratio of distance to time.",
      explanationMr: "वेगाचे SI एकक m/s (मीटर प्रति सेकंद) आहे. हे अंतर व वेळाच्या गुणोत्तरावर अवलंबून असते.",
      options: [
        { label: "A", textEn: "m/s²", textMr: "m/s²", isCorrect: false },
        { label: "B", textEn: "km/h", textMr: "km/h", isCorrect: false },
        { label: "C", textEn: "m/s", textMr: "m/s", isCorrect: true },
        { label: "D", textEn: "N", textMr: "N", isCorrect: false },
      ],
    },
    {
      textEn: "What charge does rubber acquire when rubbed with wool?",
      textMr: "रबर घासल्यावर कोणता विद्युत भार निर्माण होतो?",
      explanationEn:
        "Rubber acquires negative charge when rubbed with wool because it gains electrons from the wool.",
      explanationMr:
        "रबर ऊनी कापडाने घासल्यावर त्यावर ऋण (ऋणात्मक) विद्युत भार निर्माण होतो कारण ते इलेक्ट्रॉन स्वीकारते.",
      options: [
        { label: "A", textEn: "Positive charge", textMr: "धन भार", isCorrect: false },
        { label: "B", textEn: "Negative charge", textMr: "ऋण भार", isCorrect: true },
        { label: "C", textEn: "Neutral", textMr: "तटस्थ", isCorrect: false },
        { label: "D", textEn: "No electricity", textMr: "विद्युत नाही", isCorrect: false },
      ],
    },
    {
      textEn: "What happens between like charges?",
      textMr: "सजातीय विद्युत भारांमध्ये काय होते?",
      explanationEn: "Like charges (both positive or both negative) repel each other. Unlike charges attract each other.",
      explanationMr: "सजातीय विद्युत भार (दोन्ही धन किंवा दोन्ही ऋण) एकमेकांना दूर ढकलतात — प्रतिकर्षण होते.",
      options: [
        { label: "A", textEn: "Attraction", textMr: "आकर्षण", isCorrect: false },
        { label: "B", textEn: "Repulsion", textMr: "प्रतिकर्षण", isCorrect: true },
        { label: "C", textEn: "No reaction", textMr: "कोणतीही क्रिया नाही", isCorrect: false },
        { label: "D", textEn: "Combination", textMr: "संयोग", isCorrect: false },
      ],
    },
    {
      textEn: "The phenomenon of electric discharge in nature is called?",
      textMr: "विजेची विसर्जन क्रिया कशाला म्हणतात?",
      explanationEn:
        "The electric charge accumulated in clouds discharges toward the earth or another cloud, called lightning.",
      explanationMr:
        "ढगांमध्ये जमा झालेला विद्युत भार पृथ्वीकडे किंवा दुसऱ्या ढगाकडे विसर्जित होतो, त्यास विद्युत विसर्जन (Lightning) म्हणतात.",
      options: [
        { label: "A", textEn: "Rainbow", textMr: "इंद्रधनुष्य", isCorrect: false },
        { label: "B", textEn: "Cyclone", textMr: "चक्रीवादळ", isCorrect: false },
        { label: "C", textEn: "Lightning", textMr: "विद्युत विसर्जन", isCorrect: true },
        { label: "D", textEn: "Earthquake", textMr: "भूकंप", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of heat?",
      textMr: "उष्णतेचे SI एकक काय आहे?",
      explanationEn: "The SI unit of heat is Joule (J). Since heat is a form of energy, its SI unit is also Joule.",
      explanationMr: "उष्णतेचे SI एकक जूल (J) आहे. उष्णता ही ऊर्जेचा एक प्रकार असल्याने तिचे एकक जूल आहे.",
      options: [
        { label: "A", textEn: "Calorie", textMr: "कॅलरी", isCorrect: false },
        { label: "B", textEn: "Joule", textMr: "जूल", isCorrect: true },
        { label: "C", textEn: "Watt", textMr: "वॅट", isCorrect: false },
        { label: "D", textEn: "Kelvin", textMr: "केल्विन", isCorrect: false },
      ],
    },
    {
      textEn: "How many modes of heat transfer are there?",
      textMr: "उष्णता वाहनाचे किती प्रकार आहेत?",
      explanationEn: "There are three modes of heat transfer: Conduction, Convection, and Radiation.",
      explanationMr: "उष्णता वाहनाचे तीन प्रकार आहेत: वहन (Conduction), संवहन (Convection) आणि किरणोत्सर्ग (Radiation).",
      options: [
        { label: "A", textEn: "Two", textMr: "दोन", isCorrect: false },
        { label: "B", textEn: "Three", textMr: "तीन", isCorrect: true },
        { label: "C", textEn: "Four", textMr: "चार", isCorrect: false },
        { label: "D", textEn: "Five", textMr: "पाच", isCorrect: false },
      ],
    },
    {
      textEn: "What is the specific heat capacity of water?",
      textMr: "पाण्याचा विशिष्ट उष्णता धारणक्षमता किती आहे?",
      explanationEn: "The specific heat capacity of water is 4200 J/kg°C. This is an important property of water.",
      explanationMr: "पाण्याची विशिष्ट उष्णता धारणक्षमता 4200 J/kg°C आहे. हे पाण्याचे महत्त्वाचे गुणधर्म आहे.",
      options: [
        { label: "A", textEn: "1000 J/kg°C", textMr: "1000 J/kg°C", isCorrect: false },
        { label: "B", textEn: "2100 J/kg°C", textMr: "2100 J/kg°C", isCorrect: false },
        { label: "C", textEn: "4200 J/kg°C", textMr: "4200 J/kg°C", isCorrect: true },
        { label: "D", textEn: "8400 J/kg°C", textMr: "8400 J/kg°C", isCorrect: false },
      ],
    },
    {
      textEn: "Which scale is used to measure the intensity of earthquakes?",
      textMr: "भूकंपाची तीव्रता मोजण्यासाठी कोणता मापक वापरतात?",
      explanationEn:
        "Earthquake intensity is measured on the Richter scale. Earthquakes above 7 on this scale are very destructive.",
      explanationMr:
        "भूकंपाची तीव्रता रिश्टर मापकाने मोजतात. या मापकावर ७ पेक्षा जास्त तीव्रतेचे भूकंप खूप विध्वंसक असतात.",
      options: [
        { label: "A", textEn: "Beaufort scale", textMr: "ब्युफोर्ट मापक", isCorrect: false },
        { label: "B", textEn: "Richter scale", textMr: "रिश्टर मापक", isCorrect: true },
        { label: "C", textEn: "Celsius scale", textMr: "सेल्सियस मापक", isCorrect: false },
        { label: "D", textEn: "Decibel scale", textMr: "डेसिबल मापक", isCorrect: false },
      ],
    },
    {
      textEn: "What does NDRF stand for?",
      textMr: "NDRF म्हणजे काय?",
      explanationEn:
        "NDRF stands for National Disaster Response Force. It is a specially trained force for emergency situations in India.",
      explanationMr:
        "NDRF म्हणजे National Disaster Response Force. हे भारतातील आपत्कालीन परिस्थितींसाठी विशेष प्रशिक्षित दल आहे.",
      options: [
        { label: "A", textEn: "National Disaster Response Force", textMr: "National Disaster Response Force", isCorrect: true },
        { label: "B", textEn: "National Defence Reserve Force", textMr: "National Defence Reserve Force", isCorrect: false },
        { label: "C", textEn: "Natural Disaster Relief Force", textMr: "Natural Disaster Relief Force", isCorrect: false },
        { label: "D", textEn: "National Development Relief Fund", textMr: "National Development Relief Fund", isCorrect: false },
      ],
    },
    {
      textEn: "What should you do during a flood?",
      textMr: "पूर आल्यास काय करावे?",
      explanationEn: "During a flood, going to higher ground is the safest option. Going near rivers is very dangerous.",
      explanationMr: "पूर आल्यास उंच ठिकाणी जाणे सर्वात सुरक्षित आहे. नदीजवळ जाणे अतिशय धोकादायक आहे.",
      options: [
        { label: "A", textEn: "Stay in a tall building", textMr: "उंच इमारतीत थांबावे", isCorrect: true },
        { label: "B", textEn: "Swim in the river", textMr: "नदीत पोहावे", isCorrect: false },
        { label: "C", textEn: "Go to low-lying areas", textMr: "सखल भागात जावे", isCorrect: false },
        { label: "D", textEn: "Keep doors open", textMr: "घराचे दरवाजे उघडे ठेवावे", isCorrect: false },
      ],
    },
    {
      textEn: "Who discovered cells?",
      textMr: "पेशींचा शोध कोणी लावला?",
      explanationEn:
        "Robert Hooke discovered cells in 1665 when he observed cork under a microscope and named them 'cells'.",
      explanationMr:
        "रॉबर्ट हुक यांनी १६६५ मध्ये कॉर्कच्या तुकड्यात पेशी पाहिल्या व त्यांना 'Cell' असे नाव दिले.",
      options: [
        { label: "A", textEn: "Louis Pasteur", textMr: "लुई पाश्चर", isCorrect: false },
        { label: "B", textEn: "Robert Hooke", textMr: "रॉबर्ट हुक", isCorrect: true },
        { label: "C", textEn: "Gregor Mendel", textMr: "ग्रेगर मेंडेल", isCorrect: false },
        { label: "D", textEn: "Charles Darwin", textMr: "चार्ल्स डार्विन", isCorrect: false },
      ],
    },
    {
      textEn: "What do plant cells have that animal cells do not?",
      textMr: "वनस्पती पेशींमध्ये काय असते जे प्राणी पेशींमध्ये नसते?",
      explanationEn: "Plant cells have a cell wall made of cellulose, which is absent in animal cells.",
      explanationMr: "वनस्पती पेशींमध्ये सेल्युलोजची पेशीभित्तिका (Cell wall) असते, जी प्राणी पेशींमध्ये नसते.",
      options: [
        { label: "A", textEn: "Nucleus", textMr: "केंद्रक", isCorrect: false },
        { label: "B", textEn: "Cell wall", textMr: "पेशीभित्तिका", isCorrect: true },
        { label: "C", textEn: "Mitochondria", textMr: "माइटोकॉन्ड्रिया", isCorrect: false },
        { label: "D", textEn: "Ribosomes", textMr: "रायबोझोम", isCorrect: false },
      ],
    },
    {
      textEn: "What type of cells are bacteria?",
      textMr: "जीवाणू कोणत्या प्रकारच्या पेशी असतात?",
      explanationEn: "Bacteria are prokaryotic cells, meaning they lack a well-defined nucleus. They are unicellular organisms.",
      explanationMr: "जीवाणू प्रोकेरियोटिक पेशी असतात, म्हणजे त्यांना सुस्पष्ट केंद्रक नसते. ते एकपेशीय जीव आहेत.",
      options: [
        { label: "A", textEn: "Eukaryotic", textMr: "युकेरियोटिक", isCorrect: false },
        { label: "B", textEn: "Prokaryotic", textMr: "प्रोकेरियोटिक", isCorrect: true },
        { label: "C", textEn: "Multicellular", textMr: "बहुपेशीय", isCorrect: false },
        { label: "D", textEn: "Plant cells", textMr: "वनस्पती पेशी", isCorrect: false },
      ],
    },
    {
      textEn: "Which is the largest gland in the human body?",
      textMr: "मानवी शरीरातील सर्वात मोठी ग्रंथी कोणती?",
      explanationEn:
        "The liver is the largest gland in the human body. It produces bile juice and plays an important role in metabolism.",
      explanationMr:
        "यकृत (Liver) हे मानवी शरीरातील सर्वात मोठे ग्रंथी आहे. ते पित्त रस तयार करते व चयापचयात महत्त्वाची भूमिका बजावते.",
      options: [
        { label: "A", textEn: "Stomach", textMr: "जठर", isCorrect: false },
        { label: "B", textEn: "Pancreas", textMr: "स्वादुपिंड", isCorrect: false },
        { label: "C", textEn: "Liver", textMr: "यकृत", isCorrect: true },
        { label: "D", textEn: "Kidney", textMr: "मूत्रपिंड", isCorrect: false },
      ],
    },
    {
      textEn: "Where does digestion of food begin?",
      textMr: "अन्नाचे पचन कुठून सुरू होते?",
      explanationEn: "Digestion begins in the mouth. The enzyme amylase in saliva starts digesting starchy foods.",
      explanationMr: "अन्नाचे पचन तोंडापासून सुरू होते. लाळेतील अमायलेस एंझाइम पिष्टमय पदार्थांचे पचन करते.",
      options: [
        { label: "A", textEn: "Stomach", textMr: "आमाशय", isCorrect: false },
        { label: "B", textEn: "Small intestine", textMr: "लहान आतडे", isCorrect: false },
        { label: "C", textEn: "Mouth", textMr: "तोंड", isCorrect: true },
        { label: "D", textEn: "Large intestine", textMr: "मोठे आतडे", isCorrect: false },
      ],
    },
    {
      textEn: "How many types of muscles are there?",
      textMr: "स्नायूंचे किती प्रकार आहेत?",
      explanationEn: "There are three types of muscles: Voluntary (skeletal), Involuntary (smooth), and Cardiac muscles.",
      explanationMr:
        "स्नायूंचे तीन प्रकार आहेत: ऐच्छिक स्नायू (Voluntary), अनैच्छिक स्नायू (Involuntary) आणि हृदय स्नायू (Cardiac).",
      options: [
        { label: "A", textEn: "Two", textMr: "दोन", isCorrect: false },
        { label: "B", textEn: "Three", textMr: "तीन", isCorrect: true },
        { label: "C", textEn: "Four", textMr: "चार", isCorrect: false },
        { label: "D", textEn: "Five", textMr: "पाच", isCorrect: false },
      ],
    },
    {
      textEn: "Melting of ice into water is an example of which type of change?",
      textMr: "बर्फाचे पाण्यात रूपांतर हे कोणते बदल आहे?",
      explanationEn: "Melting of ice is a physical change because the chemical properties do not change and it is reversible.",
      explanationMr:
        "बर्फाचे पाण्यात होणारे रूपांतर भौतिक बदल आहे कारण पदार्थाचे रासायनिक गुणधर्म बदलत नाहीत व हे बदल परत आणता येतो.",
      options: [
        { label: "A", textEn: "Chemical change", textMr: "रासायनिक बदल", isCorrect: false },
        { label: "B", textEn: "Physical change", textMr: "भौतिक बदल", isCorrect: true },
        { label: "C", textEn: "Biological change", textMr: "जैविक बदल", isCorrect: false },
        { label: "D", textEn: "Irreversible change", textMr: "अपरिवर्तनीय बदल", isCorrect: false },
      ],
    },
    {
      textEn: "Conversion of milk into curd is an example of which type of change?",
      textMr: "दुधाचे दह्यात रूपांतर हे कोणते बदल आहे?",
      explanationEn:
        "Conversion of milk into curd is a chemical change because a new substance is formed and it cannot be reversed.",
      explanationMr:
        "दुधाचे दह्यात रूपांतर हे रासायनिक बदल आहे कारण यात नवीन पदार्थ तयार होतो व हे बदल परत आणता येत नाही.",
      options: [
        { label: "A", textEn: "Physical change", textMr: "भौतिक बदल", isCorrect: false },
        { label: "B", textEn: "Chemical change", textMr: "रासायनिक बदल", isCorrect: true },
        { label: "C", textEn: "Reversible change", textMr: "उत्क्रमणीय बदल", isCorrect: false },
        { label: "D", textEn: "No change", textMr: "कोणताही बदल नाही", isCorrect: false },
      ],
    },
    {
      textEn: "Water is which type of substance?",
      textMr: "पाणी हे कोणत्या प्रकारचा पदार्थ आहे?",
      explanationEn: "Water (H2O) is a compound of hydrogen and oxygen. In a compound, elements are in fixed proportions.",
      explanationMr: "पाणी (H₂O) हे हायड्रोजन आणि ऑक्सिजन या दोन मूलद्रव्यांचे संयुग आहे. संयुगात घटक विशिष्ट प्रमाणात असतात.",
      options: [
        { label: "A", textEn: "Element", textMr: "मूलद्रव्य", isCorrect: false },
        { label: "B", textEn: "Compound", textMr: "संयुग", isCorrect: true },
        { label: "C", textEn: "Mixture", textMr: "मिश्रण", isCorrect: false },
        { label: "D", textEn: "Solution", textMr: "द्राव", isCorrect: false },
      ],
    },
    {
      textEn: "Air is which type of substance?",
      textMr: "हवा हे कोणत्या प्रकारचा पदार्थ आहे?",
      explanationEn:
        "Air is a mixture of gases — nitrogen, oxygen, carbon dioxide and others. In a mixture, components can be in any proportion.",
      explanationMr:
        "हवा हे वायूंचे मिश्रण आहे — नायट्रोजन, ऑक्सिजन, कार्बन डायऑक्साइड व इतर वायू. मिश्रणात घटक कोणत्याही प्रमाणात असू शकतात.",
      options: [
        { label: "A", textEn: "Element", textMr: "मूलद्रव्य", isCorrect: false },
        { label: "B", textEn: "Compound", textMr: "संयुग", isCorrect: false },
        { label: "C", textEn: "Mixture", textMr: "मिश्रण", isCorrect: true },
        { label: "D", textEn: "Solution", textMr: "द्राव", isCorrect: false },
      ],
    },
    {
      textEn: "Gold is which type of substance?",
      textMr: "सोने हे कोणत्या प्रकारचा पदार्थ आहे?",
      explanationEn: "Gold (Au) is an element. An element cannot be broken down into simpler substances by chemical means.",
      explanationMr:
        "सोने (Au) हे एक मूलद्रव्य आहे. मूलद्रव्य म्हणजे असा पदार्थ जो रासायनिक पद्धतीने अधिक सोप्या पदार्थात विभागता येत नाही.",
      options: [
        { label: "A", textEn: "Element", textMr: "मूलद्रव्य", isCorrect: true },
        { label: "B", textEn: "Compound", textMr: "संयुग", isCorrect: false },
        { label: "C", textEn: "Mixture", textMr: "मिश्रण", isCorrect: false },
        { label: "D", textEn: "Solution", textMr: "द्राव", isCorrect: false },
      ],
    },
    {
      textEn: "Which is an example of a good conductor of electricity?",
      textMr: "विद्युत वाहक पदार्थाचे उदाहरण कोणते?",
      explanationEn: "Copper is an excellent conductor of electricity. That's why copper is used in electrical wires.",
      explanationMr: "तांबे (Copper) हा विद्युताचा उत्कृष्ट वाहक आहे. म्हणूनच विद्युत तारांमध्ये तांब्याचा वापर केला जातो.",
      options: [
        { label: "A", textEn: "Rubber", textMr: "रबर", isCorrect: false },
        { label: "B", textEn: "Glass", textMr: "काच", isCorrect: false },
        { label: "C", textEn: "Copper", textMr: "तांबे", isCorrect: true },
        { label: "D", textEn: "Wood", textMr: "लाकूड", isCorrect: false },
      ],
    },
    {
      textEn: "Plastic is a material with which property?",
      textMr: "प्लास्टिक हे कोणत्या गुणधर्माचे पदार्थ आहे?",
      explanationEn:
        "Plastic is a non-biodegradable material, meaning it does not decompose naturally. This makes it harmful to the environment.",
      explanationMr:
        "प्लास्टिक हे अविघटनशील (Non-biodegradable) पदार्थ आहे, म्हणजे ते नैसर्गिकरित्या विघटित होत नाही. हे पर्यावरणासाठी हानिकारक आहे.",
      options: [
        { label: "A", textEn: "Biodegradable", textMr: "नैसर्गिकरित्या विघटनशील", isCorrect: false },
        { label: "B", textEn: "Non-biodegradable", textMr: "अविघटनशील", isCorrect: true },
        { label: "C", textEn: "Electrical conductor", textMr: "विद्युत वाहक", isCorrect: false },
        { label: "D", textEn: "Magnetic", textMr: "चुंबकीय", isCorrect: false },
      ],
    },
    {
      textEn: "Which is an example of a renewable energy source?",
      textMr: "अक्षय ऊर्जास्रोताचे उदाहरण कोणते?",
      explanationEn:
        "Solar energy is a renewable energy source because it will never run out. Energy from the sun is continuously available.",
      explanationMr: "सौर ऊर्जा हे अक्षय ऊर्जास्रोत आहे कारण ती संपणार नाही. सूर्यापासून सतत ऊर्जा मिळत राहते.",
      options: [
        { label: "A", textEn: "Coal", textMr: "कोळसा", isCorrect: false },
        { label: "B", textEn: "Petrol", textMr: "पेट्रोल", isCorrect: false },
        { label: "C", textEn: "Solar energy", textMr: "सौर ऊर्जा", isCorrect: true },
        { label: "D", textEn: "Natural gas", textMr: "नैसर्गिक वायू", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main cause of water pollution?",
      textMr: "जल प्रदूषणाचे मुख्य कारण काय?",
      explanationEn:
        "Industrial effluents, chemicals, and domestic sewage discharged into rivers and lakes cause water pollution.",
      explanationMr: "कारखान्यांचे सांडपाणी, रसायने व घरगुती सांडपाणी नदी-तलावात सोडल्याने जल प्रदूषण होते.",
      options: [
        { label: "A", textEn: "Planting trees", textMr: "झाडे लावणे", isCorrect: false },
        { label: "B", textEn: "Industrial effluents", textMr: "कारखान्यांचे सांडपाणी", isCorrect: true },
        { label: "C", textEn: "Rain", textMr: "पाऊस", isCorrect: false },
        { label: "D", textEn: "Air", textMr: "वायू", isCorrect: false },
      ],
    },
    {
      textEn: "According to the law of reflection, what is the relationship between angle of incidence and angle of reflection?",
      textMr: "प्रकाशाचा परावर्तन नियमानुसार आपाती कोन व परावर्तित कोन यांचे नाते काय?",
      explanationEn: "According to the law of reflection, the angle of incidence always equals the angle of reflection.",
      explanationMr:
        "परावर्तनाच्या नियमानुसार आपाती कोन (Angle of incidence) आणि परावर्तित कोन (Angle of reflection) नेहमी समान असतात.",
      options: [
        { label: "A", textEn: "Incidence angle is larger", textMr: "आपाती कोन मोठा असतो", isCorrect: false },
        { label: "B", textEn: "Reflection angle is larger", textMr: "परावर्तित कोन मोठा असतो", isCorrect: false },
        { label: "C", textEn: "Both angles are equal", textMr: "दोन्ही कोन समान असतात", isCorrect: true },
        { label: "D", textEn: "No relationship", textMr: "त्यांचा कोणताही संबंध नाही", isCorrect: false },
      ],
    },
    {
      textEn: "Convex lens is used for?",
      textMr: "बहिर्गोल भिंग कशासाठी वापरतात?",
      explanationEn: "A convex lens converges light. When an object is placed close to it, it appears magnified and erect.",
      explanationMr: "बहिर्गोल (Convex) भिंग प्रकाशाचे अभिसरण करते. भिंगाजवळ वस्तू ठेवल्यास ती मोठी व सरळ दिसते.",
      options: [
        { label: "A", textEn: "Magnifying nearby objects", textMr: "जवळच्या वस्तू मोठ्या दाखवण्यासाठी", isCorrect: true },
        { label: "B", textEn: "Showing distant objects", textMr: "दूरच्या वस्तू दाखवण्यासाठी", isCorrect: false },
        { label: "C", textEn: "Making objects appear smaller", textMr: "वस्तू लहान दाखवण्यासाठी", isCorrect: false },
        { label: "D", textEn: "Dispersing light", textMr: "प्रकाश विखुरण्यासाठी", isCorrect: false },
      ],
    },
    {
      textEn: "What is the SI unit of sound intensity?",
      textMr: "ध्वनीचे SI एकक काय आहे?",
      explanationEn: "The unit of sound intensity is Decibel (dB). The unit of frequency of sound is Hertz (Hz).",
      explanationMr: "ध्वनीच्या तीव्रतेचे एकक डेसिबल (dB) आहे. ध्वनीच्या वारंवारतेचे एकक हर्ट्झ (Hz) असते.",
      options: [
        { label: "A", textEn: "Hertz", textMr: "हर्ट्झ", isCorrect: false },
        { label: "B", textEn: "Watt", textMr: "वॅट", isCorrect: false },
        { label: "C", textEn: "Decibel", textMr: "डेसिबल", isCorrect: true },
        { label: "D", textEn: "Newton", textMr: "न्यूटन", isCorrect: false },
      ],
    },
    {
      textEn: "Through which medium does sound travel?",
      textMr: "ध्वनी कशाद्वारे प्रसारित होतो?",
      explanationEn: "Sound travels through solid, liquid, and gaseous media, but cannot travel through vacuum.",
      explanationMr: "ध्वनी घन, द्रव आणि वायू या तिन्ही माध्यमांतून प्रसारित होतो, परंतु निर्वातात होत नाही.",
      options: [
        { label: "A", textEn: "Vacuum", textMr: "निर्वात", isCorrect: false },
        { label: "B", textEn: "Gas only", textMr: "वायू", isCorrect: false },
        { label: "C", textEn: "Solid, liquid and gas", textMr: "घन, द्रव व वायू", isCorrect: true },
        { label: "D", textEn: "Light", textMr: "प्रकाश", isCorrect: false },
      ],
    },
    {
      textEn: "How many poles does a magnet have?",
      textMr: "चुंबकाचे किती ध्रुव असतात?",
      explanationEn: "A magnet has two poles: North pole (N) and South pole (S). The two poles of a magnet cannot be separated.",
      explanationMr: "चुंबकाला दोन ध्रुव असतात: उत्तर ध्रुव (N) आणि दक्षिण ध्रुव (S). चुंबकाचे दोन ध्रुव वेगळे करता येत नाहीत.",
      options: [
        { label: "A", textEn: "One", textMr: "एक", isCorrect: false },
        { label: "B", textEn: "Two", textMr: "दोन", isCorrect: true },
        { label: "C", textEn: "Three", textMr: "तीन", isCorrect: false },
        { label: "D", textEn: "Four", textMr: "चार", isCorrect: false },
      ],
    },
    {
      textEn: "What happens when two like poles of magnets are brought close together?",
      textMr: "चुंबकाचे समान ध्रुव जवळ आणल्यास काय होते?",
      explanationEn: "Like poles of magnets (N-N or S-S) repel each other, while unlike poles (N-S) attract each other.",
      explanationMr:
        "चुंबकाचे समान ध्रुव (N-N किंवा S-S) जवळ आणल्यास प्रतिकर्षण होते, तर विरुद्ध ध्रुव (N-S) जवळ आणल्यास आकर्षण होते.",
      options: [
        { label: "A", textEn: "Attraction", textMr: "आकर्षण", isCorrect: false },
        { label: "B", textEn: "Repulsion", textMr: "प्रतिकर्षण", isCorrect: true },
        { label: "C", textEn: "Nothing happens", textMr: "काहीही होत नाही", isCorrect: false },
        { label: "D", textEn: "They stick together", textMr: "ते एकत्र चिकटतात", isCorrect: false },
      ],
    },
    {
      textEn: "How is an electromagnet made?",
      textMr: "विद्युत चुंबक कसा तयार होतो?",
      explanationEn: "An electromagnet is made by passing electric current through a wire coil wrapped around an iron core.",
      explanationMr: "विद्युत प्रवाह वाहणाऱ्या तारेच्या कुंडलीभोवती लोखंडाची काडी ठेवल्यास विद्युत चुंबक तयार होतो.",
      options: [
        { label: "A", textEn: "From natural magnet", textMr: "नैसर्गिक चुंबकापासून", isCorrect: false },
        { label: "B", textEn: "By passing current through a wire", textMr: "विद्युत प्रवाह वाहणाऱ्या तारेने", isCorrect: true },
        { label: "C", textEn: "With an iron piece", textMr: "लोखंडाच्या तुकड्याने", isCorrect: false },
        { label: "D", textEn: "With copper", textMr: "तांब्याने", isCorrect: false },
      ],
    },
    {
      textEn: "How long does sunlight take to reach the Earth?",
      textMr: "सूर्यापासून पृथ्वीपर्यंत प्रकाश किती वेळात पोहोचतो?",
      explanationEn: "Sunlight takes approximately 8 minutes and 19 seconds to reach Earth. The speed of light is 3 × 10^8 m/s.",
      explanationMr: "सूर्यापासून पृथ्वीपर्यंत प्रकाश सुमारे ८ मिनिट १९ सेकंदात पोहोचतो. प्रकाशाचा वेग ३ × १०^8 m/s आहे.",
      options: [
        { label: "A", textEn: "About 8 minutes", textMr: "सुमारे ८ मिनिटे", isCorrect: true },
        { label: "B", textEn: "About 8 seconds", textMr: "सुमारे ८ सेकंद", isCorrect: false },
        { label: "C", textEn: "About 8 hours", textMr: "सुमारे ८ तास", isCorrect: false },
        { label: "D", textEn: "About 8 days", textMr: "सुमारे ८ दिवस", isCorrect: false },
      ],
    },
    {
      textEn: "What is our galaxy called?",
      textMr: "आपली आकाशगंगा कोणती आहे?",
      explanationEn: "Our galaxy is called the 'Milky Way'. It contains billions of stars like our Sun.",
      explanationMr: "आपली आकाशगंगा 'मिल्की वे' (आकाशगंगा) आहे. यात सूर्यासारखे अब्जावधी तारे आहेत.",
      options: [
        { label: "A", textEn: "Andromeda", textMr: "अँड्रोमेडा", isCorrect: false },
        { label: "B", textEn: "Milky Way", textMr: "मिल्की वे", isCorrect: true },
        { label: "C", textEn: "Triangulum", textMr: "त्रिकोण", isCorrect: false },
        { label: "D", textEn: "Whirlpool", textMr: "व्हर्लपूल", isCorrect: false },
      ],
    },
    {
      textEn: "Which is the largest planet in the solar system?",
      textMr: "सौरमालेतील सर्वात मोठा ग्रह कोणता?",
      explanationEn: "Jupiter is the largest planet in the solar system. It is about 11 times larger than Earth.",
      explanationMr: "गुरू (Jupiter) हा सौरमालेतील सर्वात मोठा ग्रह आहे. तो पृथ्वीपेक्षा सुमारे ११ पट मोठा आहे.",
      options: [
        { label: "A", textEn: "Saturn", textMr: "शनी", isCorrect: false },
        { label: "B", textEn: "Mars", textMr: "मंगळ", isCorrect: false },
        { label: "C", textEn: "Jupiter", textMr: "गुरू", isCorrect: true },
        { label: "D", textEn: "Neptune", textMr: "नेपच्यून", isCorrect: false },
      ],
    },
  ],
};

export default data;

import type { QuestionSetInput } from "./types";

// Source: All questions & answer/AMVI_Std7_Geo_English.pdf + AMVI_Std7_Geo_Marathi.pdf
// Both PDFs share identical question numbering/options/answers (32 MCQs).
const data: QuestionSetInput = {
  standard: { code: "STD7", nameEn: "Standard 7", nameMr: "इयत्ता ७वी", sortOrder: 7 },
  subject: { code: "GEO", nameEn: "Geography", nameMr: "भूगोल", sortOrder: 1 },
  questions: [
    {
      textEn: "What is the main reason for the formation of seasons?",
      textMr: "ऋतू निर्माण होण्याचे मुख्य कारण काय आहे?",
      explanationEn:
        "Seasons form due to the tilt of Earth's axis (23.5°) combined with its revolution around the Sun.",
      explanationMr:
        "पृथ्वीच्या अक्षाचा कलतेपणा (२३.५°) आणि सूर्याभोवती परिक्रमण यामुळे ऋतू निर्माण होतात.",
      options: [
        { label: "A", textEn: "Earth's revolution", textMr: "पृथ्वीची परिक्रमण गती", isCorrect: false },
        { label: "B", textEn: "Earth's tilted axis and revolution", textMr: "पृथ्वीचा कलता अक्ष व परिक्रमण", isCorrect: true },
        { label: "C", textEn: "Earth's rotation", textMr: "पृथ्वीची परिवलन गती", isCorrect: false },
        { label: "D", textEn: "Moon's gravity", textMr: "चंद्राचे आकर्षण", isCorrect: false },
      ],
    },
    {
      textEn: "When is it summer in the Northern Hemisphere?",
      textMr: "उत्तर गोलार्धात उन्हाळा कधी असतो?",
      explanationEn:
        "In the Northern Hemisphere, summer occurs during June-August because sunlight falls directly on the Northern Hemisphere then.",
      explanationMr:
        "उत्तर गोलार्धात जून-ऑगस्ट या काळात उन्हाळा असतो, कारण या काळात सूर्यप्रकाश उत्तर गोलार्धावर सरळ पडतो.",
      options: [
        { label: "A", textEn: "December — February", textMr: "डिसेंबर — फेब्रुवारी", isCorrect: false },
        { label: "B", textEn: "March — May", textMr: "मार्च — मे", isCorrect: false },
        { label: "C", textEn: "June — August", textMr: "जून — ऑगस्ट", isCorrect: true },
        { label: "D", textEn: "September — November", textMr: "सप्टेंबर — नोव्हेंबर", isCorrect: false },
      ],
    },
    {
      textEn: "When it is summer in the Northern Hemisphere, what season is it in the Southern Hemisphere?",
      textMr: "उत्तर गोलार्धात उन्हाळा असताना दक्षिण गोलार्धात कोणता ऋतू असतो?",
      explanationEn:
        "When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, as both hemispheres have opposite seasons.",
      explanationMr:
        "उत्तर गोलार्धात उन्हाळा असताना दक्षिण गोलार्धात हिवाळा असतो, कारण दोन्ही गोलार्धांत विरुद्ध ऋतू असतात.",
      options: [
        { label: "A", textEn: "Monsoon", textMr: "पावसाळा", isCorrect: false },
        { label: "B", textEn: "Summer", textMr: "उन्हाळा", isCorrect: false },
        { label: "C", textEn: "Winter", textMr: "हिवाळा", isCorrect: true },
        { label: "D", textEn: "Spring", textMr: "वसंत", isCorrect: false },
      ],
    },
    {
      textEn: "When does a solar eclipse occur?",
      textMr: "सूर्यग्रहण कधी होते?",
      explanationEn:
        "A solar eclipse occurs when the Moon comes between the Sun and Earth, blocking sunlight from reaching Earth.",
      explanationMr:
        "सूर्यग्रहण तेव्हा होते जेव्हा चंद्र सूर्य आणि पृथ्वी यांच्यामध्ये येतो आणि सूर्याची प्रकाश पृथ्वीपर्यंत पोहोचत नाही.",
      options: [
        { label: "A", textEn: "Earth between Sun and Moon", textMr: "पृथ्वी सूर्य व चंद्राच्या मध्ये येते", isCorrect: false },
        { label: "B", textEn: "Moon between Sun and Earth", textMr: "चंद्र सूर्य व पृथ्वीच्या मध्ये येते", isCorrect: true },
        { label: "C", textEn: "Moon behind Earth", textMr: "चंद्र पृथ्वीमागे येतो", isCorrect: false },
        { label: "D", textEn: "Sun behind Earth", textMr: "सूर्य पृथ्वीमागे येतो", isCorrect: false },
      ],
    },
    {
      textEn: "When does a lunar eclipse occur?",
      textMr: "चंद्रग्रहण कधी होते?",
      explanationEn:
        "A lunar eclipse occurs when Earth comes between the Sun and Moon. Earth's shadow falls on the Moon.",
      explanationMr:
        "चंद्रग्रहण तेव्हा होते जेव्हा पृथ्वी सूर्य आणि चंद्र यांच्यामध्ये येते. पृथ्वीची सावली चंद्रावर पडते.",
      options: [
        { label: "A", textEn: "Moon between Sun and Earth", textMr: "चंद्र सूर्य व पृथ्वीच्या मध्ये येतो", isCorrect: false },
        { label: "B", textEn: "Earth between Sun and Moon", textMr: "पृथ्वी सूर्य व चंद्राच्या मध्ये येते", isCorrect: true },
        { label: "C", textEn: "Sun behind Earth", textMr: "सूर्य पृथ्वीमागे येतो", isCorrect: false },
        { label: "D", textEn: "Moon hides behind Earth", textMr: "चंद्र पृथ्वीमागे लपतो", isCorrect: false },
      ],
    },
    {
      textEn: "How long does Earth take to complete one revolution around the Sun?",
      textMr: "पृथ्वी सूर्याभोवती एक प्रदक्षिणा किती वेळात पूर्ण करते?",
      explanationEn:
        "Earth completes one revolution around the Sun in approximately 365.25 days. Every 4 years we have a leap year (366 days).",
      explanationMr:
        "पृथ्वी सूर्याभोवती एक प्रदक्षिणा सुमारे ३६५.२५ दिवसात पूर्ण करते. चार वर्षांनी एक लीप वर्ष येते (३६६ दिवस).",
      options: [
        { label: "A", textEn: "24 hours", textMr: "२४ तास", isCorrect: false },
        { label: "B", textEn: "365.25 days", textMr: "३६५.२५ दिवस", isCorrect: true },
        { label: "C", textEn: "27 days", textMr: "२७ दिवस", isCorrect: false },
        { label: "D", textEn: "30 days", textMr: "३० दिवस", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main cause of tides?",
      textMr: "भरती-ओहोटीचे मुख्य कारण काय आहे?",
      explanationEn:
        "Tides are mainly caused by the gravitational pull of the Moon. The Sun also has some influence.",
      explanationMr:
        "भरती-ओहोटी प्रामुख्याने चंद्राच्या गुरुत्वाकर्षणामुळे होते. सूर्याचाही काही प्रमाणात प्रभाव असतो.",
      options: [
        { label: "A", textEn: "Earth's rotation", textMr: "पृथ्वीची परिवलन गती", isCorrect: false },
        { label: "B", textEn: "Gravitational pull of Moon and Sun", textMr: "चंद्र व सूर्याचे गुरुत्वाकर्षण", isCorrect: true },
        { label: "C", textEn: "Effect of winds", textMr: "वाऱ्यांचा प्रभाव", isCorrect: false },
        { label: "D", textEn: "Depth of ocean", textMr: "समुद्राची खोली", isCorrect: false },
      ],
    },
    {
      textEn: "How many high tides and low tides occur in one day?",
      textMr: "एका दिवसात किती भरती-ओहोटी होतात?",
      explanationEn:
        "Generally, there are two high tides and two low tides in one day. Each tide occurs about six hours apart.",
      explanationMr:
        "सामान्यतः एका दिवसात दोन भरती (High tides) आणि दोन ओहोटी (Low tides) होतात. प्रत्येक भरती-ओहोटी सुमारे सहा तासांनंतर येते.",
      options: [
        { label: "A", textEn: "One high and one low tide", textMr: "एक भरती व एक ओहोटी", isCorrect: false },
        { label: "B", textEn: "Two high and two low tides", textMr: "दोन भरती व दोन ओहोटी", isCorrect: true },
        { label: "C", textEn: "Three high and three low tides", textMr: "तीन भरती व तीन ओहोटी", isCorrect: false },
        { label: "D", textEn: "Four high and four low tides", textMr: "चार भरती व चार ओहोटी", isCorrect: false },
      ],
    },
    {
      textEn: "What type of tide occurs during full moon and new moon?",
      textMr: "पूर्ण चंद्र व अमावस्येला कोणत्या प्रकारची भरती येते?",
      explanationEn:
        "During full moon and new moon, the Sun, Moon and Earth align. This causes spring tides — the highest tides.",
      explanationMr:
        "पूर्ण चंद्र (पौर्णिमा) आणि अमावस्या या दिवशी सूर्य, चंद्र आणि पृथ्वी एकरेषेत येतात. यामुळे दीर्घ भरती (Spring tide) येते.",
      options: [
        { label: "A", textEn: "Normal tide", textMr: "नेहमीची भरती", isCorrect: false },
        { label: "B", textEn: "Spring tide", textMr: "दीर्घ भरती", isCorrect: true },
        { label: "C", textEn: "Neap tide", textMr: "लघु भरती", isCorrect: false },
        { label: "D", textEn: "No tide", textMr: "कोणतीही भरती नाही", isCorrect: false },
      ],
    },
    {
      textEn: "What instrument is used to measure air pressure?",
      textMr: "वायुदाब मोजण्याचे उपकरण कोणते?",
      explanationEn: "Barometer is used to measure air pressure. The SI unit of air pressure is Pascal (Pa).",
      explanationMr: "वायुदाब (Air pressure) मोजण्यासाठी बॅरोमीटर वापरतात. वायुदाबाचे SI एकक पास्कल (Pa) आहे.",
      options: [
        { label: "A", textEn: "Thermometer", textMr: "थर्मामीटर", isCorrect: false },
        { label: "B", textEn: "Barometer", textMr: "बॅरोमीटर", isCorrect: true },
        { label: "C", textEn: "Hygrometer", textMr: "हायग्रोमीटर", isCorrect: false },
        { label: "D", textEn: "Anemometer", textMr: "अनिमोमीटर", isCorrect: false },
      ],
    },
    {
      textEn: "Lines joining places of equal air pressure are called?",
      textMr: "समान वायुदाबाच्या ठिकाणांना जोडणाऱ्या रेषांना काय म्हणतात?",
      explanationEn:
        "Lines joining places of equal air pressure are called Isobars. They are shown on weather maps.",
      explanationMr:
        "समान वायुदाबाच्या ठिकाणांना जोडणाऱ्या रेषांना आयसोबार (Isobars) म्हणतात. हे हवामान नकाशांवर दाखवले जातात.",
      options: [
        { label: "A", textEn: "Isobars", textMr: "आयसोबार", isCorrect: true },
        { label: "B", textEn: "Contour lines", textMr: "समोच्च रेषा", isCorrect: false },
        { label: "C", textEn: "Isotherms", textMr: "आयसोथर्म", isCorrect: false },
        { label: "D", textEn: "Meridians", textMr: "मेरिडियन", isCorrect: false },
      ],
    },
    {
      textEn: "What happens to air pressure as altitude increases?",
      textMr: "उंची वाढल्यावर वायुदाबावर काय परिणाम होतो?",
      explanationEn:
        "Air pressure decreases as altitude increases because air density decreases. That's why breathing is difficult at high altitudes.",
      explanationMr:
        "उंची वाढल्यावर वायुदाब कमी होतो कारण वातावरणाची घनता कमी होते. म्हणून डोंगरावर श्वास घेणे कठीण जाते.",
      options: [
        { label: "A", textEn: "Increases", textMr: "वाढतो", isCorrect: false },
        { label: "B", textEn: "Decreases", textMr: "कमी होतो", isCorrect: true },
        { label: "C", textEn: "Remains same", textMr: "समान राहतो", isCorrect: false },
        { label: "D", textEn: "Doubles", textMr: "दुप्पट होतो", isCorrect: false },
      ],
    },
    {
      textEn: "What instrument measures wind speed?",
      textMr: "वाऱ्याच्या वेगाचे मापन कशाने करतात?",
      explanationEn: "Wind speed is measured by an Anemometer. Wind direction is measured by a weather vane.",
      explanationMr: "वाऱ्याचा वेग अनिमोमीटर (Anemometer) या उपकरणाने मोजतात. वाऱ्याची दिशा वेदर वेन (Weather vane) ने मोजतात.",
      options: [
        { label: "A", textEn: "Barometer", textMr: "बॅरोमीटर", isCorrect: false },
        { label: "B", textEn: "Anemometer", textMr: "अनिमोमीटर", isCorrect: true },
        { label: "C", textEn: "Hygrometer", textMr: "हायग्रोमीटर", isCorrect: false },
        { label: "D", textEn: "Thermometer", textMr: "थर्मामीटर", isCorrect: false },
      ],
    },
    {
      textEn: "Where do Trade winds blow?",
      textMr: "व्यापारी वारे (Trade winds) कोठे वाहतात?",
      explanationEn:
        "Trade winds blow in tropical regions (between 23.5°N and 23.5°S). They blow northeast in the Northern and southeast in the Southern Hemisphere.",
      explanationMr:
        "व्यापारी वारे उष्णकटिबंधीय प्रदेशात (२३.५° N ते २३.५° S दरम्यान) वाहतात. ते उत्तर गोलार्धात ईशान्य दिशेने व दक्षिण गोलार्धात आग्नेय दिशेने वाहतात.",
      options: [
        { label: "A", textEn: "Polar regions", textMr: "ध्रुवीय प्रदेशात", isCorrect: false },
        { label: "B", textEn: "Tropical regions", textMr: "उष्णकटिबंधीय प्रदेशात", isCorrect: true },
        { label: "C", textEn: "Temperate regions", textMr: "समशीतोष्ण प्रदेशात", isCorrect: false },
        { label: "D", textEn: "Sub-polar regions", textMr: "उपध्रुवीय प्रदेशात", isCorrect: false },
      ],
    },
    {
      textEn: "Where do monsoon winds originate from?",
      textMr: "मान्सून वारे कोठून येतात?",
      explanationEn:
        "Monsoon winds blow from the sea towards land in summer. Being moisture-laden, they bring rainfall to India.",
      explanationMr: "मान्सून वारे उन्हाळ्यात समुद्रावरून जमिनीकडे येतात. ते आर्द्रतायुक्त असल्याने भारतात पाऊस पाडतात.",
      options: [
        { label: "A", textEn: "From land", textMr: "जमिनीवरून", isCorrect: false },
        { label: "B", textEn: "From the sea", textMr: "समुद्रावरून", isCorrect: true },
        { label: "C", textEn: "From mountains", textMr: "पर्वतांवरून", isCorrect: false },
        { label: "D", textEn: "From poles", textMr: "ध्रुवावरून", isCorrect: false },
      ],
    },
    {
      textEn: "What is a characteristic of the equatorial region?",
      textMr: "विषुवत्तीय प्रदेशाचे वैशिष्ट्य काय आहे?",
      explanationEn:
        "The equatorial region receives heavy rainfall throughout the year and has dense evergreen forests. Temperature remains consistently hot.",
      explanationMr:
        "विषुवत्तीय प्रदेशात संपूर्ण वर्षभर जड पाऊस पडतो आणि दाट सदाहरित जंगले असतात. तापमान सारखे उष्ण असते.",
      options: [
        { label: "A", textEn: "Dry and hot", textMr: "कोरडे व उष्ण", isCorrect: false },
        { label: "B", textEn: "Heavy rainfall and dense forests", textMr: "जड पाऊस व दाट जंगल", isCorrect: true },
        { label: "C", textEn: "Cold and icy", textMr: "थंड व बर्फाळ", isCorrect: false },
        { label: "D", textEn: "Less rain and grassland", textMr: "कमी पाऊस व गवताळ", isCorrect: false },
      ],
    },
    {
      textEn: "Where is the Tundra region located?",
      textMr: "टुंड्रा प्रदेश कोठे आहे?",
      explanationEn:
        "The Tundra region is located near the polar areas (Arctic and Antarctic). It has extreme cold and no trees grow.",
      explanationMr: "टुंड्रा प्रदेश ध्रुवीय प्रदेशात (आर्क्टिक व अंटार्क्टिकाजवळ) असतो. येथे अत्यंत थंडी असते व झाडे उगवत नाहीत.",
      options: [
        { label: "A", textEn: "Equatorial region", textMr: "विषुवत्तीय प्रदेशात", isCorrect: false },
        { label: "B", textEn: "Desert", textMr: "वाळवंटात", isCorrect: false },
        { label: "C", textEn: "Polar region", textMr: "ध्रुवीय प्रदेशात", isCorrect: true },
        { label: "D", textEn: "Temperate region", textMr: "समशीतोष्ण प्रदेशात", isCorrect: false },
      ],
    },
    {
      textEn: "What are tropical grasslands called in Africa?",
      textMr: "उष्णकटिबंधीय गवताळ प्रदेशाला आफ्रिकेत काय म्हणतात?",
      explanationEn:
        "Tropical grasslands in Africa are called 'Savanna'. Animals like lions, elephants, and giraffes live here.",
      explanationMr: "आफ्रिकेतील उष्णकटिबंधीय गवताळ प्रदेशाला 'सवाना' म्हणतात. येथे सिंह, हत्ती, जिराफ यांसारखे प्राणी राहतात.",
      options: [
        { label: "A", textEn: "Prairie", textMr: "प्रेयरी", isCorrect: false },
        { label: "B", textEn: "Savanna", textMr: "सवाना", isCorrect: true },
        { label: "C", textEn: "Steppe", textMr: "स्टेप", isCorrect: false },
        { label: "D", textEn: "Pampas", textMr: "पम्पास", isCorrect: false },
      ],
    },
    {
      textEn: "What type of soil is mainly found in Maharashtra?",
      textMr: "महाराष्ट्रात कोणत्या प्रकारची माती मुख्यतः आढळते?",
      explanationEn: "Maharashtra mainly has black soil (Regur/Black cotton soil). It is excellent for growing cotton.",
      explanationMr: "महाराष्ट्रात मुख्यतः काळी माती (Regur/Black cotton soil) आढळते. ही कापूस पिकासाठी उत्तम असते.",
      options: [
        { label: "A", textEn: "Red soil", textMr: "लाल माती", isCorrect: false },
        { label: "B", textEn: "Black soil", textMr: "काळी माती", isCorrect: true },
        { label: "C", textEn: "Forest soil", textMr: "जंगल माती", isCorrect: false },
        { label: "D", textEn: "Saline soil", textMr: "खारट माती", isCorrect: false },
      ],
    },
    {
      textEn: "What causes soil erosion?",
      textMr: "मातीची धूप (Soil erosion) कशामुळे होते?",
      explanationEn:
        "Soil erosion is caused by deforestation, rainwater, wind, and improper farming. This washes away fertile topsoil.",
      explanationMr: "वनतोड, पावसाचे पाणी, वारा आणि अयोग्य शेती या कारणांमुळे मातीची धूप होते. यामुळे सुपीक माती वाहून जाते.",
      options: [
        { label: "A", textEn: "Planting trees", textMr: "झाडे लावणे", isCorrect: false },
        { label: "B", textEn: "Deforestation and rainwater", textMr: "वनतोड व पावसाचे पाणी", isCorrect: true },
        { label: "C", textEn: "Farming", textMr: "शेती करणे", isCorrect: false },
        { label: "D", textEn: "Using fertilizers", textMr: "खत वापरणे", isCorrect: false },
      ],
    },
    {
      textEn: "What are organic matter components in soil called?",
      textMr: "मातीतील सेंद्रिय पदार्थांना काय म्हणतात?",
      explanationEn: "Decomposed remains of plants and animals in soil are called Humus. It makes the soil fertile.",
      explanationMr: "मातीतील वनस्पती व प्राण्यांच्या कुजलेल्या अवशेषांना बुरशी (Humus) म्हणतात. हे माती सुपीक बनवते.",
      options: [
        { label: "A", textEn: "Minerals", textMr: "खनिजे", isCorrect: false },
        { label: "B", textEn: "Humus", textMr: "बुरशी", isCorrect: true },
        { label: "C", textEn: "Sand", textMr: "वालुका", isCorrect: false },
        { label: "D", textEn: "Silt", textMr: "गाळ", isCorrect: false },
      ],
    },
    {
      textEn: "When is the Sun directly overhead at the Tropic of Cancer?",
      textMr: "कर्क वृत्तावर सूर्य थेट डोक्यावर कधी असतो?",
      explanationEn:
        "On June 21, the Sun is directly overhead at the Tropic of Cancer (23.5°N). This marks the beginning of Uttarayan.",
      explanationMr: "२१ जून रोजी सूर्य कर्क वृत्तावर (२३.५° N) थेट डोक्यावर असतो. यालाच उत्तरायण सुरू होणे म्हणतात.",
      options: [
        { label: "A", textEn: "21 March", textMr: "२१ मार्च", isCorrect: false },
        { label: "B", textEn: "21 June", textMr: "२१ जून", isCorrect: true },
        { label: "C", textEn: "23 September", textMr: "२३ सप्टेंबर", isCorrect: false },
        { label: "D", textEn: "21 December", textMr: "२१ डिसेंबर", isCorrect: false },
      ],
    },
    {
      textEn: "What is an Equinox?",
      textMr: "विषुव (Equinox) म्हणजे काय?",
      explanationEn:
        "Equinox is when day and night are equal (12-12 hours). It occurs twice a year — March 21 and September 23.",
      explanationMr:
        "विषुव (Equinox) म्हणजे तो दिवस जेव्हा दिवस व रात्र समान (१२-१२ तास) असतात. हे वर्षातून दोनदा होते — २१ मार्च व २३ सप्टेंबर.",
      options: [
        { label: "A", textEn: "When day is longer", textMr: "जेव्हा दिवस मोठा असतो", isCorrect: false },
        { label: "B", textEn: "When day and night are equal", textMr: "जेव्हा दिवस व रात्र समान असतात", isCorrect: true },
        { label: "C", textEn: "When night is longer", textMr: "जेव्हा रात्र मोठी असते", isCorrect: false },
        { label: "D", textEn: "When solar eclipse occurs", textMr: "जेव्हा सूर्यग्रहण होते", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main Kharif crop in India?",
      textMr: "भारतातील मुख्य खरीप पीक कोणते?",
      explanationEn:
        "Rice is the main Kharif (monsoon) crop. Kharif crops are sown in June-July and harvested in September-October.",
      explanationMr: "भात (Rice) हे मुख्य खरीप (पावसाळी) पीक आहे. खरीप पिके जून-जुलैत पेरतात व सप्टेंबर-ऑक्टोबरमध्ये काढतात.",
      options: [
        { label: "A", textEn: "Wheat", textMr: "गहू", isCorrect: false },
        { label: "B", textEn: "Rice", textMr: "भात", isCorrect: true },
        { label: "C", textEn: "Chickpea", textMr: "हरभरा", isCorrect: false },
        { label: "D", textEn: "Lentil", textMr: "मसूर", isCorrect: false },
      ],
    },
    {
      textEn: "When are Rabi crops sown?",
      textMr: "रब्बी पिके कधी पेरतात?",
      explanationEn:
        "Rabi crops are sown in October-November and harvested in February-March. Wheat, chickpea are main Rabi crops.",
      explanationMr: "रब्बी पिके ऑक्टोबर-नोव्हेंबरमध्ये पेरतात व फेब्रुवारी-मार्चमध्ये काढतात. गहू, हरभरा ही प्रमुख रब्बी पिके आहेत.",
      options: [
        { label: "A", textEn: "June — July", textMr: "जून — जुलैमध्ये", isCorrect: false },
        { label: "B", textEn: "October — November", textMr: "ऑक्टोबर — नोव्हेंबरमध्ये", isCorrect: true },
        { label: "C", textEn: "February — March", textMr: "फेब्रुवारी — मार्चमध्ये", isCorrect: false },
        { label: "D", textEn: "April — May", textMr: "एप्रिल — मेमध्ये", isCorrect: false },
      ],
    },
    {
      textEn: "What is Agro-tourism?",
      textMr: "कृषी पर्यटन (Agro-tourism) म्हणजे काय?",
      explanationEn:
        "In agro-tourism, tourists are brought to farms to experience agriculture. This gives farmers additional income.",
      explanationMr: "कृषी पर्यटनात पर्यटकांना शेतात आणून शेती अनुभव दिला जातो. यामुळे शेतकऱ्यांना अतिरिक्त उत्पन्न मिळते.",
      options: [
        {
          label: "A",
          textEn: "Bringing tourists to farms for agricultural experience",
          textMr: "शेतात पर्यटकांना आणून शेती अनुभव देणे",
          isCorrect: true,
        },
        { label: "B", textEn: "Farming in cities", textMr: "शहरात शेती करणे", isCorrect: false },
        { label: "C", textEn: "Selling farms abroad", textMr: "परदेशात शेत विकणे", isCorrect: false },
        { label: "D", textEn: "Mechanization of agriculture", textMr: "शेतीचे यंत्रीकरण", isCorrect: false },
      ],
    },
    {
      textEn: "How many main types of human settlements are there?",
      textMr: "वसाहतींचे किती मुख्य प्रकार आहेत?",
      explanationEn:
        "There are two main types of human settlements: Rural settlements and Urban settlements.",
      explanationMr:
        "मानवी वसाहतींचे दोन मुख्य प्रकार आहेत: ग्रामीण वसाहती (Rural settlements) आणि नागरी वसाहती (Urban settlements).",
      // Note: the source PDF marks (B) "Three" as the correct answer, but its own
      // explanation for this question describes only two types (Rural/Urban).
      // Kept faithful to the source's marked answer; flagged for the user to verify.
      options: [
        { label: "A", textEn: "Two", textMr: "दोन", isCorrect: false },
        { label: "B", textEn: "Three", textMr: "तीन", isCorrect: true },
        { label: "C", textEn: "Four", textMr: "चार", isCorrect: false },
        { label: "D", textEn: "Five", textMr: "पाच", isCorrect: false },
      ],
    },
    {
      textEn: "Where do human settlements get established?",
      textMr: "मानव वसाहती कोठे स्थापन होतात?",
      explanationEn:
        "Human settlements establish near rivers, fertile land, and trade routes as these provide water, food, and trade facilities.",
      explanationMr:
        "मानव वसाहती नद्यांजवळ, सुपीक जमिनीवर, व्यापारी मार्गांवर स्थापन होतात कारण येथे पाणी, अन्न व व्यापाराच्या सुविधा असतात.",
      options: [
        { label: "A", textEn: "Mountain tops", textMr: "डोंगरमाथ्यावर", isCorrect: false },
        { label: "B", textEn: "Near rivers and fertile land", textMr: "नद्यांजवळ व सुपीक जमिनीवर", isCorrect: true },
        { label: "C", textEn: "Deserts", textMr: "वाळवंटात", isCorrect: false },
        { label: "D", textEn: "In the sea", textMr: "समुद्रात", isCorrect: false },
      ],
    },
    {
      textEn: "What are the main features of rural settlements (villages)?",
      textMr: "खेड्यांची (ग्रामीण वसाहती) मुख्य वैशिष्ट्ये कोणती?",
      explanationEn:
        "In rural settlements, agriculture is the main occupation, population is limited, and natural environment is abundant.",
      explanationMr: "ग्रामीण वसाहतींमध्ये शेती हा मुख्य व्यवसाय असतो, लोकसंख्या कमी असते व नैसर्गिक पर्यावरण अधिक असते.",
      options: [
        { label: "A", textEn: "Tall buildings", textMr: "मोठ्या इमारती", isCorrect: false },
        { label: "B", textEn: "Agriculture and limited population", textMr: "शेती व मर्यादित लोकसंख्या", isCorrect: true },
        { label: "C", textEn: "Industries and factories", textMr: "उद्योग व कारखाने", isCorrect: false },
        { label: "D", textEn: "Transport facilities", textMr: "वाहतूक व्यवस्था", isCorrect: false },
      ],
    },
    {
      textEn: "What are Contour lines?",
      textMr: "उंचीरेषा (Contour lines) म्हणजे काय?",
      explanationEn:
        "Contour lines join places of equal elevation above sea level. They are used on maps to show the relief of the land.",
      explanationMr:
        "उंचीरेषा (Contour lines) म्हणजे समुद्रसपाटीपासून समान उंचीच्या ठिकाणांना जोडणाऱ्या रेषा. या नकाशांवर भूपृष्ठाचे उंचसखलपण दाखवण्यासाठी वापरतात.",
      options: [
        { label: "A", textEn: "Lines joining equal temperature", textMr: "समान तापमानाच्या ठिकाणांना जोडणाऱ्या रेषा", isCorrect: false },
        { label: "B", textEn: "Lines joining equal elevation", textMr: "समान उंचीच्या ठिकाणांना जोडणाऱ्या रेषा", isCorrect: true },
        { label: "C", textEn: "Lines joining equal rainfall", textMr: "समान पावसाच्या ठिकाणांना जोडणाऱ्या रेषा", isCorrect: false },
        { label: "D", textEn: "Lines joining equal pressure", textMr: "समान दाबाच्या ठिकाणांना जोडणाऱ्या रेषा", isCorrect: false },
      ],
    },
    {
      textEn: "What does it indicate when contour lines are close together?",
      textMr: "उंचीरेषा जवळ आल्यावर काय दर्शवतात?",
      explanationEn:
        "Closely spaced contour lines indicate a steep slope, while widely spaced contour lines indicate a gentle slope.",
      explanationMr: "उंचीरेषा जवळ आल्यावर तीव्र उतार दाखवतात, तर दुरावरील उंचीरेषा सौम्य उतार दाखवतात.",
      options: [
        { label: "A", textEn: "Flat terrain", textMr: "सपाट भूभाग", isCorrect: false },
        { label: "B", textEn: "Depression", textMr: "खड्डा", isCorrect: false },
        { label: "C", textEn: "Steep slope", textMr: "तीव्र उतार", isCorrect: true },
        { label: "D", textEn: "Gentle slope", textMr: "सौम्य उतार", isCorrect: false },
      ],
    },
    {
      textEn: "What is the use of contour maps?",
      textMr: "उंचीरेषा नकाशांचा उपयोग काय?",
      explanationEn:
        "Contour maps show the three-dimensional picture of land features, mountains, valleys, and slopes on a flat paper.",
      explanationMr: "उंचीरेषा नकाशे भूपृष्ठाची रचना, डोंगर, दऱ्या, उतार यांचे त्रिमितीय चित्र सपाट कागदावर दाखवतात.",
      options: [
        { label: "A", textEn: "Showing only weather", textMr: "केवळ हवामान दाखवणे", isCorrect: false },
        { label: "B", textEn: "Showing land features and elevation", textMr: "भूपृष्ठाची रचना व उंचसखलपण दाखवणे", isCorrect: true },
        { label: "C", textEn: "Showing roads", textMr: "रस्ते दाखवणे", isCorrect: false },
        { label: "D", textEn: "Showing rivers", textMr: "नद्या दाखवणे", isCorrect: false },
      ],
    },
  ],
};

export default data;

import type { QuestionSetInput } from "./types";

// Source: All questions & answer/AMVI_Std6_English_Detailed.pdf + AMVI_Std6_Marathi_Detailed.pdf
// Both PDFs share identical question numbering/options/answers (92 MCQs).
// Note: a handful of options in the English PDF appear only in Devanagari with no
// English gloss anywhere in either source (mostly proper nouns). Those have been
// transliterated to Roman script (e.g. Veda, Mahabharata, Simuka, Rajagriha).
const data: QuestionSetInput = {
  standard: { code: "STD6", nameEn: "Standard 6", nameMr: "इयत्ता ६वी", sortOrder: 6 },
  subject: { code: "HC", nameEn: "History & Civics", nameMr: "इतिहास व नागरिकशास्त्र", sortOrder: 1 },
  questions: [
    {
      textEn: "How many types of historical sources are there?",
      textMr: "इतिहासाचे साधनस्रोत किती प्रकारचे आहेत?",
      explanationEn:
        "There are THREE types of historical sources: (1) Oral — folk songs, legends, traditions passed down verbally. (2) Material — coins, copper plates, weapons, pottery, tools found at excavation sites. (3) Written — manuscripts, inscriptions, newspapers, official records. This classification is frequently asked in AMVI Prelims.",
      explanationMr:
        "इतिहासाचे तीन प्रकारचे साधनस्रोत आहेत: (१) मौखिक — लोकगीते, दंतकथा (२) भौतिक — नाणी, ताम्रपट, शस्त्रे, मातीची भांडी (३) लेखी — हस्तलिखिते, शिलालेख, वर्तमानपत्रे. AMVI परीक्षेसाठी हे वर्गीकरण महत्त्वाचे आहे.",
      options: [
        { label: "A", textEn: "Two", textMr: "दोन", isCorrect: false },
        { label: "B", textEn: "Three", textMr: "तीन", isCorrect: true },
        { label: "C", textEn: "Four", textMr: "चार", isCorrect: false },
        { label: "D", textEn: "Five", textMr: "पाच", isCorrect: false },
      ],
    },
    {
      textEn: "Which is considered the most ancient written historical source?",
      textMr: "सर्वात प्राचीन लेखी साधनस्रोत कोणते मानले जाते?",
      explanationEn:
        "The Vedas are considered the most ancient written sources of history. Among the four Vedas, the Rigveda is the oldest. Classification: Rigveda (hymns to Agni, Indra, Varuna), Yajurveda (sacrificial rituals), Samaveda (musical notes, basis of Indian classical music), Atharvaveda (medicine and agriculture). AMVI frequently asks about Vedic classification.",
      explanationMr:
        "वेद हे सर्वात प्राचीन लेखी साधन आहे. ऋग्वेद हा चार वेदांपैकी सर्वात जुना आहे. वेदांचे वर्गीकरण: ऋग्वेद (स्तोत्रे), यजुर्वेद (यज्ञ-विधी), सामवेद (संगीत), अथर्ववेद (औषध). AMVI परीक्षेत वेदांशी संबंधित प्रश्न नेहमी येतात.",
      options: [
        { label: "A", textEn: "Mahabharata", textMr: "महाभारत", isCorrect: false },
        { label: "B", textEn: "Veda", textMr: "वेद", isCorrect: true },
        { label: "C", textEn: "Ramayana", textMr: "रामायण", isCorrect: false },
        { label: "D", textEn: "Upanishads", textMr: "उपनिषदे", isCorrect: false },
      ],
    },
    {
      textEn: "In which language is the Buddhist text 'Tipitaka' written?",
      textMr: "बौद्ध ग्रंथ 'तिपिटक' कोणत्या भाषेत लिहिले आहे?",
      explanationEn:
        "Tipitaka is the primary scripture of Buddhism, written in Pali language. 'Tipitaka' means 'Three Baskets': Vinayapitaka (rules for monks), Suttapitaka (Buddha's discourses), Abhidhammapitaka (philosophy). Note: Jain scriptures called 'Agamas' are written in Ardhamagadhi language — a common confusing pair in exams.",
      explanationMr:
        "तिपिटक हे बौद्ध धर्माचे प्रमुख धर्मग्रंथ आहेत आणि पाली भाषेत लिहिले आहेत. 'तिपिटक' म्हणजे 'तीन टोपल्या' — विनयपिटक (नियम), सुत्तपिटक (बुद्धाचे प्रवचन), अभिधम्मपिटक (तत्त्वज्ञान). जैन ग्रंथ 'आगम' अर्धमागधी भाषेत आहेत.",
      options: [
        { label: "A", textEn: "Sanskrit", textMr: "संस्कृत", isCorrect: false },
        { label: "B", textEn: "Apabhramsha", textMr: "अपभ्रंश", isCorrect: false },
        { label: "C", textEn: "Pali", textMr: "पाली", isCorrect: true },
        { label: "D", textEn: "Ardhamagadhi", textMr: "अर्धमागधी", isCorrect: false },
      ],
    },
    {
      textEn: "Which was the primary script used in Ashoka's inscriptions?",
      textMr: "अशोकाच्या शिलालेखांमध्ये वापरलेली प्रमुख लिपी कोणती?",
      explanationEn:
        "Ashoka inscribed his edicts in THREE scripts: (1) Brahmi — used across India, written left to right, considered mother of all Indian scripts. (2) Kharoshti — used in northwest India (Persian influence), written right to left. (3) Aramaic — used in Afghanistan. Brahmi is the most important script to remember for AMVI.",
      explanationMr:
        "अशोकाने तीन लिपींमध्ये शिलालेख कोरले: (१) ब्राह्मी — भारतात सर्वत्र, (२) खरोष्टी — वायव्य भारतात (पर्शियन प्रभाव), (३) अरामाईक — अफगाणिस्तानात. ब्राह्मी ही डावीकडून उजवीकडे लिहिली जाते. भारतीय लिपींची जननी आहे. AMVI परीक्षेत हा प्रश्न नेहमी येतो.",
      options: [
        { label: "A", textEn: "Devanagari", textMr: "देवनागरी", isCorrect: false },
        { label: "B", textEn: "Brahmi", textMr: "ब्राह्मी", isCorrect: true },
        { label: "C", textEn: "Gurmukhi", textMr: "गुरमुखी", isCorrect: false },
        { label: "D", textEn: "Modi", textMr: "मोडी", isCorrect: false },
      ],
    },
    {
      textEn: "When were Ajanta and Ellora Caves added to UNESCO World Heritage List?",
      textMr: "अजंता आणि वेरूळ लेणी UNESCO जागतिक वारसा यादीत कधी समाविष्ट झाली?",
      explanationEn:
        "Maharashtra's UNESCO World Heritage Sites with years: Ajanta & Ellora Caves (1983), Elephanta Caves (1987), Chhatrapati Shivaji Terminus/CST (1997), Western Ghats (2012), 12 Maratha Military Forts (2024), 76 Art Deco buildings (2018). Memorize these years — they appear frequently in AMVI Prelims.",
      explanationMr:
        "महाराष्ट्रातील UNESCO जागतिक वारसा स्थळे: अजंता-वेरूळ (1983), एलिफंटा लेणी (1987), छत्रपती शिवाजी टर्मिनस (1997), पश्चिम घाट (2012), 12 मराठा लष्करी किल्ले (2024), 76 Art Deco इमारती (2018). AMVI परीक्षेत वर्षे लक्षात ठेवणे महत्त्वाचे आहे.",
      options: [
        { label: "A", textEn: "1980", textMr: "1980", isCorrect: false },
        { label: "B", textEn: "1983", textMr: "1983", isCorrect: true },
        { label: "C", textEn: "1987", textMr: "1987", isCorrect: false },
        { label: "D", textEn: "1995", textMr: "1995", isCorrect: false },
      ],
    },
    {
      textEn: "Where is the Chhatrapati Shivaji Maharaj Museum (CSM) located?",
      textMr: "छत्रपती शिवाजी महाराज वस्तुसंग्रहालय (CSM) कोठे आहे?",
      explanationEn:
        "Key museums in Maharashtra: CSM Museum (Mumbai — art & history), Deccan College Museum (Pune — archaeology), Raja Dinkar Kelkar Museum (Pune — everyday life artifacts), Central Museum (Nagpur). The AMVI exam often asks 'which museum is in which city' — memorize the city pairs.",
      explanationMr:
        "महाराष्ट्रातील प्रमुख वस्तुसंग्रहालये: CSM वस्तुसंग्रहालय (मुंबई), डेक्कन कॉलेज संग्रहालय (पुणे), राजा दिनकर केळकर संग्रहालय (पुणे), केंद्रीय संग्रहालय (नागपूर). परीक्षेत शहरांची जोडी विचारली जाते.",
      options: [
        { label: "A", textEn: "Pune", textMr: "पुणे", isCorrect: false },
        { label: "B", textEn: "Nagpur", textMr: "नागपूर", isCorrect: false },
        { label: "C", textEn: "Mumbai", textMr: "मुंबई", isCorrect: true },
        { label: "D", textEn: "Aurangabad", textMr: "औरंगाबाद", isCorrect: false },
      ],
    },
    {
      textEn: "How many types of Stone Age are there?",
      textMr: "पाषाण युगाचे किती प्रकार आहेत?",
      explanationEn:
        "Three types of Stone Age: (1) Palaeolithic (Old Stone Age) — rough stone tools like chopper tools, discovery of fire, cave dwelling; Maharashtra sites: Gangapur (Nashik), Chirki-Nevasa. (2) Mesolithic (Middle Stone Age) — small tools called microliths, dog = first domesticated animal; site: Patne (Jalgaon). (3) Neolithic (New Stone Age) — agriculture begins (credited to women), axe, wheel-made pottery. Chalcolithic follows = copper + stone tools.",
      explanationMr:
        "पाषाण युगाचे तीन प्रकार: (१) पुरापाषाण (Palaeolithic) — खडबडीत दगडी हत्यारे, अग्नीचा शोध, गुहावास; स्थळे: गंगापूर (नाशिक), चिर्की-नेवासा. (२) मध्यपाषाण (Mesolithic) — लहान हत्यारे (microliths), कुत्रा = पहिले पाळीव प्राणी; स्थळ: पाटणे (जळगाव). (३) नवपाषाण (Neolithic) — शेती, कुऱ्हाड, चाकावर तयार केलेली भांडी.",
      options: [
        { label: "A", textEn: "Two", textMr: "दोन", isCorrect: false },
        { label: "B", textEn: "Three", textMr: "तीन", isCorrect: true },
        { label: "C", textEn: "Four", textMr: "चार", isCorrect: false },
        { label: "D", textEn: "Five", textMr: "पाच", isCorrect: false },
      ],
    },
    {
      textEn: "Who excavated the Chalcolithic site of 'Daimabad'?",
      textMr: "ताम्रपाषाण काळातील 'दायमाबाद' उत्खनन कोणी केले?",
      explanationEn:
        "Daimabad (Ahilyanagar district, Maharashtra) was excavated by B.P. Bopardikar. FOUR famous bronze objects found here: ox-cart, buffalo, rhinoceros, elephant. Key Chalcolithic sites: Inamgaon (Pune) — excavated by Dr. H.D. Sankalia; Jorwe (Ahilyanagar) — Jorwe Culture named after it; Savalda (Nandurbar); Nevasa (Ahilyanagar) — Dr. M.N. Deshpande. All these are important Maharashtra Chalcolithic sites for AMVI.",
      explanationMr:
        "दायमाबाद (अहिल्यानगर जिल्हा) येथे उत्खनन बी.पी. बोपर्डीकर यांनी केले. येथे चार महत्त्वाच्या कांस्य मूर्ती मिळाल्या: बैल-गाडी, म्हैस, गेंडा, हत्ती. इनामगाव (पुणे) = डॉ. एच.डी. सांकलिया; जोर्वे संस्कृती (अहिल्यानगर); सावळदा (नंदुरबार); नेवासा (अहिल्यानगर) = डॉ. एम.एन. देशपांडे. हे सर्व ताम्रपाषाण काळातील महत्त्वाचे महाराष्ट्रातील स्थळे आहेत.",
      options: [
        { label: "A", textEn: "Dr. H.D. Sankalia", textMr: "डॉ. एच.डी. सांकलिया", isCorrect: false },
        { label: "B", textEn: "B.P. Bopardikar", textMr: "बी.पी. बोपर्डीकर", isCorrect: true },
        { label: "C", textEn: "Dr. M.N. Deshpande", textMr: "डॉ. एम.एन. देशपांडे", isCorrect: false },
        { label: "D", textEn: "V.S. Wakankar", textMr: "वि.स. वाकणकर", isCorrect: false },
      ],
    },
    {
      textEn: "In the Neolithic age, who is credited with the discovery of agriculture?",
      textMr: "नवपाषाण काळात शेतीचा शोध कोणाला दिला जातो?",
      explanationEn:
        "In the Neolithic age, while men went out for hunting, women stayed near camps collecting plants. They observed that discarded seeds would sprout and grow — this led to the discovery of agriculture. Hence, women are credited with inventing farming. This was a revolutionary change — humans shifted from nomadic to settled life. Agriculture further developed in the Chalcolithic age leading to urbanization.",
      explanationMr:
        "नवपाषाण काळात जेव्हा पुरुष शिकारीसाठी बाहेर जात असत, तेव्हा स्त्रिया जवळच राहून वनस्पती गोळा करत असत. त्यांना लक्षात आले की टाकलेल्या बिया पुन्हा उगवतात — अशा प्रकारे शेतीचा जन्म झाला. म्हणून शेतीचा शोध स्त्रियांना श्रेय दिला जातो. ताम्रपाषाण काळात शेती अधिक विकसित झाली आणि शहरीकरण सुरू झाले.",
      options: [
        { label: "A", textEn: "Men", textMr: "पुरुषांना", isCorrect: false },
        { label: "B", textEn: "Women", textMr: "स्त्रियांना", isCorrect: true },
        { label: "C", textEn: "Children", textMr: "मुलांना", isCorrect: false },
        { label: "D", textEn: "Elders", textMr: "बुजुर्गांना", isCorrect: false },
      ],
    },
    {
      textEn: "When did excavations of Harappan Civilisation begin?",
      textMr: "हडप्पा संस्कृतीचे उत्खनन कधी सुरू झाले?",
      explanationEn:
        "Harappan Civilisation excavations began in 1921. Harappa city is on River Ravi (Pakistan); Mohenjodaro is on River Indus. THREE phases: Early (3300-2600 BCE), Mature (2600-1900 BCE) — most developed phase with planned cities, Late (1900-1300 BCE). Total area = 1.5 million sq km, making it one of the world's largest ancient civilizations. Key sites: Harappa, Mohenjodaro, Kalibangan, Lothal (Gujarat), Dholavira (Gujarat), Rakhigarhi (Haryana).",
      explanationMr:
        "हडप्पा संस्कृतीचे उत्खनन 1921 मध्ये सुरू झाले. हडप्पा = रावी नदीवर (पाकिस्तान); मोहेंजोदारो = सिंधू नदीवर. संस्कृतीचे तीन टप्पे: प्रारंभिक (3300-2600 BCE), परिपक्व (2600-1900 BCE) — सर्वाधिक विकसित, उत्तरकाळ (1900-1300 BCE). एकूण क्षेत्रफळ = 15 लाख चौ.कि.मी. हे जगातील सर्वात मोठे प्राचीन नागरी संस्कृतींपैकी एक आहे.",
      options: [
        { label: "A", textEn: "1911", textMr: "1911", isCorrect: false },
        { label: "B", textEn: "1921", textMr: "1921", isCorrect: true },
        { label: "C", textEn: "1931", textMr: "1931", isCorrect: false },
        { label: "D", textEn: "1941", textMr: "1941", isCorrect: false },
      ],
    },
    {
      textEn: "What are the dimensions of the 'Great Bath' at Mohenjodaro?",
      textMr: "मोहेंजोदारो येथील 'महास्नानगृह' (Great Bath) चे मोजमाप काय?",
      explanationEn:
        "The Great Bath at Mohenjodaro measures 12m long × 7m wide × 2.5m deep. It is considered one of the earliest public water tanks in the ancient world and was likely used for ritual bathing. The bricks used in Harappan construction followed a precise 1:2:4 ratio (thickness:width:length). The Great Bath's waterproofing used bitumen and carefully fitted bricks. This demonstrates advanced town-planning skills of Harappan people.",
      explanationMr:
        "महास्नानगृह (Great Bath) हे मोहेंजोदारो येथे आहे. मोजमाप: 12 मीटर लांब × 7 मीटर रुंद × 2.5 मीटर खोल. हे नगर नियोजनाचे उत्कृष्ट उदाहरण आहे. विटा 1:2:4 गुणोत्तरात बांधलेल्या होत्या. हे धार्मिक/सार्वजनिक स्नानासाठी वापरले जात असे. AMVI परीक्षेत मोजमापे विचारली जातात.",
      options: [
        { label: "A", textEn: "10×6×2 m.", textMr: "10×6×2 मी.", isCorrect: false },
        { label: "B", textEn: "12×7×2.5 m.", textMr: "12×7×2.5 मी.", isCorrect: true },
        { label: "C", textEn: "15×8×3 m.", textMr: "15×8×3 मी.", isCorrect: false },
        { label: "D", textEn: "8×5×2 m.", textMr: "8×5×2 मी.", isCorrect: false },
      ],
    },
    {
      textEn: "Which was the important port of the Harappan Civilisation?",
      textMr: "हडप्पाचे महत्त्वाचे बंदर कोणते होते?",
      explanationEn:
        "Lothal (Gujarat) was the most important port of Harappan Civilisation — it had the world's first known dockyard for loading/unloading ships. Kalibangan (Rajasthan) = world's oldest ploughed field on River Ghaggar. Rakhigarhi (Haryana) = largest Harappan site by area. Dholavira (Gujarat) = UNESCO World Heritage Site since 2021. Harappans exported carnelian beads, faience, textiles, and imported metals.",
      explanationMr:
        "लोथल (गुजरात) हे हडप्पा संस्कृतीचे सर्वात महत्त्वाचे बंदर होते. येथे जगातील सर्वात जुने बंदर (Dockyard) सापडले. कालीबंगन (राजस्थान) = जगातील सर्वात जुने नांगरलेले शेत (घग्गर नदीकाठी). राखीगढी (हरियाणा) = क्षेत्रफळानुसार सर्वात मोठे हडप्पाकालीन स्थळ. धोलावीरा (गुजरात) = UNESCO Heritage Site.",
      options: [
        { label: "A", textEn: "Kalibangan", textMr: "कालीबंगन", isCorrect: false },
        { label: "B", textEn: "Dholavira", textMr: "धोलावीरा", isCorrect: false },
        { label: "C", textEn: "Lothal", textMr: "लोथल", isCorrect: true },
        { label: "D", textEn: "Rakhigarhi", textMr: "राखीगढी", isCorrect: false },
      ],
    },
    {
      textEn: "What material is the Harappan 'Dancing Girl' statue made of?",
      textMr: "हडप्पा संस्कृतीतील 'नर्तकी मूर्ती' (Dancing Girl) कशापासून बनवली?",
      explanationEn:
        "The Dancing Girl statue is made of BRONZE (lost-wax casting technique) and was found at Mohenjodaro. It depicts a young girl with bangles and a necklace, showing advanced metallurgy. The Priest-King statue is made of steatite (stone) — also from Mohenjodaro. Harappan seals were made of steatite stone and most commonly depicted a Unicorn. The bronze technology shows Harappans were in the Chalcolithic–Bronze Age transition.",
      explanationMr:
        "नर्तकी मूर्ती (Dancing Girl) कांस्यापासून (Bronze) बनवली असून मोहेंजोदारो येथे मिळाली. ही मूर्ती हडप्पाकालीन प्रगत धातुकामाचे प्रतीक आहे. पुजारी-राजा (Priest-King) मूर्ती दगडापासून बनवली असून मोहेंजोदारो येथेच मिळाली. हडप्पाकालीन शिक्के (Seals) दगडापासून बनवले असून त्यावर एकशिंगी (Unicorn) प्राण्याचे चित्र अधिक आढळते.",
      options: [
        { label: "A", textEn: "Stone", textMr: "दगड", isCorrect: false },
        { label: "B", textEn: "Clay", textMr: "माती", isCorrect: false },
        { label: "C", textEn: "Bronze", textMr: "कांस्य", isCorrect: true },
        { label: "D", textEn: "Gold", textMr: "सोने", isCorrect: false },
      ],
    },
    {
      textEn: "Which Veda is the basis of Indian classical music?",
      textMr: "भारतीय शास्त्रीय संगीताचा आधार कोणत्या वेदात आहे?",
      explanationEn:
        "Samaveda is the basis of Indian classical music — it contains hymns set to musical notes and melodies. Four Vedas: Rigveda (hymns to Agni, Indra, Varuna — oldest Veda), Yajurveda (sacrificial rituals), Samaveda (musical notes → Indian classical music), Atharvaveda (medicine, agriculture, magic spells). Supplementary texts: Brahmanas (rituals), Aranyakas (forest treatises), Upanishads (philosophy). Indian Navy motto 'Sham No Varunah' from Upanishads.",
      explanationMr:
        "सामवेद = संगीतमय स्तोत्रांचा वेद; भारतीय शास्त्रीय संगीताचा स्रोत. चारही वेद: ऋग्वेद (अग्नी, इंद्र, वरुण देवतांची स्तोत्रे — सर्वात जुना), यजुर्वेद (यज्ञ-विधी), सामवेद (संगीत), अथर्ववेद (औषध, कृषी). पूरक ग्रंथ: ब्राह्मणे, आरण्यके, उपनिषदे. भारतीय नौदलाचे ब्रीदवाक्य 'शं नो वरुणः' उपनिषदातून घेतले आहे.",
      options: [
        { label: "A", textEn: "Rigveda", textMr: "ऋग्वेद", isCorrect: false },
        { label: "B", textEn: "Samaveda", textMr: "सामवेद", isCorrect: true },
        { label: "C", textEn: "Yajurveda", textMr: "यजुर्वेद", isCorrect: false },
        { label: "D", textEn: "Atharvaveda", textMr: "अथर्ववेद", isCorrect: false },
      ],
    },
    {
      textEn: "What were the two main political institutions of the Vedic period?",
      textMr: "वैदिक काळातील दोन प्रमुख राजकीय संस्था कोणत्या?",
      explanationEn:
        "Two main political institutions of Vedic period: (1) Sabha — assembly of elders and learned men, advisory to the king. (2) Samiti — people's assembly, took major collective decisions. These show early democratic traditions in ancient India. The four Varnas (Brahmin, Kshatriya, Vaishya, Shudra) emerged in this period. Gurukul system = residential education near teacher's home. Four Ashrams: Brahmacharya, Grihastha, Vanaprastha, Sannyasa. Vedic women scholars: Lopamudra, Ghosha, Gargi, Maitreyi, Apala.",
      explanationMr:
        "वैदिक काळात दोन प्रमुख राजकीय संस्था होत्या: (१) सभा — वयोवृद्ध आणि विद्वानांची परिषद, राजाला सल्ला देणे. (२) समिती — लोकांची सभा, महत्त्वाचे निर्णय घेणे. या दोन संस्था प्रजाशाही परंपरेचे उत्कृष्ट उदाहरण आहेत. वैदिक महिला विद्वान: लोपामुद्रा, घोषा, गार्गी, मैत्रेयी, अपाला — या उच्चस्तरीय वैदिक शिक्षण घेतलेल्या महिला होत्या.",
      options: [
        { label: "A", textEn: "Rajsabha and Mantrimandal", textMr: "राजसभा आणि मंत्रिमंडळ", isCorrect: false },
        { label: "B", textEn: "Sabha and Samiti", textMr: "सभा आणि समिती", isCorrect: true },
        { label: "C", textEn: "Darbar and Diwan", textMr: "दरबार आणि दिवाण", isCorrect: false },
        { label: "D", textEn: "Panchayat and Nyayalaya", textMr: "पंचायत आणि न्यायालय", isCorrect: false },
      ],
    },
    {
      textEn: "Who was the 24th and last Tirthankara of Jainism?",
      textMr: "जैन धर्माचे 24वे आणि शेवटचे तीर्थंकर कोण होते?",
      explanationEn:
        "Vardhaman Mahavir was the 24th and last Tirthankara of Jainism. Born 599 BCE at Kundagram (near Vaishali, Bihar). Father: Siddhartha (Kshatriya king); Mother: Trishala. After 12.5 years of intense penance he attained Kevaljnana (omniscience) — hence called 'Jina' (conqueror) and 'Kevali'. Five Mahavratas: Ahimsa (non-violence), Satya (truth), Asteya (non-stealing), Aparigraha (non-possession), Brahmacharya (celibacy). Tri-Ratna (Three Jewels): Right Faith, Right Knowledge, Right Conduct.",
      explanationMr:
        "वर्धमान महावीर = जैन धर्माचे 24वे आणि शेवटचे तीर्थंकर. जन्म: 599 BCE, कुंडग्राम (वैशालीजवळ); वडील: सिद्धार्थ (क्षत्रिय); आई: त्रिशला. 12.5 वर्षे तपश्चर्या केल्यानंतर केवलज्ञान प्राप्त झाले — म्हणून त्यांना 'जिन' (जिंकणारा) आणि 'केवली' म्हणतात. जैन धर्माचे पंचमहाव्रत: अहिंसा, सत्य, अस्तेय, अपरिग्रह, ब्रह्मचर्य. त्रिरत्न: सम्यक श्रद्धा, सम्यक ज्ञान, सम्यक आचरण.",
      options: [
        { label: "A", textEn: "Parshvanatha", textMr: "पार्श्वनाथ", isCorrect: false },
        { label: "B", textEn: "Adinatha", textMr: "आदिनाथ", isCorrect: false },
        { label: "C", textEn: "Vardhaman Mahavir", textMr: "वर्धमान महावीर", isCorrect: true },
        { label: "D", textEn: "Neminatha", textMr: "नेमिनाथ", isCorrect: false },
      ],
    },
    {
      textEn: "Where did Gautama Buddha attain enlightenment?",
      textMr: "गौतम बुद्धांना ज्ञानप्राप्ती कोठे झाली?",
      explanationEn:
        "Four sacred sites of Gautama Buddha: (1) Lumbini (Nepal) = birth, 563 BCE. (2) Bodh Gaya (Bihar) = enlightenment under a pipal/Bodhi tree. (3) Sarnath (near Varanasi) = first sermon 'Dhammachakkappavattana' (setting the Wheel of Dharma in motion). (4) Kushinagar = Mahaparinirvana (death), 483 BCE. Buddhist Trisharan: Buddha, Dhamma, Sangha. Four Noble Truths (Dukkha, Samudaya, Nirodha, Magga). Eightfold Path. Five Precepts (Panchasheel).",
      explanationMr:
        "गौतम बुद्धांचे चार महत्त्वाचे ठिकाणे: (१) लुंबिनी (नेपाळ) = जन्म 563 BCE, (२) बोधगया (बिहार) = पिंपळाच्या झाडाखाली ज्ञानप्राप्ती, (३) सारनाथ (वाराणसीजवळ) = पहिला उपदेश — 'धर्मचक्रप्रवर्तन', (४) कुशीनगर = महापरिनिर्वाण 483 BCE. बौद्ध त्रिशरण: बुद्ध, धम्म, संघ. चार आर्यसत्ये: दुःख, समुदाय, निरोध, मग्ग. अष्टांगिक मार्ग. पंचशील.",
      options: [
        { label: "A", textEn: "Lumbini", textMr: "लुंबिनी", isCorrect: false },
        { label: "B", textEn: "Sarnath", textMr: "सारनाथ", isCorrect: false },
        { label: "C", textEn: "Bodh Gaya", textMr: "बोधगया", isCorrect: true },
        { label: "D", textEn: "Kushinagar", textMr: "कुशीनगर", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is NOT included in the 6 Shaddarshanas?",
      textMr: "षड्दर्शने (6 Shaddarshanas) मध्ये कोणते समाविष्ट नाही?",
      explanationEn:
        "Six Shaddarshanas (Orthodox Hindu philosophical schools based on Vedas): (1) Samkhya, (2) Yoga, (3) Nyaya, (4) Vaisheshika, (5) Purva Mimamsa, (6) Vedanta (Uttara Mimamsa). Buddhism and Jainism are NOT included because they do not accept Vedic authority — they are called 'Nastika' (heterodox). Shankaracharya (8th century CE) established 4 Mathas: Badrinath (north), Dwarka (west), Jagannathpuri (east), Shringeri (south).",
      explanationMr:
        "सहा षड्दर्शने (हिंदू तत्त्वज्ञान शाखा): (१) सांख्य, (२) योग, (३) न्याय, (४) वैशेषिक, (५) पूर्वमीमांसा, (६) वेदांत (उत्तरमीमांसा). बौद्ध आणि जैन धर्म हे वेदांचा आधार मानत नाहीत — म्हणून ते षड्दर्शनांमध्ये नाहीत. शंकराचार्यांनी (8वे शतक) चार मठांची स्थापना केली: बद्रीनाथ, द्वारका, जगन्नाथपुरी, शृंगेरी.",
      options: [
        { label: "A", textEn: "Samkhya", textMr: "सांख्य", isCorrect: false },
        { label: "B", textEn: "Yoga", textMr: "योग", isCorrect: false },
        { label: "C", textEn: "Nyaya", textMr: "न्याय", isCorrect: false },
        { label: "D", textEn: "Buddhism", textMr: "बौद्ध", isCorrect: true },
      ],
    },
    {
      textEn: "How many Mahajanapadas were there in ancient India?",
      textMr: "महाजनपदांची एकूण संख्या किती होती?",
      explanationEn:
        "There were 16 Mahajanapadas. Four most powerful: Magadha (capital Rajagriha → Pataliputra), Kosala (Shravasti), Vatsa (Kaushambi), Avanti (Ujjaini). Important: Ashmaka = ONLY Mahajanapada south of Vindhyas; capital Potali/Pratishthan (modern Paithan, Maharashtra). Voting in republics used 'Shalaka' (coloured sticks) — one of world's earliest democratic experiments! Bimbisara = founder of Magadha empire. Ajatashatru moved capital to Pataliputra and built Mahashilakantaka (catapult) and Rathamusala (chariot with blades).",
      explanationMr:
        "16 महाजनपदे होती. चार सर्वाधिक शक्तिशाली: मगध (राजधानी: राजगृह → पाटलीपुत्र), कोशल (श्रावस्ती), वत्स (कौशांबी), अवंती (उज्जयिनी). अश्मक = एकमेव विंध्याच्या दक्षिणेकडील महाजनपद, राजधानी पोटली/प्रतिष्ठान (आजचे पैठण, महाराष्ट्र). गणराज्यांमध्ये मतदान 'शलाका' (रंगीत काड्या) ने होत असे — हे जगातील सुरुवातीच्या लोकशाही प्रयोगांपैकी एक!",
      options: [
        { label: "A", textEn: "8", textMr: "8", isCorrect: false },
        { label: "B", textEn: "12", textMr: "12", isCorrect: false },
        { label: "C", textEn: "16", textMr: "16", isCorrect: true },
        { label: "D", textEn: "20", textMr: "20", isCorrect: false },
      ],
    },
    {
      textEn: "Where was the First Buddhist Council held?",
      textMr: "पहिली बौद्ध परिषद कोठे भरली?",
      explanationEn:
        "Four Buddhist Councils: (1) First Council — Rajagriha; organized by Ajatashatru after Buddha's death; Vinayapitaka compiled. (2) Second Council — Vaishali; during Kalashoka's reign. (3) Third Council — Pataliputra; during Ashoka's reign; Abhidhammapitaka compiled. (4) Fourth Council — Kundalavana, Kashmir; during Kanishka's reign; split into Mahayana and Hinayana. Memorize the order and locations — this is a very frequently asked sequence in AMVI.",
      explanationMr:
        "चार बौद्ध परिषदा: (१) पहिली — राजगृह; कालाशोकाच्या काळात — आयोजक: अजातशत्रू; विनयपिटक संकलित. (२) दुसरी — वैशाली; कालाशोक. (३) तिसरी — पाटलीपुत्र; अशोक; अभिधम्मपिटक संकलित. (४) चौथी — कुंडलवन (काश्मीर); कनिष्क; महायान-हीनयान विभाजन. या चार परिषदांचे क्रम आणि ठिकाणे AMVI परीक्षेत वारंवार विचारले जातात.",
      options: [
        { label: "A", textEn: "Pataliputra", textMr: "पाटलीपुत्र", isCorrect: false },
        { label: "B", textEn: "Rajagriha", textMr: "राजगृह", isCorrect: true },
        { label: "C", textEn: "Vaishali", textMr: "वैशाली", isCorrect: false },
        { label: "D", textEn: "Kundalavana", textMr: "कुंडलवन", isCorrect: false },
      ],
    },
    {
      textEn: "What were the other names of Chanakya?",
      textMr: "चाणक्याचे इतर नाव काय होते?",
      explanationEn:
        "Chanakya = Vishnugupta = Kautilya — all three are the same person. He was the Prime Minister of Chandragupta Maurya and wrote 'Arthashastra' — a treatise on statecraft, economics, military strategy, and governance. Vishakhadatta wrote 'Mudrarakshasa' — a play about Chandragupta Maurya's rise. Megasthenes = Greek ambassador of Seleucus, wrote 'Indica' describing India. Alexander invaded India in 326 BCE. Chandragupta Maurya defeated Dhanananda in 321 BCE with Chanakya's strategy.",
      explanationMr:
        "चाणक्य = विष्णुगुप्त = कौटिल्य — तीनही एकाच व्यक्तीची नावे. त्यांनी 'अर्थशास्त्र' हा ग्रंथ लिहिला — राजकारण, अर्थशास्त्र, लष्कर यावर. विशाखदत्त यांनी 'मुद्राराक्षस' नाटक लिहिले — चंद्रगुप्त मौर्याच्या उदयावर. मेगॅस्थेनिस = ग्रीक राजदूत, 'इंडिका' लिहिले. अलेक्झांडर = 326 BCE मध्ये आक्रमण. चंद्रगुप्त मौर्याने 321 BCE मध्ये धनानंदाचा पराभव केला.",
      options: [
        { label: "A", textEn: "Vishnugupta and Kautilya", textMr: "विष्णुगुप्त आणि कौटिल्य", isCorrect: true },
        { label: "B", textEn: "Nagasena and Acharya", textMr: "नागसेन आणि आचार्य", isCorrect: false },
        { label: "C", textEn: "Banabhatta and Kalidasa", textMr: "बाणभट्ट आणि कालिदास", isCorrect: false },
        { label: "D", textEn: "Panini and Patanjali", textMr: "पाणिनी आणि पतंजली", isCorrect: false },
      ],
    },
    {
      textEn: "In which state did the Kalinga War take place?",
      textMr: "कलिंग युद्ध कोणत्या राज्यात झाले?",
      explanationEn:
        "Kalinga War took place in modern-day Odisha (261 BCE). The massive bloodshed — reportedly 1 lakh killed, 1.5 lakh deported — deeply affected Ashoka and he embraced Buddhism. His title: 'Devanam Piyo Piyadasi' = 'Beloved of Gods, of Gracious Mien'. He sent Mahendra and Sanghamitra to Sri Lanka to spread Buddhism. Mauryan Empire's 4 provinces: East (Toshali), West (Ujjayini), North (Takshashila), South (Suvarnagiri). Pushyamitra Shunga ended Mauryan dynasty.",
      explanationMr:
        "कलिंग युद्ध = आजचे ओडिशा राज्य (261 BCE). या युद्धात लाखो लोक मरण पावले — हे पाहून अशोकाला खूप दुःख झाले आणि त्याने बौद्ध धर्म स्वीकारला. अशोकाची उपाधी: 'देवानाम् पियो पियदस्सी' = 'देवांचा प्रिय, प्रियदर्शी'. त्याने महेंद्र आणि संघमित्रा यांना श्रीलंकेत पाठवले. मौर्य साम्राज्याचे 4 प्रांत: पूर्व (तोशाली), पश्चिम (उज्जयिनी), उत्तर (तक्षशिला), दक्षिण (सुवर्णगिरी).",
      options: [
        { label: "A", textEn: "Bihar", textMr: "बिहार", isCorrect: false },
        { label: "B", textEn: "Odisha", textMr: "ओडिशा", isCorrect: true },
        { label: "C", textEn: "Andhra Pradesh", textMr: "आंध्र प्रदेश", isCorrect: false },
        { label: "D", textEn: "Bengal", textMr: "बंगाल", isCorrect: false },
      ],
    },
    {
      textEn: "Who built the most ancient rock-cut caves (Barabar Caves)?",
      textMr: "सर्वात प्राचीन खडकातील लेणी (Barabar Caves) कोणाने बांधली?",
      explanationEn:
        "Barabar Caves in Bihar are India's most ancient rock-cut caves, built by Emperor Ashoka for the Ajivikas sect. Other Ashoka contributions: appointed Adhyakshas (superintendents), repaired Sudarshan Lake at Junagadh, erected Dhamma inscriptions, sent diplomatic missions to Greece, Egypt, Sri Lanka. Note: Chandragupta Maurya (not Ashoka) accepted Jainism and spent his last days fasting at Shravanabelagola. Pushyamitra Shunga assassinated Brihadratha and ended Mauryan dynasty.",
      explanationMr:
        "बराबर लेणी (Barabar Caves) = भारतातील सर्वात प्राचीन खडकातील लेणी; बिहारमध्ये आहेत; अशोकाने बांधल्या. अशोकाचे इतर महत्त्वाचे कार्य: अध्यक्ष (Superintendents) नियुक्ती, सुदर्शन सरोवर (जुनागड) दुरुस्ती, धम्म-लिपी शिलालेख, ग्रीस-इजिप्त-श्रीलंका येथे दूत पाठवणे. अशोकाने जैन धर्माचा पुरस्कार केल्याचा उल्लेख नाही; चंद्रगुप्त मौर्याने जैन धर्म स्वीकारला आणि श्रवणबेळगोळ येथे जीवन संपवले.",
      options: [
        { label: "A", textEn: "Chandragupta Maurya", textMr: "चंद्रगुप्त मौर्य", isCorrect: false },
        { label: "B", textEn: "Bindusara", textMr: "बिंदुसार", isCorrect: false },
        { label: "C", textEn: "Ashoka", textMr: "अशोक", isCorrect: true },
        { label: "D", textEn: "Samudragupta", textMr: "समुद्रगुप्त", isCorrect: false },
      ],
    },
    {
      textEn: "Who was the founder of the Satavahana dynasty?",
      textMr: "सातवाहन वंशाचा संस्थापक कोण होता?",
      explanationEn:
        "Satavahana dynasty = first powerful empire of Maharashtra. Founder: Simuka. Most famous king: Gautamiputra Satakarni — title 'Tri-samudra-toya-peet-vahan' (lord of horses that drank waters of three seas). Satavahanas built Buddhist caves: Nashik, Karle, Kanheri, Bhaje, Pitalkhora. Trade with Rome and Greece flourished. 'Deccan' or Maharashtra called 'Melting Pot of ancient India' due to Satavahana and Vakataka cultural integration. Shaka King Rudradaman-I's Junagadh inscription = first Sanskrit stone inscription.",
      explanationMr:
        "सातवाहन वंश = महाराष्ट्राचे पहिले शक्तिशाली साम्राज्य. संस्थापक: सिमुक. सर्वात प्रसिद्ध राजा: गौतमीपुत्र सातकर्णी — उपाधी 'त्रि-समुद्र-तोय-पीत-वाहन' (तीन समुद्रांचे पाणी पिणाऱ्या घोड्यांचा स्वामी). सातवाहनांनी बौद्ध लेणी बांधल्या: नाशिक, कार्ले, कान्हेरी, भाजे, पिताळखोरा. रोम आणि ग्रीसशी व्यापार होता. महाराष्ट्र = 'प्राचीन भारताचे वितळणारे भांडे' (Melting Pot) — सातवाहन आणि वाकाटक काळामुळे.",
      options: [
        { label: "A", textEn: "Gautamiputra Satakarni", textMr: "गौतमीपुत्र सातकर्णी", isCorrect: false },
        { label: "B", textEn: "Simuka", textMr: "सिमुक", isCorrect: true },
        { label: "C", textEn: "Nahapana", textMr: "नहपान", isCorrect: false },
        { label: "D", textEn: "Rudradaman-I", textMr: "रुद्रदमन-I", isCorrect: false },
      ],
    },
    {
      textEn: "What was the capital of Kushana king Kanishka?",
      textMr: "कुशाण राजा कनिष्काची राजधानी कोणती?",
      explanationEn:
        "Kanishka = greatest Kushana king. Capital: Purushapura (modern Peshawar, Pakistan). He organized the Fourth Buddhist Council at Kundalavana, Kashmir — this led to the split into Mahayana (Greater Vehicle) and Hinayana (Lesser Vehicle) Buddhism. Under Kanishka, Gandhara Art flourished — a unique fusion of Greek sculptural style with Buddhist themes, showing Buddha in human form for the first time. Kanishka patronized scholars like Ashvaghosa, Nagarjuna, and Charaka.",
      explanationMr:
        "कनिष्क = कुशाण वंशाचा महान राजा. राजधानी: पुरुषपुर (आजचे पेशावर, पाकिस्तान). चौथी बौद्ध परिषद: कुंडलवन (काश्मीर) — येथे महायान आणि हीनयान असे दोन पंथ निर्माण झाले. कनिष्काच्या काळात गांधार शैली (Gandhara Art) विकसित झाली — बुद्धाच्या मूर्तींवर ग्रीक शिल्पशैलीचा प्रभाव. कनिष्काने अश्वघोष, नागार्जुन, चरक यांना आश्रय दिला.",
      options: [
        { label: "A", textEn: "Mathura", textMr: "मथुरा", isCorrect: false },
        { label: "B", textEn: "Pataliputra", textMr: "पाटलीपुत्र", isCorrect: false },
        { label: "C", textEn: "Purushapura (Peshawar)", textMr: "पुरुषपुर (पेशावर)", isCorrect: true },
        { label: "D", textEn: "Takshashila", textMr: "तक्षशिला", isCorrect: false },
      ],
    },
    {
      textEn: "Why is the Gupta period called the 'Golden Age'?",
      textMr: "गुप्त काळाला 'सुवर्णकाळ' का म्हणतात?",
      explanationEn:
        "Gupta period (4th–5th century CE) = India's 'Golden Age' due to extraordinary advances in: Literature (Kalidasa's plays, Panchatantra), Mathematics (Aryabhata discovered zero, pi, solar year), Astronomy (Varahamihira), Medicine (Dhanvantari, Charaka Samhita), Metallurgy (Iron Pillar of Delhi — doesn't rust after 1600 years). Chandragupta II (Vikramaditya) defeated the Shakas. Fa Hien (Chinese Buddhist monk) visited during Gupta period. Iron Pillar at Mehrauli, Delhi = erected by Chandragupta II.",
      explanationMr:
        "गुप्त काळ (4थे-5वे शतक CE) = भारताचा 'सुवर्णकाळ'. गुप्त वंश: श्रीगुप्त (संस्थापक), चंद्रगुप्त I, समुद्रगुप्त (भारताचा नेपोलियन), चंद्रगुप्त II (विक्रमादित्य) — शकांचा पराभव. फाहियान = चिनी भिक्षू, गुप्त काळात भारतात आला. नवरत्ने: कालिदास, धन्वंतरी, वराहमिहिर, आर्यभट्ट इ. लोहस्तंभ (दिल्ली) = चंद्रगुप्त II ने उभारला; गंजत नाही — प्रगत धातुकाम.",
      options: [
        { label: "A", textEn: "Gold production was high", textMr: "सोन्याचे उत्पादन जास्त होते", isCorrect: false },
        {
          label: "B",
          textEn: "Flourishing of literature, art and science",
          textMr: "साहित्य, कला, विज्ञानाचा उत्कर्ष झाला",
          isCorrect: true,
        },
        { label: "C", textEn: "Won major wars", textMr: "मोठे युद्ध जिंकले", isCorrect: false },
        { label: "D", textEn: "Trade increased", textMr: "व्यापार वाढला", isCorrect: false },
      ],
    },
    {
      textEn: "Who wrote the grammar treatise 'Ashtadhyayi'?",
      textMr: "'अष्टाध्यायी' हा व्याकरण ग्रंथ कोणी लिहिला?",
      explanationEn:
        "Ashtadhyayi = Panini (8 chapters, 4000 sutras on Sanskrit grammar — world's first formal grammar). Mahabhashya = Patanjali (commentary on Ashtadhyayi). Rajatarangini = Kalhana (history of Kashmir). Harshacharita = Banabhatta (biography of Harsha). Panchatantra = Vishnu Sharma (animal fables for teaching statecraft). Natyashastra = Bharat Muni (drama, music, dance). Sangeetaratnakar = Sharangadeva (musicology). AMVI frequently tests 'book-author' pairs — memorize all of these.",
      explanationMr:
        "अष्टाध्यायी = पाणिनी (4000 सूत्रांचा संस्कृत व्याकरण ग्रंथ). महाभाष्य = पतंजली (पाणिनीच्या अष्टाध्यायीवर भाष्य). राजतरंगिणी = कल्हण (काश्मीरचा इतिहास). हर्षचरित = बाणभट्ट (हर्षवर्धनाचे चरित्र). पंचतंत्र = विष्णू शर्मा (जातक कथांवर आधारित). नाट्यशास्त्र = भरत मुनी. संगीतरत्नाकर = शारंगदेव. AMVI परीक्षेत 'ग्रंथ-लेखक' जोड्या नेहमी विचारल्या जातात.",
      options: [
        { label: "A", textEn: "Patanjali", textMr: "पतंजली", isCorrect: false },
        { label: "B", textEn: "Panini", textMr: "पाणिनी", isCorrect: true },
        { label: "C", textEn: "Yajnavalkya", textMr: "याज्ञवल्क्य", isCorrect: false },
        { label: "D", textEn: "Chanakya", textMr: "चाणक्य", isCorrect: false },
      ],
    },
    {
      textEn: "How was the Kailasa Temple at Ellora built?",
      textMr: "एलोरा येथील कैलास मंदिर कसे बांधले आहे?",
      explanationEn:
        "Kailasa Temple (Cave 16 at Ellora, Maharashtra) = carved from top to bottom out of a single massive rock — a unique top-down method unlike any other structure. Built by Rashtrakuta king Dantidurga/Krishna I. An estimated 200,000 tonnes of rock was removed! It is the world's largest monolithic rock-cut structure. Sanchi Stupa (Madhya Pradesh) = built by Ashoka; 4 Toranas (gateways) added later. Bhaje Vihara (Pune) = most ancient Buddhist Vihara. Karle Chaitya = largest Buddhist Chaitya in Maharashtra.",
      explanationMr:
        "एलोरा येथील कैलास मंदिर (लेणी क्र. 16) = राष्ट्रकूट राजा दंतिदुर्ग/कृष्ण I याने बांधले. एकाच प्रचंड खडकातून वरपासून खाली कोरून काढले — 200,000 टन दगड काढला! हे जगातील एकखंडी कोरीव कामाचे सर्वात मोठे उदाहरण आहे. सांची स्तूप = अशोकाने बांधले; 4 तोरणे नंतर जोडली. भाजे विहार = सर्वात प्राचीन विहार. कार्ले चैत्यगृह = महाराष्ट्रातील सर्वात मोठे चैत्यगृह.",
      options: [
        { label: "A", textEn: "With stone and bricks", textMr: "दगड-विटांनी", isCorrect: false },
        {
          label: "B",
          textEn: "Carved from a single rock, bottom to top",
          textMr: "एकाच खडकातून खालपासून वर",
          isCorrect: false,
        },
        {
          label: "C",
          textEn: "Carved from a single rock, top to bottom",
          textMr: "एकाच खडकातून वरपासून खाली",
          isCorrect: true,
        },
        { label: "D", textEn: "Wood and stone", textMr: "लाकूड आणि दगड", isCorrect: false },
      ],
    },
    {
      textEn: "Why is Sushruta called the 'Father of Surgery'?",
      textMr: "सुश्रुतांना 'शल्यक्रियेचे जनक' का म्हणतात?",
      explanationEn:
        "Sushruta = 'Father of Surgery'. Sushruta Samhita describes 1,120 diseases and over 300 surgical procedures including: Rhinoplasty (nose reconstruction — called 'Indian Flap' technique, still used today), Skin Grafting, Cataract surgery. Charaka Samhita = immunity, diet, lifestyle medicine — referenced in Arabia, Tibet, China. Jivaka = personal physician of Buddha. Medical science originated in Atharvaveda. Takshashila (Pakistan) = ancient university; Nalanda (Bihar, 5th cent CE, UNESCO Heritage, 10,000 students); Vikramshila (8th cent CE, Bhagalpur, Bihar).",
      explanationMr:
        "सुश्रुत = 'शल्यक्रियेचे जनक'. सुश्रुत संहिता = 1120 रोगांचे वर्णन; Rhinoplasty (नाक पुनर्रचना), Skin Grafting (Indian Flap Technique) यांचे जगातील पहिले वर्णन. चरक संहिता = आहार, जीवनशैली, रोगप्रतिकारशक्ती; अरबस्तान, तिबेट, चीनमध्ये संदर्भित. जीवक = बुद्धाचे वैद्यकीय चिकित्सक. वैद्यकशास्त्राचा उगम अथर्ववेदात. नालंदा विद्यापीठ (5वे शतक CE, गुप्त काळ) = 10,000 विद्यार्थी; UNESCO Heritage.",
      options: [
        { label: "A", textEn: "Described many diseases", textMr: "अनेक रोगांचे वर्णन केले", isCorrect: false },
        {
          label: "B",
          textEn: "Described Rhinoplasty and Skin Grafting",
          textMr: "Rhinoplasty आणि Skin Grafting वर्णन केले",
          isCorrect: true,
        },
        { label: "C", textEn: "Wrote Ayurveda", textMr: "आयुर्वेद लिहिला", isCorrect: false },
        { label: "D", textEn: "Discovered medicines", textMr: "औषधे शोधली", isCorrect: false },
      ],
    },
    {
      textEn: "In which period was Nalanda University established?",
      textMr: "नालंदा विद्यापीठ कोणत्या काळात स्थापन झाले?",
      explanationEn:
        "Nalanda University: Founded in the 5th century CE during Gupta period in Bihar — UNESCO World Heritage Site. Had 10,000 students, 2,000 teachers; nine-storey library called 'Dharmaganja'. Yuan Chwang (Xuanzang) — Chinese Buddhist monk — studied here for 5 years and translated 75+ Buddhist texts. Harsha patronized it greatly. Takshashila (near Rawalpindi, Pakistan) = oldest university; Chandragupta Maurya studied here. Vikramshila (8th cent CE, Bhagalpur, Bihar) = specialized in Buddhist philosophy, Tantra, Ayurveda.",
      explanationMr:
        "नालंदा विद्यापीठ: गुप्त काळात 5व्या शतकात स्थापना; बिहारमध्ये; UNESCO World Heritage Site; 10,000 विद्यार्थी, 2000 शिक्षक; हर्षवर्धनाने भरपूर अनुदान दिले; युआन च्वांगने नालंद्यात शिक्षण घेतले आणि 75+ बौद्ध ग्रंथांचे भाषांतर केले. तक्षशिला (पाकिस्तान, रावळपिंडीजवळ) = प्राचीनतम; चंद्रगुप्त मौर्याने शिक्षण घेतले. विक्रमशिला = 8वे शतक; बौद्ध तत्त्वज्ञान, तंत्र, आयुर्वेद; भागलपूर, बिहार.",
      options: [
        { label: "A", textEn: "Maurya period", textMr: "मौर्य काळ", isCorrect: false },
        { label: "B", textEn: "Kushana period", textMr: "कुशाण काळ", isCorrect: false },
        { label: "C", textEn: "Gupta period — 5th cent CE", textMr: "गुप्त काळ — 5वे शतक CE", isCorrect: true },
        { label: "D", textEn: "Vardhana period", textMr: "वर्धन काळ", isCorrect: false },
      ],
    },
    {
      textEn: "What was black pepper called in Rome?",
      textMr: "रोममध्ये काळ्या मिरीला काय म्हणत?",
      explanationEn:
        "Romans called black pepper 'Black Gold' because it was extremely valuable — used as currency and for preserving food. Roman writer Pliny the Elder wrote about gold flowing from Rome to India for spices. In Maharashtra: Ter (Dharashiv district) = important Indo-Roman trade centre where Roman coins and ivory doll were found. Kolhapur excavations yielded Roman bronze objects. India's exports to Rome: textiles, spices (pepper, cinnamon), precious gems, medicinal herbs, cotton. India imported: gold, silver, wine, slaves from Rome.",
      explanationMr:
        "रोमन लोक काळ्या मिरीला 'Black Gold' म्हणत कारण ती खूप मौल्यवान होती. रोमन लेखक प्लिनी यांनी लिहिले की भारताकडे सोने वाहत जात आहे (भारतीय मसाल्यांमुळे). महाराष्ट्रातील टेर (धाराशिव जिल्हा) = महत्त्वाचे भारत-रोमन व्यापार केंद्र; रोमन नाणी आणि हस्तिदंती बाहुली मिळाली. कोल्हापूर उत्खनन = रोमन कांस्य वस्तू. भारतातून निर्यात: वस्त्रे, मसाले, मौल्यवान रत्ने, हत्ती, कापूस.",
      options: [
        { label: "A", textEn: "Black Gold", textMr: "काळे सोने (Black Gold)", isCorrect: true },
        { label: "B", textEn: "Indian Gold", textMr: "भारतीय सोने", isCorrect: false },
        { label: "C", textEn: "Green Gem", textMr: "हिरवे रत्न", isCorrect: false },
        { label: "D", textEn: "King of Spices", textMr: "मसाल्याचे राजे", isCorrect: false },
      ],
    },
    {
      textEn: "How did the 'Gandhara Art Style' emerge?",
      textMr: "'गांधार शैली' कशी निर्माण झाली?",
      explanationEn:
        "Gandhara Art = unique Greco-Buddhist fusion style. After Alexander's invasion (326 BCE), Greek sculptural influence merged with Indian Buddhist art. For the first time, Buddha was depicted in human form (previously only symbols like wheel, footprints were used). Gandhara Buddha images resemble Greek god Apollo — wavy hair, realistic face, draped robes. This style flourished especially under Kushana king Kanishka. Two schools: Gandhara (northwest — Greek influence strong) and Mathura (central India — purely Indian style).",
      explanationMr:
        "गांधार शैली = भारतीय-ग्रीक (Greco-Buddhist) कला संमिश्रण. अलेक्झांडरच्या आक्रमणानंतर (326 BCE) ग्रीक शिल्पशैलीचा भारतीय कलेवर प्रभाव पडला. बुद्धाच्या मूर्ती ग्रीक देव अपोलोसारख्या दिसू लागल्या — घनदाट वस्त्रे, वास्तववादी चेहरा. यापूर्वी बुद्धाला मूर्तींमध्ये थेट दाखवले जात नसे — फक्त चिन्हे (चाक, पाऊलखुणा) वापरत. कनिष्काच्या काळात गांधार शैली सर्वोच्च विकसित झाली.",
      options: [
        {
          label: "A",
          textEn: "Greek sculptural style influenced Buddha images",
          textMr: "ग्रीक शिल्पशैलीने बुद्ध मूर्तींवर प्रभाव टाकला",
          isCorrect: true,
        },
        { label: "B", textEn: "Greeks carved the caves", textMr: "ग्रीकांनी लेणी खोदल्या", isCorrect: false },
        { label: "C", textEn: "Greeks brought music", textMr: "ग्रीकांनी संगीत आणले", isCorrect: false },
        { label: "D", textEn: "Greek philosophy came", textMr: "ग्रीक तत्त्वज्ञान आले", isCorrect: false },
      ],
    },
    {
      textEn: "Who was the Chairman of the Drafting Committee of the Constitution?",
      textMr: "मसुदा समितीचे (Drafting Committee) अध्यक्ष कोण होते?",
      explanationEn:
        "Key Constituent Assembly committees and chairmen: (1) Steering Committee = Dr. Rajendra Prasad (permanent President of Constituent Assembly). (2) Drafting Committee = Dr. B.R. Ambedkar — hence called 'Architect of Indian Constitution', had 7 members, established 29 August 1947. (3) Union Powers Committee = Pt. Jawaharlal Nehru. (4) Fundamental Rights & Minorities Committee = Sardar Vallabhbhai Patel. Constitution adopted: 26 November 1949 (Constitution Day); implemented: 26 January 1950 (Republic Day — chosen because this was when 'Purna Swaraj' was first declared in 1930).",
      explanationMr:
        "संविधान सभेतील प्रमुख समित्या आणि अध्यक्ष: (१) संचालन समिती (Steering) = डॉ. राजेंद्र प्रसाद (कायमचे अध्यक्ष), (२) मसुदा समिती (Drafting) = डॉ. बी.आर. आंबेडकर — म्हणून ते 'भारतीय राज्यघटनेचे शिल्पकार', (३) केंद्रीय अधिकार समिती = पं. जवाहरलाल नेहरू, (४) मूलभूत हक्क आणि अल्पसंख्याक समिती = सरदार वल्लभभाई पटेल. राज्यघटना स्वीकारली: 26 नोव्हेंबर 1949 (संविधान दिन); अंमलात: 26 जानेवारी 1950 (प्रजासत्ताक दिन).",
      options: [
        { label: "A", textEn: "Dr. Rajendra Prasad", textMr: "डॉ. राजेंद्र प्रसाद", isCorrect: false },
        { label: "B", textEn: "Pt. Nehru", textMr: "पं. नेहरू", isCorrect: false },
        { label: "C", textEn: "Dr. B.R. Ambedkar", textMr: "डॉ. बी.आर. आंबेडकर", isCorrect: true },
        { label: "D", textEn: "Sardar Patel", textMr: "सरदार पटेल", isCorrect: false },
      ],
    },
    {
      textEn: "When did the Indian Constitution come into effect?",
      textMr: "भारतीय राज्यघटना कधी अंमलात आली?",
      explanationEn:
        "Important dates: Constituent Assembly established 1946; First meeting 9 December 1946; Interim President Dr. Sachchidananda Sinha; Permanent President Dr. Rajendra Prasad; Legal Advisor B.N. Rau; Drafting Committee formed 29 August 1947; Constitution ADOPTED 26 November 1949 (Constitution Day); IMPLEMENTED 26 January 1950 (Republic Day). Original Constitution: Preamble + 22 Parts + 395 Articles + 8 Schedules; 299 members signed on 24 January 1950. English handwritten by Prem Behari Narain Raizada; Hindi by Vasant Krishna Vaidya; Decoration by Acharya Nandalal Bose.",
      explanationMr:
        "महत्त्वाच्या तारखा: संविधान सभा स्थापना = 1946; पहिली बैठक = 9 डिसेंबर 1946; मसुदा समिती स्थापना = 29 ऑगस्ट 1947; राज्यघटना स्वीकारली = 26 नोव्हेंबर 1949 (संविधान दिन); अंमलात = 26 जानेवारी 1950 (प्रजासत्ताक दिन). मूळ राज्यघटना: प्रस्तावना + 22 भाग + 395 अनुच्छेद + 8 परिशिष्टे. हस्तलिखित: प्रेम बिहारी नारायण रायझादा (इंग्रजी), वसंत कृष्ण वैद्य (हिंदी); सुशोभन: आचार्य नंदलाल बोस.",
      options: [
        { label: "A", textEn: "26 November 1949", textMr: "26 नोव्हेंबर 1949", isCorrect: false },
        { label: "B", textEn: "26 January 1950", textMr: "26 जानेवारी 1950", isCorrect: true },
        { label: "C", textEn: "15 August 1947", textMr: "15 ऑगस्ट 1947", isCorrect: false },
        { label: "D", textEn: "1 January 1950", textMr: "1 जानेवारी 1950", isCorrect: false },
      ],
    },
    {
      textEn: "What does 'Secular' mean in the context of the Indian Constitution?",
      textMr: "भारत 'धर्मनिरपेक्ष' (Secular) म्हणजे काय?",
      explanationEn:
        "Five key words in the Preamble: (1) Sovereign — no external authority over India; (2) Socialist — collective ownership, reduce inequality; (3) Secular — no official state religion; equal respect for all religions; (4) Democratic — people elect representatives; (5) Republic — no hereditary head of state; President elected. 'Sovereign' and 'Democratic' were original; 'Socialist' and 'Secular' were added by 42nd Constitutional Amendment (1976) during Emergency. Four objectives: Justice (social/economic/political), Liberty, Equality, Fraternity. Preamble described as 'Soul of the Constitution'.",
      explanationMr:
        "प्रस्तावनेतील पाच शब्द: (१) सार्वभौम (Sovereign) — बाह्य सत्तेचा वरचष्मा नाही, (२) समाजवादी (Socialist) — सामूहिक संपत्ती, विषमता कमी, (३) धर्मनिरपेक्ष (Secular) — अधिकृत राज्यधर्म नाही; सर्व धर्मांना समान आदर, (४) लोकशाही (Democratic) — लोक प्रतिनिधी निवडतात, (५) गणराज्य (Republic) — वंशपरंपरागत पद नाही; निवडणुकीद्वारे राष्ट्रपती. 'Sovereign' आणि 'Democratic' मूळपासून होते; 'Socialist' आणि 'Secular' 42व्या घटनादुरुस्तीने (1976) जोडले.",
      options: [
        { label: "A", textEn: "A religious state", textMr: "धार्मिक राज्य", isCorrect: false },
        {
          label: "B",
          textEn: "The state has no official religion",
          textMr: "राज्याचा कोणताही अधिकृत धर्म नाही",
          isCorrect: true,
        },
        { label: "C", textEn: "Everyone follows one religion", textMr: "सर्वांना एकच धर्म", isCorrect: false },
        { label: "D", textEn: "Religion is prohibited", textMr: "धर्म प्रतिबंधित", isCorrect: false },
      ],
    },
    {
      textEn: "What is the voting age under Universal Adult Franchise in India?",
      textMr: "सार्वत्रिक प्रौढ मताधिकारात (Universal Adult Franchise) मतदानाचे वय किती?",
      explanationEn:
        "Universal Adult Franchise = right to vote for ALL Indian citizens aged 18 and above, regardless of caste, religion, gender, or social status. 61st Constitutional Amendment (1989) lowered the voting age from 21 to 18. Nine features of Indian Constitution: (1) Largest Written Constitution, (2) Selected elements from world constitutions, (3) Blend of rigidity and flexibility, (4) Fundamental Rights, (5) Fundamental Duties (added by 42nd Amendment), (6) Directive Principles of State Policy, (7) Federal System, (8) Parliamentary Democracy, (9) Universal Adult Franchise.",
      explanationMr:
        "सार्वत्रिक प्रौढ मताधिकार = 18 वर्षे व त्यावरील सर्व भारतीय नागरिकांना मतदानाचा अधिकार (जाती, धर्म, लिंग, सामाजिक स्थान याने नाही). हे 61व्या घटनादुरुस्तीने (1989) 21 वरून 18 केले. भारतीय राज्यघटनेची 9 वैशिष्ट्ये: (१) सर्वात मोठी लिखित राज्यघटना, (२) जगातील घटनांमधून निवडक तत्त्वे, (३) कठोरता आणि लवचिकतेचा समन्वय, (४) मूलभूत हक्क, (५) मूलभूत कर्तव्ये, (६) मार्गदर्शक तत्त्वे, (७) संघराज्य पद्धती, (८) संसदीय लोकशाही, (९) सार्वत्रिक प्रौढ मताधिकार.",
      options: [
        { label: "A", textEn: "16 years", textMr: "16 वर्षे", isCorrect: false },
        { label: "B", textEn: "18 years", textMr: "18 वर्षे", isCorrect: true },
        { label: "C", textEn: "21 years", textMr: "21 वर्षे", isCorrect: false },
        { label: "D", textEn: "25 years", textMr: "25 वर्षे", isCorrect: false },
      ],
    },
    {
      textEn: "When was the 73rd Constitutional Amendment passed?",
      textMr: "73वी घटनादुरुस्ती कधी मंजूर झाली?",
      explanationEn:
        "73rd (Panchayati Raj) and 74th (Municipalities) Constitutional Amendments were both passed on 22 December 1992. Three-tier Panchayat Raj: (1) Gram Panchayat (village level), (2) Panchayat Samiti (taluka/block level), (3) Zilla Parishad (district level). Gram Sabha = all registered voters 18+ in village; meets minimum 4 times/year (26 Jan, 1 May, 15 Aug, 2 Oct). 50% seats reserved for women in Maharashtra. Hiware Bazar (Ahilyanagar) = ideal Gram Panchayat; Sarpanch Popatrao Pawar won Padma Shri 2020.",
      explanationMr:
        "73वी घटनादुरुस्ती (पंचायती राज) आणि 74वी (नगरपालिका) — दोन्ही 22 डिसेंबर 1992 रोजी मंजूर. पंचायत राजाची तीन-स्तरीय रचना: (१) ग्रामपंचायत (गाव), (२) पंचायत समिती (तालुका), (३) जिल्हा परिषद (जिल्हा). ग्रामसभा = गावातील सर्व 18+ मतदार; वर्षातून किमान 4 वेळा बैठक (26 जाने, 1 मे, 15 ऑग, 2 ऑक्टो). महिलांसाठी 50% आरक्षण (महाराष्ट्रात). हिवरे बाजार (अहिल्यानगर) = आदर्श ग्रामपंचायत; सरपंच पोपटराव पवार = पद्मश्री 2020.",
      options: [
        { label: "A", textEn: "15 August 1947", textMr: "15 ऑगस्ट 1947", isCorrect: false },
        { label: "B", textEn: "26 January 1950", textMr: "26 जानेवारी 1950", isCorrect: false },
        { label: "C", textEn: "22 December 1992", textMr: "22 डिसेंबर 1992", isCorrect: true },
        { label: "D", textEn: "1 May 1960", textMr: "1 मे 1960", isCorrect: false },
      ],
    },
    {
      textEn: "What determines the number of members in a Gram Panchayat?",
      textMr: "ग्रामपंचायतीचे सदस्य संख्या कशावर अवलंबून असते?",
      explanationEn:
        "Gram Panchayat member numbers in Maharashtra are based on POPULATION: up to 1500 = 7 members; 1501-3000 = 9; 3001-4500 = 11; 4501-6000 = 13; 6001-7500 = 15; above 7500 = 17 members. Sarpanch = directly elected by people in Maharashtra. Tenure = 5 years. Gram Sevak renamed 'Gram Panchayat Officer' (GR 23 September 2024). Group Gram Panchayat = 2+ villages with combined population under 600. BDO (Block Development Officer) = administrative head of Panchayat Samiti; selected via MPSC exams.",
      explanationMr:
        "ग्रामपंचायत सदस्य संख्या (महाराष्ट्र): लोकसंख्या 1500 पर्यंत = 7 सदस्य; 1501-3000 = 9; 3001-4500 = 11; 4501-6000 = 13; 6001-7500 = 15; 7500+ = 17. सरपंच = थेट लोकांकडून निवडणूक (महाराष्ट्रात). कार्यकाळ = 5 वर्षे. ग्राम सेवकाचे नवीन नाव: 'ग्रामपंचायत अधिकारी' (GR 23 सप्टेंबर 2024). Group Gram Panchayat = 2+ गावे एकत्र; एकत्रित लोकसंख्या 600 पेक्षा कमी. BDO (Block Development Officer) = पंचायत समितीचा प्रशासकीय प्रमुख; MPSC मार्फत निवड.",
      options: [
        { label: "A", textEn: "Area", textMr: "क्षेत्रफळावर", isCorrect: false },
        { label: "B", textEn: "Population", textMr: "लोकसंख्येवर", isCorrect: true },
        { label: "C", textEn: "Tax collection", textMr: "करवसुलीवर", isCorrect: false },
        { label: "D", textEn: "District decision", textMr: "जिल्ह्याच्या निर्णयावर", isCorrect: false },
      ],
    },
    {
      textEn: "How many Zilla Parishads are there in Maharashtra?",
      textMr: "महाराष्ट्रात एकूण किती जिल्हा परिषदा आहेत?",
      explanationEn:
        "Maharashtra has 36 districts but only 34 Zilla Parishads. Mumbai City and Mumbai Suburban districts are fully urbanized (no rural areas), so they have NO Zilla Parishad. ZP composition: 50-75 members; President (Adhyaksha) directly elected, 2.5-year tenure; CEO = IAS officer appointed by State Govt. Chairpersons of Panchayat Samitis are ex-officio members of ZP. ZP has 10 committees; Standing Committee is the most important. Zilla Parishad members' tenure = 5 years.",
      explanationMr:
        "महाराष्ट्रात 36 जिल्हे असले तरी फक्त 34 जिल्हा परिषदा आहेत. मुंबई शहर आणि मुंबई उपनगर हे दोन जिल्हे पूर्णपणे शहरी असल्याने त्यांना ZP नाही. ZP ची तुलना: सदस्य 50-75, अध्यक्ष = निवडून, 2.5 वर्षे; CEO = IAS अधिकारी (राज्य सरकार नियुक्त). पंचायत समितीचे सभापती हे ZP चे पदसिद्ध सदस्य असतात. ZP मध्ये 10 समित्या असतात; स्थायी समिती = सर्वाधिक महत्त्वाची.",
      options: [
        { label: "A", textEn: "36", textMr: "36", isCorrect: false },
        { label: "B", textEn: "34", textMr: "34", isCorrect: true },
        { label: "C", textEn: "30", textMr: "30", isCorrect: false },
        { label: "D", textEn: "32", textMr: "32", isCorrect: false },
      ],
    },
    {
      textEn: "What are the four urban local self-government bodies in Maharashtra?",
      textMr: "महाराष्ट्रातील चार नागरी स्वराज्य संस्था कोणत्या?",
      explanationEn:
        "Four urban local government bodies: (1) Nagar Panchayat — pop. 11,000-25,000; 17 members; President directly elected; 146 in Maharashtra (most in Nagpur Division). (2) Municipal Council (Nagar Parishad) — pop. 25,000-3,00,000; 17-38 members (Councillors); President directly elected; 248 in Maharashtra (most: 50 in Pune Division). (3) Municipal Corporation — pop. 3,00,000+; min. Rs. 2 crore income; Mayor elected by Corporators; tenure 2.5 years; 29 in Maharashtra; MCGM = 227 Corporators (highest); Commissioner = IAS. (4) Cantonment Board — est. 1924; Defence Ministry; 61 in India; 7 in Maharashtra.",
      explanationMr:
        "चार नागरी स्वराज्य संस्था: (१) नगरपंचायत — लोकसंख्या 11,000-25,000; 17 सदस्य; अध्यक्ष थेट निवडणूक; महाराष्ट्रात 146; (२) नगरपरिषद — 25,000-3,00,000; 17-38 सदस्य; नगराध्यक्ष थेट; महाराष्ट्रात 248; (३) महानगरपालिका — 3,00,000+; किमान 65 नगरसेवक; महापौर; 29 महाराष्ट्रात; MCGM = 227 नगरसेवक (सर्वाधिक); (४) कँटोन्मेंट बोर्ड — 1924; संरक्षण मंत्रालय; भारतात 61; महाराष्ट्रात 7.",
      options: [
        {
          label: "A",
          textEn: "Gram Panchayat, Nagar Panchayat, Municipal Corporation, ZP",
          textMr: "ग्रामपंचायत, नगरपंचायत, महानगरपालिका, ZP",
          isCorrect: false,
        },
        {
          label: "B",
          textEn: "Nagar Panchayat, Municipal Council, Municipal Corporation, Cantonment Board",
          textMr: "नगरपंचायत, नगरपरिषद, महानगरपालिका, कँटोन्मेंट बोर्ड",
          isCorrect: true,
        },
        {
          label: "C",
          textEn: "Nagar Panchayat, Municipal Council, Municipal Corporation, Gram Panchayat",
          textMr: "नगरपंचायत, नगरपरिषद, महानगरपालिका, ग्रामपंचायत",
          isCorrect: false,
        },
        {
          label: "D",
          textEn: "Zilla Parishad, Municipal Council, Municipal Corporation, Cantonment Board",
          textMr: "जिल्हा परिषद, नगरपरिषद, महानगरपालिका, कँटोन्मेंट बोर्ड",
          isCorrect: false,
        },
      ],
    },
    {
      textEn: "In Class I Cantonment Board, how many of the 15 members are elected?",
      textMr: "कँटोन्मेंट बोर्ड Class I मध्ये 15 सदस्यांपैकी किती निवडून येतात?",
      explanationEn:
        "Cantonment Board categories: Class I (pop. 50,000+, 15 members: 7 ELECTED + 8 NOMINATED); Class II (10,000-50,000, 15 members); Class III (2,500-10,000, 9 members); Class IV (below 2,500, 3 members). Key rule: NOMINATED always OUTNUMBER ELECTED (military representatives dominate). Executive Officer = appointed by Central Government (Defence Ministry). 7 Cantonment Boards in Maharashtra: Khadki, Pune Camp, Dehuroad, Bhingar (Ahilyanagar), Deolali (Nashik), Chhatrapati Sambhaji Nagar, Kamptee (Nagpur).",
      explanationMr:
        "कँटोन्मेंट बोर्ड श्रेण्या: Class I (लोकसंख्या 50,000+, 15 सदस्य: 7 निवडून + 8 नामनिर्देशित); Class II (10,000-50,000, 15 सदस्य); Class III (2,500-10,000, 9 सदस्य); Class IV (2,500 पेक्षा कमी, 3 सदस्य). नामनिर्देशित > निवडून (लष्करी प्रतिनिधित्व अधिक). Executive Officer = केंद्र सरकार नियुक्त. महाराष्ट्रातील 7 CB: खडकी, पुणे कॅम्प, देहूरोड, भिंगार (अहिल्यानगर), देवळाली (नाशिक), छत्रपती संभाजीनगर, कामटी (नागपूर).",
      options: [
        { label: "A", textEn: "9", textMr: "9", isCorrect: false },
        { label: "B", textEn: "7", textMr: "7", isCorrect: true },
        { label: "C", textEn: "6", textMr: "6", isCorrect: false },
        { label: "D", textEn: "10", textMr: "10", isCorrect: false },
      ],
    },
    {
      textEn: "Which of the following is NOT one of the District Collector's 4 key roles?",
      textMr: "जिल्हाधिकाऱ्याच्या 4 प्रमुख कार्यांपैकी कोणते बरोबर नाही?",
      explanationEn:
        "Four key roles of District Collector: (1) Revenue-Related — land revenue collection, tax, land records, maintenance of land boundaries. (2) As District Magistrate — law and order, inspecting police stations annually, issuing prohibitory orders under Section 144. (3) As District Election Officer — Parliamentary and Legislative Assembly elections, voter list updates, security. (4) Disaster Management — ex-officio Chairperson of District Disaster Management Committee. Revenue hierarchy: Collector → Deputy Collector → Tehsildar → Naib Tehsildar → Mandal Officer → Talathi → Kotwal.",
      explanationMr:
        "जिल्हाधिकाऱ्याच्या 4 प्रमुख भूमिका: (१) महसूल-संबंधित अधिकार — जमीन महसूल, कर संकलन, जमीन नोंदी. (२) जिल्हा दंडाधिकारी म्हणून — कायदा-सुव्यवस्था, पोलीस ठाणी वार्षिक तपासणी, प्रतिबंधक आदेश. (३) जिल्हा निवडणूक अधिकारी — लोकसभा व विधानसभा निवडणुका. (४) आपत्ती व्यवस्थापन — जिल्हा आपत्ती व्यवस्थापन समितीचा पदसिद्ध अध्यक्ष. महसूल श्रेणी: DC → उपजिल्हाधिकारी → तहसीलदार → नाईब तहसीलदार → मंडल अधिकारी → तलाठी → कोतवाल.",
      options: [
        { label: "A", textEn: "Revenue-related powers", textMr: "महसूल संबंधित अधिकार", isCorrect: false },
        {
          label: "B",
          textEn: "Functioning as District Magistrate",
          textMr: "जिल्हा दंडाधिकारी म्हणून कार्य",
          isCorrect: false,
        },
        {
          label: "C",
          textEn: "Functioning as District Education Officer",
          textMr: "जिल्हा शिक्षण अधिकारी म्हणून कार्य",
          isCorrect: true,
        },
        { label: "D", textEn: "Disaster management", textMr: "आपत्ती व्यवस्थापन", isCorrect: false },
      ],
    },
    {
      textEn: "What is the motto of Maharashtra Police?",
      textMr: "महाराष्ट्र पोलिसांचे ब्रीदवाक्य काय आहे?",
      explanationEn:
        "Maharashtra Police motto: 'Sadrakshanaya Khalanigrahanaya' = 'For protection of good people and suppression of evil'. Cyber helpline = 1930. Superintendent of Police (SP) = district police chief; selected via UPSC. Nine levels of police hierarchy: SP → Additional SP → Deputy SP → Police Inspector → API → Sub-Inspector → ASI → Head Constable → Constable. Judicial administration: District Judge (civil cases) / Sessions Judge (criminal cases); appointed by Governor on High Court recommendation. Legal Services Authority (est. 1987) provides free legal aid to the poor.",
      explanationMr:
        "महाराष्ट्र पोलीस ब्रीदवाक्य: 'सद्रक्षणाय खलनिग्रहणाय' = 'सज्जनांचे रक्षण करण्यासाठी, दुर्जनांना दडपण्यासाठी'. सायबर गुन्हे हेल्पलाइन = 1930. पोलीस अधीक्षक (SP) = जिल्हा पोलीस प्रमुख; UPSC मार्फत निवड. पोलीस श्रेणी (9 स्तर): SP → Additional SP → Deputy SP → PI → API → Sub-Inspector → ASI → Head Constable → Constable. न्यायिक प्रशासन: जिल्हा न्यायाधीश (दिवाणी) / Session Judge (फौजदारी); राज्यपाल उच्च न्यायालयाच्या शिफारशीवर नियुक्त करतात.",
      options: [
        { label: "A", textEn: "Satyamev Jayate", textMr: "सत्यमेव जयते", isCorrect: false },
        {
          label: "B",
          textEn: "Sadrakshanaya Khalanigrahanaya",
          textMr: "सद्रक्षणाय खलनिग्रहणाय",
          isCorrect: true,
        },
        { label: "C", textEn: "Jai Maharashtra", textMr: "जय महाराष्ट्र", isCorrect: false },
        { label: "D", textEn: "Vayam Rakshamah", textMr: "वयम् रक्षामः", isCorrect: false },
      ],
    },
    {
      textEn: "Which dynasty built the Kailasa Temple at Ellora?",
      textMr: "एलोरा येथील कैलास मंदिर कोणत्या वंशाने बांधले?",
      explanationEn:
        "Ellora Cave 16 (Kailasa Temple) was built by Rashtrakuta king Krishna-I in the 8th century CE. Ellora total 34 caves: 12 Buddhist (1-12), 17 Hindu (13-29), 5 Jain (30-34). Ajanta = 30 caves, all Buddhist, known for paintings and sculptures. Both Ajanta & Ellora: UNESCO World Heritage Site 1983. Key difference: Ajanta = paintings only; Ellora = rock-cut architecture (most spectacular).",
      explanationMr:
        "एलोरा लेणी क्र.16 (कैलास मंदिर) राष्ट्रकूट राजा कृष्ण-I याने 8व्या शतकात बांधले. एलोरा एकूण 34 लेणी: 12 बौद्ध (1-12), 17 हिंदू (13-29), 5 जैन (30-34). अजंता = 30 लेणी; सर्व बौद्ध; फक्त चित्रकला व शिल्पकला. UNESCO: अजंता व एलोरा दोन्ही 1983 मध्ये जागतिक वारसा यादीत.",
      options: [
        { label: "A", textEn: "Chalukya", textMr: "चालुक्य", isCorrect: false },
        { label: "B", textEn: "Pallava", textMr: "पल्लव", isCorrect: false },
        { label: "C", textEn: "Rashtrakuta", textMr: "राष्ट्रकूट", isCorrect: true },
        { label: "D", textEn: "Shilahara", textMr: "शिलाहार", isCorrect: false },
      ],
    },
    {
      textEn: "What is Numismatics?",
      textMr: "नाणकशास्त्र म्हणजे काय?",
      explanationEn:
        "Numismatics = scientific study of coins and currency. It is a key historical source because coins reveal the ruler, time period, religion, trade routes, and economic conditions. Epigraphy = study of inscriptions (stone/metal). Palaeography = study of ancient manuscripts/handwriting. Archaeology = excavation of ancient sites. Sigillography = study of seals and stamps. All these are sub-disciplines of historical research important for AMVI.",
      explanationMr:
        "नाणकशास्त्र (Numismatics) = नाण्यांचा व नोटांचा शास्त्रीय अभ्यास. हे महत्त्वाचे इतिहास-साधन आहे कारण नाण्यांवरून राज्यकर्ता, काळ, व्यापार, धर्म कळतो. अभिलेखशास्त्र (Epigraphy) = शिलालेखांचा अभ्यास. पुरालेखशास्त्र (Palaeography) = प्राचीन हस्तलेखांचा अभ्यास. पुरातत्त्वशास्त्र (Archaeology) = उत्खनन. मुद्राशास्त्र (Sigillography) = शिक्के/मुद्रांचा अभ्यास.",
      options: [
        { label: "A", textEn: "Study of accounts/writings", textMr: "लेखांचा अभ्यास", isCorrect: false },
        { label: "B", textEn: "Study of coins", textMr: "नाण्यांचा अभ्यास", isCorrect: true },
        { label: "C", textEn: "Study of inscriptions", textMr: "शिलालेखांचा अभ्यास", isCorrect: false },
        { label: "D", textEn: "Study of manuscripts", textMr: "हस्तलिखितांचा अभ्यास", isCorrect: false },
      ],
    },
    {
      textEn: "Which is an important Palaeolithic site in Maharashtra?",
      textMr: "महाराष्ट्रातील पुरापाषाण काळातील महत्त्वाचे स्थळ कोणते?",
      explanationEn:
        "Maharashtra Palaeolithic sites: Gangapur (Nashik), Chirki-Nevasa (Ahilyanagar, River Pravara). Mesolithic: Patne (Jalgaon, River Tapi) — microliths discovered, 10,000 years old; earliest dog domestication evidence. Chalcolithic sites in Maharashtra: Inamgaon (Pune) — most extensively excavated; Jorwe (Ahilyanagar — gave name to 'Jorwe Culture'); Daimabad; Nevasa; Savalda; Songaon. Inamgaon shows evidence of rectangular houses, pottery, burial under house floors.",
      explanationMr:
        "महाराष्ट्रातील पाषाण काळातील स्थळे: पुरापाषाण — गंगापूर (नाशिक), चिर्की-नेवासा (अहिल्यानगर, प्रवरा नदीकाठी). मध्यपाषाण — पाटणे (जळगाव, तापी नदीकाठी); 10,000 वर्षांपूर्वीच्या सूक्ष्म अवजारे (microliths). ताम्रपाषाण — इनामगाव (पुणे), जोर्वे, दायमाबाद, नेवासा, सावळदा, सोनगाव. इनामगाव सर्वात अधिक अभ्यासलेले ताम्रपाषाण स्थळ.",
      options: [
        { label: "A", textEn: "Inamgaon", textMr: "इनामगाव", isCorrect: false },
        { label: "B", textEn: "Daimabad", textMr: "दायमाबाद", isCorrect: false },
        { label: "C", textEn: "Chirki-Nevasa", textMr: "चिर्की-नेवासा", isCorrect: true },
        { label: "D", textEn: "Lothal", textMr: "लोथल", isCorrect: false },
      ],
    },
    {
      textEn: "What is Bhimbetka (Madhya Pradesh) famous for?",
      textMr: "भीमबेटका (Bhimbetka) प्रसिद्ध का आहे?",
      explanationEn:
        "Bhimbetka (Madhya Pradesh) = UNESCO World Heritage Site (2003); houses world's oldest known rock cave paintings — some 30,000 years old; over 750 caves; paintings show hunting, dancing, animals in red and white colours; discovered by V.S. Wakankar in 1957. These are Palaeolithic / Mesolithic cave paintings. In Maharashtra, prehistoric rock art (cup marks, petroglyphs) is found at Ratnagiri, Sindhudurg, and other Konkan districts.",
      explanationMr:
        "भीमबेटका (मध्यप्रदेश) = UNESCO जागतिक वारसा स्थळ (2003); जगातील सर्वात जुनी गुहा चित्रे (30,000 वर्षांपूर्वीची); 750 गुहा; लाल व पांढऱ्या रंगाच्या चित्रांमध्ये शिकार, नृत्य, प्राणी दाखवले. V.S. Wakankar यांनी 1957 मध्ये शोधले. महाराष्ट्रात रायगड जिल्ह्यात कर्जत जवळ कुडा लेणी येथे प्रागैतिहासिक कोरीव काम आढळते.",
      options: [
        { label: "A", textEn: "Excavation site", textMr: "उत्खनन स्थळ", isCorrect: false },
        { label: "B", textEn: "Stone Age cave paintings", textMr: "पाषाणकालीन गुहा चित्रे", isCorrect: true },
        { label: "C", textEn: "Prehistoric city", textMr: "प्रागैतिहासिक शहर", isCorrect: false },
        { label: "D", textEn: "Neolithic tools", textMr: "नवपाषाण अवजारे", isCorrect: false },
      ],
    },
    {
      textEn: "Chalcolithic Age means the use of which two things?",
      textMr: "ताम्रपाषाण (Chalcolithic) काळ म्हणजे कोणत्या दोन गोष्टींचा वापर?",
      explanationEn:
        "Chalcolithic = Copper (Chalco) + Stone (Lithic). This transitional period between Neolithic and Bronze Age used BOTH copper and stone tools simultaneously. India: 3500-1500 BCE. Key fact: Copper was the FIRST metal used by humans. Bronze (copper + tin) came later. Iron came last during late Vedic period (~1000 BCE). In Maharashtra, Jorwe Culture is the finest example of Chalcolithic civilization. Agriculture, pottery, settlements, and early trade emerged in this period.",
      explanationMr:
        "ताम्रपाषाण = तांबे (Copper) + दगड (Stone) = Chalcolithic (Chalco = copper, Lithic = stone). हा नवपाषाण आणि कांस्ययुगाच्या मध्यचा काळ आहे. भारतात: 3500-1500 BCE. महत्त्वाचे: जोर्वे संस्कृती (महाराष्ट्र) ताम्रपाषाण संस्कृतीचे उत्कृष्ट उदाहरण. तांबे = पहिला वापरलेला धातू. कांस्य (Bronze) = तांबे + कथिल; नंतरच्या काळात. लोखंड = सर्वात शेवटी, वैदिक उत्तरकाळात (1000 BCE).",
      options: [
        { label: "A", textEn: "Gold and stone", textMr: "सोने आणि दगड", isCorrect: false },
        { label: "B", textEn: "Copper and stone", textMr: "तांबे आणि दगड", isCorrect: true },
        { label: "C", textEn: "Iron and stone", textMr: "लोखंड आणि दगड", isCorrect: false },
        { label: "D", textEn: "Bronze and clay", textMr: "कांस्य आणि माती", isCorrect: false },
      ],
    },
    {
      textEn: "Why can't the Harappan script be read yet?",
      textMr: "हडप्पा लिपी (Harappan Script) अजूनही का वाचता येत नाही?",
      explanationEn:
        "Harappan script remains undeciphered because there is no Bilingual Key (Rosetta Stone equivalent) — no text found in both Harappan and a known language. Script direction: Boustrophedon (right to left, then left to right). Around 400-600 signs. Key researchers: Asko Parpola (Finland), S.R. Rao (India). Compare: Egyptian hieroglyphs were deciphered using the Rosetta Stone (found 1799) by French scholar Champollion. Sumerian cuneiform was deciphered by Henry Rawlinson.",
      explanationMr:
        "हडप्पा लिपी अजूनही पूर्णपणे उलगडलेली नाही कारण कोणताही 'Rosetta Stone' सारखा द्विभाषिक शिलालेख सापडलेला नाही. लिपी उजवीकडून डावीकडे लिहिली जाते (Boustrophedon). सुमारे 400-600 चिन्हे आहेत. सर्वाधिक प्रयत्न: Asko Parpola (Finland), S.R. Rao (भारत). मिस्रातील हायरोग्लिफिक्स = Rosetta Stone (1799) मुळे उलगडले — फ्रेंच शास्त्रज्ञ Champollion यांनी.",
      options: [
        { label: "A", textEn: "The script is too old", textMr: "लिपी खूप जुनी आहे", isCorrect: false },
        {
          label: "B",
          textEn: "No bilingual inscription (Bilingual key) is available",
          textMr: "द्विभाषिक शिलालेख (Bilingual key) उपलब्ध नाही",
          isCorrect: true,
        },
        { label: "C", textEn: "The script was destroyed", textMr: "लिपी नष्ट झाली", isCorrect: false },
        { label: "D", textEn: "The script is too short", textMr: "लिपी खूप लहान आहे", isCorrect: false },
      ],
    },
    {
      textEn: "What is the most accepted reason for the decline of Harappan Civilisation?",
      textMr: "हडप्पा संस्कृती ऱ्हासाचे सर्वमान्य कारण कोणते?",
      explanationEn:
        "Decline of Harappan Civilisation — multiple theories: (1) Climate change and river course shifts (MOST ACCEPTED today) — Ghaggar-Hakra river dried up, floods disrupted agriculture. (2) Aryan invasion theory (Mortimer Wheeler) — now largely rejected by modern scholars. (3) Environmental degradation — deforestation and soil erosion. (4) Earthquakes (M.R. Sahni). Modern consensus: Multiple factors — especially climate change, river shifts, and epidemics around 1900 BCE. NOT a single catastrophic event.",
      explanationMr:
        "हडप्पा संस्कृतीच्या ऱ्हासाची कारणे (वेगवेगळ्या विद्वानांनी सुचवलेली): (१) पूर आणि हवामान बदल (सर्वमान्य) — घग्गर-हाक्रा नदी वाट बदलली, (२) आर्यांचे आक्रमण (Mortimer Wheeler — आता जास्त मान्यता नाही), (३) अतिशोषण — जंगलतोड, (४) भूकंप (M. R. Sahni). आधुनिक संशोधन: पर्यावरण बदल + नदी मार्ग बदल = सर्वात स्वीकारार्ह सिद्धांत. संस्कृतीचा शेवट 1900 BCE च्या सुमारास.",
      options: [
        { label: "A", textEn: "Aryan invasion", textMr: "आर्यांचे आक्रमण", isCorrect: false },
        { label: "B", textEn: "Floods and climate change", textMr: "पूर आणि हवामान बदल", isCorrect: true },
        { label: "C", textEn: "Epidemic", textMr: "रोगसाथ", isCorrect: false },
        { label: "D", textEn: "Earthquake", textMr: "भूकंप", isCorrect: false },
      ],
    },
    {
      textEn: "What was a key feature of town planning in Harappan Civilisation?",
      textMr: "हडप्पा संस्कृतीत शहर नियोजनाचे वैशिष्ट्य काय होते?",
      explanationEn:
        "Harappan town planning features: (1) Grid system — roads at right angles; main roads E-W, lanes N-S. (2) Standardized baked bricks — 1:2:4 ratio. (3) Underground drainage system — individual house drains connected to main covered sewers (most advanced ancient drainage system). (4) Two distinct sections — elevated Citadel (Acropolis) on west + Lower Town on east. (5) Public buildings — Great Bath, Granaries. (6) Uniform weights and measures across all sites — shows central authority. This grid-drainage system surpassed contemporary civilizations.",
      explanationMr:
        "हडप्पाचे नगर नियोजन: (१) ग्रिड पद्धत — रस्ते एकमेकांना काटकोनात; मोठे रस्ते पूर्व-पश्चिम, लहान रस्ते उत्तर-दक्षिण. (२) पक्क्या विटांचे घरे — 1:2:4 गुणोत्तर. (३) ड्रेनेज सिस्टम — घरातून गटाराद्वारे मुख्य ड्रेनेजला जोडणे; झाकलेल्या नाल्या. (४) दोन भाग — उंच 'दुर्ग' (Citadel) पश्चिमेस + खालचे शहर पूर्वेस. (५) सार्वजनिक इमारती — महास्नानगृह, धान्य कोठारे (Granaries).",
      options: [
        { label: "A", textEn: "Mud roads", textMr: "मातीचे रस्ते", isCorrect: false },
        { label: "B", textEn: "Secret tunnels", textMr: "गुप्त बोगदे", isCorrect: false },
        {
          label: "C",
          textEn: "Grid-pattern planning and excellent drainage",
          textMr: "ग्रिड पद्धतीचे नियोजन व उत्कृष्ट ड्रेनेज",
          isCorrect: true,
        },
        { label: "D", textEn: "Wooden buildings", textMr: "लाकडाच्या इमारती", isCorrect: false },
      ],
    },
    {
      textEn: "What is the Gurukul system of education?",
      textMr: "गुरुकुल शिक्षण पद्धती म्हणजे काय?",
      explanationEn:
        "Gurukul = Guru + Kul (family). Students aged 8-12 would live in the teacher's home/ashram. Upanayana Samskara = entry ceremony; wearing sacred thread (Janava/Yajnopavita); only for Dvija (Brahmin, Kshatriya, Vaishya). Curriculum: Vedic memorization, arithmetic, astronomy, warfare, grammar, law. System ended at Samavartan ceremony. Key universities: Takshashila (northwest, oldest) and Nalanda (Gupta period). Notable Vedic women scholars: Gargi (debated Yajnavalkya), Maitreyi, Lopamudra, Ghosha, Apala — showing women had access to education.",
      explanationMr:
        "गुरुकुल = गुरू + कुल (कुटुंब). विद्यार्थी 8-12 वर्षे वयात गुरूच्या घरी/आश्रमात राहत असे. उपनयन संस्कार = प्रवेश; जानवे (sacred thread) घालणे; फक्त द्विज (ब्राह्मण, क्षत्रिय, वैश्य). गुरूसेवा करणे, वेद पाठांतर, व्यावहारिक शिक्षण. तक्षशिला + नालंदा = उच्च शिक्षण. वैदिक काळात स्त्री शिक्षण — गार्गी, मैत्रेयी, लोपामुद्रा या महिला विद्वान होत्या. मनुस्मृतीने स्त्री शिक्षण मर्यादित केले — नंतरच्या काळात.",
      options: [
        { label: "A", textEn: "Education in schools", textMr: "शाळेतील शिक्षण", isCorrect: false },
        {
          label: "B",
          textEn: "Living and studying in the teacher's ashram",
          textMr: "गुरूच्या आश्रमात राहून शिक्षण",
          isCorrect: true,
        },
        { label: "C", textEn: "Religious education", textMr: "धार्मिक शिक्षण", isCorrect: false },
        { label: "D", textEn: "Only memorizing the Vedas", textMr: "केवळ वेद पाठांतर", isCorrect: false },
      ],
    },
    {
      textEn: "What was the status of women in the Rigvedic period?",
      textMr: "ऋग्वैदिक काळात महिलांची स्थिती कशी होती?",
      explanationEn:
        "In Rigvedic period, women had a HIGH status: participated in Yajnas (fire sacrifices), received education, some were 'Brahma-vadinis' (women philosophers who never married and pursued learning), practiced Swayamvar (choosing own husband). Women composers in Rigveda: Lopamudra, Apala, Vishvavara, Ghosha. Later Vedic period — decline: child marriage, purdah, restrictions on education. Gargi debated Yajnavalkya in Brihadaranyaka Upanishad. Maitreyi (Yajnavalkya's wife) chose spiritual knowledge over wealth.",
      explanationMr:
        "ऋग्वैदिक काळात महिलांची स्थिती उत्तम होती: यज्ञात सहभाग, शिक्षण घेणे, 'ब्रह्मवादिनी' (महिला तत्त्वज्ञ), स्वयंवर प्रथा (वर निवडण्याचा अधिकार). उत्तरवैदिक काळात — स्थिती खाली गेली: बालविवाह, पर्दा, शिक्षणावर बंधन. लोपामुद्रा — ऋग्वेदात स्वतःचे स्तोत्र लिहिले. गार्गी — उपनिषदांत याज्ञवल्क्याशी शास्त्रार्थ. मैत्रेयी — याज्ञवल्क्याची पत्नी; आत्मज्ञान घेतले. विश्ववारा — ऋग्वेदात ऋषी म्हणून उल्लेख.",
      options: [
        { label: "A", textEn: "Very low status", textMr: "अत्यंत कमी दर्जा", isCorrect: false },
        { label: "B", textEn: "Confined at home", textMr: "घरात बंदिस्त", isCorrect: false },
        {
          label: "C",
          textEn: "Had rights and education; practiced Swayamvar",
          textMr: "अधिकार व शिक्षण होते; स्वयंवर प्रथा",
          isCorrect: true,
        },
        { label: "D", textEn: "Were maidservants", textMr: "दासी होत्या", isCorrect: false },
      ],
    },
    {
      textEn: "What is the main teaching of the Upanishads?",
      textMr: "उपनिषदांची मुख्य शिकवण काय आहे?",
      explanationEn:
        "Upanishads (200+) = philosophical end of the Vedas; hence 'Vedanta' (end of Vedas). 108 Upanishads; 13 are major. Oldest: Brihadaranyaka and Chandogya. Shankaracharya wrote commentary on 11 Upanishads. Core teachings: (1) Brahman = universal supreme consciousness, (2) Atman = individual self/soul, (3) Atman = Brahman (Aham Brahmasmi = I am Brahman), (4) Moksha = liberation from cycle of birth-death. Upanishads influenced: Schopenhauer, Emerson, Thoreau. Indian Navy motto 'Sham No Varunah' is from Brihadaranyaka Upanishad.",
      explanationMr:
        "उपनिषदे (200+) = वेदांचा शेवट; म्हणून 'वेदांत'. मुख्य उपनिषदे 108; प्रमुख 13. सर्वात जुने = बृहदारण्यक आणि छांदोग्य. शंकराचार्यांनी 11 उपनिषदांवर भाष्य लिहिले. मुख्य तत्त्वे: (१) ब्रह्म = सर्वोच्च वैश्विक शक्ती, (२) आत्मा = वैयक्तिक चैतन्य, (३) आत्मा = ब्रह्म (अहं ब्रह्मास्मि), (४) मोक्ष = जन्म-मृत्यू चक्रातून मुक्ती. भारतीय नौदलाचे ब्रीदवाक्य 'शं नो वरुणः' मंत्र बृहदारण्यक उपनिषदातून.",
      options: [
        { label: "A", textEn: "Performing yajnas", textMr: "यज्ञ करणे", isCorrect: false },
        {
          label: "B",
          textEn: "Atman and Brahman are one (Aham Brahmasmi)",
          textMr: "आत्मा आणि ब्रह्म एकच आहेत (अहं ब्रह्मास्मि)",
          isCorrect: true,
        },
        { label: "C", textEn: "Observing vows", textMr: "व्रत पाळणे", isCorrect: false },
        { label: "D", textEn: "Giving charity", textMr: "दान करणे", isCorrect: false },
      ],
    },
    {
      textEn: "What does 'Vanaprastha' mean among the four Ashrams?",
      textMr: "चार आश्रमांपैकी 'वानप्रस्थ' म्हणजे काय?",
      explanationEn:
        "Four Ashrams (stages of life): (1) Brahmacharya (0-25) = student; gurukul education; celibacy. (2) Grihastha (25-50) = householder; marriage, family, earning, paying taxes — considered the most important Ashram as it supports all others. (3) Vanaprastha (50-75) = 'forest departure'; semi-retirement; handover responsibilities to children; begin spiritual practice. (4) Sannyasa (75+) = complete renunciation; live on alms; seek Moksha. Combined with four Purusharthas (Dharma, Artha, Kama, Moksha) this framework structures the entire Vedic life.",
      explanationMr:
        "चार आश्रम: (१) ब्रह्मचर्य (0-25) = विद्यार्थी; गुरुकुलात शिक्षण; ब्रह्मचर्य पाळणे. (२) गृहस्थ (25-50) = विवाहित जीवन; कुटुंब, व्यवसाय, कर चुकवणे नाही. (३) वानप्रस्थ (50-75) = 'वन + प्रस्थान'; आंशिक वैराग्य; घरगुती जबाबदाऱ्या मुलांकडे; आध्यात्मिक साधना सुरुवात. (४) संन्यास (75+) = संपूर्ण त्याग; भिक्षेवर जगणे; मोक्षासाठी. हे चार आश्रम 'पुरुषार्थ' (धर्म, अर्थ, काम, मोक्ष) सोबत वैदिक जीवन पद्धतीचा आधार आहे.",
      options: [
        { label: "A", textEn: "Student life", textMr: "विद्यार्थी जीवन", isCorrect: false },
        { label: "B", textEn: "Married householder life", textMr: "विवाहित गृहस्थ जीवन", isCorrect: false },
        {
          label: "C",
          textEn: "Partial renunciation — going to the forest",
          textMr: "आंशिक वैराग्य — वनात जाणे",
          isCorrect: true,
        },
        { label: "D", textEn: "Complete renunciation", textMr: "संपूर्ण संन्यास", isCorrect: false },
      ],
    },
    {
      textEn: "What are the two main sects of Buddhism?",
      textMr: "बौद्ध धर्माचे दोन मुख्य पंथ कोणते?",
      explanationEn:
        "Two main Buddhist sects: (1) Mahayana (Greater Vehicle) — Bodhisattva concept (beings who delay nirvana to help others); idol worship introduced; spread to China, Japan, Tibet, Korea; developed under Kanishka. Key text: Prajnaparamita Sutra. (2) Hinayana (Lesser Vehicle)/Theravada — original Buddhist teachings; no idol worship; focus on individual Nirvana; spread to Sri Lanka, Myanmar, Thailand. Third sect: Vajrayana (Thunderbolt Vehicle) = Tantric Buddhism; dominant in Tibet. Jain sects: Digambara (sky-clad) vs Shvetambara (white-clad).",
      explanationMr:
        "बौद्ध धर्माचे दोन मुख्य पंथ: (१) महायान (Greater Vehicle) — बोधिसत्त्वाची संकल्पना; मूर्तीपूजा; चीन, जपान, तिबेट, कोरियात पसरले; कनिष्काच्या काळात विकसित. (२) हीनयान (Lesser Vehicle)/थेरवाद — मूळ बौद्ध शिकवण; मूर्तीपूजा नाही; श्रीलंका, म्यानमार, थायलंड. तिसरा पंथ: वज्रयान (Thunderbolt Vehicle) = तांत्रिक बौद्ध धर्म; तिबेटमध्ये. जैन धर्माचे दोन पंथ: दिगंबर (वस्त्र नाही) आणि श्वेतांबर (पांढरे वस्त्र).",
      options: [
        {
          label: "A",
          textEn: "Shravakayana and Pratyekayana",
          textMr: "श्रावकयान आणि प्रत्येकयान",
          isCorrect: false,
        },
        { label: "B", textEn: "Mahayana and Hinayana", textMr: "महायान आणि हीनयान", isCorrect: true },
        { label: "C", textEn: "Theravada and Vajrayana", textMr: "थेरवाद आणि वज्रयान", isCorrect: false },
        { label: "D", textEn: "Digambara and Shvetambara", textMr: "दिगंबर आणि श्वेतांबर", isCorrect: false },
      ],
    },
    {
      textEn: "Who was the founder of the Ajivika sect?",
      textMr: "आजीविक संप्रदायाचे संस्थापक कोण होते?",
      explanationEn:
        "Ajivika sect: Founded by Makkhali Gosala (contemporary of both Buddha and Mahavira). Core doctrine = NIYATI (Determinism/Fatalism) — everything is predetermined; actions/karma cannot alter one's fate. Salvation comes automatically after 84,000 rebirths. Emperor Ashoka built Barabar Caves for the Ajivikas. The sect disappeared by the 14th century CE. Charvaka sect = Indian Materialism; Lokayata philosophy; rejected Vedas, soul, rebirth — 'eat, drink, and be merry' philosophy (Brihaspati as founder).",
      explanationMr:
        "आजीविक संप्रदाय: संस्थापक = मक्खली गोसाल; बुद्धाच्या समकालीन. मुख्य तत्त्व = नियतिवाद (Fatalism/Niyati) — सर्व काही पूर्वनिर्धारित आहे; कर्म किंवा प्रयत्नाने काही बदलत नाही. 84,000 जन्मांनंतर आपोआप मोक्ष. सम्राट अशोकाने आजीविकांसाठी बराबर लेणी बांधल्या. हा संप्रदाय 14व्या शतकात नष्ट झाला. चार्वाक = भौतिकवादी संप्रदाय; लोकायत; आत्मा, पुनर्जन्म नाकारला.",
      options: [
        { label: "A", textEn: "Mahavira", textMr: "महावीर", isCorrect: false },
        { label: "B", textEn: "Makkhali Gosala", textMr: "मक्खली गोसाल", isCorrect: true },
        { label: "C", textEn: "Purana Kassapa", textMr: "पूर्ण कस्सप", isCorrect: false },
        { label: "D", textEn: "Nigantha Nataputta", textMr: "निगंठ नातपुत्त", isCorrect: false },
      ],
    },
    {
      textEn: "When did the Bhakti Movement flourish in Maharashtra?",
      textMr: "भक्ती आंदोलन कोणत्या काळात महाराष्ट्रात प्रबळ झाले?",
      explanationEn:
        "Maharashtra Bhakti Movement (12th-17th centuries): Sant Dnyaneshwar (1275-96) = founder of Warkari sect; Dnyaneshwari (Marathi commentary on Bhagavad Gita); Amrutanubhav. Namdeva (14th cent) — went to Punjab; 61 Abhangas in Sikh Guru Granth Sahib. Eknath (16th cent) — Marathi Bhagavat. Tukaram (17th cent) — Gatha (most popular Abhangas; UNESCO Memory of the World 2017). Pandharpur = Warkari sect centre; Lord Vitthal. Rashtrasant Tukdoji Maharaj, Gadgebaba = 20th century Maharashtra saint-reformers.",
      explanationMr:
        "महाराष्ट्रातील भक्ती आंदोलन (12वे-17वे शतक): संस्थापक = संत ज्ञानेश्वर (1275-1296); ज्ञानेश्वरी (भगवद्गीतेवर). नामदेव (14वे शतक) — पंजाबात गेले; शीख गुरू ग्रंथात 61 अभंग. एकनाथ (16वे शतक) — भागवत मराठीत. तुकाराम (17वे शतक) — गाथा (सर्वाधिक लोकप्रिय अभंग). पंढरपूर = वारकरी संप्रदायाचे केंद्र; विठ्ठल देव. राष्ट्रसंत तुकडोजी महाराज, गाडगेबाबा = 20व्या शतकातील महाराष्ट्रातील संत सुधारक.",
      options: [
        { label: "A", textEn: "8th-9th century", textMr: "8वे-9वे शतक", isCorrect: false },
        { label: "B", textEn: "12th-17th century", textMr: "12वे-17वे शतक", isCorrect: true },
        { label: "C", textEn: "5th-6th century", textMr: "5वे-6वे शतक", isCorrect: false },
        { label: "D", textEn: "18th-19th century", textMr: "18वे-19वे शतक", isCorrect: false },
      ],
    },
    {
      textEn: "Who used 'Rathamusala' (chariot with spiked wheels) for Magadha expansion?",
      textMr: "मगध साम्राज्याचे विस्तारास 'रथमुसल' (Rathamusala) कोणी वापरले?",
      explanationEn:
        "Ajatashatru (492-460 BCE) of Magadha used two war machines for expansion: (1) Mahashilakantaka = giant catapult that hurled large stones (16-year war with Licchavis of Vaishali). (2) Rathamusala = chariot with rotating spiked wheels used against Kosala. Bimbisara (544-492 BCE) = founder of Magadha as a powerful kingdom; Haryanka dynasty; 80,000 villages; friend of Buddha. Ajatashatru imprisoned and killed his own father Bimbisara and expanded Magadha significantly.",
      explanationMr:
        "अजातशत्रू (492-460 BCE) याने मगध साम्राज्य विस्तारण्यासाठी दोन महत्त्वाची युद्ध-यंत्रे वापरली: (१) महाशिलाकंटक (Mahashilakantaka) = मोठे दगड फेकणारे यंत्र (catapult). (२) रथमुसल (Rathamusala) = धारदार चाकांची रथ — कोसल राज्यावर विजयासाठी. बिंबिसार (544-492 BCE) = मगध साम्राज्याचा संस्थापक; 80,000 गावे; बुद्धाचा मित्र; हर्यंक वंश. अजातशत्रूने बिंबिसाराला तुरुंगात टाकून मारले.",
      options: [
        { label: "A", textEn: "Bimbisara", textMr: "बिंबिसार", isCorrect: false },
        { label: "B", textEn: "Ashoka", textMr: "अशोक", isCorrect: false },
        { label: "C", textEn: "Ajatashatru", textMr: "अजातशत्रू", isCorrect: true },
        { label: "D", textEn: "Chandragupta Maurya", textMr: "चंद्रगुप्त मौर्य", isCorrect: false },
      ],
    },
  ],
};

export default data;

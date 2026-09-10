"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// Placeholder sample quotes for layout purposes — replace with real
// student testimonials once collected.
const testimonials = [
  {
    initials: "अ.प.",
    nameMr: "अनिकेत पवार, पुणे",
    nameEn: "Aniket Pawar, Pune",
    quoteMr: "दररोजच्या मोफत टेस्टमुळे माझा आत्मविश्वास खूप वाढला.",
    quoteEn: "The daily free tests really boosted my confidence.",
  },
  {
    initials: "स.दे.",
    nameMr: "सृष्टी देशमुख, नाशिक",
    nameEn: "Srushti Deshmukh, Nashik",
    quoteMr: "मराठी आणि इंग्रजी दोन्ही भाषेत प्रश्न असल्यामुळे समजायला सोपे गेले.",
    quoteEn: "Having questions in both Marathi and English made it easy to understand.",
  },
  {
    initials: "र.जा.",
    nameMr: "रोहित जाधव, नागपूर",
    nameEn: "Rohit Jadhav, Nagpur",
    quoteMr: "स्पष्टीकरणासह उत्तरे मिळाल्याने चुका समजून घेणे सोपे झाले.",
    quoteEn: "Explanations with every answer made it easy to learn from mistakes.",
  },
];

export function Testimonials() {
  const { locale } = useLanguage();

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          {locale === "mr" ? "विद्यार्थ्यांचे अनुभव" : "What Students Say"}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.nameEn} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-700">
                “{locale === "mr" ? item.quoteMr : item.quoteEn}”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  {item.initials}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {locale === "mr" ? item.nameMr : item.nameEn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

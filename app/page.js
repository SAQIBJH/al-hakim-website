"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

function HomePage() {
  const { language } = useLanguage()

  const content = {
    en: {
      heroTitle: "Leading Hearing Healthcare Solutions Since 1990",
      heroSubtitle: "Personalized Care. Advanced Technology. Lifelong Hearing Wellness.",
      ctaButton: "Book a Free Consultation",
      introduction:
        "Al Hakim Hearing and Speaking LLC, a leader in UAE hearing healthcare, combines cutting-edge technology with compassionate care. Founded in 1990, we empower individuals of all ages to rediscover the joy of sound through personalized solutions and European-quality standards.",
      whyChoose: "Why Choose Al Hakim",
      highlights: [
        { title: "Expert Audiologists", icon: "👂" },
        { title: "3 UAE Branches", icon: "🏥" },
        { title: "Sole Distributor for Bernafon", icon: "/bernaforn.jpg" },
        { title: "On-Site Repairs & 1-Year Warranty", icon: "🔧" },
        { title: "Rapid Response & Aftercare", icon: "🕒" },
        { title: "Compassionate Care", icon: "❤️" },
      ],
      ctaTitle: "Ready to Rediscover the Joy of Sound?",
      ctaSubtitle: "Schedule your free consultation today and take the first step towards better hearing.",
      callNow: "Call Now: +971 50 456 0730",
      bookOnline: "Book Online",
    },
    ar: {
      heroTitle: "الحلول الرائدة في رعاية السمع منذ عام ١٩٩٠",
      heroSubtitle: "رعاية مخصصة. تقنيات متطورة. صحة سمعية تدوم مدى الحياة.",
      ctaButton: "احجز استشارة مجانية",
      introduction:
        "مركز الحكيم للسمع والتخاطب، الرائد في رعاية السمع بالإمارات، يجمع بين أحدث التقنيات والرعاية الإنسانية. منذ تأسيسنا عام ١٩٩٠، نساعد الأشخاص من جميع الأعمار على استعادة متعة السمع من خلال حلول مخصصة ومعايير جودة أوروبية.",
      whyChoose: "لماذا تختار الحكيم",
      highlights: [
        { title: "أخصائيو سمع معتمدون", icon: "👂" },
        { title: "٣ فروع في الإمارات", icon: "🏥" },
        { title: "الموزع الحصري لبيرنافون السويسرية", icon: "/bernaforn.jpg" },
        { title: "إصلاحات في الموقع وضمان لمدة عام", icon: "🔧" },
        { title: "دعم سريع ومتابعة بعد العلاج", icon: "🕒" },
        { title: "رعاية إنسانية متميزة", icon: "❤️" },
      ],
      ctaTitle: "هل أنت مستعد لاستعادة متعة السمع؟",
      ctaSubtitle: "احجز استشارتك المجانية اليوم واتخذ الخطوة الأولى نحو سمع أفضل.",
      callNow: "اتصل الآن: ٠٥٠٤٥٦٠٧٣٠",
      bookOnline: "احجز عبر الإنترنت",
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 md:py-20 lg:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className={`space-y-6 lg:space-y-8 ${language === "ar" ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}
            >
              <div className="space-y-4">
                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.heroTitle}
                </h1>
              </div>

              <div className="space-y-3">
                <p
                  className={`text-lg md:text-xl text-gray-600 ${language === "ar" ? "text-right" : "text-left"}`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.heroSubtitle}
                </p>
              </div>

              <div className={`flex ${language === "ar" ? "justify-end" : "justify-start"}`}>
                <a
                href="/contact"
                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-medium transition-colors">
                  {currentContent.ctaButton}
                </a>
              </div>
            </div>

            <div className={`relative ${language === "ar" ? "order-2 lg:order-1" : "order-1 lg:order-2"}`}>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Hearing healthcare professional with patient"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p
              className={`text-base md:text-lg text-gray-700 leading-relaxed ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12 ${
              language === "ar" ? "text-right" : "text-left"
            }`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {currentContent.whyChoose}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentContent.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                {/* <div className="text-4xl mb-4">{highlight.icon}</div> */}
                 <div className="text-4xl mb-4 flex justify-center items-center h-16">
                    {highlight.icon.endsWith(".jpg") || highlight.icon.endsWith(".png") ? (
                      <img
                        src={highlight.icon}
                        alt={highlight.title}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <span>{highlight.icon}</span>
                    )}
                  </div>
                <h3
                  className={`text-lg md:text-xl font-semibold text-gray-900 text-center`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {highlight.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white `}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.ctaTitle}
            </h2>
            <p
              className={`text-lg md:text-xl text-blue-100 `}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0504560730"
                className="flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{currentContent.callNow}</span>
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                {currentContent.bookOnline}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

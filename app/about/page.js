"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AboutPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About Al Hakim Hearing & Speaking",
      subtitle: "Pioneering hearing healthcare in the UAE since 1990",
      whoWeAreTitle: "Who We Are",
      whoWeAreText:
        "Al Hakim Hearing and Speaking LLC is an extension of Saleh Alshawaf Trading EST., pioneering hearing healthcare in the UAE since 1990. With branches in Dubai, Abu Dhabi, and Al Ain, we deliver world-class solutions rooted in innovation and empathy.",
      missionTitle: "Mission",
      missionText: "To enhance quality of life through accessible, personalized hearing care.",
      visionTitle: "Vision",
      visionText: "A society where everyone experiences the gift of clear hearing.",
      valuesTitle: "Our Core Values",
      values: [
        { title: "Excellence in Care", icon: "🏆" },
        { title: "Innovation & Education", icon: "💡" },
        { title: "Patient-Centered Approach", icon: "❤️" },
      ],
      certificationsTitle: "Certifications & Partnerships",
      certifications: [
        "Sole UAE distributor for Bernafon (Switzerland)",
        "Approved supplier for UAE government and private entities",
        "Certified staff trained in global CME programs",
      ],
    },
    ar: {
      title: "عن مركز الحكيم للسمع والتخاطب",
      subtitle: "رواد رعاية السمع في الإمارات منذ عام ١٩٩٠",
      whoWeAreTitle: "من نحن",
      whoWeAreText:
        "نحن امتداد لشركة صالح الشواف التجارية، رواد رعاية السمع في الإمارات منذ عام ١٩٩٠. مع فروع في دبي وأبوظبي والعين، نقدم حلولًا عالمية تعتمد على الابتكار والرحمة.",
      missionTitle: "الرسالة",
      missionText: "تحسين جودة الحياة عبر رعاية سمعية مخصصة ومتاحة للجميع.",
      visionTitle: "الرؤية",
      visionText: "مجتمع يتمتع فيه الجميع بنعمة السمع الواضح.",
      valuesTitle: "قيمنا الأساسية",
      values: [
        { title: "التميز في الرعاية", icon: "🏆" },
        { title: "الابتكار والتعليم", icon: "💡" },
        { title: "نهج يركز على المريض", icon: "❤️" },
      ],
      certificationsTitle: "الشهادات والشراكات",
      certifications: [
        "الموزع الحصري لبيرنافون (سويسرا) في الإمارات",
        "مورد معتمد للجهات الحكومية والخاصة",
        "فريق معتمد من خلال برامج تعليم طبي مستمر عالمية",
      ],
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1
              className={`text-4xl lg:text-5xl font-bold text-gray-900 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.title}
            </h1>
            <p
              className={`text-xl text-gray-600 ${language === "ar" ? "text-right" : "text-left"}`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white" dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2
                className={`text-3xl lg:text-4xl font-bold text-gray-900 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {currentContent.whoWeAreTitle}
              </h2>
              <p
                className={`text-lg text-gray-700 leading-relaxed ${language === "ar" ? "text-right" : "text-left"}`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {currentContent.whoWeAreText}
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Al Hakim team of professionals"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                <div className={`flex items-center space-x-4 ${language === "ar" ? "gap-2" : ""}`} dir={language === "ar" ? "rtl" : "ltr"} >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-gray-900 ${language === "ar" ? "text-right" : "text-left"}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.missionTitle}
                  </h3>
                </div>
                <p
                  className={`text-gray-700 ${language === "ar" ? "text-right" : "text-left"}`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.missionText}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="space-y-6">
                                <div className={`flex items-center space-x-4 ${language === "ar" ? "gap-2" : ""}`} dir={language === "ar" ? "rtl" : "ltr"} >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-gray-900 ${language === "ar" ? "text-right" : "text-left"}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.visionTitle}
                  </h3>
                </div>
                <p
                  className={`text-gray-700 ${language === "ar" ? "text-right" : "text-left"}`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {currentContent.valuesTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3
                  className={`text-xl font-semibold text-gray-900 text-center`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-white ${language === "ar" ? "text-right" : "text-left"}`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.certificationsTitle}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {currentContent.certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">✓</span>
                  </div>
                  <p
                    className={`text-white font-medium ${language === "ar" ? "text-right" : "text-left"}`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

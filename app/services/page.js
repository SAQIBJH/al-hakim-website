"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Comprehensive Hearing Solutions",
      subtitle: "Expert care tailored to your unique hearing needs",
      services: [
        {
          title: "Hearing Assessments",
          description: "Advanced diagnostic tests for adults.",
          icon: "🔍",
        },
        {
          title: "Custom Hearing Aid Fitting",
          description: "Wireless fitting technology for seamless adjustment.",
          icon: "⚙️",
        },
        {
          title: "Tinnitus Management",
          description: "Evidence-based therapies for lasting relief.",
          icon: "🔊",
        },
        {
          title: "Hearing Protection",
          description:
            "Custom molds for swimming, noise, and professional use.",
          icon: "🛡️",
        },
      ],
      aftercareTitle: "Aftercare & Maintenance",
      aftercareFeatures: [
        { title: "Free Calibration", icon: "⚙️" },
        { title: "Expert Repairs", icon: "🔧" },
        { title: "24/7 Support", icon: "📞" },
      ],
      aftercareDescription: "Free calibration, repairs, and 24/7 support.",
      ctaTitle: "Schedule Your Assessment Today",
      ctaDescription:
        "Take the first step towards better hearing with our comprehensive assessment.",
      ctaButton: "Book Your Appointment",
    },
    ar: {
      title: "حلول سمعية شاملة",
      subtitle: "رعاية متخصصة مصممة لاحتياجاتك السمعية الفريدة",
      services: [
        {
          title: "فحوصات السمع",
          description: "فحوصات تشخيصية متطورة للكبار.",
          icon: "🔍",
        },
        {
          title: "تركيب سماعات مخصصة",
          description: "تقنية لاسلكية لضبط دقيق.",
          icon: "⚙️",
        },
        {
          title: "إدارة طنين الأذن",
          description: "علاجات مدعومة بأبحاث لتخفيف دائم.",
          icon: "🔊",
        },
        {
          title: "حماية السمع",
          description: "قوالب مخصصة للسباحة والضوضاء والاستخدام المهني.",
          icon: "🛡️",
        },
      ],
      aftercareTitle: "المتابعة والصيانة",
      aftercareFeatures: [
        { title: "معايرة مجانية", icon: "⚙️" },
        { title: "إصلاحات متخصصة", icon: "🔧" },
        { title: "دعم على مدار الساعة", icon: "📞" },
      ],
      aftercareDescription: "معايرة مجانية، إصلاحات، ودعم على مدار الساعة.",
      ctaTitle: "حدد موعد فحصك اليوم",
      ctaDescription: "اتخذ الخطوة الأولى نحو سمع أفضل مع فحصنا الشامل.",
      ctaButton: "احجز موعدك",
    },
  };

  const currentContent = content[language];

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
              className={`text-xl text-gray-600 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {currentContent.services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-6">
                  <div
                    className={`flex items-center space-x-4 ${
                      language === "ar" ? "gap-2" : ""
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div>
                      <h3
                        className={`text-2xl font-bold text-gray-900 ${
                          language === "ar" ? "text-right" : "text-left"
                        }`}
                        dir={language === "ar" ? "rtl" : "ltr"}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    className={`text-gray-700 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {service.description}
                  </p>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt={service.title}
                    width={400}
                    height={200}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="space-y-10">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h2
                    className="text-3xl font-bold text-secondary-900"
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.aftercareTitle}
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {currentContent.aftercareFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center space-y-3"
                    >
                      <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center transform transition-transform hover:scale-105">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h4
                        className="font-semibold text-secondary-800 text-center"
                        dir={language === "ar" ? "rtl" : "ltr"}
                      >
                        {feature.title}
                      </h4>
                    </div>
                  ))}
                </div>

                <div className="text-center max-w-2xl mx-auto">
                  <p
                    className="text-secondary-700 text-center"
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.aftercareDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-white ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.ctaTitle}
            </h2>
            <p
              className={`text-lg text-blue-100 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.ctaDescription}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {currentContent.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

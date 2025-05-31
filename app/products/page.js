"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Bernafon Hearing Aids: Clarity Redefined",
      subtitle: "Swiss Precision, Designed for Life",
      description:
        "Al Hakim partners with Bernafon to deliver hearing solutions that adapt to your world—so you never miss a moment.",
      whyBernafon: "Why Bernafon?",
      benefits: [
        {
          title: "Natural Sound Quality",
          description: "Hear voices, music, and nature with lifelike clarity.",
          icon: "⭐",
        },
        {
          title: "Effortless Adaptation",
          description:
            "Devices adjust automatically to noisy cafes, quiet homes, or outdoor adventures.",
          icon: "🔊",
        },
        {
          title: "All-Day Power",
          description: "Rechargeable designs for uninterrupted hearing.",
          icon: "🔋",
        },
        {
          title: "Smart Connectivity",
          description:
            "Stream calls, music, and TV audio directly to your hearing aids.",
          icon: "📱",
        },
      ],
      featuredModels: "Featured Bernafon Models",
      models: [
        {
          name: "Bernafon Encanta™",
          tagline: "Hear every laugh, even in loud spaces.",
          benefit: "Advanced noise reduction for social settings.",
          idealFor: "Social gatherings and daily life.",
          badge: "Premium",
          CTA : "Experience Encanta",
          imgSrc:"/BernafonEncanta.jpg"
        },
        {
          name: "Bernafon Alpha XT™",
          tagline: "Focus on conversations, not background noise.",
          benefit:
            "AI-driven speech enhancement for clarity in busy environments.",
          idealFor: "Professionals and active lifestyles.",
          badge: "Advanced",
          CTA: "Try Alpha XT",
          imgSrc: "/BernafonAlphaXT.jpg"
        },
        {
          name: "Bernafon Alpha™",
          tagline: "Simple, comfortable, and perfect for first-time users.",
          benefit: "Intuitive controls and all-day comfort.",
          idealFor: "Those new to hearing aids.",
          badge: "Essential",
          CTA: "Start with Alpha",
          imgSrc: "/BernafonAlpha.jpg"
        },
      ],
      additionalSolutions: "Additional Solutions",
      additionalProducts: [
        {
          title: "Tinnitus Relief Systems",
          description: "Mask disruptive noise with soothing soundscapes.",
        },
        {
          title: "Custom In-the-Ear Devices",
          description: "100% personalized for comfort and clarity.",
        },
        {
          title: "SwimProtect™ Ear Molds",
          description: "100% waterproof for swimmers and divers.",
        },
      ],
      trustTitle: "Trust & Assurance",
      trustFeatures: ["1-Year Warranty", "Swiss Engineering"],
      ctaTitle: "Begin Your Hearing Journey",
      ctaButton: "Book Free Consultation",
    },
    ar: {
      title: "سماعات بيرنافون: وضوح مُعاد تعريفه",
      subtitle: "دقة سويسرية مصممة للحياة",
      description:
        "نقدم لك بالشراكة مع بيرنافون حلول سمعية تتكيف مع عالمك — لن تفوتك أي لحظة.",
      whyBernafon: "لماذا بيرنافون؟",
      benefits: [
        {
          title: "جودة صوت طبيعية",
          description: "اسمع الأصوات والموسيقى والطبيعة بوضوح طبيعي.",
          icon: "⭐",
        },
        {
          title: "تكيّف تلقائي",
          description:
            "تتكيف الأجهزة تلقائيًا مع المقاهي الصاخبة، المنازل الهادئة، أو المغامرات الخارجية.",
          icon: "🔊",
        },
        {
          title: "طاقة تدوم طوال اليوم",
          description: "تصميمات قابلة للشحن لسمع دون انقطاع.",
          icon: "🔋",
        },
        {
          title: "اتصال ذكي",
          description: "بث المكالمات والموسيقى مباشرة إلى سماعاتك.",
          icon: "📱",
        },
      ],
      featuredModels: "موديلات بيرنافون المميزة",
      models: [
        {
          name: "بيرنافون إنكانتا™",
          tagline: "اسمع كل ضحكة، حتى في الأماكن الصاخبة.",
          benefit: "تقليل الضوضاء المتقدم للأماكن الاجتماعية.",
          idealFor: "مثالية للمناسبات الاجتماعية والحياة اليومية.",
          badge: "متميز",
          CTA:"جرّب إنكانتا",
          imgSrc:"/BernafonEncanta.jpg"

        },
        {
          name: "بيرنافون ألفا اكس تي™",
          tagline: "ركز على المحادثات، ليس الضوضاء.",
          benefit: "تعزيز الكلام بالذكاء الاصطناعي للوضوح في الأماكن المزدحمة.",
          idealFor: "مثالية للمحترفين وأنماط الحياة النشطة.",
          badge: "متقدم",
          CTA:"جرّب ألفا اكس تي",
          imgSrc: "/BernafonAlphaXT.jpg"
        },
        {
          name: "بيرنافون ألفا™",
          tagline: "بسيطة ومريحة ومثالية للمستخدمين الجدد.",
          benefit: "تحكم بديهي وراحة طوال اليوم.",
          idealFor: "مثالية للمستخدمين الجدد للسماعات.",
          badge: "أساسي",
          CTA:"ابدأ مع ألفا",
          imgSrc: "/BernafonAlpha.jpg"
        },
      ],
      additionalSolutions: "حلول إضافية",
      additionalProducts: [
        {
          title: "أنظمة تخفيف طنين الأذن",
          description: "تخفيف الطنين عبر أنظمة صوتية مهدئة.",
        },
        {
          title: "أجهزة مخصصة داخل الأذن",
          description: "مخصصة بالكامل للراحة والوضوح.",
        },
        {
          title: "قوالب أذن للسباحة",
          description: "قوالب أذن مضادة للماء للسباحين والغواصين.",
        },
      ],
      trustTitle: "ثقة وضمان",
      trustFeatures: ["ضمان لمدة سنة", "هندسة سويسرية"],
      ctaTitle: "ابدأ رحلتك السمعية",
      ctaButton: "احجز استشارة مجانية",
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-50 to-green-50 py-8"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1
                  className={`text-4xl lg:text-5xl font-bold text-gray-900 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.title}
                </h1>
                <h2
                  className={`text-2xl font-semibold text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.subtitle}
                </h2>
              </div>

              <p
                className={`text-lg text-gray-700 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {currentContent.description}
              </p>
            </div>

            <div className="relative">
              <Image
                src={"/productHeroImage.jpg" || "/placeholder.svg?height=500&width=600"}
                alt="Person smiling while engaging in conversation"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Bernafon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {currentContent.whyBernafon}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3
                  className={`text-xl font-semibold text-gray-900 mb-2 text-center`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm text-gray-700 text-center`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models Section */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 `}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {currentContent.featuredModels}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.models.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                <div className="relative h-64 ">
                  <Image
                    src={model?.imgSrc || "/placeholder.svg?height=256&width=400"}
                    alt={model.name}
                    width={500}
                    height={256}
                    className="max-w-full h-full  object-conatin "
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {model.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <h3
                    className={`text-2xl font-bold text-gray-900 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {model.name}
                  </h3>

                  <p
                    className={`text-blue-600 font-semibold ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    "{model.tagline}"
                  </p>

                  <div className="space-y-2 flex-1">
                    <p
                      className={`text-sm text-gray-700 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      <strong>
                        {language === "ar"
                          ? "الفائدة الرئيسية:"
                          : "Key Benefit:"}
                      </strong>{" "}
                      {model.benefit}
                    </p>
                    <p
                      className={`text-sm text-gray-600 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      <strong>
                        {language === "ar" ? "مثالية ل:" : "Ideal For:"}
                      </strong>{" "}
                      {model.idealFor}
                    </p>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
                    {model.CTA}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {currentContent.additionalSolutions}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.additionalProducts.map((product, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src="/placeholder.svg?height=192&width=300"
                    alt={product.title}
                    width={300}
                    height={192}
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <h3
                  className={`text-xl font-semibold text-gray-900 mb-2 text-center`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {product.title}
                </h3>
                <p
                  className={`text-sm text-gray-700 text-center`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Assurance Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-white`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.trustTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.trustFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3
                    className={`text-xl font-semibold text-white`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3
                className={`text-2xl font-bold text-white`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {currentContent.ctaTitle}
              </h3>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                {currentContent.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

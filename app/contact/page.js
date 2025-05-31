"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function convertToArabicNumbers(input) {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return input.replace(/\d/g, (digit) => arabicDigits[Number(digit)]);
}

export default function ContactPage() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Al Hakim",
      subtitle: "Get in touch with our hearing healthcare experts",
      formTitle: "Send us a Message",
      nameLabel: "Name*",
      emailLabel: "Email*",
      phoneLabel: "Phone",
      messageLabel: "Message*",
      messagePlaceholder: "How can we assist you?",
      submitButton: "Send",
      getInTouch: "Get in Touch",
      getInTouchSubtitle: "Choose the most convenient way to reach us",
      whatsapp: "WhatsApp",
      chatNow: "Chat Now",
      callUs: "Call Us",
      callNow: "Call Now",
      email: "Email",
      emailUs: "Email Us",
      locationsTitle: "Our Locations",
      dubai: "Dubai",
      abuDhabi: "Abu Dhabi",
      businessHours: "Business Hours",
      getDirections: "Get Directions",
      whyTrust: "Why Trust Al Hakim?",
      certifiedPartner: "Certified Bernafon Partner",
      warranty: "1-Year Warranty",
      tabbyText: "Split your payments in interest-free installments",
      locations: {
        dubai: {
          address:
            "Green Tower – Office 1503, Rigga Al Butain, near Clock Roundabout",
          phone: "042242494 – 050 4560730",
          hours: [
            "Sun-Thurs: 9:30 AM – 02:30 PM",
            "And 04:00 PM – 07:00 PM",
            "Friday: 9:30 AM – 01:00 PM",
            "And 02:30 PM – 04:30 PM",
            "Sat: Closed",
          ],
        },
        abuDhabi: {
          address: "Muroor Road, Zone 1, Above Le Bouranger Café",
          phone: "056 5588989 – 050 4560730",
          hours: [
            "Sat-Thurs: 9:00 AM – 01:30 PM",
            "4:30 PM – 08:00 PM",
            "Fri: 9 AM – 12:30 PM",
            "And 02:00 PM – 04:00 PM",
          ],
        },
      },
    },
    ar: {
      title: "اتصل بالحكيم",
      subtitle: "تواصل مع خبراء الرعاية السمعية لدينا",
      formTitle: "أرسل لنا رسالة",
      nameLabel: "الاسم*",
      emailLabel: "البريد الإلكتروني*",
      phoneLabel: "الهاتف",
      messageLabel: "الرسالة*",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      submitButton: "إرسال",
      getInTouch: "تواصل معنا",
      getInTouchSubtitle: "اختر الطريقة الأنسب للتواصل معنا",
      whatsapp: "واتساب",
      chatNow: "ابدأ المحادثة",
      callUs: "اتصل بنا",
      callNow: "اتصل الآن",
      email: "البريد الإلكتروني",
      emailUs: "راسلنا",
      locationsTitle: "مواقعنا",
      dubai: "دبي",
      abuDhabi: "أبوظبي",
      businessHours: "ساعات العمل",
      getDirections: "احصل على الاتجاهات",
      whyTrust: "لماذا تثق بالحكيم؟",
      certifiedPartner: "شريك معتمد لبيرنافون",
      warranty: "ضمان لمدة عام",
      tabbyText: "قسم مدفوعاتك على دفعات بدون فوائد",
      locations: {
        dubai: {
          address:
            "البرج الأخضر، رقة البطين – ديرة، دبي الدور الخامس عشر مكتب رقم ١٥٠٣",
          phone: "٠٤٢٢٤٢٤٩٤ – ٠٥٠٤٥٦٠٧٣٠",
          hours: [
            "الأحد - الخميس: ٩:٣٠ صباحًا – ٢:٣٠ مساءً",
            "٤:٠٠ مساءً – ٧:٣٠ مساءً",
            "الجمعة: ٩:٣٠ صباحًا – ١:٠٠ ظهراً",
            "٢:٣٠ عصراً – ٤:٣٠ مساءً",
            "السبت: مغلق",
          ],
        },
        abuDhabi: {
          address: "شارع المرور – المنطقة الأولي – فوق كافتيريا لوبولانجر",
          phone: "٠٥٦٥٥٨٨٩٨٩ – ٠٥٠٤٥٦٠٧٣٠",
          hours: [
            "السبت - الخميس: ٩:٠٠ صباحًا – ١:٣٠ مساءً",
            "٤:٣٠ مساءً – ٨:٠٠ مساءً",
            "الجمعة: ٩ صباحًا – ١٢:٣٠ ظهراً",
            "٢:٠٠ مساءً – ٤:٠٠ مساءً",
          ],
        },
      },
    },
  };

  const currentContent = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-gray-50 rounded-lg p-8"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2
                    className={`text-3xl font-bold text-gray-900 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.formTitle}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`text-sm font-medium text-gray-700 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      {currentContent.nameLabel}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-sm font-medium text-gray-700 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      {currentContent.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className={`text-sm font-medium text-gray-700 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      {currentContent.phoneLabel}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      dir={language === "ar" ? "rtl" : "ltr"}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className={`text-sm font-medium text-gray-700 ${
                        language === "ar" ? "text-right" : "text-left"
                      }`}
                      dir={language === "ar" ? "rtl" : "ltr"}
                    >
                      {currentContent.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={currentContent.messagePlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {currentContent.submitButton}
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2
                  className={`text-3xl font-bold text-gray-900 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.getInTouch}
                </h2>
                <p
                  className={`text-gray-600 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.getInTouchSubtitle}
                </p>
              </div>

              <div
                className="space-y-4"
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 gap-2">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h3
                          className={`font-semibold text-gray-900 ${
                            language === "ar" ? "text-right" : "text-left"
                          }`}
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          {currentContent.whatsapp}
                        </h3>
                        <p className="text-gray-600">
                          {language === "ar"
                            ? convertToArabicNumbers("971588595161") + "+"
                            : "+971 58 859 5161"}
                          {/* +971 58 859 5161 */}
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/971588595161"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      {currentContent.chatNow}
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 gap-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h3
                          className={`font-semibold text-gray-900 ${
                            language === "ar" ? "text-right" : "text-left"
                          }`}
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          {currentContent.callUs}
                        </h3>
                        <p className="text-gray-600">
                          {language === "ar"
                            ? convertToArabicNumbers("0504560730")
                            : "050 456 0730"}
                          {/* +971 50 456 0730 */}
                        </p>
                      </div>
                    </div>
                    <a
                      href="tel:+971504560730"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {currentContent.callNow}
                    </a>
                  </div>
                </div>

                <div
                  className={`bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 gap-2">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3
                          className={`font-semibold text-gray-900 ${
                            language === "ar" ? "text-right" : "text-left"
                          }`}
                          dir={language === "ar" ? "rtl" : "ltr"}
                        >
                          {currentContent.email}
                        </h3>
                        <p className="text-gray-600">info@alhakimhearing.ae</p>
                      </div>
                    </div>
                    <a
                      href="mailto:info@alhakimhearing.ae"
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      {currentContent.emailUs}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12`}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {currentContent.locationsTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dubai Location */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm flex flex-col h-full"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="space-y-6 flex-1">
                <div
                  className={`flex items-center space-x-4 ${
                    language === "ar" ? "gap-2" : ""
                  }`}
                >
                  {" "}
                  <div
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center
         justify-center"
                  >
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-gray-900 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.dubai}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p
                    className={`text-gray-700 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.locations.dubai.address}
                  </p>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl">📞</span>
                    <span className="text-gray-700">
                      {currentContent.locations.dubai.phone}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">🕒</span>
                      <span
                        className={`font-medium text-gray-900 ${
                          language === "ar" ? "text-right" : "text-left"
                        }`}
                        dir={language === "ar" ? "rtl" : "ltr"}
                      >
                        {currentContent.businessHours}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-1 ml-6">
                      {currentContent.locations.dubai.hours.map(
                        (hour, index) => (
                          <p
                            key={index}
                            className={
                              language === "ar" ? "text-right" : "text-left"
                            }
                            dir={language === "ar" ? "rtl" : "ltr"}
                          >
                            {hour}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6">
                {currentContent.getDirections} - {currentContent.dubai}
              </button>
            </div>

            {/* Abu Dhabi Location */}
            <div
              className="bg-white rounded-lg p-8 shadow-sm flex flex-col h-full"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <div className="space-y-6 flex-1">
                <div
                  className={`flex items-center space-x-4 ${
                    language === "ar" ? "gap-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold text-gray-900 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.abuDhabi}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p
                    className={`text-gray-700 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                    dir={language === "ar" ? "rtl" : "ltr"}
                  >
                    {currentContent.locations.abuDhabi.address}
                  </p>

                  <div className="flex items-center space-x-2">
                    <span className="text-xl">📞</span>
                    <span className="text-gray-700">
                      {currentContent.locations.abuDhabi.phone}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">🕒</span>
                      <span
                        className={`font-medium text-gray-900 ${
                          language === "ar" ? "text-right" : "text-left"
                        }`}
                        dir={language === "ar" ? "rtl" : "ltr"}
                      >
                        {currentContent.businessHours}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700 space-y-1 ml-6">
                      {currentContent.locations.abuDhabi.hours.map(
                        (hour, index) => (
                          <p
                            key={index}
                            className={
                              language === "ar" ? "text-right" : "text-left"
                            }
                            dir={language === "ar" ? "rtl" : "ltr"}
                          >
                            {hour}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors mt-6">
                {currentContent.getDirections} - {currentContent.abuDhabi}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-white text-center`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.whyTrust}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3
                  className={`text-xl font-semibold text-white `}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.certifiedPartner}
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3
                  className={`text-xl font-semibold text-white`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.warranty}
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <div className="w-12 h-12 mx-auto">
                  <Image
                    src="/tabbylogo.png"
                    alt="Tabby logo"
                    width={120}
                    height={48}
                    className="w-full h-full object-center rounded-full"
                    loading={"lazy"}
                  />
                </div>
                <p
                  className={`text-lg font-semibold text-white`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {currentContent.tabbyText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

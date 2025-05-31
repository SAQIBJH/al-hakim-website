"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  // Business hours in English
  const businessHours = [
    {
      location: "dubai",
      en: [
        "Sun-Thu: 9:30 AM - 2:30 PM",
        "And 4:00 PM - 7:00 PM",
        "Fri: 9:30 AM - 1:00 PM",
        "And 2:30 PM - 4:30 PM",
      ],
      ar: [
        "الأحد - الخميس: ٩:٣٠ صباحًا – ٢:٣٠ مساءً",
        "و ٤:٠٠ مساءً – ٧:٠٠ مساءً",
        "الجمعة: ٩:٣٠ صباحًا – ١:٠٠ مساءً",
        "و ٢:٣٠ مساءً – ٤:٣٠ مساءً",
      ],
    },
    {
      location: "abuDhabi",
      en: [
        "Sat-Thu: 9:00 AM - 1:30 PM",
        "And 4:30 PM - 8:00 PM",
        "Fri: 9:00 AM - 12:30 PM",
        "And 2:00 PM - 4:00 PM",
      ],
      ar: [
        "السبت - الخميس: ٩:٠٠ صباحًا – ١:٣٠ مساءً",
        "و ٤:٣٠ مساءً – ٨:٠٠ مساءً",
        "الجمعة: ٩:٠٠ صباحًا – ١٢:٣٠ مساءً",
        "و ٢:٠٠ مساءً – ٤:٠٠ مساءً",
      ],
    },
  ];

  const contactContent = {
    en: {
      phone1: "0504560730",
      phone2: "042242494",
      email: "info@alhakimhearing.ae",
      cities: "Dubai, Abu Dhabi, Al Ain",
    },
    ar: {
      phone1: "٠٥٠٤٥٦٠٧٣٠",
      phone2: "٠٤٢٢٤٢٤٩٤",
      email: "info@alhakimhearing.ae", // Email stays the same
      cities: "دبي، أبو ظبي، العين",
    },
  };

  // Convert hours if Arabic
  // const displayDubaiHours = language === "ar" ? dubaiHours.map(convertToArabicDigits) : dubaiHours;
  // const displayAbuDhabiHours = language === "ar" ? abuDhabiHours.map(convertToArabicDigits) : abuDhabiHours;

  const content = {
    en: {
      companyName: "Al Hakim",
      companySubtitle: "Hearing & Speaking",
      description:
        "Leading hearing healthcare solutions in the UAE since 1990. Combining cutting-edge technology with compassionate care.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      businessHours: "Business Hours",
      dubai: "Dubai:",
      abuDhabi: "Abu Dhabi:",
      locations: "3 Locations across UAE",
      copyright:
        "© 2024 Al Hakim Hearing and Speaking LLC. All rights reserved.",
      navigation: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
      ],
    },
    ar: {
      companyName: "الحكيم",
      companySubtitle: "للسمع والتخاطب",
      description: "الحلول الرائدة في رعاية السمع بالإمارات منذ عام ١٩٩٠",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      businessHours: "ساعات العمل",
      dubai: "دبي:",
      abuDhabi: "أبوظبي:",
      locations: "٣ مواقع في الإمارات",
      copyright: "جميع الحقوق محفوظة لمركز الحكيم للسمع والتخاطب ٢٠٢٤",
      navigation: [
        { name: "الرئيسية", href: "/" },
        { name: "من نحن", href: "/about" },
        { name: "الخدمات", href: "/services" },
        { name: "المنتجات", href: "/products" },
        { name: "اتصل بنا", href: "/contact" },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Al Hakim Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">
                  {currentContent.companyName}
                </h3>
                <p className="text-sm text-gray-400">
                  {currentContent.companySubtitle}
                </p>
              </div>
            </div>
            <p
              className={`text-gray-300 text-sm leading-relaxed ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4
              className={`text-lg font-semibold ${
                language === "ar" ? "text-center" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.quickLinks}
            </h4>
            <nav className="flex flex-col space-y-3">
              {currentContent.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-300 hover:text-white transition-colors ${
                    language === "ar" ? "text-center" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6" dir={language === "ar" ? "rtl" : "ltr"}>
            <h4
              className={`text-lg font-semibold ${
                language === "ar" ? "text-center" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.contactInfo}
            </h4>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div
                className={`flex  space-x-3
                 ${language === "ar" ? "justify-center" : ""}`}
              >
                <svg
                  className={`w-5 h-5 text-blue-400 mt-0.5 ${
                    language === "ar" ? "ml-3 mr-0" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div dir={language === "ar" ? "rtl" : "ltr"}>
                  <p className="text-gray-300">
                    {contactContent[language].phone1}
                  </p>
                  <p className="text-gray-300">
                    {contactContent[language].phone2}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className={`flex  space-x-3
                 ${language === "ar" ? "justify-center" : ""}`}
              >
                <svg
                  className={`w-5 h-5 text-blue-400 mt-0.5 ${
                    language === "ar" ? "ml-3 mr-0" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-300" dir="ltr">
                  {contactContent[language].email}
                </p>
              </div>

              {/* Location */}
              <div
                className={`flex  space-x-3
                 ${language === "ar" ? "justify-center" : ""}`}
              >
                <svg
                  className={`w-5 h-5 text-blue-400 mt-0.5 ${
                    language === "ar" ? "ml-3 mr-0" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div dir={language === "ar" ? "rtl" : "ltr"}>
                  <p className="text-gray-300">
                    {contactContent[language].cities}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {currentContent.locations}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h4
              className={`text-lg font-semibold ${
                language === "ar" ? "text-center" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {currentContent.businessHours}
            </h4>

            <div className="space-y-3" dir={language === "ar" ? "rtl" : "ltr"}>
              {/* Dubai */}
              <div
                className={`flex items-start ${
                  language === "ar" ? "gap-2" : "space-x-3"
                }`}
              >
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <div className="text-sm text-gray-300">
                  <p className="font-medium">{currentContent.dubai}</p>
                  {businessHours
                    .find((branch) => branch.location === "dubai")
                    [language].map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                </div>
              </div>

              {/* Abu Dhabi */}
              <div
                className={`flex items-start ${
                  language === "ar" ? "gap-2" : "space-x-3"
                }`}
              >
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <div className="text-sm text-gray-300">
                  <p className="font-medium">{currentContent.abuDhabi}</p>
                  {businessHours
                    .find((branch) => branch.location === "abuDhabi")
                    [language].map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div
              className={`text-sm text-gray-400 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <p>{currentContent.copyright}</p>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

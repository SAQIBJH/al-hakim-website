"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  // Only run on client after mount
  useEffect(() => {
    const saved = localStorage.getItem("preferred-language")
    const fallback = navigator.language?.startsWith("ar") ? "ar" : "en"
    const lang = saved === "ar" || saved === "en" ? saved : fallback

    setLanguage(lang)
  }, [])

  useEffect(() => {
    localStorage.setItem("preferred-language", language)
    // document.documentElement.dir = language === "en" ? "rtl" : "rtl"
    document.documentElement.lang = language
  }, [language])

  const changeLanguage = (lang) => {
    if (lang === "en" || lang === "ar") {
      setLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

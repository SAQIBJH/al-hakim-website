import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Al Hakim Hearing & Speaking - Leading Hearing Healthcare Solutions UAE",
  description:
    "Al Hakim Hearing and Speaking LLC - Leading hearing healthcare solutions in UAE since 1990. Expert audiologists, Bernafon hearing aids, and personalized care across Dubai, Abu Dhabi, and Al Ain.",
  keywords:
    "hearing aids, audiologist, hearing test, UAE, Dubai, Abu Dhabi, Bernafon, hearing healthcare, tinnitus treatment",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

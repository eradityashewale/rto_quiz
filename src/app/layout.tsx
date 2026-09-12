import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VisitTracker } from "@/components/VisitTracker";

export const metadata: Metadata = {
  title: "RTO Quiz — RTO & MPSC Group C Exam Test Series for Maharashtra",
  description:
    "Bilingual (Marathi + English) preparation platform for RTO and MPSC Group C exams (Talathi, Clerk-Typist, Tax Assistant, Assistant Motor Vehicle Inspector, and more). Practice daily for free, or take a full test series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <VisitTracker />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

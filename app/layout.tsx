import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo, Nunito } from "next/font/google";
import "./globals.css";

// HARC CODED

const isLoggedIn : boolean = true

// COMPONENTS

import AppNavbar from "@/components/AppNavbar";
import LandingNavbar from "@/components/LandingNavbar";
import Sidebar from "@/components/Sidebar";
import LandingPage from "@/components/LandingPage";
import ClientLayout from "@/components/ClientLayout";

// GO

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Kreate",
  description: "Show your creativity off.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [searchInput, setSearchInput] = useState("")
  // const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${arimo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <main>
            <ClientLayout>{children}</ClientLayout>
          </main>
      </body>
    </html>
  );
}

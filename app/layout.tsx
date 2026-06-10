import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo, Nunito } from "next/font/google";
import "./globals.css";

// HARC CODED

const isLoggedIn : boolean = true

// COMPONENTS

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar";
import LandingPage from "@/components/LandingPage";

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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${arimo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <main>
            
            { isLoggedIn? <div>
              <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Navbar isLandingPage={false} />
                  <div className="flex-1 ml-18 mt-28">
                    {children}
                  </div>
                </div>
              </div>
            </div> :
              <LandingPage/>
            }

          </main>
      </body>
    </html>
  );
}

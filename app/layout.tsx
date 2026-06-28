import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo, Nunito } from "next/font/google";
import "./globals.css";

// COMPONENTS

import ClientLayout from "@/components/ClientLayout";
import { getMyProfile } from "@/lib/data";
import { _profileData } from "@/lib/types";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const res = await getMyProfile()
  const profileData = res.profile

  console.log(profileData, " IM LOGGINED YESSS")

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${arimo.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <main>
            <ClientLayout profileData={profileData}>{children}</ClientLayout>
          </main>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rizal Zeri Subakti | DevOps & IT Operations",
  description: "Portfolio of Rizal Zeri Subakti, an IT professional specializing in DevOps, Infrastructure, and System Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="bg-grid"></div>
        {children}
      </body>
    </html>
  );
}

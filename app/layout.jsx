import { Open_Sans } from "next/font/google";
import "./globals.css";
import InfoRibbon from "./(components)/InfoRibbon";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import ScrollUp from "./(components)/ScrollUp";
import AuthProvider from "./(components)/AuthProvider";

const openSans = Open_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AYICC - African Youth Initiative on Climate Change Zimbabwe",
  description: "The African Youth Initiative on Climate Change Zimbabwe (AYICC) is a platform for African youths led by youths in influencing climate action through areas such as engaging young people and creating resilient communities through climate change awareness programs. AYICC is a group of young volunteers who are dedicated and passionate about the environment. Over the years, it has been working with governments on the implementation of national and international commitments on climate change mitigation and adaptation so as to increase sustainability, promote energy and water efficiency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <AuthProvider>
      <body className={`${openSans.variable} antialiased`}>
        <InfoRibbon />
        <Navbar />
        {children}
        <Footer />
        <ScrollUp/>
      </body>
    </AuthProvider>
    </html>
  );
}

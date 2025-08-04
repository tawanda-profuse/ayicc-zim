import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import ScrollUp from "./(components)/ScrollUp";
import AuthProvider from "./(components)/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const openSans = Open_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "AYICC Zimbabwe - African Youth Initiative on Climate Change Zimbabwe",
  description:
    "The African Youth Initiative on Climate Change Zimbabwe (AYICC) is a platform for African youths led by youths in influencing climate action through areas such as engaging young people and creating resilient communities through climate change awareness programs. AYICC is a group of young volunteers who are dedicated and passionate about the environment. Over the years, it has been working with governments on the implementation of national and international commitments on climate change mitigation and adaptation so as to increase sustainability, promote energy and water efficiency.",
  keywords:
    "Climate Change, Climate Action, Environmental Awareness, Youth, Zimbabwe, Jean-betrand Mhandu, Waste Management, Non-Profit, Environmental Awareness, Environmental Science, Climate Advocacy, Climate Education, Bio Diversity Conservation, Wetland Protection, Tree planting, Food security, United Nations, Harare, Kuimba Shiri, Lake Chivero Recreational Park, Bard House, Harare, Samora Machel",
  openGraph: {
    type: "website",
    url: "https://ayicczimbabwe.org.zw",
    title:
      "AYICC Zimbabwe - African Youth Initiative on Climate Change Zimbabwe",
    description:
      "The African Youth Initiative on Climate Change Zimbabwe (AYICC) is a platform for African youths led by youths in influencing climate action through areas such as engaging young people and creating resilient communities through climate change awareness programs.",
    images: [
      {
        url: "https://ayicczimbabwe.org.zw/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AYICC Zimbabwe - African Youth Initiative on Climate Change",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear(); // Pre-render the year
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AYICC Zimbabwe",
              url: "https://ayicczimbabwe.org.zw",
              logo: "https://i.ibb.co/KMBKtsx/ayicc-logo.png",
              description:
                "The African Youth Initiative on Climate Change Zimbabwe (AYICC) is a platform for African youths led by youths in influencing climate action through areas such as engaging young people and creating resilient communities through climate change awareness programs.",
              sameAs: ["https://www.facebook.com/AYICCZimbabwe/"],
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686210525462186"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${openSans.variable} ${poppins.variable} antialiased`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer year={currentYear} />
          <ScrollUp />
          <ToastContainer
            position="top-right"
            autoClose={5000} // Close after 3 seconds
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </AuthProvider>
      </body>
    </html>
  );
}

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL("https://naveenb-portfolio.vercel.app"),
  title: {
    default: "Naveen Bandaru - Frontend & Mobile Developer | Portfolio",
    template: "%s | Naveen Bandaru",
  },
  description:
    "Frontend & Mobile Developer specializing in React, React Native, Next.js, and full-stack development with Go and PostgreSQL. 2+ years building enterprise web apps and cross-platform mobile solutions.",
  keywords: [
    "Naveen Bandaru",
    "Frontend Developer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Developer",
    "UI Developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [
    {
      name: "Naveen Bandaru",
      url: "https://naveenb-portfolio.vercel.app",
    },
  ],
  creator: "Naveen Bandaru",
  publisher: "Naveen Bandaru",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naveenb-portfolio.vercel.app",
    siteName: "Naveen Bandaru - Portfolio",
    title: "Naveen Bandaru - Frontend & Mobile Developer",
    description:
      "Frontend & Mobile Developer specializing in React, React Native, Next.js, and full-stack development. 2+ years building enterprise web apps and cross-platform mobile solutions.",
    images: [
      {
        url: "https://naveenb-portfolio.vercel.app/favicon.ico",
        width: 192,
        height: 192,
        alt: "Naveen Bandaru Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Naveen Bandaru - Frontend & Mobile Developer",
    description:
      "Frontend & Mobile Developer. Building enterprise web apps and cross-platform mobile solutions.",
    creator: "@NaveenBandaru",
    images: ["https://naveenb-portfolio.vercel.app/favicon.ico"],
  },
  verification: {
    google: "",
  },
  other: {
    canonical: "https://naveenb-portfolio.vercel.app",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveen Bandaru",
    url: "https://naveenb-portfolio.vercel.app",
    email: "bandarun784@gmail.com",
    telephone: "+919390808403",
    jobTitle: "Frontend & Mobile Developer",
    description:
      "Frontend & Mobile Developer specializing in React, React Native, Next.js, and full-stack development with Go and PostgreSQL. 2+ years of industry experience building enterprise web applications and cross-platform mobile solutions.",
    image: "https://naveenb-portfolio.vercel.app/favicon.ico",
    location: {
      "@type": "Place",
      name: "Hyderabad, Telangana, India",
    },
    sameAs: [
      "https://github.com/NaveenBandaru29",
      "https://www.linkedin.com/in/naveen-bandaru-881177239",
    ],
    workLocation: {
      "@type": "Place",
      name: "Hyderabad, India",
    },
  };

  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <PageTransition>
            {children}
        </PageTransition>
      </body>
    </html>
  );
}

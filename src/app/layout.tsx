import "@/styles/globals.css";
import { type Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "FIROSTACK - Teknologi di Bawah Satu Juta | Jasa Website & Aplikasi",
    template: "%s | FIROSTACK"
  },
  description: "FIROSTACK menyediakan jasa pembuatan website, aplikasi mobile, AI, dan IoT dengan harga terjangkau di bawah 1 juta. Cocok untuk mahasiswa, UMKM, dan startup.",

  keywords: ["jasa pembuatan website", "jasa aplikasi mobile", "web development murah", "jasa IT malang", "startup teknologi", "FIROSTACK", "teknologi di bawah satu juta"],

  authors: [{ name: "FIROSTACK Team", url: "https://firostack.tech" }],
  creator: "FIROSTACK",
  publisher: "FIROSTACK",

  // Robots sudah default index & follow, tapi ini untuk kontrol lebih
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://firostack.tech",
    title: "FIROSTACK - Jasa Pembuatan Website & Aplikasi Terjangkau",
    description: "Wujudkan ide teknologi Anda dengan FIROSTACK! Jasa pembuatan website, aplikasi mobile, AI, dan IoT. Mulai dari di bawah Rp 1 Juta.",
    siteName: "FIROSTACK",
    images: [
      {
        url: "https://firostack.tech/og-image.png", // Ganti ke .png atau .jpg sesuai file Anda
        width: 1200,
        height: 630,
        alt: "Firostack - Jasa Teknologi Terjangkau",
      },
    ],
  },

  // Kode verifikasi untuk Google Search Console, dll.
  verification: {
    google: "your-google-verification-code", // Isi dengan kode Anda nanti
  },

  // URL utama website Anda
  alternates: {
    canonical: "https://firostack.tech",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${GeistSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "FIROSTACK",
              "url": "https://firostack.tech",
              "logo": "https://firostack.tech/logo.svg",
              "image": "https://firostack.tech/og-image.png",
              "description": "FIROSTACK menyediakan jasa pembuatan website, aplikasi mobile, AI, dan IoT dengan harga terjangkau di bawah 1 juta untuk mahasiswa, UMKM, dan startup.",
              "telephone": "+62-859-7188-3066",
              "priceRange": "Rp500.000 - Rp1.000.000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Malang",
                "addressRegion": "Jawa Timur",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-859-7188-3066",
                "contactType": "customer service",
                "areaServed": "ID",
                "availableLanguage": ["Indonesian", "English"]
              },
              "sameAs": [
                "https://www.instagram.com/pt.firostack.tech/"
              ]
            })
          }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
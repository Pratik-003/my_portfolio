import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
// NextIntl
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
//
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "800", "700", "900"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pratikmaharana.site/"),
  title: "Pratik Maharana",
  description:
    "Full-stack developer skilled in Next.js/React and a versatile tech stack, also offering WordPress site development for small businesses.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Pratik Maharana",
    description:
      "Full-stack developer skilled in Next.js/React and a versatile tech stack, also offering WordPress site development for small businesses.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/",
        width: 1200,
        height: 630,
        alt: "Preview image Portfolio",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "/",
    title: "Pratik Maharana",
    description:
      "Full-stack developer skilled in Next.js/React and a versatile tech stack, also offering WordPress site development for small businesses.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Preview  Portfolio",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className} id="root">{children}</body>
    </html></NextIntlClientProvider>
  );
}

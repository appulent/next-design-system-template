import type { Metadata, Viewport } from "next";
import "./globals.css";
import "govuk-frontend/dist/govuk/all.scss";

export const metadata: Metadata = {
  title: "GOV.UK - The best place to find government services and information",
  manifest: "/assets/manifest.json",
  icons: [
    {
      rel: "icon",
      url: "/assets/images/favicon.ico",
      sizes: "48x48",
    },
    {
      rel: "icon",
      url: "/assets/images/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    {
      rel: "mask-icon",
      url: "/assets/images/govuk-icon-mask.svg",
      color: "#0b0c0c",
    },
    {
      rel: "apple-touch-icon",
      url: "/assets/images/govuk-icon-180.png",
    }
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0c0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template">
      <body className="govuk-template__body">
        {children}
      </body>
    </html>
  );
}

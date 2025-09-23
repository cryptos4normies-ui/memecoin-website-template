import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Cryptos for Normies",
  description: "C4N makes learning crypto easily accessible for everyone.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Cryptos for Normies",
  description: "C4N makes learning crypto easily accessible for everyone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

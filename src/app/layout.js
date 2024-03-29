import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/components/App";
import { StoreProvider } from "@/redux/StoreProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>

      </body>
    </html>
  );
}

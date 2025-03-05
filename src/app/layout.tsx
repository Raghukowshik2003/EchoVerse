// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar"; // Import the Navbar component
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import ClientLoadingScreen only on the client side
const ClientLoadingScreen = dynamic(() => import("@/components/ClientLoadingScreen"), {
  ssr: false, // Disable server-side rendering for this component
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLoadingScreen>
          <Navbar />
          {children} {/* Render the main content */}
        </ClientLoadingScreen>
        <Script src="/node_modules/preline/dist/preline.js" />
      </body>
    </html>
  );
}

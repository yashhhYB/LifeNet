import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
// import { Toaster } from "@/components/ui/toaster";
// import { ai as AI } from '@/ai/genkit'; // Was commented out

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'LifeNet Survivalist',
  description: 'Offline AI-powered survival assistant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const AIProvider = ai; // Alias for JSX - Temporarily commented out
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <AIProvider> */}
          {children}
          {/* <Toaster /> */}
        {/* </AIProvider> */}
      </body>
    </html>
  );
}

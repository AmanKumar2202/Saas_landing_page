import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
  description: 'Unlock the power of artificial intelligence to create compelling campaigns, analyze customer behavior, and skyrocket your brand\'s growth with our comprehensive AI marketing suite.',
  keywords: 'AI marketing, artificial intelligence, marketing automation, content generation, predictive analytics, brand optimization',
  authors: [{ name: 'ADmyBRAND AI Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Unlock the power of artificial intelligence to create compelling campaigns, analyze customer behavior, and skyrocket your brand\'s growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Transform Your Marketing with AI',
    description: 'Unlock the power of artificial intelligence to create compelling campaigns, analyze customer behavior, and skyrocket your brand\'s growth.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
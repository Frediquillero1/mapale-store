import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const font = Urbanist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mapale Store',
  description: 'Best place to shop online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${font.className} antialiased bg-white min-h-[125vh]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

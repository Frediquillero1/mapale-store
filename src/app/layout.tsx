import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { getCurrentSession } from '@/actions/auth';
import HeaderCategorySelector from '@/components/layout/HeaderCategorySelector';
import { SanityLive } from '@/sanity/lib/live';

const font = Urbanist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mapale Store',
  description: 'Best place to shop online',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = await getCurrentSession();

  return (
    <html lang='en'>
      <body className={`${font.className} antialiased bg-white min-h-[125vh]`}>
        <Header user={user} categorySelector={<HeaderCategorySelector />} />
        {children}

        <SanityLive />
      </body>
    </html>
  );
};

export default RootLayout;

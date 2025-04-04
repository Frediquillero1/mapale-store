import type { Metadata } from 'next';
import './globals.css';
import { Urbanist } from 'next/font/google';
import Header from '@/components/layout/Header';
import { getCurrentSession } from '@/actions/auth';
import { SanityLive } from '@/sanity/lib/live';
import HeaderCategorySelector from '@/components/layout/HeaderCategorySelector';

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
      <body className={`${font.className} antialiased bg-white min-h-[125vh]`}suppressHydrationWarning>
          <Header user={user} categorySelector={<HeaderCategorySelector />}
         />
        {children}

        <SanityLive />
      </body>
    </html>
  );
};

export default RootLayout;

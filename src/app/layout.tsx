import type { Metadata } from 'next';
import { Noto_Sans_Oriya, Courier_Prime, Playfair_Display } from 'next/font/google';
import './globals.css';

const notoOriya = Noto_Sans_Oriya({
  subsets: ['oriya'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-oriya',
  display: 'swap',
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ରବିବାର ରେଡିଓ | Ravibara Radio - 1990s Odisha Sunday Morning',
  description: 'A nostalgic 1990s Odisha Sunday-morning music experience. Tune into evergreen 90s Hindi & Odia songs on an old radio outside a local barber shop.',
  keywords: ['Ravibara Radio', 'Odisha Radio', 'Odia 90s Songs', 'Akshaya Mohanty', '90s Hindi Songs', 'Nostalgia Odisha', 'Odisha Barber Shop'],
  openGraph: {
    title: 'ରବିବାର ରେଡିଓ | Ravibara Radio',
    description: 'A Sunday morning in Odisha, sometime in the 90s.',
    images: ['/barber-shop.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="or" className={`${notoOriya.variable} ${courierPrime.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#0d0a08] overflow-hidden select-none">
        {children}
      </body>
    </html>
  );
}

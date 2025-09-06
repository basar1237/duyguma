import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/lib/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Duyguma Blog - Modern Web Teknolojileri',
  description: 'Modern web teknolojileri, tasarım ve programlama hakkında güncel yazılar ve öğreticiler.',
  keywords: ['web geliştirme', 'react', 'nextjs', 'typescript', 'tasarım', 'programlama'],
  authors: [{ name: 'Lidya Teknoloji' }],
  creator: 'Lidya Teknoloji',
  publisher: 'Duyguma Blog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://duyguma.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://duyguma.com',
    title: 'Duyguma Blog - Modern Web Teknolojileri',
    description: 'Modern web teknolojileri, tasarım ve programlama hakkında güncel yazılar ve öğreticiler.',
    siteName: 'Duyguma Blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Duyguma Blog - Modern Web Teknolojileri',
    description: 'Modern web teknolojileri, tasarım ve programlama hakkında güncel yazılar ve öğreticiler.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

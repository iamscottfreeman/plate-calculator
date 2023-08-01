import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

import './globals.css';
import { fonts } from './fonts';

const APP_NAME = 'Plate Calculator';
const APP_DESC =
  'An easy to use tool to calculate what weights to load on your bar for powerlifting, olympic lifting, and any other kind of weight training.';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC,
  applicationName: APP_NAME,
  authors: [{ name: 'Scott Freeman', url: 'https://scottfreeman.net' }],
  keywords:
    'plate calculator, weight plate, gym, calculator, weight calculator, powerlifting, olympic lifting, weight training',
  themeColor: '#000000',
  openGraph: {
    url: 'https://plates.scottfreeman.net',
    type: 'website',
    title: APP_NAME,
    description: APP_DESC,
    siteName: APP_NAME,
    images: [
      {
        url: 'https://plates.scottfreeman.net/icons/ogimage.png',
        width: 436,
        height: 229
      }
    ]
  },
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default'
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/icons/512.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' }
  ],
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  manifest: '/manifest.json'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={fonts.body.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

import './globals.css';
import { fonts } from './fonts';

const APP_NAME = 'Plate Calculator';
const APP_DESC = 'Quick and easy plate calculator for Powerlifting';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC,
  applicationName: APP_NAME,
  openGraph: {
    images: [
      {
        url: 'https://plates.scottfreeman.net/icons/512.png',
        width: 512,
        height: 512
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

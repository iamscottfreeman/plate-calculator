import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import { fonts } from './fonts';

const APP_NAME = 'Plate Calculator';
const APP_DESC = 'Quick and easy plate calculator for Powerlifting';

export const metadata = {
  title: APP_NAME,
  description: APP_DESC,
  applicationName: APP_NAME,
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

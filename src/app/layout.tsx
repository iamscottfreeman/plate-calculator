import './globals.css';
import { fonts } from './fonts';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Plate Calculator',
  description: 'Quick and easy plate calculator for Powerlifting'
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

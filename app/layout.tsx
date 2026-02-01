import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: {
    default: 'SeekerTracker Docs',
    template: '%s | SeekerTracker Docs',
  },
  description: 'Documentation for SeekerTracker - Search and track .skr SeekerIDs on Solana',
  icons: {
    icon: '/logo.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={jetbrains.variable} suppressHydrationWarning>
      <head>
        <Script 
          defer 
          src="https://stats.sal.fun/script.js" 
          data-website-id="a1f2a475-2350-48c6-9b7d-4f8cf99aafa0"
        />
      </head>
      <body className="flex flex-col min-h-screen" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
        <RootProvider 
          theme={{
            defaultTheme: 'dark',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

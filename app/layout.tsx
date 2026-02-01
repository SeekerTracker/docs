import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';

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
      <body className="flex flex-col min-h-screen" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
        <RootProvider 
          theme={{
            defaultTheme: 'dark',
            forcedTheme: 'dark',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

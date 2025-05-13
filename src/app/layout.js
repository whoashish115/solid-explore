
import Layout from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
};
export const metadata = {
  title: {
    template: '%s | Solid Explore - Visual File Type Explorer',
    default: 'Solid Explore',
  },

  description: `
    Solid Explore is a modern, web-based file type explorer inspired by Solid Explorer.
    Seamlessly filter dozens of formats like PDF, ZIP, SQL, and more — 
    with a sleek UI and multi-engine support. Search smarter, explore deeper.
  `,

  keywords: [
    'file explorer',
    'Solid Explore web',
    'file type search',
    'PDF explorer',
    'index of search',
    'file extension filter',
    'modern file explorer',
    'visual search tool',
    'multi-engine search',
    'web-based file discovery',
    'open directory explorer',
  ],

  authors: [{ name: 'Invisible' }],
  creator: 'Invisible',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Solid Explore - Visual File Type Explorer',

    description: `
      Navigate file types like never before.
      Solid Explore brings the power of Solid Explorer to your browser —
      filter by extension, choose your engine, and find exactly what you need.
    `,

    images: [
      {
        url: 'https://example.com/og-solidexplore-preview.png',
        width: 1200,
        height: 630,
        alt: 'Solid Explore Web Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Solid Explore - Visual File Type Explorer',

    description: `
      A modern reimagination of Solid Explorer — right in your browser.
      Clean UI, powerful filters, and multi-engine support built-in.
    `,

    images: ['https://example.com/og-solidexplore-preview.png'],
    creator: '@InvisibleDev',
  },

  metadataBase: new URL('https://example.com'),

  alternates: {
    canonical: '/',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider>
        <Layout>
        {children}
        </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}


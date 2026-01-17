import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bokade Mehul | Full Stack Developer',
  description:
    'Crafting elegant solutions to complex problems. Specializing in backend architecture, real-time systems, and intelligent automation.',
  keywords: [
    'Full Stack Developer',
    'Backend Developer',
    'Python',
    'Django',
    'Flask',
    'Next.js',
    'React',
    'Portfolio',
  ],
  authors: [{ name: 'Bokade Mehul' }],
  openGraph: {
    title: 'Bokade Mehul | Full Stack Developer',
    description:
      'Crafting elegant solutions to complex problems. Specializing in backend architecture, real-time systems, and intelligent automation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
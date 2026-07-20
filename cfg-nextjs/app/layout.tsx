import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import ChatBot from '@/components/ChatBot';

export const metadata: Metadata = {
  title: 'Change For Good Consulting',
  description: 'Strategies that transform. Results that endure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrap">
          <Nav />
          {children}
        </div>
        <ChatBot />
      </body>
    </html>
  );
}

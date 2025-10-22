import type { Metadata } from 'next';
import ActiveLink from '../components/ActiveLink';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wave Escort',
  description: 'Semi-autonomous tow-in device for surfing. Comes back like a dog.',
  metadataBase: new URL('https://www.waveescort.com'),
  openGraph: {
    title: 'Wave Escort',
    description: 'Semi-autonomous tow-in device for surfing. Comes back like a dog.',
    url: 'https://www.waveescort.com',
    siteName: 'Wave Escort'
  }
};

function Nav() {
  return null;
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="muted">© {new Date().getFullYear()} Wave Escort</div>
        <div className="muted">PATENTED</div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main id="main" className="container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

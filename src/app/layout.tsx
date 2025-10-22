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
  return (
    <header>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="container nav">
        <ActiveLink href="/" className="brand" aria-label="Wave Escort home">
          Wave Escort
        </ActiveLink>
        <nav aria-label="Primary navigation">
          <ActiveLink href="/" prefetch>Home</ActiveLink>
          <ActiveLink href="/purchase" prefetch>Purchase</ActiveLink>
          <ActiveLink href="/how-it-works" prefetch>How it Works</ActiveLink>
          <ActiveLink href="/investors" prefetch>Investors</ActiveLink>
          <ActiveLink href="/contact" prefetch>Contact Us</ActiveLink>
        </nav>
      </div>
    </header>
  );
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

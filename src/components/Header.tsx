import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav aria-label="Primary">
          <Link href="/" aria-label="Home">Wave Escort</Link>
          <div style={{ flex: 1 }} />
          <Link href="/purchase">Purchase</Link>
          <Link href="/how-it-works">How it Works</Link>
          <Link href="/investors">Investors</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}



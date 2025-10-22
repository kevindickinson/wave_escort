"use client";

export default function ContactPage() {
  return (
    <section className="section">
      <h1>Contact Us</h1>
      <p className="muted">Have questions or want early access? Send us a message.</p>
      <form onSubmit={(e) => e.preventDefault()} aria-label="Contact form" style={{maxWidth: 560}}>
        <div style={{display:'grid', gap:12}}>
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)'}} />
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)'}} />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Message" rows={5} style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)'}} />
        </div>
        <button type="submit" className="cta" style={{marginTop:12}}>Send</button>
      </form>
    </section>
  );
}
export default function ContactPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:info@waveescort.com">info@waveescort.com</a></p>
    </main>
  );
}



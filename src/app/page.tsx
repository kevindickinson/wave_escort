"use client";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>It's time for the next disruptive innovation in surfing.</h1>
        <p>Effortlessly catch any size wave. A semi-autonomous tow-in device that fits in your trunk & comes back like a dog.</p>
        <a className="cta" href="#how-it-works">VIDEO: HOW IT WORKS</a>
      </section>

      <section className="grid" aria-label="Key features">
        <article className="card">
          <h3>Comes Back Like a Dog</h3>
          <p className="muted">It’s just you and the wave. The semi-autonomous device will come pick you up when you’re ready.</p>
        </article>
        <article className="card">
          <h3>1 Hour+ Battery</h3>
          <p className="muted">Session length depends on rider and conditions; average sessions often exceed an hour.</p>
        </article>
        <article className="card">
          <h3>Session with Friends</h3>
          <p className="muted">Multiple remotes let friends call the device while you’re riding. Keep your escort working for you.</p>
        </article>
        <article className="card">
          <h3>“Follow Me” GPS Tech</h3>
          <p className="muted">Semi-autonomously follow behind the wave for long rides. Cameraman mode discussed.</p>
        </article>
        <article className="card">
          <h3>1 Mile Remote Range</h3>
          <p className="muted">Prepared to conquer large ocean swell and long rides with long-range control.</p>
        </article>
        <article className="card">
          <h3>Rendezvous Mode</h3>
          <p className="muted">Set a GPS point where the device will wait safely for further commands after a ride.</p>
        </article>
        <article className="card">
          <h3>Self Righting</h3>
          <p className="muted">If flipped by a wave, the craft is designed to flip back over automatically.</p>
        </article>
        <article className="card">
          <h3>Catch Nearly Any Size Wave</h3>
          <p className="muted">With the right foil wing, enjoy everything from small surf to powerful swell.</p>
        </article>
        <article className="card">
          <h3>Less Paddling, More Riding</h3>
          <p className="muted">Stop battling crowds and spend more time riding. Great for shoulder injuries.</p>
        </article>
      </section>

      <section className="section" id="how-it-works">
        <h2>Why not just use an eFoil?</h2>
        <p className="muted">eFoils can be heavy for serious wave riding. Tow into a wave, then leave the 40 lb Wave Escort behind.</p>
        <h2>Why not just paddle into the wave?</h2>
        <p className="muted">Crowds and weak swell limit access. Wave Escort opens new locations and longer rides.</p>
      </section>

      <section className="section">
        <h2>Sign up for our email list (no spam)</h2>
        <form onSubmit={(e) => e.preventDefault()} aria-label="Sign up form">
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" aria-required="true" style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)'}} />
          <button type="submit" className="cta" style={{marginLeft:12}}>Sign Up</button>
        </form>
        <p className="muted" style={{marginTop:12}}>Aerial photography provided by The Everyday Surfer</p>
        <p className="muted">PATENTED</p>
      </section>
    </>
  );
}

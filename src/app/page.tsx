"use client";

import { useRef, useState } from 'react';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video"
        >
          <source src="/assets/FINAL-1.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <a href="/" className="floating-logo" aria-label="Wave Escort home">
            <img src="/assets/wave-escort-logo-resized.png" alt="Wave Escort" />
          </a>
          <h1>It's time for the next disruptive innovation in surfing.</h1>
          <p>Effortlessly catch any size wave. A semi-autonomous tow-in device that fits in your trunk & comes back like a dog.</p>
          <a className="cta" href="#how-it-works">VIDEO: HOW IT WORKS</a>
        </div>
      </section>

      <section className="grid" aria-label="Key features">
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-1">
              <img src="/assets/cropped-efoil-1 (1).png" alt="Dog icon" />
            </div>
            <h3>Comes Back Like a Dog</h3>
          </div>
          <p className="muted">It's just you and the wave. The semi-autonomous device will come pick you up when you're ready.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-2">
              <img src="/assets/battery-life.png" alt="Battery icon" />
            </div>
            <h3>1 Hour+ Battery</h3>
          </div>
          <p className="muted">Session length depends on rider and conditions; average sessions often exceed an hour.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-3">
              <img src="/assets/cropped-foil-surf.png" alt="Friends icon" />
            </div>
            <h3>Session with Friends</h3>
          </div>
          <p className="muted">Multiple remotes let friends call the device while you're riding. Keep your escort working for you.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-4">
              <img src="/assets/cropped-gps.png" alt="GPS icon" />
            </div>
            <h3>"Follow Me" GPS Tech</h3>
          </div>
          <p className="muted">Semi-autonomously follow behind the wave for long rides. Cameraman mode discussed.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-5">
              <img src="/assets/long-range-radio-1.png" alt="Remote icon" />
            </div>
            <h3>1 Mile Remote Range</h3>
          </div>
          <p className="muted">Prepared to conquer large ocean swell and long rides with long-range control.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-6">
              <img src="/assets/gps-pin-drop.png" alt="GPS pin icon" />
            </div>
            <h3>Rendezvous Mode</h3>
          </div>
          <p className="muted">Set a GPS point where the device will wait safely for further commands after a ride.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-7">
              <img src="/assets/cropped-small-wave copy.png" alt="Self righting icon" />
            </div>
            <h3>Self Righting</h3>
          </div>
          <p className="muted">If flipped by a wave, the craft is designed to flip back over automatically.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-8">
              <img src="/assets/cropped-small-wave copy.png" alt="Wave icon" />
            </div>
            <h3>Catch Nearly Any Size Wave</h3>
          </div>
          <p className="muted">With the right foil wing, enjoy everything from small surf to powerful swell.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-9">
              <img src="/assets/cropped-training.png" alt="Training icon" />
            </div>
            <h3>Less Paddling, More Riding</h3>
          </div>
          <p className="muted">Stop battling crowds and spend more time riding. Great for shoulder injuries.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-1">
              <img src="/assets/cropped-unlock-the-coastline copy.png" alt="Coastline icon" />
            </div>
            <h3>Unlock Your Coastline</h3>
          </div>
          <p className="muted">Open the door to empty spots that would usually be deemed not suitable for surfing.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-2">
              <img src="/assets/downwind-foiling.png" alt="Downwind icon" />
            </div>
            <h3>Downwind Foil Escort</h3>
          </div>
          <p className="muted">Escort you and your friends on a downwinder foiling session with GPS follow tech.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-3">
              <img src="/assets/fits-in-trunk-1-1.png" alt="Trunk icon" />
            </div>
            <h3>Fits in Your Trunk</h3>
          </div>
          <p className="muted">Small enough to fit in a car trunk. Powerful enough to have an epic session.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-4">
              <img src="/assets/foil-only.png" alt="Foil icon" />
            </div>
            <h3>Foil Only (For Now)</h3>
          </div>
          <p className="muted">Right now, we're focused on optimizing this product for foil surf tow-in.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-5">
              <img src="/assets/hawaii.png" alt="Hawaii icon" />
            </div>
            <h3>Tech Enabled Surfing</h3>
          </div>
          <p className="muted">Founded by a software engineer, we're packing interesting tech into this product.</p>
        </article>
        <article className="card">
          <div className="card-header">
            <div className="card-icon icon-gradient-6">
              <img src="/assets/boat-launch.png" alt="Boat icon" />
            </div>
            <h3>Forget About the Boat Hassle</h3>
          </div>
          <p className="muted">No need to find a driver & spotter, no need to launch a boat.</p>
        </article>
      </section>

      <section className="section">
        <div style={{maxWidth: 800, margin: '0 auto', textAlign: 'left'}}>
          <h2 style={{textAlign: 'center', fontSize: '36px'}}>How does it work?</h2>
        </div>
        <div style={{maxWidth: 800, margin: '40px auto'}}>
          <img 
            src="/assets/how-does-it-work-scaled.jpg" 
            alt="How Wave Escort Works - Battery powered, GPS integrated, semi-autonomous towing device with wireless remote control" 
            style={{width: '100%', height: 'auto', borderRadius: '12px'}}
          />
        </div>
      </section>

      <section className="section-banner" id="how-it-works">
        <h3 style={{textAlign: 'center', marginTop: 24, fontSize: '28px'}}>How it Works: A deep dive.</h3>
        <div style={{maxWidth: 1000, margin: '24px auto'}}>
          <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: 12, overflow: 'hidden', background: '#000', border: 'none'}}>
            <iframe
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: 12}}
              src="https://www.youtube.com/embed/h0PnIviFuX0"
              title="Wave Escort - How it Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        
      </section>

      

      <section className="section" id="licensees">
        <div style={{maxWidth: 560, margin: '0 auto', textAlign: 'left'}}>
          <h2>Licensees</h2>
          <p className="muted">Interested in licensing the Wave Escort patent? We're open to partnerships with manufacturers and companies looking to bring this technology to market. If you're interested in licensing opportunities, let's chat.</p>
        </div>
      </section>

      <section className="section" id="contact" style={{textAlign: 'left'}}>
        <div style={{maxWidth: 560, margin: '0 auto'}}>
          <h2>Contact Us</h2>
          <p className="muted">Have questions or want early access? Send us a message.</p>
          <form onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div style={{display:'grid', gap:12, marginTop: 20}}>
              <label className="sr-only" htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Name" style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)'}} />
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)'}} />
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Message" rows={5} style={{padding:'10px 12px', borderRadius:8, border:'1px solid var(--border)', background:'var(--bg-soft)', color:'var(--text)', resize:'vertical', fontFamily:'inherit'}} />
            </div>
            <button type="submit" className="cta" style={{marginTop:12, boxShadow:'none'}}>Send</button>
          </form>
        </div>
      </section>

      <section className="section">
        <p className="muted">Aerial photography provided by The Everyday Surfer</p>
      </section>
    </>
  );
}

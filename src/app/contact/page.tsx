"use client";

import { useRef, useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function submitForm(formData: FormData) {
    setStatus('sending');
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        // Clear fields and show success UI
        formRef.current?.reset();
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch (e) {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div style={{ marginTop: 32, maxWidth: 560, borderRadius: 8, border: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.1)', padding: 24 }}>
        <div style={{ color: '#6ee7b7', fontWeight: 600 }}>Thanks — your message has been sent.</div>
        <p style={{ marginTop: 8, color: 'rgba(110, 231, 183, 0.9)' }}>I'll get back to you shortly.</p>
      </div>
    );
  }

  const disabled = status === 'sending';

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        await submitForm(fd);
      }}
      aria-label="Contact form"
      style={{ marginTop: 32, maxWidth: 560 }}
    >
      <div style={{ display: 'grid', gap: 12 }}>
        <label className="sr-only" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          disabled={disabled}
          placeholder="Your name"
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--text)' }}
        />
        <label className="sr-only" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          disabled={disabled}
          placeholder="Email"
          required
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--text)' }}
        />
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          disabled={disabled}
          placeholder="Message"
          rows={6}
          required
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--text)' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
        <button className="cta" type="submit" disabled={disabled}>
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
        {status === 'error' && <span style={{ color: '#fca5a5', fontSize: '0.875rem' }}>There was a problem. Please try again.</span>}
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <section className="section">
      <h1>Contact Us</h1>
      <p className="muted">Have questions or want early access? Send us a message.</p>
      <ContactForm />
    </section>
  );
}

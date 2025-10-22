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
      <div className="mt-8 max-w-xl rounded-md border border-emerald-400/20 bg-emerald-500/10 p-6 text-emerald-200">
        <div className="text-emerald-300 font-semibold">Thanks — your message has been sent.</div>
        <p className="mt-2 text-emerald-200/90">I'll get back to you shortly.</p>
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
      className="mt-8 grid gap-4 max-w-xl"
    >
      <input name="name" disabled={disabled} className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-primary" placeholder="Your name" />
      <input name="email" type="email" disabled={disabled} className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-primary" placeholder="Email" required />
      <textarea name="message" disabled={disabled} className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-primary" rows={6} placeholder="Message" required />
      <div className="flex items-center gap-3">
        <button className="btn-primary w-fit" type="submit" disabled={disabled}>
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
        {status === 'error' && <span className="text-red-300 text-sm">There was a problem. Please try again.</span>}
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

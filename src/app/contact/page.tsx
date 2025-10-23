"use client";

import { useRef, useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function submitForm(formData: FormData) {
    console.log('Form submitted!', formData);
    setStatus('sending');
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    };
    console.log('Payload:', payload);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      console.log('Response status:', res.status);
      if (res.ok) {
        // Clear fields and show success UI
        formRef.current?.reset();
        setStatus('sent');
      } else {
        console.log('Error response:', await res.text());
        setStatus('error');
      }
    } catch (e) {
      console.log('Fetch error:', e);
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="mt-8 max-w-xl rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="rounded-full bg-emerald-500/20 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-emerald-400">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Message Sent Successfully!</h3>
        </div>
        <p className="text-white/80">Thanks for reaching out. I'll get back to you shortly.</p>
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
        <button 
          className="cta" 
          type="submit" 
          disabled={disabled}
          onClick={(e) => {
            console.log('Button clicked!');
            e.preventDefault();
            console.log('Form data:', formRef.current);
            const fd = new FormData(formRef.current!);
            console.log('FormData created:', fd);
            submitForm(fd);
          }}
        >
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

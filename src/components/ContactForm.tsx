import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_ID || 'xxxxxxxx'}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charred-brown mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg bg-pure-cream border border-charred-brown/10 text-charred-brown placeholder-earth-brown/50 focus:outline-none focus:ring-2 focus:ring-xinjiang-red/30 focus:border-xinjiang-red transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-charred-brown mb-1.5">
          Phone or Email
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          required
          className="w-full px-4 py-3 rounded-lg bg-pure-cream border border-charred-brown/10 text-charred-brown placeholder-earth-brown/50 focus:outline-none focus:ring-2 focus:ring-xinjiang-red/30 focus:border-xinjiang-red transition-colors"
          placeholder="+60 12-345 6789 or hello@example.com"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-charred-brown mb-1.5">
          Reservation Date (optional)
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-3 rounded-lg bg-pure-cream border border-charred-brown/10 text-charred-brown placeholder-earth-brown/50 focus:outline-none focus:ring-2 focus:ring-xinjiang-red/30 focus:border-xinjiang-red transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charred-brown mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg bg-pure-cream border border-charred-brown/10 text-charred-brown placeholder-earth-brown/50 focus:outline-none focus:ring-2 focus:ring-xinjiang-red/30 focus:border-xinjiang-red transition-colors resize-none"
          placeholder="How can we help? Table reservation, group order, or just a question..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-xinjiang-red text-white font-medium rounded-full hover:bg-xinjiang-red/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        style={{ backgroundColor: '#A8261A' }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-cumin-gold font-medium">
          Thanks! We'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-xinjiang-red font-medium">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}

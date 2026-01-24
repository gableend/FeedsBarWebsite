import { useState, type FormEvent } from 'react';
import { IS_LIVE, BUTTONDOWN_API_KEY } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function NotifyForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  if (IS_LIVE) {
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${BUTTONDOWN_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          tags: 'feedsbar-waitlist',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Buttondown API error:', response.status, errorData);
        console.error('Request body:', { email_address: email, tags: 'feedsbar-waitlist' });
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="notify" className="py-20 lg:py-28 bg-brand-900" ref={sectionRef}>
      <div className="container-narrow">
        <div className={`max-w-lg mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">
            Join the waitlist
          </h2>
          <p className="mt-4 text-neutral-300">
            We'll send you one email when FeedsBar is ready. No spam, no newsletters.
          </p>

          {status === 'success' ? (
            <div className="mt-10 p-6 bg-neutral-800 rounded-xl fade-in">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/20">
                <svg className="w-6 h-6 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">Thanks! We'll be in touch.</p>
              <p className="mt-2 text-sm text-neutral-400">Check your inbox for a confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-brand-900 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-white text-brand-900 font-medium rounded-xl hover:bg-neutral-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-brand-900 disabled:opacity-60"
                >
                  {status === 'loading' ? 'Joining...' : 'Join waitlist'}
                </button>
              </div>

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-4 text-xs text-neutral-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

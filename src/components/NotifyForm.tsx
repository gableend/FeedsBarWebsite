import { useState, type FormEvent } from 'react';
import { IS_LIVE, NOTIFY_API_ENDPOINT } from '../config';
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
      // Placeholder: In production, this would POST to the actual endpoint
      // await fetch(NOTIFY_API_ENDPOINT, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log('Email submitted:', email, 'to endpoint:', NOTIFY_API_ENDPOINT);
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
          <h2 className="text-3xl lg:text-4xl font-semibold text-brand-50 tracking-tight">
            Join the waitlist
          </h2>
          <p className="mt-4 text-brand-300">
            We'll send you one email when FeedBar is ready. No spam, no newsletters.
          </p>

          {status === 'success' ? (
            <div className="mt-10 p-6 bg-brand-800 rounded-xl fade-in">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/20">
                <svg className="w-6 h-6 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-brand-100 font-medium">Thanks! We'll be in touch.</p>
              <p className="mt-2 text-sm text-brand-400">Check your inbox for a confirmation.</p>
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
                  className="flex-1 px-5 py-4 bg-brand-800 border border-brand-700 rounded-xl text-brand-50 placeholder-brand-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent-dark transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Joining...' : 'Join waitlist'}
                </button>
              </div>

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-4 text-xs text-brand-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

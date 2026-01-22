import { CONTACT_EMAIL, PRIVACY_POLICY_URL, TERMS_URL } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-brand-200">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/images/feeds-mark-core.svg"
              alt="FeedBar"
              className="h-14 w-auto"
            />
            <span className="text-sm font-semibold text-brand-900">FeedBar</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand-500 hover:text-brand-900 transition-colors"
            >
              Contact
            </a>
            <a
              href={PRIVACY_POLICY_URL}
              className="text-brand-500 hover:text-brand-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href={TERMS_URL}
              className="text-brand-500 hover:text-brand-900 transition-colors"
            >
              Terms
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-brand-400">
            &copy; {currentYear} FeedBar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

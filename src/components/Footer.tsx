import { CONTACT_EMAIL, PRIVACY_POLICY_URL, TERMS_URL } from "../config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/images/feeds-mark-core.svg"
              alt="FeedsBar"
              className="h-7 w-auto"
            />
            <span className="text-lg font-semibold tracking-tight text-brand-900">
              feeds.bar
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-neutral-600 hover:text-brand-900 transition-colors"
            >
              Contact
            </a>
            <a
              href={PRIVACY_POLICY_URL}
              className="text-neutral-600 hover:text-brand-900 transition-colors"
            >
              Privacy
            </a>
            <a
              href={TERMS_URL}
              className="text-neutral-600 hover:text-brand-900 transition-colors"
            >
              Terms
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-400">
            © {currentYear} FeedsBar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

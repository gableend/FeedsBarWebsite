// Configuration for FeedBar website

// Set to true when launching to switch CTAs from "Notify me" to "Buy"
export const IS_LIVE = false;

// Paddle checkout URL (replace with actual URL when live)
export const PADDLE_CHECKOUT_URL = 'https://checkout.paddle.com/checkout/custom/feedbar';

// Pricing
export const PRICE = '€24.99';

// API endpoints
export const BUTTONDOWN_API_KEY = import.meta.env.VITE_BUTTONDOWN_API_KEY || '';

// Contact
export const CONTACT_EMAIL = 'hello@feeds.bar';

// Links
export const PRIVACY_POLICY_URL = '/privacy';
export const TERMS_URL = '/terms';

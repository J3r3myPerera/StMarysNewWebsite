import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | St. Mary's Church Maharagama",
  description: "Phone, address, and office hours for St. Mary's Church Maharagama.",
  openGraph: {
    title: "Contact Us | St. Mary's Church Maharagama",
    description: "Phone, address, and office hours for St. Mary's Church Maharagama.",
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

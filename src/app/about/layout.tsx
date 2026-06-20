import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | St. Mary's Church Maharagama",
  description: "The history of St. Mary's Church Maharagama, from a small chapel founded in 1940 to the Our Lady of the Assumption Parish today.",
  openGraph: {
    title: "About Us | St. Mary's Church Maharagama",
    description: "The history of St. Mary's Church Maharagama, from a small chapel founded in 1940 to the Our Lady of the Assumption Parish today.",
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

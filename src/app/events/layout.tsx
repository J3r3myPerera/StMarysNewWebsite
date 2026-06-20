import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events & Gallery | St. Mary's Church Maharagama",
  description: "Photos from parish events at St. Mary's Church Maharagama — Good Friday, the May Feast, Christmas, and more.",
  openGraph: {
    title: "Events & Gallery | St. Mary's Church Maharagama",
    description: "Photos from parish events at St. Mary's Church Maharagama — Good Friday, the May Feast, Christmas, and more.",
    type: 'website',
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

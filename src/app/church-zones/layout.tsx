import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Church Zones | St. Mary's Church Maharagama",
  description: "Parish zones and coordinators for St. Mary's Church Maharagama.",
  openGraph: {
    title: "Church Zones | St. Mary's Church Maharagama",
    description: "Parish zones and coordinators for St. Mary's Church Maharagama.",
    type: 'website',
  },
};

export default function ChurchZonesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

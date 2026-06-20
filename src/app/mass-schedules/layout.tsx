import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mass Schedules | St. Mary's Church Maharagama",
  description: "Weekday and Sunday Mass times at St. Mary's Church Maharagama.",
  openGraph: {
    title: "Mass Schedules | St. Mary's Church Maharagama",
    description: "Weekday and Sunday Mass times at St. Mary's Church Maharagama.",
    type: 'website',
  },
};

export default function MassSchedulesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

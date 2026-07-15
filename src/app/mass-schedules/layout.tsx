import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mass Schedules | St. Mary's Church Maharagama",
  description:
    "Weekday and Sunday Mass times at St. Mary's Church Maharagama. Sunday Masses are at 7:30 AM (Sinhala) at St. Mary's Church, and 5:30 PM (Bilingual) at Boralessgamuwa Church.",
  openGraph: {
    title: "Mass Schedules | St. Mary's Church Maharagama",
    description:
      "Weekday and Sunday Mass times at St. Mary's Church Maharagama. Sunday Masses are at 7:30 AM (Sinhala) at St. Mary's Church, and 5:30 PM (Bilingual) at Boralessgamuwa Church.",
    type: 'website',
  },
};

export default function MassSchedulesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

'use client';

import dynamic from 'next/dynamic';

const CurriculumWeb = dynamic(
  () => import('@/components/curriculum-web'),
  {
    loading: () => (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Cargando tu currículum...
      </div>
    ),
    ssr: false,
  }
);

export default function Home() {
  return <CurriculumWeb />;
}
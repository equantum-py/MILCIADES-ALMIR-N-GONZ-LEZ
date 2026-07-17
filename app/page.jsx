'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CurriculumWeb = dynamic(() => import('@/components/curriculum-web'), {
  loading: () => <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">Cargando...</div>,
});

export default function Home() {
  return <CurriculumWeb />;
}

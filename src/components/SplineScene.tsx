'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const SplineComponent = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-dark-500/50 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-teacch-orange border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function SplineScene() {
  return (
    <Suspense fallback={null}>
      <div className="absolute inset-0 z-10">
        <SplineComponent
          scene="https://prod.spline.design/m3rJocABI-Z73aNC/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </Suspense>
  );
} 
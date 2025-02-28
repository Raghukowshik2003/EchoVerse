"use client";

import { Suspense, lazy, useEffect, useState } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Splite() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload the Spline scene
    const preloadSpline = async () => {
      await import("@splinetool/react-spline");
      setLoading(false);
    };

    preloadSpline();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <Suspense fallback={<div className="loader"></div>}>
          <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        </Suspense>
      )}
    </div>
  );
}

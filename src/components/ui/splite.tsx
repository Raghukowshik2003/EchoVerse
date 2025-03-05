import { lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Splite() {
  return (
    <div className="w-full h-96 lg:w-[700px] lg:h-[800px] flex justify-center items-center lg:mt-[-60px]">
      <Spline scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
    </div>
  );
}
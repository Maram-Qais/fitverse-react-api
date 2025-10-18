import banner from "../assets/b.png";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 pb-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-12 items-center gap-8">
        {/* Text Section */}
        <div className="lg:col-span-6 z-10">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4">
            <span
              className="drop-shadow-[0_3px_10px_rgba(245,166,35,0.5)]"
              style={{ color: "#f5a623" }}
            >
           Fit
            </span>
            <span className="text-gray-100">Verse</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mb-6 text-base md:text-lg leading-relaxed">
            Transform your body and mind. Explore powerful workouts, track your
            progress, and ignite your inner strength with every move.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#exercises"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg transition-all shadow-[0_0_15px_rgba(245,166,35,0.4)]"
              style={{
                background:
                  "linear-gradient(to right, #f5a623, #f5a623, #f0a500)",
              }}
            >
              Explore Exercises
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

           
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:col-span-6 justify-end relative">
          <img
            src={banner}
            alt="Fitness Motivation"
            className="w-full max-h-[800px] object-contain"
          />
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none"></div>
    </section>
  );
};

export default HeroBanner;

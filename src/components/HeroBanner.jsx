import banner from "../assets/b.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroBanner = () => {
  const root = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      const reduce =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (reduce) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });

      // Animate h1, p, and a together from left 
      tl.fromTo(
        textRef.current.querySelectorAll("h1, p, a"),
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, stagger: { each: 0.05, from: "start" }
}
      )
        // Image slides in from the right
        .fromTo(
          imgRef.current,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1 },
0        );
    },
    { scope: root, dependencies: [] } 
  );

  return (
    <section
      ref={root}
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 grid lg:grid-cols-12 items-center gap-8">
        {/* Text Section */}
        <div className="lg:col-span-6 z-10" ref={textRef}>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight mb-4 will-change-transform">
            <span
              className="drop-shadow-[0_3px_10px_rgba(245,166,35,0.5)]"
              style={{ color: "#f5a623" }}
            >
              Fit
            </span>
            <span className="text-gray-100">Verse</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mb-6 text-base md:text-lg leading-relaxed will-change-transform">
            Transform your body and mind. Explore powerful workouts, track your
            progress, and ignite your inner strength with every move.
          </p>

         <a
  href="#exercises"
  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-lg transition-colors shadow-[0_0_15px_rgba(245,166,35,0.4)] will-change-transform"
  style={{ background: "linear-gradient(to right, #f5a623, #f5a623, #f0a500)" }}
>
  Explore Exercises ...
</a>

        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:col-span-6 justify-end relative">
          <img
            ref={imgRef}
            src={banner}
            alt="Fitness Motivation"
            className="w-full max-h-[800px] object-contain will-change-transform"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none"></div>
    </section>
  );
};

export default HeroBanner;

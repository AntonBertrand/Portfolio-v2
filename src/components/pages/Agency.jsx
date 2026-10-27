import React from "react";
import { Link } from "react-router-dom";

const Agency = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Video background — full cover, muted autoplay, dark overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/agency-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden />
      </div>
      {/* Hero — content on top of video */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
          {/* Main headline — big, two lines */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="block">Your site.</span>
            <span className="block">Done right. Done fast.</span>
          </h1>

          {/* Body — short sentences, ADHD-friendly */}
          <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
            No long waits. No tech speak. We use AI to design and build. You get
            a website that works. Want one? Let&apos;s go.
          </p>

          {/* CTAs — clear contrast */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md border-2 border-white bg-transparent text-white font-medium hover:bg-white hover:text-black transition-colors duration-200"
            >
              Get my site
            </Link>
            <Link
              to="/#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors duration-200"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted by — slow horizontal marquee with edge fade, centered 50% width */}
      <section className="relative z-10 bg-zinc-950 py-16 md:py-20">
        <div className="text-center mb-12 md:mb-14 px-4">
          <p className="text-gray-400 text-lg md:text-xl mb-1">
            Trusted by experts.
          </p>
          <p className="text-white font-semibold text-xl md:text-2xl">
            Used by the leaders.
          </p>
        </div>
        <div
          className="relative w-full max-w-[90%] md:max-w-[50%] mx-auto overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="flex animate-marquee w-max gap-10 md:gap-14">
            {[...Array(2)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center gap-10 md:gap-14 shrink-0"
              >
                {[
                  { src: "/company-logos/Strivor-logo.webp", alt: "Strivor" },
                  { src: "/company-logos/berra-logo.webp", alt: "Berra" },
                  {
                    src: "/company-logos/snugg-club-logo.webp",
                    alt: "Snugg Club",
                  },
                  { src: "/company-logos/qr-sharp-logo.webp", alt: "QR Sharp" },
                ].map((logo, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center justify-center shrink-0 h-10 md:h-12 w-auto max-w-[120px] md:max-w-[140px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-auto object-contain object-center opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agency;

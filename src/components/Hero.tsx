import Image from "next/image";

export default function Hero() {
  return (
    <section className="sparkle-bg relative isolate overflow-hidden px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4fd8]/36 blur-[140px] sm:h-[36rem] sm:w-[36rem]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc1f0]/22 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
      <div className="pointer-events-none absolute -top-20 left-[-8%] h-72 w-72 rounded-full bg-[#ff4fd8]/26 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-12 top-8 h-64 w-64 rounded-full bg-[#ffc1f0]/18 blur-3xl sm:h-80 sm:w-80" />
      <div className="hero-bubble pointer-events-none right-[12%] top-[12%] h-10 w-10 sm:h-12 sm:w-12" />
      <div className="hero-bubble pointer-events-none left-[8%] top-[54%] h-7 w-7 sm:h-9 sm:w-9" />
      <div className="hero-bubble pointer-events-none bottom-[18%] right-[28%] h-6 w-6 sm:h-7 sm:w-7" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_58%)]" />
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Decorative brand logo behind the hero card — keep readable; content is z-10 */}
        <div
          className="pointer-events-none absolute left-1/2 top-[18%] z-0 w-[min(92vw,17rem)] -translate-x-1/2 sm:top-[22%] sm:w-[min(88vw,26rem)] lg:top-[24%] lg:w-[min(90vw,38rem)] xl:w-[min(92vw,42rem)]"
          aria-hidden
        >
          <div className="hero-logo-float relative flex items-center justify-center">
            <div className="absolute inset-[-18%] rounded-full bg-[#ff4fd8]/30 blur-[48px] sm:bg-[#ff4fd8]/28 sm:blur-[56px]" />
            <div className="absolute inset-[-8%] rounded-full bg-[#ffc1f0]/15 blur-3xl" />
            <Image
              src="/logo-hero.png"
              alt=""
              width={1024}
              height={1024}
              priority
              className="relative h-auto w-full scale-[1.12] opacity-[0.18] blur-xl sm:scale-[1.18] sm:opacity-[0.22] sm:blur-2xl lg:scale-[1.22] lg:opacity-[0.25]"
              sizes="(max-width: 640px) 272px, (max-width: 1024px) 416px, 608px"
            />
          </div>
        </div>

        <div className="relative z-10">
        <div className="glitch-accent relative mx-auto max-w-4xl rounded-[2.25rem] border border-[#c0c0c0]/44 bg-gradient-to-br from-white/14 via-[#ff4fd8]/[0.14] to-white/[0.04] p-7 shadow-[0_0_120px_rgba(255,79,216,0.38)] backdrop-blur-2xl sm:p-11 lg:p-14">
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] border border-white/25 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/85 to-transparent" />
          <p className="mb-5 inline-flex rounded-full border border-[#c0c0c0]/40 bg-[#c0c0c0]/10 px-4 py-1 text-xs font-medium tracking-[0.16em] text-[#f8f8ff]">
            Yagmus Studio ✨
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#f8f8ff] sm:text-5xl lg:text-7xl">
            ✨ logic in code, magic in design ✨
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f8f8ff]/85 sm:text-xl">
            i build apps, design interfaces &amp; create digital visuals
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-[#ff4fd8]/70 bg-[#ff4fd8]/85 px-6 py-3 text-sm font-medium text-[#0f0f14] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,79,216,0.45)]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#c0c0c0]/60 bg-white/5 px-6 py-3 text-sm font-medium text-[#f8f8ff] transition hover:-translate-y-0.5 hover:border-[#ffc1f0] hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

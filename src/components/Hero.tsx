export default function Hero() {
  return (
    <section className="sparkle-bg relative isolate overflow-hidden px-4 pb-18 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4fd8]/34 blur-[110px] sm:h-[30rem] sm:w-[30rem]" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffc1f0]/20 blur-[96px] sm:h-[24rem] sm:w-[24rem]" />
      <div className="pointer-events-none absolute -top-20 left-[-8%] z-0 h-72 w-72 rounded-full bg-[#ff4fd8]/26 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-12 top-8 z-0 h-64 w-64 rounded-full bg-[#ffc1f0]/18 blur-3xl sm:h-80 sm:w-80" />
      <div className="hero-bubble pointer-events-none right-[12%] top-[12%] z-0 h-10 w-10 sm:h-12 sm:w-12" />
      <div className="hero-bubble pointer-events-none left-[8%] top-[54%] z-0 h-7 w-7 sm:h-9 sm:w-9" />
      <div className="hero-bubble pointer-events-none bottom-[18%] right-[28%] z-0 h-6 w-6 sm:h-7 sm:w-7" />
      <div className="pointer-events-none absolute left-[24%] top-[24%] z-0 h-2 w-2 rounded-full bg-[#f8f8ff]/70" />
      <div className="pointer-events-none absolute right-[20%] top-[32%] z-0 h-1.5 w-1.5 rounded-full bg-[#f8f8ff]/55" />
      <div className="pointer-events-none absolute right-[32%] top-[62%] z-0 h-px w-10 bg-gradient-to-r from-transparent via-[#c0c0c0]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_58%)]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="glitch-accent relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-[#c0c0c0]/46 bg-gradient-to-br from-white/14 via-[#ff4fd8]/[0.13] to-white/[0.04] p-7 shadow-[0_0_96px_rgba(255,79,216,0.34)] backdrop-blur-2xl sm:p-10 lg:p-11">
          <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] border border-white/25 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
          <div className="pointer-events-none absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#c0c0c0]/85 to-transparent" />
          <p className="mb-5 inline-flex rounded-full border border-[#c0c0c0]/40 bg-[#c0c0c0]/10 px-4 py-1 text-xs font-medium tracking-[0.16em] text-[#f8f8ff]">
            Yagmus Studio ✨
          </p>
          <h1 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#f8f8ff] sm:text-5xl lg:text-[3.35rem]">
            I design, code &amp; create digital experiences.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f8f8ff]/85 sm:text-lg">
            Software engineering student focused on iOS, web, and social media design.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <p className="mt-6 text-sm leading-relaxed text-[#f8f8ff]/74">
            Currently showcasing social media works — iOS and web projects coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}

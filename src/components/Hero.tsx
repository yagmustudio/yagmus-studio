export default function Hero() {
  return (
    <section className="sparkle-bg relative isolate overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff4fd8]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 top-10 z-0 h-80 w-80 rounded-full bg-[#ffc1f0]/14 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_0_80px_rgba(255,79,216,0.22)] backdrop-blur-2xl sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="relative pt-10">
        <p className="mb-4 text-sm font-medium tracking-[0.35em] text-[#ffc1f0]/85">
  YAGMUS STUDIO
</p>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#f8f8ff] sm:text-5xl lg:text-6xl">
            logic in code, magic in design
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f8f8ff]/76 sm:text-lg">
            Software Engineering student focused on iOS, Web, and social media content design.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-[#ff4fd8]/70 bg-[#ff4fd8] px-6 py-3 text-sm font-medium text-[#0f0f14] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(255,79,216,0.5)]"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-[#f8f8ff] transition hover:-translate-y-0.5 hover:border-[#ffc1f0]/70 hover:bg-white/[0.09]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[320px] lg:block">
          <div className="absolute right-8 top-4 h-44 w-64 rounded-[1.5rem] border border-[#c0c0c0]/25 bg-gradient-to-br from-white/[0.12] via-[#ff4fd8]/[0.10] to-white/[0.03] p-5 shadow-[0_0_50px_rgba(255,79,216,0.20)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ffc1f0]/80">iOS</p>
            <div className="mt-6 h-2 w-28 rounded-full bg-white/20" />
            <div className="mt-3 h-2 w-40 rounded-full bg-[#ff4fd8]/30" />
            <div className="mt-3 h-2 w-24 rounded-full bg-white/15" />
          </div>

          <div className="absolute left-4 top-24 h-48 w-72 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 shadow-[0_0_50px_rgba(192,192,192,0.10)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#f8f8ff]/60">Social Media</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-2xl bg-[#ff4fd8]/25" />
              <div className="h-20 rounded-2xl bg-white/10" />
              <div className="h-20 rounded-2xl bg-[#ffc1f0]/20" />
            </div>
          </div>

          <div className="absolute bottom-6 right-2 h-32 w-56 rounded-[1.5rem] border border-[#ff4fd8]/25 bg-gradient-to-br from-[#ff4fd8]/20 to-white/[0.03] p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#ffc1f0]/80">Web</p>
            <div className="mt-5 h-16 rounded-2xl border border-white/10 bg-white/[0.05]" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-[#f8f8ff] sm:text-4xl">
          Let&apos;s create something.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#f8f8ff]/75 sm:text-base">
          Available for social media design, portfolio websites, and future iOS
          collaborations.
        </p>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="mailto:yagmur@ramteknoloji.com"
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[#f8f8ff] transition hover:border-[#ff4fd8]/42"
          >
            Email: yagmur@ramteknoloji.com
          </a>
          <a
            href="https://instagram.com/yagmustudio"
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[#f8f8ff] transition hover:border-[#ff4fd8]/42"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/yagmurgokaydinoglu34/"
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[#f8f8ff] transition hover:border-[#ff4fd8]/42"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yagmustudio"
            target="_blank"
            rel="noreferrer"
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-[#f8f8ff] transition hover:border-[#ff4fd8]/42"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Projects",
  description: "Upcoming web portfolio and client projects from Yagmus Studio.",
};

export default function WebProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link
        href="/#work"
        className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-[#f8f8ff] transition hover:border-[#ff4fd8]/50"
      >
        ← Back to Work
      </Link>
      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-[#f8f8ff] sm:text-4xl">Web Projects</h1>
        <p className="mt-3 max-w-3xl text-sm text-[#f8f8ff]/76 sm:text-base">
          Portfolio and client websites will be added here over time.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {["Portfolio Website — In progress", "Client Websites — Coming soon"].map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#c0c0c0]/10 via-white/[0.02] to-[#0f0f14] p-6"
            >
              <p className="text-base font-medium text-[#f8f8ff]">{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

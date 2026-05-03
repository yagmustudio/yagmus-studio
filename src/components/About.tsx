const focusAreas = ["iOS Development", "Web Design", "Social Media Design"];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[#f8f8ff] sm:text-4xl">
            About
          </h2>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-[#f8f8ff]/80 sm:text-base">
            I&apos;m Yağmur, a software engineering student interested in iOS development, web
            design, and digital content creation. I currently design social media visuals for
            corporate brands while building my own apps and web projects.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article
                key={area}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.02] p-5"
              >
                <p className="text-sm font-medium text-[#ffc1f0]">{area}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const focusAreas = ["iOS Development", "Web Design", "Social Media Design"];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8 lg:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[#f8f8ff] sm:text-4xl">
            About
          </h2>
          <p className="mt-5 space-y-4 max-w-4xl text-sm leading-relaxed text-[#f8f8ff]/80 sm:text-base">
          I’m Yağmur Gökaydınoğlu, a third-year Software Engineering student at Istanbul Okan University, 
focused on building digital experiences that combine technology and design.</p>

<p className="mt-5 space-y-4">My interests include iOS development, backend systems, web interfaces, and brand-oriented visual content. 

  Alongside creating social media designs for corporate clients, I also completed a backend development 
  internship at VakıfBank Headquarters, where I gained experience in enterprise software environments 
  and collaborative product development.</p>

<p className="mt-5 space-y-4">I enjoy blending logic with visual storytelling — creating products that are both functional and aesthetically refined.</p>

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

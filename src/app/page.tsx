import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialProjectCard from "@/components/SocialProjectCard";
import WorkCategories from "@/components/WorkCategories";
import { socialProjects } from "@/data/socialProjects";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f14]">
      <Navbar />
      <main className="relative z-10">
        <Hero />

        <section
          id="work"
          className="section-work relative -mt-8 px-4 pb-20 pt-14 sm:-mt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:-mt-12 lg:px-8 lg:pb-24 lg:pt-18"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#ff4fd8]/10 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="mb-10">
              <h2 className="text-3xl font-semibold tracking-tight text-[#f8f8ff] sm:text-4xl">
                Work
              </h2>
              <p className="mt-4 max-w-3xl text-sm text-[#f8f8ff]/75 sm:text-base">
                Social Media Works is currently the strongest focus, while iOS and web projects
                are actively being built.
              </p>
            </div>

            <WorkCategories />

            <div id="social-projects" className="mt-14">
              <h3 className="text-2xl font-semibold tracking-tight text-[#f8f8ff] sm:text-3xl">
                Social Media Works
              </h3>
              <p className="mt-3 text-sm text-[#f8f8ff]/68 sm:text-base">
                Corporate social media accounts and content series.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {socialProjects.map((project) => (
                  <SocialProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-soft">
          <div className="relative z-10">
            <About />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

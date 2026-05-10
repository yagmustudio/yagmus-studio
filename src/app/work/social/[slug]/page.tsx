import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectGallery from "@/components/ProjectGallery";
import ProjectImage from "@/components/ProjectImage";
import { socialProjects, socialProjectsBySlug } from "@/data/socialProjects";

type SocialProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return socialProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: SocialProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = socialProjectsBySlug.get(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.company} Social Works`,
    description: `${project.company} social media content design projects by Yagmus Studio.`,
  };
}

export default async function SocialProjectPage({ params }: SocialProjectPageProps) {
  const { slug } = await params;
  const project = socialProjectsBySlug.get(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link
        href="/#work"
        className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-[#f8f8ff] transition hover:border-[#ff4fd8]/50"
      >
        ← Back to Work
      </Link>

      <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <p className="text-xs tracking-[0.14em] text-[#ffc1f0]">{project.handle}</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#f8f8ff] sm:text-4xl">
          {project.company}
        </h1>
        <p className="mt-4 text-sm text-[#f8f8ff]/78 sm:text-base">
          <span className="font-medium text-[#f8f8ff]">Role:</span> Social Media Content Design
        </p>
        <p className="mt-2 text-sm text-[#f8f8ff]/75 sm:text-base">{project.description}</p>

        {project.slug !== "other-projects" ? (
  <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-2">
    <div className="aspect-[6/5]">
      <ProjectImage
        src={project.coverImage}
        alt={`${project.company} project cover`}
        label={project.company}
      />
    </div>
  </div>
) : null}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-[#f8f8ff]">Gallery</h2>
        <p className="mt-2 text-sm text-[#f8f8ff]/70">
        Selected social media content and visual communication works.
        </p>
        <div className="mt-5">
        <ProjectGallery
  company={project.company}
  images={project.galleryImages}
  isBanner={project.slug === "other-projects"}
/>
        </div>
      </section>
    </main>
  );
}

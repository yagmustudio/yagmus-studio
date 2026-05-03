import Link from "next/link";

import type { SocialProject } from "@/data/socialProjects";
import ProjectImage from "@/components/ProjectImage";

type SocialProjectCardProps = {
  project: SocialProject;
};

export default function SocialProjectCard({ project }: SocialProjectCardProps) {
  return (
    <Link
      href={`/work/social/${project.slug}`}
      className="premium-card group rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-[#ff4fd8]/[0.04] to-white/[0.02] p-4 hover:border-[#ff4fd8]/55"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-[#c0c0c0]/35 bg-[#0f0f14]/45 p-1 shadow-[inset_0_0_14px_rgba(255,255,255,0.08)]">
        <ProjectImage
          src={project.coverImage}
          alt={`${project.company} cover`}
          label={project.company}
          className="transition duration-300 ease-in-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold leading-tight text-[#f8f8ff] sm:text-xl">
          {project.company}
        </h3>
        <p className="mt-1 text-sm text-[#f8f8ff]/68 sm:text-[0.95rem]">{project.handle}</p>
        <p className="mt-4 text-sm font-medium text-[#ffc1f0]">View Project →</p>
      </div>
    </Link>
  );
}

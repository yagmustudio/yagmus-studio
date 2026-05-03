import ProjectImage from "@/components/ProjectImage";

type ProjectGalleryProps = {
  company: string;
  images: string[];
};

export default function ProjectGallery({ company, images }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={image}
          className="premium-card group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-2 hover:border-[#ff4fd8]/45"
        >
          <div className="aspect-[4/5]">
            <ProjectImage
              src={image}
              alt={`${company} gallery ${index + 1}`}
              label={`${company} • ${String(index + 1).padStart(2, "0")}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

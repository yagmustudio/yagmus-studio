import ProjectImage from "@/components/ProjectImage";

type ProjectGalleryProps = {
  company: string;
  images: string[];
  isBanner?: boolean;
};

export default function ProjectGallery({
  company,
  images,
  isBanner = false,
}: ProjectGalleryProps) {
  return (
    <div
      className={
        isBanner
          ? "flex flex-col gap-8"
          : "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {images.map((image, index) => (
        <div
          key={image}
          className={
            isBanner
              ? "overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-2"
              : "premium-card group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-2 hover:border-[#ff4fd8]/45"
          }
        >
          <div className={isBanner ? "aspect-[12/5]" : "aspect-[4/5]"}>
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
export type SocialProject = {
  slug: string;
  company: string;
  handle: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
};

// Put your exported project visuals under: public/images/social/[slug]/
// Keep cover image as "cover.jpg" and gallery images as "01.jpg"..."06.jpg".
export const socialProjects: SocialProject[] = [
  {
    slug: "ultra-anchor",
    company: "Ultra Anchor",
    handle: "@ultra.anchor",
    description: "Social media content design",
    coverImage: "/images/social/ultra-anchor/cover.jpg",
    galleryImages: [
      "/images/social/ultra-anchor/01.jpg",
      "/images/social/ultra-anchor/02.jpg",
      "/images/social/ultra-anchor/03.jpg",
      "/images/social/ultra-anchor/04.jpg",
      "/images/social/ultra-anchor/05.jpg",
      "/images/social/ultra-anchor/06.jpg",
    ],
  },
  {
    slug: "oba-paslanmaz",
    company: "Oba Paslanmaz",
    handle: "@obapaslanmaz",
    description: "Social media content design",
    coverImage: "/images/social/oba-paslanmaz/cover.jpg",
    galleryImages: [
      "/images/social/oba-paslanmaz/01.jpg",
      "/images/social/oba-paslanmaz/02.jpg",
      "/images/social/oba-paslanmaz/03.jpg",
      "/images/social/oba-paslanmaz/04.jpg",
      "/images/social/oba-paslanmaz/05.jpg",
      "/images/social/oba-paslanmaz/06.jpg",
    ],
  },
  {
    slug: "karayaka-otomotiv",
    company: "Karayaka Otomotiv",
    handle: "@karayakaotomotiv",
    description: "Social media content design",
    coverImage: "/images/social/karayaka-otomotiv/cover.jpg",
    galleryImages: [
      "/images/social/karayaka-otomotiv/01.jpg",
      "/images/social/karayaka-otomotiv/02.jpg",
      "/images/social/karayaka-otomotiv/03.jpg",
      "/images/social/karayaka-otomotiv/04.jpg",
      "/images/social/karayaka-otomotiv/05.jpg",
      "/images/social/karayaka-otomotiv/06.jpg",
    ],
  },
  {
    slug: "ram-teknoloji",
    company: "RAM Teknoloji",
    handle: "@ram.teknoloji",
    description: "Social media content design",
    coverImage: "/images/social/ram-teknoloji/cover.jpg",
    galleryImages: [
      "/images/social/ram-teknoloji/01.jpg",
      "/images/social/ram-teknoloji/02.jpg",
      "/images/social/ram-teknoloji/03.jpg",
      "/images/social/ram-teknoloji/04.jpg",
      "/images/social/ram-teknoloji/05.jpg",
      "/images/social/ram-teknoloji/06.jpg",
    ],
  },
  {
    slug: "balci-oto-eurorepar",
    company: "Balcı Oto Eurorepar",
    handle: "@balcioto.eurorepar",
    description: "Social media content design",
    coverImage: "/images/social/balci-oto-eurorepar/cover.jpg",
    galleryImages: [
      "/images/social/balci-oto-eurorepar/01.jpg",
      "/images/social/balci-oto-eurorepar/02.jpg",
      "/images/social/balci-oto-eurorepar/03.jpg",
      "/images/social/balci-oto-eurorepar/04.jpg",
      "/images/social/balci-oto-eurorepar/05.jpg",
      "/images/social/balci-oto-eurorepar/06.jpg",
    ],
  },
  {
    slug: "aplus-koltuk-yikama",
    company: "Aplus Koltuk Yıkama",
    handle: "@aplus.koltukyikama",
    description: "Social media content design",
    coverImage: "/images/social/aplus-koltuk-yikama/cover.jpg",
    galleryImages: [
      "/images/social/aplus-koltuk-yikama/01.jpg",
      "/images/social/aplus-koltuk-yikama/02.jpg",
      "/images/social/aplus-koltuk-yikama/03.jpg",
      "/images/social/aplus-koltuk-yikama/04.jpg",
      "/images/social/aplus-koltuk-yikama/05.jpg",
      "/images/social/aplus-koltuk-yikama/06.jpg",
    ],
  },
];

export const socialProjectsBySlug = new Map(
  socialProjects.map((project) => [project.slug, project]),
);

export type SocialProject = {
  slug: string;
  company: string;
  handle: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
};


export const socialProjects: SocialProject[] = [
  {
    slug: "nova-dokum",
    company: "Nova Döküm",
    handle: "@novadokum",
    description: "Industrial branding, visual systems & product communication",
    coverImage: "/images/nova-dokum/cover.jpg",
    galleryImages: [
      "/images/nova-dokum/01.jpg",
      "/images/nova-dokum/02.jpg",
      "/images/nova-dokum/03.jpg",
      "/images/nova-dokum/04.jpg",
      "/images/nova-dokum/05.jpg",
      "/images/nova-dokum/06.jpg",
    ],
  },
  {
    slug: "oba-paslanmaz",
    company: "Oba Paslanmaz",
    handle: "@obapaslanmaz",
    description: "Premium stainless steel industry visuals and brand communication",
    coverImage: "/images/oba-paslanmaz/cover.jpg",
    galleryImages: [
      "/images/oba-paslanmaz/01.jpg",
      "/images/oba-paslanmaz/02.jpg",
      "/images/oba-paslanmaz/03.jpg",
      "/images/oba-paslanmaz/04.jpg",
      "/images/oba-paslanmaz/05.jpg",
      "/images/oba-paslanmaz/06.jpg",
    ],
  },
  {
    slug: "karayaka-otomotiv",
    company: "Karayaka Otomotiv",
    handle: "@karayakaotomotiv",
    description: "Automotive spare part campaigns and e-commerce visuals",
    coverImage: "/images/karayaka-otomotiv/cover.jpg",
    galleryImages: [
      "/images/karayaka-otomotiv/01.jpg",
      "/images/karayaka-otomotiv/02.jpg",
      "/images/karayaka-otomotiv/03.jpg",
      "/images/karayaka-otomotiv/04.jpg",
      "/images/karayaka-otomotiv/05.jpg",
      "/images/karayaka-otomotiv/06.jpg",
    ],
  },
  {
    slug: "ram-teknoloji",
    company: "RAM Teknoloji",
    handle: "@ram.teknoloji",
    description: "Corporate technology branding and digital service communication",
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
    slug: "otoparca-city",
    company: "Oto Parça City",
    handle: "@otoparcacity",
    description: "Performance-focused automotive product campaigns and promotions",
    coverImage: "/images/otoparca-city/cover.jpg",
    galleryImages: [
      "/images/otoparca-city/01.jpg",
      "/images/otoparca-city/02.jpg",
      "/images/otoparca-city/03.jpg",
      "/images/otoparca-city/04.jpg",
      "/images/otoparca-city/05.jpg",
      "/images/otoparca-city/06.jpg",
    ],
  },
  {
    slug: "other-projects",
    company: "Other Projects",
    handle: "Various Clients",
    description: "Selected visual works, campaign designs & promotional banners",
    coverImage: "/images/other-projects/cover.jpg",
    galleryImages: [
      "/images/other-projects/01.jpg",
      "/images/other-projects/02.jpg",
      "/images/other-projects/03.jpg",
      "/images/other-projects/04.jpg",
  
    ],
  },
];

export const socialProjectsBySlug = new Map(
  socialProjects.map((project) => [project.slug, project]),
);

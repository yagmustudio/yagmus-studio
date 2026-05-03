import Link from "next/link";

const categories = [
  {
    title: "Social Media Works",
    status: "Available now",
    description: "Content designs created for corporate brand accounts.",
    cta: "View Social Projects",
    href: "#social-projects",
    active: true,
  },
  {
    title: "iOS Apps",
    status: "Building",
    description: "Two iOS apps are currently in progress and will be added after release.",
    cta: "Coming soon",
    href: "/work/apps",
    active: false,
  },
  {
    title: "Web Projects",
    status: "Building",
    description: "Portfolio and client websites will be added here over time.",
    cta: "Coming soon",
    href: "/work/web",
    active: false,
  },
];

export default function WorkCategories() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((item) => {
        const commonClass =
          "premium-card group rounded-[1.75rem] border p-6";
        const classes = item.active
          ? `${commonClass} border-[#ff4fd8]/40 bg-gradient-to-br from-[#ff4fd8]/15 via-white/[0.03] to-[#0f0f14]`
          : `${commonClass} border-white/10 bg-white/[0.02] hover:border-[#c0c0c0]/45`;

        const content = (
          <article className={classes}>
            <p className="text-xs tracking-[0.14em] text-[#ffc1f0]">{item.status}</p>
            <h3 className="mt-2 text-xl font-semibold leading-tight text-[#f8f8ff] sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#f8f8ff]/75 sm:text-[0.95rem]">
              {item.description}
            </p>
            <p className="mt-6 text-sm font-medium text-[#f8f8ff] group-hover:text-[#ffc1f0]">
              {item.cta} →
            </p>
          </article>
        );

        if (item.href.startsWith("#")) {
          return (
            <a key={item.title} href={item.href}>
              {content}
            </a>
          );
        }

        return (
          <Link key={item.title} href={item.href}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}

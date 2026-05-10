import Link from "next/link";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f0f14]/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center">
  <img
    src="/logo-hero.png"
    alt="Yagmus Studio"
    className="h-10 w-auto object-contain"
  />
</Link>
        <ul className="flex items-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-[#f8f8ff]/85 transition hover:bg-white/10 hover:text-[#ffc1f0]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

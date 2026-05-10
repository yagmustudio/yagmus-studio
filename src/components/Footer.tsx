export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-[#f8f8ff]/65 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Yagmus Studio</p>
        <p>Minimal interfaces. Premium experiences.</p>
      </div>
    </footer>
  );
}

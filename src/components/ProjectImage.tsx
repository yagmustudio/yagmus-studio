"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

export default function ProjectImage({
  src,
  alt,
  label,
  className,
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-[#c0c0c0]/45 bg-gradient-to-br from-[#ff4fd8]/34 via-[#0f0f14] to-[#c0c0c0]/28 p-4 text-center text-sm text-[#f8f8ff] shadow-[inset_0_0_24px_rgba(255,255,255,0.08),0_0_26px_rgba(255,79,216,0.2)] ${className ?? ""}`}
      >
        <div className="pointer-events-none absolute -left-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#ff4fd8]/45 blur-2xl" />
        <div className="pointer-events-none absolute right-4 top-3 h-12 w-12 rounded-full border border-[#c0c0c0]/40 bg-white/10" />
        <div className="pointer-events-none absolute bottom-4 left-6 h-2 w-2 rounded-full bg-[#f8f8ff]/70" />
        <div className="pointer-events-none absolute bottom-6 right-8 h-px w-12 bg-gradient-to-r from-transparent via-[#ff4fd8]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_12%,rgba(255,255,255,0.15)_40%,transparent_52%)]" />
        <span className="relative z-10 font-medium tracking-wide">{label}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1400}
      height={1400}
      className={`h-full w-full rounded-2xl object-cover ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}

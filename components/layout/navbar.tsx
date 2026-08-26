"use client";

import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Journey", href: "/journey" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Content", href: "/content" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--background)/80 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Adombire.dev
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-(--muted) transition-colors hover:text-(--foreground)">
              {link.name}
            </a>
          ))}
        </nav>

        <button className="rounded-lg bg-(--primary) px-4 py-2 text-white text-sm font-medium">
          Let&apos;s Work Together
        </button>
      </div>
    </header>
  );
}
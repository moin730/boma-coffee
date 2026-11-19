"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#dogs", label: "Dogs" },
  { href: "#visit", label: "Visit" },
];

export default function SiteNav({ instagram }: { instagram: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pink/85 shadow-[0_1px_0_rgb(28_63_18/0.15)] backdrop-blur-md"
          : "bg-pink"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 transition-all duration-300 md:px-10 lg:px-[80px] ${
          scrolled ? "py-3 md:py-4" : "py-5 md:py-7"
        }`}
      >
        <a
          href="#top"
          className="font-display whitespace-nowrap text-[22px] leading-none text-leaf md:text-[32px]"
        >
          Boma Coffee.
        </a>
        <ul className="flex items-center gap-3.5 text-[13px] font-medium sm:gap-5 sm:text-sm md:gap-10 md:text-base">
          {links.map((l) => (
            <li key={l.href} className={l.href === "#dogs" ? "hidden sm:block" : undefined}>
              <a href={l.href} className="group relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-leaf transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-forest/80 px-2.5 py-1.5 transition-colors hover:bg-forest hover:text-cream md:px-4 md:py-2"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

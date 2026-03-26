"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { NAV_LINKS, SITE } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Little Pillars Academy Logo"
              width={44}
              height={44}
            />
            <span className="text-purple font-heading text-lg sm:text-xl font-bold hidden sm:block">
              Little Pillars Academy
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.label ? null : link.label)
                    }
                    className="flex items-center gap-1 text-purple hover:text-gold px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-purple/5"
                  >
                    {link.label}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        dropdownOpen === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={() => setDropdownOpen(null)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:text-purple hover:bg-purple/5 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-purple hover:text-gold px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-purple/5"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-gold/25"
            >
              Register Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-purple p-2 rounded-lg hover:bg-purple/5 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

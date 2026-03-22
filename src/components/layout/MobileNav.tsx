"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { NAV_LINKS, SITE } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 lg:hidden shadow-2xl ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === link.label ? null : link.label
                      )
                    }
                    className="flex items-center justify-between w-full text-purple hover:text-gold hover:bg-purple/5 px-4 py-3 rounded-lg text-base font-medium transition-colors"
                  >
                    {link.label}
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedItem === link.label && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="text-gray-600 hover:text-purple hover:bg-purple/5 px-4 py-2.5 rounded-lg text-sm transition-colors"
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
                  onClick={onClose}
                  className="text-purple hover:text-gold hover:bg-purple/5 px-4 py-3 rounded-lg text-base font-medium transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <div className="mt-6 px-4">
            <a
              href={SITE.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold hover:bg-gold-dark text-white font-semibold px-5 py-3 rounded-full transition-all"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

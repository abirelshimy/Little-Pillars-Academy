"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface AccordionItemProps {
  title: string;
  content: string;
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-cream-dark rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-cream-light transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-purple text-sm sm:text-base">{title}</span>
        <HiChevronDown
          className={`text-gold shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        <div className="accordion-inner">
          <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

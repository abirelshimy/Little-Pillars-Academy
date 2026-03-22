"use client";

import { FaBaby, FaChild } from "react-icons/fa6";
import { babySupplyList, toddlerSupplyList, SupplyList } from "@/data/supplyLists";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

function SupplyCard({ list, icon }: { list: SupplyList; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center text-purple">
          {icon}
        </div>
        <h3 className="font-heading font-bold text-purple text-lg">{list.title}</h3>
      </div>

      <ul className="space-y-2 mb-6">
        {list.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span className="text-teal mt-0.5 shrink-0">&#9745;</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="border-t border-cream-dark pt-4">
        <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
          Reminders
        </p>
        <ul className="space-y-1.5">
          {list.reminders.map((r) => (
            <li key={r} className="text-xs text-gray-500 flex items-start gap-2">
              <span className="text-gold mt-0.5 shrink-0">&#9679;</span>
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SupplyListSection() {
  return (
    <section id="supply-list" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Supply Lists"
          subtitle="Everything your child needs for a great day at Little Pillars."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal>
            <SupplyCard list={babySupplyList} icon={<FaBaby size={20} />} />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <SupplyCard list={toddlerSupplyList} icon={<FaChild size={20} />} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

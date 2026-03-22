import Image from "next/image";
import { dailySchedule, categoryColors } from "@/data/schedule";
import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DailyScheduleSection() {
  return (
    <section id="schedule" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Daily Schedule"
          subtitle="A structured yet nurturing day designed to foster learning, play, and growth."
        />

        <div className="text-center mb-10">
          <span className="inline-flex items-center bg-purple/10 text-purple font-semibold text-sm px-5 py-2 rounded-full">
            {SITE.hours}
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Timeline */}
          <div className="lg:col-span-3 space-y-3">
            {dailySchedule.map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div
                  className={`flex items-stretch gap-4 rounded-xl border-l-4 px-5 py-3.5 ${categoryColors[block.category]}`}
                >
                  <div className="min-w-[110px] sm:min-w-[130px] text-xs sm:text-sm font-mono font-semibold whitespace-nowrap">
                    {block.time}
                  </div>
                  <div className="text-sm sm:text-base font-medium">{block.activity}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Image */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl sticky top-24">
              <Image
                src="/images/salah-time.png"
                alt="Children learning to pray together"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple/80 to-transparent p-6">
                <p className="text-white font-heading text-lg font-bold">
                  Daily Quran & Prayer
                </p>
                <p className="text-white/80 text-sm">
                  Building a love for worship from an early age
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

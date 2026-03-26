import Image from "next/image";
import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Our Academy"
          subtitle="A nurturing Islamic environment where every child's unique learning journey is celebrated."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Starting a preschool is an exciting time to engage, inspire, and feed your child&apos;s
                appetite for knowledge. At Little Pillars Academy, our goal is to provide a
                positive, safe, healthy Islamic environment where children can develop the skills they
                need to be ready for school.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                We believe in nurturing the whole child&mdash;mind, body, and spirit&mdash;through
                developmentally appropriate practices that respect each child&apos;s unique learning
                journey. We combine English language curriculum, Arabic, Islamic studies, and daily
                prayers.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-semibold">
                Ages {SITE.ages} &bull; {SITE.hours}
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Located at <strong>Masjid Jafar (Al-Rahmah Community Center)</strong> &mdash;
                serving North Fulton and surrounding areas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/arabic-lesson.jpeg"
                alt="Teacher engaging children in an Arabic lesson"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

import {
  FaBookQuran,
  FaHeartPulse,
  FaBook,
  FaFlask,
  FaCalculator,
  FaPalette,
  FaPeopleGroup,
} from "react-icons/fa6";
import { curriculumAreas, CurriculumArea } from "@/data/curriculum";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  quran: <FaBookQuran size={28} />,
  health: <FaHeartPulse size={28} />,
  literacy: <FaBook size={28} />,
  science: <FaFlask size={28} />,
  math: <FaCalculator size={28} />,
  arts: <FaPalette size={28} />,
  social: <FaPeopleGroup size={28} />,
};

const colorMap: Record<string, string> = {
  quran: "bg-purple/10 text-purple",
  health: "bg-red-50 text-red-500",
  literacy: "bg-teal/10 text-teal",
  science: "bg-blue-50 text-blue-500",
  math: "bg-gold/10 text-gold-dark",
  arts: "bg-pink-50 text-pink-500",
  social: "bg-green-50 text-green-600",
};

function CurriculumCard({ area, index }: { area: CurriculumArea; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
            colorMap[area.icon]
          }`}
        >
          {iconMap[area.icon]}
        </div>
        <h3 className="font-heading font-bold text-purple text-lg mb-2">{area.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{area.description}</p>
        <ul className="space-y-1.5">
          {area.highlights.slice(0, 3).map((h) => (
            <li key={h} className="text-xs text-gray-500 flex items-start gap-2">
              <span className="text-gold mt-0.5">&#9672;</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  );
}

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Curriculum"
          subtitle="A comprehensive, hands-on curriculum designed to inspire children while supporting key areas of development and learning."
        />
        {/* First row - 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {curriculumAreas.slice(0, 4).map((area, i) => (
            <CurriculumCard key={area.title} area={area} index={i} />
          ))}
        </div>
        {/* Second row - 3 cards centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {curriculumAreas.slice(4).map((area, i) => (
            <CurriculumCard key={area.title} area={area} index={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

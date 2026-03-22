import { FaNewspaper, FaClipboardList, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { SOCIAL } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const channels = [
  {
    icon: <FaNewspaper size={28} />,
    title: "Weekly Newsletters",
    desc: "Every week, teachers send a detailed newsletter to keep you informed about all classroom activities, studies, and upcoming events.",
    color: "bg-purple/10 text-purple",
  },
  {
    icon: <FaClipboardList size={28} />,
    title: "Daily Reports",
    desc: "Receive daily updates on your child's meals, mood, activities, learning progress, and rest times through detailed daily report forms.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: <FaWhatsapp size={28} />,
    title: "WhatsApp Communication",
    desc: "Stay connected with teachers and directors through WhatsApp for quick questions, updates, and important announcements.",
    color: "bg-green-50 text-green-600",
  },
];

export default function ParentCommSection() {
  return (
    <section id="parent-communication" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Parent Communication"
          subtitle="A strong partnership with families is key to your child's success. We offer multiple ways to stay connected."
        />

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {channels.map((ch, i) => (
            <ScrollReveal key={ch.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark text-center h-full">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${ch.color}`}>
                  {ch.icon}
                </div>
                <h3 className="font-heading font-bold text-purple text-base mb-2">{ch.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{ch.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Follow us on social media</p>
            <div className="flex justify-center gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

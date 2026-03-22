import { FaAppleWhole, FaTriangleExclamation, FaDroplet, FaHandsHoldingChild } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cards = [
  {
    icon: <FaAppleWhole size={24} />,
    title: "Home-Packed Meals",
    desc: "Children bring their own lunch and snacks each day. We encourage balanced, nutritious options. Please label all containers clearly.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <FaTriangleExclamation size={24} />,
    title: "Nut-Free School",
    desc: "We are a nut-free school to protect children with severe allergies. Please inform us of any food allergies or dietary restrictions.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: <FaHandsHoldingChild size={24} />,
    title: "Supportive Mealtimes",
    desc: "Teachers supervise and encourage healthy eating habits. We guide children to open containers and clean up, building independence.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: <FaDroplet size={24} />,
    title: "Hydration",
    desc: "Children are encouraged to drink water throughout the day. Please provide a labeled water bottle daily.",
    color: "bg-blue-50 text-blue-500",
  },
];

export default function NutritionSection() {
  return (
    <section id="nutrition" className="py-20 lg:py-28 bg-cream-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nutrition & Meals"
          subtitle="Fueling healthy bodies and minds by partnering with parents to promote lifelong healthy habits."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark hover:shadow-md transition-shadow h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-purple text-base mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

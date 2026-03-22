import { FaShieldHalved } from "react-icons/fa6";
import { healthPolicies } from "@/data/healthPolicies";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AccordionItem from "@/components/ui/AccordionItem";

export default function HealthSafetySection() {
  return (
    <section id="policies" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Health & Safety Policies"
          subtitle="Your child's safety is our top priority. We maintain rigorous protocols to create a clean, secure, and nurturing space."
        />

        <ScrollReveal>
          <div className="bg-white rounded-2xl border border-cream-dark shadow-sm p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <FaShieldHalved className="text-teal" size={20} />
              </div>
              <h3 className="font-heading font-bold text-purple text-lg">Our Commitment</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span>
                Controlled access & secure entry points
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span>
                Staff certified in First Aid & CPR
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span>
                Daily cleaning & sanitization schedules
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span>
                Transparent parent communication
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h3 className="font-heading font-bold text-purple text-lg mb-4">
            Illness Policies
          </h3>
          <p className="text-gray-500 text-sm mb-5">
            Parents are expected to pick up their child within 30 minutes of being notified of
            illness symptoms. Click each policy below for details.
          </p>
          <div className="space-y-2">
            {healthPolicies.map((policy) => (
              <AccordionItem key={policy.title} title={policy.title} content={policy.content} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

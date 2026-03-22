import { FaCalendarDays } from "react-icons/fa6";
import { academicCalendar, eventTypeStyles } from "@/data/calendar";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const typeLabels: Record<string, string> = {
  start: "School Starts",
  holiday: "Holiday",
  break: "Break",
  event: "Event",
  end: "School Ends",
};

export default function CalendarSection() {
  return (
    <section id="calendar" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="2025/2026 Calendar"
          subtitle="Key dates and events for the upcoming academic year."
        />

        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-sm border border-cream-dark overflow-hidden">
            <div className="bg-purple p-5 flex items-center gap-3">
              <FaCalendarDays className="text-gold" size={22} />
              <h3 className="font-heading font-bold text-white text-lg">
                Academic Year 2025-2026
              </h3>
            </div>

            <div className="divide-y divide-cream-dark">
              {academicCalendar.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-cream-light/50 transition-colors"
                >
                  <div className="min-w-[130px] sm:min-w-[180px]">
                    <span className="text-sm font-semibold text-purple">{event.date}</span>
                  </div>
                  <div className="flex-1 text-sm text-gray-700">{event.event}</div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      eventTypeStyles[event.type]
                    }`}
                  >
                    {typeLabels[event.type]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

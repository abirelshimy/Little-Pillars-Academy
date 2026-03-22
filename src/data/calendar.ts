export interface CalendarEvent {
  date: string;
  event: string;
  type: "start" | "holiday" | "break" | "event" | "end";
}

export const academicCalendar: CalendarEvent[] = [
  { date: "August 18", event: "First Day of School", type: "start" },
  { date: "September 1", event: "Labor Day - No School", type: "holiday" },
  { date: "October 6-10", event: "Fall Break - No School", type: "break" },
  { date: "November 24-28", event: "Thanksgiving Break - No School", type: "break" },
  { date: "December 22 - January 2", event: "Winter Break - No School", type: "break" },
  { date: "January 5", event: "First Day of Second Semester", type: "start" },
  { date: "January 19", event: "Martin Luther King Jr. Day - No School", type: "holiday" },
  { date: "March 13", event: "Parent-Teacher Conference", type: "event" },
  { date: "March 20", event: "Eid ul-Fitr - No School", type: "holiday" },
  { date: "April 6-10", event: "Spring Break - No School", type: "break" },
  { date: "May 21", event: "Last Day of School", type: "end" },
];

export const eventTypeStyles: Record<CalendarEvent["type"], string> = {
  start: "bg-teal/10 border-teal text-teal-dark",
  holiday: "bg-purple/10 border-purple text-purple",
  break: "bg-gold/10 border-gold text-gold-dark",
  event: "bg-pink-50 border-pink-400 text-pink-700",
  end: "bg-teal/10 border-teal text-teal-dark",
};

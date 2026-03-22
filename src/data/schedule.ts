export interface ScheduleBlock {
  time: string;
  activity: string;
  category: "arrival" | "quran" | "academic" | "creative" | "outdoor" | "meal" | "rest" | "dismissal";
}

export const dailySchedule: ScheduleBlock[] = [
  { time: "8:00 - 8:45 AM", activity: "Arrival, Breakfast & Free Play", category: "arrival" },
  { time: "8:45 - 9:15 AM", activity: "Quran Hifz Session", category: "quran" },
  { time: "9:15 - 9:45 AM", activity: "Circle Time (English Studies)", category: "academic" },
  { time: "9:45 - 10:00 AM", activity: "Small Group Activities", category: "creative" },
  { time: "10:00 - 10:45 AM", activity: "Outdoor Adventures / Technology Time", category: "outdoor" },
  { time: "10:45 - 11:15 AM", activity: "Circle Time (Arabic & Islamic Studies)", category: "quran" },
  { time: "11:15 - 11:45 AM", activity: "Lunch Time", category: "meal" },
  { time: "12:00 - 12:30 PM", activity: "Story Time", category: "academic" },
  { time: "12:30 - 1:30 PM", activity: "Nap / Quiet Time", category: "rest" },
  { time: "1:30 - 2:00 PM", activity: "Afternoon Snack", category: "meal" },
  { time: "2:00 - 2:30 PM", activity: "Free Play & Dismissal", category: "dismissal" },
];

export const categoryColors: Record<ScheduleBlock["category"], string> = {
  arrival: "bg-gold/20 border-gold text-gold-dark",
  quran: "bg-purple/10 border-purple text-purple",
  academic: "bg-teal/10 border-teal text-teal-dark",
  creative: "bg-pink-100 border-pink-400 text-pink-700",
  outdoor: "bg-green-100 border-green-500 text-green-700",
  meal: "bg-orange-100 border-orange-400 text-orange-700",
  rest: "bg-blue-100 border-blue-400 text-blue-700",
  dismissal: "bg-gold/20 border-gold text-gold-dark",
};

export const SITE = {
  name: "Jafar Little Pillars Academy",
  tagline: "Where Little Ones Grow in a Nurturing, Faith-Based Environment",
  description:
    "Jafar Little Pillars Academy is an Islamic preschool in Johns Creek, GA offering full-day childcare for children ages 9 months to 4 years in a nurturing, faith-based environment.",
  ages: "9 months - 4 years",
  hours: "Monday - Friday, 8:00 AM - 2:30 PM",
  registrationUrl: "https://form.jotform.com/251866814979073",
  masjidUrl: "https://www.masjidjafaratl.com/",
} as const;

export const CONTACT = {
  address: "11005 Jones Bridge Rd #112, Johns Creek, GA 30022",
  mapQuery: "Masjid+Jafar+11005+Jones+Bridge+Rd+Johns+Creek+GA+30022",
  phones: [
    { name: "Sister Dalal Bennawy", number: "(678) 779-1975" },
    { name: "Sister Manal El Shimy", number: "(678) 662-8066" },
  ],
  email: "melshimy1@gmail.com",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/masjidjafar/",
  instagram: "https://www.instagram.com/masjid.jafar/",
} as const;

export interface Founder {
  name: string;
  title: string;
  phone?: string;
  email?: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: "Naeem Mulla",
    title: "Operations & Compliance Director",
  },
  {
    name: "Dalal Bennawy",
    title: "Outreach Director",
    phone: "(678) 779-1975",
  },
  {
    name: "Manal El Shimy",
    title: "Program Director",
    phone: "(678) 662-8066",
    email: "melshimy1@gmail.com",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Calendar", href: "#calendar" },
  {
    label: "Parent Resources",
    href: "/policies",
    children: [
      { label: "Daily Schedule", href: "/schedule" },
      { label: "Nutrition & Meals", href: "/nutrition" },
      { label: "Parent Communication", href: "/parent-communication" },
      { label: "Policies", href: "/policies" },
      { label: "Supply List", href: "/supply-list" },
    ],
  },
  { label: "Contact", href: "#contact" },
] as const;

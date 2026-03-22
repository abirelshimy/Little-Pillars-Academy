export interface CurriculumArea {
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}

export const curriculumAreas: CurriculumArea[] = [
  {
    title: "Islamic Studies & Quran",
    icon: "quran",
    description:
      "Building a love for Allah and the Prophet through age-appropriate lessons, daily duas, and Quran memorization.",
    highlights: [
      "Daily Quran Hifz sessions",
      "Arabic alphabet recognition",
      "Islamic manners (Adab)",
      "Stories of the Prophets",
      "Short surahs from Juz Amma",
    ],
  },
  {
    title: "Physical & Health Development",
    icon: "health",
    description:
      "Building strong bodies and healthy habits through active play, motor skill development, and daily routines.",
    highlights: [
      "Gross motor: balance, coordination",
      "Fine motor: writing, scissors, buttons",
      "Body awareness & five senses",
      "Health safety practices",
      "Personal care routines",
    ],
  },
  {
    title: "Language & Literacy",
    icon: "literacy",
    description:
      "Building vocabulary, phonological awareness, and reading foundations through engaging language activities.",
    highlights: [
      "Comprehension & speaking skills",
      "Vocabulary expansion",
      "Phonological awareness & rhyming",
      "Letter names and sounds",
      "Early writing & reading skills",
    ],
  },
  {
    title: "Science & Technology",
    icon: "science",
    description:
      "Exploring the natural world through observation, classification, prediction, and hands-on experiments.",
    highlights: [
      "Observing animals & nature",
      "Weather & environment changes",
      "Day and night concepts",
      "Living things and their needs",
      "Tools and technology exploration",
    ],
  },
  {
    title: "Mathematics",
    icon: "math",
    description:
      "Developing number concepts, patterns, measurement skills, and geometric understanding through play.",
    highlights: [
      "Counting to 20 with correspondence",
      "Measuring & comparing",
      "Pattern recognition & creation",
      "Shape identification",
      "Sorting & classifying objects",
    ],
  },
  {
    title: "Creative Arts",
    icon: "arts",
    description:
      "Expressing creativity through visual arts, music, movement, and dramatic play.",
    highlights: [
      "Exploring art materials & colors",
      "Playing simple instruments",
      "Singing & creative movement",
      "Drawing, painting, & crafts",
      "Imaginative role play",
    ],
  },
  {
    title: "Social & Emotional Development",
    icon: "social",
    description:
      "Developing crucial social-emotional skills including empathy, cooperation, and self-regulation.",
    highlights: [
      "Recognizing & labeling feelings",
      "Sharing & taking turns",
      "Following rules & routines",
      "Building positive relationships",
      "Self-confidence & independence",
    ],
  },
];

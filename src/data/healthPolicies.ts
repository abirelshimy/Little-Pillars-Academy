export interface HealthPolicy {
  title: string;
  content: string;
}

export const healthPolicies: HealthPolicy[] = [
  {
    title: "Fever",
    content:
      "A child must be fever-free, without the use of fever-reducing medicine, for 24 hours before returning to school. Parents are expected to pick up their child within 30 minutes of being notified.",
  },
  {
    title: "Vomiting",
    content:
      "A child will be sent home if they vomit. They may return the following morning if they have not vomited in the previous 8 hours. If blood is present, immediate medical attention is necessary.",
  },
  {
    title: "Cough & Cold",
    content:
      "A child may be sent home with symptoms including nasal congestion, chills, sore throat, red/watery eyes, sneezing, breathing difficulty, fever, or profuse yellow-green nasal discharge.",
  },
  {
    title: "Rash",
    content:
      "A child with an undiagnosed rash will be sent home if the rash is spreading, widespread, causes discomfort, contains blisters, or persists for more than 2 days. A healthcare provider's note is required for return.",
  },
  {
    title: "Pink Eye",
    content:
      "A child will be sent home if either eye has cloudy or colored discharge. They may return after 24 hours on antibiotics, or with a doctor's note stating the condition is non-contagious.",
  },
  {
    title: "Diarrhea",
    content:
      "A child will be sent home for diarrhea occurring 2 or more times per day. They may return when diarrhea has not occurred in the previous 8 hours. If blood is present, seek immediate medical attention.",
  },
  {
    title: "Contagious Illnesses",
    content:
      "Strep throat: return after 24 hours on antibiotics. Chicken pox: return after 7 days or when lesions are crusted. Lice: return after treatment when nits are gone. Impetigo: return after 24 hours of treatment.",
  },
  {
    title: "Secure Environment",
    content:
      "Our facility features controlled access, secure entry points, and continuous supervision. Staff are certified in first aid and CPR, and regularly trained on emergency procedures.",
  },
];

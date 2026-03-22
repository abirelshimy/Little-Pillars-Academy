export interface SupplyList {
  title: string;
  items: string[];
  reminders: string[];
}

export const babySupplyList: SupplyList = {
  title: "Baby Supply List",
  items: [
    "Prepared bottles",
    "Pacifiers",
    "Baby food and cereal (when age appropriate)",
    "Diapers",
    "Wipes",
    "Diaper ointment",
    "Extra clothes",
    "Extra formula (for emergency use only)",
    "Diaper bag (large enough for bottles & clothes)",
  ],
  reminders: [
    "Please label all items with your child's first and last name.",
    "All creams and sunscreens require a completed medical authorization form and must be in their original containers.",
    "All prescriptions must be in original containers with patient's name, dosage, and prescribed time.",
    "Over-the-counter medications (Tylenol, Motrin, etc.) require a permission form from your doctor.",
  ],
};

export const toddlerSupplyList: SupplyList = {
  title: "Toddler Supply List",
  items: [
    "Complete change of clothes (head to toe)",
    "Sheet and blanket (send Monday, return Friday)",
    "Two healthy snacks and a healthy lunch",
    "Serving of milk with lunch",
    "Labeled water bottle",
  ],
  reminders: [
    "Label all personal belongings with your child's name.",
    "Check clothes for correct size and season throughout the year.",
    "No grapes or popcorn - they are choking hazards.",
    "No pillows or stuffed animals from home.",
    "No toys from home (except Show & Tell on Fridays).",
  ],
};

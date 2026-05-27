import { getGalleryImage, media } from "../utils/localMedia";

export const brand = {
  name: "Murthy Atelier's by 9th",
  signature: "Heirloom Jewels Crafted to Endure",
  gold: "#FAEED1",
  red: "#A12230",
  fontReference: "Halimum",
  address: "South Mada Street, Mylapore, Chennai",
  email: "hello@murthyatelier.com",
  phone: "+91 98410 24790",
  instagram: "murthyatelier",
  whatsappLink: "https://wa.me/919841024790?text=Hello%20Murthy%20Atelier's%20by%209th%2C%20I%20would%20love%20to%20know%20more%20about%20your%20jewelry.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Heritage", href: "/heritage" },
  { label: "Journal", href: "/journal" },
  { label: "Consultation", href: "/consultation" },
];

export const heroContent = {
  eyebrow: "Website Flow",
  title: "Heirloom Jewels for Generations to Come",
  subtitle:
    "Crafted with memory, intention, and timeless artistry, Murthy Atelier's by 9th creates jewels meant to be worn, loved, and passed on.",
  primaryCta: { label: "Explore Collections", href: "/collections" },
  secondaryCta: { label: "Book a Consultation", href: "/consultation" },
  highlight: "Lineage and proficiency at crafting, translated into a quiet cinematic experience.",
  video: "/video/bannerVideo.mp4",
  image: getGalleryImage(0),
  panelImage: media.brandLogo,
};

export const founderStory = {
  eyebrow: "A Legacy Continued",
  founder: "Vidya Shankaran",
  title: "Founder, Murthy Atelier's by 9th",
  blessingTamil: "வாழ்க வளமுடன்",
  blessingEnglish: "May you live and flourish.",
  body: [
    "This piece carries a name: Shanthi Shankar, jeweller's daughter, a woman of warmth and grace who was still becoming when we lost her.",
    "She was the daughter of D.K. Murthy, who spent a lifetime building something real in the heart of Mylapore: the trust of families, the integrity of craft, and beauty made to outlast the hands that made it.",
    "Murthy Atelier's by 9th is that unfinished sentence, continued. We carry that goodwill forward into every piece with gratitude for everything they built and love for where it is going.",
    "We are so glad this found its way to you. Wear it with intention. Keep it long. Pass it on.",
  ],
  image: media.brandReference,
  sketch: getGalleryImage(5),
};

export const philosophy = [
  {
    title: "Craftsmanship",
    copy:
      "Handcrafted with attention to detail, preserving traditional artistry while embracing contemporary elegance.",
  },
  {
    title: "Meaning",
    copy: "Every jewel carries emotion, memory, and personal significance beyond ornamentation.",
  },
  {
    title: "Heirloom Value",
    copy: "Designed not for seasons, but for generations and the stories they gather.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Concept & Story",
    text: "Every piece begins with a family memory, ceremonial need, or personal moodboard that defines its emotional center.",
  },
  {
    step: "02",
    title: "Stone Selection",
    text: "Rubies, emeralds, diamonds, and pearls are chosen for warmth, balance, and how they sit against the gold.",
  },
  {
    step: "03",
    title: "Handcrafting",
    text: "Temple geometry, kasu rhythm, granulation, and setting work are shaped slowly by bench-led discipline.",
  },
  {
    step: "04",
    title: "Finishing & Detailing",
    text: "Edges are softened, surfaces are polished, and contrast is tuned until the jewel feels complete in portrait light.",
  },
  {
    step: "05",
    title: "Passed Into Your Hands",
    text: "The final experience is intimate and guided, with care advice, styling notes, and space for the piece to become yours.",
  },
];

export const bespokeContent = {
  eyebrow: "Create Something Personal",
  title: "Legacy pieces shaped around sentiment, silk, and ceremony.",
  description:
    "Whether reimagining inherited jewels or creating a new legacy piece, we work closely with clients to design jewelry rooted in individuality and emotional value.",
  primaryCta: { label: "Begin Your Consultation", href: "/consultation" },
  secondaryCta: { label: "Share Your Story", href: "mailto:hello@murthyatelier.com?subject=Share%20Your%20Story" },
  image: getGalleryImage(2),
};

export const journalFeatures = [
  {
    title: "The Story of Heirloom Jewelry",
    excerpt: "Why jewels intended for memory age more beautifully than pieces made for trend cycles.",
    image: getGalleryImage(4),
  },
  {
    title: "Mylapore & Craft Heritage",
    excerpt: "How street, sanctum, and silk have shaped the visual language of South Indian ornament.",
    image: getGalleryImage(6),
  },
  {
    title: "Styling Antique Jewelry",
    excerpt: "Layering temple pieces with restraint so the jewel remains the point of focus.",
    image: getGalleryImage(1),
  },
  {
    title: "Caring for Precious Pieces",
    excerpt: "Warm storage, gentle cleaning, and ritual-minded care that keeps heirlooms luminous.",
    image: getGalleryImage(3),
  },
];

export const legacyStories = [
  {
    quote:
      "My daughter wore my wedding bangles redesigned by Murthy Atelier's by 9th, and somehow both generations felt present at once.",
    byline: "Family redesign commission",
  },
  {
    quote:
      "A choker that reminded us of temple lamps and old photographs. It felt less like shopping and more like recovering a memory.",
    byline: "Bride from Chennai",
  },
  {
    quote:
      "The team understood sentiment before silhouette. That is why the piece still feels deeply ours.",
    byline: "Custom heirloom revival",
  },
];

export const faqs = [
  {
    question: "Do you offer custom-made jewelry?",
    answer:
      "Yes. Consultations can begin from a story, sketch, heirloom reference, or ceremonial need, and the final direction is developed privately with the client.",
  },
  {
    question: "Can heirloom jewelry be redesigned?",
    answer:
      "Absolutely. Redesign work preserves sentiment first, then reshapes the jewel into a form that can be worn and cherished again.",
  },
  {
    question: "How long does a bespoke piece take?",
    answer:
      "Lead times depend on complexity, stone sourcing, and finishing. Most bespoke commissions are planned across several guided stages rather than rushed.",
  },
  {
    question: "Do you work by appointment only?",
    answer:
      "Private consultations are encouraged so conversations around family jewelry, ceremonies, and design direction can happen with care and focus.",
  },
  {
    question: "How should heirloom jewelry be cared for?",
    answer:
      "Store pieces individually, avoid harsh chemicals, and schedule periodic cleaning or clasp checks to preserve both brilliance and structure.",
  },
  {
    question: "Can pieces be made in different finishes or stones?",
    answer:
      "Yes. Many designs can be adapted with alternate stones, finishes, or proportion adjustments while maintaining the original story and silhouette.",
  },
];

export const consultationSteps = [
  "Bring a jewel you want reimagined, or a story you want translated into form.",
  "Review silhouettes, motif references, and ceremonial context with the atelier.",
  "Refine scale, stones, and finish until the piece feels intimate and complete.",
];

export const finalMessage = {
  title: "Some things are too meaningful to be trend-driven.",
  lines: ["Jewelry should hold memory.", "It should gather stories.", "It should stay."],
  image: getGalleryImage(5),
};

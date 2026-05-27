import { brandPanels, getImageByIndex } from "../utils/localMedia";

export const heroSlides = [
  {
    id: "bridal-opulence",
    title: "Muhurtham Opulence, Crafted for Generations",
    subtitle: "Luxury bridal gold with the soul of Tamil temple artistry.",
    image: getImageByIndex(0),
    tag: "Bridal Jewelry",
  },
  {
    id: "temple-icons",
    title: "Temple Icons in Sculptural Gold",
    subtitle: "Sanctum-inspired silhouettes with goddess motifs and kasu detail.",
    image: getImageByIndex(1),
    tag: "Temple Jewelry",
  },
  {
    id: "diamond-nocturne",
    title: "Diamond Light for Modern Royalty",
    subtitle: "High-brilliance pieces tempered with warm, editorial gold styling.",
    image: getImageByIndex(2),
    tag: "Diamond Collection",
  },
  {
    id: "handmade-legacy",
    title: "Handcrafted Gold Work, Bench-Finished by Artisans",
    subtitle: "From drawn wire to final polish, every detail carries atelier discipline.",
    image: getImageByIndex(3),
    tag: "Craftsmanship",
  },
  {
    id: "silk-and-gold",
    title: "Jewels that Move with Silk, Ritual, and Light",
    subtitle: "Editorial luxury rooted in ceremony, drape, and heirloom memory.",
    image: getImageByIndex(4),
    tag: "Heritage House",
  },
];

export const heritageStory = {
  title: "A Lineage of Goldsmith Memory",
  description:
    "Murthy Atelier's by 9th imagines the Tamil jewelry house as both atelier and archive. Its visual language of kasu forms, ruby settings, and bridal layering is shaped by temple detail, celebratory color, and the warmth of ceremonial dressing.",
  secondary:
    "Every surface is considered for how it catches silk reflections, oil-lamp warmth, and movement in portraiture. The result is expressive heritage styling with a softer editorial finish.",
  image: getImageByIndex(5),
};

export const masonryCollection = [
  {
    title: "Bridal Sanctum",
    caption: "Silk tones, layered gold, and portrait-level softness.",
    image: getImageByIndex(0),
  },
  {
    title: "Stone & Kasu",
    caption: "Temple architecture as a blueprint for ornament rhythm.",
    image: getImageByIndex(1),
  },
  {
    title: "Bold & Colorful",
    caption: "A graphic brand panel that anchors the new palette language.",
    image: brandPanels.colorful,
  },
  {
    title: "Neckline Study",
    caption: "Editorial close-up detail with maroon and gold contrast.",
    image: getImageByIndex(2),
  },
  {
    title: "Keepin' It Rooted",
    caption: "Typography-led storytelling in the primary maroon tone.",
    image: brandPanels.rooted,
  },
  {
    title: "Heirloom Layering",
    caption: "A celebratory composition built around ruby and pearl rhythm.",
    image: getImageByIndex(3),
  },
];

export const storySlides = [
  {
    title: "The House Begins",
    text: "Born from a love of wedding gold and expressive color, the brand begins with pieces that feel rooted, feminine, and instantly ceremonial.",
    image: getImageByIndex(1),
  },
  {
    title: "Artisan Heritage",
    text: "The visual direction draws from the patience of hand-finishing, close-up stone work, and the intimacy of jewelry seen at portrait distance.",
    image: getImageByIndex(2),
  },
  {
    title: "Temple Inspirations",
    text: "Coin motifs, ruby petals, and necklace arcs echo the richness of temple adornment without losing softness.",
    image: getImageByIndex(6),
  },
  {
    title: "Traditional Methods",
    text: "Sketching, stone placement, and finish balancing remain central to how each composition feels crafted rather than mass-produced.",
    image: brandPanels.colorful,
  },
  {
    title: "Modern Evolution",
    text: "Today the house blends heritage jewelry language with airy editorial layouts and a more graceful feminine palette.",
    image: brandPanels.rooted,
  },
];

export const certifications = [
  { title: "BIS Hallmark", copy: "Verified purity with trusted hallmarking standards." },
  { title: "Certified Diamonds", copy: "Sourced stones assessed for brilliance and integrity." },
  { title: "Lifetime Service", copy: "Care, cleaning, and repair support beyond the first purchase." },
  { title: "Authentic Craftsmanship", copy: "Bench-led finishing and heritage-sensitive design." },
  { title: "Secure Purchase", copy: "Protected checkout experience with concierge assistance." },
];

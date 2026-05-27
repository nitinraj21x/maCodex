import { getGalleryImage } from "../utils/localMedia";

export const collections = [
  {
    id: "bridal-heirlooms",
    name: "Bridal Heirlooms",
    story:
      "Layered necklaces, vankis, and jhumkas designed for muhurtham light, silk richness, and the emotional weight of family ceremony.",
    mood: "For wedding mornings, ancestral gold, and measured grandeur.",
    image: getGalleryImage(0),
    leadPieces: ["shanthi-arch-haram", "ananthi-ruby-vanki"],
  },
  {
    id: "temple-inspired",
    name: "Temple-Inspired Pieces",
    story:
      "Forms informed by shrine doors, lotus borders, peacock reliefs, and the quiet geometry of Tamil sanctum ornament.",
    mood: "Architectural, sculptural, and deeply rooted.",
    image: getGalleryImage(1),
    leadPieces: ["mylai-gopuram-choker", "pavai-kemp-jhumkas"],
  },
  {
    id: "everyday-classics",
    name: "Everyday Classics",
    story:
      "Softer collars, diamond accents, and versatile silhouettes that still carry the dignity of heirloom thinking.",
    mood: "Refined enough for daily rituals, enduring enough for repetition.",
    image: getGalleryImage(2),
    leadPieces: ["veena-diamond-collar", "ponvizhi-pearl-studs"],
  },
  {
    id: "custom-commissions",
    name: "Custom Commissions",
    story:
      "Client-led pieces where memory, material, and wearability are shaped together from the very first conversation.",
    mood: "Personal, collaborative, and made with restraint.",
    image: getGalleryImage(3),
    leadPieces: ["nilam-revival-bangles", "amudham-coin-long-haram"],
  },
  {
    id: "heritage-revivals",
    name: "Heritage Revivals",
    story:
      "Designs that revive antique language without becoming costume, preserving cultural richness while softening the finish for modern wear.",
    mood: "Museum-like depth with present-day intimacy.",
    image: getGalleryImage(4),
    leadPieces: ["mylai-gopuram-choker", "nilam-revival-bangles"],
  },
];

export const pieces = [
  {
    slug: "shanthi-arch-haram",
    name: "Shanthi Arch Haram",
    collectionId: "bridal-heirlooms",
    category: "Bridal heirloom necklace",
    tagline: "A long ceremonial haram shaped by arch motifs, ruby rhythm, and softly aged gold.",
    image: getGalleryImage(0),
    gallery: [getGalleryImage(0), getGalleryImage(5), getGalleryImage(6)],
    story:
      "Designed for wedding mornings, this layered haram borrows from temple archways and the calm symmetry of old bridal photographs. The silhouette sits low and luminous, leaving space for silk, movement, and inherited sentiment.",
    craftsmanship:
      "Its kasu links are balanced against hand-set ruby forms and pearl edging, with the finish kept warm rather than overly polished so the piece feels lived-in from the first wearing.",
    details: [
      { label: "Materials", value: "22K gold, rubies, seed pearls" },
      { label: "Motif", value: "Temple arch, kasu rhythm, lotus edging" },
      { label: "Finish", value: "Soft antique glow with hand-burnished edges" },
      { label: "Occasion", value: "Muhurtham, reception layering, family portraits" },
    ],
    chapters: [
      {
        title: "A Story Before Ornament",
        text: "The design begins not with spectacle, but with the memory of bridal jewels that seemed to hold an entire household's blessings within them.",
      },
      {
        title: "Bench-Led Construction",
        text: "Each link is placed for drape and rhythm, allowing the piece to move with the wearer instead of sitting rigidly against the body.",
      },
      {
        title: "Know More",
        text: "The closer you look, the more the finish reveals itself: softened granulation, measured ruby placement, and an ease that only careful handwork can create.",
      },
    ],
    related: ["ananthi-ruby-vanki", "amudham-coin-long-haram"],
  },
  {
    slug: "ananthi-ruby-vanki",
    name: "Ananthi Ruby Vanki",
    collectionId: "bridal-heirlooms",
    category: "Ceremonial armlet",
    tagline: "A sculpted vanki that frames the arm with ruby petals and temple poise.",
    image: getGalleryImage(6),
    gallery: [getGalleryImage(6), getGalleryImage(1), getGalleryImage(4)],
    story:
      "This vanki is shaped to feel protective rather than ornamental alone, drawing from shrine geometry and the grace of bridal armlets passed through South Indian families.",
    craftsmanship:
      "The inner curve is tuned for comfort, while the face carries layered ruby forms that catch portrait light without overpowering the garment.",
    details: [
      { label: "Materials", value: "22K gold, cabochon rubies, pearls" },
      { label: "Motif", value: "Chevron vanki spine, floral ruby clusters" },
      { label: "Finish", value: "High-detail hand setting with softened polish" },
      { label: "Occasion", value: "Bridal dressing, temple ceremonies, portraits" },
    ],
    chapters: [
      {
        title: "Made for Gesture",
        text: "The vanki was composed to read beautifully in movement, especially during gestures that matter: blessings, embraces, and ritual exchange.",
      },
      {
        title: "Ruby Balance",
        text: "Ruby placement is intentionally rhythmic, bringing warmth and cultural familiarity without reducing the piece to a simple color statement.",
      },
      {
        title: "Know More",
        text: "Its elegance emerges in the details: softened points, pearl punctuation, and the confident stillness of a silhouette that needs no excess.",
      },
    ],
    related: ["shanthi-arch-haram", "pavai-kemp-jhumkas"],
  },
  {
    slug: "mylai-gopuram-choker",
    name: "Mylai Gopuram Choker",
    collectionId: "temple-inspired",
    category: "Temple-inspired choker",
    tagline: "A close-neck piece whose stepped form recalls gopuram tiers and carved borders.",
    image: getGalleryImage(1),
    gallery: [getGalleryImage(1), getGalleryImage(2), getGalleryImage(5)],
    story:
      "Named for Mylapore, this choker translates architectural memory into wearable proportion. It sits with quiet confidence, allowing the neckline to feel ceremonial without becoming heavy.",
    craftsmanship:
      "The stepped framework is hand-finished to preserve edge definition, while the stone settings maintain warmth and texture rather than mirror-like perfection.",
    details: [
      { label: "Materials", value: "22K gold, kemp stones, pearls" },
      { label: "Motif", value: "Gopuram steps, granulated borders, floral center" },
      { label: "Finish", value: "Architectural antique finish" },
      { label: "Occasion", value: "Temple visits, bridal layering, heritage dressing" },
    ],
    chapters: [
      {
        title: "Architecture as Memory",
        text: "Its stepped profile remembers shrine elevations and carved thresholds, then softens them into a silhouette that sits naturally against the collarbone.",
      },
      {
        title: "Relief and Restraint",
        text: "Depth is built through proportion and line instead of volume alone, keeping the piece collectible yet remarkably wearable.",
      },
      {
        title: "Know More",
        text: "From a distance it appears bold. Up close it becomes meditative, revealing measured spacing, hand-set stone borders, and a finish that feels almost archival.",
      },
    ],
    related: ["pavai-kemp-jhumkas", "nilam-revival-bangles"],
  },
  {
    slug: "pavai-kemp-jhumkas",
    name: "Pavai Kemp Jhumkas",
    collectionId: "temple-inspired",
    category: "Statement earrings",
    tagline: "Bell-shaped jhumkas with kemp warmth, pearl fringe, and portrait-friendly movement.",
    image: getGalleryImage(4),
    gallery: [getGalleryImage(4), getGalleryImage(0), getGalleryImage(3)],
    story:
      "These jhumkas are built for movement: small turns, laughter, and the shifting light of an evening function. Their shape references older temple earrings but keeps the line fluid and balanced.",
    craftsmanship:
      "Pearl fringe softens the bell edge while the kemp settings create visual density without turning the form rigid.",
    details: [
      { label: "Materials", value: "22K gold, kemp stones, freshwater pearls" },
      { label: "Motif", value: "Bell dome, petal setting, pearl fringe" },
      { label: "Finish", value: "Polished gold with antique shadowing" },
      { label: "Occasion", value: "Festive wear, bridal side looks, collector styling" },
    ],
    chapters: [
      {
        title: "Composed for Motion",
        text: "The dome volume is tuned so the earrings feel alive in motion rather than heavy, giving them a sense of ceremony without stiffness.",
      },
      {
        title: "Pearls as Light",
        text: "The pearls do not simply trim the form; they catch and diffuse light, making the entire silhouette feel softer and more dimensional.",
      },
      {
        title: "Know More",
        text: "Notice the inner stone rhythm and the way every curve feels resolved. The piece rewards patience, which is exactly how it was made.",
      },
    ],
    related: ["mylai-gopuram-choker", "ananthi-ruby-vanki"],
  },
  {
    slug: "veena-diamond-collar",
    name: "Veena Diamond Collar",
    collectionId: "everyday-classics",
    category: "Diamond collar",
    tagline: "A refined diamond collar with warm gold structure and graceful evening presence.",
    image: getGalleryImage(3),
    gallery: [getGalleryImage(3), getGalleryImage(2), getGalleryImage(6)],
    story:
      "The Veena collar is designed for women who want luminosity without noise. It holds the precision of a formal diamond piece but remains warm, soft, and deeply wearable.",
    craftsmanship:
      "The line is tightened for clean framing while the gold keeps a mellow undertone, preventing the brilliance from feeling cold or detached.",
    details: [
      { label: "Materials", value: "18K gold, diamonds" },
      { label: "Motif", value: "Ribboned collar line with softened symmetry" },
      { label: "Finish", value: "Fine polish with warm gold undertone" },
      { label: "Occasion", value: "Reception wear, intimate celebrations, gifting" },
    ],
    chapters: [
      {
        title: "Quiet Brilliance",
        text: "Its beauty lies in discipline: each element is pared down until only proportion, light, and wearability remain.",
      },
      {
        title: "Editorial Ease",
        text: "Though crafted as a special piece, the collar sits cleanly enough to move across occasions and styling contexts.",
      },
      {
        title: "Know More",
        text: "The closer you study it, the clearer the balance becomes between precision and softness, making it feel distinctly personal rather than generic luxury.",
      },
    ],
    related: ["ponvizhi-pearl-studs", "shanthi-arch-haram"],
  },
  {
    slug: "ponvizhi-pearl-studs",
    name: "Ponvizhi Pearl Studs",
    collectionId: "everyday-classics",
    category: "Everyday heirloom studs",
    tagline: "Small gold-and-pearl studs that bring heirloom warmth into repeated daily wear.",
    image: getGalleryImage(5),
    gallery: [getGalleryImage(5), getGalleryImage(1), getGalleryImage(2)],
    story:
      "These studs are made for repetition, the kind that slowly turns an object into a personal signature. Their scale is modest, but the finish carries the same care as a ceremonial piece.",
    craftsmanship:
      "Pearl placement and gold edge thickness are considered closely so the studs feel present without tipping into fragility.",
    details: [
      { label: "Materials", value: "22K gold, natural pearls" },
      { label: "Motif", value: "Petal edge with pearl center balance" },
      { label: "Finish", value: "Smooth everyday polish" },
      { label: "Occasion", value: "Daily wear, gifting, understated layering" },
    ],
    chapters: [
      {
        title: "Intimacy of Scale",
        text: "This is a jewel designed to be reached for again and again, becoming part of a face, a routine, and a memory pattern.",
      },
      {
        title: "Careful Proportion",
        text: "The gold border is shaped to make the pearl feel luminous, not isolated, giving the piece quiet confidence.",
      },
      {
        title: "Know More",
        text: "Its lasting appeal lies in restraint. The finish is unhurried, the silhouette is composed, and the result feels deeply settled.",
      },
    ],
    related: ["veena-diamond-collar", "nilam-revival-bangles"],
  },
  {
    slug: "nilam-revival-bangles",
    name: "Nilam Revival Bangles",
    collectionId: "heritage-revivals",
    category: "Heirloom redesign bangles",
    tagline: "A revival pair that preserves antique language while easing the silhouette for modern wear.",
    image: getGalleryImage(2),
    gallery: [getGalleryImage(2), getGalleryImage(4), getGalleryImage(0)],
    story:
      "Nilam begins with the feeling of inherited bangles: weighty, symbolic, impossible to replace. This revival pair keeps that emotional density but softens the line for present-day comfort and styling.",
    craftsmanship:
      "Relief detailing, edge thickness, and inner curvature are all rebalanced by hand so the bangle feels archival in mood and contemporary in wear.",
    details: [
      { label: "Materials", value: "22K gold, rubies" },
      { label: "Motif", value: "Revived temple ridges and softened florals" },
      { label: "Finish", value: "Muted antique finish with smooth inner curve" },
      { label: "Occasion", value: "Family ceremonies, redesign commissions, collectors" },
    ],
    chapters: [
      {
        title: "Heirloom Without Stasis",
        text: "The piece proves that continuity does not require imitation. A revival can preserve spirit while changing form.",
      },
      {
        title: "Crafted for Wearing",
        text: "The inner profile is adjusted for comfort and longevity, ensuring the jewel returns to the body instead of remaining boxed away.",
      },
      {
        title: "Know More",
        text: "Its antique feel comes from patience, not surface treatment alone. Every softened ridge and measured ruby accent is part of that slow resolution.",
      },
    ],
    related: ["mylai-gopuram-choker", "ponvizhi-pearl-studs"],
  },
  {
    slug: "amudham-coin-long-haram",
    name: "Amudham Coin Long Haram",
    collectionId: "custom-commissions",
    category: "Commissioned long necklace",
    tagline: "A commissioned coin haram built around legacy motifs and portrait-worthy drape.",
    image: getGalleryImage(6),
    gallery: [getGalleryImage(6), getGalleryImage(3), getGalleryImage(1)],
    story:
      "Amudham was conceived for a client who wanted old coin language with greater softness and movement. The result is ceremonial, but with room for air, silk folds, and the individuality of the wearer.",
    craftsmanship:
      "The spacing between coin elements is tuned for drape, allowing the necklace to feel fluid rather than dense, while the detailing keeps the jewel unmistakably heritage-led.",
    details: [
      { label: "Materials", value: "22K gold, rubies, pearls" },
      { label: "Motif", value: "Coin sequence, floral medallions, layered drape" },
      { label: "Finish", value: "Warm ceremonial finish" },
      { label: "Occasion", value: "Commissions, wedding layers, legacy portraits" },
    ],
    chapters: [
      {
        title: "Commissioned Around Memory",
        text: "Its direction came from the client's emotional reference points rather than a predetermined catalogue form.",
      },
      {
        title: "Movement as Luxury",
        text: "Luxury here is not excess but ease: the way the necklace falls, frames, and remains comfortable through a long ceremonial day.",
      },
      {
        title: "Know More",
        text: "The piece opens slowly. First the coin rhythm, then the medallion detail, then the warmth of a finish made to feel storied from the beginning.",
      },
    ],
    related: ["shanthi-arch-haram", "nilam-revival-bangles"],
  },
];

export const getPieceBySlug = (slug) => pieces.find((piece) => piece.slug === slug);

export const getCollectionById = (id) => collections.find((collection) => collection.id === id);

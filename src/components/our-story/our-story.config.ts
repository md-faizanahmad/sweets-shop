// /lib/our-story.config.ts

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface ValueItem {
  title: string;
  text: string;
  icon: string;
}

export const OUR_STORY_CONFIG = {
  hero: {
    badge: "Est. 1948",
    title: "A Legacy Carved in",
    titleAccent: "Saffron & Gold.",
    description:
      "From a single copper vat in the heart of Chandni Chowk to a global celebration of Indian craftsmanship, our journey is seasoned with patience and sweetened by tradition.",
    image: "/about-img/shop.png", // Ensure these exist in /public
  },
  timeline: {
    heading: "Our Journey",
    items: [
      {
        year: "1948",
        title: "The First Flame",
        description: "Shri Ram Nath began with a signature Kesar Peda recipe.",
      },
      {
        year: "1982",
        title: "The Modern Patisserie",
        description: "Blending French techniques with Indian heritage.",
      },
      {
        year: "2024",
        title: "Global Presence",
        description: "Bringing authentic flavors to a global stage.",
      },
    ] as TimelineItem[],
  },
  values: [
    {
      title: "Purest Ingredients",
      text: "Organic A2 Ghee and hand-picked Kashmiri Saffron.",
      icon: "✦",
    },
    {
      title: "Time-Honored",
      text: "Slow-cooking methods used by our ancestors for 70 years.",
      icon: "🏺",
    },
    {
      title: "Modern Elegance",
      text: "Packaging that reflects the grace of contemporary India.",
      icon: "🎁",
    },
  ] as ValueItem[],
  craft: {
    heading: "Honoring the",
    headingAccent: "Art of the Halwai.",
    quote: "The secret is never the recipe, but the hand that stirs the pot.",
    description1:
      "Our kitchen is a sanctuary where time slows down. We use iron kadhai and slow-burning flames.",
    description2:
      "Every artisan in our team has spent decades perfecting the alchemy of milk and spice.",
    image: "/our-story/artisan-craft.png",
    cta: "View Our Process",
  },
  closing: {
    bgText: "Heritage",
    title: "From our family table,",
    titleAccent: "to yours.",
    description:
      "We invite you to experience the flavors that have defined our family for generations.",
    primaryCta: { label: "Explore the Menu", href: "/menu" },
    secondaryCta: { label: "Visit Our Restaurant", href: "/reservations" },
  },
};

// our-story.config.ts

export const OUR_STORY_CONFIG = {
  hero: {
    badge: "Est. 1948",
    title: "A Legacy Carved in",
    titleAccent: "Saffron & Gold.",
    description:
      "From a single copper vat in the heart of Chandni Chowk to a global celebration of Indian craftsmanship, our journey is seasoned with patience and sweetened by tradition.",
    image: "/images/hero-mithai.jpg",
  },
  timeline: {
    heading: "Our Journey",
    items: [
      {
        year: "1948",
        title: "The First Flame",
        description:
          "Our founder, Shri Ram Nath, began with a signature Kesar Peda recipe in a small corner of Old Delhi.",
        image: "/images/timeline-1.jpg",
      },
      {
        year: "1982",
        title: "The Modern Patisserie",
        description:
          "Blending French pastry techniques with traditional Indian flavors to create our award-winning fusion line.",
        image: "/images/timeline-2.jpg",
      },
      {
        year: "2024",
        title: "A Global Milestone",
        description:
          "Opening our flagship experience center in London, bringing authentic mithai to the world stage.",
        image: "/images/timeline-3.jpg",
      },
    ],
  },
  values: [
    {
      title: "Purest Ingredients",
      text: "Organic A2 Ghee and hand-picked Saffron from the valleys of Pampore.",
      icon: "✦",
    },
    {
      title: "Time-Honored",
      text: "We follow the slow-cooking methods used by our ancestors for over 70 years.",
      icon: "🏺",
    },
    {
      title: "Modern Elegance",
      text: "Our packaging and service reflect the grace of contemporary India.",
      icon: "🎁",
    },
  ],
  craft: {
    heading: "Honoring the",
    headingAccent: "Art of the Halwai.",
    quote: "The secret is never the recipe, but the hand that stirs the pot.",
    description1:
      "Our kitchen is a sanctuary where time slows down. We don't use industrial mixers; we use iron kadhai and slow-burning flames.",
    description2:
      "Every artisan in our team has spent decades perfecting the alchemy of milk, sugar, and spice. This is the preservation of India's edible heritage.",
    image: "/images/craftsman.jpg",
    cta: "View Our Process",
  },
  closing: {
    bgText: "Heritage",
    title: "From our family table,",
    titleAccent: "to yours.",
    description:
      "Thank you for being a part of our story. We invite you to experience the flavors that have defined our family for generations.",
    primaryCta: { label: "Explore the Menu", href: "/menu" },
    secondaryCta: { label: "Visit Our Restaurant", href: "/reservations" },
  },
};

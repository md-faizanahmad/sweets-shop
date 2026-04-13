export interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    link: string;
  };
  images: {
    src: string;
    alt: string;
  }[];
}

export const heroConfig: HeroConfig = {
  title: "Fresh Desi Mithai, Roz Bana Hua",
  subtitle: "Gulab Jamun, Kaju Katli, Rasmalai & More",
  description:
    "Shuddh ingredients se bana hua fresh mithai. WhatsApp par order kare aur turant pickup ya delivery paye.",

  cta: {
    text: "Order on WhatsApp",
    link: "https://wa.me/919999999999",
  },

  images: [
    {
      src: "/assets/bedam-pista.png",
      alt: "Badam and pista burfi squares with nut garnish",
    },
    {
      src: "/assets/g-jamun.png",
      alt: "Soft gulab jamun soaked in sugar syrup with glossy texture",
    },
    {
      src: "/assets/k-katli.png",
      alt: "Kaju katli with silver vark arranged in diamond shape",
    },
    {
      src: "/assets/k-peda.png",
      alt: "Khoya peda with pistachio garnish on traditional plate",
    },

    {
      src: "/assets/rash.png",
      alt: "Rasmalai soaked in saffron milk topped with pistachio",
    },
  ],
};

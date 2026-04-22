export type FooterLink = {
  label: string;
  href: string;
};

export type FooterConfig = {
  brand: string;
  description: string;
  links: FooterLink[];
  contact: {
    phone: string;
    whatsapp: string;
    location: string;
  };
};

export const footerConfig: FooterConfig = {
  brand: "KhusShop",
  description: "Fresh traditional sweets made daily with premium ingredients.",

  links: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/allproducts" },
    { label: "Our Story", href: "/our-story" },
    { label: "Contact", href: "/contact" },
  ],

  contact: {
    phone: "+91 99999 99999",
    whatsapp: "https://wa.me/919999999999",
    location: "Hyderabad, India",
  },
};

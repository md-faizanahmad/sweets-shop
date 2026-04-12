export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    price: "₹900/kg",
    image: "/products-image/kaju-katli.png",
    alt: "Kaju Katli traditional cashew sweet",
  },
  {
    id: "badam-pista",
    name: "Badam Pista",
    price: "₹1100/kg",
    image: "/products-image/bedam-pista.png",
    alt: "Badam Pista premium dry fruit sweet",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    price: "₹400/kg",
    image: "/products-image/gulab-jamun.png",
    alt: "Gulab Jamun soft syrup dessert",
  },
  {
    id: "khoya-peda",
    name: "Khoya Peda",
    price: "₹480/kg",
    image: "/products-image/khoya-peda.png",
    alt: "Khoya Peda milk-based sweet",
  },
  {
    id: "rasmalai",
    name: "Rasmalai",
    price: "₹420/kg",
    image: "/products-image/rashmalai.png",
    alt: "Rasmalai creamy milk dessert",
  },
];

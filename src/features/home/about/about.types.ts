export interface AboutElement {
  src: string;
  alt: string;
  size: number;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  title: {
    en: string;
    hi: string;
  };
  description: string;
  image: AboutImage;
  elements: AboutElement[];
  links: {
    story: string;
  };
}

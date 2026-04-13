export type LocationConfig = {
  embedUrl: string;
  directionsUrl: string;
  address: string;
};

export const locationConfig: LocationConfig = {
  embedUrl: "https://www.google.com/maps?q=Hyderabad&output=embed",

  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Hyderabad",

  address: "Hyderabad, India",
};

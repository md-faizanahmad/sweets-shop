export type LocationConfig = {
  name: string;
  address: string;
  location: {
    latitude: number;
    longitude: number;
  };
  directionsUrl: string;
};

export const locationConfig: LocationConfig = {
  name: "Kaveri Sweets",
  address: "G.B Road, Gaya, Bihar",
  location: {
    latitude: 24.7955,
    longitude: 85.0079,
  },
  // Deep link for Google Maps app
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=24.7955,85.0079",
};

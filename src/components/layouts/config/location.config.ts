export type LocationConfig = {
  embedUrl: string;
  directionsUrl: string;
  address: string;
};

export const locationConfig: LocationConfig = {
  // CORRECT EMBED FORMAT
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57904.38283626151!2d84.970104!3d24.7975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a440a370e83%3A0x40f3759494793740!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712850000000!5m2!1sen!2sin",

  // Directions link for mobile/button
  directionsUrl: "https://www.google.com/maps/dir//Gaya,+Bihar",

  address: "G.B Road Gaya, Bihar, India",
};

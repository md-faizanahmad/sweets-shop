export type LocationConfig = {
  embedUrl: string;
  directionsUrl: string;
  address: string;
};

export const locationConfig: LocationConfig = {
  // CORRECT EMBED FORMAT
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47392.47186792881!2d84.94079496870911!3d24.78331058896528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a440a1b3c1f%3A0xcef6b223bdbf34a6!2sGaya%2C%20Bihar!5e1!3m2!1sen!2sin!4v1776430570215!5m2!1sen!2sin",

  // Directions link for mobile/button
  directionsUrl: "https://www.google.com/maps/dir//Gaya,+Bihar",

  address: "G.B Road Gaya, Bihar, India",
};

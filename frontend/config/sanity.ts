import sanityClient from "@sanity/client";
// require("dotenv").config()
export const client = sanityClient({
  projectId: "taki18de",
  dataset: "production",
  useCdn: true, // use the Content Delivery Network, for faster response times
});

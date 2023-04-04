import { sanityClient } from "@sanity/client";

export const client = sanityClient({
  projectId: "taki18de",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-04",
});

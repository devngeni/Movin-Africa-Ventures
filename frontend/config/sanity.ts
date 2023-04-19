import { createClient, ClientConfig } from "@sanity/client";

const clientConfig: ClientConfig = {
  projectId: "yourProjectId",
  dataset: "yourDataset",
  useCdn: true, // or false if you want to use the live dataset
};

const sanityClient = createClient(clientConfig);

export default sanityClient;

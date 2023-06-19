import Index from "@/components/Index";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movin Africa Ventures</title>
        <meta
          name="description"
          content="Fueling Growth and Innovations While Creating Opportunities For Young, Innovative, Vibrant Minds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Index />
      </main>
    </>
  );
}

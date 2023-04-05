import Head from "next/head";
import { ReactNode } from "react";
interface Homeinterface {
  children: ReactNode;
}
import styles from "@/styles/Hero.module.css";
import { Navbar } from "@/components/Landing";

export default function HomeLayout({ children }: Homeinterface) {
  return (
    <>
      <Head>
        <title>Moving Africa</title>
        <meta name="description" content="moving ventures africa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.home_page}>{children}</main>
    </>
  );
}

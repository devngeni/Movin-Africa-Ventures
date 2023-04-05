import Head from "next/head";
import { ReactNode } from "react";
interface Homeinterface {
  children: ReactNode;
}
import styles from "@/styles/Hero.module.css";

export default function HomeLayout({ children }: Homeinterface) {
  return (
    <>
      <Head>
        <title>Moving Africa</title>
        <meta name="description" content="moving ventures africa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home_page}>{children}</main>
    </>
  );
}

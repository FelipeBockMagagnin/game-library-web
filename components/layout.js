import Head from "next/head";
import Navbar from "./landing/navbar";

export default function Layout({ children, home = false }) {
    console.log(home)
    return (
      <>
        <Head>
          <title>Game Library - Free game collection manager</title>
          <meta
            name="description"
            content="Free game collection manager"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar home={home} />
        
        {children}
      </>
    );
  }
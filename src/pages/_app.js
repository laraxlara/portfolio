import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lara Celic</title>
        <link rel="shortcut icon" href="../../public/L.png" />
        <meta
          name="description"
          content="I'm a front-end web developer who designs and develops unique, accessible, and user-friendly websites that convert visitors into customers and make businesses grow."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ricardo, Software engineer</title>
        <meta
          name="description"
          content="Ricardo, software engineer personal site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="safe-top safe-left safe-right safe-bottom">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

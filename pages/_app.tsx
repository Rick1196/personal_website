import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header";
import Head from "next/head";
import { useState } from "react";
import { ThemeModeContext } from "../utils/contexts";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  return (
    <>
      <Head>
        <title>Ricardo, Software engineer</title>
        <meta
          name="description"
          content="Ricardo, software engineer personal site"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`safe-top safe-left safe-right safe-bottom ${
          darkModeEnabled ? "dark" : ""
        }`}
      >
        <Header
          setDarkModeEnabled={setDarkModeEnabled}
          darkModeEnabled={darkModeEnabled}
        />
        <ThemeModeContext.Provider value={{ darkModeEnabled }}>
          <main className="dark:bg-gray-900 min-h-screen">
            <Component {...pageProps} />
          </main>
        </ThemeModeContext.Provider>
        <Footer />
      </div>
    </>
  );
}

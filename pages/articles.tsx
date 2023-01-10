import { XMLParser } from "fast-xml-parser";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { DevFeed } from "../types/feed";

export default function Articles({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(articles);
  return <></>;
}

export async function getStaticProps() {
  const xmlData = await (await fetch("https://dev.to/feed/rick1196")).text();
  const parser = new XMLParser();
  const articles: DevFeed = parser.parse(xmlData);

  return {
    props: {
      articles,
    },
    revalidate: 10,
  };
}

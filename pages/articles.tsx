import { XMLParser } from "fast-xml-parser";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import React from "react";
import Card from "../components/card";
import { DevFeed } from "../types/feed";

export default function Articles({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    // TODO: make responsive this view
    <main className="h-view">
      <Link href={articles.rss.channel.link} target="_blank">
        <h1 className="text-center w-full mt-6 mb-6 text-2xl dark:text-white">
          {articles.rss.channel.description}
        </h1>
      </Link>
      <div className="flex flex-row gap-6">
        <div className="min-w-[30%] max-w-[30%] p-4">Categories</div>
        <div className="flex flex-col gap-4 min-w-[60%] max-w-[60%]">
          {articles.rss.channel.item.map((article, index) => (
            <Card key={article.title}>
              <div className="flex flex-col gap-4">
                <h1 className="text-left w-full md:text-xl text-l dark:text-white">
                  {article.title}
                </h1>
                <div className="flex flex-row justify-end gap-2">
                  <button
                    className="border rounded p-2 dark:text-white"
                    aria-label="read on dev.to"
                  >
                    Read on Dev.to
                  </button>
                  <button
                    className="border rounded p-2 dark:text-white"
                    aria-label="read here"
                  >
                    Read here
                  </button>
                </div>
                <div className="flex flex-row gap-2">
                  {article.category
                    ? article.category.map((tag, tagIndex) => (
                        <span
                          key={`${index}_${tag}_${tagIndex}`}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-grey-800"
                        >
                          {tag}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
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

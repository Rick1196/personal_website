//@ts-nocheck

"use client"
import Card from "@/components/card";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArticlesView({
  articles,
  categories,
}: { articles: Object[], categories: any[] }) {
  const [query, setQuery] = useState<string | null>(null);
  const [filteredArticles, setFilteredArticles] = useState(
    articles?.rss.channel.item || []
  );

  useEffect(() => {
    if (query) {
      setFilteredArticles(
        articles?.rss.channel.item.filter((article) =>
          article?.category?.includes(query)
        )
      );
    }
  }, [query, articles]);

  return articles ? (
    <div className="flex flex-col span-2">
      <Link href={articles.rss.channel.link} target="_blank">
        <h1 className="text-center w-full mt-6 mb-6 text-2xl dark:text-white">
          {articles.rss.channel.description}
        </h1>
      </Link>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex md:flex-col flex-row flex-wrap md:min-w-[30%] md:max-w-[30%] p-4 gap-4">
          <h1 className="text-center w-full p-2 text-xl dark:text-white">
            Categories
          </h1>
          <div className="flex md:flex-col md:flex-row flex-wrap gap-4">
            <button
              onClick={() => {
                setQuery(null);
                setFilteredArticles(articles.rss.channel.item);
              }}
              key={`clear_filter`}
              className={`rounded p-2 dark:shadow-darkButton shadow-button dark:text-white border`}
              aria-label={`clear filter`}
            >
              Clear filter
            </button>
            {Object.values(categories).map((category) => (
              <button
                onClick={() => setQuery(category.tag)}
                key={`filter_by_${category.tag}`}
                className={`flex flex-row items-center justify-center gap-2 rounded p-2 dark:shadow-darkButton shadow-button ${query === category.tag
                  ? "bg-gray-500 black dark:bg-white border-gray-500"
                  : "border"
                  }`}
                aria-label={`filter ${category.tag}`}
              >
                <span
                  className={`w-full text-gray-800 ${query === category.tag
                    ? "dark:text-grey-800"
                    : "dark:text-white"
                    }`}
                >
                  {category.tag}
                </span>
                <span className="shadow-bullet bg-blue-100 rounded p-1">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 md:min-w-[60%] md:max-w-[60%] p-2">
          {filteredArticles.map((article, index) => (
            <Card key={article.title}>
              <div className="flex flex-col gap-4">
                <h1 className="text-left w-full md:text-xl text-l dark:text-white">
                  {article.title}
                </h1>
                <div className="flex flex-row justify-end gap-2">
                  <Link href={article.link} target="_blank">
                    <button
                      className="border rounded p-2 dark:text-white shadow-button dark:shadow-darkButton"
                      aria-label="read on dev.to"
                    >
                      Read on Dev.to
                    </button>
                  </Link>
                </div>
                <div className="flex flex-row gap-2">
                  {article.category
                    ? article.category.map((tag, tagIndex) => (
                      <span
                        key={`${index}_${tag}_${tagIndex}`}
                        className="shadow-bullet bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-grey-800"
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
    </div>
  ) : <div>Loading...</div>;
}
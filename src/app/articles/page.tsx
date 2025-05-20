import React from "react";

import ArticlesView from "../../../views/articles";
import { preload } from "../../../views/articles/server-side";
import api from "../../../utils/api";

export default async function Articles() {
  preload();
  const { articles, categories } = await api.getArticles();
  return <ArticlesView articles={articles} categories={categories} />
}
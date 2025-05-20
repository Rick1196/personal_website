import React from "react";

import ArticlesView, { preload } from "../../../views/articles";
import api from "../../../utils/api";

export default async function Articles() {
  preload();
  const { articles, categories } = await api.getArticles();
  return <ArticlesView articles={articles} categories={categories} />
}
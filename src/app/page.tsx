import React from "react";

import api from "../../utils/api";
import { HomeView, preload } from "../../views/home";

export default async function Home() {
  preload();
  const { facts, experiences } = await api.getResumeData();
  return (
    <HomeView experiences={experiences} facts={facts} />
  );
}

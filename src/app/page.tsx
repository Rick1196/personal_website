import React from "react";

import api from "../../utils/api";
import { HomeView } from "../../views/home";
import { preload } from "../../views/home/server-side";

export default async function Home() {
  preload();
  const { facts, experiences } = await api.getResumeData();
  return (
    <HomeView experiences={experiences} facts={facts} />
  );
}

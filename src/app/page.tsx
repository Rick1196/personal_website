import React from "react";

import api from "../../utils/api";
import { HomeView } from "../../views/home";

export const preload = () => {
  void api.getResumeData();
}

export default async function Home() {
  const { facts, experiences } = await api.getResumeData();
  return (
    <HomeView experiences={experiences} facts={facts} />
  );
}

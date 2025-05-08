import { InferGetStaticPropsType } from "next";
import { Experience, Fact } from "../types";
import { client } from "../utils/sanityClient";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PDFResumeView from "./pdf-resume";
import api from "../utils/api";

export const preload = () => {
  void api.getResumeData();
};

export default async function PDFResume() {
  const data = await api.getResumeData();
  console.log("debug", data);
  return <div>meh</div>;
  //   return <PDFResumeView experiences={experiences} facts={facts}/>;
}

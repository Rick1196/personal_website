import PDFResumeView from "../../../views/pdf-resume";
import api from "../../../utils/api";
import { preload } from "../../../views/pdf-resume/server-side";

export default async function PDFResume() {
  preload()
  const { facts, experiences } = await api.getResumeData();
  return <PDFResumeView experiences={experiences} facts={facts} />
}


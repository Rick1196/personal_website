import PDFResumeView, { preload } from "../../../views/pdf-resume";
import api from "../../../utils/api";

export default async function PDFResume() {
  preload()
  const { facts, experiences } = await api.getResumeData();
  return <PDFResumeView experiences={experiences} facts={facts} />
}


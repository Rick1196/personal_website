import PDFResumeView from "../../../views/pdf-resume";
import api from "../../../utils/api";

export const preload = () => {
  void api.getResumeData();
}

export default async function PDFResume() {
  const { facts, experiences } = await api.getResumeData();
  return <PDFResumeView experiences={experiences} facts={facts} />
}


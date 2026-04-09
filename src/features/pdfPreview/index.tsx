import { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import "./index.css";


const PDF_URL = 'https://2im8l90jceab7by0.public.blob.vercel-storage.com/Ricardo_Manuel_Perez_Plata_CV.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function PDFPreview() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [loadError, setLoadError] = useState<string | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setLoadError(null);
        setNumPages(numPages);
    }

    function onDocumentLoadError(error: Error): void {
        setLoadError(error.message);
    }

    return (
        <section className="pdf-preview">
            <a
                className="pdf-preview__download"
                href={PDF_URL}
                download="Ricardo_Manuel_Perez_Plata_CV.pdf"
                target="_blank"
                rel="noreferrer"
            >
                Download PDF
            </a>
            <Document
                file={PDF_URL}
                loading={<p>Loading PDF...</p>}
                error={<p>Unable to load the PDF document.</p>}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
            >
                <Page pageNumber={pageNumber} width={900} />
            </Document>
            <div className="pdf-preview__footer">
                <button
                    className="pdf-preview__control"
                    type="button"
                    onClick={() => setPageNumber((current) => Math.max(current - 1, 1))}
                    disabled={pageNumber <= 1}
                >
                    Previous
                </button>
                <p>
                    Page {pageNumber} of {numPages || "--"}
                </p>
                <button
                    className="pdf-preview__control"
                    type="button"
                    onClick={() => setPageNumber((current) => Math.min(current + 1, numPages))}
                    disabled={!numPages || pageNumber >= numPages}
                >
                    Next
                </button>
            </div>
            {loadError ? <p className="pdf-preview__error">{loadError}</p> : null}
        </section>
    );
}

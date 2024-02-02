"use client";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <main className="container mx-auto min-h-[calc(100vh-107.625px)] lg:min-h-[calc(100vh-123.625px)]">
      <div className="flex flex-col py-7">
        <button className="bg-lime-400 hover:bg-lime-100 text-gray-800 font-bold py-2 px-4 mx-auto mb-7 rounded inline-flex items-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a target="_blank" href="/DarioTurin-01-2024.pdf">
            Download
          </a>
        </button>
        <Document
          file="/DarioTurin-01-2024.pdf"
          className="flex justify-center"
        >
          <Page
            renderTextLayer={false}
            renderAnnotationLayer={false}
            pageNumber={1}
            scale={
              width < 540
                ? 0.4
                : width < 720
                ? 0.549
                : width < 960
                ? 0.7335
                : width < 1140
                ? 0.978
                : 1.162
            }
          />
        </Document>
        <button className="bg-lime-400 hover:bg-lime-100 text-gray-800 font-bold py-2 px-4 mx-auto mt-7 rounded inline-flex items-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <a target="_blank" href="/DarioTurin-01-2024.pdf">
            Download
          </a>
        </button>
      </div>
    </main>
  );
}

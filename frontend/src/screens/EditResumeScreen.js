import React, { useState } from "react";
import Education from "../components/Education";
import JobHistory from "../components/JobHistory";
import PersonalInfo from "../components/PersonalInfo";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import Socials from "../components/Socials";
import { pdfjs, Document, Page, Text } from "react-pdf";
import samplePDF from "../sample.pdf";
import Adder from "../components/Adder";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const EditResumeScreen = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(
    window.innerWidth < 768 ? 0.4 : 0.85
  );

  React.useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      if (window.innerWidth < 768) {
        setPageScale(0.4);
      } else {
        setPageScale(0.85);
      }
    }

    window.addEventListener("resize", handleResize);
  });
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="container">
      <div id="editor">
        <form className="form">
          <PersonalInfo />
          <Profile />
          <Adder type={"עבר תעסוקתי"} />
          <Adder type={"השכלה"} />
          <Adder type={"רשת חברתית"} />
          <Adder type={"מיומנות"} />

          <button>ok</button>
        </form>
      </div>
      <div id="preview">
        <div className="document">
          <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page scale={pageScale} pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  );
};

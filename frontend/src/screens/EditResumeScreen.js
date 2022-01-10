import React, { useEffect, useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import Profile from "../components/Profile";
import { pdfjs, Document, Page } from "react-pdf";
import samplePDF from "../sample.pdf";
import Adder from "../components/Adder";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const EditResumeScreen = () => {
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(
    window.innerWidth < 768 ? 0.4 : 0.85
  );
  const [isClicked, setIsClicked] = useState(false);

  const clicked = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (userInfo) {
      function handleResize() {
        if (window.innerWidth < 768) {
          setPageScale(0.4);
        } else {
          setPageScale(0.85);
        }
      }

      window.addEventListener("resize", handleResize);
    } else {
      navigate("/");
    }
    return () => {
      setPageScale(0);
    };
  }, [navigate, setPageScale, userInfo]);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="main-container">
      <div id="editor">
        <form className="form">
          <PersonalInfo />
          <Profile />
          <Adder type={"עבר תעסוקתי"} />
          <Adder type={"השכלה"} />
          <Adder type={"רשת חברתית"} />
          <Adder type={"מיומנות"} />
          <button type="button" onClick={() => clicked()}>
            ok
          </button>
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

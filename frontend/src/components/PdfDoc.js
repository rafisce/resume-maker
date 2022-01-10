import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const PdfDoc = (props) => {
  const { document } = props;
  return (
    <div key={document._id} className="card_">
      <Link to={`/document/${document._id}`}>
        <img className="medium" src={document.image} alt={document.name} />
      </Link>
      <div className="card-body">
        <div style={{ fontSize: "2.0rem", color: "blue", padding: "0 1rem" }}>
          {document.name}
        </div>
        <div style={{ fontSize: "1.5rem", color: "blue", padding: "0 0.5rem" }}>
          {moment(new Date(document.createdAt), "LLLL", "he").format(
            "HH:mm DD/MM/YYYY"
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfDoc;

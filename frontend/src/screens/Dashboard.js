import React from "react";
import data from "../data";
import PdfDoc from "../components/PdfDoc";

const Dashboard = () => {
  return (
    <div className="dash">
      <div className="rowdoc center">
        {data.documents.map((doc) => (
          <PdfDoc key={doc._id} document={doc}></PdfDoc>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

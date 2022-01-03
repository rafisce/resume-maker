import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditResumeScreen } from "./screens/EditResumeScreen";

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="grid-container">
        <Routes>
          <Route path="/" element={<EditResumeScreen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

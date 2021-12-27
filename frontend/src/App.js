import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { EditResumeScreen } from "./screens/EditResumeScreen";

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Freesume
            </Link>
          </div>
          <div>
            <Link to="/sighin">התחבר</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<EditResumeScreen />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

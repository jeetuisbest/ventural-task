import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listing from "./components/Listing"; 
import Detail from "./components/Detail";   
import ErrorBoundary from "./ErrorBoundry";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<Listing />} />
            <Route path="/ipo/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;

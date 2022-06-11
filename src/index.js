import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.js";
import Posts from "./component/Posts.jsx";
import About from "./Pages/About.jsx";
import { FeedbackProvider } from "./component/FeedbackContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FeedbackProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/posts/:id" element={ <Posts/> } />
        </Routes>
    </BrowserRouter>
  </FeedbackProvider>
);

import React, { useContext } from "react";

import Heading from "./component/Heading";

import FeedBackList from "./component/FeedBackList";

import "./App.css";

import FeedBackStats from "./component/shared/FeedBackStats";

import FeedBackForm from "./component/FeedBackForm";

import { Link } from "react-router-dom";

import { FaQuestion } from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

import FeedbackContext from "./component/FeedbackContext";










function App() {
  const { handelDeleteFromParent2, addFeedback2 } = useContext(FeedbackContext);

  const handelDeleteFromParent = (id, c) => {
    handelDeleteFromParent2(id, c);
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    addFeedback2(newFeedback);
  };

  return (
    <>
      <p className="aboutLink">
        <Link to="/about">
          <FaQuestion size={30}></FaQuestion>
        </Link>
      </p>

      <Heading />
      <FeedBackForm handeladd={addFeedback} />
      <FeedBackStats />
      <FeedBackList handelDeleteChild={handelDeleteFromParent} />
    </>
  );
}

export default App;

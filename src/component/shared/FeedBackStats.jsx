import React,{useContext} from "react";
import FeedbackContext from "../FeedbackContext";

import PropTypes from "prop-types";

function FeedBackStats() {

  const {value} = useContext(FeedbackContext);

  let average =
    value.reduce((acc, curr) => {
      let rate = parseInt(curr.rating)
      return acc + rate;
    }, 0) / value.length;

  average = average.toFixed(1);
 

  return (
    <div className="stats">
      <div className="length">{value.length}: Reviews</div>
      <div className="average">Average: {average}</div>
    </div>
  );
}

FeedBackStats.protoTypes = {
   value: PropTypes.array,
};

export default FeedBackStats;

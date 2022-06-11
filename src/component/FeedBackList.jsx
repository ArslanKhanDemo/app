import CardTemplate from "./shared/cardTemplate";
import { FaTimes, FaEdit } from "react-icons/fa";
import React, { useContext } from "react";
import FeedbackContext from "./FeedbackContext";

function FeedBackList({ handelDeleteChild }) {
  const {value,feedbackEdit} = useContext(FeedbackContext);

  const handelDelete = (id,value) => {
    console.log("form list",value);
    handelDeleteChild(id,value);
  };

  return (
    <>
      <ul>
        {value.map((data, index) => (
          <CardTemplate key={index} data={data}>
            <div className="number">{data.rating}</div>
            <div className="text">{data.text}</div>
            <FaTimes
              className="close"
              onClick={() => {
                handelDelete(data.id,value);
              }}
            ></FaTimes>
            <FaEdit
              className="close"
              onClick={() => {
                console.log("Edit Pushed");
                feedbackEdit(data);
              }}
            ></FaEdit>
          </CardTemplate>
        ))}
      </ul>
    </>
  );
}

export default FeedBackList;

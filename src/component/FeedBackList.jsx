import CardTemplate from "./shared/cardTemplate";
import { FaTimes, FaEdit } from "react-icons/fa";
import React, { useContext } from "react";
import FeedbackContext from "./FeedbackContext";
import Loading from "./shared/Loading";

function FeedBackList({ handelDeleteChild }) {
  const { value, feedbackEdit, isLoading } = useContext(FeedbackContext);

  const handelDelete = (id, value) => {
    console.log("form list", value);
    handelDeleteChild(id, value);
  };

  if (!isLoading && (!value || value.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <ul>
        {value.map((data, index) => (
          <CardTemplate key={index} data={data}>
            <div className="number">{data.rating}</div>
            <div className="text">{data.text}</div>
            <FaTimes
              className="close"
              onClick={() => {
                handelDelete(data.id, value);
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

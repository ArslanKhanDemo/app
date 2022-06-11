import React, { useState, useEffect, useContext } from "react";
import Card from "./shared/cardTemplate";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./FeedbackContext";
function FeedBackForm({ data, handeladd }) {
  const { editFeedback, updateItem } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);
  const [message, setMessage] = useState("");
  const [version, setVersion] = useState("red");
  const [rating, setRating] = useState("10");

  useEffect(() => {
    if (editFeedback.edit === true) {
      setDisable(true);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);

  var textChanger = (val) => {
    console.log(`The Value from input:${val.target.value}`);
    if (text === "") {
      setDisable(true);
      setMessage(null);
      setVersion("red");
    } else if (text !== "" && text.trim().length <= 1) {
      setDisable(true);
      setMessage("Text must be 2 charactor long");
    } else {
      setMessage(null);
      setDisable(false);
      setVersion("green");
    }
    setText(val.target.value);
  };

  const handelFeedback = (e) => {
    e.preventDefault();
    if (text.trim().length > 1) {
      console.log("FeedBackForm:" + typeof rating);
      const newFeedback = {
        text,
        rating,
      };

      if (editFeedback.edit === true) {
        updateItem(editFeedback.item.id, newFeedback);
      } else {
        handeladd(newFeedback, data);
      }
      setText("");
    }
  };

  return (
    <Card>
      <form className="forms" onSubmit={handelFeedback}>
        <h3>Please Rate Our Services.</h3>

        <input
          type="text"
          placeholder="Review"
          onChange={textChanger}
          value={text}
        />
        <Button type="submit" isDisable={disable} version={version}>
          SEND
        </Button>
        {message && <p>{message}</p>}
        <RatingSelect
          select={(rating) => {
            let Rating = parseInt(rating.target.value);
            console.log("Rating:" + typeof Rating);
            setRating(Rating);
          }}
        />
      </form>
    </Card>
  );
}

export default FeedBackForm;

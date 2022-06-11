import React, { useState, useEffect, useContext } from "react";
import FeedbackContext from "./FeedbackContext";


function RatingSelect({ select }) {
  const [selected, setSelected] = useState("10");
  const {editFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
    setSelected(editFeedback.item.rating);
  },[editFeedback]);


  let handelChange = (val) => {
    setSelected(+val.target.value);
    select(val);
  };

  return (
    <ol className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handelChange}
          checked={selected === 1}
        />
        <label htmlFor="num1"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          value="2"
          onChange={handelChange}
          checked={selected === 2}
        />
        <label htmlFor="num2"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handelChange}
          checked={selected === 3}
        />
        <label htmlFor="num3"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handelChange}
          checked={selected === 4}
        />
        <label htmlFor="num4"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handelChange}
          checked={selected === 5}
        />
        <label htmlFor="num5"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handelChange}
          checked={selected === 6}
        />
        <label htmlFor="num6"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handelChange}
          checked={selected === 7}
        />
        <label htmlFor="num7"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handelChange}
          checked={selected === 8}
        />
        <label htmlFor="num8"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handelChange}
          checked={selected === 9}
        />
        <label htmlFor="num9"></label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handelChange}
          checked={selected === 10}
        />
        <label htmlFor="num10 "></label>
      </li>
    </ol>
  );
}

export default RatingSelect;

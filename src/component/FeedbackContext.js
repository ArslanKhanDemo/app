import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [value, setValue] = useState([
    {
      id: uuidv4(),
      text: "Feedback from Context 0",
      rating: 0,
    },
    {
      id: uuidv4(),
      text: "Feedback from Context 1",
      rating: 1,
    },
    {
      id: uuidv4(),
      text: "Feedback from Context 2",
      rating: 2,
    },
  ]);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  //////////////////////////

  const handelDeleteFromParent2 = (id, value) => {
    let contextData2 = value.filter((val) => {
      return val.id !== id;
    });
    setValue(contextData2);
  };

  //////////////////////////

  const addFeedback2 = (newFeedback) => {
    console.log("addFeedback2 context:", value);
    setValue([...value, newFeedback]);
  };

  ////////////////////////
  const feedbackEdit = (item) => {
    setEditFeedback({
      item: item,
      edit: true,
    });
  };
  ////////////////////////////////////////
  const updateItem = (id, udtItem) => {
    setValue(
      value.map((val) => (val.id === id ? { ...val, ...udtItem } : val))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        value,
        handelDeleteFromParent2,
        addFeedback2,
        feedbackEdit,
        editFeedback,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
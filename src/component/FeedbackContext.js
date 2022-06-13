import { useState, createContext, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  /* setiing the initial value from json-server --- STARTS */
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setValue(data);
    setIsLoading(false);
  };

  
  /* setiing the initial value from json-server --- END */

  
  
  
  
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

        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

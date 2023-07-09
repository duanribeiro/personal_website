import { createContext, useReducer } from "react";

const MyContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer);

  return (
    <MyContext.Provider value={(state, dispatch)}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };

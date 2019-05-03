import { handleActions } from "redux-actions";
import { setCheckbox, setInput } from "../actions/app";

const initialState = {
  checked: false,
  inputValue: "Text"
};

const appReducer = handleActions(
  {
    [setCheckbox]: (state, action) => ({
      ...state,
      checked: action.payload
    }),
    [setInput]: (state, action) => ({
      ...state,
      inputValue: action.payload
    })
  },
  initialState
);

export default appReducer;

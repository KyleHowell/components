import { handleActions } from "redux-actions";
import { setCheckbox } from "../actions/app";

const initialState = {
  checked: false
};

const appReducer = handleActions(
  {
    [setCheckbox]: (state, action) => ({
      ...state,
      checked: action.payload
    })
  },
  initialState
);

export default appReducer;
